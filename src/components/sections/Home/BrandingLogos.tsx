import { BrandingLogo } from "@/types/types";

export default function BrandingLogos({
  brandingLogos,
}: {
  brandingLogos: BrandingLogo[];
}) {
  return (
    <div className="bg-[#1D232D] overflow-hidden flex items-center border-t border-border-color justify-center">
      <div className="flex space-x-24 my-14 max-w-6xl mx-auto ">
        {brandingLogos.map((brandingLogo, index) => (
          <img
            key={index}
            alt={brandingLogo.alt}
            src={brandingLogo.src}
            className="h-20 w-full"
          />
        ))}
      </div>
    </div>
  );
}
