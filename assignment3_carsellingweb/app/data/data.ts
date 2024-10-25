import car from '../../public/Cover.jpg'
interface CarsCardData {
    id:number,
    image: string,
    carName: string,
    pricerange: string,
    reviews: number
}

interface CarsPageData {
    id:number,
    heading: string,
    image: string,
    para: string,
    amount: number,
    carName: string,

}

let carsData: CarsPageData[] & CarsCardData[] = [
    {
        id: 1,
        heading: 'Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs',
        image: '/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque ea, quo quibusdam dolorem nemo adipisci consectetur sapiente necessitatibus mollitia tempore rem molestiae eum cumque at molestias reprehenderit repudiandae. Voluptatum! Omnis ex laudantium rem quibusdam nobis ab veritatis eius eveniet recusandae dicta. Illo nulla sed labore aperiam expedita natus eveniet laboriosam nisi impedit temporibus aliquid, amet adipisci ipsum nemo vel! Voluptas mollitia eaque beatae unde, dolor consequatur, eligendi sapiente debitis distinctio eos veritatis quos voluptate, hic facilis magnam voluptatem dolore. Fuga eligendi quod provident repudiandae, perspiciatis error. Minus, beatae eius. Veniam minima dolores quod deserunt quis aliquid porro quisquam suscipit doloribus nam iste, alias odit, tempora inventore assumenda tempore, fugiat soluta. Incidunt, eum recusandae. Laboriosam explicabo soluta alias provident incidunt? Ipsa fuga porro dolorem exercitationem saepe temporibus omnis soluta nisi amet ullam, veniam rem? Corrupti corporis exercitationem eum dolore animi iure est explicabo aut cupiditate. Adipisci veritatis quas provident distinctio.',
        amount: 6500000,
        carName: 'Toyota Corolla',
        pricerange: '59.7 - 75.5',
        reviews: 621
    },
    {
        id: 2,
        heading: 'Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs',
        image: '/Suzuki_Alto_-_PNG.png',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque ea, quo quibusdam dolorem nemo adipisci consectetur sapiente necessitatibus mollitia tempore rem molestiae eum cumque at molestias reprehenderit repudiandae. Voluptatum! Omnis ex laudantium rem quibusdam nobis ab veritatis eius eveniet recusandae dicta. Illo nulla sed labore aperiam expedita natus eveniet laboriosam nisi impedit temporibus aliquid, amet adipisci ipsum nemo vel! Voluptas mollitia eaque beatae unde, dolor consequatur, eligendi sapiente debitis distinctio eos veritatis quos voluptate, hic facilis magnam voluptatem dolore. Fuga eligendi quod provident repudiandae, perspiciatis error. Minus, beatae eius. Veniam minima dolores quod deserunt quis aliquid porro quisquam suscipit doloribus nam iste, alias odit, tempora inventore assumenda tempore, fugiat soluta. Incidunt, eum recusandae. Laboriosam explicabo soluta alias provident incidunt? Ipsa fuga porro dolorem exercitationem saepe temporibus omnis soluta nisi amet ullam, veniam rem? Corrupti corporis exercitationem eum dolore animi iure est explicabo aut cupiditate. Adipisci veritatis quas provident distinctio.',
        amount: 2700000,
        carName: 'Suzuki Alto',
        pricerange: '23.3 - 30.5',
        reviews: 200 
    },
    {
        id: 3,
        heading: 'Honda City 2024 Price in Pakistan, Images, Specs & Features',
        image: '/Honda_City_Front.jpg',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque ea, quo quibusdam dolorem nemo adipisci consectetur sapiente necessitatibus mollitia tempore rem molestiae eum cumque at molestias reprehenderit repudiandae. Voluptatum! Omnis ex laudantium rem quibusdam nobis ab veritatis eius eveniet recusandae dicta. Illo nulla sed labore aperiam expedita natus eveniet laboriosam nisi impedit temporibus aliquid, amet adipisci ipsum nemo vel! Voluptas mollitia eaque beatae unde, dolor consequatur, eligendi sapiente debitis distinctio eos veritatis quos voluptate, hic facilis magnam voluptatem dolore. Fuga eligendi quod provident repudiandae, perspiciatis error. Minus, beatae eius. Veniam minima dolores quod deserunt quis aliquid porro quisquam suscipit doloribus nam iste, alias odit, tempora inventore assumenda tempore, fugiat soluta. Incidunt, eum recusandae. Laboriosam explicabo soluta alias provident incidunt? Ipsa fuga porro dolorem exercitationem saepe temporibus omnis soluta nisi amet ullam, veniam rem? Corrupti corporis exercitationem eum dolore animi iure est explicabo aut cupiditate. Adipisci veritatis quas provident distinctio.',
        amount: 5200000,
        carName: 'HondaCity',
        pricerange: '46.5 - 58.5',
        reviews: 458
    },
    {
        id: 4,
        heading: 'Honda Civic 2024 Price in Pakistan, Images, Specs & Features',
        image: '/Cover.jpg',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque ea, quo quibusdam dolorem nemo adipisci consectetur sapiente necessitatibus mollitia tempore rem molestiae eum cumque at molestias reprehenderit repudiandae. Voluptatum! Omnis ex laudantium rem quibusdam nobis ab veritatis eius eveniet recusandae dicta. Illo nulla sed labore aperiam expedita natus eveniet laboriosam nisi impedit temporibus aliquid, amet adipisci ipsum nemo vel! Voluptas mollitia eaque beatae unde, dolor consequatur, eligendi sapiente debitis distinctio eos veritatis quos voluptate, hic facilis magnam voluptatem dolore. Fuga eligendi quod provident repudiandae, perspiciatis error. Minus, beatae eius. Veniam minima dolores quod deserunt quis aliquid porro quisquam suscipit doloribus nam iste, alias odit, tempora inventore assumenda tempore, fugiat soluta. Incidunt, eum recusandae. Laboriosam explicabo soluta alias provident incidunt? Ipsa fuga porro dolorem exercitationem saepe temporibus omnis soluta nisi amet ullam, veniam rem? Corrupti corporis exercitationem eum dolore animi iure est explicabo aut cupiditate. Adipisci veritatis quas provident distinctio.',
        amount: 9300000,
        carName: 'Honda Civic',
        pricerange: '86.6 - 99.0',
        reviews: 358
    }
]

export type { CarsCardData, CarsPageData }
export {carsData}