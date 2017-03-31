var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1};
		if(x[slideIndex-1])
		{
    	x[slideIndex-1].style.display = "block";
    	setTimeout(carousel, 1500); // Change image every 2 seconds
		}
}

$.ajax({
    url: "https://tiyagencyweek.herokuapp.com/blogs",
    type: "GET",
    headers: {X_CSRF_TOKEN:localStorage.getItem('token')},
    success: function(response) {
			var article = response.blogs.reverse();
			article = article.slice(0,3);
        article.forEach(function(blog) {
          $('.blogBox').append(`
          <div class="col-md-8 offset-md-2 containerBlog">
              <h3>${blog.title}</h3><h6>Posted: ${moment(blog.posted).from()}</h6>
							<div class="blogContentLimit">
              <h4 class="col-md-12 content">${blog.description}</h4>
							</div>
						</div>
            `);
        })
      }
})

$.ajax({
	url: `http://api.openweathermap.org/data/2.5/forecast/daily?q=47353&cnt=1&units=imperial&APPID=d0458c4189cf033bf80c84d7a0d38ab0`,
	success:(result)=>{
		$(".weather").html(`
			<img src="http://openweathermap.org/img/w/${result.list[0].weather[0].icon}.png" />
			<h2>${result.list[0].temp.max}°</h2>
			`)
	}
})

$('.blogButton').click(function(){
	window.location = "/blog.html";
})
