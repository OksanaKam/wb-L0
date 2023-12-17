export const params = ({
  formSelector: '.basket__form',
  inputSelector: '.basket__input',
  submitButtonSelector: '.basket__order-button',
  inactiveButtonClass: 'basket__order-button_disabled',
  errorClass: 'basket__error_visible',
  invalidInputClass: 'basket__input_invalid'
});

export const buttonSubmit = document.querySelector('.basket__order-button');
export const formBuyer = document.querySelector('.basket__form');
export const phoneInput = document.querySelector('.basket__input_name_phone');
export const paymentCheckbox = document.querySelector('#checkbox-payment');
export const totalSum = document.querySelector('.basket__whole-sum');
export const companyInfo = document.querySelectorAll('.basket__goods-data');
export const buttonSectionStockHide = document.querySelector('.basket__goods-hide_type_stock');
export const buttonSectionOutHide = document.querySelector('.basket__goods-hide_type_out');
export const goodsContent = document.querySelector('.basket__goods-content_type_stock');
export const goodsOutContent = document.querySelector('.basket__goods-content_type_out');
export const sectionChoose = document.querySelector('.basket__goods-choose_type_choose');
export const goodsTitleSummary = document.querySelector('.basket__goods-summary');
export const buttonDeliveryChange = document.querySelector('.goods-delivery__change');
export const buttonTotalDeliveryChange = document.querySelector('.basket__delivery-edit');
export const buttonPaymentChange = document.querySelector('.goods-payment__change');
export const buttonTotalPaymentChange = document.querySelector('.basket__payment-edit');
export const selectAllCheckbox = document.getElementById('checkbox-all');
export const goodsCheckboxes = document.querySelectorAll('.basket__goods-checkbox_margin_twelve');
