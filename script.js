
// for image
var loadFile = function(event){
    setTimeout(() => {
        var output = document.getElementById('meme-img');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function(){
            URL.revokeObjectURL(output.src);
    }    
    var textGet = document.querySelector('textarea').value;
    if (textGet !=null)
    {
        document.getElementById('meme-text').innerHTML = textGet;
    }
    else{
        document.getElementById('error-text').innerHTML = 'Please enter the meme text';
    }
    }, 1000);  
};

// var showMeme = function () {
//     var x = document.getElementById("meme");
//   if (x.style.visibility === "hidden") {
//     x.style.visibility = "visible";
//   } else {
//     x.style.display = "hidden";
//   }
// }

