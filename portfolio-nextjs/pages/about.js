import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-black bg-cover bg-center h-screen relative">
      <Nav />
      <section className="justify-items-center pt-16 ">
        <div className="bg-second-bg-image bg-[length:1750px_210px] py-24" alt="city">
          {/* <h1 className="text-electric-blue text-5xl text-center">About</h1> */}
        </div>
      </section>
      <div className="grid grid-cols-3">
        <div className="col-span-2 bg-black">
            <h1 className="text-dark-blue text-3xl text-center py-16">Experience</h1>
            <section className="text-electric-blue px-10">
            <h4>Education:</h4>
            <ol className="text-cool-grey px-2 py-2">
                <li>Michigan State University, Experience Architecture</li>
                <li>UCSD Extended Studies: Coding Bootcamp</li>
            </ol>
            </section>
        </div>
        <div className="bg-black">
            <h1 className="text-dark-blue text-3xl text-center py-16">Skills</h1>
            <ul className="text-cool-grey px-8">
                <li><Image src="/../public/assets/skills/node-js.png" width='25' height='25' className="py-2"></Image>Node JS</li>
                <li><Image src="/../public/assets/skills/react.png" width='25' height='25' className="py-2"></Image>React JS</li>
                <li><Image src="/../public/assets/skills/next.png" width='25' height='25' className="py-2"></Image>Next JS</li>
                <li><Image src="/../public/assets/skills/java.png" width='30' height='35' className="py-2"></Image>Java</li>
                <li><Image src="/../public/assets/skills/mongodb.png" width='25' height='25' className="py-2"></Image>MongoDB</li>
                <li><Image src="/../public/assets/skills/graphql.png" width='25' height='25' className="py-2"></Image>Graphql</li>
                <li><Image src="/../public/assets/skills/mysql.png" width='40' height='30' className="py-2"></Image>mySQL</li>
                <li><Image src="/../public/assets/skills/tailwind.png" width='25' height='25' className="py-2"></Image>Tailwind</li>
            </ul>
        </div>

      </div>
      <div className="bg-black bg-cover bg-center h-screen">
        <p className="text-cool-grey">sup</p>
      </div>
      <Footer />
    </div>
  );
}
