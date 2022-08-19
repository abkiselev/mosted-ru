let filterMarki = Array.from(document.querySelectorAll('input[name="marka"]'));
let averageTitle = document.querySelector('#averageName');
let averagePrice = document.querySelector('.average-price__beton');
let foundedNumberofSellers = document.querySelector('.found__number');
let averagePrices = [];
let cardBetonTitles = [];
let cardBetonPrices = [];
let averageDostavkaPrice = document.querySelector('.average-price__dost');
let averageDostavkaPrices = [];
let cardDostavkaTitles = [];
let cardDostavkaPrices = [];
let cardArendaPrices = [];
let cardTotalPrices = [];

let cardArendaBlocks = [];





let categoriesInFilter = Array.from(document.querySelectorAll('.filter__category-option'));
let toAddCategoriesInFilter = sellersList.map(function(card){
  return Object.keys(card)
});
// console.log(new Set(toAddCategoriesInFilter.toString().split(',')))

categoriesInFilter.forEach(function(item){
  
  let toAddOptions = Array.from(new Set(toAddCategoriesInFilter.toString().split(',')));
  
  if(!toAddOptions.includes(item.value)){
      item.style.display = 'none';
  }
});









let allMarkiInCurrentVid;
let allPrices = [];
// console.log(allMarkiInCurrentVid);

let vid = vidBetona.value;
let marka = calcMinPrices();
// console.log(marka);

const cardsBlock = document.querySelector(".cards");
const cardTemplate = document.querySelector(".card-template").content;
let card = cardTemplate.querySelector(".card");


function createCard (cardData) {
    const newCard = cardTemplate.cloneNode(true);
    let cardName = newCard.querySelector(".card__name");
    let cardApproved = newCard.querySelector(".card__approved");
    let cardBetonTitle = newCard.querySelector("#betonName");
    let cardBetonPrice = newCard.querySelector(".beton-price");
    let cardDostavkaTitle = newCard.querySelector("#dostName");
    let cardDostavkaPrice = newCard.querySelector(".dost-price");
    let cardArendaPrice = newCard.querySelector(".arenda-price");
    let cardTotalPrice = newCard.querySelector(".price-itog");
    let cardArendaBlock = newCard.querySelector(".price-card_arenda");
    let cardButton = newCard.querySelector(".button_type_zapros");
    let cardUrl = newCard.querySelector(".card__title");
    let cardButtonUrl = newCard.querySelector(".link_place_company-card");

    cardUrl.href = cardData.url;
    cardButtonUrl.href = cardData.url;
    // cardBetonTitle.textContent = 'Бетон за куб, от:'
    cardName.textContent = cardData.name;
    // cardApproved = cardData.recommend;
    // cardBetonPrice.textContent = calcMinPrices();
    // cardDostavkaTitle.textContent = ;
    cardDostavkaPrice.textContent = cardData.dostavka.gor + ' р.';
    cardArendaPrice.textContent = 0;
    cardTotalPrice.textContent = parseInt(cardBetonPrice.textContent) +
                                  parseInt(cardDostavkaPrice.textContent) +
                                  parseInt(cardArendaPrice.textContent) + ' р.';

                                  
    cardButton.addEventListener('click', function(evt) {
      evt.preventDefault();
      activePopup = zaprosPopup;
      openPopup(activePopup);
    });

    if (!cardData.recommend){
      cardApproved.style.display = 'none';
    }

    zaprosButton.push(cardButton);

    cardBetonTitles.push(cardBetonTitle);
    // averagePrices.push(cardBetonPrice);
    cardBetonPrices.push(cardBetonPrice);
    cardDostavkaTitles.push(cardDostavkaTitle);
    cardDostavkaPrices.push(cardDostavkaPrice);
    cardArendaPrices.push(cardArendaPrice);
    cardTotalPrices.push(cardTotalPrice);
    cardArendaBlocks.push(cardArendaBlock);

    return newCard;
}


function renderCards (sellersList) {
    sellersList.forEach(function(item) {
        cardsBlock.append(createCard(item));
    });
    
};


renderCards(sellersList);



function changeAveragePrices() {
    let zzz = [];
    averagePrices.map(function(i){
        if(!i){
          return 0
        }
        zzz.push(i);
    });

    averagePrice.textContent = Math.round(zzz.reduce((a,b) => a+b / zzz.length, 0)) + ' р.';
    
    if (dostavka.value === 'in'){
      averageDostavkaPrice.textContent = Math.round(averageDostavkaPrices.reduce((a,b) => a+b / averageDostavkaPrices.length, 0)) + ' р.';
    }
    else if (dostavka.value === 'out') {
      averageDostavkaPrice.textContent = Math.round(averageDostavkaPrices.reduce((a,b) => a+b / averageDostavkaPrices.length, 0)) + ' р./км.';
    };

};

function changeFoundedSellers() {
  let cards = document.querySelectorAll(".card");
  foundedNumberofSellers.textContent = cards.length;
};




function checkCheckedMarka() {
  for (let index = 0; index < filterMarki.length; index++) {
    if (filterMarki[index].checked) {
       marka = filterMarki[index].id;
       return true;
    };
    false;
 };
};
checkCheckedMarka();

vidBetona.addEventListener('change', function(){
  if(checkCheckedMarka()){
    vid = vidBetona.value;
    renderFilterMarki();
    // calcMinPrices();
    // marka = calcMinPrices()
    changeCardBetonPrices();
  }
  else {
    vid = vidBetona.value;
    renderFilterMarki();
    // calcMinPrices();
    marka = calcMinPrices()
    changeCardBetonPrices();
  };



  // vid = vidBetona.value;
  // renderFilterMarki();
  // calcMinPrices();
  // // marka = calcMinPrices()
  // changeCardBetonPrices();
});


