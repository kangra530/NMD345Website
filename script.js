const showOnly = descriptionId => {
  document.querySelectorAll( ".description" ).forEach(
  descriptionDiv => descriptionDiv.style.opacity = 0
  )
  document.querySelector( descriptionId ).style.opacity = 1 ;
} 

// This is the starting configuration.
let currentSlideOffset = 0 ;
// This is one less than the number of slides.
const lastSlideOffset = 5 ;
/* This function shifts to the next image or previous.
It sets a slide offset to 1 more or less than the current slide,  
depending on which direction the user chooses to go. */
const slide = direction => {
  if (direction === "forward") {
    if ( currentSlideOffset === lastSlideOffset ) {
      // You're at the end, so we won't change anything.
      return ;
    } else {
      // Add one to the slide offset variable for use below.
      currentSlideOffset++ ;
    }
  } else if ( direction === "back" ) {
    if ( currentSlideOffset === 0 ) {
      // You're at the start, so we won't change anything.
      return ;
    } else {
      // Subtract one from the slide offset variable for use below.
      currentSlideOffset-- ;
    }
  } ;
  /* Next move the frieze to one slide width to the left or right. "300" is the width of each slide set in CSS. 
  There's a minus, because going to the next slide means the frieze itself moves to the left. */
  document.querySelector("#frieze").style.transform = `translateX( ${ currentSlideOffset * -900 }px )` ;
} ;


const changeDivs = entries => {
  entries.forEach(
    entry => {
      let projectTextDiv = entry.target.querySelector( " #projecttext " ) ;
      let projectPhotoDiv = entry.target.querySelector( " #projectphoto " ) ;
      let aboutTextDiv = entry.target.querySelector( " #abouttext " ) ;
      let aboutPhotoDiv = entry.target.querySelector( " #aboutphoto " ) ;

      if ( entry.isIntersecting ) {
      projectTextDiv.classList.add( "awake" ) ;
      projectPhotoDiv.classList.add( "awake" ) ;
      aboutTextDiv.classList.add( "awake" ) ;
      aboutPhotoDiv.classList.add( "awake" ) ;

      } else {
      projectTextDiv.classList.remove( "awake" ) ;
      projectPhotoDiv.classList.remove( "awake" ) ;
      aboutTextDiv.classList.remove( "awake" ) ;
      aboutPhotoDiv.classList.remove( "awake" ) ;

      } 
    }
  )
};

let options = {};
let divObserver = new IntersectionObserver( changeDivs, options );
window.onload = () => {

document.querySelectorAll("div").forEach(
  divToChange => {
    divObserver.observe( divToChange ) ;
  }
)

} ;


