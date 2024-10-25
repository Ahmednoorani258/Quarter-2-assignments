import Image from 'next/image'
import Link from 'next/link'
import { CarsPageData, carsData } from '@/app/data/data'
import car1 from '@/public/Cover.jpg'
import { notFound } from 'next/navigation'

async function getCarData(carname: string): Promise<CarsPageData | undefined> {
    const car = carsData.find(car => car.carName.toLowerCase() === carname.toLowerCase());
    return car;  
}

export default async function CarDetail({ params }: { params: { carname: string } }) {
    console.log(params.carname)
    const carData = await getCarData(params.carname)
    if (!carData) return notFound()
    return (
        <div className="bg-white text-black px-12 md:px-44 py-6 flex justify-center items-center flex-col">
            <h1 className='text-4xl font-bold underline'>{carData.heading}</h1>
            <Image src={carData.image} alt='car' width={500} height={500}></Image>
            <p>{carData.para}</p>

            <h2 className='mb-12 mt-5 text-2xl text-green-600 font-semibold'>PKR {carData.amount}</h2>
            
            <Link href={'/checkout'}><button className='rounded-lg text-xl text-white my-5 px-12 py-5 bg-blue-500 font-bold'>Make Payment</button></Link>
        </div>
    )
}