// seat list and ticket section
let seatList = 0;
const classType = 'eco';
const ticketPrice = 550;
let couponOne = "NEW15";
let couponTwo = 'Couple 20';

function select(id){

    if(!seatList.includes(id)){
        let total = getElementById('total-seat');
        let totalNumber = getValue(total);
        totalNumber = totalNumber + 1;

        if(totalNumber<=4){
            seatList.push(id);

            let selectedSit = getElementById(id);
            selectedSit.classList.remove('bg-gray-100');
            selectedSit.classList.add('bg-[#1DD100]');
            selectedSit.classList.add('text-white');

            let tableOfTransaction = getElementById('transaction-list');
            let k1 = createP(id);
            let k2 = createP(classType);
            let k3 = createP(ticketPrice);
            tableOfTransaction.append(k1);
            tableOfTransaction.append(k2);
            tableOfTransaction.append(k3);

            let totalPrice = getElementById('total');
            let totalValue = getValue(totalPrice);
            totalValue = totalValue + ticketPrice;
            totalPrice.innerText = totalValue;

            let remain = getElementById('seat-remain');
            let remainNumber = getValue(remain);
            remainNumber = remainNumber-1;

            total.innerText = totalNumber;
            remain.innerText = remainNumber;


        }
        else{
            alert("You Cannot Buy More than 4 tickets");
        }
    }else{
        alert("Seat Already Selected");
    }

}