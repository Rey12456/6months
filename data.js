// ============================================================
//  EDIT ME — everything personal lives in this file.
//  1. Drop your photos into /photos (portrait works best, ~2:3)
//  2. Update `src`, `title`, `place`, `date`, `note` for each one.
//  Photos that aren't found fall back to a Tube-roundel placeholder.
// ============================================================

window.GIFT = {
  title: "Six Months",
  subtitle: "A Collection of Us",
  from: "From Shreyas",
  to: "For Kaviya",
  // London time shown in the header (leave as is)
  timezone: "Europe/London",
  // The day it became official
  since: "2026-05-24",

  // Tube line colours (official TfL palette) used for placeholders + accents
  items: [
    { src: "photos/01.jpg", title: "Saturday Night in St. Louis", place: "St. Louis, MO", date: "18 Jul 2026", line: "#DC241F", note: "Saturday, 18 July 2026 at 11:31 PM · St. Louis, MO." },
    { src: "photos/02.jpg", title: "Sunday Afternoon in St. Louis", place: "St. Louis, MO", date: "19 Jul 2026", line: "#0019A8", note: "Sunday, 19 July 2026 at 1:42 PM · St. Louis, MO." },
    { src: "photos/03.jpg", title: "Sunday Afternoon in St. Louis", place: "St. Louis, MO", date: "19 Jul 2026", line: "#E86A10", note: "Sunday, 19 July 2026 at 1:50 PM · St. Louis, MO." },
    { src: "photos/04.jpg", title: "Saturday Night in Madison", place: "Madison, WI", date: "25 Jul 2026", line: "#007229", note: "Saturday, 25 July 2026 at 11:38 PM · Madison, WI." },
    { src: "photos/05.jpg", title: "Sunday Afternoon in Madison", place: "Madison, WI", date: "26 Jul 2026", line: "#000000", note: "Sunday, 26 July 2026 at 3:13 PM · Madison, WI." },
    { src: "photos/06.jpg", title: "Saturday Evening in New York", place: "New York, NY", date: "15 Aug 2026", line: "#6950A1", note: "Saturday, 15 August 2026 at 6:20 PM · New York, NY." },
    { src: "photos/07.jpg", title: "Saturday Evening in New York", place: "New York, NY", date: "15 Aug 2026", line: "#9B0058", note: "Saturday, 15 August 2026 at 6:20 PM · New York, NY." },
    { src: "photos/08.jpg", title: "Saturday Evening in New York", place: "New York, NY", date: "15 Aug 2026", line: "#00A4A7", note: "Saturday, 15 August 2026 at 7:17 PM · New York, NY." },
    { src: "photos/09.jpg", title: "Sunday Morning in New York", place: "New York, NY", date: "16 Aug 2026", line: "#84B817", note: "Sunday, 16 August 2026 at 9:45 AM · New York, NY." },
    { src: "photos/10.jpg", title: "Thursday Evening in Madison", place: "Madison, WI", date: "3 Sep 2026", line: "#DC241F", note: "Thursday, 3 September 2026 at 8:16 PM · Madison, WI." },
    { src: "photos/11.jpg", title: "Sunday Afternoon in Chicago", place: "Chicago, IL", date: "6 Sep 2026", line: "#0019A8", note: "Sunday, 6 September 2026 at 3:45 PM · Chicago, IL." },
    { src: "photos/12.jpg", title: "Sunday Afternoon in Chicago", place: "Chicago, IL", date: "6 Sep 2026", line: "#E86A10", note: "Sunday, 6 September 2026 at 3:45 PM · Chicago, IL." },
    { src: "photos/13.jpg", title: "Sunday Afternoon in Chicago", place: "Chicago, IL", date: "6 Sep 2026", line: "#007229", note: "Sunday, 6 September 2026 at 4:01 PM · Chicago, IL." },
    { src: "photos/14.jpg", title: "Saturday Evening in Madison", place: "Madison, WI", date: "12 Sep 2026", line: "#000000", note: "Saturday, 12 September 2026 at 5:11 PM · Madison, WI." },
    { src: "photos/15.jpg", title: "Saturday Evening in Madison", place: "Madison, WI", date: "26 Sep 2026", line: "#6950A1", note: "Saturday, 26 September 2026 at 8:58 PM · Madison, WI." },
    { src: "photos/16.jpg", title: "Saturday Evening in Madison", place: "Madison, WI", date: "26 Sep 2026", line: "#9B0058", note: "Saturday, 26 September 2026 at 8:59 PM · Madison, WI." },
    { src: "photos/17.jpg", title: "Friday Night in Verona", place: "Verona, WI", date: "30 Oct 2026", line: "#00A4A7", note: "Friday, 30 October 2026 at 9:51 PM · Verona, WI." },
    { src: "photos/18.jpg", title: "Monday Evening in Madison", place: "Madison, WI", date: "2 Nov 2026", line: "#84B817", note: "Monday, 2 November 2026 at 8:53 PM · Madison, WI." },
    { src: "photos/19.jpg", title: "Saturday Afternoon in St. Louis", place: "St. Louis, MO", date: "14 Nov 2026", line: "#DC241F", note: "Saturday, 14 November 2026 at 4:26 PM · St. Louis, MO." },
    { src: "photos/20.jpg", title: "Saturday Evening in St. Louis", place: "St. Louis, MO", date: "14 Nov 2026", line: "#0019A8", note: "Saturday, 14 November 2026 at 6:06 PM · St. Louis, MO." },
    { src: "photos/21.jpg", title: "Saturday Evening in St. Louis", place: "St. Louis, MO", date: "14 Nov 2026", line: "#E86A10", note: "Saturday, 14 November 2026 at 6:16 PM · St. Louis, MO." },
    { src: "photos/22.jpg", title: "Saturday Night in St. Louis", place: "St. Louis, MO", date: "14 Nov 2026", line: "#007229", note: "Saturday, 14 November 2026 at 11:13 PM · St. Louis, MO." },
    { src: "photos/23.jpg", title: "Sunday Morning in St. Louis", place: "St. Louis, MO", date: "15 Nov 2026", line: "#000000", note: "Sunday, 15 November 2026 at 11:50 AM · St. Louis, MO." },
    { src: "photos/24.jpg", title: "Saturday Afternoon in Greater Chicago", place: "Greater Chicago, IL", date: "21 Nov 2026", line: "#6950A1", note: "Saturday, 21 November 2026 at 3:19 PM · Greater Chicago, IL." },
    { src: "photos/25.jpg", title: "Saturday Afternoon in Chicago", place: "Chicago, IL", date: "21 Nov 2026", line: "#9B0058", note: "Saturday, 21 November 2026 at 4:10 PM · Chicago, IL." },
    { src: "photos/26.jpg", title: "Saturday Evening in Chicago", place: "Chicago, IL", date: "21 Nov 2026", line: "#00A4A7", note: "Saturday, 21 November 2026 at 5:28 PM · Chicago, IL." },
    { src: "photos/27.jpg", title: "Saturday Evening in Chicago", place: "Chicago, IL", date: "21 Nov 2026", line: "#84B817", note: "Saturday, 21 November 2026 at 8:34 PM · Chicago, IL." },
    { src: "photos/28.jpg", title: "Saturday Night in Chicago", place: "Chicago, IL", date: "21 Nov 2026", line: "#DC241F", note: "Saturday, 21 November 2026 at 9:32 PM · Chicago, IL." },
    { src: "photos/29.jpg", title: "Saturday Night in Chicago", place: "Chicago, IL", date: "21 Nov 2026", line: "#0019A8", note: "Saturday, 21 November 2026 at 9:41 PM · Chicago, IL." }
  ],

  // The journey section (six stops = six months)
  journey: [
    { month: "24 May",      label: "Official",           text: "Right after I graduated, it became official." },
    { month: "June",        label: "Long distance",      text: "Different cities, same us." },
    { month: "18 & 25 Jul", label: "Your turn, my turn", text: "You came to St. Louis. A week later I came to Madison." },
    { month: "15 Aug",      label: "New York",           text: "Seeing each other in the same city again." },
    { month: "6 Sep",       label: "Chicago",            text: "Our Chicago trips began." },
    { month: "30 Oct",      label: "Halloween",          text: "Halloween and both our birthdays, together." }
  ],

  letter: "Happy six months. I hope we never stop holding each other in the kitchen while we cook, kissing each other in the car, cuddling at work. It's so romantic speaking, though, as love has a future even if we don't know what that looks like yet."
};
