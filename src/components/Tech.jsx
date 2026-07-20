import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ index, name, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.08, 0.5)}
    className="flex w-24 flex-col items-center gap-3 rounded-2xl border border-white/10 bg-tertiary px-3 py-5"
  >
    <img src={icon} alt={name} className="h-12 w-12 object-contain" />
    <p className="text-center text-[12px] text-white">{name}</p>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I work with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>

      <div className="mt-14 flex flex-row flex-wrap justify-center gap-6">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
