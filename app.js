const loginStep = document.getElementById('login-step');
const orderStep = document.getElementById('order-step');

function handleNextStep(event) {
    event.preventDefault();
    loginStep.classList.add('hidden');
    orderStep.classList.remove('hidden');
}

function handleBackStep() {
    orderStep.classList.add('hidden');
    loginStep.classList.remove('hidden');
}

function handleFinalOrder(event) {
    event.preventDefault();
    alert("Order Received! We will call you shortly to arrange delivery.");
}
