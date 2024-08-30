import Image from "next/image"

const ServiceCard = ({ cardImg, title, para }) => {
 return (
  <>
   <div className="bg-slate-800 text-white flex flex-col justify-center items-center py-8 px-5 rounded mr-7 max-md:m-7 ">
    <Image src={cardImg} width={80} height={80} alt={title} />
    <h3 className="font-semibold text-xl py-3">{title}</h3>
    <p className="font-normal text-center text-md">{para}</p>
   </div>
  </>
 )
}

export default ServiceCard