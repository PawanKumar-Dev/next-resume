import Image from 'next/image'

const SkillCard = ({ skIcon, skPerCent }) => {
 return (
  <>
   <div className="bg-slate-800 py-6 px-7 max-md:my-7 max-md:mx-8 rounded-lg flex flex-col justify-center items-center shadow-2xl shadow-slate-800 cursor-pointer">
    <Image src={skIcon} width={50} height={50} alt="skill icon" />
    <h2 className="pt-3 text-lg font-semibold">{skPerCent}%</h2>
   </div>
  </>
 )
}

export default SkillCard