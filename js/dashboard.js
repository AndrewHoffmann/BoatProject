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
