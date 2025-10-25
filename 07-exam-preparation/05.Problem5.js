function five(inputArray){
    let firstPlayerEggs = Number(inputArray[0]);
    let secondPlayerEggs = Number(inputArray[1]);
    let index = 2;

    let command = inputArray[index];

    while(command !== 'End') {
        if (command === 'one'){
            secondPlayerEggs--; // втория играч губи едно айце

            if (secondPlayerEggs === 0){
                console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`)
                break;
            }
        } else if (command === 'two'){
            firstPlayerEggs--; // първия играч губи едно айце

            if (firstPlayerEggs === 0){
                console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`)
                break;
            }
        }

        index++;
        command = inputArray[index];
    }

    if (command === "End"){
        console.log(`Player one has ${firstPlayerEggs} eggs left.`);
        console.log(`Player two has ${secondPlayerEggs} eggs left.`);
    }

}

five(["2",
"6",
"one",
"two",
"two"])

