 const germanyCatalog = [
  {
    image: 'img/img germany/03 (1).jpg',
    personName: 'Курт Вернер',
    imageName: 'Над городом',
    typeImage: 'Цветная литография (40х60)',
    price: '16000 руб'
  },
  {
    image: 'img/img germany/03 (2).jpg',
    personName: 'Макс Рихтер',
    imageName: 'Птенцы',
    typeImage: 'Холст, масло (50х80) ',
    price: '14 500 руб'
  },
  {
    image: 'img/img germany/03 (3).jpg',
    personName: 'Среди листьев',
    imageName: 'Над городом',
    typeImage: 'Цветная литография (40х60) ',
    price: '20 000 руб'
  },
  {
    image: 'img/img germany/03 (4).jpg',
    personName: 'Герман Беккер',
    imageName: 'Яркая птица',
    typeImage: 'Цветная литография (40х60) ',
    price: '13 000 руб'
  },
  {
    image: 'img/img germany/03 (5).jpg',
    personName: 'Вульф Бауэр',
    imageName: 'Дятлы',
    typeImage: 'Бумага, акрил (50х80) ',
    price: '20 000 руб'
  },
  {
    image: 'img/img germany/03 (6).jpg',
    personName: 'Вальтер Хартманн',
    imageName: 'Большие воды',
    typeImage: 'Бумага, акрил (50х80) ',
    price: '23 000 руб'
  },
];

const englandCatalog = [
  {
    image: 'img/img england/03 (7).jpg',
    personName: 'Пол Смит',
    imageName: 'Дикий зверь',
    typeImage: 'Акварель, бумага (50х80) ',
    price: '19 500 руб'
  },
  {
    image: 'img/img england/03 (8).jpg',
    personName: 'Джон Уайт',
    imageName: 'Скалистый берег',
    typeImage: 'Цветная литография (40х60)',
    price: '17 500 руб'
  },
  {
    image: 'img/img england/03 (9).jpg',
    personName: 'Джим Уотсон',
    imageName: 'Река и горы',
    typeImage: 'Акварель, бумага (50х80) ',
    price: '20 500 руб'
  },
  {
    image: 'img/img england/03 (10).jpg',
    personName: 'Юджин Зиллион',
    imageName: 'Белый попугай',
    typeImage: 'Цветная литография (40х60) ',
    price: '15 500 руб'
  },
  {
    image: 'img/img england/03 (11).jpg',
    personName: 'Эрик Гиллман',
    imageName: 'Ночная рыба',
    typeImage: 'Бумага, акрил (50х80) ',
    price: '12 500 руб'
  },
  {
    image: 'img/img england/03 (12).jpg',
    personName: 'Альфред Барр',
    imageName: 'Рыжий кот',
    typeImage: 'Цветная литография (40х60) ',
    price: '21 000 руб'
  },
];

const franchCatalog = [
  {
    image: 'img/img franch/03 (13).jpg',
    personName: 'Пол Смит',
    imageName: 'Дикий зверь',
    typeImage: 'Акварель, бумага (50х80) ',
    price: '19 500 руб'
  },
  {
    image: 'img/img franch/03 (14).jpg',
    personName: 'Джон Уайт',
    imageName: 'Скалистый берег',
    typeImage: 'Цветная литография (40х60)',
    price: '17 500 руб'
  },
  {
    image: 'img/img franch/03 (15).jpg',
    personName: 'Джим Уотсон',
    imageName: 'Река и горы',
    typeImage: 'Акварель, бумага (50х80) ',
    price: '20 500 руб'
  },
  {
    image: 'img/img franch/03 (16).jpg',
    personName: 'Юджин Зиллион',
    imageName: 'Белый попугай',
    typeImage: 'Цветная литография (40х60) ',
    price: '15 500 руб'
  },
  {
    image: 'img/img franch/03 (17).jpg',
    personName: 'Эрик Гиллман',
    imageName: 'Ночная рыба',
    typeImage: 'Бумага, акрил (50х80) ',
    price: '12 500 руб'
  },
  {
    image: 'img/img franch/03 (18).jpg',
    personName: 'Альфред Барр',
    imageName: 'Рыжий кот',
    typeImage: 'Цветная литография (40х60) ',
    price: '21 000 руб'
  },
];

let button = document.querySelector('.catalog_list');

button.onclick = function(event) {
  let target = event.target;

  if( target == undefined) return;

  getCatalog(target.classList[1]);
};

let getCatalog = (target) => {

  let catalogMain = document.querySelector('div.catalog_main');

  while (catalogMain.firstChild) {
    catalogMain.removeChild(catalogMain.firstChild);
  }

  if(target == 'tab_btn_germany') {
    catalogEvent = germanyCatalog;
  }
  else if( target == 'tab_btn_england') {
    catalogEvent = englandCatalog;
  }
  else {
    catalogEvent = franchCatalog;
  };

for(let i=0; i<6; i++) {
  let cardArt = document.createElement('div');
  let artImg = document.createElement('img');
  let cardName = document.createElement('p');
  let personNameCard = document.createElement('h3');
  let typeCart = document.createElement('p');
  let priceCard = document.createElement('p');
  let primaryButton = document.createElement('button')

  cardArt.classList.add('card_art');
  catalogMain.append(cardArt);

  artImg.classList.add('art_img');
  cardArt.prepend(artImg);
  artImg.src = catalogEvent[i].image;

  cardName.classList.add('card_name');
  cardName.innerHTML = catalogEvent[i].personName;
  cardArt.append(cardName)


  personNameCard.classList.add('person_name_card');
  personNameCard.innerHTML = catalogEvent[i].personName;
  cardArt.append(personNameCard);

  typeCart.classList.add('type_card');
  typeCart.innerHTML = catalogEvent[i].imageName;
  cardArt.append(typeCart);

  priceCard.classList.add('price_card');
  priceCard.innerHTML = catalogEvent[i].typeImage;
  cardArt.append(priceCard)

  primaryButton.classList.add('primary_btn');
  primaryButton.innerHTML = 'В корзину'
  cardArt.append(primaryButton)
};


}
getCatalog();

