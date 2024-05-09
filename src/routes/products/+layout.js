export const load=async(loadEvent)=>{
    const {fetch} = loadEvent
    const response=await fetch("http://localhost:4000/featured-products")
    const data=await response.json()
    return {
        data
    }
}