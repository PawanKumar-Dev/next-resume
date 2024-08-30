import NavElement from './NavElement';
import ButtonFilled from './ButtonFilled';

const Nav = ({ cvButton }) => {
 return (
  <>
   <nav className="text-white">
    <ul className="flex gap-8 justify-center max-md:hidden">
     <li><NavElement navText={"Home"} navLink={"/"} /></li>
     <li><NavElement navText={"About Us"} navLink={"/about"} /></li>
     <li><NavElement navText={"Services"} navLink={"/services"} /></li>
     <li><NavElement navText={"Skills"} navLink={"/skills"} /></li>
     <li><NavElement navText={"Portfolio"} navLink={"/portfolio"} /></li>
     <li><NavElement navText={"Contact Us"} navLink={"/contact"} /></li>
     <li>{cvButton ? <ButtonFilled buttonText={"Download CV"} hrefLink={"#"} /> : ""}</li>
    </ul>
   </nav>
  </>
 )
}

export default Nav