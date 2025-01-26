"use client";

import { images } from "@/assets/images";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarwithLogo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-t border-border-color text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="text-3xl font-light">
            Your<span className="text-white font-bold">Logo</span>
          </div>

          <div className="hidden lg:flex items-center justify-center gap-4 flex-1">
            <div className="relative w-[450px]">
              <input
                type="search"
                placeholder="Search Here..."
                className="w-full rounded-md bg-black border border-border-color px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none"
              />
              <svg
                className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="flex items-center gap-2">
              {/* <PhoneIcon className="" /> */}
              <img
                src={images.PhoneImg}
                alt=""
                className="h-6 w-4 text-primary"
              />
              <div className="flex flex-col text-sm">
                <p className="text-[#737F96]">Call us free </p>
                <p className="text-[#CCCCCC]">+1 86.36.166</p>
              </div>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Phone Number - Hidden on mobile */}

            {/* Search Icon - Mobile only */}
            <button className="lg:hidden text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Account Icon */}
            <button className="text-[#CCCCCC] focus:outline-none flex gap-2 items-center">
              <span className="text-[#CCCCCC] text-sm">Account</span>
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>

            {/* Wishlist Icon */}
            <button className="text-[#CCCCCC] md:block hidden focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            {/* Cart Icon */}
            <button className="text-[#CCCCCC] focus:outline-none">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                to="#"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700"
              >
                Home
              </Link>
              <Link
                to="#"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700"
              >
                Products
              </Link>
              <Link
                to="#"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700"
              >
                About
              </Link>
              <Link
                to="#"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
