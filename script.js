function generateBoxes() {
    let age = parseInt(document.getElementById("age").value);
    let lifeExpectancy = parseInt(document.getElementById("lifeExpectancy").value);
    let grid = document.getElementById("lifeGrid");

    if (isNaN(age) || isNaN(lifeExpectancy) || age < 0 || lifeExpectancy <= age) {
        alert("Please enter valid age and life expectancy.");
        return;
    }

    grid.innerHTML = "";  // Clear previous grid
    let totalYears = lifeExpectancy;
    
    for (let i = 0; i < totalYears; i++) {
        let box = document.createElement("div");
        box.classList.add("box");

        if (i < age) {
            box.classList.add("lived"); // Green for lived years
        } else {
            box.classList.add("remaining"); // Grey for remaining years
        }
        
        grid.appendChild(box);
    }
}
