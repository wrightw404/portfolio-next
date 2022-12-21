import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({title, backgroundImg, skills, projectUrl}) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-electric-blue rounded-xl group hover:bg-gradient-135 from-[#E69597] to-[#B5D6D6]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={backgroundImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl font-extrabold text-dark-grey tracking-wider text-center">
                {title}
              </h3>
              <p className="pb-4 pt-2 text-dark-grey text-center">
                {skills}
              </p>
              <Link href={projectUrl}>
                <p className="text-center py-3 px-3 rounded-lg bg-[#E69597] text-dark-grey font-bold text-lg cursor-pointer hover:scale-110">
                  Click Here To Check It Out!
                </p>
              </Link>
            </div>
          </div>
    )
}

export default ProjectItem;