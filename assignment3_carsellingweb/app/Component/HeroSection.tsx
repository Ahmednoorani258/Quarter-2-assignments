export default function HeroSection(){
    return(
        <section className="flex justify-center items-center w-screen h-[400px] flex-col py-16 px-44">

            <div className="h-full  text-lg">
            <h2 className="text-center text-xl text-wrap md:text-3xl font-bold mb-[-14px] text-slate-700">Sell Your Car on Pak Wheels and Get the Best Price</h2>
            <div className="flex flex-col md:flex-row justify-evenly items-center border-2 border-grey-700 w-auto py-8">
            <div>
                <h3 className="text-2xl font-bold text-cyan-800 my-4">Post your Ad on PakWheels</h3>
                <div>
                <p className="my-2"><span className=" text-green-400">✔</span>Post your Ad for Free in 3 Easy Steps</p>
                <p className="my-2"><span className="text-green-400">✔</span>Get Geniuine offers from Verified Buyers</p>
                <p className="my-2"><span className="text-green-400">✔</span>Sell your car Fast at the Best Price</p>
                </div>
                <button className=" mt-6 text-white bg-red-700 p-3 text-lg px-8  font-bold rounded-md w-56">Post Your Ad</button>
            </div>
            <div>
                <h2 className="text-grey-300 text-2xl font-bold">OR</h2>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-cyan-800 my-4">Try PakWheels Sell it For Me</h3>
                <div>
                <p className="my-2"><span className="text-green-400">✔</span>Dedicated Sales for you and share the Best Offer</p>
                <p className="my-2"><span className="text-green-400">✔</span>We Bargain for you and share the Best Offer</p>
                <p className="my-2"><span className="text-green-400">✔</span>We ensure Safe & Secure Transaction</p>
                </div>
                <button className="mt-6 text-white bg-sky-600 p-3 text-lg px-8  font-bold rounded-md w-56">Register Your Car</button>
            </div>
            </div>
            </div>
        </section>
    )
}