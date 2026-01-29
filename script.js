// Questions Database
const questions = [
    {
        category: "Style & Accessories",
        question: "What type of watch do you prefer?",
        icon: "fa-clock",
        options: [
            "Analog/mechanical watch",
            "Smartwatch (Apple Watch, Samsung, Fitbit)",
            "Digital watch",
            "I don't wear watches"
        ]
    },
    {
        category: "Style & Accessories",
        question: "What jewelry metal do you like?",
        icon: "fa-gem",
        options: [
            "Gold",
            "Silver",
            "Rose gold",
            "Platinum",
            "I prefer no jewelry"
        ]
    },
    {
        category: "Style & Accessories",
        question: "What's your bag style?",
        icon: "fa-bag-shopping",
        options: [
            "Handbag/purse",
            "Crossbody bag",
            "Backpack",
            "Tote bag",
            "Clutch"
        ]
    },
    {
        category: "Style & Accessories",
        question: "Sunglasses style?",
        icon: "fa-glasses",
        options: [
            "Aviator",
            "Wayfarer",
            "Cat-eye",
            "Round",
            "I don't wear sunglasses"
        ]
    },
    {
        category: "Style & Accessories",
        question: "Shoe preference?",
        icon: "fa-shoe-prints",
        options: [
            "Sneakers",
            "Heels",
            "Flats/ballet shoes",
            "Boots",
            "Sandals"
        ]
    },
    {
        category: "Fashion & Colors",
        question: "Favorite color to wear?",
        icon: "fa-palette",
        options: [
            "Black",
            "White",
            "Pastels (pink, lavender, baby blue)",
            "Bold colors (red, royal blue, emerald)",
            "Neutral tones (beige, gray, brown)"
        ]
    },
    {
        category: "Fashion & Colors",
        question: "Fashion style?",
        icon: "fa-shirt",
        options: [
            "Casual/comfortable",
            "Elegant/classic",
            "Trendy/fashionable",
            "Sporty/athletic",
            "Bohemian/artsy"
        ]
    },
    {
        category: "Fashion & Colors",
        question: "Clothing preference?",
        icon: "fa-vest",
        options: [
            "Dresses",
            "Jeans and tops",
            "Skirts",
            "Athleisure",
            "Business casual"
        ]
    },
    {
        category: "Beauty & Fragrance",
        question: "Do you like perfume?",
        icon: "fa-spray-can-sparkles",
        options: [
            "Yes, floral scents",
            "Yes, fruity scents",
            "Yes, woody/musky scents",
            "Yes, fresh/citrus scents",
            "No, I prefer unscented"
        ]
    },
    {
        category: "Beauty & Fragrance",
        question: "Makeup preference?",
        icon: "fa-wand-magic-sparkles",
        options: [
            "Full makeup daily",
            "Natural/minimal makeup",
            "Special occasions only",
            "I don't wear makeup"
        ]
    },
    {
        category: "Beauty & Fragrance",
        question: "Skincare routine?",
        icon: "fa-face-smile",
        options: [
            "Extensive routine (serums, masks, etc.)",
            "Basic routine (cleanser, moisturizer)",
            "Minimal routine",
            "I need help building one"
        ]
    },
    {
        category: "Beauty & Fragrance",
        question: "Lip product preference?",
        icon: "fa-heart",
        options: [
            "Lipstick",
            "Lip gloss",
            "Lip balm/chapstick",
            "Tinted lip balm",
            "None"
        ]
    },
    {
        category: "Food & Drinks",
        question: "Favorite cuisine?",
        icon: "fa-utensils",
        options: [
            "Italian",
            "Chinese",
            "Mexican",
            "Indian",
            "Japanese/Sushi",
            "Thai",
            "American/Fast food"
        ]
    },
    {
        category: "Food & Drinks",
        question: "Sweet or savory?",
        icon: "fa-cookie-bite",
        options: [
            "Sweet treats",
            "Savory snacks",
            "Both equally"
        ]
    },
    {
        category: "Food & Drinks",
        question: "Favorite dessert?",
        icon: "fa-ice-cream",
        options: [
            "Chocolate (brownies, cake, truffles)",
            "Ice cream",
            "Cookies",
            "Pastries/donuts",
            "Fruit-based desserts",
            "I'm not big on desserts"
        ]
    },
    {
        category: "Food & Drinks",
        question: "Hot beverage preference?",
        icon: "fa-mug-hot",
        options: [
            "Coffee (black, latte, cappuccino)",
            "Tea (green, black, herbal, chai)",
            "Hot chocolate",
            "None"
        ]
    },
    {
        category: "Food & Drinks",
        question: "Snack preference?",
        icon: "fa-bowl-food",
        options: [
            "Chocolate/candy",
            "Chips/crisps",
            "Nuts",
            "Fruit",
            "Baked goods (cookies, muffins)"
        ]
    },
    {
        category: "Hobbies & Entertainment",
        question: "Free time activities?",
        icon: "fa-book",
        options: [
            "Reading books",
            "Watching movies/series",
            "Gaming",
            "Sports/exercise",
            "Arts and crafts",
            "Cooking/baking"
        ]
    },
    {
        category: "Hobbies & Entertainment",
        question: "Book genre preference?",
        icon: "fa-book-open",
        options: [
            "Romance",
            "Mystery/thriller",
            "Fantasy",
            "Self-help/personal development",
            "Fiction/literary",
            "I don't read much"
        ]
    },
    {
        category: "Hobbies & Entertainment",
        question: "Movie/series genre?",
        icon: "fa-film",
        options: [
            "Romance/romantic comedy",
            "Action/adventure",
            "Horror",
            "Comedy",
            "Drama",
            "Sci-fi/fantasy",
            "Documentary"
        ]
    },
    {
        category: "Hobbies & Entertainment",
        question: "Music genre?",
        icon: "fa-music",
        options: [
            "Pop",
            "Rock",
            "Hip-hop/Rap",
            "R&B/Soul",
            "Country",
            "Electronic/EDM",
            "Classical/Jazz",
            "K-pop"
        ]
    },
    {
        category: "Hobbies & Entertainment",
        question: "Exercise preference?",
        icon: "fa-dumbbell",
        options: [
            "Gym/weight training",
            "Yoga/Pilates",
            "Running/jogging",
            "Dancing",
            "Swimming",
            "Team sports",
            "I don't exercise regularly"
        ]
    },
    {
        category: "Home & Comfort",
        question: "Room aesthetic?",
        icon: "fa-house",
        options: [
            "Minimalist/modern",
            "Cozy/warm",
            "Colorful/eclectic",
            "Vintage/retro",
            "Nature-inspired"
        ]
    },
    {
        category: "Home & Comfort",
        question: "Favorite scent for home?",
        icon: "fa-fire",
        options: [
            "Vanilla",
            "Lavender",
            "Fresh linen",
            "Citrus",
            "Floral",
            "Woodsy/pine",
            "Cinnamon/spice"
        ]
    },
    {
        category: "Home & Comfort",
        question: "Comfort item?",
        icon: "fa-couch",
        options: [
            "Cozy blankets",
            "Soft pillows",
            "Plush robe",
            "Scented candles",
            "Stuffed animals"
        ]
    },
    {
        category: "Home & Comfort",
        question: "Are you a plant person?",
        icon: "fa-leaf",
        options: [
            "Yes, I love plants",
            "Yes, but low-maintenance ones",
            "I want to be but struggle",
            "No, I prefer fake plants",
            "Not interested"
        ]
    },
    {
        category: "Tech & Gadgets",
        question: "Phone type?",
        icon: "fa-mobile-screen",
        options: [
            "iPhone",
            "Android (Samsung, Google, etc.)",
            "Other"
        ]
    },
    {
        category: "Tech & Gadgets",
        question: "Headphones preference?",
        icon: "fa-headphones",
        options: [
            "Wireless earbuds (AirPods, etc.)",
            "Over-ear headphones",
            "Wired earphones",
            "I don't use headphones much"
        ]
    },
    {
        category: "Tech & Gadgets",
        question: "Tech interest?",
        icon: "fa-laptop",
        options: [
            "I love the latest gadgets",
            "I use tech but not obsessed",
            "I prefer simple/basic tech",
            "Not tech-savvy"
        ]
    },
    {
        category: "Personal Preferences",
        question: "Gift preference?",
        icon: "fa-gift",
        options: [
            "Practical/useful items",
            "Sentimental/meaningful gifts",
            "Experiences (concerts, trips, dinners)",
            "Handmade/personalized items",
            "Surprise me!"
        ]
    },
    {
        category: "Personal Preferences",
        question: "Flowers preference?",
        icon: "fa-flower",
        options: [
            "Roses",
            "Tulips",
            "Sunflowers",
            "Lilies",
            "Orchids",
            "Mixed bouquets",
            "I prefer plants/succulents",
            "Not really into flowers"
        ]
    },
    {
        category: "Personal Preferences",
        question: "Do you journal or write?",
        icon: "fa-pen",
        options: [
            "Yes, regularly",
            "Sometimes",
            "I want to start",
            "No"
        ]
    },
    {
        category: "Personal Preferences",
        question: "Collections or hobbies?",
        icon: "fa-star",
        options: [
            "I collect (stamps, coins, figures, etc.)",
            "I have creative hobbies",
            "I'm into photography",
            "I don't really collect anything"
        ]
    },
    {
        category: "Personal Preferences",
        question: "Morning or night person?",
        icon: "fa-sun",
        options: [
            "Definitely morning person",
            "Night owl",
            "Depends on the day"
        ]
    },
    {
        category: "Personal Preferences",
        question: "Favorite season?",
        icon: "fa-snowflake",
        options: [
            "Spring",
            "Summer",
            "Fall/Autumn",
            "Winter"
        ]
    },
    {
        category: "Travel & Experiences",
        question: "Travel preference?",
        icon: "fa-plane",
        options: [
            "Beach/tropical destinations",
            "Mountains/hiking",
            "City exploration/shopping",
            "Cultural/historical sites",
            "Adventure/thrill activities",
            "Relaxing spa/resort"
        ]
    },
    {
        category: "Travel & Experiences",
        question: "Ideal date?",
        icon: "fa-heart",
        options: [
            "Dinner at a nice restaurant",
            "Movie and chill",
            "Outdoor adventure",
            "Concert/live show",
            "Cozy night in",
            "Something spontaneous"
        ]
    },
    {
        category: "Travel & Experiences",
        question: "Weekend activity?",
        icon: "fa-calendar",
        options: [
            "Going out (shopping, eating, exploring)",
            "Staying in (movies, games, relaxing)",
            "Social (hanging with friends)",
            "Mix of both"
        ]
    },
    {
        category: "Thoughtful Questions",
        question: "What makes you feel most loved?",
        icon: "fa-heart",
        options: [
            "Quality time together",
            "Physical touch/affection",
            "Words of affirmation",
            "Acts of service",
            "Receiving gifts"
        ]
    },
    {
        category: "Thoughtful Questions",
        question: "What's your dream gift?",
        icon: "fa-star",
        options: [
            "Something handmade and personal",
            "A surprise trip or adventure",
            "Jewelry or accessories",
            "Tech gadget I've been wanting",
            "Something you noticed I needed",
            "An experience we can share together"
        ]
    },
    {
        category: "Thoughtful Questions",
        question: "What's your comfort activity after a stressful day?",
        icon: "fa-spa",
        options: [
            "Taking a relaxing bath",
            "Watching favorite shows/movies",
            "Listening to music",
            "Talking with someone I trust",
            "Being alone with my thoughts",
            "Doing something creative"
        ]
    },
    {
        category: "Thoughtful Questions",
        question: "What's something you've wanted but haven't bought yourself?",
        icon: "fa-shopping-cart",
        options: [
            "A piece of jewelry",
            "A nice bag or wallet",
            "Books or subscriptions",
            "Home decor items",
            "Tech gadget",
            "Clothing or shoes",
            "Nothing specific - I usually get what I want"
        ]
    }
];

