'use strict';

const shipingChrarget = 10;
const shipingLabel = 10;
const currentResult = document.querySelector('.calculate__increase-result');
currentResult.innerText = `$ ${0}`;

console.dir(currentResult);

const form = document.querySelector('#form');
const returnVolume = document.querySelector('#returnVolume');
const numberOfReturns = document.querySelector('#numberOfReturns');
const shipping = document.querySelector('#shipping');
const returns = document.querySelector('#returns');

numberOfReturns.addEventListener('input', (e) => {
    const target = e.target;

    returnVolume.innerText = target.value;
    returnVolume.style.left = +target.value * 100 / 25000 - 2 + '%';

    if (target.value < 1000) {
        returnVolume.style.left = +target.value * 100 / 25000 - 2 + '%';
    }

    if (target.value > 1000 && target.value < 5000) {
        returnVolume.style.left = +target.value * 100 / 25000 - 3 + '%';
    }

    if (target.value > 5000 && target.value < 10000) {
        returnVolume.style.left = +target.value * 100 / 25000 - 4 + '%';
    }

    if (target.value > 10000) {
        returnVolume.style.left = +target.value * 100 / 25000 - 7 + '%';
    }
})

const averageVolume = document.querySelector('#averageVolume');
const average = document.querySelector('#average');

average.addEventListener('input', (e) => {
    const target = e.target;

    averageVolume.innerText = target.value;
    averageVolume.style.left = +target.value * 100 / 300 - 3 + '%';

    if (target.value > 100) {
        averageVolume.style.left = +target.value * 100 / 300 - 5 + '%';
    }
})

form.addEventListener('click', (eventObj) => {
    eventObj.preventDefault();

    const target = eventObj.target.closest('button');

    if (!target) {
        return;
    }

    const originalPrice = average.value;
    const salePrice = originalPrice * 0.9;
    const discountNeeded = originalPrice - salePrice;
    let returnLabelCost = 0;
    let outboundLabelCost = 0;

    if (returns.value === 'yes') {
        returnLabelCost = 10;
    }

    if (shipping.value === 'yes') {
        outboundLabelCost = 10;
    }

    const otherReturnCosts = 7 + (0.15 * originalPrice);
    const ecoBoxRevenue = shipingChrarget + salePrice - shipingLabel;
    const statusQuoRevenue = originalPrice - (returnLabelCost + outboundLabelCost + otherReturnCosts);
    const difference = ecoBoxRevenue - statusQuoRevenue;

    const result = numberOfReturns.value * difference * 0.4;
    const formatResult = new Intl.NumberFormat('ru-RU').format(result)

    currentResult.innerText = `$ ${formatResult}`;

    console.log(formatResult);
})