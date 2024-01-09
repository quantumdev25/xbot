"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import  Cursos from "../components/Courses";

const SPONSORS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export function SponsoredBy() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          CURSOS
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {/*SPONSORS.map((logo, key) => (
            <Image
              width={256}
              height={256}
              key={key}
              src={`/logos/logo-${logo}.svg`}
              alt={logo}
              className="w-40"
            />
          ))*/}
           <Cursos
            image={"/courses/cpp.jpeg"}
            title={"C++"}
            description={
              "Aprende todos a programar con el lenguaje c plus plus"
            }
          />
          <Cursos
            image={"/courses/appinv.png"}
            title={"App Inventor"}
            description={
              "Aprende logica de programacion con una herramienta para aprender el desarrollo de .."
            }
          />
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
