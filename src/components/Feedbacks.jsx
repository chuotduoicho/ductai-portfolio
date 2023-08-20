import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificate } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const FeedbackCard = ({ index, name, date,link,image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
       <img
          src={image}
          alt="certificate logo"
          className="object-contain rounded-xl transition-transform transform hover:scale-110"
        />
    {/* <p className="text-white font-black text-[48px]">"</p> */}

    <div className="mt-4">
      <p className="text-white tracking-wider text-[18px] min-h-[108px]">{name}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="mt-1 text-secondary text-[12px]">
          <span className='blue-text-gradient'>@</span> {date}
          </p>
          <a className="text-white font-medium text-[16px] flex gap-4 items-center cursor-pointer" href={link}>
            View detail
            <svg
              class="w-3 h-3 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </a>
        </div>

        <img
          src="https://www.langoly.com/wp-content/uploads/2021/09/coursera-logo.png"
          alt="certificate logo"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I achieved</p>
          <h2 className={styles.sectionHeadText}>Certificate.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
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
          {certificate.map((testimonial, index) => (
            <SwiperSlide key={testimonial.name}>
              <FeedbackCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
