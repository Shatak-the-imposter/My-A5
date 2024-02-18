const allSeat = document.getElementsByClassName("seat")
let availabaleSeat = 40;
let selectedSeat = 0;
let totalPrice = 0;

for (const seat of allSeat) {
    seat.addEventListener('click', function (event) {
        if (selectedSeat < 4) {
            availabaleSeat = availabaleSeat - 1;
            setInnerText('availabale-seat', availabaleSeat);
            selectedSeat = selectedSeat + 1;
            setInnerText('selected-seat-count', selectedSeat);
            seat.classList.add('bg-[#1DD100]');
            seat.classList.add('text-white');
        }
        else{
            selectedContainer.classList.remove(li);
            const maxWarning = document.getElementById('max-warning');

        }
  



        const selectedContainer = document.getElementById('selected-booked-seat')
        const li = document.createElement('li');
        const seatName = document.createElement('p');
        seatName.innerText = event.target.innerText;
        const seatClass = document.createElement('p');
        seatClass.innerText = 'economy'
        const seatFair = document.createElement('p');
        seatFair.innerText = 550;


        li.appendChild(seatName);
        li.appendChild(seatClass);
        li.appendChild(seatFair);
        selectedContainer.appendChild(li);

        totalPrice = parseInt(totalPrice) + parseInt(seatFair.innerText);
        setInnerText('total-price', totalPrice)
        return totalPrice;

    })
}

function applyCoupon() {
    let grandTotal = 0;
    let appliedCoupon = document.getElementById('applied-coupon');
    let appliedCouponText = appliedCoupon.value;
    if (appliedCouponText === 'Couple 20') {
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



function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}