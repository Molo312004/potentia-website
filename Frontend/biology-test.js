// Biology Test Logic
let currentQuestion = 0;
let userAnswers = {};
let testStartTime = null;

// Check if user has already taken this test
async function checkIfTestAlreadyTaken() {
    const userData = JSON.parse(localStorage.getItem("scholarshipUserData"));
    if (!userData) return false;
    
    try {
        const response = await fetch(`${CONFIG.API_BASE_URL}/api/test-results/by-email/${userData.email}/test/Biology`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            // If results exist for this test type, user has already taken it
            if (data.data && data.data.length > 0) {
                return true;
            }
        }
    } catch (error) {
        console.error("Error checking test status:", error);
    }
    
    return false;
}

// Show message when test already taken
function showAlreadyTakenMessage(testResult) {
    const mainContent = document.querySelector("main");
    mainContent.innerHTML = `
        <div style="text-align: center; padding: 40px; background: #f0f4f0; border-radius: 10px; margin: 20px;">
            <h2 style="color: #1B5E20; margin-bottom: 20px;">You've Already Taken This Test</h2>
            <p style="font-size: 18px; color: #333; margin-bottom: 30px;">We have recorded your previous attempt. You can only take each test once.</p>
            
            <div style="background: white; padding: 30px; border-radius: 10px; display: inline-block; margin-bottom: 30px;">
                <h3 style="color: #1B5E20; margin-bottom: 20px;">Your Score</h3>
                <div style="margin: 15px 0;">
                    <p><strong>Total Marks:</strong> <span style="color: #1B5E20; font-size: 20px;">${testResult.totalMarks}/200</span></p>
                    <p><strong>Correct Answers:</strong> ${testResult.correctAnswers}</p>
                    <p><strong>Wrong Answers:</strong> ${testResult.wrongAnswers}</p>
                    <p><strong>Unattempted:</strong> ${testResult.unattempted}</p>
                    <p><strong>Accuracy:</strong> <span style="color: #1B5E20;">${((testResult.correctAnswers / 50) * 100).toFixed(2)}%</span></p>
                    <p><strong>Submitted:</strong> ${new Date(testResult.submittedAt).toLocaleString()}</p>
                </div>
            </div>
            
            <a href="scholarship.html" style="display: inline-block; padding: 12px 30px; background-color: #1B5E20; color: white; text-decoration: none; border-radius: 5px; font-size: 16px; margin-top: 20px;">Back to Scholarship Page</a>
        </div>
    `;
}

// Initialize the test
async function initializeTest() {
    // Check if user is registered
    const isRegistered = localStorage.getItem("scholarshipUserRegistered");
    if (!isRegistered) {
        alert("Please register first on the scholarship page");
        window.location.href = "scholarship.html";
        return;
    }
    
    // Check if user has already taken this test
    const alreadyTaken = await checkIfTestAlreadyTaken();
    if (alreadyTaken) {
        // Fetch and display their previous result
        const userData = JSON.parse(localStorage.getItem("scholarshipUserData"));
        try {
            const response = await fetch(`${CONFIG.API_BASE_URL}/api/test-results/by-email/${userData.email}/test/Biology`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                if (data.data && data.data.length > 0) {
                    showAlreadyTakenMessage(data.data[0]);
                    return;
                }
            }
        } catch (error) {
            console.error("Error fetching test result:", error);
        }
    }
    
    testStartTime = new Date();
    
    // Load first question
    loadQuestion(0);
    
    // Add event listeners
    document.addEventListener("keydown", handleKeyPress);
}

