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

    if (donateMoney > myBalance || donateMoney < 0) {
      alert("failed to donate");
      return;
    } else {
      alert("Money Send Successfully");
    }
    const reduceMoney = myBalance - newDonate;

    document.getElementById("existence_balance").innerText = newDonate;
    document.getElementById("my_default_balance").innerText = reduceMoney;

    // add to history

    const date = new Date();
    const div = document.createElement("div");
    div.classList.add("bg-gray-200");
    div.innerHTML = `
     <h2 class="text-2xl ">Donated for sylet:${donateMoney}.tk New Donated Balance:${newDonate}</h2>
     <p class="font-bold">Date:${date}</p>
    `;

    // p.innerText = `
    //    Donated for flood at sylet:${donateMoney}Tk. New Donate Balance: ${newDonate} Date: ${date}
    // `;

    document.getElementById("transaction_container").appendChild(div);
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
    if (donateMoney2 > myBalance || donateMoney2 < 0) {
      alert("Failed to donate money");
      return;
    } else if (isNaN(donateMoney2)) {
      alert("donation failed");
    }
    const reduceMoney = myBalance - newDonate2;
    document.getElementById("my_default_balance").innerText = reduceMoney;

    document.getElementById("existence_balance2").innerText = newDonate2;

    // add to history
    const date = new Date();
    const section = document.createElement("section");
    console.log(section);
    section.classList.add("bg-gray-200");
    section.innerHTML = `
     <h2 class="text-2xl ">Donated for Rangpur:${donateMoney2}.tk New Donated Balance:${newDonate2}</h2>
     <p class="font-bold">Date:${date}</p>
    `;
    document.getElementById("transaction_container").appendChild(section);
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

    if (donateMoney3 > myBalance || donateMoney3 < 0) {
      alert("Failed to donate money");
      return;
    } else if (isNaN(donateMoney3)) {
      alert("donation failed");
    }
    const reduceMoney = myBalance - newDonate3;
    document.getElementById("my_default_balance").innerText = reduceMoney;

    document.getElementById("existence_balance3").innerText = newDonate3;

    // add to history
    const date = new Date();
    const section = document.createElement("section");
    console.log(section);
    section.classList.add("bg-gray-200");
    section.innerHTML = `
     <h2 class="text-2xl ">Donated for Quota:${donateMoney3}.tk New Donated Balance:${newDonate3}</h2>
     <p class="font-bold">Date:${date}</p>
    `;
    document.getElementById("transaction_container").appendChild(section);
    console.log("Hi iam clicked you from quota movement");
  });
