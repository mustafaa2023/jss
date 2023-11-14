/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    */
  x=document.getElementsByClassName('preview')
  document.getElementById('image').style.background-image: "url('x')";
  /*
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
 alt= x.getAttribute(alt)
   document.getElementById('image').innerHTML = "alt"
  }

  function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    */  document.getElementById('image').style.background-image:"url('')"
    /*2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
       document.getElementById('image').innerHTML = "Hover over an image belowto display here"
  }