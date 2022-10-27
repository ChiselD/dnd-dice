const testDie = document.querySelector("#test-die");
let nameOfDie = document.getElementById("what-kind").value;
let numberOfSides = 4;


// function to update the kind of die you're using
function setWhatKind() {
    displayResult();
    let selector = document.getElementById("what-kind");
    let val = selector.options[selector.selectedIndex].value;
    let sideNumber = val.slice(1) * 1;
    numberOfSides = sideNumber;
    return sideNumber;
}

// function to generate the random number rolled
function rollDie() {
    let dieNumber = (Math.floor(Math.random() * numberOfSides) + 1);
    return dieNumber;
}

// function to show the result of your roll on the screen
function displayResult() {
    let result = rollDie();
    document.getElementById("die-content").innerHTML = "...";
    function showNumber() {
        document.getElementById("die-content").innerHTML = result;
    }
    // to do: use sth better than .innerHTML
    setTimeout(showNumber, 500);
    document.getElementById("die-content").style.padding = "38% 0"; 
}

testDie.addEventListener("click", displayResult);