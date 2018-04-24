$(document).ready(function () {
  $("#contentContainer").load("html/home.html", function ( responseTxt, statusTxt ) {
    if ( statusTxt == "error" ) {
      alert("Loading Error:\nIf files are on local drive probably your browser don't support cross-origin resource sharing for local html data.\nIn this case please use different browser or move page data onto server.")
    } else {
      //alert("Images and text content in this web page document are used without authors permissions. Please us only as inside demo.");
    }

  $("#openHome").addClass("active mySelect");
  });
});


$("#headerNav a").on("click", function ( event ) {
  zmiana( this, event );
});

function zmiana( fromElem, event ) {
  event.preventDefault();
  $("#headerNav").find(".active").removeClass("active mySelect");

  let passedHref = $(fromElem).attr("href");
  $("#headerNav a")
    .filter( function () {
      return $(this).attr("href") == passedHref;
    })
    .addClass("active mySelect");

  //history.pushState( null, null, $(fromElem).attr("href") );

  $("#contentContainer").load( passedHref, function () {
    $(this).scrollTop( 0 );
  });
}