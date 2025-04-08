import {motion} from "framer-motion";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { textVariant } from "../../utils/motion";
import { testimonials, testimonialsType } from "../../data";
import { styles } from "../../styles";
import StarWrapper from "../../hoc/SectionWrapper";
import { FaArrowRight } from "react-icons/fa6";
const Testimonials = () => {
  return (
    <>
      <span className='hash-span' id="#testimonials">
        &nbsp;
      </span>
    <div>
      <motion.div
        variants={textVariant()}
       className="text-center">
        <h1 className="text-4xl text-secondary font-bold mt-20">
          Testimonials
        </h1>
        <p className="uppercase">
          what others say about us
        </p>
      </motion.div>
      {/* <div className={`${styles.paddingX} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 mt-10 `}> */}
      <div className={`${styles.paddingX} max-w-5xl mx-auto mt-10 `}>
      <Splide 
          hasTrack={ false } 
          aria-label="Testimonials"
          options={{
            type: 'loop',
            perPage: 1,
            perMove: 1,
            autoplay: true,
            pauseOnHover: true,
            arrows: true,
            pagination: true,
            gap: '1rem',
          }}>
        <SplideTrack>
            {testimonials.map((test: testimonialsType, i: number) => {
            return  (
          <SplideSlide key={i}>
            <figure className="w-full h-full mx-auto flex flex-col items-start justify-between shadow-xl rounded-md p-6">
              <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
              </svg>
              <blockquote>
                  <p className="text-2xl italic font-medium text-gray-900 ">{test.text}</p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3 ">
                  <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" loading="lazy" />
                  <div className="flex items-center divide-x-2  divide-gray-500 ">
                      <cite className="pe-3 font-medium text-gray-900 ">{test.authName}</cite>
                      <cite className="ps-3 text-sm text-gray-500 ">{test.authJob}</cite>
                  </div>
              </figcaption>
            </figure>
          </SplideSlide>
            )
             })}
        </SplideTrack>

        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev -translate-x-8"><FaArrowRight /></button>
          <button className="splide__arrow splide__arrow--next translate-x-8"><FaArrowRight /></button>
        </div>
      </Splide>
      </div>
    </div>
    </>
  )
}

export default StarWrapper(Testimonials, "testimonials");
