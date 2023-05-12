import { Link} from 'react-router-dom';
const LastItem = ({ img, title }) => {
    return (
        <div className="mt-10 relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#15310d]">
            <img src={img} alt="/" className="rounded-xl group-hover" />
            <div className='hidden group-hover:block absolute top-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className="text-2xl font-bold text-fifth tracking-wider text-center">
                {title}
                </h3>
                <p className="pb-4 pt-2 text-fifth text-center font-bold">Cooperativa ltda</p>
                <Link to ="/wrapper">
                    <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg ">Ver galería de imágenes</p>
                </Link>
            </div>
        </div>
    );
};

export default LastItem;
