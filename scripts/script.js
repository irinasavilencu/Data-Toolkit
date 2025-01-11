// scripts/script.js
document.getElementById("predictButton").addEventListener("click", function () {
    const marketValue = document.getElementById("marketValue").value;
    
    if (marketValue === "") {
        alert("Please enter a volatility index value.");
        return;
    }
    
    // Simulate a simple prediction model based on the market value.
    const prediction = predictTrend(marketValue);
    document.getElementById("prediction").textContent = prediction;
});

function predictTrend(marketValue) {
    // Determine the market value trend based on given criteria
    let fluctuation;

    if (marketValue >= 0 && marketValue <= 12) {
        fluctuation = "Low";
    } else if (marketValue >= 13 && marketValue <= 19) {
        fluctuation = "Medium";
    } else if (marketValue >= 20) {
        fluctuation = "High";
    } else {
        fluctuation = "Invalid VIX value"; // In case marketValue is negative or unexpected
    }

    return `Market is likely to trend as ${fluctuation} for the next 30 days.`;
}
