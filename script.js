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
const result = document.getElementsByName('result');
console.log(result);
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    let model = "";
    let fuel = "";
    let engineVolume = "";
    let state = "";
    let owner = "";
    let typeOfPayment = "";
    let result = "";
    if (model.value === 'Reno') {
    result.innerHTML = 
    `<div class="car">Модель: ${model.value}</div>
    <div class="engine">Тип двигателя: ${fuel.value}</div>
    <div class="volume">Объем двигателя: ${engineVolume.value}</div>
    <div class="newold">Состояние: ${state.value}</div>
    <div class="owners">Кол-во владельцев: ${owner.value}</div>
    <div class="payment">Тип оплаты: ${typeOfPayment.value}</div>
    <div class="price">Цена:</div>`
    ;}
})


