import DataGetter from "@/app/helper/datagetter";
import type { UserData } from "@/app/types/datatypes";

export default async function Users() {
  
  const data = await DataGetter('https://jsonplaceholder.typicode.com/users')
  console.log(data)
  return (
    <div className="flex flex-col justify-center items-center bg-cyan-700 ">

        <h1 className="text-center text-7xl">Users Data</h1>
      {
        data.map((item:UserData,i:number) => {
          return(
            <div key={i}>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <div>
            <p>{item.address.street}</p>
            <p>{item.address.city}</p>
            </div>
          </div>
          )
        })
      }
      
    </div>
  );
}
