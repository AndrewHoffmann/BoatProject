$.ajax({
	url: `http://api.openweathermap.org/data/2.5/forecast/daily?q=47353&cnt=1&units=imperial&APPID=d0458c4189cf033bf80c84d7a0d38ab0`,
	success:(result)=>{
		console.log(result)
		$(".weather").html(`
			<img src="http://openweathermap.org/img/w/${result.list[0].weather[0].icon}.png" />
			<h2>${result.list[0].temp.max}°</h2>
			`)
	}
})
