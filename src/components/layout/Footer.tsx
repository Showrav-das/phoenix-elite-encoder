import { images } from "@/assets/images";
import { FooterDetails } from "@/types/types";
import { Link } from "react-router-dom";

export default function Footer({ footerData }: { footerData: FooterDetails }) {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description Section */}
          <div className="space-y-6">
            <div className="text-3xl font-light">
              Your<span className="text-white font-bold">Logo</span>
            </div>
            <p className="text-sm leading-relaxed">
              When you need the best auto parts for your ride, turn to Autovio.
              Limited time offer for only new customer also get free shipping on
              orders.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-white transition-colors">
                <i className="fa-brands fa-facebook-f size-4"></i>
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                <i className="fa-brands fa-x-twitter h-4 w-4"></i>
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                <i className="fa-brands fa-instagram h-4 w-4"></i>
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                <i className="fa-brands fa-youtube h-4 w-4"></i>
              </Link>
            </div>
          </div>

          {/* Our Company Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              OUR COMPANY
            </h3>
            <ul className="space-y-3 text-base text-[#CCCCCC]">
              {footerData.companyDetails.map((item, index) => (
                <li key={index}>
                  <Link to="#" className=" transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              OUR SERVICES
            </h3>
            <ul className="space-y-3 text-base text-[#CCCCCC]">
              {footerData.serviceDetails.map((item, index) => (
                <li key={index}>
                  <Link to="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              CONTACT US
            </h3>
            <ul className="space-y-3 text-base text-[#CCCCCC]">
              <li>
                <span className="text-red-500">Address : </span>
                126 Horton Grange Road, Bradford, West Yorkshire, BD7 2DW
              </li>
              <li>
                <span className="text-red-500">Phone : </span>
                +1 86.36.166
              </li>
              <li>
                <span className="text-red-500">Fax : </span>
                12345
              </li>
              <li>
                <span className="text-red-500">Mail : </span>
                <Link
                  to="mailto:contact@abc.co.uk"
                  className="hover:text-white transition-colors"
                >
                  contact@abc.co.uk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className=" text-white border-t border-border-color mt-12">
          <footer className="flex  flex-col-reverse sm:flex-row gap-6 justify-between items-center p-4">
            <div className="text-sm">
              Copyright © 2024
              <span className="text-red-500">abc</span>- All Rights Reserved.
            </div>
            <div className="flex space-x-4">
              <img alt="Visa logo" src={images.FooterImg} />
            </div>
          </footer>
        </div>
      </div>
    </footer>
  );
}
