$(document).ready(function() {

    $(".eat-btn").on("click", function(event){
        event.preventDefault();
        let id = $(this).val();
        console.log("value (id): ", id);
        
        let queryUrl = "/api/burgers/" + id;

        $.ajax(queryUrl, {
            type: "PUT"            
        }).then(
            function() {
              location.reload();
            }
        );
    });
});