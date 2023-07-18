// Variable to store the fruit data
var fruitData;

// Function to populate select elements with fruit options
function populateFruitOptions() {
    fetch('fruits.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            fruitData = data;

            var selectElements = document.querySelectorAll("select");
            selectElements.forEach(function (selectElement) {
                data.forEach(function (fruit) {
                    var option = document.createElement("option");
                    option.value = fruit.id;
                    option.text = fruit.name;
                    selectElement.add(option);
                });
            });
        })
        .catch(function (error) {
            console.log('Error fetching fruit data:', error);
        });
}

// Function to calculate total nutrition values based on selected fruits
function calculateTotalNutrition() {
    var fruit1Id = document.getElementById("fruit1").value;
    var fruit2Id = document.getElementById("fruit2").value;
    var fruit3Id = document.getElementById("fruit3").value;

    var totalNutrition = {
        carbohydrates: 0,
        protein: 0,
        fat: 0,
        sugar: 0,
        calories: 0
    };

    // Calculate the total nutrition based on the selected fruits
    var fruit1 = fruitData.find(function (fruit) {
        return fruit.id === parseInt(fruit1Id);
    });
    if (fruit1) {
        totalNutrition.carbohydrates += fruit1.nutritions.carbohydrates;
        totalNutrition.protein += fruit1.nutritions.protein;
        totalNutrition.fat += fruit1.nutritions.fat;
        totalNutrition.sugar += fruit1.nutritions.sugar;
        totalNutrition.calories += fruit1.nutritions.calories;
    }

    var fruit2 = fruitData.find(function (fruit) {
        return fruit.id === parseInt(fruit2Id);
    });
    if (fruit2) {
        totalNutrition.carbohydrates += fruit2.nutritions.carbohydrates;
        totalNutrition.protein += fruit2.nutritions.protein;
        totalNutrition.fat += fruit2.nutritions.fat;
        totalNutrition.sugar += fruit2.nutritions.sugar;
        totalNutrition.calories += fruit2.nutritions.calories;
    }

    var fruit3 = fruitData.find(function (fruit) {
        return fruit.id === parseInt(fruit3Id);
    });
    if (fruit3) {
        totalNutrition.carbohydrates += fruit3.nutritions.carbohydrates;
        totalNutrition.protein += fruit3.nutritions.protein;
        totalNutrition.fat += fruit3.nutritions.fat;
        totalNutrition.sugar += fruit3.nutritions.sugar;
        totalNutrition.calories += fruit3.nutritions.calories;
    }

    // Round the nutrition values to 2 decimal places
    totalNutrition.carbohydrates = totalNutrition.carbohydrates.toFixed(2);
    totalNutrition.protein = totalNutrition.protein.toFixed(2);
    totalNutrition.fat = totalNutrition.fat.toFixed(2);
    totalNutrition.sugar = totalNutrition.sugar.toFixed(2);
    totalNutrition.calories = totalNutrition.calories.toFixed(2);

    return totalNutrition;
}


function handleSubmit(event) {
    event.preventDefault();

    var firstName = document.getElementById("firstName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var specialInstructions = document.getElementById("specialInstructions").value;

    var totalNutrition = calculateTotalNutrition();
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleDateString('en-US');

    var orderSummary = document.createElement("div"); // Create a new div element
    orderSummary.innerHTML = "<h2>Order Successfully Submitted!</h2><br><br>" +
        "<strong>Order Date:</strong> " + formattedDate + "<br>" +
        "<strong>First Name:</strong> " + firstName + "<br>" +
        "<strong>Email:</strong> " + email + "<br>" +
        "<strong>Phone Number:</strong> " + phone + "<br><br>" +
        "<strong>Fruit 1:</strong> " + document.getElementById("fruit1").options[document.getElementById("fruit1").selectedIndex].text + "<br>" +
        "<strong>Fruit 2:</strong> " + document.getElementById("fruit2").options[document.getElementById("fruit2").selectedIndex].text + "<br>" +
        "<strong>Fruit 3:</strong> " + document.getElementById("fruit3").options[document.getElementById("fruit3").selectedIndex].text + "<br><br>" +
        "<strong>Special Instructions:</strong> " + specialInstructions + "<br><br>" +
        "<strong>Total Nutrition:</strong><br>" +
        "<strong>Carbohydrates:</strong> " + totalNutrition.carbohydrates + "g<br>" +
        "<strong>Protein:</strong> " + totalNutrition.protein + "g<br>" +
        "<strong>Fat:</strong> " + totalNutrition.fat + "g<br>" +
        "<strong>Sugar:</strong> " + totalNutrition.sugar + "g<br>" +
        "<strong>Calories:</strong> " + totalNutrition.calories + "kcal";

    var orderSummaryContainer = document.getElementById("orderSummary");
    orderSummary.setAttribute('id', 'order-summary-display')
    orderSummaryContainer.innerHTML = '';
    orderSummaryContainer.appendChild(orderSummary);
}



// Populate fruit options when the page loads
populateFruitOptions();

// Attach event handler to form submit event
document.getElementById("orderForm").addEventListener("submit", handleSubmit);
