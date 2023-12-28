import './index.css';
import { FormValidator } from './components/FormValidator';
import { params,
         buttonSubmit,
         formBuyer,
         phoneInput,
         paymentCheckbox,
         totalSum,
         totalCount,
         totalOldSum,
         totalDiscount,
         buttonSectionStockHide,
         buttonSectionOutHide,
         goodsContent,
         sectionChoose,
         goodsTitleSummary,
         goodsOutContent,
         buttonDeliveryChange,
         buttonTotalDeliveryChange,
         buttonPaymentChange,
         buttonTotalPaymentChange,
         selectAllCheckbox,
         goods,
         templateGood,
         summary,
         templatePaymentCard,
         paymentCards,
         paymentCardNumber,
         paymentCardImage
} from './utils/constants';
import { initialCards, paymentCardsArray } from './utils/data';
import { Popup } from './components/Popup';

// добавление пробелов в номере телефона
phoneInput.addEventListener('keyup', (event) => {
  const point = [2, 6, 10, 13];
  if (point.includes(event.target.value.length) && event.key !== 'Backspace') {
    event.target.value += ' ';
  }
});

// валидация формы
const buyerFormValidator = new FormValidator(params, formBuyer);

buyerFormValidator.enableValidation();

buttonSubmit.addEventListener('click', () => {
  buyerFormValidator.enableValidation();
});

// изменение данных блока Итого и summary
const countTotal = () => {
  const sum = initialCards.reduce((prev, item) => {
    return item.checked ? prev + (item.count * item.price) : prev;
  }, 0);
  const count = initialCards.reduce((prev, item) => {
    return item.checked ? prev + item.count : prev;
  }, 0);
  const oldSum = initialCards.reduce((prev, item) => {
    return item.checked ? prev + (item.count * item.old_price) : prev;
  }, 0);
  const discount = oldSum - sum;

  totalSum.innerHTML = parseInt(sum).toLocaleString();
  totalCount.innerHTML = `${parseInt(count).toLocaleString()} товара`;
  totalOldSum.innerHTML = `${parseInt(oldSum).toLocaleString()} com`;
  totalDiscount.innerHTML = `- ${parseInt(discount).toLocaleString()} com`;
  summary.innerHTML = `${parseInt(count).toLocaleString()} товара · ${parseInt(sum).toLocaleString()} com`;
}

countTotal();

// изменение текста кнопки
let sum = totalSum.innerText
paymentCheckbox.addEventListener('change', () => {
    buttonSubmit.textContent = paymentCheckbox.checked ? `Оплатить ${sum} сом` : 'Заказать';
});

// отображение карточек товара
const renderCards = () => {
  const cards = initialCards.map(createGood);
  goods.append(...cards);
}

renderCards();

function createGood(item) {

  const goodElement = templateGood.cloneNode(true);
  const goodName = goodElement.querySelector('.basket__goods-name');
  const goodImage = goodElement.querySelector('.basket__goods-image')
  const goodColor = goodElement.querySelector('.basket__goods-color');
  const goodSize = goodElement.querySelector('.basket__goods-size');
  const goodWarehouse = goodElement.querySelector('.basket__goods-warehouse');
  const goodCompany = goodElement.querySelector('.basket__goods-company');
  const goodCount = goodElement.querySelector('.basket__goods-number');
  const goodPrice = goodElement.querySelector('.basket__goods-price');
  const goodOldPrice = goodElement.querySelector('.basket__goods-stroke');
  const goodLimit = goodElement.querySelector('.basket__goods-limit');
  const goodButtonPlus = goodElement.querySelector('.basket__goods-plus');
  const goodButtonMinus = goodElement.querySelector('.basket__goods-minus');
  const goodCheckbox = goodElement.querySelector('.basket__goods-checkbox_margin_twelve');

  goodName.textContent = item.name;
  goodImage.src = item.image;
  goodImage.alt = item.name;
  goodColor.textContent = item.color;
  goodSize.textContent = item.size;
  goodWarehouse.textContent = item.warehouse;
  goodCompany.textContent = item.company;
  goodCount.value = item.count;
  goodCheckbox.checked = item.checked;

  const changeCount = () => {
    goodPrice.textContent = parseInt(item.count * item.price).toLocaleString();
    goodOldPrice.textContent = `${parseInt(item.count * item.old_price).toLocaleString()} com`;

    if (item.count <= 1) {
      goodButtonMinus.classList.remove('basket__goods-minus_active');
      goodButtonMinus.setAttribute('disabled', true);
    } else {
      goodButtonMinus.classList.add('basket__goods-minus_active');
      goodButtonMinus.removeAttribute('disabled');
    }

    if (item.count === item.limit) {
      goodButtonPlus.classList.remove('basket__goods-plus_active');
      goodButtonPlus.setAttribute('disabled', true);
    } else {
      goodButtonPlus.classList.add('basket__goods-plus_active');
      goodButtonPlus.removeAttribute('disabled');
    }

  }
  changeCount();

  goodButtonMinus.addEventListener('click', function() {
    goodCount.value--;
    item.count--;
    changeCount()
    countTotal();
  });

  goodButtonPlus.addEventListener('click', function() {
    goodCount.value++;
    item.count++;
    changeCount();
    countTotal();
  });

  if (item.limit >= 2) {
    goodLimit.textContent = `Осталось ${item.limit} шт.`
  };

  // установка свойства checked
  const toggleSelectAllCheckbox = () => {
    const areAllChecked = goodCheckbox.checked === true;
    goodCheckbox.checked = !areAllChecked;
    selectAllCheckbox.checked = !areAllChecked;
  }

  selectAllCheckbox.addEventListener('click', () => {
    if (selectAllCheckbox.checked) {
      selectAllCheckbox.checked = false;
      item.checked = true;
    } else {
      selectAllCheckbox.checked = true;
      item.checked = false;
    }
    console.log(selectAllCheckbox);
    toggleSelectAllCheckbox();
    countTotal();
  });

  const toggleGoodsCheckbox = () => {
    const areAllChecked = goodCheckbox.checked === true;
    selectAllCheckbox.checked = areAllChecked;
  }

  goodCheckbox.addEventListener('click', () => {
    if (item.checked) {
      item.checked = false;
    } else {
      item.checked = true;
    }
    toggleGoodsCheckbox();
    countTotal();
  });

  return goodElement;
}

