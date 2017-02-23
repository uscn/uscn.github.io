$(function() {
    var curPage="quan";
    $("#"+curPage).show();
    $("#menu a").click(function() {
        if (curPage.length) { 
            $("#"+curPage).hide();
        }
        curPage=$(this).data("page");
        $("#"+curPage).show();
    });
});
