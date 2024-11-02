// Define the resource data structure and an array to store resources
const resources = [];

// Function to create a new resource object based on input values
function createResource(name, quantity, consumptionRate) {
    return {
        name: name,
        quantity: quantity,
        consumptionRate: consumptionRate,
        depletionDate: calculateDepletionDate(quantity, consumptionRate)
    };
}

// Calculate depletion date based on quantity and consumption rate
function calculateDepletionDate(quantity, consumptionRate) {
    const daysLeft = Math.floor(quantity / consumptionRate);
    const depletionDate = new Date();
    depletionDate.setDate(depletionDate.getDate() + daysLeft);
    return depletionDate.toDateString();
}

// Function to add the new resource to the resources array
function addResource(name, quantity, consumptionRate) {
    const resource = createResource(name, quantity, consumptionRate);
    resources.push(resource);
    renderTable();  // Optionally, refresh the display
}

// Example usage
addResource("Wood", 100, 5); // Adds "Wood" with quantity 100 and daily usage of 5 units
addResource("Food", 50, 2);  // Adds "Food" with quantity 50 and daily usage of 2 units