// открытие попапа информации о доставкe
const popupDeliveryInfo = new Popup('.popup_type_delivery');
popupDeliveryInfo.setEventListeners();

buttonDeliveryChange.addEventListener('click', () => {
  popupDeliveryInfo.open();
});

buttonTotalDeliveryChange.addEventListener('click', () => {
  popupDeliveryInfo.open();
});

// отображение способа оплаты
const showPaymentCard = () => {
  const card = paymentCardsArray.find(element => element.checked === true);

  paymentCardNumber.textContent = card.number;
  paymentCardImage.src = card.image;
  paymentCardImage.alt = card.number;

}

showPaymentCard()

// отображение информации о способе оплаты в попапе
const renderPaymentCards = () => {
  const cards = paymentCardsArray.map(createPaymentCard);
  paymentCards.append(...cards);
}

renderPaymentCards();

function createPaymentCard(item) {

  const paymentCardElement = templatePaymentCard.cloneNode(true);
  const cardImage = paymentCardElement.querySelector('.popup__payment-image');
  const cardNumber = paymentCardElement.querySelector('.popup__payment-text')
  const cardRadio = paymentCardElement.querySelector('.popup__radio-payment');

  cardNumber.textContent = item.number;
  cardImage.src = item.image;
  cardImage.alt = item.number;
  cardRadio.checked = item.checked;

  cardRadio.addEventListener('change', () => {
    paymentCardsArray.forEach((card) => {
      card.checked = false;
    })
    item.checked = true;
    showPaymentCard();
  })

  return paymentCardElement;
}

// открытие попапа информации о способе оплаты
const popupPaymentInfo = new Popup('.popup_type_payment');
popupPaymentInfo.setEventListeners();

buttonPaymentChange.addEventListener('click', () => {
  popupPaymentInfo.open();
});

buttonTotalPaymentChange.addEventListener('click', () => {
  popupPaymentInfo.open();
});

// скрытие и открытие секции по кнопке скрыть
buttonSectionStockHide.addEventListener('click', () => {
  if (buttonSectionStockHide.classList.contains('basket__goods-hide_active')) {
    buttonSectionStockHide.classList.remove('basket__goods-hide_active');
    goodsContent.classList.remove('basket__goods-content_unactive');
    sectionChoose.classList.remove('basket__goods-choose_type_unactive');
    goodsTitleSummary.classList.remove('basket__goods-summary_active');
  } else {
    buttonSectionStockHide.classList.add('basket__goods-hide_active');
    goodsContent.classList.add('basket__goods-content_unactive');
    sectionChoose.classList.add('basket__goods-choose_type_unactive');
    goodsTitleSummary.classList.add('basket__goods-summary_active');
  }
});

buttonSectionOutHide.addEventListener('click', () => {
  if (buttonSectionOutHide.classList.contains('basket__goods-hide_active')) {
    buttonSectionOutHide.classList.remove('basket__goods-hide_active');
    goodsOutContent.classList.remove('basket__goods-content_unactive');
  } else {
    buttonSectionOutHide.classList.add('basket__goods-hide_active');
    goodsOutContent.classList.add('basket__goods-content_unactive');
  }
});

