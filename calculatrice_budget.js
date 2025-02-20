// création d'un objet
let destination = {
    "city": "Paris",
    "country": "France",
    "activities": []
}

// Ajout d'une activité
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

// Calcul du coût total
const calculateTotalCost = (destination) => {
    let total = 0;
    for (let i = 0; i < destination.activities.length; i++) {
        total += destination.activities[i].cost;
    }
    return total;
}

console.log(calculateTotalCost(destination));