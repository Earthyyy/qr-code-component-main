import QRCode from '../assets/image-qr-code.png'

const Card = () => {
  return (
    <article className='w-80 h-[31.0625rem] bg-secondary rounded-[1.25rem] card-box-shadow p-4 grid gap-6'>
    <img src={QRCode} alt="QR Code" className='rounded-[0.625rem]'  />
        <div className='flex flex-col text-center gap-4 px-4'>
            <h2 className='heading'>Improve your front-end skills by building projects</h2>
            <p className='body'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    </article>
  )
}

export default Card