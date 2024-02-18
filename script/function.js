const allSeat = document.getElementsByClassName("seat")
let availabaleSeat = 40;
let selectedSeat = 0;
for (const seat of allSeat) {
    seat.addEventListener('click', function (event) {
        seat.classList.add('bg-[#1DD100]');
        seat.classList.add('text-white');
        availabaleSeat = availabaleSeat - 1;
        setInnerText('availabale-seat', availabaleSeat);
        selectedSeat = selectedSeat + 1;
        setInnerText('selected-seat-count', selectedSeat);
        // seatNumber = event.target.innerText
        // console.log(seatNumber);

        const selectedContainer = document.getElementById('selected-booked-seat')
        const li = document.createElement('li');
        const seatName = document.createElement('p');
        seatName.innerText = event.target.innerText;
        const seatClass = document.createElement('p');
        seatClass.innerText = 'economy'
        const seatFair = document.createElement('p');
        seatFair.innerText = 565;
      

        li.appendChild(seatName);
        li.appendChild(seatClass);
        li.appendChild(seatFair);

        selectedContainer.appendChild(li);

    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}