import Image from "next/image"
import Link from 'next/link'
import { CarsCardData } from "../data/data"

export default function CarCard( cardData:CarsCardData){
    return(
        <div className="bg-white p-2 h-auto w-80 my-8 flex flex-col items-center ">
            <Link href={`/cars/${cardData.carName.replace(/\s+/g, '-').toLowerCase()}`}><Image src={cardData.image} alt="car1" height={300} width={300} /></Link>
            <h2 className="text-2xl font-bold text-slate-600">{cardData.carName}</h2>
            <h2 className="text-xl font-semibold text-green-400">PKR {cardData.pricerange} lacs</h2>

            <div className="flex pt-5">
                <p className="text-amber-500 text-xl pr-4">★★★☆☆</p>
                <p>{cardData.reviews}Reviews</p>
            </div>
        </div>
    )
}