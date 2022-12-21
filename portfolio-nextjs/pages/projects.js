import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import Image from "next/image";
// import Link from "next/link";
import fuelcure from "../public/assets/projects/fuelforcure.png";
import btat from "../public/assets/projects/beenthereatethat.png"
import FE from "../public/assets/projects/fantastic-ecommerce.png"

import ProjectItem from "../components/ProjectItem";


export default function Projects() {
  return (
    <div className="w-full bg-black">
      <Nav />
      <section className="justify-items-center pt-16 ">
        <div
          className="bg-second-bg-image bg-[length:1750px_210px] py-24"
          alt="city"
        ></div>
      </section>
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-2xl tracking-wide uppercase text-electric-blue">
          Projects
        </p>
        <h2 className="text-cool-grey text-3xl font-bold py-4">
          {" "}
          What I've Built
        </h2>
        <div className="grid md:grid-cols-2 gap-8">

          <ProjectItem 
          title='Fuel For A Cure' 
          backgroundImg={fuelcure}
          skills='UX and Web Design' 
          projectUrl='/fuelforcure'
          />

          <ProjectItem 
          title='Been There Ate That' 
          backgroundImg={btat} 
          skills='React JS, Handlebars, Materialize CSS' 
          projectUrl='/beenthereatethat'
          />

          <ProjectItem 
          title='Fantastic E-Commerce' 
          backgroundImg={FE} 
          skills='Next JS, Tailwind CSS, Magic Link, Stripe' 
          projectUrl='/fantasticecommerce'
          />

          {/* <ProjectItem 
          title='Fuel For A Cure' 
          backgroundImg={fuelcure} 
          projectUrl='/fuelforcure'
          /> */}

        </div>
      </div>
      <Footer />
    </div>
  );
}
