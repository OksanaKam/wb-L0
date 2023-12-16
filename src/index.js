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
         buttonTotalPaymentChange
} from './utils/constants';
import { PopupInfo } from './components/PopupInfo';

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

// изменение текста кнопки
let sum = totalSum.innerHTML
paymentCheckbox.addEventListener('change', () => {
    buttonSubmit.textContent = paymentCheckbox.checked ? `Оплатить ${sum} сом` : 'Заказать';
});

// откpытие попапа информации о компании
const popupCompanyInfo = new PopupInfo('.popup_type_company');
popupCompanyInfo.setEventListeners();

companyInfo.forEach(function(button) {
  button.addEventListener('click', () => {
    popupCompanyInfo.open();
  });
});

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

