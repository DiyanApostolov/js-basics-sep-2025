function six (num1, num2){

    let start = String(num1); // подсигуряваме си, че входните числа ще ти прочетем като текст!
    let end = String(num2); // подсигуряваме си, че входните числа ще ти прочетем като текст!

    let firstDigitStart = Number(start[0]); // достъпваме всяка една цира по индекс [] в текста 
    let secondDigitStart = Number(start[1]);
    let thirdDigitStart = Number(start[2]);
    let fourthDigitStart = Number(start[3]);

    let firstDigitEnd = Number(end[0]);
    let secondDigitEnd = Number(end[1])
    let thirdDigitEnd = Number(end[2])
    let fourthDigitEnd = Number(end[3])

    let outputNumbers = '';

    for (let i = firstDigitStart; i <= firstDigitEnd; i++) {
       for (let j = secondDigitStart; j <= secondDigitEnd; j++) {
         for (let k = thirdDigitStart; k <= thirdDigitEnd; k++) {
            for (let l = fourthDigitStart; l <= fourthDigitEnd; l++) {

                if(i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0){
                    outputNumbers += `${i}${j}${k}${l} `
                }                
            }     
         }      
       }       
    }

    console.log(outputNumbers)
}

six('3256', '6579')