import Link from "next/link";

export default function CheckOut(){
    return(
        <div className="bg-sky-100 flex flex-col items-center px-44 h-screen w-screen">
            <h1 className="text-4xl mb-40 font-bold py-12 border-b-2">Enter your Details</h1>
           
            <form className="w-full flex flex-col space-y-8 items-center justify-center">
                <input placeholder="Enter your Name" className="rounded-lg w-[50%] p-5" type="text"  />
                <input placeholder="Enter your Email" className="rounded-lg w-[50%] p-5" type="text"  />
                <input placeholder="Card Number" className="rounded-lg w-[50%] p-5" type="text"  />
                <input placeholder="Address" className="rounded-lg w-[50%] p-5" type="text"  />
            </form>

            <Link href={'/Thankyou'}>
                <button className="rounded-lg text-xl text-white my-5 px-12 py-5 my-20 bg-blue-500 font-bold">
                    Placr your order
                </button>
            </Link>
        </div>
    )
}