let destination = {
    "city": "Paris",
    "country": "France",
    "activities": []
}

const addActivity = (destination, activityName, cost) => {
    destination.activities.push({
        "name": activityName,
        "cost": cost
    });

}


addActivity(destination, "Visite du Louvre", 20);
console.log(destination.activities);

// [{ name: "Visite du Louvre", cost: 20 }]

addActivity(destination, "Tour Eiffel", 50);
console.log(destination.activities);

console.log(destination);