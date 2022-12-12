let imp = document.getElementById("inp");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul");

class crBtn{
    constructor(){
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.innerHTML = "del";
        li.innerHTML = imp.value
        ul.appendChild(li).appendChild(a);
        a.addEventListener('click', ()=>{
            li.remove();
        })
    }
}

btn.addEventListener('click', ()=>{
    if (imp.value) {
        let btn = new crBtn();
    }
    imp.value = "";
})