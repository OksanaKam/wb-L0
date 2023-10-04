class FormValidator {
  constructor(data, form) {
    this._data = data;
    this._form = form;
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._errorClass = data.errorClass;
    this._invalidInputClass = data.invalidInputClass;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._buttonElement = document.querySelector(this._submitButtonSelector);
  }

  // функция показа элемента ошибки
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._invalidInputClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  // функция скрытия элемента ошибки
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._invalidInputClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  // функция проверки валидности поля
  _checkInputValidity(inputElement) {
    const REGEX_EMAIL = /^([^ ]+@[^ ]+\\.[a-z]{2,4}|)$/;
    const REGEX_PHONE = /^\+[1-9] \d{3} \d{3} \d{2} \d{2}$/;
    const REGEX_INN = /^\d{14}$/;

    if (!inputElement.validity.valid && inputElement.name === 'name') {
      this._showInputError(inputElement, inputElement.textContent = 'Укажите имя');
    } else if (!inputElement.validity.valid && inputElement.name === 'surname') {
      this._showInputError(inputElement, inputElement.textContent = 'Введите фамилию');
    } else if (!inputElement.validity.valid && inputElement.name === 'email' && inputElement.value == '') {
      this._showInputError(inputElement, inputElement.textContent = 'Укажите электронную почту');
    } else if (!inputElement.validity.valid && inputElement.name === 'email' && !REGEX_EMAIL.test(inputElement.value)) {
      this._showInputError(inputElement, inputElement.textContent = 'Проверьте электронную почту');
    } else if (!inputElement.validity.valid && inputElement.name === 'phone' && inputElement.value == '') {
      this._showInputError(inputElement, inputElement.textContent = 'Укажите номер телефона');
    } else if (!inputElement.validity.valid && inputElement.name === 'phone' && !REGEX_PHONE.test(inputElement.value)) {
      this._showInputError(inputElement, inputElement.textContent = 'Формат: +9 999 999 99 99');
    } else if (!inputElement.validity.valid && inputElement.name === 'inn' && inputElement.value == '') {
      this._showInputError(inputElement, inputElement.textContent = 'Укажите ИНН');
    } else if (!inputElement.validity.valid && inputElement.name === 'inn' && !REGEX_INN.test(inputElement.value)) {
      this._showInputError(inputElement, inputElement.textContent = 'Проверьте ИНН');
    } else {
      this._hideInputError(inputElement);
    }
  };

  // функция проверки невалидного поля
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  // функция добавления слушателя всем полям формы
  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
      });
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('focusout', () => {
        this._hideInputError(inputElement);
      });
    });

  };

  // функция валидации форм
  enableValidation() {
    this._setEventListeners();
  }
}

export { FormValidator };
