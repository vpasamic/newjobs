$("#button").on("click", function(){
   var query= "https://remotive.io/api/remote-jobs?category=software-dev"
   $.ajax({
    url: query,
    method:"GET"
   }) .then(function(data){
       console.log(data)
     for (var i=0;i<5;i++){
           var jobtitle= data.jobs[i].title
           title=$("<div>")
           title.text(jobtitle)
           $("#newbjobs").append(title)

       }
   })

})