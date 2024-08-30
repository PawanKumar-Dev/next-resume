"use client"
import NavElement from './NavElement'
import { useState } from 'react'

const MobileNav = () => {
 const [first, setfirst] = useState(false)

 const handleClick = () => {
  setfirst(!first)
 }

 const handleClose = () => {
  setfirst(!first)
 }

 return (
  <>
   <button type="button" className="hidden absolute top-3 right-3 z-40 max-md:inline-block transition-all duration-1000" onClick={handleClick}>
    <svg width={40} height={40} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM19.5 13.25C19.9142 13.25 20.25 12.9142 20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75V13.25ZM7.834 15.75C7.41979 15.75 7.084 16.0858 7.084 16.5C7.084 16.9142 7.41979 17.25 7.834 17.25V15.75ZM17.167 17.25C17.5812 17.25 17.917 16.9142 17.917 16.5C17.917 16.0858 17.5812 15.75 17.167 15.75V17.25ZM7.834 7.75C7.41979 7.75 7.084 8.08579 7.084 8.5C7.084 8.91421 7.41979 9.25 7.834 9.25V7.75ZM17.167 9.25C17.5812 9.25 17.917 8.91421 17.917 8.5C17.917 8.08579 17.5812 7.75 17.167 7.75V9.25ZM5.5 13.25H19.5V11.75H5.5V13.25ZM7.834 17.25H17.167V15.75H7.834V17.25ZM7.834 9.25H17.167V7.75H7.834V9.25Z" fill="#fff"></path></g></svg>
   </button>

   <div style={{ display: first ? "block" : "none" }} className="fixed top-0 left-0 z-[999]">
    <button type="button" onClick={handleClick} className="absolute top-3 right-3">
     <svg
      height={40}
      width={40}
      viewBox="0 0 32 32"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
     >
      <g id="SVGRepo_iconCarrier">
       <g fill="none" fillRule="evenodd">
        <g transform="translate(-568, -1087)" fill="#fff">
         <path
          d="M584 1117c-7.732 0-14-6.27-14-14s6.268-14 14-14 14 6.27 14 14-6.268 14-14 14zm0-30c-8.837 0-16 7.16-16 16s7.163 16 16 16 16-7.16 16-16-7.163-16-16-16zm5.717 10.28c-.394-.39-1.031-.39-1.425 0L583.994 1101.58 579.758 1097.34c-.391-.39-1.025-.39-1.414 0-.391.39-.391 1.03 0 1.42l4.236 4.23-4.266 4.27c-.393.39-.393 1.03 0 1.42.394.39 1.032.39 1.426 0l4.266-4.27 4.236 4.24c.391.39 1.025.39 1.414 0 .391-.39.391-1.03 0-1.42l-4.236-4.24 4.296-4.3c.393-.39.393-1.03 0-1.42z"
         ></path>
        </g>
       </g>
      </g>
     </svg>
    </button>

    <ul className="w-svw h-svh flex flex-col gap-5 justify-center items-center bg-slate-700 text-white">
     <li className="text-3xl" onClick={handleClose}><NavElement navText={"Home"} navLink={"/"} /></li>
     <li className="text-3xl" onClick={handleClose}><NavElement navText={"About Us"} navLink={"/about"} /></li>
     <li className="text-3xl" onClick={handleClose}><NavElement navText={"Services"} navLink={"/services"} /></li>
     <li className="text-3xl" onClick={handleClose}><NavElement navText={"Skills"} navLink={"/skills"} /></li>
     <li className="text-3xl" onClick={handleClose}><NavElement navText={"Portfolio"} navLink={"/portfolio"} /></li>
     <li className="text-3xl" onClick={handleClose}><NavElement navText={"Contact Us"} navLink={"/contact"} /></li>
    </ul>
   </div>
  </>
 )
}

export default MobileNav