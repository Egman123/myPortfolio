import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const handleClick = () => {
  window.open("https://nc-mern-shop.onrender.com/", "_blank"); // Открыть в новой вкладке
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, imgName }) => {
  const overlayStyles = `cursor-pointer absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-gray-800 z-30 flex flex-col justify-center items-center text-center p-16 text-white`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  console.log('imgName:', imgName);
  return (
    <motion.div variants={projectVariant} className="relative">
      <div onClick={handleClick} className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7"></p>
      </div>
      {/* Обернуть img в <a> с href */}
      <a
        href={"https://nc-mern-shop.onrender.com/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require(`../assets/${imgName}`)} // Обратите внимание на правильность имени файла
          alt={projectTitle}
          className="w-full h-auto rounded-lg cursor-pointer" // Добавил класс cursor-pointer для указания на кликабельность
        />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red-500">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        {/* <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p> */}
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red-600
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project imgName="project1.png" title="MERN Ecommerce Web Store" />
          <Project imgName="project2.jpeg" title="project 2" />

          {/* ROW 2 */}
          <Project imgName="project3.jpeg" title="project 3" />
          <Project imgName="project4.jpeg" title="project 4" />
      
          <div
            className="flex justify-center text-center items-center p-10 bg-blue-600
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
