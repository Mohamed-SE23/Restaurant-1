import { menuType } from "../../data";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

interface T {
  menu: menuType;
  index: number;
}

const MenuCard: React.FC<T> = ({ menu, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", index * 0.2, 0.1)}
      className="group bg-white flex flex-col rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 h-full"
    >
      <img
        src={menu.img}
        alt={menu.title}
        loading="lazy"
        className="w-full h-44 object-cover rounded-t-md"
      />
      {/* Card content with flex to push button down */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div className="mb-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-semibold">{menu.title}</h3>
            <p className="font-bold text-lg">${menu.price.toFixed(2)}</p>
          </div>
          <p className="text-gray-600 text-sm mt-2">{menu.description}</p>
        </div>
        <div className="w-full flex justify-center">
          <button type="button" className="btn px-4 py-1">
            Order Now!
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
