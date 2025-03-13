"use client";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Link href="/" className="flex items-center group">
        <span className="text-xl sm:text-2xl font-orbitron font-bold">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-primary transition-all duration-300">
            Tech
          </span>
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">
            Sphere
          </span>
        </span>
      </Link>
    </div>
  );
} 