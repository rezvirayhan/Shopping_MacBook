// Start Memory Section

document.getElementById('frist-Memorybutton').addEventListener('click', function(){
    const memoryFrist = document.getElementById('memory-const');
    const fristMemoryCost = 0;
    memoryFrist.innerText = fristMemoryCost;

    totalPrice()
    
})
document.getElementById('second-Memorybutton').addEventListener('click', function(){
   const memoryFrist = document.getElementById('memory-const');
    const firstMemoriCost = 180;
   memoryFrist.innerText = firstMemoriCost;

   totalPrice()

})

// Start Storage Section

document.getElementById('fristBtn-storage').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    const storageNewCost = 0;
    storageCost.innerText =storageNewCost;

    totalPrice()
})
document.getElementById('secondBtn-storage').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    const storageNewCost = 100;
    storageCost.innerText =storageNewCost;

    totalPrice()
})
document.getElementById('thirdBtn-storage').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    const storageNewCost = 180;
    storageCost.innerText =storageNewCost;

    totalPrice()
})

// Start Delivery Charge

document.getElementById('Free-Delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('charge');
    const delivery = 0;
    deliveryCharge.innerText = delivery;
    
    totalPrice()
})
document.getElementById('Charge-Delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('charge');
    const delivery = 20;
    deliveryCharge.innerText = delivery;

    totalPrice()
})


// Stat Main Function

function totalPrice(){
    // Best Price
    const bestprice = document.getElementById('Best-price');
    const bestPriceText = parseInt(bestprice.innerText);

    // Memory Price
    const memory = document.getElementById('memory-const');
    const memoryText = parseInt(memory.innerText);

    // Storage Price

    const storage = document.getElementById('storage-cost');
    const stoorageText = parseInt(storage.innerText);

    // Delivery Amount

    const delivery = document.getElementById('charge');
    const deliveryText = parseInt(delivery.innerText);

    // Total Amount

    const totalAmount = document.getElementById('total-Price');
    const price = bestPriceText + memoryText + + stoorageText + deliveryText;
    totalAmount.innerText = price;

    const mainPrice = document.getElementById('Toatal-Amunt');
    mainPrice.innerText = price;

}
// Promo Code

function discound() {
    const promoInput = document.getElementById('Promo-input');
    const totalAmount = document.getElementById('total-Price').innerText;
    const mainAmount = document.getElementById('Toatal-Amunt');
    if(promoInput.value == 'stevekaku'){
        const a = totalAmount * 0.2;
        mainAmount.innerText = totalAmount - a
    }
    promoInput.value = '';
}
