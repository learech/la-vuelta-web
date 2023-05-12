import back_1 from "../assets/images/background_1.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaWhatsapp, FaEnvelopeSquare } from "react-icons/fa";
import Services from "./Services";
import AboutUs from "./AboutUs";
import ImageSlider from "../components/ImageSlider";


const Home = () => {
    return (
        <>
            <div id="home">
                <img
                    className="w-full h-screen object-cover object-left scale-x-[-1]"
                    src={back_1}
                    alt="imagen"
                />
                <div className="w-full absolute h-screen top-0 left-0 bg-white/50">
                    <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                        <h1 className="sm:text-5xl text-4xl font-bold text-gray-900">
                            la <span className="text-sky-600">V</span>uelta
                        </h1>
                        <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-900 font-bold">
                            <TypeAnimation
                                sequence={[
                                    "ESPACIOS VERDES", // Types 'One'
                                    2000, // Waits 2s
                                    "MOBILIARIO URBANO", // Deletes 'One' and types 'Two'
                                    2000, // Waits 2s
                                    "HIGIENE GENERAL",
                                    2000, // Types 'Three' without deleting 'Two'
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: "1em", paddingLeft: "5px" }}
                            />
                        </h2>
                        <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <div>
                            <a href="https://instagram.com/cooperativalavuelta/">
                            <FaInstagram className="cursor-pointer" size={20}/>
                            </a>
                        </div>
                        <div>
                        <a href="https://wa.me/+543415075396?text=Me%20interesa%20el%20servicio">
                            <FaWhatsapp className="cursor-pointer" size={20}/>
                            </a>
                        </div>
                            
                            <FaEnvelopeSquare
                                className="cursor-pointer"
                                size={20}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <AboutUs />
            <Services />
            <ImageSlider />
        </>
    );
};

export default Home;
