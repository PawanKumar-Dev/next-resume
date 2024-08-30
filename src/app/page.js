import Image from "next/image";
import ButtonFilled from "./components/ButtonFilled";
import ButtonWhiteOutline from "./components/ButtonWhiteOutline";
import BgAnimation from "./components/BgAnimation";

export default function Home() {
  return (
    <>
      <section className="bg-slate-700 relative z-10">
        <BgAnimation />
        <div className="container mx-auto py-8 flex max-md:flex-col">
          <div className="w-1/2 h-[70vh] max-md:h-auto max-md:w-full flex justify-center items-center">
            <div className="text-white max-md:text-center pl-3 max-lg:pl-0">
              <h3 className="flex max-md:justify-center text-lg max-md:text-sm  font-bold pb-4">Howdy <Image src="/hello.png" className="px-2 wave" width={40} height={40} alt="Howdy hand icon" /></h3>
              <h1 className="text-7xl max-md:text-5xl font-semibold">Hello, I‘m Pawan, <span className="inline-block text-lime-400">Web Developer</span>.</h1>
              <p className="text-lg pt-5 w-3/4 max-md:w-full">Bringing ideas to life through clean, efficient code and intuitive design. Websites that not only meet client needs but also enhance user experience.</p>

              <div className="flex max-md:justify-center gap-5 py-10">
                <ButtonFilled buttonText={"Hire Me"} hrefLink={"contact"} />
                <ButtonWhiteOutline buttonText={"Download CV"} hrefLink={"#"} />
              </div>
            </div>
          </div>

          <div className="w-1/2 max-md:w-full flex justify-center items-center">
            <Image src="/hero.svg" width={550} height={350} alt="Hero Image" className="float" />
          </div>
        </div>
      </section>
    </>
  );
}