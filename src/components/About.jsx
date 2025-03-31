import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../../src/styles.js";
import { services } from "../../src/constants/index.js";
import { SectionWrapper } from "../../src/hoc/index.js";
import { fadeIn, textVariant } from "../../src/utils/motion.js";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Sobre mí</p>
        <h2 className={styles.sectionHeadText}>algo general</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
          Soy desarrollador de software especializado en tecnologías web, con experiencia en el stack JavaScript y en servicios de nube (Azure, AWS, GCP). Me apasiona trabajar con frameworks modernos como React, Node.js y MongoDB, los cuales considero extremadamente versátiles.

          Siempre estoy en busca de nuevos conocimientos y me encanta colaborar en proyectos innovadores. Me dedico a ayudar a las personas a encontrar soluciones óptimas para sus productos, creando soluciones inteligentes que resuelven problemas de la manera más eficiente posible.

          Mi objetivo es trabajar en equipo para dar vida a tus ideas. <strong>
            ¡Vamos a trabajar juntos para hacer realidad tus proyectos!
            </strong> 

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
