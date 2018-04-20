$(document).ready(function(){
	$("#contentContainer").load("html/home.html", function( responseTxt, statusTxt ){
		if ( statusTxt == "error" ) {
			alert("Loading Error:\nIf files are on local drive probably your browser don't support cross-origin resource sharing for local html data.\nIn this case please use different browser or move page data onto server.")
		} else {
			//alert("Images and text content in this web page document are used without authors permissions. Please us only as inside demo.");
		};

	$("#openHome").parent().addClass("active mySelect");
	});
	// $("#contentContainer").load("html/home.html")
	// $("#contentContainer").load( $("ul.navbar-nav li:first-child a").attr("href") );
	// $("ul.navbar-nav li:first-child").addClass("active");
});

$("#headerNav > li > a").on("click", function( event ){
	//event.preventDefault();
	zmiana( this, event );
//	$("ul.navbar-nav").find(".active").removeClass("active");
	// $("ul.navbar-nav > li").filter(".active").removeClass("active");
//	$(this).parent().addClass("active");
	
//	$("#contentContainer").load( $(this).attr("href") );
});

function zmiana( fromElem, event ) {
	event.preventDefault();
	$("#headerNav").find(".active").removeClass("active mySelect");
	// $("ul.navbar-nav > li").filter(".active").removeClass("active");
//	$( fromElem ).parent().addClass("active");
	let passedHref = $(fromElem).attr("href");
	$("#headerNav > li > a")
		.filter( function(){
			return $(this).attr("href") == passedHref;
		})
		.addClass("active mySelect");
	
	//history.pushState( null, null, $(fromElem).attr("href") );
	
	$("#contentContainer").load( passedHref, function (){
		$(this).scrollTop(0);
	} );
}