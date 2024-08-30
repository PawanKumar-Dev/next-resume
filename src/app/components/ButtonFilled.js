import Link from "next/link"

const ButtonFilled = ({ buttonText, hrefLink }) => {
 return (
  <>
   <Link href={hrefLink} className="text-black bg-lime-400 border-2 border-transparent hover:bg-transparent hover:text-lime-400 hover:border-lime-400 px-5 py-3 rounded transition-all">{buttonText}</Link>
  </>
 )
}

export default ButtonFilled