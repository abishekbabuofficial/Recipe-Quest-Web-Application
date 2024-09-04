const recipes = [
    {
        title: "Butter Chicken",
        ingredients: ["Chicken", "Butter", "Tomato", "Cream", "Spices"],
        instructions: "Marinate chicken with spices. Cook with butter, tomato, and cream until done.",
        image: "../assets/images/butterchicken.jpg",
        category: ["Indian","Non-Vegetarian"]
    },
    {
        title: "Palak Paneer",
        ingredients: ["Spinach", "Paneer", "Garlic", "Onion", "Spices"],
        instructions: "Blanch spinach, cook with spices, and add paneer cubes.",
        image: "../assets/images/palak-panner.jpg",
        category: ["Indian","Vegetarian"]
    },
    {
        title: "Chicken Biryani",
        ingredients: ["Basmati Rice", "Chicken", "Yogurt", "Spices", "Onions"],
        instructions: "Layer cooked rice and marinated chicken, cook on low heat.",
        image: "../assets/images/Chicken-biryani.jpg",
        category: ["Indian","Non-Vegetarian"]
    },
    {
        title: "Masala Dosa",
        ingredients: ["Rice", "Lentils", "Potatoes", "Spices", "Coconut"],
        instructions: "Make a batter from rice and lentils, cook dosa, fill with spiced potato filling.",
        image: "../assets/images/masala-dosai.jpg",
        category: ["Indian","Vegetarian"]
    },
    {
        title: "Mutton Biryani",
        ingredients: ["Basmati Rice", "Chicken", "Yogurt", "Spices", "Onions"],
        instructions: "Layer cooked rice and marinated chicken, cook on low heat.",
        image: "../assets/images/mutton-biryani.jpeg",
        category: ["Indian","Non-Vegetarian"]
    },
    {
        title: "Gulab Jamun",
        ingredients: ["Milk Powder", "Flour", "Sugar", "Cardamom", "Rose Water"],
        instructions: "Make dough from milk powder and flour, fry, and soak in sugar syrup.",
        image: "../assets/images/gulab-jamun.jpg",
        category: ["Indian","Vegetarian"]
    },
    {
        title: "Kung Pao Chicken",
        ingredients: ["Chicken", "Peanuts", "Bell Peppers", "Chili", "Soy Sauce"],
        instructions: "Stir-fry chicken with vegetables, add peanuts and sauce.",
        image: "../assets/images/kung-pao-chicken.jpg",
        category: ["Chinese","Non-Vegetarian"]
    },
    {
        title: "Margherita Pizza",
        ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Basil"],
        instructions: "Spread sauce on dough, top with cheese and basil, bake.",
        image: "../assets/images/pizza-margherita.jpg",
        category: ["Italian","Vegetarian"]
    }
];

let favoriteRecipes = [];

function displayRecipes(recipes) {
    const recipeContainer = document.getElementById('recipeContainer');
    recipeContainer.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';

        recipeCard.innerHTML = `
            <img id="modal-img" src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
            <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
            <button class="favorite-btn" onclick="toggleFavorite('${recipe.title}')">❤️</button>
        `;

        recipeCard.addEventListener('click', () => showDetails(recipe));

        recipeContainer.appendChild(recipeCard);
    });
}




function toggleFavorite(recipeTitle) {
    if (favoriteRecipes.includes(recipeTitle)) {
        favoriteRecipes = favoriteRecipes.filter(title => title !== recipeTitle);
        alert(`${recipeTitle} removed from favorites!`);
    } else {
        favoriteRecipes.push(recipeTitle);
        alert(`${recipeTitle} added to favorites!`);
    }
    updateFavorites();
}

function updateFavorites() {
    const favoritesContainer = document.getElementById('favoritesContainer');
    favoritesContainer.innerHTML = favoriteRecipes.join(', ') || 'No favorite recipes yet.';
}


function searchRecipes() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchInput)
    );
    displayRecipes(filteredRecipes);
}

function filterRecipes() {
    const filterValue = document.getElementById('filterSelect').value;
    
    const filteredRecipes = recipes.filter(recipe =>
        filterValue === 'all' || recipe.category.includes(filterValue)
    );
    
    displayRecipes(filteredRecipes);
}


function showDetails(recipe) {
    const modal = document.getElementById('recipeModal');
    document.getElementById('modalTitle').textContent = recipe.title;
    document.getElementById('modalImage').src = recipe.image;
    document.getElementById('modalIngredients').textContent = `Ingredients: ${recipe.ingredients.join(',')}`;
    document.getElementById('modalInstructions').textContent = `Instructions: ${recipe.instructions}`;

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('recipeModal');
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('recipeModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Initialize page with all recipes
displayRecipes(recipes);




