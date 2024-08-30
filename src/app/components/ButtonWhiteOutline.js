import Link from "next/link"

const ButtonWhiteOutline = ({ buttonText, hrefLink }) => {
 return (
  <>
   <Link href={hrefLink} className="text-white bg-transparent border-2 border-white hover:bg-lime-400 hover:text-black hover:border-transparent px-5 py-3 rounded transition-all">{buttonText}</Link>
  </>
 )
}

export default ButtonWhiteOutline