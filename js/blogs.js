$.ajax({
    url: "https://tiyagencyweek.herokuapp.com/blogs",
    type: "GET",
    headers: {X_CSRF_TOKEN:localStorage.getItem('token')},
    success: function(response) {

        response.blogs.forEach(function(blog) {
          console.log(blog)
          $('.blogSpace').append(`
          <div class="col-md-8 offset-md-2 containerBlog">
              <h3 class="col-md-2">${blog.title}</h3><h6 class="col-md-10">Posted: ${moment(blog.posted).from()}</h6>
              <h3 class="col-md-12 content">${blog.description}</h3>
            </div>
            `);
        })
      }
})
