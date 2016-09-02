
// prevent image to open link in new window

$("#imageGallery a").click(function(event) {
	event.preventDefault();
}); 

// hide close button

$(".lb-close").hide();




/***   SEARCH  ***/
/***           ***/

$(document).ready(function(){
    $("#filter").keyup(function(){
 
        // Retrieve the input field text
        var filter = $(this).val();
 
        // Loop through the  list
        $(".list li").each(function(){
 
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
 
            // Show the list item if the phrase matches
            } else {
                $(this).show();
            }
        });

    }); 
});