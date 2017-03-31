
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
