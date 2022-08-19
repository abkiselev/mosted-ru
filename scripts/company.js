const companyName = document.querySelector('.profile__title').textContent;

const benefits = document.querySelector('.benefits');
const recommended = document.querySelector('.recommend');
const zavod = benefits.querySelector('.zavod');
const zavodov = benefits.querySelector('.zavodov');
const moschost = benefits.querySelector('.moschost');
const godov = benefits.querySelector('.godov');
const lab = benefits.querySelector('.lab');
const gost = benefits.querySelector('.gost');
const serts = benefits.querySelector('.serts');
const kruglosutochno = benefits.querySelector('.kruglosutochno');
const bezvihodnih = benefits.querySelector('.bezvihodnih');
const avtopark = benefits.querySelector('.avtopark');
const vdenzakaza = benefits.querySelector('.vdenzakaza');
const actsii = benefits.querySelector('.actsii');
const skidki = benefits.querySelector('.skidki');
const zamer = benefits.querySelector('.zamer');
const otsenka = benefits.querySelector('.otsenka');
const otsrochka = benefits.querySelector('.otsrochka');
const beznds = benefits.querySelector('.beznds');
const nds = benefits.querySelector('.nds');
const beznal = benefits.querySelector('.beznal');
const nal = benefits.querySelector('.nal');
const carta = benefits.querySelector('.carta');

const adress = document.querySelector('.contacts__address');

// console.log(zavod)

const priceFilter = document.querySelector('.price-filter');
const priceFilterInputs = priceFilter.querySelectorAll('.input');
const tables = document.querySelectorAll('.table');
const priceTables = document.querySelectorAll('.price-table');

const currentPriceList = sellersList.find(function(card){
    if(card.name === companyName){
        return card
    };

});

const vidsToAdd = Object.keys(currentPriceList);


function renderBenefits(){
    if(!currentPriceList.recommend){
        recommended.style.display = 'none';
    }
    zavod.textContent = currentPriceList.zavod;
    zavodov.textContent = currentPriceList.zavodov;
    moschost.textContent = currentPriceList.moschost;
    godov.textContent = currentPriceList.godov;
    lab.textContent = currentPriceList.lab;
    gost.textContent = currentPriceList.gost;
    serts.textContent = currentPriceList.serts;
    kruglosutochno.textContent = currentPriceList.kruglosutochno;
    bezvihodnih.textContent = currentPriceList.bezvihodnih;
    avtopark.textContent = currentPriceList.avtopark + ' машин';
    vdenzakaza.textContent = currentPriceList.vdenzakaza;
    actsii.textContent = currentPriceList.actsii;
    skidki.textContent = currentPriceList.skidki;
    zamer.textContent = currentPriceList.zamer;
    otsenka.textContent = currentPriceList.otsenka;
    otsrochka.textContent = currentPriceList.otsrochka;
    beznds.textContent = currentPriceList.beznds;
    nds.textContent = currentPriceList.nds;
    beznal.textContent = currentPriceList.beznal;
    nal.textContent = currentPriceList.nal;
    carta.textContent = currentPriceList.carta;
    adress.textContent = currentPriceList.adress;
}
renderBenefits();




priceFilterInputs.forEach(function(item){
    if((vidsToAdd.includes(item.id)) || (item.id === 'all')){
        item.addEventListener('change', (evt) => displayCheckedTableVid(item))
    }
    else {
        item.parentElement.style.display = 'none';
    }
});

function displayCheckedTableVid(item){
    priceTables.forEach(function(table){
        if((table.id === item.id) || (item.id === 'all')){
            if(vidsToAdd.includes(table.id)){
                table.style.display = 'table';
            }
        }
        else if(table.id !== item.id){
            table.style.display = 'none';
        }
    })
};


tables.forEach(function(table){
    if(!vidsToAdd.includes(table.id)){
        table.style.display = 'none';
    }
    else {
        renderTableStrokes(table)
    }
});


function renderTableStrokes(table){
    const tablePrices = table.querySelectorAll('.table__stroke_price');
    const markiToAdd = Object.keys(currentPriceList[table.id]);

    tablePrices.forEach(function(stroke){
        if(!markiToAdd.includes(stroke.dataset.id)){
            stroke.parentElement.style.display = 'none';
        }
        else {
            addMarkaPrice(table, stroke);
        };
    })
};


function addMarkaPrice(table, stroke){
    stroke.textContent = currentPriceList[table.id][stroke.dataset.id] + ' р.'
}





// ФИЛЬТР

const calcFilter = document.querySelector('.company-calc');

const obemSlider = calcFilter.querySelector('.volume__slider');
let obemBullet = calcFilter.querySelector('.volume__icon');


let dostavka = calcFilter.querySelector('.dostavka__input');
let distance = calcFilter.querySelector('.distance');

let distanceSlider = calcFilter.querySelector('.distance__slider');
let distanceBullet = calcFilter.querySelector('.distance__icon');


let vidBetona = document.querySelector("#vid");
let avarageArendaBlock = document.querySelector(".average-price_type_maschina");

