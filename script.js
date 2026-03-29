// Change the colors of the Surfing heading
function colorGrey() {
    let heading = document.getElementById("heading");
    heading.style.color = "#bfbfbf";
}

function colorWhite() {
    let heading = document.getElementById("heading");
    heading.style.color = "#fff";
}

// Move the Surfing box
function moveRight() {
    let surfing = document.getElementById("surfing-wrapper");
    surfing.style.top = "0px";
    surfing.style.left = "500px";
}

function moveLeft() {
    let surfing = document.getElementById("surfing-wrapper");
    surfing.style.top = "0px";
    surfing.style.left = "0px";
}

// Handle form submission
function handleForm(event) {
    event.preventDefault();
    clearFeedback();

    let form = event.target;

    // Validate skill factor
    let formValidated = validateSkillFactor(form);

    if (formValidated) {
        let username = form.username.value;
        let weight = parseFloat(form.weight.value);
        let skillFactor = form.skillFactor.value;

calculateBoardVolume(username, weight, skillFactor);
    }
}

/* Validate skill factor and provide feedback */
function validateSkillFactor(form) {
    let skillFactor = form.skillFactor.value;
    let skillFactorFeedback = document.getElementById("skillFactorFeedback");

    if (skillFactor === "beginner") {
        skillFactorFeedback.innerText = "Beginners need to focus on foundational skills like pop-ups, paddling, and wave selection.";
        skillFactorFeedback.style.color = "#fff";
        return true;

    } else if (skillFactor === "intermediate") {
        skillFactorFeedback.innerText = "Intermediate surfers benefit from refining their turns, speed control, and wave reading.";
        skillFactorFeedback.style.color = "#fff";
        return true;

    } else if (skillFactor === "advanced") {
        skillFactorFeedback.innerText = "Advanced surfers should work on advanced maneuvers, wave selection, and reading the ocean with greater precision.";
        skillFactorFeedback.style.color = "#fff";
        return true;

    } else {
        skillFactorFeedback.innerText = "Invalid response! Please select a skill level.";
        skillFactorFeedback.style.color = "#bfbfbf";
        return false;
    }
}

// Clear feedback
function clearFeedback() {
    let skillFactorFeedback = document.getElementById("skillFactorFeedback");
    skillFactorFeedback.innerText = "";
    skillFactorFeedback.style.color = "#fff";
}

// Calculate board volume
function calculateBoardVolume(username, weight, skillFactor) {
    let factor = 1;

    if (skillFactor === "beginner") {
        factor = 0.6;
    } else if (skillFactor === "intermediate") {
        factor = 0.3;
    } else if (skillFactor === "advanced") {
        factor = 0.1;
    }

    let totalVolume = weight * factor;

    document.getElementById("volume").innerText =
        username + ", your board volume is " + totalVolume.toFixed(2) + " liters";

    document.getElementById("results").style.display = "block";
}


// Close page message
function closePage() {
    document.write("<h1>Thank you for using the surfing app!</h1>");
}
