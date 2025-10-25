function third(budget, destination, season, countOfDays){
    let priceForOneDayFilming = 0;

    if (season === 'Winter'){
        switch(destination){
            case 'Dubai': priceForOneDayFilming = 45000 * 0.7; break; // -30%
            case 'Sofia': priceForOneDayFilming = 17000 * 1.25; break; // +25%
            case 'London': priceForOneDayFilming = 24000; break;
        }
    } else if (season === 'Summer') {
        switch(destination){
            case 'Dubai': priceForOneDayFilming = 40000 * 0.7; break; // -30%
            case 'Sofia': priceForOneDayFilming = 12500 * 1.25; break; // +25%
            case 'London': priceForOneDayFilming = 20250; break;
        }
    }

    const finalPrice = countOfDays * priceForOneDayFilming;

    let difference = Math.abs(budget - finalPrice) // не едно място изчислявам колк пари остават или не стигат

    if (Number(budget) >= finalPrice){
        console.log(`The budget for the movie is enough! We have ${difference.toFixed(2)} leva left!`)
    } else {
        console.log(`The director needs ${difference.toFixed(2)} leva more!`)
    }
}

third(1000000,
'Dubai',
'Summer',
5

)