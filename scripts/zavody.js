const cardTemlate = document.querySelector('.cards_template').content;
const cardsBlock = document.querySelector('.cards');

// console.log(cardTemlate)

function newCard(seller){
    const newCard = cardTemlate.cloneNode(true);
    const cardUrl = newCard.querySelector('.card__title');
    const cardName = newCard.querySelector('.card__name');
    const cardRecommend = newCard.querySelector('.card__approved');
    const cardType = newCard.querySelector('.price-card__adress');
    const cardButtonZapros = newCard.querySelector('.button_type_zapros');
    const cardButtonUrl = newCard.querySelector('.link_place_company-card');
    
    cardUrl.href = seller.url;
    cardName.textContent = seller.name;
    cardType.textContent = seller.adressSokr;
    cardButtonUrl.href = seller.url;

    if(!seller.recommend){
        cardRecommend.classList.add('no_active');
    };

    cardButtonZapros.addEventListener('click', function(evt) {
        evt.preventDefault();
        activePopup = zaprosPopup;
        openPopup(activePopup);
    });

    return newCard;

};

function renderCards(){
    sellersList.forEach(function(seller){
        cardsBlock.append(newCard(seller))
    });
};
renderCards();