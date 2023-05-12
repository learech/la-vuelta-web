

const Contact = () => {
  return (
    <div id="contact" name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full mt-10'>
            <div className='pb-8 mb-5'>
                <p className='text-4xl font-bold inline border-b-4 border-secondary text-gray-300'>Contacto</p>
                <p className='text-gray-300 py-4'>Dejanos tu mensaje y nos pondremos en contacto.</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-3' name="message" rows="4" placeholder='Message'></textarea>
            <button className='text-white border-2 hover: bg-secondary hover:border-secondary px-4 py-4 mx-auto flex items-center m-8'>Enviar</button>
        </form>
    </div>
  )
}

export default Contact