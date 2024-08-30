"use client"
import { useState } from "react";
import BgAnimation from "../components/BgAnimation"
import Image from "next/image";

const Portfolio = () => {
 const projects = [
  { id: 1, title: 'Project One', category: 'Static Websites', imgUrl: '/project-1.webp' },
  { id: 2, title: 'Project Two', category: 'WordPress', imgUrl: '/project-1.webp' },
  { id: 3, title: 'Project Three', category: 'PHP', imgUrl: '/project-1.webp' },
  { id: 4, title: 'Project Four', category: 'JavaScript', imgUrl: '/project-1.webp' },
  { id: 5, title: 'Project Five', category: 'WordPress', imgUrl: '/project-1.webp' },
 ];

 const [filter, setFilter] = useState('All');

 const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

 return (
  <>
   <section className="bg-slate-700 relative z-10 text-white">
    <BgAnimation />
    <div className="container mx-auto py-5">
     <h1 className="text-4xl font-semibold text-center py-5">Our Portfolio</h1>
    </div>

    <div className="container mx-auto p-4">
     <div className="flex justify-center gap-7 max-md:gap-4 mb-8 transition-all">
      <button onClick={() => setFilter('All')}>All</button>
      <button onClick={() => setFilter('Static Websites')}>Static Websites</button>
      <button onClick={() => setFilter('WordPress')}>WordPress</button>
      <button onClick={() => setFilter('PHP')}>PHP</button>
      <button onClick={() => setFilter('JavaScript')}>JavaScript</button>
     </div>

     <div className="flex max-md:flex-col justify-center flex-wrap gap-7 pb-10">
      {filteredProjects.map(project => (
       <div key={project.id} className="w-1/4 max-md:w-4/5 max-md:mx-auto rounded-lg hover:cursor-pointer hover:scale-105 transition-transform duration-400" >
        <div className="box-border p-5 bg-gradient-to-r from-slate-800 to-blue-800 rounded-lg overflow-hidden ">
         <div className="rounded-lg overflow-hidden h-64">
          <Image src={project.imgUrl} alt={project.title} height={100} width={800} className="w-full" />
         </div>
         <h3 className="text-xl font-semibold pt-4">{project.title}</h3>
         <p className="text-gray-300 py-2">Category: <span className="text-lime-400">{project.category}</span></p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>
  </>
 )
}

export default Portfolio