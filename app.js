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

// Function to render the table with the resources
function renderTable() {
    const tableBody = document.querySelector('#resource-table tbody');

        tableBody.innerHTML = ''; // Clear the table before re-rendering

        // Loop through each resource and create a new row in the table
        resources.forEach((resource) => {
            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${resource.name}</td>
            <td>${resource.quantity}</td>
            <td>${resource.consumptionRate}</td>
            <td>${resource.reorderThreshold}</td>
            <td>${resource.depletionDate}</td>
            `;

            // Append the row to the table body
            tableBody.appendChild(row);
        });
    
}
// Event listener for form submission
document.getElementById('resource-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture input values
    const name = document.getElementById('resource-name').value;
    const quantity = parseInt(document.getElementById('resource-quantity').value)
    const consumptionRate = parseInt(document.getElementById('resource-usage').value)
    const reorderThreshold = parseInt(document.getElementById('reorder-threshold').value);

       // Add the resource and clear the form
       addResource(name, quantity, consumptionRate, reorderThreshold);
       document.getElementById('resource-form').reset();
}); 

