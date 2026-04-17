import { motion } from "framer-motion";

import { styles } from "../styles";
import { resumePdf } from "../assets";
import { profile } from "../constants";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative mx-auto min-h-screen w-full overflow-hidden">
      <div
        className={`relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-10 pt-28 pb-24 ${styles.paddingX} lg:grid lg:grid-cols-[minmax(0,540px)_1fr] lg:items-center lg:gap-8 lg:pt-24 lg:pb-20`}
      >
        <div className="flex items-start gap-5">
          <div className="mt-5 hidden flex-col items-center justify-center sm:flex">
            <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
            <div className="h-60 w-1 violet-gradient lg:h-80" />
          </div>

          <div className="max-w-[560px]">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">{profile.shortName}</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              {profile.role}
            </p>
            <p className="mt-4 max-w-xl text-[16px] leading-7 text-secondary sm:text-[18px]">
              {profile.heroHeadline} {profile.heroSubheadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[#915EFF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7a49ff]"
              >
                Download CV
              </a>
              <a
                href="#project"
                className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Production Work
              </a>
            </div>

            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              {profile.quickFacts.map((fact) => (
                <div
                  key={fact.value}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold text-white">{fact.value}</p>
                  <p className="mt-1 text-xs leading-5 text-secondary">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative h-[320px] sm:h-[420px] lg:h-[640px] xl:h-[700px]">
          <ComputersCanvas />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
