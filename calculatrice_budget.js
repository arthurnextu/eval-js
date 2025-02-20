let destination = {
    city: 'Paris',
    country: 'France',
    activities: []
}

function addActivity(destination, activityName, cost) {
    destination.activities.push({activityName, cost})
}

addActivity(destination, 'Louvre', 30)
addActivity(destination, 'Eiffel Tower', 40)
addActivity(destination, 'Notre Dame', 20)
console.log(destination);

function calculateTotalCost(destination) {
    let total = 0
    for (let i = 0; i < destination.activities.length; i++) {
        total += destination.activities[i].cost
    }
    return total
}

console.log(calculateTotalCost(destination));

let destinations = []

function addDestination(destinations, destination) {
    destinations.push(destination)
}

addDestination(destinations, destination)
console.log(destinations);

function displayDestinationSummary(destination) {
    console.log(`Destination : ${destination.city} (${destination.country}).`)
    console.log('Activities:');
    destination.activities.forEach(activity => {
        console.log(`- ${activity.activityName} (${activity.cost} EUR)`);
    });
}

displayDestinationSummary(destination)
