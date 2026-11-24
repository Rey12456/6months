(() => {
  const G = window.GIFT, items = G.items, N = items.length;
  const $ = (s) => document.querySelector(s);
  const pad = (n) => String(n).padStart(2, "0");

  // ---- static text ----
  document.title = `${G.title} — ${G.subtitle}`;
  $("#brandText").textContent = G.title.toUpperCase();
  $("#letterText").textContent = G.letter;
  $("#sign").textContent = `${G.from} · ${G.to}`.toUpperCase();
  $("#footFrom").textContent = G.subtitle.toUpperCase();
  $("#line").innerHTML = G.journey.map(j =>
    `<div class="stop"><div class="m">${j.month}</div><h4>${j.label}</h4><p>${j.text}</p></div>`).join("");

  // days together
  const days = Math.floor((Date.now() - new Date(G.since + "T00:00:00")) / 864e5);
  const sd = new Date(G.since + "T00:00:00");
  $("#since").innerHTML = `[ OFFICIAL SINCE ${sd.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }).toUpperCase()} · <b>${days} DAYS</b> ]`;

  // London clock
  const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: G.timezone });
  const tick = () => $("#clock").textContent = fmt.format(new Date());
  tick(); setInterval(tick, 15000);

  // ---- cover builder (photo, with Tube-roundel placeholder behind it) ----
  const roundel = (c) => `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="34" fill="none" stroke="#fff" stroke-width="11"/><rect x="2" y="41" width="96" height="18" fill="${c === "#000000" ? "#DC241F" : "#0019A8"}"/><text x="50" y="54.6" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="9" fill="#fff" letter-spacing="1.2">LONDON</text></svg>`;
  function cover(it, i) {
    const el = document.createElement("div");
    el.className = "cover";
    el.style.setProperty("--c", it.line);
    el.innerHTML = `<div class="ph">
        <div class="no">No. ${pad(i + 1)}</div>${roundel(it.line)}
        <div><div class="nm">${it.title}</div><div class="st">${it.place}</div></div></div>`;
    const img = new Image();
    img.alt = `${it.title} — ${it.place}`;
    img.onload = () => { el.classList.add("has-img"); el.prepend(img); };
    img.src = it.src;
    return el;
  }

  // ---- carousel ----
  const stage = $("#stage");
  const books = items.map((it, i) => {
    const b = document.createElement("div");
    b.className = "book";
    b.appendChild(cover(it, i));
    stage.appendChild(b);
    return b;
  });

  let pos = 0, target = 0, dragging = false, moved = 0, lastX = 0, vel = 0, idle = 0;
  const wrap = (d) => ((d + N / 2) % N + N) % N - N / 2;
  const cur = () => ((Math.round(target) % N) + N) % N;

  function render() {
    const w = books[0].offsetWidth;
    const gap = w * 1.12;
    books.forEach((b, i) => {
      const d = wrap(i - pos), a = Math.abs(d);
      const x = d * gap;
      const ry = Math.max(-1, Math.min(1, -d)) * Math.min(a, 1) * 38;   // fan inward
      const z = -Math.min(a, 3) * 140;
      const s = 1 - Math.min(a, 3) * 0.04;
      b.style.transform = `translate3d(${x}px,0,${z}px) rotateY(${ry}deg) scale(${s})`;
      b.style.opacity = a > 3.6 ? 0 : 1 - Math.max(0, a - 1) * 0.28;
      b.style.zIndex = 100 - Math.round(a * 10);
      b.style.pointerEvents = a > 3.6 ? "none" : "auto";
    });
  }

  let lastIdx = -1;
  function updateCaption() {
    const i = cur();
    if (i === lastIdx) return;
    lastIdx = i;
    const it = items[i], c = $("#caption");
    c.style.opacity = 0;
    setTimeout(() => {
      $("#capTitle").textContent = it.title;
      $("#capMeta").textContent = `${it.place} · ${it.date}`;
      $("#counter").innerHTML = `<b>${pad(i + 1)}</b> / ${pad(N)}`;
      c.style.opacity = 1;
    }, 120);
  }
  $("#caption").style.transition = "opacity .2s";

  function loop() {
    if (!dragging) {
      if (Math.abs(vel) > 0.0005) { target += vel; vel *= 0.92; }
      else if (Math.abs(vel) > 0) { vel = 0; target = Math.round(target); }
    }
    pos += (target - pos) * 0.12;
    if (Math.abs(target - pos) < 0.0004) pos = target;
    render(); updateCaption();
    requestAnimationFrame(loop);
  }

  const go = (n) => { vel = 0; target = Math.round(target) + n; };
  const goTo = (i) => { vel = 0; target = Math.round(target) + wrap(i - cur()); };

  // pointer drag
  stage.addEventListener("pointerdown", (e) => {
    dragging = true; moved = 0; lastX = e.clientX; vel = 0;
    stage.classList.add("drag");
  });
  window.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - lastX; lastX = e.clientX; moved += Math.abs(dx);
    const per = books[0].offsetWidth * 1.12;
    target -= dx / per; pos = target; vel = -dx / per * 0.6;
  });
  window.addEventListener("pointerup", () => {
    if (!dragging) return;
    dragging = false; stage.classList.remove("drag");
    target = Math.round(target + vel * 8); vel = 0;
  });
  // click a book
  books.forEach((b, i) => b.addEventListener("click", () => {
    if (moved > 6) return;
    i === cur() ? openViewer(i) : goTo(i);
  }));
  // wheel
  let wheelLock = 0;
  stage.addEventListener("wheel", (e) => {
    e.preventDefault();
    const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    target += d / 420; vel = 0;
    clearTimeout(wheelLock);
    wheelLock = setTimeout(() => target = Math.round(target), 140);
  }, { passive: false });

  // ---- viewer ----
  const V = $("#viewer"); let vi = 0;
  function fillViewer(i) {
    vi = i; const it = items[i];
    $("#vPhoto").replaceChildren(cover(it, i));
    $("#vPlace").textContent = `[ ${it.place} ]`;
    $("#vTitle").textContent = it.title;
    $("#vNote").textContent = it.note;
    $("#vDate").textContent = it.date;
    const LINES = { "#DC241F": "Central Line", "#0019A8": "Piccadilly Line", "#E86A10": "Overground", "#007229": "District Line", "#000000": "Northern Line", "#6950A1": "Elizabeth Line", "#9B0058": "Metropolitan Line", "#00A4A7": "Victoria Line", "#84B817": "Circle Line" };
    $("#vLine").textContent = (LINES[it.line] || "Tube").toUpperCase();
    $("#vIndex").textContent = `${pad(i + 1)} OF ${pad(N)}`;
  }
  function openViewer(i) { fillViewer(i); V.classList.add("on"); V.setAttribute("aria-hidden", "false"); }
  function closeViewer() { V.classList.remove("on"); V.setAttribute("aria-hidden", "true"); goTo(vi); }
  $("#openBtn").onclick = () => openViewer(cur());
  $("#close").onclick = closeViewer;
  $("#prev").onclick = () => fillViewer((vi - 1 + N) % N);
  $("#next").onclick = () => fillViewer((vi + 1) % N);

  window.addEventListener("keydown", (e) => {
    const open = V.classList.contains("on");
    if (e.key === "Escape") open ? closeViewer() : document.getElementById("library").scrollIntoView();
    if (e.key === "ArrowRight") open ? $("#next").click() : go(1);
    if (e.key === "ArrowLeft") open ? $("#prev").click() : go(-1);
    if ((e.key === "Enter") && !open && document.activeElement === document.body) openViewer(cur());
  });

  // nav
  document.querySelectorAll("[data-go]").forEach(b => b.onclick = () => document.getElementById(b.dataset.go).scrollIntoView());
  $("#brand").onclick = (e) => { e.preventDefault(); scrollTo({ top: 0 }); };

  // gentle intro: sweep in
  pos = -2.5; target = 0;
  requestAnimationFrame(loop);
})();
