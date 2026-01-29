// Questions organized by sections (7-10 questions each)
const sections = [
    {
        title: "Style & Accessories",
        icon: "fa-gem",
        questions: [
            {
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
                question: "Fashion style?",
                icon: "fa-shirt",
                options: [
                    "Casual/comfortable",
                    "Elegant/classic",
                    "Trendy/fashionable",
                    "Sporty/athletic",
                    "Bohemian/artsy"
                ]
            }
        ]
    },
    {
        title: "Beauty & Personal Care",
        icon: "fa-spa",
        questions: [
            {
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
                question: "Lip product preference?",
                icon: "fa-heart",
                options: [
                    "Lipstick",
                    "Lip gloss",
                    "Lip balm/chapstick",
                    "Tinted lip balm",
                    "None"
                ]
            }
        ]
    },
    {
        title: "Food & Drinks",
        icon: "fa-utensils",
        questions: [
            {
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
                question: "Sweet or savory?",
                icon: "fa-cookie-bite",
                options: [
                    "Sweet treats",
                    "Savory snacks",
                    "Both equally"
                ]
            },
            {
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
                question: "Snack preference?",
                icon: "fa-bowl-food",
                options: [
                    "Chocolate/candy",
                    "Chips/crisps",
                    "Nuts",
                    "Fruit",
                    "Baked goods (cookies, muffins)"
                ]
            }
        ]
    },
    {
        title: "Hobbies & Entertainment",
        icon: "fa-music",
        questions: [
            {
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
            }
        ]
    },
    {
        title: "Home, Tech & Lifestyle",
        icon: "fa-house",
        questions: [
            {
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
                question: "Phone type?",
                icon: "fa-mobile-screen",
                options: [
                    "iPhone",
                    "Android (Samsung, Google, etc.)",
                    "Other"
                ]
            },
            {
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
                question: "Tech interest?",
                icon: "fa-laptop",
                options: [
                    "I love the latest gadgets",
                    "I use tech but not obsessed",
                    "I prefer simple/basic tech",
                    "Not tech-savvy"
                ]
            }
        ]
    },
    {
        title: "Personal Preferences & Dreams",
        icon: "fa-heart",
        questions: [
            {
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
                question: "Morning or night person?",
                icon: "fa-sun",
                options: [
                    "Definitely morning person",
                    "Night owl",
                    "Depends on the day"
                ]
            },
            {
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
                question: "What makes you feel most loved?",
                icon: "fa-heart",
                options: [
                    "Quality time together",
                    "Physical touch/affection",
                    "Words of affirmation",
                    "Acts of service",
                    "Receiving gifts"
                ]
            }
        ]
    },
    {
        title: "Dreams & Wishes",
        icon: "fa-star",
        questions: [
            {
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
        ]
    }
];

// Global Variables
let currentSectionIndex = 0;
let userName = '';
let userGender = '';
let answers = {};

// Initialize
$(document).ready(function() {
    $('#totalSections').text(sections.length);
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
    
    // Initialize answers object
    sections.forEach((section, sIndex) => {
        section.questions.forEach((q, qIndex) => {
            const key = `${sIndex}-${qIndex}`;
            answers[key] = {
                section: section.title,
                question: q.question,
                answer: null,
                comment: ''
            };
        });
    });
    
    // Switch screens
    $('#welcomeScreen').removeClass('active');
    $('#questionnaireScreen').addClass('active');
    
    // Load first section
    loadSection(0);
}

// Load Section
function loadSection(index) {
    currentSectionIndex = index;
    const section = sections[index];
    
    // Update progress
    const progress = ((index + 1) / sections.length) * 100;
    $('#progressBar').css('width', progress + '%');
    $('#currentSection').text(index + 1);
    
    // Update section title
    $('#sectionTitle').html(`<i class="fas ${section.icon} me-3"></i>${section.title}`);
    
    // Clear and populate questions
    $('#sectionQuestionsContainer').empty();
    
    section.questions.forEach((question, qIndex) => {
        const key = `${index}-${qIndex}`;
        const questionNumber = getOverallQuestionNumber(index, qIndex);
        
        let questionHTML = `
            <div class="question-item" data-key="${key}">
                <div class="question-text">
                    <span class="question-number">${questionNumber}</span>
                    <i class="fas ${question.icon}"></i>
                    <span>${question.question}</span>
                </div>
                <div class="options-container" data-question-key="${key}">
        `;
        
        question.options.forEach((option, oIndex) => {
            const isSelected = answers[key].answer === option ? 'selected' : '';
            questionHTML += `
                <button class="option-btn ${isSelected}" data-key="${key}" data-option="${option}">
                    <i class="fas fa-circle-dot"></i>
                    <span>${option}</span>
                </button>
            `;
        });
        
        questionHTML += `
                </div>
                <div class="comment-section mt-3">
                    <label class="form-label">
                        <i class="fas fa-comment-dots me-2"></i>Additional thoughts? (Optional)
                    </label>
                    <textarea class="form-control comment-box" data-key="${key}" rows="2" placeholder="Share anything else...">${answers[key].comment || ''}</textarea>
                </div>
            </div>
        `;
        
        $('#sectionQuestionsContainer').append(questionHTML);
    });
    
    // Update button states
    updatePrevButton();
    updateNextButton();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Get overall question number
function getOverallQuestionNumber(sectionIndex, questionIndex) {
    let number = 1;
    for (let i = 0; i < sectionIndex; i++) {
        number += sections[i].questions.length;
    }
    return number + questionIndex;
}

// Option Click Handler
$(document).on('click', '.option-btn', function() {
    const key = $(this).data('key');
    const option = $(this).data('option');
    
    // Remove selected class from all options in this question
    $(`.option-btn[data-key="${key}"]`).removeClass('selected');
    
    // Add selected class to clicked option
    $(this).addClass('selected');
    
    // Store answer
    answers[key].answer = option;
    
    // Update next button
    updateNextButton();
});

// Save comments on change
$(document).on('input', '.comment-box', function() {
    const key = $(this).data('key');
    answers[key].comment = $(this).val().trim();
});

// Next Section
function nextSection() {
    // Check if all questions in current section are answered
    const currentSection = sections[currentSectionIndex];
    let allAnswered = true;
    
    currentSection.questions.forEach((q, qIndex) => {
        const key = `${currentSectionIndex}-${qIndex}`;
        if (!answers[key].answer) {
            allAnswered = false;
        }
    });
    
    if (!allAnswered) {
        alert('Please answer all questions in this section before proceeding!');
        return;
    }
    
    if (currentSectionIndex < sections.length - 1) {
        loadSection(currentSectionIndex + 1);
    } else {
        // Submit form
        submitForm();
    }
}

// Previous Section
function previousSection() {
    if (currentSectionIndex > 0) {
        loadSection(currentSectionIndex - 1);
    }
}

// Update Previous Button
function updatePrevButton() {
    if (currentSectionIndex === 0) {
        $('#prevBtn').prop('disabled', true);
    } else {
        $('#prevBtn').prop('disabled', false);
    }
}

// Update Next Button
function updateNextButton() {
    // Check if all questions in current section are answered
    const currentSection = sections[currentSectionIndex];
    let allAnswered = true;
    
    currentSection.questions.forEach((q, qIndex) => {
        const key = `${currentSectionIndex}-${qIndex}`;
        if (!answers[key].answer) {
            allAnswered = false;
        }
    });
    
    if (currentSectionIndex === sections.length - 1) {
        $('#nextBtn').html('Submit <i class="fas fa-check ms-2"></i>');
    } else {
        $('#nextBtn').html('Next Section <i class="fas fa-arrow-right ms-2"></i>');
    }
    
    $('#nextBtn').prop('disabled', !allAnswered);
}

// Submit Form
function submitForm() {
    // Prepare submission data
    const submissionData = {
        timestamp: new Date().toISOString(),
        userName: userName,
        userGender: userGender,
        responses: Object.values(answers)
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
