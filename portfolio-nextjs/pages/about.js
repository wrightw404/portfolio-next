import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-black bg-cover bg-center h-screen relative">
      <Nav />
      <section className="justify-items-center pt-16 ">
        <div className="bg-second-bg-image bg-[length:1750px_210px] py-24" alt="city">
          
        </div>
      </section>
      <div className="grid md:grid-cols-3 pt-20 pr-10">
        <div className="col-span-2 bg-black">
            <h1 className="text-dark-blue text-3xl text-center font-bold tracking-widest py-10">Experience</h1>
            <section className="text-electric-blue px-10">
            <h4 className="tracking-wider font-bolder underline">Education:</h4>
            <ol className="text-cool-grey py-2">
                <li className="py-3"><p className="font-bold">Michigan State University,</p><a className="hover:text-electric-blue hover:font-bold hover:underline pl-4" href='https://xa.cal.msu.edu/'>BA Experience Architecture</a></li>
                <li><a className="hover:text-electric-blue hover:font-bold hover:underline" href='https://bootcamp.extension.ucsd.edu/coding/'>UCSD Extended Studies: Coding Bootcamp</a></li>
            </ol>
            <h4 className="tracking-wider font-bolder underline py-2">Work:</h4>
            <ol className="text-cool-grey">
              <h3 className="font-bold pt-3">Sydney Children's Hospitals Foundation; Sydney, Australia</h3>
              <h4 className="pl-4">Role: Digital Intern</h4>
              <p className="py-3">Responsible for coordinating the redevelopment of the Foundation's website to facilitate the recent expansion of entities to include The Children's Hospital Westmead, Bear Cottage, NETS and Kids Research in conjunction with a Digital Producer</p>
            </ol>
            <ol className="text-cool-grey">
              <h3 className="font-bold pt-3">Sydney Children's Hospitals Foundation; Sydney, Australia</h3>
              <h4 className="pl-4">Role: Digital Intern</h4>
              <p className="py-3">Responsible for coordinating the redevelopment of the Foundation's website to facilitate the recent expansion of entities to include The Children's Hospital Westmead, Bear Cottage, NETS and Kids Research in conjunction with a Digital Producer</p>
            </ol>
            </section>
        </div>
        <div className="relative bg-black">
        <div className='absolute inset-0 bg-gradient-30 from-[#972729] to-[#66fcf1] rounded-lg blur-2xl opacity-30'></div>
        <h1 className="relative text-dark-blue text-3xl pb-8 pt-6 px-32 font-bold tracking-widest">Skills</h1>
            <div className="grid md:grid-cols-2 items-center justify-center pl-20 pb-5">
            <ul className="text-cool-grey px-8">
                <li><Image src="/../public/assets/skills/node-js.png" width='25' height='25' className="py-2"></Image>Node JS</li>
                <li><Image src="/../public/assets/skills/react.png" width='25' height='25' className="py-2"></Image>React JS</li>
                <li><Image src="/../public/assets/skills/next.png" width='25' height='25' className="py-2"></Image>Next JS</li>
                <li><Image src="/../public/assets/skills/java.png" width='30' height='35' className="py-2"></Image>Java</li>
                <li><Image src="/../public/assets/skills/tailwind.png" width='25' height='25' className="py-2"></Image>Tailwind</li>
            </ul>
            <ul className="text-cool-grey px-8">
                <li><Image src="/../public/assets/skills/mongodb.png" width='25' height='25' className="py-2"></Image>MongoDB</li>
                <li><Image src="/../public/assets/skills/graphql.png" width='25' height='25' className="py-2"></Image>Graphql</li>
                <li><Image src="/../public/assets/skills/mysql.png" width='40' height='30' className="py-2"></Image>mySQL</li>
                <li><Image src="/../public/assets/skills/tailwind.png" width='25' height='25' className="py-2"></Image>Tailwind</li>
                <li><Image src="/../public/assets/skills/tailwind.png" width='25' height='25' className="py-2"></Image>Tailwind</li>
            </ul>
            </div>
        </div>

      </div>
      <div className="bg-black bg-cover bg-center h-screen">
        <p className="text-cool-grey">sup</p>
      </div>
      <Footer />
    </div>
  );
}
