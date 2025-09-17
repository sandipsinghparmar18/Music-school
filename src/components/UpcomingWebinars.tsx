"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Introduction to Music Theory",
    description:
      "Learn the basics of scales, chords, and rhythm to strengthen your foundation in music.",
    link: "https://music-school.com/webinars/music-theory",
  },
  {
    title: "Mastering Piano for Beginners",
    description:
      "Step-by-step guidance for absolute beginners to start their journey on the piano.",
    link: "https://music-school.com/webinars/piano-beginners",
  },
  {
    title: "The Art of Singing",
    description:
      "Discover vocal techniques, breathing exercises, and tips to improve your singing voice.",
    link: "https://music-school.com/webinars/art-of-singing",
  },
  {
    title: "Guitar Fundamentals",
    description:
      "Learn chords, strumming patterns, and popular songs on the guitar with ease.",
    link: "https://music-school.com/webinars/guitar-fundamentals",
  },
  {
    title: "Songwriting Workshop",
    description:
      "Explore how to write lyrics, create melodies, and structure songs like a professional.",
    link: "https://music-school.com/webinars/songwriting",
  },
  {
    title: "Jazz Improvisation",
    description:
      "Enhance your improvisation skills and dive into the world of jazz music.",
    link: "https://music-school.com/webinars/jazz-improvisation",
  },
];

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect items={featuredWebinars}></HoverEffect>
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
