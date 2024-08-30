"use client"
import Link from 'next/link'
import { usePathname } from "next/navigation";

const NavElement = ({ navText, navLink }) => {
  const pathname = usePathname();

  return (
    <>
      <Link href={navLink}
        className={(pathname == navLink ? "text-lime-400 border-lime-400 py-1 border-b-2 border-transparent hover:text-lime-400 hover:border-lime-400 transition-all" : "py-1 border-b-2 border-transparent hover:text-lime-400 hover:border-lime-400 transition-all")}>{navText}</Link>
    </>
  )
}

export default NavElement