const allSeat = document.getElementsByClassName("seat")
let availabaleSeat = 40;
let selectedSeat = 0;
for (const seat of allSeat) {
    seat.addEventListener('click', function () {
        seat.classList.add('bg-[#1DD100]');
        seat.classList.add('text-white');
        availabaleSeat = availabaleSeat - 1;
        setInnerText('availabale-seat', availabaleSeat)
        selectedSeat = selectedSeat + 1;
        setInnerText('selected-seat', selectedSeat)
    })
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}