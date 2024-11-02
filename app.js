// Define the resource data structure and an array to store resources
const resources = [];

// Function to create a new resource object based on input values
function createResource(name, quantity, consumptionRate, reorderThreshold) {
    return {
        name,
        quantity,
        consumptionRate,
        reorderThreshold,
        depletionDate: calculateDepletionDate(quantity, consumptionRate),
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
function addResource(name, quantity, consumptionRate, reorderThreshold) {
    const resource = createResource(name, quantity, consumptionRate, reorderThreshold);
    resources.push(resource);
    renderTable();  // Optionally, refresh the display
}

// Event listener for form submission
document.getElementById('resource-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture input values
    const name = document.getElementById('resource-name').ariaValueMax;
    const quantity = parseInt(document.getElementById('resource-quantity').value)
    const consumptionRate = parseInt(document.getElementById('resource-usage').value)
    const reorderThreshold = parseInt(document.getElementById('reorder-threshold').value);

       // Add the resource and clear the form
       addResource(name, quantity, consumptionRate, reorderThreshold);
       document.getElementById('resource-form').reset();
}); 

