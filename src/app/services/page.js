import Image from "next/image"
import Link from "next/link"
import BgAnimation from "../components/BgAnimation"
import ServiceCard from "../components/ServiceCard"
import ButtonFilled from "../components/ButtonFilled"

const Services = () => {
 return (
  <>
   <section className="bg-slate-700 relative z-10">
    <BgAnimation />
    <div className="container mx-auto text-white py-5">
     <h1 className="text-4xl font-semibold text-center py-5">Services</h1>

     <div className="flex max-md:flex-col py-9">
      <div className="w-1/2 max-md:w-full py-4 max-md:py-0">
       <div className="w-3/4 max-md:w-full max-md:px-6 max-md:pb-10 max-md:text-center">
        <h2 className="text-3xl font-semibold">Range Of Digital Services.</h2>
        <p className="text-xl leading-9 pt-7">We offer a comprehensive suite of services designed to elevate your online presence.</p>
        <p className="text-xl leading-9 pt-6">Static Web Design solutions to Dynamic Web Design services, our scalable solutions that adapt to your growing business needs. And with Search Engine Optimization (SEO) to I can enhance your website’s visibility.</p>
        <p className="text-xl leading-9 pt-6">Additionally, our blogging is our passion that connect with audience by creating content. <Link className="text-lime-400" href="/portfolio">Check our portfolio</Link> to know what kind of project we have already done.</p>

        <div className="pt-9">
         <ButtonFilled buttonText={"Contact Me"} hrefLink={"/contact"} />
        </div>
       </div>
      </div>

      <div className="w-1/2 max-md:w-full relative">
       <Image src="/service-bg.svg" width={100} height={100} alt="Services Background" className="w-3/4 max-md:w-full absolute top-0 left-0 -z-10" />

       <div className="w-full flex max-md:flex-col justify-center items-center">
        <ServiceCard cardImg={"/static-webdesign.png"} title="Static Web Design" para="Static web design refers to websites with fixed content & structure. Such sites load faster, easier to develop & more secure." />
        <ServiceCard cardImg={"/static-webdesign.png"} title="Dynamic Web Design" para="Wordpress CMS & others have flexible content and structure. User manage data on its own. Built with PHP, JavaScript etc." />
       </div>

       <div className="w-full flex max-md:flex-col justify-center items-center mt-8">
        <ServiceCard cardImg={"/static-webdesign.png"} title="Search Engine Optimization" para="Allow a website to be visible on search engines such as Google, Bing etc. Bcoz without SEO, website can only be pretty." />
        <ServiceCard cardImg={"/static-webdesign.png"} title="Blogging" para="Blogging regularly updates the site with engaging and valuable content to attract and retain readers & foster a loyal audience." />
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Services