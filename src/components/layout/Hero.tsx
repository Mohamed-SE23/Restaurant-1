import { FaClock, FaLocationDot } from "react-icons/fa6";
import { heroCard, mainCover, pizza, restaurant, stars } from "../../assets";
import { styles } from "../../styles";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden hero-section">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={mainCover} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback Image */}
      <div
        className="absolute inset-0 w-full h-full hidden bg-cover bg-center mobile-fallback"
        style={{ backgroundImage: `url(${restaurant})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className={`relative h-screen mt-10 flex flex-col justify-center items-center gap-8 overflow-hidden z-10 ${styles.paddingX}`}>
      <div
        className={`flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 text-forth`}
      >
        {/* Text Section */}
        <div className="text-center flex flex-col justify-center items-center w-full lg:inline-block lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Your favorite dishes, delivered{" "}
            <span className="text-primary">hot</span> and{" "}
            <span className="text-primary">fresh!</span>
          </h1>
          <p className="mt-4 text-base md:text-xl">
            Experience the best handcrafted meals made with love and fresh ingredients.
          </p>
          <button className="mt-6 px-6 py-2 btn text-white font-semibold transition duration-300">
            Order Now!
          </button>
        </div>

        {/* Images Section */}
        <div className="lg:grid lg:grid-cols-2 gap-4 w-full hidden">
          <img
            src={pizza}
            alt="card1"
            loading="lazy"
            className="w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-md object-cover"
          />
          <img
            src={heroCard}
            alt="card2"
            loading="lazy"
            className="w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-md object-cover"
          />
        </div>
      </div>
      <div className="border-t-3 mt-12 pt-8 flex items-center justify-center gap-4 sm:gap-6 border-primary w-full text-xl z-50">
        <img src={stars} alt="stars" loading="lazy" className="w-22 sm:w-28" />
        <div className="flex items-center gap-1 text-forth text-sm sm:text-lg">
          <FaClock className="w-4 h-4 sm:w-6 sm:h-6" />
          <span>24h/day</span>
        </div>
        <div className="flex items-center gap-1 text-forth text-sm sm:text-lg">
          <FaLocationDot className="w-4 h-4 sm:w-6 sm:h-6" />
          <span>Sudan</span>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
