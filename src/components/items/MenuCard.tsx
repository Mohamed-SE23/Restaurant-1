import { menuType } from "../../data"
import {motion} from "framer-motion"
import { fadeIn } from "../../utils/motion";
interface T {
  menu : menuType;
  index: number
}
const MenuCard: React.FC<T> = ({menu, index}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="group bg-white flex flex-col justify-between items-start rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
      <img src={menu.img} alt={menu.title} className="w-full h-44 object-cover rounded-md" />
      <div className="p-4 w-full">
        <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-semibold">{menu.title}</h3>
            <p className="font-bold text-lg">${menu.price.toFixed(2)}</p>
        </div>
        <p className="text-gray-600 text-sm mt-1">{menu.description}</p>
        <div className="w-full flex justify-center cursor-pointer">
        <button type="button" className="mt-4 btn px-4 py-1">
            Order Now!
        </button>
        </div>
      </div>
    </motion.div>
  )
}

export default MenuCard
