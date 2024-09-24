// values for input fields
function getInputFieldValueIdFlood(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFieldValueById(id) {
  const textValueFlood = document.getElementById(id).innerText;
  const textValueFloodNum = parseFloat(textValueFlood);
  return textValueFloodNum;
}

// toggle settings

function showSectionById(id) {
  document.getElementById("donation_department").classList.add("hidden");
  document.getElementById("faq_blogs").classList.add("hidden");
  document.getElementById("donation_history").classList.add("hidden");

  //   show them
  document.getElementById(id).classList.remove("hidden");
}
