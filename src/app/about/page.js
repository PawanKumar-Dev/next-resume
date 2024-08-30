import Image from 'next/image'
import Link from 'next/link'
import ButtonWhiteOutline from '../components/ButtonWhiteOutline'
import ButtonFilled from '../components/ButtonFilled'
import BgAnimation from '../components/BgAnimation'

const About = () => {
 return (
  <>
   <section className="bg-slate-700 relative z-10">
    <BgAnimation />
    <div className="container mx-auto text-white py-5">
     <h1 className="text-4xl font-semibold text-center py-5">About Us</h1>

     <div className="flex max-md:flex-col">
      <div className="w-1/2 flex justify-center items-center max-md:w-full">
       <Image src="/about-us.svg" width={550} height={350} alt="About Us" className="float" />
      </div>

      <div className="w-1/2 max-md:w-full max-md:px-7 flex flex-col justify-center items-center">
       <div className="pb-7">
        <p className="text-xl leading-9 py-2">Hey, I&apos;m <span className="text-lime-400">Pawan</span>. A web developer/designer who loves transforming ideas into interactive web design.</p>
        <p className="text-xl leading-9 py-2">With a strong foundation in <Link className="text-lime-400" href="/skills">front-end and back-end technologies</Link>, I enjoy pushing the boundaries of web design to create websites that are not only visually appealing but also highly functional.</p>
        <p className="text-xl leading-9 py-2">My passion for web development is driven by a curiosity for new technologies and a desire to create solutions that make a difference.</p>

        <div className="mt-10">
         <ButtonWhiteOutline buttonText={"Contact Me"} hrefLink={"/contact"} />
         <span className="ml-5">
          <ButtonFilled buttonText={"See Portfolio"} hrefLink={"/portfolio"} />
         </span>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default About