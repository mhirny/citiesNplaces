$(document).ready(function () {
  $("#contentContainer").load("html/home.html", function ( responseTxt, statusTxt ) {
    $("#contentContainer").scrollTop( 0 );
    if ( statusTxt == "error" ) {
      alert("Loading Error:\nIf files are on local drive probably your browser don't support cross-origin resource sharing for local html data.\nIn this case please move page data onto server or try using Firefox browser.")
      throw "Loading error.";
    } else {
      //alert("Images and text content on this web page are used without authors permissions or knowledge. Please use only as inside demo.");
      $("#openHome").addClass("active mySelect");
      openHomeEvents();
    };
  
//$("#myScrollspy").scrollspy({ target: "myScrollspy", offset: 50});
  });
});


$("#headerNav a").on("click", function ( event ) {
  zmiana( this, event );
});

function zmiana( fromElem, event ) {
  event.preventDefault();
//  $("#headerNav").find(".active").removeClass("active mySelect");
  $("#headerNav a").filter(".active").removeClass("active mySelect");

  let passedHref = $(fromElem).attr("href");
  $("#headerNav a")
    .filter( function () {
      return $(this).attr("href") == passedHref;
      }
    )
    .addClass("active mySelect");

  //history.pushState( null, null, $(fromElem).attr("href") );

  $("#contentContainer").load( passedHref, function () {
    $(this).scrollTop( 15 );
    if ( passedHref == "html/home.html" ) {
      openHomeEvents();
    }
  });
}

function openHomeEvents () {
  $(".panel-body > a").on("click", function ( event ) {
    zmiana( this, event );
   });
      
  $(".carousel-inner > .item > a").on("click", function ( event ) {
    zmiana( this, event );
  });
  
  $("#myCarousel").carousel("cycle");  
}