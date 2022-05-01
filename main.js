document.getElementById("btn__search").onclick=function(){
    document.getElementById("btn__search").className = "btn btn-success search__style";
    document.getElementById("search__text").style.display = "block";
}

document.getElementById("close__btn").onclick=function(){
    document.getElementById("search__text").style.display = "none";
    document.getElementById("btn__search").className = "btn btn-success search_style_in";
}

document.getElementById("bars__toggler").onclick = function(){
    if(document.getElementById("bars").className == "fa-solid fa-x text-light"){
        document.getElementById("bars").className = "fa-solid fa-bars text-light";
    }else{
        document.getElementById("bars").className = "fa-solid fa-x text-light";
    }
}