let cardName = document.querySelector('.card__name');
let cardRecommended = document.querySelector('.card__approved');
let cardBetonPrice = document.querySelector('.beton-price');
let cardDostavkaPrice = document.querySelector('.dost-price');
let cardItogPrice = document.querySelector('.price-itog');


function showSliderValue() {
    setPrices();
    obemBullet.innerHTML = obemSlider.value;
    let rangeWidth = obemSlider.getBoundingClientRect().width;
    obemBullet.style.left = (obemSlider.value * 0.845) + "%";
}

obemSlider.addEventListener("input", showSliderValue, false);


function showSliderValueDistance() {
    setPrices();
    distanceBullet.innerHTML = distanceSlider.value;
    distanceBullet.style.left = (distanceSlider.value * 0.845) + "%";
}

distanceSlider.addEventListener("input", showSliderValueDistance, false);

dostavka.addEventListener("change", function() {
    distance.classList.toggle('no_active');
    setPrices();
});


const filterCategories = calcFilter.querySelector('.filter__vid');
const filterCategoriesItems = calcFilter.querySelectorAll('.filter__category-option');
const filterMarki = Array.from(calcFilter.querySelectorAll('.filter__marki'));

// console.log(filterCategories)

filterCategoriesItems.forEach(function(item){
    if(!vidsToAdd.includes(item.value)){
        item.style.display = 'none';
    }
});

filterCategories.addEventListener('change', function(evt){
    renderMarki();
    setPrices();
})




function renderMarki(){
    let currentVid;
    
    filterCategoriesItems.forEach(function(vid){
        if(vid.selected){
            currentVid = vid.value;
        };
    });

    const markiToAdd = Object.keys(currentPriceList[currentVid]);

    filterMarki.forEach(function(marka){
        if(markiToAdd.includes(marka.id)){
            marka.parentElement.style.display = 'block';
            marka.addEventListener('change', function(evt){
                setPrices();
            })
            
        }
        else {
            marka.parentElement.style.display = 'none';
        }
    })
}
renderMarki();


function renderCard(){
    cardName.textContent = currentPriceList.name;

    if(!currentPriceList.recommend){
        cardRecommended.style.display = 'none';
    };

    setPrices()
};
renderCard();


function setPrices(){
    let currentVid;
    let currentMarka;
    
    filterCategoriesItems.forEach(function(vid){
        if(vid.selected){
            currentVid = vid.value;
        };
    });

    const markiToAdd = Object.keys(currentPriceList[currentVid]);

    if(filterMarki.some((item) => item.checked)){
        let filteredMarki = filterMarki.find((item) => item.checked);
        if(markiToAdd.includes(filteredMarki.id)){
            currentMarka = filteredMarki.id;
        }
        else{
        currentMarka = markiToAdd[0]
        document.getElementById(currentMarka).click()
    }
        
    }
    else{
        currentMarka = markiToAdd[0]
        document.getElementById(currentMarka).click()
    }

    cardBetonPrice.textContent = currentPriceList[currentVid][currentMarka] + ' р.';

    if(dostavka.value === 'in'){
        cardDostavkaPrice.textContent = currentPriceList.dostavka.gor + ' р.';
        cardItogPrice.textContent = (parseInt(cardBetonPrice.textContent) * obemSlider.value) +
                                (parseInt(cardDostavkaPrice.textContent) * obemSlider.value)
                                 + ' р.';
    }
    else if(dostavka.value === 'out'){
        cardDostavkaPrice.textContent = currentPriceList.dostavka.km + ' р./км';
        cardItogPrice.textContent = (parseInt(cardBetonPrice.textContent) * obemSlider.value) +
                                (currentPriceList.dostavka.gor * obemSlider.value) +
                                (parseInt(cardDostavkaPrice.textContent) * obemSlider.value * distanceSlider.value)
                                 + ' р.';
    };
    
    
};





// ПОРТФОЛИО

let porfolio = document.querySelectorAll('.portfolio__img');

porfolio.forEach(function(img, index){
    if(currentPriceList.portfolio[index]){
        img.src = currentPriceList.portfolio[index];
    }
    else {
        img.parentElement.style.display = 'none';
    }
});


let komanda = document.querySelectorAll('.komanda__img');

komanda.forEach(function(img, index){
    if(currentPriceList.portfolio[index]){
        img.src = currentPriceList.portfolio[index];
    }
    else {
        img.parentElement.style.display = 'none';
    }
});


let live = document.querySelectorAll('.live__img');

live.forEach(function(img, index){
    if(currentPriceList.portfolio[index]){
        img.src = currentPriceList.portfolio[index];
    }
    else {
        img.parentElement.style.display = 'none';
    }
});

let sertificatesBlock = document.querySelector('.sertificates');
let sertificates = document.querySelectorAll('.sertificates__img');

if(currentPriceList.sertificates.length === 0){
    sertificatesBlock.style.display = 'none';
} else {
    sertificates.forEach(function(img, index){
        if(currentPriceList.sertificates[index]){
            img.src = currentPriceList.sertificates[index];
        }
        else {
            img.parentElement.style.display = 'none';
        }
    });
};


console.log()