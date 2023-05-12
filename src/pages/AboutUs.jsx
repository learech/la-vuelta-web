import myImg from "../assets/images/particular_3.jpg";
import myImg2 from "../assets/images/particular_5.jpg"
import myImg3 from "../assets/images/granja_infancia_5.jpg"
import {Link} from 'react-router-dom'

const AboutUs = () => {
  return (
    <>
      <section className="md:h-full flex items-center text-gray-600">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-12">
                        <h5 className="text-base md:text-lg text-secondary mb-1 font-semibold">
                            Últimas novedades
                        </h5>
                        <h1 className="text-2xl md:text-5xl text-primary font-semibold">
                            Algunos de nuestros trabajos más recientes
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 sm:w-1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-72 md:h-48 w-full object-cover object-center"
                                    src={myImg2}
                                    alt="blog"
                                />
                                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h2 className="text-base font-medium text-indigo-300 mb-1">
                                        Abril, 2023
                                    </h2>
                                    <h1 className="text-2xl font-semibold mb-3">
                                        Particular
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Aperiam modi, expedita
                                        quos doloremque autem ipsum itaque
                                        incidunt ipsam reprehenderit fuga!
                                        Dolores quisquam eius cum accusamus?
                                    </p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link to={"/wrapper"}>
                                            <p className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0 font-bold cursor-pointer">
                                                Ver más trabajos
                                                <svg
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-72 md:h-48 w-full object-cover object-center"
                                    src={myImg3}
                                    alt="blog"
                                />
                                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h2 className="text-base font-medium text-indigo-300 mb-1">
                                        Abril, 2023
                                    </h2>
                                    <h1 className="text-2xl font-semibold mb-3">
                                        Granja de la infancia
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Aperiam modi, expedita
                                        quos doloremque autem ipsum itaque
                                        incidunt ipsam reprehenderit fuga!
                                        Dolores quisquam eius cum accusamus?
                                    </p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link to={"/wrapper"}>
                                            <p className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0 font-bold cursor-pointer">
                                                Ver más trabajos
                                                <svg
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-72 md:h-48 w-full object-cover object-center"
                                    src={myImg}
                                    alt="blog"
                                />
                                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h2 className="text-base font-medium text-indigo-300 mb-1">
                                        Abril, 2023
                                    </h2>
                                    <h1 className="text-2xl font-semibold mb-3">
                                        Particular
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Aperiam modi, expedita
                                        quos doloremque autem ipsum itaque
                                        incidunt ipsam reprehenderit fuga!
                                        Dolores quisquam eius cum accusamus?
                                    </p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link to={"/wrapper"}>
                                            <p className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0 font-bold cursor-pointer">
                                                Ver más trabajos
                                                <svg
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </>
  )
}

export default AboutUs