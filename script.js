document.getElementById('pointsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input value
    let points = parseFloat(document.getElementById('pointsAmount').value);

    // Calculate the reward
    let reward = points / 5;

    // Apply the tax deduction (30%)
    let finalReward = reward - (reward * 0.30);

    // Display the result
    document.getElementById('robuxAmount').value = finalReward.toFixed(2);
});