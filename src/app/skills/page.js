import BgAnimation from "../components/BgAnimation"
import SkillCard from "../components/SkillCard"

const Skills = () => {
 return (
  <>
   <section className="bg-slate-700 relative z-10 h-[70vh]">
    <BgAnimation />
    <div className="container mx-auto text-white py-5">
     <h1 className="text-4xl font-semibold text-center py-5">Skills</h1>

     <div className="flex justify-around max-md:flex-col py-9 max-md:py-4">
      <SkillCard skIcon={"/html5.png"} skPerCent={"95"} />
      <SkillCard skIcon={"/css3.png"} skPerCent={"90"} />
      <SkillCard skIcon={"/bootstrap.svg"} skPerCent={"93"} />
      <SkillCard skIcon={"/js.png"} skPerCent={"75"} />
      <SkillCard skIcon={"/jquery.svg"} skPerCent={"70"} />
      <SkillCard skIcon={"/react.png"} skPerCent={"60"} />

     </div>

     <div className="flex justify-around max-md:flex-col py-9 max-md:py-3">
      <SkillCard skIcon={"/nextjs.svg"} skPerCent={"65"} />
      <SkillCard skIcon={"/php.png"} skPerCent={"80"} />
      <SkillCard skIcon={"/codeigniter.svg"} skPerCent={"70"} />
      <SkillCard skIcon={"/wordpress.png"} skPerCent={"85"} />
      <SkillCard skIcon={"/laravel.svg"} skPerCent={"55"} />
      <SkillCard skIcon={"/photoshop.png"} skPerCent={"70"} />
     </div>
    </div>
   </section>
  </>
 )
}

export default Skills
