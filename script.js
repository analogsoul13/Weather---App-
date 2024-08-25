const base_url = ""
const api_key = ""

const getWeather=async()=>{
    let result = ""
    const city = winp.value // stores input value from html
    const res = await fetch(`${base_url}/current.json?key=${api_key}&q=${city}`)
    const jsres = await res.json()  // to json format and returns a promise
    console.log(jsres)
    result=`
    <h1 class="text-xl font-bold">${jsres.current.condition.text}</h1>
    <img src=${jsres.current.condition.icon} alt="icon">
    <h1>${jsres.location.name},${jsres.location.region},${jsres.location.country}</h1>
    `
    cnt.innerHTML=result
    
}