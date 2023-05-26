const model = document.getElementById('model');
console.log(model);
const fuel = document.getElementsByName('fuel');
console.log(fuel);
const engineVolume = document.getElementById('enginevolume');
console.log(engineVolume);
const state = document.getElementsByName('state');
console.log(state);
const owner = document.getElementsByName('owner');
console.log(owner);
const typeOfPayment = document.getElementsByName('typeofpayment');
console.log(typeOfPayment);
const result = document.getElementById('result');
console.log(result);
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    let selectedModel = model.value;
	let selectedFuel = "";
	let selectedEngineVolume = engineVolume.value;
	let selectedState = "";
	let selectedOwner = "";
	let selectedTypeOfPayment = "";

// let result = "";
// Получение выбранного топлива
for (const fuelOption of fuel) {
	if (fuelOption.checked) {
		selectedFuel = fuelOption.value;
		break;
	}
}
// Получение выбранного состояния
for (const stateOption of state) {
    if (stateOption.checked) {
		selectedState = stateOption.value;
		break;
    }
}
// Получение выбранного количества владельцев
for (const ownerOption of owner) {
	if (ownerOption.checked) {
        selectedOwner = ownerOption.value;
        break;
}
// Получение выбранного типа оплаты
for (const paymentOption of typeOfPayment) {
	if (paymentOption.checked) {
		selectedTypeOfPayment = paymentOption.value;
		break;
		}
	}
}
	// Расчет цены в зависимости от выбранных параметров
	let price = calculatePrice(
		selectedModel,
		selectedFuel,
		selectedEngineVolume,
		selectedState,
		selectedOwner,
		selectedTypeOfPayment
	);
result.innerHTML = `
	<div class="car">Модель: ${selectedModel}</div>
	<div class="engine">Тип двигателя: ${selectedFuel}</div>
	<div class="volume">Объем двигателя: ${selectedEngineVolume}</div>
	<div class="newold">Состояние: ${selectedState}</div>
	<div class="owners">Кол-во владельцев: ${selectedOwner}</div>
	<div class="payment">Тип оплаты: ${selectedTypeOfPayment}</div>
	<div class="price">Цена: </div>
	`;
});
// Функция для расчета цены автомобиля
const calculatePrice = () => {
	// Твой код
    selectedFuel + selectedEngineVolume + selectedState + selectedOwner + selectedTypeOfPayment;
let basePrice = 0;
// Расчет базовой цены в зависимости от выбранной модели
switch (model) {
	case "Reno":
		basePrice = 10000;
		break;
	case "Opel":
        basePrice = 20000;
        break;
    case "Mazda":
        basePrice = 35000;
        break;
    case "Jaguar":
        basePrice = 50000;
        break
}
// Учет типа топлива
switch (fuel) {
	case "Бензин":
		basePrice += 1000;
		break;
    case "Дизель":
        basePrice += 500;
        break;
    case "Газ":
		basePrice += 700;
		break;
    case "Электричество":
		basePrice += 1500;
		break;
}
// Учет объема двигателя
if (engineVolume >= 1.1 && engineVolume <= 2.0) {
//Твой код отнимаешь или прибавляешь цену к переменной basePrice и так везде ниже
    basePrice + 100;
} else if (engineVolume > 2.0 && engineVolume <= 3.5) {
//Твой код
    basePrice + 300;
}
// Учет состояния автомобиля
if (state === "Подержанный") {
//Твой код
    basePrice - 500;
}
// Учет количества владельцев
if (owner === "1-2 владельца") {
	//Твой код
    basePrice - 100;
} else if (owner === "Более 3-х владельцев") {
	basePrice - 500;//Твой код
}
// Учет типа оплаты
switch (typeOfPayment) {
	case "Картой":
		//Твой код
		break;
	case "Наличными":
		//Твой код
		break;
	case "Счет на юридическое лицо":
		//Твой код
		break;
	}
	return basePrice;
};

//     if (model.value === 'Reno') {
//     result.innerHTML = 
//     `<div class="car">Модель: ${model.value}</div>
//     <div class="engine">Тип двигателя: ${fuel.value}</div>
//     <div class="volume">Объем двигателя: ${engineVolume.value}</div>
//     <div class="newold">Состояние: ${state.value}</div>
//     <div class="owners">Кол-во владельцев: ${owner.value}</div>
//     <div class="payment">Тип оплаты: ${typeOfPayment.value}</div>
//     <div class="price">Цена:</div>`
//     ;}
// })


