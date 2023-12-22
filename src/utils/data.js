import tShort from '../images/Frame-3853-2x.jpg';
import phoneCase from '../images/Frame-277132129-2k.jpg';
import pencils from '../images/Frame-277132129k-2x.jpg';
import mir from '../images/mir.svg';
import visa from '../images/visa.svg';
import mastercard from '../images/mastercard.svg';
import maestro from '../images/maestro.svg';

export const initialCards = [
  {
    name: 'Футболка UZcotton мужская',
    color: 'Цвет: белый',
    size: 'Размер: 56',
    warehouse: 'Коледино WB',
    company: 'OOO Вайлдберриз',
    image: tShort,
    count: 1,
    limit: 2,
    price: 522,
    old_price: 1051,
    checked: true
  },
  {
    name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
    color: 'Цвет: прозрачный',
    size: '',
    warehouse: 'Коледино WB',
    company: 'OOO Мегапрофстиль',
    image: phoneCase,
    count: 200,
    price: 10500.235,
    old_price: 11500.235,
    checked: true
  },
  {
    name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
    color: '',
    size: '',
    warehouse: 'Коледино WB',
    company: 'OOO Вайлдберриз',
    image: pencils,
    count: 2,
    limit: 2,
    price: 247,
    old_price: 475,
    checked: true
  }
]

export const addresses = [
  {
    address: 'Бишкек, улица Ахматбека Суюмбаева, 12/1',
    checked: true
  },
  {
    address: 'Бишкек, улица Табышалиева, 57',
    checked: false
  },
  {
    address: 'Бишкек, улица Жукеева-Пудовкина, 77/1',
    checked: false
  },
  {
    address: 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1',
    checked: false
  }
]

export const paymentCardsArray = [
  {
    image: mir,
    number: '1234 56•• •••• 1234',
    value: 'mir',
    checked: true
  },
  {
    image: visa,
    number: '1234 56•• •••• 1234',
    value: 'visa',
    checked: false
  },
  {
    image: mastercard,
    number: '1234 56•• •••• 1234',
    value: 'mastercard',
    checked: false
  },
  {
    image: maestro,
    number: '1234 56•• •••• 1234',
    value: 'maestro',
    checked: false
  },
]
