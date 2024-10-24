import Image from 'next/image'
import Link from 'next/link'
import car1 from '@/public/Cover.jpg'

export default function CarDetail(){
    return(
        <div className="px-44 py-6 flex justify-center items-center flex-col">
            <h1 className='text-4xl font-bold underline'>Toyota corolla 2024 price in pakistan</h1>
            <Image src={car1} alt='car' width={500} height={500}></Image>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque ea, quo quibusdam dolorem nemo adipisci consectetur sapiente necessitatibus mollitia tempore rem molestiae eum cumque at molestias reprehenderit repudiandae. Voluptatum!
            Omnis ex laudantium rem quibusdam nobis ab veritatis eius eveniet recusandae dicta. Illo nulla sed labore aperiam expedita natus eveniet laboriosam nisi impedit temporibus aliquid, amet adipisci ipsum nemo vel!
            Voluptas mollitia eaque beatae unde, dolor consequatur, eligendi sapiente debitis distinctio eos veritatis quos voluptate, hic facilis magnam voluptatem dolore. Fuga eligendi quod provident repudiandae, perspiciatis error. Minus, beatae eius.
            Veniam minima dolores quod deserunt quis aliquid porro quisquam suscipit doloribus nam iste, alias odit, tempora inventore assumenda tempore, fugiat soluta. Incidunt, eum recusandae. Laboriosam explicabo soluta alias provident incidunt?
            Ipsa fuga porro dolorem exercitationem saepe temporibus omnis soluta nisi amet ullam, veniam rem? Corrupti corporis exercitationem eum dolore animi iure est explicabo aut cupiditate. Adipisci veritatis quas provident distinctio.</p>

            <h2 className='mb-12 mt-5 text-2xl text-green-600 font-semibold'>PKR 50,00,000</h2>

            <Link href={'/checkout'}><button className='rounded-lg text-xl text-white my-5 px-12 py-5 bg-blue-500 font-bold'>Make Payment</button></Link>
        </div>
    )
}