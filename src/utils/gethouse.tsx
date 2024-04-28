

export default async function GetHouse(category:string)   {


   const result = await fetch("http://localhost:3001/house",{cache:"no-store"})

   const res= result.json()

    return res
    
}