
export type hostdetail= {
  "name": string,
  "language":  string[] ,
  "education": string,
  "location": string,
  "description": string,
}

export type HouseListType ={
    id: number,
    title: string,
    img:string ,
    description: string,
    location: string,
    price_per_night: number,
    num_bedrooms: number,
    num_bathrooms: number,
    max_guests: 4,
    amenities: string [],
    rating : number,
    reviews_count: number
  }

export type reviewType={
  id:number,
  review:string,
  count:number
} 