filterMarki.forEach(function(button) {
  button.addEventListener('change', function(){
    marka = this.id;
    changeCardBetonPrices();
    // changeAveragePrices();
  });
});




function renderFilterMarki() {
  let filteredMarki = [];
  sellersList.map(function(value) {
    if(value[vid]){
      filteredMarki.push(Object.keys(value[vid]));
    }
    
  });
  
  filteredMarki = Array.from(new Set(filteredMarki.toString().split(',')));
  
  if (filteredMarki.includes(marka)) {
  }
  else {
      marka = filteredMarki[0];
      document.getElementById(marka).click();
  };

  filterMarki.forEach(function(item){
    if (filteredMarki.includes(item.id)) {
        item.parentElement.classList.remove('no_active')
        item.classList.remove('no_active')
    }
    else {
        item.parentElement.classList.add('no_active')
        item.classList.remove('no_active')
    };
  });
};

renderFilterMarki();


let obem = 1;
let km = 1;

changeCardBetonPrices();

function changeCardBetonPrices() {
  averagePrices = [];
  averageDostavkaPrices = [];
  
  cardBetonPrices.forEach(function(card, index) {
    // if(!sellersList[index][vid]){
    //   console.log(cardBetonPrices[index].closest('.card'));
    //   cardBetonPrices[index].closest('.card').style.display = 'none';
    // }


    if(sellersList[index][vid]){
      cardBetonPrices[index].textContent = sellersList[index][vid][marka] + ' р.';
    }
    else{
      
    };
    

    if (checkCheckedMarka() === true){
      cardBetonTitles[index].textContent = marka.toUpperCase() + ' за куб:';
    }
    else {
      cardBetonTitles[index].textContent = 'Бетон за куб:';
    };

    if (dostavka.value === 'in'){
      cardDostavkaPrices[index].textContent = sellersList[index].dostavka.gor + ' р.';
    }
    else if (dostavka.value === 'out') {
      cardDostavkaPrices[index].textContent = sellersList[index].dostavka.km + ' р./км';
    };

    cardTotalPrices[index].textContent = 
      (parseInt(cardBetonPrices[index].textContent) * obem) + 
      (parseInt(cardDostavkaPrices[index].textContent) * obem * km) +
      parseInt(cardArendaPrices[index].textContent) + ' р.';

    averagePrices.push(parseInt(cardBetonPrices[index].textContent));
    averageDostavkaPrices.push(parseInt(cardDostavkaPrices[index].textContent));

    if (cardBetonPrices[index].textContent.includes('undefined') || (!sellersList[index][vid])){
        cardBetonPrices[index].textContent = 'нет';
        cardTotalPrices[index].textContent = 'нет';
        cardTotalPrices[index].closest('.card').style.opacity = '0.5';
      }
      else {cardTotalPrices[index].closest('.card').style.opacity = '1';
      }
    });

    changeAveragePrices()
    changeFoundedSellers()
};




function calcMinPrices() {
  // allMarkiInCurrentVid = sellersList.map(function(value) {
  //   return Object.keys(value[vid]);
  // });
  // allMarkiInCurrentVid = allMarkiInCurrentVid.reduce((a,b) => a = b);

  let allMarkiInCurrentVid = [];
  sellersList.map(function(value) {
    if(value[vid]){
      allMarkiInCurrentVid.push(Object.keys(value[vid]));
    }
    
  });
  
  allMarkiInCurrentVid = Array.from(new Set(allMarkiInCurrentVid.toString().split(',')));

  let allPrices2 = [];

  allMarkiInCurrentVid.forEach(function(item) {
    sellersList.filter(function(card, index) {
      if(card[vid]){
        allPrices2.push(card[vid][item]);
      }
    });
  });

  allMarkiInCurrentVid.sort((a,b) => a.replace('m','')-b.replace('m',''));
  allPrices2 = Math.min(...allPrices2)
  allPrices = allPrices2;

  return allMarkiInCurrentVid[0];
};


// calcMinPrices();


// rangeSlider.addEventListener('input', changeCardBetonPricesInitial())

// function getVolumeSliderValue(){
//   // return console.log(rangeSlider.value = +rangeSlider.value);
//   obem = +rangeSlider.value;
// };







// ВЫВОД списка юетононасосов в выпадающий список

// let nasosesList = [];

// function createNasosesList() {
//   let nasosesFromInitialList = [];
//   sellersList.filter(function(value) {
//     nasosesFromInitialList.push(Object.keys(value.abn));
//     nasosesFromInitialList.push(Object.keys(value.linear));
//     nasosesFromInitialList.push(Object.keys(value.stats));
//   });
//   nasosesFromInitialList = nasosesFromInitialList.join().split(',');
  
//   nasosesList = nasosesFromInitialList.filter(function(item, pos) {
//     return nasosesFromInitialList.indexOf(item) == pos;
//   })
  
//   addNasosesToSelectInput();
// };
// createNasosesList()



// function addNasosesToSelectInput() {
//   for (let i = 0; i < nasosesList.length; i++){
//     let nasosItem = document.createElement('option');
//     nasosItem.value = nasosesList[i];
//     nasosItem.textContent = nasosesList[i];
//     nasos.appendChild(nasosItem);
//   }
//   console.log(nasos.options);
// };
// addNasosesToSelectInput()


// for(var key in sellersList) {
//   var value = objects[abn];
// }

// let vals = sellersList.keys(abn).map(key => abn[key]);

// console.log(vals);






