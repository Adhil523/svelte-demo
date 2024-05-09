export const load=async(serverLoad)=>{
    const {fetch,params}=serverLoad
    const {productId}=params
    const response=await fetch(`http://localhost:4000/featured-products/${productId}`)
    const data=await response.json()
    return {
        data
    }
}