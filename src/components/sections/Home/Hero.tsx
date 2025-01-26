import Heading from "@/components/common/Heading";
import { Slide } from "@/types/types";
import { Link } from "react-router-dom";

export function Hero({ slides }: { slides: Slide[] }) {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 md:px-12">
        {/* Main Content */}
        <div className="h-auto">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-3 md:gap-8 items-center"
            >
              {/* Text Content */}
              <div className="space-y-2 md:space-y-6">
                <Heading className="text-sm ">{slide.title}</Heading>
                <p className="text-xs md:text-base text-gray-300">
                  {slide.description}
                </p>
                {slide.link && (
                  <Link
                    to={slide.link.url}
                    className="mt-6 inline-block rounded-md bg-red-500 px-3 sm:px-6 py-2 sm:py-3 text-xs md:text-sm font-semibold text-white transition-colors hover:bg-red-600"
                  >
                    {slide.link.text}
                  </Link>
                )}
              </div>

              {/* Image */}
              <div className="w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className="h-2 w-2 rounded-full bg-red-500 transition-colors hover:bg-red-600"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
