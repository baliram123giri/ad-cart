
var increatement =  document.querySelector("#increament")
var valuFecth =  increatement.value=1



 function plusValue(){
    var valIncrease= valuFecth +=1
    increatement.value= valIncrease
 }
 function minusValue(){
    var valIncrease= valuFecth +1
    if(valIncrease > 2){
      valIncrease= valuFecth -=1
        increatement.value= valIncrease
    }
    else{
        valIncrease= valuFecth = 1
    }
 }

 // cartShow
 function cartShow(){
     var submenu = document.getElementById("submenu")
     submenu.classList.toggle("active")
    //  alert("heloo")
 }
 // productList Remove
var productList = document.querySelector("#productList")
function itemDelete() {
    productList.classList.add("tbody")

}
console.log(productList)
