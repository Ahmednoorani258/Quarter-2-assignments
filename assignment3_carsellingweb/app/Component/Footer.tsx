import Link from "next/link"

export default function Footer(){
    return(
        <div className="bg-slate-900 text-white text-center text-md sm:text-xl md:text-2xl p-4 ">Developed by || <Link className="text-blue-700 hover:text-neutral-300" href={'https://www.linkedin.com/in/mahmednorani/'}> Muhammad Ahmed Noorani</Link></div>
    )
}