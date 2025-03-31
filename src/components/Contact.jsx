import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../src/styles.js";
import { EarthCanvas } from "./canvas/index.js";
import { SectionWrapper } from "../../src/hoc/index.js";
import { slideIn } from "../../src/utils/motion.js";

const Contacto = () => {
  const formRef = useRef();
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [cargando, setCargando] = useState(false);

  const manejarCambio = (e) => {
    const { target } = e;
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    setCargando(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formulario.nombre,
          to_name: "JavaScript Mastery",
          from_email: formulario.correo,
          to_email: "sujata@jsmastery.pro",
          message: formulario.mensaje,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setCargando(false);
          alert("Gracias. Me pondré en contacto contigo lo antes posible.");

          setFormulario({
            nombre: "",
            correo: "",
            mensaje: "",
          });
        },
        (error) => {
          setCargando(false);
          console.error(error);

          alert("Ahh, algo salió mal. Por favor, inténtalo de nuevo.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Contáctame</p>
        <h3 className={styles.sectionHeadText}>Contacto.</h3>

        <form
          ref={formRef}
          onSubmit={manejarEnvio}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Tu Nombre</span>
            <input
              type='text'
              name='nombre'
              value={formulario.nombre}
              onChange={manejarCambio}
              placeholder="¿Cuál es tu nombre?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Tu correo</span>
            <input
              type='email'
              name='correo'
              value={formulario.correo}
              onChange={manejarCambio}
              placeholder="¿Cuál es tu dirección de correo?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Tu Mensaje</span>
            <textarea
              rows={7}
              name='mensaje'
              value={formulario.mensaje}
              onChange={manejarCambio}
              placeholder='¿Qué quieres decir?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {cargando ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contacto, "contacto");
