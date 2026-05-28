const loginStep = document.getElementById('login-step');
const orderStep = document.getElementById('order-step');
const WHATSAPP_NUMBER = '0598663389'; // Replace with your WhatsApp number
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let nameInput = document.getElementById('name');
let phoneInput = document.getElementById('phone');
let addressInput = document.getElementById('address');

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

    const formData = {
        name: nameInput.value,
        phone: phoneInput.value,
        address: addressInput.value
    };

    const message =
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Address: ${formData.address}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
}
// orderStep.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const formData = {
//         name: nameInput.value,
//         phone: phoneInput.value,
//         address: addressInput.value
//     }
//     // when submit open whatsApp with the provided data
//     document.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=Name:%20${formData.name}%0APhone:%20${formData.phone}%0AAddress:%20${formData.address}`;    
// })