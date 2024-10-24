import Image from "next/image"
import Link from 'next/link'
import Car1 from "@/public/Cover.jpg"

export default function CarCard(){
    return(
        <div className="bg-white p-2 h-auto w-80 my-8 flex flex-col items-center ">
            <Link href={'/cars/1'}><Image src={Car1} alt="car1" height={300} width={300} /></Link>
            <h2 className="text-2xl font-bold text-slate-600">Suzuki Alto</h2>
            <h2 className="text-xl font-semibold text-green-400">PKR 20 - 25 lacs</h2>

            <div className="flex pt-5">
                <p className="text-amber-500 text-xl pr-4">★★★☆☆</p>
                <p>Reviews</p>
            </div>
        </div>
    )
}