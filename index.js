let body = document.querySelector("body");

let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

data.map((element) =>{
    let p = document.createElement("p")
    if (element > 50){
        p.style = "background-color: green; color: white;" 
    } else{
        p.style = "background-color: red; color: white;"
    }

    p.textContent = element

    body.appendChild(p);
}
)