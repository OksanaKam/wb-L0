import './index.css';
import { FormValidator } from './components/FormValidator';
import { params,
         buttonSubmit,
         formBuyer,
         phoneInput,
         paymentCheckbox,
         totalSum,
         companyInfo,
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
         goodsCheckboxes,
         goods,
         template,
         price
} from './utils/constants';
import { initialCards } from './utils/data';
import { PopupInfo } from './components/PopupInfo';

console.log(goods);

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

// изменение суммы товаров

// totalSum.innerHTML = goodsCheckboxes.checked;

/*
const goodsSum = price.forEach(function(sum) {
  console.log(parseInt(sum.textContent));
});
*/

// изменение текста кнопки
let sum = totalSum.innerHTML
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

  const goodElement = template.cloneNode(true);
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
  const goodButtonMinus = goodElement.querySelector('.basket__goods-minus');

  goodName.textContent = item.name;
  goodImage.src = item.image;
  goodImage.alt = item.name;
  goodColor.textContent = item.color;
  goodSize.textContent = item.size;
  goodWarehouse.textContent = item.warehouse;
  goodCompany.textContent = item.company;
  goodCount.value = item.count;
  goodPrice.textContent = goodCount.value * item.price;
  goodOldPrice.textContent = `${item.old_price} com`;

  goodButtonMinus.addEventListener('click', function() {
    if (goodCount.value <= 1) {
      goodCount.value = 0;
    } else {
      goodCount.value--;
    }
  });

  goodElement.querySelector('.basket__goods-plus').addEventListener('click', function() {
    if (goodCount.value >= item.limit) {
      goodCount.value = item.limit;
    } else {
      goodCount.value++;
    }
  });

  if (item.limit >= 2) {
    goodLimit.textContent = `Осталось ${item.limit} шт.`
  };

  return goodElement;
}

const setCount = (e) => {
  let value = e.value
}
/*
// откpытие попапа информации о компании
const popupCompanyInfo = new PopupInfo('.popup_type_company');
popupCompanyInfo.setEventListeners();

companyInfo.forEach(function(button) {
  button.addEventListener('click', () => {
    popupCompanyInfo.open();
  });
});
*/
// открытие попапа информации о доставкe
const popupDeliveryInfo = new PopupInfo('.popup_type_delivery');
popupDeliveryInfo.setEventListeners();

buttonDeliveryChange.addEventListener('click', () => {
  popupDeliveryInfo.open();
});

buttonTotalDeliveryChange.addEventListener('click', () => {
  popupDeliveryInfo.open();
});

// открытие попапа информации о способе оплаты
const popupPaymentInfo = new PopupInfo('.popup_type_payment');
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

// установка свойства checked

const toggleSelectAllCheckbox = () => {
  const areAllChecked = [...goodsCheckboxes].every((c) => c.checked === true);
  goodsCheckboxes.forEach((c) => {
    c.checked = !areAllChecked;
  });
  selectAllCheckbox.checked = !areAllChecked;
}

selectAllCheckbox.addEventListener('click', toggleSelectAllCheckbox);

const toggleGoodsCheckbox = () => {
  const areAllChecked = [...goodsCheckboxes].every((c) => c.checked === true);
  selectAllCheckbox.checked = areAllChecked;
}

goodsCheckboxes.forEach((c) => {
  c.addEventListener('click', toggleGoodsCheckbox);
})

