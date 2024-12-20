import DataGetter from "@/app/helper/datagetter";
import type { SingleUser } from "@/app/types/datatypes";
import Link from "next/link";

interface Params {
    params:Promise<{id:string}>
}
export default async function DynamicUserPage({params}:Params){
    const id = ((await params).id)
    const data:SingleUser = await DataGetter(`https://jsonplaceholder.typicode.com/users/${id}`)
    return(
        <div className=" bg-green-200 min-h-screen">
            <Link href={"/"} ><button className="absolute top-10 left-10 p-5 rounded-lg border-2 border-black text-2xl bg-green-400">Go Back</button></Link>
            <h1 className="text-7xl text-center underline py-12 ">User Details</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full px-8 md:px-16 lg:px-32 py-12 ">
                <div className=" bg-green-100 p-5 m-5 border-2 border-black">
                    <h1 className="text-2xl underline font-bold ">Personal Details</h1>
                    <div className=" space-y-2">
                        <p>User Name: {data.username}</p>
                        <p>Name: {data.name}</p>
                        <p>Email: {data.email}</p>
                        <p>Phone: {data.phone}</p>
                    </div>
                </div>
                <div className=" bg-green-100 p-5 m-5 border-2 border-black">
                    <h1 className="text-2xl underline font-bold">Address</h1>
                    <div className=" space-y-2">
                        <p>ZipCode: {data.address.zipcode}</p>
                        <p>Street: {data.address.street} {data.address.suite}</p>
                        <p>City: {data.address.city}</p>
                        <p>Geo: {data.address.geo.lat} {data.address.geo.lng}</p>
                    </div>
                </div>
                <div className=" bg-green-100 p-5 m-5 border-2 border-black">
                    <h1 className="text-2xl underline font-bold"    >Company</h1>
                    <div className=" space-y-2">
                        <p>Company Name:{data.company.name}</p>
                        <p>Company Bs:{data.company.bs}</p>
                        <p>Company CatchPhrase:{data.company.catchPhrase}</p>
                        <p>Website:{data.website}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}