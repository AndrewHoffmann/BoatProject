
   if(localStorage.getItem('token')){
       window.location = "/dashboard.html";
   }
    $("form").on('submit',(e)=>{
        e.preventDefault();
        // Need to get user and password here
        var username = $('#username').val();
        var password = $('#password').val();

        $.ajax({
            url: "https://tiyagencyweek.herokuapp.com/auth/login",
            type:"POST",
            data: {username,password},
            success: function(result){
                console.log(result);
                if(result.error) return alert("YOU SUCK");
                localStorage.setItem('token',result.token);
                window.location = "/dashboard.html";
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
