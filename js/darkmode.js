const darkBtn = document.getElementById("darkBtn");


darkBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        localStorage.setItem("darkMode","true");

    }else{

        localStorage.setItem("darkMode","false");

    }

});



if(localStorage.getItem("darkMode") === "true"){

    document.body.classList.add("dark");

}
