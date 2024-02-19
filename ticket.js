const allBtn = document.querySelectorAll("#seat1");

let count = 0;
let seat = 40;

let selected = 0;
const apBtn = document.getElementById("apply");
apBtn.disabled = true;

for (const index of allBtn) {
  index.addEventListener("click", function (e) {
    count = count + 1;
    document.getElementById("numberof-seat").innerText = count;

    seat = seat - 1;
    document.getElementById("seat-left").innerText = seat;

    const price = document.getElementById("price").innerText;

    const text = e.target.innerText;

    const name = document.getElementById("selected");

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = text;

    const p3 = document.createElement("p");
    p3.innerText = "Economy";

    const p2 = document.createElement("p");
    p2.innerText = price;
    li.appendChild(p);
    li.appendChild(p3);
    li.appendChild(p2);
    name.appendChild(li);

    // color

    e.target.style.backgroundColor = "#1DD100";
    e.target.style.color = "white";

    selected = selected + 1;
    if (selected == 4) {
      apBtn.disabled = false;
    }

    totalCost();
    next();
  });
}

function totalCost() {
  const price = document.getElementById("price").innerText;
  const totalCost = document.getElementById("total-price").innerText;
  const totalCostNum = parseInt(totalCost);
  const total = (document.getElementById("total-price").innerText =
    totalCostNum + parseInt(price));
  //  grand total
  const grandTotal = document.getElementById("grand-total").innerText;
  const grandTotalNum = parseInt(grandTotal);
  document.getElementById("grand-total").innerText =
    totalCostNum + parseInt(price);
}

// apply button
const btn = document.getElementById("apply");
btn.addEventListener("click", function () {
  const couponElement = document.getElementById("input-field").value;
  const couponCode = couponElement.split(" ").join("").toUpperCase();

  if (couponCode === "NEW15" || couponCode === "COUPLE20") {
    //discount
    const totalCost = document.getElementById("total-price").innerText;
    const totalCostNum = parseInt(totalCost);
    const discountPrice = totalCostNum * 0.2;
    //  grand change with coupon
    const grandTotal = document.getElementById("grand-total").innerText;
    const grandTotalNum = parseInt(grandTotal);
    document.getElementById("grand-total").innerText =
      grandTotalNum - discountPrice;
    document.getElementById("input-field").value = "";
  } else {
    alert("please enter valid coupon code");
    document.getElementById("input-field").value = "";
  }
});

// const nextBtn = document.getElementById("next");
// nextBtn.disabled = true;
// let phone =document.getElementById('phone').value;
// console.log(phone);

function play() {
  const whole = document.getElementById("whole");
  whole.classList.add("hidden");
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");
  const footer = document.getElementById("foot");
  footer.classList.add("hidden");
}

function phoneValid() {
  const phoneNumber = document.getElementById("phone");
  const subButton = document.getElementById("next");
  if (!isNaN(phoneNumber.value.trim())) {
    subButton.disabled = false;
  } else {
    subButton.disabled = true;
  }
}
