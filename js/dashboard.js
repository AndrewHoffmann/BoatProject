if(!localStorage.getItem('token')){
    window.location = "/admin.html";
}

$("form").on('submit',(e)=>{
    e.preventDefault();
    // Need to get user and password here
    var title = $('.blogTitle').val();
    var description = $('.blogInput').val();
    console.log(title);

$.ajax({
    url: "https://tiyagencyweek.herokuapp.com/blogs/create",
    type:"POST",
    data: {title,description},
    headers:{X_CSRF_TOKEN:localStorage.getItem('token')},
    success: function(result){
        alert('Blog Successfully Posted!');
        // Something should happen here
}});
})
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
