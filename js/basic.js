$(document).ready(function() {

    $('#project_table').DataTable({
    	"pageLength": 10,
    	"lengthMenu": [ 10, 15, "All"]
    });


    var curPage="home";
    $("#"+curPage).show();
    $("#menu a").click(function() {
        if (curPage.length) { 
            $("#"+curPage).hide();
        }
        curPage=$(this).data("page");
        $("#"+curPage).show();
    });

    $( ".dialog" ).dialog({ 
        autoOpen: false,
        autoResize:true,
        width: "85%",
        position: {
        my: 'top',
        at: 'top',
        of: $('#project')
        }
    });
	$( ".pure-button" ).click(function() {
		$(".dialog").dialog( "close" );
		var id = $(this).data('id');
  		$( id ).dialog( "open" );
	});

} );
