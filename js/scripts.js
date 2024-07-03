function sendOTP() {
    const phoneNumber = document.getElementById('phone-number').value;
    const phoneError = document.getElementById('phone-error');
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        phoneError.textContent = 'Please enter a valid 10-digit phone number.';
        return;
    }
    phoneError.textContent = '';
    const otp = Math.floor(100000 + Math.random() * 900000);
    alertLibrary(`Your OTP is ${otp}`);
    localStorage.setItem('otp', otp);
    document.getElementById('phone-screen').style.display = 'none';
    document.getElementById('otp-screen').style.display = 'block';
    document.querySelector('.otp-input').focus();
}
function validateOTP() {
    const otpInputs = document.querySelectorAll('.otp-input');
    let enteredOTP = '';
    otpInputs.forEach(input => enteredOTP += input.value);
    const savedOTP = localStorage.getItem('otp');
    const otpError = document.getElementById('otp-error');
    if (enteredOTP === savedOTP) {
        otpError.textContent = '';
        document.getElementById('otp-screen').style.display = 'none';
        document.getElementById('welcome-screen').style.display = 'block';
    } else {
        otpError.textContent = 'Invalid OTP. Please try again.';
    }
}

function alertLibrary(message) {
    swal({
        title: "OTP",
        text: message,
        icon: "info",
        buttons: {
            confirm: {
                text: "OK",
                value: true,
                visible: true,
                className: "custom-swal-button",
                closeModal: true
            }
        }
    });
}

const otpInputs = document.querySelectorAll('.otp-input');
otpInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });
});
