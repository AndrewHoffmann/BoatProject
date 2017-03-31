// alert('test') // use in every js, makes sure no errors, will load when ok

// Boats Page - Lists my boats for sale. Get blog from api.  Show price, name, picture, description
// in the API (console log): Object -> boats, boats is an actual array. Need to add ".boats" after "response"

$.ajax({
	url: 'https://tiyagencyweek.herokuapp.com/boats',
    success: (response) => {
        	response.boats.forEach((boats) =>{
        			$(".boatsGoHere").append(`
        				<div class="row">
	        				<div class="col-md-6 boatPic">
	        					<img class="boatPic" src=${boats.picture}>
	        				</div>
	        				<div class="col-md-6 boatDescription">
	        					<h1>${boats.name}</h1>
	        					<h5>${boats.description}</h5>
	        					<h2>${boats.price}</h2>
					    	</div>
				    	</div>
			        `)
			})
    }
});

// how to convert string to currency - http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript

// (from Jake) function
Number.prototype.formatMoney = function(c, d, t){
var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

// And use it with:
(123456789.12345).formatMoney(2, '.', ',');
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

        response.blogs.forEach(function(blog) {
          $('.blogBox').append(`
          <div class="col-md-8 offset-md-2 containerBlog">
              <h3 class="col-md-2">${blog.title}</h3><h6 class="col-md-10">Posted: ${moment(blog.posted).from()}</h6>
              <h3 class="col-md-12 content">${blog.description}</h3>
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
