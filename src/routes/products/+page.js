export const load=async (loadEvent)=>{
    console.log("Loading from page.js")
    const {fetch}=loadEvent
    const response=await fetch("http://localhost:4000/products")
    const data=await response.json()
    return {
        data
    }
}