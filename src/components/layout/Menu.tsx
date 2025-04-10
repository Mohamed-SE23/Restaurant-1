import {motion} from "framer-motion";
import StarWrapper from "../../hoc/SectionWrapper"
import { textVariant } from "../../utils/motion";
import { menu, menuType } from "../../data";
import MenuCard from "../items/MenuCard";
import { styles } from "../../styles";

const Menu = () => {

  return (
    <div
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div
        variants={textVariant()}
       className="text-center">
        <h1 className="text-4xl text-secondary font-bold mt-8">
          Our Menu
        </h1>
        <p className="uppercase">
          discover our tasty menu
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 mt-12">
        {
          menu.map((menu: menuType, index:number) => {
            return <MenuCard 
                index={index}
                menu={menu} />
          })
        }
      </div>
    </div>
  )
}

export default StarWrapper(Menu, "menu")
