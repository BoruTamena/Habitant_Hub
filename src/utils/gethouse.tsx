

 async function GetHouse(category:string)   {

   const url=category?`http://localhost:3001/house/?category=${category}`:`http://localhost:3001/house`

   const result = await fetch(url,{cache:"no-store"})
   const res= result.json()
   return res
    
}


async function GetById(id:string)   {
    const result = await fetch(`http://localhost:3001/housedetail/${id}`,{cache:"no-store"})
    return result.json() 
 }



 export {
    GetById,
    GetHouse,
 }