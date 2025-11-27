import React from "react";

import { Spotlight } from "./Spotlight";

const Hero = () => {
   return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      {/* <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      /> */}
 
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <section className="hero">
      <div className="loop-text">
      <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
         Find Reliable Blue-Collar Jobs </h1>
      </div>
      
      <h4>
        Connecting Skilled Workers with Trusted Employers Across India
      </h4>
      <div className="box">
        Whether you're a technician, driver, electrician, delivery partner,
        plumber, construction worker, or machine operator—discover verified
        job opportunities that value your skill and hard work. No complex
        hiring process. No unnecessary interviews. Just real jobs, fast.
      </div>
    </section>
    </div>
  );
};

export default Hero;
