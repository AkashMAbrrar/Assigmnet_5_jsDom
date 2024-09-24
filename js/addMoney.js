console.log("hi iam from the add money files");

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

    document.getElementById("my_default_balance").innerText = reduceMoney;
    document.getElementById("existence_balance").innerText = newDonate;

    console.log(newDonate);
  });
