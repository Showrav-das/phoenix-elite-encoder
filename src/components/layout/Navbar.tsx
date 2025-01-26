import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // menuitems
  const menuItems = [
    {
      title: "Scanner Types",
      items: ["Type A", "Type B", "Type C"],
    },
    {
      title: "Car Makes",
      items: ["Audi", "BMW", "Mercedes", "Volkswagen"],
    },
    {
      title: "Service Reset Tools",
      items: ["Oil Reset", "Brake Reset", "Battery Reset"],
    },
    {
      title: "Other Tools & Accessories",
      items: ["Cables", "Adapters", "Software"],
    },
  ];

  return (
    <nav className="bg-[#1F242D] text-[#CCCCCC] hidden md:block">
      <div className="mx-auto flex justify-center max-w-7xl items-center px-4">
        <Link
          to="/"
          className="mr-8 py-4 text-lg font-medium hover:text-gray-300"
        >
          OBDeleven
        </Link>

        <div className="hidden space-x-6 lg:flex">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.title)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center space-x-1 py-4 text-sm hover:text-gray-300">
                <span>{item.title}</span>
                <i className="fa-solid fa-chevron-down size-4"></i>
              </button>

              {openMenu === item.title && (
                <div className="absolute left-0 top-full z-50 min-w-[200px] bg-[#1c1f25] py-2 shadow-lg">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem}
                      to="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-700"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile menu button */}
        <button className="ml-auto lg:hidden">
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
      </div>
    </nav>
  );
}
