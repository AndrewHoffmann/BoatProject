// alert('test') // use in every js, makes sure no errors, will load when ok

// Boats Page - Lists my boats for sale. Get blog from api.  Show price, name, picture, description
// in the API (console log): Object -> boats, boats is an actual array. Need to add ".boats" after "response"

$.ajax({ 
	url: 'https://tiyagencyweek.herokuapp.com/boats',
    success: (response) => {
        console.log(response);
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