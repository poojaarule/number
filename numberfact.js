let userInputEl = document.getElementById("userInput");
let factl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");




function getFactOfEnteredNumber(event) {
    let userInputEl = document.getElementById("userInput");
let factl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

    if (event.key === "Enter") {
        let userInputVal = userInputEl.value;

        if (userInputVal === "") {
            alert('Enter a Number');
            return;
        }

        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputVal;
        let options = {
            method: "GET"
        };

        spinnerEl.classList.remove("d-none");
        factl.classList.add("d-none");

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                factl.classList.remove("d-none");
                spinnerEl.classList.add("d-none");

                let {
                    fact
                } = jsonData;
                factl.textContent = fact;
            });

    }
}

userInputEl.addEventListener("keyup", getFactOfEnteredNumber);