function evaluateSurvey() {
    // Capture user responses
    const focus = document.getElementById("focus").value;
    const restless = document.getElementById("restless").value;
    const impulse = document.getElementById("impulse").value;
    const impact = document.getElementById("impact").value;
    const performance = document.getElementById("performance").value;

    let score = 0;

    // Calculate a score based on responses
    if (focus === "often" || focus === "veryOften") {
        score += 1;
    }
    if (restless === "often" || restless === "veryOften") {
        score += 1;
    }
    if (impulse === "often" || impulse === "veryOften") {
        score += 1;
    }
    if (impact === "often" || impact === "veryOften") {
        score += 1;
    }
    if (performance === "often" || performance === "veryOften") {
        score += 1;
    }

    // Display results based on score
    let resultMessage = "";

    if (score >= 3) {
        resultMessage = "Your responses indicate that you might have symptoms of ADHD. Please consider seeking professional advice.";
    } else {
        resultMessage = "Your responses do not indicate significant symptoms of ADHD. However, if you have concerns, consulting a healthcare professional is always a good idea.";
    }

    // Update the result element's text
    const resultElement = document.getElementById("result");
    resultElement.innerText = resultMessage;

    // Highlight the result
    highlightResult();
}

function highlightResult() {
    const resultElement = document.getElementById("result");
    resultElement.style.backgroundColor = "#ffeb3b"; // Yellow background

    // Remove the highlight after 1 second
    setTimeout(() => {
        resultElement.style.backgroundColor = ""; // Reset background
    }, 1000);
}
