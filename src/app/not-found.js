import ButtonFilled from './components/ButtonFilled'

const NotFound = () => {
 return (
  <>
   <section className="bg-slate-700 relative z-10">
    <div className="h-[70vh] flex flex-col gap-5 justify-center items-center text-white">
     <h2 className="text-6xl uppercase">404 Error</h2>
     <p className="text-xl py-1">Could not find requested resource</p>
     <ButtonFilled hrefLink="/" buttonText="Go to Homepage" />
    </div>
   </section>
  </>
 )
}

export default NotFound