// Load a specific question
function loadQuestion(index) {
    if (index < 0 || index >= biologyQuestions.length) return;
    
    currentQuestion = index;
    const question = biologyQuestions[index];
    const questionSection = document.getElementById("questionSection");
    
    // Update progress bar
    const progress = ((index + 1) / biologyQuestions.length) * 100;
    document.getElementById("progressBar").style.width = progress + "%";
    document.getElementById("currentQuestion").textContent = `Question ${index + 1}`;
    
    // Build question HTML
    let html = `
        <div class="question-card">
            <div class="question-meta">
                <span class="question-category">${question.category}</span>
                <span class="question-number">Q.${question.id}</span>
            </div>
            <div class="question-text">
                ${question.question}
            </div>
            <div class="options-container">
    `;
    
    // Add options
    question.options.forEach((option, idx) => {
        const isSelected = userAnswers[index] === option.value;
        const selectedClass = isSelected ? 'selected' : '';
        
        html += `
            <div class="option ${selectedClass}" onclick="selectOption(${index}, '${option.value}')">
                <input type="radio" name="option" value="${option.value}" ${isSelected ? 'checked' : ''}>
                <label>${option.value}. ${option.text}</label>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    questionSection.innerHTML = html;
    
    // Update button states
    document.getElementById("prevBtn").disabled = index === 0;
    document.getElementById("nextBtn").disabled = index === biologyQuestions.length - 1;
    document.getElementById("nextBtn").textContent = index === biologyQuestions.length - 1 ? "Last Question" : "Next →";
}

// Select an option
function selectOption(questionIndex, answer) {
    userAnswers[questionIndex] = answer;
    
    // Update UI
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.classList.remove("selected");
        const radio = option.querySelector("input");
        radio.checked = false;
    });
    
    // Mark as selected
    event.currentTarget.classList.add("selected");
    const radio = event.currentTarget.querySelector("input");
    radio.checked = true;
}

// Navigate between questions
function nextQuestion() {
    if (currentQuestion < biologyQuestions.length - 1) {
        loadQuestion(currentQuestion + 1);
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        loadQuestion(currentQuestion - 1);
    }
}

// Handle keyboard navigation
function handleKeyPress(event) {
    if (event.key === "ArrowRight") {
        nextQuestion();
    } else if (event.key === "ArrowLeft") {
        previousQuestion();
    }
}



// Calculate marks
function calculateMarks() {
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;
    let totalMarks = 0;
    
    biologyQuestions.forEach((question, idx) => {
        const userAnswer = userAnswers[idx];
        
        if (userAnswer === undefined) {
            unattempted++;
        } else if (userAnswer === question.correctAnswer) {
            correct++;
            totalMarks += 4;
        } else {
            wrong++;
            totalMarks -= 1;
        }
    });
    
    // Ensure marks don't go below 0
    totalMarks = Math.max(0, totalMarks);
    
    return { correct, wrong, unattempted, totalMarks };
}

// Submit the test
function submitTest() {
    const confirmed = confirm("Are you sure you want to submit the test? You cannot change your answers after submission.");
    
    if (!confirmed) return;
    
    const marks = calculateMarks();
    const userData = JSON.parse(localStorage.getItem("scholarshipUserData"));
    
    if (!userData) {
        alert("Error: User data not found. Please register first.");
        return;
    }
    
    const testDuration = Math.floor((new Date() - testStartTime) / 1000); // in seconds
    
    // Prepare submission data
    const submissionData = {
        fullName: userData.fullName,
        email: userData.email,
        phone: userData.phone,
        school: userData.school,
        testType: "Biology",
        totalQuestions: 50,
        correctAnswers: marks.correct,
        wrongAnswers: marks.wrong,
        unattempted: marks.unattempted,
        totalMarks: marks.totalMarks,
        maxMarks: 200,
        duration: testDuration,
        submittedAt: new Date().toISOString()
    };
    
    // Send to backend
    fetch(CONFIG.API_BASE_URL + "/api/test-results/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(submissionData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.status === "success") {
            // Show result modal
            showResultModal(marks);
        } else {
            alert("Error: " + (data.message || "Failed to submit test"));
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error submitting test: " + error.message + ". Make sure the backend is running on " + CONFIG.API_BASE_URL);
    });
}

// Show result modal
function showResultModal(marks) {
    document.getElementById("totalQuestionsResult").textContent = "50";
    document.getElementById("correctAnswersResult").textContent = marks.correct;
    document.getElementById("wrongAnswersResult").textContent = marks.wrong;
    document.getElementById("unattemptedResult").textContent = marks.unattempted;
    document.getElementById("totalMarksResult").textContent = marks.totalMarks;
    
    document.getElementById("resultModal").style.display = "flex";
}

// Navigate functions
function goBackToTests() {
    window.location.href = "scholarship.html";
}

function goHome() {
    window.location.href = "index.html";
}

// Close review modal when clicking outside
window.onclick = function(event) {
    const reviewModal = document.getElementById("reviewModal");
    if (event.target === reviewModal) {
        reviewModal.style.display = "none";
    }
    
    const resultModal = document.getElementById("resultModal");
    if (event.target === resultModal) {
        // Don't allow closing result modal by clicking outside
    }
};

// Initialize on page load
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeTest);
} else {
    initializeTest();
}
