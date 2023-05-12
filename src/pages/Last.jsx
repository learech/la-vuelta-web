import LastItem from '../components/LastItem';
// image_1 from './assets/images/img_1.jpg';
// image_2 from './assets/images/img_2.jpg';
// image_3 from './assets/images/img_3.jpg';
import image_4 from '../assets/images/sede_de_gobierno_1.jpg';
import image_5 from '../assets/images/ingeser_3.jpg';
import image_6 from '../assets/images/particular_6.jpg';
import image_7 from '../assets/images/particular_4.jpg';


const Last = () => {
  return (
    <div id='trabajos' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
     <h1 className='mt-16 text-4xl font-bold text-center text-primary'>Sobre Nosotros</h1>
     <p className='text-center py-8 font-semibold text-2xl'>Descripción de los integrantes de la vuelta y los trabajos realizan</p>
     <p className='text-center py-8 font-semibold text-4xl'>
        Cada vez son más las personas que confían en nuestra calidad y servicios.
     </p>
     <div className='grid sm:grid-cols-2 gap-12'>
        <LastItem img={image_4} title='la Vuelta' />
        <LastItem img={image_5} title='la Vuelta' />
        <LastItem img={image_6} title='la Vuelta' />
        <LastItem img={image_7} title='la Vuelta' />        
     </div>
    </div>
  )
}

export default Last