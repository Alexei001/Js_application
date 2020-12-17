
let history = [];
let inputText = document.querySelector('#input_text');
let messageDelivery = document.querySelector('#message_delivery');
let count = document.querySelector('#history_count');
let costs = document.querySelector('#history_costs');
let countValue = 0, costsValue = 0;
let messageHistory = document.querySelector('#clik_message_history');
let textHistory = document.querySelector('.text_history');



let butonSend = document.querySelector('#send_message')
    .addEventListener('click', () => {
        if (inputText.value != '') {
            messageDelivery.innerHTML = inputText.value;
            countCost();
            historyMessage(inputText.value);
            inputText.value = '';
        } else {
            alert('please enter the message')
        }
    });

function countCost() {
    countValue += 1;
    costsValue += 5;
    count.innerHTML = countValue;
    costs.innerHTML = costsValue + '$';
}

function historyMessage(text) {
    history.push(
        { id: countValue, textmessage: text }
    );
    console.log(history)
}

/* messageHistory.addEventListener('click', () => {
    let disPlay=textHistory.style.display;
    if(disPlay==''){
        disPlay='flex';
    }else{
        disPlay='';
    }
    console.log(disPlay)
}) */