(()=>{"use strict";var e={};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function o(e,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,c=function(e,o){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(c)?c:String(c)),r)}var c}e.p="";var n=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._form=o,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._errorClass=t.errorClass,this._invalidInputClass=t.invalidInputClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=document.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var o=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._invalidInputClass),o.textContent=t,o.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._invalidInputClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid||"name"!==e.name?e.validity.valid||"surname"!==e.name?e.validity.valid||"email"!==e.name||""!=e.value?e.validity.valid||"email"!==e.name||/^([^ ]+@[^ ]+\\.[a-z]{2,4}|)$/.test(e.value)?e.validity.valid||"phone"!==e.name||""!=e.value?e.validity.valid||"phone"!==e.name||/^\+[1-9] \d{3} \d{3} \d{2} \d{2}$/.test(e.value)?e.validity.valid||"inn"!==e.name||""!=e.value?e.validity.valid||"inn"!==e.name||/^\d{14}$/.test(e.value)?this._hideInputError(e):this._showInputError(e,e.textContent="Проверьте ИНН"):this._showInputError(e,e.textContent="Укажите ИНН"):this._showInputError(e,e.textContent="Формат: +9 999 999 99 99"):this._showInputError(e,e.textContent="Укажите номер телефона"):this._showInputError(e,e.textContent="Проверьте электронную почту"):this._showInputError(e,e.textContent="Укажите электронную почту"):this._showInputError(e,e.textContent="Введите фамилию"):this._showInputError(e,e.textContent="Укажите имя")}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t)}))})),this._inputList.forEach((function(t){t.addEventListener("focusout",(function(){e._hideInputError(t)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),r=document.querySelector(".basket__order-button"),c=document.querySelector(".basket__form"),a=document.querySelector(".basket__input_name_phone"),i=document.querySelector("#checkbox-payment"),s=document.querySelector(".basket__whole-sum"),u=document.querySelector(".basket__whole-count"),l=document.querySelector(".basket__whole-old"),d=document.querySelector(".basket__whole-discount"),_=document.querySelector(".basket__goods-hide_type_stock"),p=document.querySelector(".basket__goods-hide_type_out"),m=document.querySelector(".basket__goods-content_type_stock"),y=document.querySelector(".basket__goods-content_type_out"),v=document.querySelector(".basket__goods-choose_type_choose"),b=document.querySelector(".basket__goods-summary"),h=document.querySelector(".goods-delivery__change"),f=document.querySelector(".basket__delivery-edit"),k=document.querySelector(".goods-payment__change"),g=document.querySelector(".basket__payment-edit"),S=document.getElementById("checkbox-all"),L=(document.querySelectorAll(".basket__goods-checkbox_margin_twelve"),document.querySelector(".basket__goods-content_type_stock")),E=document.querySelector("#good").content.querySelector(".basket__goods-element_type_stock"),q=document.querySelector(".basket__goods-summary"),w=(document.getElementById("payment-card"),document.querySelector(".basket__goods-issue")),C=document.querySelector(".basket__goods-type"),I=document.querySelector("#payment").content.querySelector(".popup__payment-card"),x=document.querySelector(".popup__payment-cards");const A=e.p+"b1d4750bbfc5d448cd04.jpg",O=e.p+"e8c4144d992940cd71e9.jpg",j=e.p+"5e725ad19a2995962e3a.jpg",B=e.p+"8cefe7556d3831bcf855.svg",T=e.p+"1112fca4de2f779b55fb.svg",P=e.p+"9bd5b0cce76cf8457acb.svg",M=e.p+"7f969414409573fefdf5.svg";var z=[{name:"Футболка UZcotton мужская",color:"Цвет: белый",size:"Размер: 56",warehouse:"Коледино WB",company:"OOO Вайлдберриз",image:A,count:1,limit:2,price:522,old_price:1051,checked:!0},{name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",color:"Цвет: прозрачный",size:"",warehouse:"Коледино WB",company:"OOO Мегапрофстиль",image:O,count:200,price:10500.235,old_price:11500.235,checked:!0},{name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',color:"",size:"",warehouse:"Коледино WB",company:"OOO Вайлдберриз",image:j,count:2,limit:2,price:247,old_price:475,checked:!0}],H=[{image:B,number:"1234 56•• •••• 1234",value:"mir",checked:!0},{image:T,number:"1234 56•• •••• 1234",value:"visa",checked:!1},{image:P,number:"1234 56•• •••• 1234",value:"mastercard",checked:!1},{image:M,number:"1234 56•• •••• 1234",value:"maestro",checked:!1}];function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function $(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==V(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!==V(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===V(r)?r:String(r)),n)}var r}var W=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEsc=this._handleEscClose.bind(this)}var t,o;return t=e,(o=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEsc)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&$(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function F(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?N(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}a.addEventListener("keyup",(function(e){[2,6,10,13].includes(e.target.value.length)&&"Backspace"!==e.key&&(e.target.value+=" ")}));var U=new n({formSelector:".basket__form",inputSelector:".basket__input",submitButtonSelector:".basket__order-button",inactiveButtonClass:"basket__order-button_disabled",errorClass:"basket__error_visible",invalidInputClass:"basket__input_invalid"},c);U.enableValidation(),r.addEventListener("click",(function(){U.enableValidation()}));var R=function(){var e=z.reduce((function(e,t){return t.checked?e+t.count*t.price:e}),0),t=z.reduce((function(e,t){return t.checked?e+t.count:e}),0),o=z.reduce((function(e,t){return t.checked?e+t.count*t.old_price:e}),0),n=o-e;s.innerHTML=parseInt(e).toLocaleString(),u.innerHTML="".concat(parseInt(t).toLocaleString()," товара"),l.innerHTML="".concat(parseInt(o).toLocaleString()," com"),d.innerHTML="- ".concat(parseInt(n).toLocaleString()," com"),q.innerHTML="".concat(parseInt(t).toLocaleString()," товара · ").concat(parseInt(e).toLocaleString()," com")};R();var X,Z=s.innerText;i.addEventListener("change",(function(){r.textContent=i.checked?"Оплатить ".concat(Z," сом"):"Заказать"})),X=z.map((function(e){var t=E.cloneNode(!0),o=t.querySelector(".basket__goods-name"),n=t.querySelector(".basket__goods-image"),r=t.querySelector(".basket__goods-color"),c=t.querySelector(".basket__goods-size"),a=t.querySelector(".basket__goods-warehouse"),i=t.querySelector(".basket__goods-company"),s=t.querySelector(".basket__goods-number"),u=t.querySelector(".basket__goods-price"),l=t.querySelector(".basket__goods-stroke"),d=t.querySelector(".basket__goods-limit"),_=t.querySelector(".basket__goods-plus"),p=t.querySelector(".basket__goods-minus"),m=t.querySelector(".basket__goods-checkbox_margin_twelve");o.textContent=e.name,n.src=e.image,n.alt=e.name,r.textContent=e.color,c.textContent=e.size,a.textContent=e.warehouse,i.textContent=e.company,s.value=e.count,m.checked=e.checked;var y=function(){u.textContent=parseInt(e.count*e.price).toLocaleString(),l.textContent="".concat(parseInt(e.count*e.old_price).toLocaleString()," com"),e.count<=1?(p.classList.remove("basket__goods-minus_active"),p.setAttribute("disabled",!0)):(p.classList.add("basket__goods-minus_active"),p.removeAttribute("disabled")),e.count===e.limit?(_.classList.remove("basket__goods-plus_active"),_.setAttribute("disabled",!0)):(_.classList.add("basket__goods-plus_active"),_.removeAttribute("disabled"))};return y(),p.addEventListener("click",(function(){s.value--,e.count--,y(),R()})),_.addEventListener("click",(function(){s.value++,e.count++,y(),R()})),e.limit>=2&&(d.textContent="Осталось ".concat(e.limit," шт.")),S.addEventListener("click",(function(){var t;S.checked?(S.checked=!1,e.checked=!0):(S.checked=!0,e.checked=!1),console.log(S),t=!0===m.checked,m.checked=!t,S.checked=!t,R()})),m.addEventListener("click",(function(){var t;e.checked?e.checked=!1:e.checked=!0,t=!0===m.checked,S.checked=t,R()})),t})),L.append.apply(L,F(X));var D=new W(".popup_type_delivery");D.setEventListeners(),h.addEventListener("click",(function(){D.open()})),f.addEventListener("click",(function(){D.open()}));var G=function(){var e=H.find((function(e){return!0===e.checked}));w.textContent=e.number,C.src=e.image,C.alt=e.number};function J(e){var t=I.cloneNode(!0),o=t.querySelector(".popup__payment-image"),n=t.querySelector(".popup__payment-text"),r=t.querySelector(".popup__radio-payment");return n.textContent=e.number,o.src=e.image,o.alt=e.number,r.checked=e.checked,r.addEventListener("change",(function(){H.forEach((function(e){e.checked=!1})),e.checked=!0,G()})),t}G(),function(){var e=H.map(J);x.append.apply(x,F(e))}();var K=new W(".popup_type_payment");K.setEventListeners(),k.addEventListener("click",(function(){K.open()})),g.addEventListener("click",(function(){K.open()})),_.addEventListener("click",(function(){_.classList.contains("basket__goods-hide_active")?(_.classList.remove("basket__goods-hide_active"),m.classList.remove("basket__goods-content_unactive"),v.classList.remove("basket__goods-choose_type_unactive"),b.classList.remove("basket__goods-summary_active")):(_.classList.add("basket__goods-hide_active"),m.classList.add("basket__goods-content_unactive"),v.classList.add("basket__goods-choose_type_unactive"),b.classList.add("basket__goods-summary_active"))})),p.addEventListener("click",(function(){p.classList.contains("basket__goods-hide_active")?(p.classList.remove("basket__goods-hide_active"),y.classList.remove("basket__goods-content_unactive")):(p.classList.add("basket__goods-hide_active"),y.classList.add("basket__goods-content_unactive"))}))})();