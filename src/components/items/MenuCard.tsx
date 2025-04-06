import { menuType } from "../../data"

const MenuCard = ({img, title, description, price}: menuType) => {
  return (
    <div key={title} className="group bg-white flex flex-col justify-between items-start rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
      <img src={img} alt={title} className="w-full h-44 object-cover rounded-md" />
      <div className="p-4 w-full">
        <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="font-bold text-lg">${price.toFixed(2)}</p>
        </div>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div className="w-full flex justify-center cursor-pointer">
        <button type="button" className="mt-4 btn px-4 py-1">
            Order Now!
        </button>
        </div>
      </div>
    </div>
  )
}

export default MenuCard
