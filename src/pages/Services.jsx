import ServiceItem from "../components/ServiceItem";

const data = [
    {
        servicio: "Espacios verdes",
        descripcion: "Descripción del trabajo que se realiza",
        detalles: "Detalles"
    },
    {
        servicio: "Mobiliario urbano",
        descripcion: "Descripción del trabajo que se realiza",
        detalles: "Detalles"
    },
    {
        servicio: "Higiene general",
        descripcion: "Descripción del trabajo que se realiza",
        detalles: "Detalles"
    },
];
const Services = () => {
    return (
        <div id="servicios" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-primary mt-16 mb-10">
                Servicios
            </h1>
            {data.map((item, idx) => (
                <ServiceItem
                    key={idx}
                    servicio={item.servicio}
                    descripcion={item.descripcion}
                    detalles={item.detalles}
                />
            ))}
        </div>
    );
};

export default Services;