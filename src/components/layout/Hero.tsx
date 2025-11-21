import { FaClock, FaLocationDot } from "react-icons/fa6";
import { fruits, heroCard, pizza, stars } from "../../assets";

const bgStyle = { backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${fruits})` }

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden hero-section">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={bgStyle}
      />

      {/* Content */}
      <div className={`relative h-full mt-10 flex flex-col justify-center items-center sm:px-16 px-6 gap-8 overflow-hidden z-10`}>
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
        {window.innerWidth >= 1024 && (
          <div className="lg:grid lg:grid-cols-2 gap-4 w-full1`````">
            <img
              src={pizza}
              alt="card1"
              className="w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-md object-cover"
            />
            <img
              src={heroCard}
              alt="card2"
              className="w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-md object-cover"
            />
          </div>
        )}
      </div>
      <div className="border-t-3 mt-12 pt-8 flex items-center justify-center gap-4 sm:gap-6 border-primary w-full text-xl z-50">
        <img src={stars} alt="stars" className="w-22 sm:w-28" />
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
