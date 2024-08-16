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