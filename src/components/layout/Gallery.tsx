import { motion } from "framer-motion";
import { restaurant } from "../../assets"
import { textVariant, zoomIn } from "../../utils/motion";
import { styles } from "../../styles";
import { gallery } from "../../data";
import StarWrapper from "../../hoc/SectionWrapper";

const Gallery = () => {

  return (
    <div
    className="w-full bg-cover bg-center"
    style={{ backgroundImage: `url(${restaurant})` }}
  >
    <div className={`${styles.paddingX} ${styles.paddingY} bg-black/70`}>
    <motion.div
        variants={textVariant()}
       className="text-center text-forth mb-12">
        <h1 className="text-4xl font-bold">
          Our <span className="text-primary">Delicious</span> Gallery
        </h1>
      </motion.div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {gallery.map((image, i:number) => (
          <motion.div
            key={i}
            variants={zoomIn(0.5, 0.3)}
            whileHover={{ scale: 1.05 }}
            className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={image.img}
              alt={image.alt}
              loading="lazy"
              className="w-full h-48 object-cover transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/70 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300">
              <p className="text-white font-bold text-lg">{image.alt}</p>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default StarWrapper(Gallery, "gallery");
