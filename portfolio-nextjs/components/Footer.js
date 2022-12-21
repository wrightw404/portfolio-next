import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    // <nav className="bg-transparent p-2 fixed bottom-0">
    //   <ul className="flex flex-wrap items-center justify-end text-xl">
    //     <li className="px-1 text-sky-400 hover:text-pink-600">
    //       <a href="https://github.com/hale-bopp97/fantastic_ecomerce#readme">
    //         Learn More
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
    <div className="bg-transparent w-full p-2 fixed bottom-0">
      {/* <Image
        src="/../public/assets/logos/cLogo.png"
        alt="logo"
        width="75"
        height="75"
      /> */}
      <ul className="flex flex-wrap items-center justify-start text-xl">
        <li className="px-3 hover:scale-125">
          <a href="https://github.com/wrightw404">
            <Image src="/../public/assets/logos/GitHubLogo.png" width='50' height='50' />
          </a>
        </li>
        <li className="px-3 hover:scale-125">
          <a href="https://www.linkedin.com/in/williamwallacewright/">
            <Image src="/../public/assets/logos/linkedinLogo.png" width='50' height='50'/>
          </a>
        </li>
      </ul>
    </div>
  );
}
