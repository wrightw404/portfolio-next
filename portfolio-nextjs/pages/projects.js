import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import fuelcure from "../public/assets/projects/fuelforcure.png";

export default function projects() {
  return (
    <div className="w-full bg-black">
      <Nav />
      <section className="justify-items-center pt-16 ">
        <div className="bg-second-bg-image bg-[length:1750px_210px] py-24" alt="city">
        </div>
      </section>
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-2xl tracking-wide uppercase text-electric-blue">
          Projects
        </p>
        <h2 className="text-cool-grey text-lg py-4"> What I've Built</h2>
        <div className="relative grid md:grid-cols-2 gap-8">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-dark-blue rounded-lg blur-3xl opacity-60"></div>
          <Image
            className="relative rounded-xl hover:scale-75"
            src={fuelcure}
            alt="fuel for a cure"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
