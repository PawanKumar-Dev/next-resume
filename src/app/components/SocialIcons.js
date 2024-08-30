import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
 return (
  <>
   <div className="fixed top-1/3 left-4 z-50 max-md:hidden">
    <ul className="flex flex-col gap-4">
     <li className="bg-slate-800 hover:bg-lime-500 text-white hover:text-slate-800 p-3 rounded cursor-pointer"><Link href="#"><FaFacebookSquare size={15} /></Link></li>
     <li className="bg-slate-800 hover:bg-lime-500 text-white hover:text-slate-800 p-3 rounded cursor-pointer"><Link href="#"><FaInstagramSquare size={15} /></Link></li>
     <li className="bg-slate-800 hover:bg-lime-500 text-white hover:text-slate-800 p-3 rounded cursor-pointer"><Link href="#"><FaLinkedin size={15} /></Link></li>
    </ul>
   </div>
  </>
 )
}

export default SocialIcons