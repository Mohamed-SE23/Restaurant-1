import {motion} from "framer-motion";
import StarWrapper from "../../hoc/SectionWrapper"
import { textVariant } from "../../utils/motion";
import { menu, menuType } from "../../data";
import MenuCard from "../items/MenuCard";

const Menu = () => {
  return (
    <div>
      <motion.div
        variants={textVariant()}
       className="text-center">
        <h1 className="text-4xl text-secondary font-bold mt-20">
          Our Menu
        </h1>
        <p className="uppercase">
          discover our tasty menu
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 mt-12">
        {
          menu.map((item: menuType, key:number) => {
            return <MenuCard 
                key={key}
                title={item.title}
                img={item.img}
                price={item.price}
                description={item.description} />
          })
        }
      </div>
    </div>
  )
}

export default StarWrapper(Menu, "menu")
