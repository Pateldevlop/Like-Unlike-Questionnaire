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
            },
            {
                question: "Chocolate intensity preference?",
                icon: "fa-cookie-bite",
                options: [
                    "White chocolate (sweet & creamy)",
                    "Milk chocolate (classic balance)",
                    "Dark chocolate (60%–70% cacao)",
                    "Extra dark (80%+ cacao)",
                    "I don't like chocolate"
                ]
            },
            {
                question: "Favorite Korean main dish?",
                icon: "fa-bowl-rice",
                options: [
                    "Bibimbap (Mixed rice bowl)",
                    "Bulgogi (Marinated BBQ beef)",
                    "Tteokbokki (Spicy rice cakes)",
                    "Jajangmyeon (Black bean noodles)",
                    "Korean Fried Chicken"
                ]
            },
            {
                question: "Korean spice tolerance?",
                icon: "fa-fire",
                options: [
                    "Mild (Flavorful, no heat)",
                    "Medium (A gentle kick)",
                    "Hot (Buldak/Spicy Ramen level)",
                    "Extreme (The spicier, the better!)"
                ]
            },
            {
                question: "Chocolate pairing preference?",
                icon: "fa-layer-group",
                options: [
                    "Sea Salt & Caramel",
                    "Fruit (Strawberry/Orange)",
                    "Nuts (Almond/Hazelnut)",
                    "Mint",
                    "Pure (No additions)"
                ]
            },
            {
                question: "Favorite Korean snack/street food?",
                icon: "fa-hotdog",
                options: [
                    "Korean Corn Dog",
                    "Gimbap (Seaweed rolls)",
                    "Hotteok (Sweet pancakes)",
                    "Bungeo-ppang (Fish-shaped pastry)",
                    "Kimchi Mandu (Dumplings)"
                ]
            },
            {
                question: "Sweet or Savory preference?",
                icon: "fa-candy-cane",
                options: [
                    "Always Sweet",
                    "Strictly Savory",
                    "A mix of both (Sweet & Salty)",
                    "Depends on the mood"
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
                    "I prefer not to exercise"
                ]
            },
            {
                question: "Ideal weekend activity?",
                icon: "fa-calendar-day",
                options: [
                    "Outdoor adventure (hiking, beach, park)",
                    "Shopping",
                    "Staying home and relaxing",
                    "Going out with friends",
                    "Trying new restaurants/cafes",
                    "Cultural activities (museums, theater)"
                ]
            },
            {
                question: "Social media preference?",
                icon: "fa-hashtag",
                options: [
                    "Instagram",
                    "TikTok",
                    "Facebook",
                    "Twitter/X",
                    "Pinterest",
                    "I'm not very active on social media"
                ]
            }
        ]
    },
    {
        title: "Tech & Gadgets",
        icon: "fa-mobile",
        questions: [
            {
                question: "Phone brand?",
                icon: "fa-mobile-screen-button",
                options: [
                    "iPhone",
                    "Samsung",
                    "Google Pixel",
                    "Other Android",
                    "I don't care about brands"
                ]
            },
            {
                question: "Headphones/earbuds preference?",
                icon: "fa-headphones",
                options: [
                    "AirPods/wireless earbuds",
                    "Over-ear headphones",
                    "Wired earphones",
                    "I don't use headphones often"
                ]
            },
            {
                question: "Laptop/tablet use?",
                icon: "fa-laptop",
                options: [
                    "I use it daily for work/study",
                    "Occasionally for entertainment",
                    "Rarely - I prefer my phone",
                    "I have one but barely use it"
                ]
            },
            {
                question: "Smart home devices?",
                icon: "fa-house-signal",
                options: [
                    "Yes, I love them (Alexa, Google Home, etc.)",
                    "I have a few",
                    "Interested but don't have any yet",
                    "Not interested"
                ]
            },
            {
                question: "Fitness tracker?",
                icon: "fa-heart-pulse",
                options: [
                    "Yes, smartwatch with fitness features",
                    "Yes, dedicated fitness tracker",
                    "Just use phone apps",
                    "Don't track fitness"
                ]
            },
            {
                question: "Photography?",
                icon: "fa-camera",
                options: [
                    "Love it - have a good camera",
                    "Enjoy it - phone camera is enough",
                    "Only for special occasions",
                    "Not really into photography"
                ]
            }
        ]
    },
    {
        title: "Personal Preferences",
        icon: "fa-heart",
        questions: [
            {
                question: "Seasonal preference?",
                icon: "fa-cloud-sun",
                options: [
                    "Spring (flowers, mild weather)",
                    "Summer (beach, sunshine)",
                    "Fall (cozy, pumpkin spice)",
                    "Winter (snow, holidays)"
                ]
            },
            {
                question: "Morning or night person?",
                icon: "fa-moon",
                options: [
                    "Early bird (love mornings)",
                    "Night owl (evenings are my time)",
                    "Depends on the day"
                ]
            },
            {
                question: "Dream vacation?",
                icon: "fa-plane",
                options: [
                    "Beach resort (relaxation, sun, sand)",
                    "European city tour (culture, history)",
                    "Adventure trip (hiking, safari, exploration)",
                    "Staycation (exploring locally, relaxing at home)",
                    "Tropical paradise (islands, exotic locations)"
                ]
            },
            {
                question: "Plants/flowers?",
                icon: "fa-seedling",
                options: [
                    "Love them - have several at home",
                    "Like them but always forget to water",
                    "Prefer low-maintenance plants",
                    "Not really a plant person"
                ]
            },
            {
                question: "Candles/room scents?",
                icon: "fa-fire",
                options: [
                    "Yes, love vanilla scents",
                    "Yes, love floral scents",
                    "Yes, love fresh/clean scents",
                    "Yes, love fruity scents",
                    "Not really into scents"
                ]
            },
            {
                question: "Pet preference?",
                icon: "fa-paw",
                options: [
                    "Dogs",
                    "Cats",
                    "Both",
                    "Other pets (birds, fish, etc.)",
                    "Not a pet person"
                ]
            },
            {
                question: "Art preference?",
                icon: "fa-palette",
                options: [
                    "Modern/abstract",
                    "Classic/traditional",
                    "Photography",
                    "Street art/pop art",
                    "Not really into art"
                ]
            },
            {
                question: "Comfort item when stressed?",
                icon: "fa-heart",
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
let shuffledSections = [];
let autoSaveTimer = null;

// Utility function to shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize
$(document).ready(function() {
    // Load saved progress if exists
    loadSavedProgress();
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
    
    // Save user info
    localStorage.setItem('questionnaire_userName', userName);
    localStorage.setItem('questionnaire_userGender', userGender);
    
    // Create shuffled sections (shuffle questions within each section)
    shuffledSections = sections.map(section => ({
        ...section,
        questions: shuffleArray(section.questions)
    }));
    
    // Initialize answers object
    shuffledSections.forEach((section, sIndex) => {
        section.questions.forEach((q, qIndex) => {
            const key = `${sIndex}-${qIndex}`;
            if (!answers[key]) {
                answers[key] = {
                    section: section.title,
                    question: q.question,
                    answer: null,
                    comment: ''
                };
            }
        });
    });
    
    // Switch screens
    $('#welcomeScreen').removeClass('active');
    $('#questionnaireScreen').addClass('active');
    
    // Load first section
    loadSection(0);
    
    // Start auto-save
    startAutoSave();
}

// Load Section
function loadSection(index) {
    currentSectionIndex = index;
    const section = shuffledSections[index];
    
    // Update progress
    const progress = ((index + 1) / shuffledSections.length) * 100;
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
        number += shuffledSections[i].questions.length;
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
    
    // Trigger auto-save
    triggerAutoSave();
});

// Save comments on change
$(document).on('input', '.comment-box', function() {
    const key = $(this).data('key');
    answers[key].comment = $(this).val().trim();
    
    // Trigger auto-save
    triggerAutoSave();
});

// Auto-save functionality
function startAutoSave() {
    // Auto-save every 30 seconds
    autoSaveTimer = setInterval(() => {
        saveProgress();
    }, 30000);
}

function triggerAutoSave() {
    // Clear existing timer
    if (autoSaveTimer) {
        clearInterval(autoSaveTimer);
    }
    
    // Save immediately
    saveProgress();
    
    // Restart timer
    startAutoSave();
}

function saveProgress() {
    const progressData = {
        currentSectionIndex: currentSectionIndex,
        userName: userName,
        userGender: userGender,
        answers: answers,
        shuffledSections: shuffledSections,
        lastSaved: new Date().toISOString()
    };
    
    localStorage.setItem('questionnaire_progress', JSON.stringify(progressData));
    
    // Show save indicator (optional)
    showSaveIndicator();
}

function showSaveIndicator() {
    // Create a subtle save indicator
    if ($('#saveIndicator').length === 0) {
        $('body').append('<div id="saveIndicator" style="position: fixed; top: 20px; right: 20px; background: rgba(102, 126, 234, 0.9); color: white; padding: 10px 20px; border-radius: 50px; font-size: 14px; z-index: 9999; display: none;"><i class="fas fa-check-circle me-2"></i>Saved</div>');
    }
    
    $('#saveIndicator').fadeIn(300).delay(1500).fadeOut(300);
}

function loadSavedProgress() {
    const savedProgress = localStorage.getItem('questionnaire_progress');
    const savedUserName = localStorage.getItem('questionnaire_userName');
    const savedUserGender = localStorage.getItem('questionnaire_userGender');
    
    if (savedProgress) {
        const data = JSON.parse(savedProgress);
        
        // Restore user info
        if (savedUserName) {
            userName = savedUserName;
            $('#userName').val(userName);
        }
        if (savedUserGender) {
            userGender = savedUserGender;
            $('#userGender').val(userGender);
        }
        
        // Ask user if they want to continue
        if (confirm('We found your previous progress. Would you like to continue from where you left off?')) {
            currentSectionIndex = data.currentSectionIndex || 0;
            answers = data.answers || {};
            shuffledSections = data.shuffledSections || [];
            
            // If shuffledSections is empty, create new ones
            if (shuffledSections.length === 0) {
                shuffledSections = sections.map(section => ({
                    ...section,
                    questions: shuffleArray(section.questions)
                }));
            }
            
            // Switch to questionnaire screen
            $('#welcomeScreen').removeClass('active');
            $('#questionnaireScreen').addClass('active');
            
            // Load current section
            loadSection(currentSectionIndex);
            
            // Start auto-save
            startAutoSave();
        } else {
            // Clear saved progress
            clearSavedProgress();
        }
    }
}

function clearSavedProgress() {
    localStorage.removeItem('questionnaire_progress');
}

// Save current section (manual save)
function saveCurrentSection() {
    const currentSection = shuffledSections[currentSectionIndex];
    const sectionAnswers = {};
    
    currentSection.questions.forEach((q, qIndex) => {
        const key = `${currentSectionIndex}-${qIndex}`;
        if (answers[key].answer) {
            sectionAnswers[key] = answers[key];
        }
    });
    
    // Check if at least one question is answered
    if (Object.keys(sectionAnswers).length === 0) {
        alert('Please answer at least one question in this section before saving.');
        return false;
    }
    
    // Save section to localStorage
    saveSectionToStorage(currentSectionIndex, sectionAnswers);
    
    // Also save overall progress
    saveProgress();
    
    alert(`Section "${currentSection.title}" has been saved successfully!`);
    return true;
}

function saveSectionToStorage(sectionIndex, sectionAnswers) {
    const sectionData = {
        sectionIndex: sectionIndex,
        sectionTitle: shuffledSections[sectionIndex].title,
        timestamp: new Date().toISOString(),
        userName: userName,
        userGender: userGender,
        answers: sectionAnswers
    };
    
    // Get existing section submissions
    let sectionSubmissions = JSON.parse(localStorage.getItem('questionnaire_section_submissions') || '[]');
    
    // Check if this section was already saved and update it
    const existingIndex = sectionSubmissions.findIndex(s => 
        s.userName === userName && s.sectionIndex === sectionIndex
    );
    
    if (existingIndex >= 0) {
        sectionSubmissions[existingIndex] = sectionData;
    } else {
        sectionSubmissions.push(sectionData);
    }
    
    // Save back to localStorage
    localStorage.setItem('questionnaire_section_submissions', JSON.stringify(sectionSubmissions));
}

// Next Section
function nextSection() {
    // NO VALIDATION - just save current progress and move on
    saveProgress();
    
    if (currentSectionIndex < shuffledSections.length - 1) {
        loadSection(currentSectionIndex + 1);
    } else {
        // Submit form
        submitForm();
    }
}

// Previous Section
function previousSection() {
    if (currentSectionIndex > 0) {
        // Save current progress before going back
        saveProgress();
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
    // NO VALIDATION - button is always enabled
    if (currentSectionIndex === shuffledSections.length - 1) {
        $('#nextBtn').html('Submit <i class="fas fa-check ms-2"></i>');
    } else {
        $('#nextBtn').html('Next Section <i class="fas fa-arrow-right ms-2"></i>');
    }
    
    // Button is always enabled
    $('#nextBtn').prop('disabled', false);
}

// Submit Form
function submitForm() {
    // Collect all answered questions
    const answeredQuestions = Object.values(answers).filter(a => a.answer !== null);
    
    if (answeredQuestions.length === 0) {
        alert('Please answer at least one question before submitting.');
        return;
    }
    
    // Prepare submission data
    const submissionData = {
        timestamp: new Date().toISOString(),
        userName: userName,
        userGender: userGender,
        responses: answeredQuestions,
        totalQuestionsAnswered: answeredQuestions.length
    };
    
    // Save to localStorage for you to view
    saveToLocalStorage(submissionData);
    
    // Clear saved progress after submission
    clearSavedProgress();
    
    // Stop auto-save
    if (autoSaveTimer) {
        clearInterval(autoSaveTimer);
    }
    
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

// Call this when loading a section
$(document).ready(function() {
    // Ready
});
