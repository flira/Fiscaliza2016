$(init( ));

function init ( ) {
	addClickFunctions( );
	addResizeFunction( );
}

function addClickFunctions( ) {
	//bloqueia o link original
	$('#fontBtn').click(function(e){e.preventDefault( );});
	
	$('#menuBtn').click(function(){toggleMainMenu ( );});
	$('#fontBtn').click(function(){toggleFontAdjust( );});
}

function toggleMainMenu ( ) {
	if (!$('#mainMenu nav').hasClass('active')) {
		showMenu( );
	}	else {
		hideMenu( );
	}
}

function showMenu( ) {
	$('#mainMenu nav').addClass('active');
	$('body').css({
		'position':'absolute',
		'width':$('body').width(),
		'overflow-x':'hidden'
	});
	$('body').finish( ).animate({
		'left': $('#mainMenu nav').width(),
	});
	$('#mainMenu nav').finish( ).animate({
		'left': 0
	});
}
function hideMenu( ) {
	$('#mainMenu nav').removeClass('active');
	$('body').finish( ).animate({
		'left': 0
	},function() {
		clearInlines(['body']);
		
	});
	$('#mainMenu nav').finish( ).animate({
		'left': - $('#mainMenu nav').width()
	},function() {
		clearInlines(['#mainMenu nav']);
	});
}

function toggleFontAdjust( ) {
	if (!$('#fontSize').hasClass('active')) {
		activeaccessibilityPanel( );
		showFontHelp( );
	}	else {
		deactiveaccessibilityPanel( );
		hideFontHelp( );
	}
}

function showFontHelp( ) {
	
}

function hideFontHelp( ) {

}

function addResizeFunction( ) {
	//reseta o menu principal se ele estiver expandido
	$(window).resize(function(){
		clearInlines(['body','#mainMenu nav']);
		$('#mainMenu nav').removeClass('active');
	});
}

function clearInlines(elements) {
	for (var i=0;i<elements.length;i++) {
		$(elements[i]).removeAttr('style');
	}
}