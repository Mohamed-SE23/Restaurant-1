import { motion } from "framer-motion";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import { cover3 } from "../../assets";
import { useState } from "react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reservation submitted successfully!");
  };

  return (
    <div>
      <div
        className="w-full bg-cover bg-center mt-40"
        style={{ backgroundImage: `url(${cover3})` }}
      >
        <div className={`${styles.paddingX} ${styles.paddingY} bg-black/70 `}>
          <motion.div
            variants={textVariant()}
            className="text-center text-forth mb-12"
          >
            <h1 className="text-4xl font-bold">
              Reservation
            </h1>
            <p>
             Reserve your spot for an unforgettable dining experience.
            </p>
          </motion.div>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col justify-center text-forth gap-4">
            <input 
              type="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-3 rounded-md bg-tertiary focus:ring-primary"
              required

               />
            <input 
              type="email"
              value={formData.email}
              placeholder="Your email"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-tertiary"
              />
            <input 
              type="date"
              onChange={handleChange}
              value={formData.date}
              required
              className="w-full p-3 rounded-md bg-tertiary" />
            <input 
              type="time"
              onChange={handleChange}
              value={formData.time}
              required
              className="w-full p-3 rounded-md bg-tertiary" />
                      <select 
          name="guests" 
          value={formData.guests} 
          onChange={handleChange} 
          className="w-full p-3 rounded mb-3 bg-tertiary" 
        >
          {[...Array(10).keys()].map((n) => (
            <option key={n + 1} value={n + 1}>{n + 1} Guest{n > 0 ? "s" : ""}</option>
          ))}
        </select>
        <button type="submit" className="w-full border-2 border-primary  rounded-md text-primary py-3 cursor-pointer hover:bg-primary hover:text-white transition">
          Reserve Now
        </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
