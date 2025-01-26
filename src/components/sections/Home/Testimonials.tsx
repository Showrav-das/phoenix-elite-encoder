import { Profile } from "@/types/types";
import { Link } from "react-router-dom";

export default function Testimonials({ profiles }: { profiles: Profile[] }) {
  return (
    <section className="bg-black px-4 py-8 md:py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight max-w-max md:max-w-sm">
            THE LOVE FROM OUR CUSTOMERS
          </h2>
          <Link
            to="/reviews"
            className="text-slate-400 hover:text-slate-300 transition-colors"
          >
            See All Reviews &rarr;
          </Link>
        </div>
        <div className="bg-[#1F2632] rounded-lg px-14 py-12 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <h3 className="text-white font-bold text-lg">Very Good</h3>
              <span className="text-yellow-400 text-xl font-bold">★★★★★</span>
              <span className="text-gray-500 ml-2">TRUSTPILOT</span>
            </div>
            <span className="text-gray-500">4 days ago</span>
          </div>
          <p className="text-gray-400 mt-2">
            "Awesome service, next day delivery, friendly staff that know their
            stuff. Reassured support is always available should it be needed. It
            was like dealing with someone you've known 20 years."
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={profile.avatar || "/placeholder.svg"}
                  alt={`${profile.name}'s avatar`}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold">{profile.name}</h3>
                <p className="text-slate-400">Creative Director at</p>
                <p className="text-cyan-400">CompanyName</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
