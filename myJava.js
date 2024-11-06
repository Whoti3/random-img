// This JavaScript is about the interactivty between the user 
// pressing the reload button to reload RANDOM Images

function setImages() {
    // first variable: 'option' will assign to the value of all the imgs
    options= ["ccc.jpg", "dd.jpg", "depositphotos.jpg", "fondecran.jpg", 
        "earth.jpg", "jupiter.jpg"]

    // second variable: 
    currentImages= document.querySelectorAll(".flex img") // When looping make sure to ALWAYS use for()
    for (var i =0; i < currentImages.length; i++) {
        console.log("Image"+i)
    // third variable:
    randomImg= "images/" + options[Math.floor(Math.random()*options.length)];

    currentImages[i].src= randomImg

    currentImages[i].setAttribute("tabindex", "0")
    }
}