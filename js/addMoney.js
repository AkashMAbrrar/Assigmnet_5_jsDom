//  donation flood at sylet-1
document
  .getElementById("btn_flood_donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateMoney = getInputFieldValueIdFlood("flood_input_field");
    if (isNaN(donateMoney)) {
      alert("Failed to donate money");
      return;
    }
    const myBalance = getTextFieldValueById("my_default_balance");
    const amount = getTextFieldValueById("existence_balance");
    const newDonate = amount + donateMoney;

    if (donateMoney > myBalance) {
      alert("donation failed");
      return;
    }
    const reduceMoney = myBalance - newDonate;

    document.getElementById("existence_balance").innerText = newDonate;
    document.getElementById("my_default_balance").innerText = reduceMoney;

    console.log(newDonate);
  });

// donation for Rangpur
document
  .getElementById("btn_flood_donate2")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateMoney2 = getInputFieldValueIdFlood("flood_input_field2");
    const myBalance = getTextFieldValueById("my_default_balance");
    const amount2 = getTextFieldValueById("existence_balance2");
    const newDonate2 = amount2 + donateMoney2;

    if (donateMoney2 > myBalance) {
      alert("Failed to donate money");
      return;
    }
    const reduceMoney = myBalance - newDonate2;
    document.getElementById("my_default_balance").innerText = reduceMoney;

    document.getElementById("existence_balance2").innerText = newDonate2;
  });

//   donation for quota movement for Bangladesh

document
  .getElementById("btn_quota_donate3")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateMoney3 = getInputFieldValueIdFlood("quota_input_field3");
    const myBalance = getTextFieldValueById("my_default_balance");
    const amount2 = getTextFieldValueById("existence_balance3");
    const newDonate3 = amount2 + donateMoney3;

    if (donateMoney3 > myBalance) {
      alert("Failed to donate money");
      return;
    }
    const reduceMoney = myBalance - newDonate3;
    document.getElementById("my_default_balance").innerText = reduceMoney;

    document.getElementById("existence_balance3").innerText = newDonate3;
    console.log("Hi iam clicked you from quota movement");
  });
