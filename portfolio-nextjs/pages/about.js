import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-black bg-cover bg-center h-screen">
      <Nav />
      <section className="justify-items-center pt-24 ">
        <div className="bg-second-bg-image bg-[length:1750px_250px] py-24" alt="city">
          <h1 className="text-electric-blue text-5xl">About</h1>
        </div>
      </section>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
            <h1 className="text-dark-blue text-3xl p-20 px-60">Skills</h1>
            <ul className="text-cool-grey">
                <li><Image src="/../public/assets/skills/node-js.png" width='25' height='25'></Image>Node JS</li>
                <li><Image src="/../public/assets/skills/react.png" width='25' height='25'></Image>React JS</li>
                <li><Image src="/../public/assets/skills/next-js.png" width='25' height='25'></Image>Next JS</li>
                <li><Image src="/../public/assets/skills/mongodb.png" width='25' height='25'></Image>MongoDB</li>
                <li><Image src="/../public/assets/skills/node-js.png" width='25' height='25'></Image>Graphql</li>
                <li><Image src="/../public/assets/skills/node-js.png" width='25' height='25'></Image></li>
                
            </ul>
        </div>
        <div className="bg-headshot-image bg-cover bg-center p-20 px-60">
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
