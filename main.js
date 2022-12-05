$("#firstp").animate({ opacity: 0.5,
    left: "+=50",
    height: "toggle"
},2000,function () 
{   $("#deplace").hide()

    $('#firstp1').show("slow");
   
  });


// class build 

function Car () {
  obj = {}
  obj.name = undefined;
  obj.linkimg=undefined;
  obj.price = undefined ;
  obj.disc=undefined
  obj.create= function(name,price,linkimg){
    this.name=name ;
    this.linkimg=linkimg;
    this.price=price ;
  }
  return obj
}
var cars = []
var car1= Car() ;
car1.create("PEUGEOT 106","price/day : 2000dt","img/Peugeot_106_front_20090730.jpg");
cars.push(car1);
var car2= Car() ;
car2.create("renaut r5 (discount)","price/day : 1000dt <span id='discprice'>new price </span>","img/R5electriqueav.jpg");
cars.push(car2);
var car3= Car() ;
car3.create("404 baché","price/day : 600dt","img/Peugeot_404.jpg");
cars.push(car3);
var car4= Car() ;
car4.create("range rover","price/day : 5000dt","img/9450LHG_01.JPG");
cars.push(car4);
for (var i =0 ; i<cars.length;i++){
balise = `<div class="container" >
<div class="pic">
<img id="image"src=${cars[i].linkimg}>
</div>
<div class="description">
<p class="carName" >${cars[i].name}
</p>
<p class="price">${cars[i].price} </p>
<button class="reserve" id=${i} onclick="reserve()" >rent</button>
<p></p>
</div>`
$("#cars").append(balise);


}
// 
function reserve() {
$(".reserve").click(function(){
  
  var id="#"+this.id
  swal("Car reserved ! thank you pal ");
  $(id).css("background","red");
  $(id).text("rented");
  
})
$(".reserve").click(function(){
  
  var id="#"+this.id
  swal("Car reserved ! thank you pal ");
  $(id).css("background","red");
  $(id).text("rented");
  
})
}

function submit () {
  $("#submit").click (
    function () {
      swal("thank you "+$("#name").val()+" for submitting this msg to us  : " + $("#reason").val())
      
      }

  )
  
}