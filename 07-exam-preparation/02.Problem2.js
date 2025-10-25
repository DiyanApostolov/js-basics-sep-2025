function second(budget, countOfNights, priceForOneNight, percentAdditionalExpenses){

    if (countOfNights > 7){
        priceForOneNight *= 0.95; // -5%
    }

    const priceForAllNights = countOfNights * priceForOneNight;
    const additionalExpenses = budget * percentAdditionalExpenses / 100;
    const finalPrice = priceForAllNights + additionalExpenses;

    if (budget >= finalPrice){
        const moneyLeft = budget - finalPrice;
        console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`)
    } else {
        const moneyNeeded = finalPrice - budget;
        console.log(`${moneyNeeded.toFixed(2)} leva needed.`)
    }

}

second(500,
7,
66,
15
)