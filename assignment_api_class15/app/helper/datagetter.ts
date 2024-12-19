export default async function DataGetter(url:string){
    const data = await fetch(url)
    const res = await data.json()
    return res
}