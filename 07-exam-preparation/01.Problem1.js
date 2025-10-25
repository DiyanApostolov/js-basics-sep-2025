function first(strawberryPrice, bananasAmount, orangesAmount, raspberryAmount, strawberryAmount){
    
    const raspberryPrice = strawberryPrice * 0.5;
    const orangePrice = raspberryPrice * 0.6;  // -40%
    const bananaPrice = raspberryPrice * 0.2; // -80%

    const priceForAllBananas = bananaPrice * bananasAmount;
    const priceForAllOranges = orangePrice * orangesAmount;
    const priceForAllRaspberry = raspberryPrice * raspberryAmount;
    const priceForAllStrawberry = strawberryPrice * strawberryAmount;

    const finalPrice = priceForAllBananas + priceForAllOranges + priceForAllRaspberry + priceForAllStrawberry;

    console.log(finalPrice.toFixed(2))
}

first(63.5,
3.57,
6.35,
8.15,
2.5
)
