$(document).ready(function() {
   $("#submit").on("click", function(e) {
      $("#article-list").html(""); 
      $("#article-list").fadeIn(1000);
      if ($("#query").val() === "") {
         $("#no").fadeIn(500);
      } else {
         $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&grnnamespace=0&prop=extracts&exlimit=max&explaintext&exintro&gsrsearch=" + $("#query").val() + "&callback=?", function(result) {
      if (result.hasOwnProperty("query")) {
         $.each(result.query.pages, function(key, page){
            var extract = page.extract.length > 464 ? page.extract.substring(0,464) + "..." : page.extract;
            $("#article-list").append('<li><h2><a target="_blank" href="http://en.wikipedia.org/?curid=' + page.pageid + '">' + page.title + '</a></h2>' + '<p>' + extract + '</p>' + '</li>');
         });
      }
   });
      }
      e.preventDefault();
   });
});