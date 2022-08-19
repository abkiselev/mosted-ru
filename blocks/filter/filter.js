let rangeSlider = document.getElementById("volume");
let rangeBullet = document.getElementById("volume__icon");

let distanceSlider = document.getElementById("distance");
let distanceBullet = document.getElementById("distance__icon");

let arendaSlider = document.getElementById("arenda");
let arendaBullet = document.getElementById("arenda__icon");

let vidBetona = document.querySelector("#vid");
let avarageArendaBlock = document.querySelector(".average-price_type_maschina");
// console.log(avarageArendaBlock);


function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  obem = +rangeSlider.value;
  changeCardBetonPrices();
  // let bulletPosition = (rangeSlider.value /rangeSlider.max);
  let rangeWidth = document.querySelector('.volume__slider').getBoundingClientRect().width;
  rangeBullet.style.left = (rangeSlider.value * 0.845) + "%";
}

rangeSlider.addEventListener("input", showSliderValue, false);


function showSliderValueDistance() {
  distanceBullet.innerHTML = distanceSlider.value;
  km = +distanceSlider.value;
  changeCardBetonPrices();
  distanceBullet.style.left = (distanceSlider.value * 0.845) + "%";
}

distanceSlider.addEventListener("input", showSliderValueDistance, false);


function showSliderArenda() {
  arendaBullet.innerHTML = arendaSlider.value;
  arendaBullet.style.left = (arendaSlider.value * 0.845) + "%";
}

arendaSlider.addEventListener("input", showSliderArenda, false);


// console.log(cardArendaBlocks);

// ПОЯВЛЕНИЕ-СКРЫТИЕ БЛОКА АРЕНДЫ    

let nasos = document.getElementById('nasos');
let arendaSrok = document.querySelector('.arenda');

// nasos.addEventListener("change", function() {
//   if (nasos.value === 'not') {
//       arendaSrok.classList.add('no_active');
//       avarageArendaBlock.classList.add('no_active');
//       cardArendaBlocks.forEach(function(item){
//         item.classList.add('no_active');
//       });
//   } 
//   else if (nasos.value !== 'not') {
//       arendaSrok.classList.remove('no_active');
//       avarageArendaBlock.classList.remove('no_active');
//       cardArendaBlocks.forEach(function(item){
//         item.classList.remove('no_active');
//       });
//   }  
  
// });



// ПОЯВЛЕНИЕ-СКРЫТИЕ БЛОКА РАССТОЯНИЯ    

let dostavka = document.getElementById('dostavka');
let distance = document.querySelector('.distance');

dostavka.addEventListener("change", function() {
  distance.classList.toggle('no_active');

  if (dostavka.value === 'in'){
    km = 1;
  }
  else if (dostavka.value === 'out') {
    km = +distanceSlider.value;

  };
  
  // if (checkCheckedMarka() === true){
  //   changeCardBetonPrices();
  // }
  // else {
  //   changeCardBetonPricesInitial();
  // };

  changeCardBetonPrices();
  // changeAveragePrices();
  
});






