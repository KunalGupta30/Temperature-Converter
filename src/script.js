@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Pattaya", sans-serif;
}

body {
    background-color: #d2d2d2;
}

.container {
    width: 450px;
    background-color: #ece6db;
    padding: 70px 40px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    box-shadow: 0 20px 25px rgba(63, 226, 71, 0.25);
    border-radius: 8px;
    font-size: 18px;
}

.input_box {
    width: 51%;
    margin-left: 95px;
    margin-bottom: 42px;
}

label {
    font-size: 30px;
    font-weight: 600;
    border: 2px dashed #e9e5e5;
    border-radius: 3px;
}

input {
    width: 100%;
    height: 50px;
    border-radius: 9px;
    border: 2px solid #d2d2d2;
    outline: none;
    margin-top: 8px;
    padding: 0 10px;
}

input:focus {
    border: 2px dashed #d2d2d2;
    background-color: #d2d2d2;
}
