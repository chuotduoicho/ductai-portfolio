import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projectSections } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ProjectCard = ({
  index,
  name,
  description,
  role,
  impact,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
            {website_link && (
              <div
                onClick={() => window.open(website_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/003/731/316/original/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg"
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain rounded-full"
                />
              </div>
            )}
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <p className="mt-4 text-white text-[14px] leading-6">{role}</p>
          <p className="mt-3 text-secondary text-[13px] leading-6">{impact}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Portfolio proof</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          This section is intentionally ordered around recruiter signal. Start
          with production systems and client work, then move into smaller
          experiments that show interaction design and frontend craft.
        </motion.p>
      </div>

      {projectSections.map((section) => (
        <div key={section.key} className="mt-20 gap-7">
          <p className={`${styles.sectionSubText} `}>{section.title}</p>
          <p className="mb-8 mt-3 max-w-4xl text-[15px] leading-7 text-secondary">
            {section.description}
          </p>
          <Swiper
            spaceBetween={50}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 1 },
              960: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="mySwiper"
            modules={[Autoplay]}
          >
            {section.items.map((project, index) => (
              <SwiperSlide key={`${section.key}-${project.name}`}>
                <ProjectCard
                  key={`${section.key}-${project.name}`}
                  index={index}
                  {...project}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </>
  );
};

export default SectionWrapper(Works, "project");
