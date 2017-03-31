$.ajax({
    url: "https://tiyagencyweek.herokuapp.com/blogs",
    type: "GET",
    headers: {X_CSRF_TOKEN:localStorage.getItem('token')},
    success: function(response) {
      response.blogs.reverse().forEach(function(blog) {
          console.log(blog)
          $('.blogSpace').append(`
          <div class="col-md-8 offset-md-2 containerBlog">
              <h3>${blog.title}</h3><h6>Posted: ${moment(blog.posted).from()}</h6>
              <h4 class="col-md-12 content">${blog.description}</h4>
            </div>
            `);
        })
      }
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
