import Link from "next/link"
import Image from "next/image"

export default function Navbar(){
    return(
        <header className="text-white bg-black ">
            <div className="flex items-center justify-between p-4 px-20 ">
                <div>
                    <Image src={'https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg'} alt="Logo" height={50} width={150}></Image>
                </div>
                <nav className="text-xl space-x-12 ">
                    <Link href={"/"}>Used Cars▼</Link>
                    <Link href={"/"}>New Cars▼</Link>
                    <Link href={"/"}>Bikes▼</Link>
                    <Link href={"/"}>Auto Store▼</Link>
                    <Link href={"/"}>Videos</Link>
                    <Link href={"/"}>Forums</Link>
                    <Link href={"/"}>BLog</Link>
                    <Link href={"/"}>More▼</Link>
                </nav>
                <button className="bg-red-700 p-3 text-lg px-8  font-bold rounded-md">Post an Ad▼</button>
            </div>
        </header>
    )
}