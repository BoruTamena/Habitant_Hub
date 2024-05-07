

 async function GetHouse(category:string)   {


   const result = await fetch("http://localhost:3001/house",{cache:"no-store"})

   const res= result.json()

   return res
    
}


async function GetById(id:number)   {

    const result = await fetch(`http://localhost:3001/housedetail/${id}`,{cache:"no-store"})
    const res= result.json()
    console.log(res)
    return res  
 }



 export {
    GetById,
    GetHouse,
 }