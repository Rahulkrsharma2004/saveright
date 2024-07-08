async function sendOTP() {
  const phoneNumber = document.getElementById("phone-number").value;
  const phoneError = document.getElementById("phone-error");

  if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
    phoneError.textContent = "Please enter a valid 10-digit phone number.";
    return;
  }

  phoneError.textContent = "";

  async function callApi() {
    try {
      let res = await fetch(`https://saveright.in/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phoneNumber,
          isdCode: "+91",
        }),
      });
      // console.log(res,"line24")

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      let data = await res.json();
      // console.log(data,"line31")
      return data;
    } catch (error) {
      console.error("Error during API call:", error);
      phoneError.textContent = "Failed to send OTP. Please try again.";
      return null;
    }
  }

  const res = await callApi();

  if (res && res.userId) {
    localStorage.setItem("userId", res.userId);
    document.getElementById("phone-screen").style.display = "none";
    alert("Otp send Successfully");
    document.getElementById("otp-screen").style.display = "block";
    document.querySelector(".otp-input").focus();
  } else {
    phoneError.textContent = "Failed to send OTP. Please try again.";
  }
}

async function validateOTP() {
  const otpInputs = document.querySelectorAll(".otp-input");
  let enteredOTP = "";
  otpInputs.forEach((input) => (enteredOTP += input.value));
  const userId = localStorage.getItem("userId");
  const otpError = document.getElementById("otp-error");

  if (!userId) {
    otpError.textContent = "User ID not found. Please request OTP again.";
    return;
  }

  async function callVerifyApi() {
    try {
      let response = await fetch(`https://saveright.in/auth/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          otp: enteredOTP,
        }),
      });
      // console.log(response,"line76")

      if (!response.ok) {
        let errorData = await response.json();
        console.error("Error response data:", errorData);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // console.log(response,"line81")

      let data = await response.json();
      // console.log(data,"line84")
      return data;
    } catch (error) {
      console.error("Error during API call:", error);
      otpError.textContent = "Failed to verify OTP. Please try again.";
      return null;
    }
  }

  const res = await callVerifyApi();
  // console.log(res,"line96")
  if (res && res.token) {
    otpError.textContent = "";
    document.getElementById("otp-screen").style.display = "none";
    alert("Logged in successfully");
    document.getElementById("welcome-screen").style.display = "block";
  } else {
    otpError.textContent = "Invalid OTP. Please try again.";
  }
}

const otpInputs = document.querySelectorAll(".otp-input");
otpInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });
  input.style.border = '2px solid #ababab';

  input.addEventListener('focus', () => {
      input.style.border = '2px solid purple';
  });

  input.addEventListener('blur', () => {
      input.style.border = '2px solid #ababab';
  });

});
