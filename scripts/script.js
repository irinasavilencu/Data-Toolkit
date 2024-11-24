// scripts/script.js
document.getElementById("predictButton").addEventListener("click", function () {
    const marketValue = document.getElementById("marketValue").value;
    
    if (marketValue === "") {
        alert("Please enter a market value.");
        return;
    }
    
    // Simulate a simple prediction model based on the market value.
    const prediction = predictTrend(marketValue);
    document.getElementById("prediction").textContent = prediction;
});

function predictTrend(marketValue) {
    // Simple example of fluctuation prediction logic
    const fluctuation = Math.random() > 0.5 ? "Rise" : "Fall";  // Random rise or fall
    return `Market is likely to ${fluctuation} based on the current value of ${marketValue}.`;
}