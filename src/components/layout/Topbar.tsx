import { Link } from "react-router-dom";

// navigation data
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Contact", href: "/contact", current: false },
];

export default function Topbar() {
  return (
    <header className="bg-black px-4 md:px-14 py-3">
      <div className="mx-auto max-w-6xl sm:flex items-center justify-between">
        {/* Navigation - Hidden on mobile */}
        <nav className="hidden sm:flex items-center space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`${
                item.current
                  ? "text-primary"
                  : "text-white hover:text-primary transition-colors"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Contact and Social Links */}
        <div>
          <div className="flex items-center justify-between space-x-4">
            <Link
              to="mailto:contact@abc.com"
              className="flex items-center text-white hover:text-primary transition-colors"
            >
              <i className="fa-sharp fa-solid fa-envelope  h-4 w-4 mr-2"></i>
              <span>contact@abc.com</span>
            </Link>
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <Link
                to="#"
                className="text-white hover:text-primary transition-colors"
              >
                <i className="fa-brands fa-facebook-f h-4 w-4"></i>
              </Link>
              <Link
                to="#"
                className="text-white hover:text-primary transition-colors"
              >
                <i className="fa-brands fa-x-twitter h-4 w-4"></i>
              </Link>
              <Link
                to="#"
                className="text-white hover:text-primary transition-colors"
              >
                <i className="fa-brands fa-instagram h-4 w-4"></i>
              </Link>
              <Link
                to="#"
                className="text-white hover:text-primary transition-colors"
              >
                <i className="fa-brands fa-youtube h-4 w-4"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
