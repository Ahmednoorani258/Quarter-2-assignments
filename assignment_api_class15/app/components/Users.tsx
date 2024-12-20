import DataGetter from "@/app/helper/datagetter";
import type { UserDataCard } from "@/app/types/datatypes";
import Link from "next/link";

export default async function Users() {
  
  const data = await DataGetter('https://jsonplaceholder.typicode.com/users')
  console.log(data)
  return (
    <div className="flex flex-col justify-center items-center mx-auto bg-cyan-700 w-full min-h-screen">

        <h1 className="text-center text-7xl underline text-gray-300 bg-zinc-700 p-5 px-7 rounded-lg ">Users Data</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-12 ">
      {
        data.map((item:UserDataCard,i:number) => {
          return(
            <div key={i} className="bg-cyan-200 p-5 space-y-2 font-semibold leading-relaxed border-2 rounded-xl border-black text-xl">
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Phone:{item.phone}</p>
            <p>Address: {item.address.city}</p>

            <Link href={`${item.id}`}><button className="mt-3 p-5 bg-gray-400 rounded-xl"> View Details</button></Link>
          </div>
          )
        })
      }
      </div>
      
    </div>
  );
}
