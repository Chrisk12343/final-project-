 let arrImages = [
"jynxzi.jpg",
"stopmn.jpg",
"spoit.jpg",
"skittlz.jpg"
//these are all the images in my array

        ];
        let currentImageIndex=0
        //varable that will keep track of the images

        function showimage(index){
            //function to show the images
let gamerImage = document.getElementById("GImageslide");
gamerImage.src = arrImages[index];
//shortcut to img tag and sets the image source to the array source
        }
function BackSlide(){
    //this is my back function
currentImageIndex--;
//takes you back an image when you hit the button

if(currentImageIndex<0){
    currentImageIndex = 0
}
//when you get to the last image it stays their
showimage(currentImageIndex)
//shows the image
}
function ForwardSlide(){
currentImageIndex++;
//when you hit the button you go forward 1 image

showimage(currentImageIndex);
//shows the image

if(currentImageIndex >= arrImages.length){
    currentImageIndex = arrImages.length-1;
    //stays the on the last image
}
showimage(currentImageIndex);
//shows image
}

showimage(currentImageIndex);
//shows image

