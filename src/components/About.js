import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy Ricardo Pulido
            <br className="hidden lg:inline-block" /> Me encanta construir
            aplicaciones web.
          </h1>
          <p className="mb-8 leading-relaxed">
            Soy una persona dedicada a mantenerme en forma, esto me ayuda a
            estar en paz física y mentalmente; Una de mis mayores virtudes es
            ayudar a los que realmente me necesitan, mi mayor defecto es querer
            hacer todo por mi mismo a pesar de poder pedir ayuda y solucionar
            todo más rápido, estoy trabajando en mejorar ese defecto..
            <br></br>
            <br></br>
            Me gusta animar a la gente y animarme a mi mismo, trato siempre de
            ver el lado positivo de toda adversidad para evitar frustraciones
            innecesarias. Actualmente me encuentro abierto a nuevas
            oportunidades, estas son algunas de las tecnologías que manejo y si
            gustas contactarme tienes la sección de contacto para hacerlo.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Trabaja conmigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Mira mis trabajos anteriores
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
