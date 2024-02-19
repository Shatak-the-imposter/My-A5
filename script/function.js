const allSeat = document.getElementsByClassName("seat")
let availabaleSeat = 40;
let selectedSeat = 0;
let totalPrice = 0;

for (const seat of allSeat) {
    seat.addEventListener('click', function (event) {

        if (selectedSeat < 4 ) {
            availabaleSeat = availabaleSeat - 1;
            setInnerText('availabale-seat', availabaleSeat);
            selectedSeat = selectedSeat + 1;
            setInnerText('selected-seat-count', selectedSeat);
            seat.classList.add('bg-[#1DD100]');
            seat.classList.add('text-white');
        }

        else {
            selectedContainer.classList.remove(li);

        }

        // dom and creat cart list
        const selectedContainer = document.getElementById('selected-booked-seat')
        const li = document.createElement('li');
        const seatName = document.createElement('p');
        seatName.innerText = event.target.innerText;
        const seatClass = document.createElement('p');
        seatClass.innerText = 'economy'
        const seatFair = document.createElement('p');
        seatFair.innerText = 550;

        // add to shopping cart
        li.appendChild(seatName);
        li.appendChild(seatClass);
        li.appendChild(seatFair);
        selectedContainer.appendChild(li);


        const arrayOfCartList = [];
        arrayOfCartList.push = seatName;
        console.log(arrayOfCartList)
        console.log(typeof arrayOfCartList)

        if (arrayOfCartList.hasOwnProperty(seatName)) {
            console.log('asi re vai asi')
        }


        totalPrice = parseFloat(totalPrice) + parseFloat(seatFair.innerText);
        setInnerText('total-price', totalPrice)
        if (totalPrice === 2200) {
            document.getElementById('coupon-container').classList.remove('hidden')
            document.getElementById('grand-total-container').classList.remove('hidden')
            document.getElementById('grand-total-container').setAttribute('hidden')
        }
        return totalPrice;

    })
}


// grand total

function applyCoupon() {
    let grandTotal = 0;
    let appliedCoupon = document.getElementById('applied-coupon');
    let appliedCouponText = appliedCoupon.value;
    if (appliedCouponText === 'Couple 20') {
        document.getElementById('apply-btn').removeAttribute('disabled', true)
        grandTotal = grandTotal + totalPrice - (totalPrice * 0.2);
        setInnerText('grand-total', grandTotal)
        const couponContainer = document.getElementById('coupon-container');
        couponContainer.classList.add('hidden')

    }
    else if (appliedCouponText === 'NEW15') {
        grandTotal = grandTotal + totalPrice - (totalPrice * 0.15);
        setInnerText('grand-total', grandTotal);
        const couponContainer = document.getElementById('coupon-container');
        couponContainer.classList.add('hidden')

    }
    else {
        const wrongCoupon = document.getElementById('wrong-coupon');
        wrongCoupon.classList.remove('hidden')
    }

}

// form button active 
const allInputValue = document.getElementsByClassName('input-value')
for (inputValue of allInputValue) {
    inputValue.addEventListener('keyup', function () {
        document.getElementById('submit-btn').classList.remove('hidden')
    })
}






function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}


