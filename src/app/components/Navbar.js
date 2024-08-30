import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'

const Navbar = () => {
 return (
  <header className="bg-slate-800 p-7 max-md:py-5 max-md:px-4 relative z-10">
   <div className="container mx-auto flex justify-between items-center">
    <div className="logo">
     <Link href="/">
      <Image src="/logo.png" width={103} height={30} alt="Logo" />
     </Link>
    </div>

    <Nav cvButton={true} />
   </div>
  </header>
 )
}

export default Navbar