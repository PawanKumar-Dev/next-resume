import BgAnimation from "../components/BgAnimation"

const Contact = () => {
 return (
  <>
   <section className="bg-slate-700 relative z-10">
    <BgAnimation />
    <div className="container mx-auto text-white py-5">
     <h1 className="text-4xl font-semibold text-center py-5">Contact Us</h1>

     <div className="w-2/6 max-md:w-4/5 mx-auto mb-5">
      <form action="" method="post">
       <label className="block">
        <span className="block text-lg text-white">Username</span>
        <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-slate-700" />
       </label>

       <label className="block mt-4">
        <span className="block text-lg text-white">Email-id</span>
        <input type="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-slate-700" />
       </label>

       <label className="block mt-4">
        <span className="block text-lg text-white">Message</span>
        <textarea rows={7} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-slate-700" />
       </label>

       <label className="flex justify-center mt-4">
        <button className="inline-block text-black bg-lime-400 border-2 border-transparent hover:bg-transparent hover:text-lime-400 hover:border-lime-400 px-5 py-3 rounded transition-all">Submit</button>
       </label>
      </form>
     </div>

    </div>
   </section>
  </>
 )
}

export default Contact