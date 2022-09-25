const qrImg = document.querySelector(".qr-link");
const qrInput = document.querySelector(".qr-input");
const submitBtn = document.querySelector(".btn");

submitBtn.addEventListener("click", function () {
  const qrValue = qrInput.value;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
});
