const image = document.getElementById("cat-image");
const url = "https://aws.random.cat/meow";

async function fetchCatImage(){
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        image.src = data.file;
    } catch (error){
        console.log(error);
    }
}

fetchCatImage();

image.addEventListener("click", () =>{
    fetchCatImage();
})

