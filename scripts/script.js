let zaprosButton = Array.from(document.querySelectorAll('.button_type_zapros'));
let tenderButton = document.querySelectorAll('.button_type_tender');
let callBackButton = document.querySelectorAll('.button_type_callback');
let addCampaignButton = document.querySelectorAll('.button_type_addcampaign');
let closeButton = document.querySelectorAll('.popup__close');
let popup = document.querySelectorAll('.popup');
let zaprosPopup = document.querySelector('#popup_zapros');
let tenderPopup = document.querySelector('#popup_tender');
let callBackPopup = document.querySelector('#popup_callback');
let addCampaignPopup = document.querySelector('#add_compaign');
let popupOverlay = document.querySelectorAll('.popup__bg');

let activePopup;

zaprosButton.forEach(function(el) {
    el.addEventListener('click', function(evt) {
        evt.preventDefault();
        activePopup = zaprosPopup;
        openPopup(activePopup);
    });
  });

tenderButton.forEach(function(el) {
    el.addEventListener('click', function(evt) {
        evt.preventDefault();
        activePopup = tenderPopup;
        openPopup(activePopup);
    });
  });

callBackButton.forEach(function(el) {
    el.addEventListener('click', function(evt) {
        evt.preventDefault();
        activePopup = callBackPopup;
        openPopup(activePopup);
    });
  });

addCampaignButton.forEach(function(el) {
    el.addEventListener('click', function(evt) {
        evt.preventDefault();
        activePopup = addCampaignPopup;
        openPopup(activePopup);
    });
  });

closeButton.forEach(function(el) {
    el.addEventListener('click', function() {
      closePopup(activePopup);
    });
  });

popupOverlay.forEach(function(el) {
    el.addEventListener('click', function() {
      closePopup(activePopup);
    });
  });


function openPopup(activePopup) {
  activePopup.classList.add('popup_active');
};

function closePopup(activePopup) {
  activePopup.classList.remove('popup_active');
};
