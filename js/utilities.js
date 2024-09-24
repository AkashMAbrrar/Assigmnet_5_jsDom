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
