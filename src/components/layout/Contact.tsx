import { motion } from "framer-motion"
import { textVariant, zoomIn } from "../../utils/motion"
import { map } from "../../assets"
import { contact, contactType } from "../../data"
import StarWrapper from "../../hoc/SectionWrapper"
const Contact = () => {
  return (
    <div className="max-w-7xl mx-8 md:mx-16 xl:mx-auto">
      {/* contact header */}
      <motion.div
        variants={textVariant()}
       className="text-center mb-20">
        <h1 className="text-4xl text-secondary font-bold mt-20">
          Contact Us
        </h1>
        <p className="uppercase">
          get in touch
        </p>
      </motion.div>

      {/* contact info */}
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-8 lg:gap-20 mb-20">
        <motion.div
        variants={zoomIn( 1, 0.6)}
        className="w-full lg:w-1/2">
          <img src={map} alt="map" loading="lazy" className="w-full h-60 lg:h-fit rounded-md object-cover " />
        </motion.div>
        <motion.div 
          variants={zoomIn( 1, 0.3)}
          className="w-full lg:w-1/2 flex flex-col gap-4 text-sm sm:text-lg">
          {contact.map((item: contactType, i:number) => {
            return (
              <div
                key={i}
                className="relative bg-secondary py-3 flex items-center gap-2 rounded-r-md overflow-hidden text-forth"
                >
                  <item.icon className="absolute -left-1 w-14 h-14 bg-tertiary px-3 py-4 rounded-r-full" />
                  <p className="pl-15">{item.text}</p>
              </div>
            )
          })}
        </motion.div>
      </div>
      {/* copy rights */}
      <p className="text-sm text-center p-6 border-t-2">
        &copy; {new Date().getFullYear()} <span className="text-primary font-semibold">Wad Alamen</span>. All rights reserved.
      </p>
    </div>
  )
}

export default StarWrapper(Contact, "contact")
