function fourth(inputArray){
    const countOfDays = Number(inputArray[0]);
    let allAmountOfFood = Number(inputArray[1]);
    let index = 2;

    let amountEatenFromDog = 0;
    let amountEatenFromCat = 0;
    let biscuits = 0;

    for (let day = 1; day <= countOfDays; day++) {
        // логика за изеденото от кучето
        let amountEatenFromDogThisDay = Number(inputArray[index]);
        amountEatenFromDog += amountEatenFromDogThisDay
        index++;
        // логика за изяденото от котката
        let amountEatenFromCatThisDay = Number(inputArray[index]);
        amountEatenFromCat += amountEatenFromCatThisDay;
        index++   

        if (day % 3 == 0){ // логика за бонус бисквитки на всеки трети ден
            let amountFoodEatenThisDay = amountEatenFromDogThisDay + amountEatenFromCatThisDay;
            biscuits += amountFoodEatenThisDay * 0.1; // 10% от изяденото за деня
        }
    }

    // Изход
    let amountEatenFromDogAndCat = amountEatenFromDog + amountEatenFromCat;
    let percentEatenFood = amountEatenFromDogAndCat / allAmountOfFood * 100;
    let percentEatenFoodFromDog = amountEatenFromDog / amountEatenFromDogAndCat * 100;
    let percentEatenFoodFromCat = amountEatenFromCat / amountEatenFromDogAndCat * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`)
    console.log(`${percentEatenFood.toFixed(2)}% of the food has been eaten.`)
    console.log(`${percentEatenFoodFromDog.toFixed(2)}% eaten from the dog.`)
    console.log(`${percentEatenFoodFromCat.toFixed(2)}% eaten from the cat.`)
}

fourth(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])

