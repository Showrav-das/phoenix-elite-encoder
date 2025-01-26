import Heading from "@/components/common/Heading";
import { WhyChoose } from "@/types/types";

export default function WhyChooseUs({ data }: { data: WhyChoose[] }) {
  return (
    <section className="bg-black px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <Heading className="md:text-left text-center"> WHY CHOOSE US?</Heading>

        <div className="mt-10 md:mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {data.map((feature) => (
            <div key={feature.id} className="flex gap-6">
              <div className="flex flex-col size-9 gap-2 shrink-0 items-center mt-3 rounded-xl">
                <img
                  src={feature.icon}
                  alt=""
                  className="h-auto w-full object-contain "
                />

                <span className="h-auto w-full object-contain text-4xl font-bold italic text-[#253146]">
                  {feature.id}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-[#CCCCCC]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