// Global Variables
let currentQuestionIndex = 0;
let userName = '';
let userGender = '';
let answers = [];

// Initialize
$(document).ready(function() {
    $('#totalQuestions').text(questions.length);
    updatePrevButton();
});

// Start Questionnaire
function startQuestionnaire() {
    userName = $('#userName').val().trim();
    userGender = $('#userGender').val();
    
    if (!userName) {
        alert('Please enter your name!');
        return;
    }
    
    if (!userGender) {
        alert('Please select your gender!');
        return;
    }
    
    // Initialize answers array
    answers = new Array(questions.length).fill(null).map(() => ({
        answer: null,
        comment: ''
    }));
    
    // Switch screens
    $('#welcomeScreen').removeClass('active');
    $('#questionnaireScreen').addClass('active');
    
    // Load first question
    loadQuestion(0);
}

// Load Question
function loadQuestion(index) {
    currentQuestionIndex = index;
    const question = questions[index];
    
    // Update progress
    const progress = ((index + 1) / questions.length) * 100;
    $('#progressBar').css('width', progress + '%');
    $('#currentQuestion').text(index + 1);
    
    // Update question title
    $('#questionTitle').html(`<i class="fas ${question.icon} me-3"></i>${question.question}`);
    
    // Clear and populate options
    $('#optionsContainer').empty();
    question.options.forEach((option, i) => {
        const btn = $(`
            <button class="option-btn" data-index="${i}">
                <i class="fas fa-circle-dot"></i>
                <span>${option}</span>
            </button>
        `);
        
        // Check if this option was previously selected
        if (answers[index].answer === option) {
            btn.addClass('selected');
        }
        
        $('#optionsContainer').append(btn);
    });
    
    // Load previous comment if exists
    $('#commentBox').val(answers[index].comment || '');
    
    // Update button states
    updatePrevButton();
    updateNextButton();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Option Click Handler
$(document).on('click', '.option-btn', function() {
    // Remove selected class from all options
    $('.option-btn').removeClass('selected');
    
    // Add selected class to clicked option
    $(this).addClass('selected');
    
    // Store answer
    const selectedText = $(this).find('span').text();
    answers[currentQuestionIndex].answer = selectedText;
    
    // Enable next button
    updateNextButton();
});

// Next Question
function nextQuestion() {
    // Save comment
    answers[currentQuestionIndex].comment = $('#commentBox').val().trim();
    
    // Check if answer is selected
    if (!answers[currentQuestionIndex].answer) {
        alert('Please select an option before proceeding!');
        return;
    }
    
    if (currentQuestionIndex < questions.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    } else {
        // Submit form
        submitForm();
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        // Save current comment before going back
        answers[currentQuestionIndex].comment = $('#commentBox').val().trim();
        loadQuestion(currentQuestionIndex - 1);
    }
}

// Update Previous Button
function updatePrevButton() {
    if (currentQuestionIndex === 0) {
        $('#prevBtn').prop('disabled', true);
    } else {
        $('#prevBtn').prop('disabled', false);
    }
}

// Update Next Button
function updateNextButton() {
    const isAnswered = answers[currentQuestionIndex].answer !== null;
    
    if (currentQuestionIndex === questions.length - 1) {
        $('#nextBtn').html('Submit <i class="fas fa-check ms-2"></i>');
    } else {
        $('#nextBtn').html('Next <i class="fas fa-arrow-right ms-2"></i>');
    }
    
    $('#nextBtn').prop('disabled', !isAnswered);
}

// Submit Form
function submitForm() {
    // Save last comment
    answers[currentQuestionIndex].comment = $('#commentBox').val().trim();
    
    // Prepare submission data
    const submissionData = {
        timestamp: new Date().toISOString(),
        userName: userName,
        userGender: userGender,
        responses: questions.map((q, i) => ({
            category: q.category,
            question: q.question,
            answer: answers[i].answer,
            comment: answers[i].comment
        }))
    };
    
    // Save to localStorage for you to view
    saveToLocalStorage(submissionData);
    
    // Show thank you screen
    $('#questionnaireScreen').removeClass('active');
    $('#thankYouScreen').addClass('active');
}

// Save to localStorage
function saveToLocalStorage(data) {
    // Get existing submissions
    let submissions = JSON.parse(localStorage.getItem('questionnaire_submissions') || '[]');
    
    // Add new submission
    submissions.push(data);
    
    // Save back to localStorage
    localStorage.setItem('questionnaire_submissions', JSON.stringify(submissions));
    
    console.log('Submission saved:', data);
}
