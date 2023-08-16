const allButton = document.getElementsByClassName("box-btn");
let total = 0;
function getbtn(data) {
  const flowerName = data.parentNode.childNodes[1].innerText;
  const selectedBox = document.getElementById("selected-box");
  const createLi = document.createElement("li");
  createLi.innerText = flowerName;
  selectedBox.appendChild(createLi);
  const itemPrice = data.parentNode.childNodes[5].innerText.split(" ")[1];
  total = parseInt(total) + parseInt(itemPrice);
  console.log(total);
  setInnerText("total", total);
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function applyCoupon() {
  const couponCode = document.getElementById("coupon-code").value;
  if (couponCode == "hero") {
    const discountedAmount = total * 0.2;
    const grandTotal = total - discountedAmount;
    setInnerText("discount", discountedAmount);
    setInnerText("grand-total", grandTotal);
  } else {
    alert("invalid coupon try again");
  }
}
