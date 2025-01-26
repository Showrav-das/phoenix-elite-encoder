import { images } from "@/assets/images";
import Heading from "@/components/common/Heading";
import { Tools } from "@/types/types";

export default function ToolsScanner({ tools }: { tools: Tools }) {
  return (
    <section className="bg-black ">
      <div className="max-w-6xl mx-auto border-b border-border-color px-4 py-16">
        <div className="text-center">
          <span className="text-lg text-gray-400">Car Diagnostic</span>

          <Heading className="mb-12">{tools.title}</Heading>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={images.ToolsScanner}
              alt="Car diagnostic tool interface"
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="mb-6 text-3xl font-bold text-[#CCCCCC]">
              <span className="text-paragraph">£</span> Save money and diagnose
              faults
            </h3>
            <p className="text-paragraph">
              A car diagnostic scan from your local dealership could cost up to
              £100 + VAT. Why not buy a scanner and do it yourself? They are
              easy to use. The scanner will pay for itself. You can then present
              the findings to your local mechanic who won't have to run a
              diagnostic scan, thus saving time and money.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
