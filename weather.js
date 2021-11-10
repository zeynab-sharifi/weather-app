
let app = document.querySelector("#app")


async function getWeather (city) {
	// add api 
	let response = await fetch (
		`https://developers.parsijoo.ir/web-service/v1/weather/?type=search&city=${city}`,
		{
			headers:{
				"api-key":"e2f25c4f88fe4e57a0689860835400e4"
			}
		})
	let data = await response.json()
	console.log(data.result.hava.dayList[0])
	let now_temp = data.result.hava.summary.temp
	let today = data.result.hava.dayList[0];
	// html code
	app.innerHTML = `
	<div class="card" mx-auto>
         <div class="weather-icone">
        	<i class="wi ${today.symbol}"></i>
         </div>
         <div class="card-body" style="text-align: center;">
             <h2>${city}</h2>
             <small class="my-2">${today.condition}</small>
			<div class="btn-weather my-3">
				<a href="#" class="btn btn-primary">${today.min}</a>
				<a href="#" class="btn btn-danger">${today.max}</a>
				<a href="#" class="btn btn-warning">${now_temp}</a>
			</div>
         </div>
    </div>
	`
}
// getWeather("تهران")

// Send the city and receive the amount of weather 
let city = document.querySelector("#city")
city.addEventListener("submit",e=>{
	e.preventDefault()
	getWeather(e.target.city.value)
})