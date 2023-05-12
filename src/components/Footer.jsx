import Logo from '../assets/images/logo_blanco.png'
import {Link} from 'react-router-dom'
import {
    FaInstagram,
    FaWhatsapp,
    FaEnvelopeSquare,
    FaMap,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full bg-fourth py-6">
            <div className="max-w-[1240px] mx-auto flex flex-col px-4">
                <div className="sm:flex text-center justify-between items-center">
                    <Link to = {"/"}>
                    <img
                            src={Logo}
                            className="flex w-40 md:w-60 cursor-pointer hover:scale-110 ease-in duration-200 items-center"
                        />
                        </Link>
                    <div className="flex justify-between w-full sm:max-w-[280px] my-4">
                        <FaWhatsapp className="icon" />
                        <FaEnvelopeSquare className="icon" />
                        <FaMap className="icon" />
                        <FaInstagram className="icon" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <ul className="lg:flex justify-between font-semibold">
                        <li>Cooperativa Ltda</li>
                    </ul>
                    <ul className="text-right lg:flex justify-between font-semibold">
                        <li>Designed</li>
                        <li>By Learech</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
