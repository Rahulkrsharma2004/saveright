# saveright
## Project Description

This project is a simple OTP (One Time Password) validation system. It allows users to enter their phone number, receive a six-digit OTP, and validate the OTP through a user-friendly interface. The project uses HTML, CSS, JavaScript, and external libraries like Milligram for UI styling and SweetAlert for better alert dialogs.

## Folder Structure
    saveright/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── scripts.js
    ├── index.html


## Images
![Capture](https://github.com/Rahulkrsharma2004/saveright/assets/139108196/9bb6ec65-e721-4713-9ae0-4eb4f4749345)
![Capture11](https://github.com/Rahulkrsharma2004/saveright/assets/139108196/2f0b9cba-047b-4f5e-8795-6372d7b40c5c)
![Capturesss](https://github.com/Rahulkrsharma2004/saveright/assets/139108196/559d3985-8fe5-493f-9042-f92caf5d3c39)
![Capturedf](https://github.com/Rahulkrsharma2004/saveright/assets/139108196/51535a7b-0239-4b99-a9d8-be42bdb9905c)

## How to Run the Project

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Rahulkrsharma2004/saveright
    ```

2. **Open `index.html` in your browser**:
    - You can directly open the `index.html` file in any web browser to view the project.

## Features

- **Phone Number Validation**: Ensures the entered phone number is a valid 10-digit number.
- **OTP Generation and Validation**: Generates a random six-digit OTP and validates it.
- **Responsive UI**: Ensures the UI is responsive and looks good on smaller screens.
- **Custom Alerts**: Uses SweetAlert for better alert dialogs instead of the default browser alerts.
- **Automatic Input Focus**: Automatically moves to the next OTP input field as the user types.

## Dependencies

- **Milligram**: A minimalist CSS framework for styling the UI.
- **SweetAlert**: A library for creating beautiful, responsive, customizable alert dialogs.

## Project Details

### HTML (index.html)

The main HTML file contains the structure of the phone number input screen, OTP input screen, and a welcome screen. It includes external links to the Milligram CSS framework and SweetAlert library.

### CSS (css/styles.css)

The CSS file includes styles to ensure the UI is clean and responsive. It customizes the appearance of the OTP input fields and SweetAlert buttons.

### JavaScript (js/scripts.js)

The JavaScript file handles the logic for:
- Sending the OTP.
- Validating the OTP.
- Navigating between different screens.
- Styling the SweetAlert "OK" button.

