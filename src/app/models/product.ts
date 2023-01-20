export type Product ={
  id: number,
  title: string,
  description:string,
  price:number,
  discountPercentage: number,
  rating: number,
  stock:number,
  brand:string,
  category:string,
  thumbnail:string,
  images:string[]

}



export type ProductReponse = {
  products : Product[],
  total: number,
  skip: number | null,
  limit : number,

}
