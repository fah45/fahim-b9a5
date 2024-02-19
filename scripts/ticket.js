// alert('ami Fahim')
let count = 0;
let totalPrice = 0;

const buttons = document.getElementsByClassName('seats');
// console.log(buttons) 

for(const button of buttons){
    // console.log(button.innerText)
    button.addEventListener('click', function(){
        if(count >= 4){
            alert('You Can Not Select More')
            return;
        }
        button.style.backgroundColor = "#1DD100"
        button.style.color = "white"
        button.disable = true;
        button.setAttribute('disabled','disabled')
        console.log(button.innerText)
        count++;

        const divContainer1 = document.getElementById('p1')
        const divContainer2 = document.getElementById('p2')
        const divContainer3 = document.getElementById('p3')

        const p1 = document.createElement('p');
        p1.innerText = button.innerText;
        const p2 = document.createElement('p');
        p2.innerText = 'Economy Class'
        const p3 = document.createElement('p');
        p3.innerText = '550';

        divContainer1.appendChild(p1)
        divContainer2.appendChild(p2)
        divContainer3.appendChild(p3)

        const targetField1 = document.getElementById('total-seat');
        targetField1.innerText = count;
        const targetField2 = document.getElementById('seat-remain');
        const availableSeats = parseInt(targetField2.innerText)
        // console.log(availableSeats)
        targetField2.innerText = availableSeats -1 ;
        const totalPriceFiled = document.getElementById('total');
        console.log(parseInt(totalPriceFiled.innerText))
        const totalPriceFieldValue = parseInt(totalPriceFiled.innerText)
        totalPrice = totalPrice + parseInt(document.getElementById('unit-price').innerText)
        totalPriceFiled.innerText = totalPrice;
        const granTotalPriceFiled = document.getElementById('grand-total');
        granTotalPriceFiled.innerText = totalPrice;


        // console.log(totalPrice)

        // console.log(targetField1)
    })
    
}
const applyButton = document.getElementById('apply-btn')
applyButton.addEventListener('click', function(){
    const inputField = document.getElementById('input-text-field') 
    const inputFieldText = inputField.value.toUpperCase()
    const couponText1 = document.getElementById('couponCode1').innerText.toUpperCase();
    console.log(couponText1);
    const couponText2 = document.getElementById('couponCode2').innerText.toUpperCase();
    console.log(couponText2);
    if(inputFieldText === couponText1){
        // console.log('first')
        const currentGranTotalPrice = parseInt(document.getElementById('grand-total').innerText);
        console.log(currentGranTotalPrice)
        const discountPrice = parseInt(currentGranTotalPrice * 0.15);
        console.log( discountPrice )
        const updatedGrandTotal = currentGranTotalPrice - discountPrice;
        console.log( updatedGrandTotal)
        document.getElementById('grand-total').innerText = updatedGrandTotal;
        document.getElementById('apply-btn').classList.add('hidden')
        document.getElementById('input-text-field').classList.add('hidden')


    }
    if(inputFieldText === couponText2){
        console.log('second')
        const currentGranTotalPrice = parseInt(document.getElementById('grand-total').innerText);
        console.log(currentGranTotalPrice)
        const discountPrice = parseInt(currentGranTotalPrice * 0.2);
        console.log( discountPrice )
        const updatedGrandTotal = currentGranTotalPrice - discountPrice;
        console.log( updatedGrandTotal)
        document.getElementById('grand-total').innerText = updatedGrandTotal;
        document.getElementById('apply-btn').classList.add('hidden')
        document.getElementById('input-text-field').classList.add('hidden')
    }
    if(inputFieldText !== couponText1 && inputFieldText !== couponText2 ){
        alert('Please Enter a Valid Coupon')
    }
})