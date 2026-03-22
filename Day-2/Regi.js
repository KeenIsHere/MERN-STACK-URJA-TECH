
    // document.addEventListener('DOMContentLoaded', function () {
    //     const factBtn = document.getElementById('fact-btn');
    //     const newFact = document.getElementById('new-fact');

    //     async function factOne() {
    //         factBtn.disabled = true;
    //         try {
    //             const response = await fetch('https://official-joke-api.appspot.com/random_joke');

    //             console.log('Response status:', response.status);

    //             if (!response.ok) {
    //                 throw new Error(`Request failed with status ${response.status}`);
    //             }

    //             const data = await response.json();
    //             console.log('Fetched fact:', data);
    //             newFact.textContent = `${data.type}:${data.id}: ${data.setup} ${data.punchline}`;
    //         } catch (error) {
    //             console.error('Error fetching fact:', error);
    //             newFact.textContent = 'Failed to fetch a new fact. Please try again.';
    //         } finally {
    //             factBtn.disabled = false;
    //         }
    //     }

    //     factBtn.addEventListener('click', factOne);
    //     factOne();
    // });



// let n = (5);

// n => n + 2 ;

// console.log(n)



// const momoShopName = 'Annapurna Momo House';
// const totalItems = 5;
// const pricePerItem = 80;
// const discountRate = 0.1;
 
// function printReceipt(shopName, itemCount, itemPrice, discountPercentage) {
//   const subtotal = itemCount * itemPrice;
//   const finalTotal = subtotal - (subtotal * discountPercentage);
//   console.log('Welcome to: ' + shopName);
//   console.log('Items: ' + itemCount + ' | Price each: Rs.' + itemPrice);
//   console.log('Subtotal: Rs.' + subtotal);
//   console.log('After 10% discount: Rs.' + finalTotal);
// }
// printReceipt(momoShopName, totalItems, pricePerItem, discountRate);
 
// function greetCustomer(customerName = 'Valued Customer') {
//   return 'Namaste, ' + customerName + '! Your order is ready.';
// }
// console.log(greetCustomer());
// console.log(greetCustomer('Rohan'));