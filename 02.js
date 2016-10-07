var O = Rx.Observable;

var ulClicks = O.fromEvent( document.querySelector( '.todos' ), 'click' );

ulClicks
  .filter( function( e ){
    return e.target.classList.contains( 'todo' );
  } )
  .map( function( e ){
    return e.target;
  } )
  .forEach( function( el ){
    el.classList.toggle( 'done' );
  } );