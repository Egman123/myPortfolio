import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-16 pb-32 bg-gradient-to-b  text-white">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:items-center md:gap-12 mt-12 px-5">
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-bold text-5xl mb-4">
            MY <span className="text-red-400">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-6 mb-8 text-lg">
            A showcase of technologies and tools I’ve mastered in my journey as a web developer.
          </p>
        </motion.div>

        <div className="mt-8 md:mt-0">
          {isAboveLarge ? (
            <motion.div
              className="relative z-0 ml-10 before:absolute before:-top-8 before:-left-8
                before:w-full before:h-full before:border-4 before:border-red-400 before:z-[-1]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <img
                alt="skills"
                className="z-10 rounded-lg"
                src={require('../assets/skills-image.png')}
              />
            </motion.div>
          ) : (
            <motion.img
              alt="skills"
              className="z-10 rounded-lg"
              src={require('../assets/skills-image.png')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 px-5">
        {[
          { id: 1, title: 'JavaScript', delay: 0 },
          { id: 2, title: 'React JS', delay: 0.2 },
          { id: 3, title: 'Node.js & Express.js', delay: 0.4 },
          { id: 4, title: 'HTML/CSS & Tailwind CSS', delay: 0 },
          { id: 5, title: 'Git & GitHub', delay: 0.2 },
        ].map(skill => (
          <motion.div
            key={skill.id}
            className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: skill.delay, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="font-playfair font-bold text-6xl text-red-400">{skill.id}</p>
            <p className="font-playfair font-semibold text-2xl mt-3">{skill.title}</p>
          </motion.div>
        ))}
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="mt-16 px-5">
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="font-playfair font-bold text-4xl text-red-400">Experience</p>
          <p className="font-playfair font-semibold text-2xl mt-3">Full MERN Stack Project</p>
          <p className="mt-5 text-2xl">
            Developed a complete estate website using the MERN stack, including authentication, authorization, Stripe payment integration, product upload, filtering, and more.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
