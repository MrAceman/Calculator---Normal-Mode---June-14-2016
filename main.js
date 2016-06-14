var calcButton = document.querySelector("#calculate-button");
 calcButton.addEventListener('click', function (event) {
 event.preventDefault();
 var val1 = document.querySelector("#value-one");
 var val2 = document.querySelector("#value-two");
 answer.textContent = Number(val1.value)+ Number(val2.value);
});
