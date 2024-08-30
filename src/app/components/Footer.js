import Image from "next/image"
import Link from "next/link"
import Nav from "./Nav"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaHeart, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
 return (
  <>
   <footer className="bg-slate-800 px-4 py-6 relative z-10">
    <div className="mx-auto flex flex-col">
     <div className="flex justify-center">
      <Link href="/" className="pt-4 pb-2">
       <Image src="/logo.png" width={103} height={30} alt="Footer Logo" />
      </Link>
     </div>

     <div className="w-2/3 gap-3 mx-auto py-6">
      <Nav />
     </div>

     <ul className="flex justify-center gap-4">
      <li className="bg-slate-700 hover:bg-slate-500 p-3 rounded-full cursor-pointer transition-all"><Link href="#"><FaFacebookSquare size={15} color={"white"} /></Link></li>
      <li className="bg-slate-700 hover:bg-slate-500 p-3 rounded-full cursor-pointer transition-all"><Link href="#"><FaInstagramSquare size={15} color={"white"} /></Link></li>
      <li className="bg-slate-700 hover:bg-slate-500 p-3 rounded-full cursor-pointer transition-all"><Link href="#"><FaLinkedin size={15} color={"white"} /></Link></li>
     </ul>

     <Link className="fixed bottom-5 right-5 animate-bounce duration-5000" href="#"><FaWhatsapp size={45} color={"#25D366"} /></Link>

     <hr className="w-3/4 mx-auto mt-10" />

     <div className="text-center">
      <p className="text-white py-3">@2024 All Right Reserved || Made with <FaHeart size={25} color={"red"} className="inline-block px-1" /> by Pawan</p>
     </div>
    </div>
   </footer>
  </>
 )
}

export default Footer