// Update the other field when the value in one field changes
document.getElementById('pointsAmount').addEventListener('input', function() {
    let points = parseFloat(this.value);
    if (!isNaN(points)) {
        let reward = (points / 5) * 0.70;
        document.getElementById('robuxAmount').value = reward.toFixed(2);
    } else {
        document.getElementById('robuxAmount').value = '';
    }
});

document.getElementById('robuxAmount').addEventListener('input', function() {
    let reward = parseFloat(this.value);
    if (!isNaN(reward)) {
        let points = (reward / 0.70) * 5;
        document.getElementById('pointsAmount').value = points.toFixed(2);
    } else {
        document.getElementById('pointsAmount').value = '';
    }
});

document.getElementById('tipAmount').addEventListener('input', function() {
    let tip = parseFloat(this.value);
    if (!isNaN(tip)) {
        // Apply 40% tax on the tip
        let equivalent = tip * (1 - 0.40);
        document.getElementById('equivalentRobux').value = equivalent.toFixed(2);
    } else {
        document.getElementById('equivalentRobux').value = '';
    }
});

document.getElementById('equivalentRobux').addEventListener('input', function() {
    let equivalent = parseFloat(this.value);
    if (!isNaN(equivalent)) {
        // Reverse the tax calculation to find the original tip amount
        let tip = equivalent / (1 - 0.40);
        document.getElementById('tipAmount').value = tip.toFixed(2);
    } else {
        document.getElementById('tipAmount').value = '';
    }
});