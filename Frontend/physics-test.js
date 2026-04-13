// Physics Test Logic
let currentQuestion = 0;
let userAnswers = {};
let testStartTime = null;

// Check if user has already taken this test
async function checkIfTestAlreadyTaken() {
    const userData = JSON.parse(localStorage.getItem("scholarshipUserData"));
    if (!userData) return false;

    try {
        const response = await fetch(`${CONFIG.API_BASE_URL}/api/test-results/by-email/${userData.email}/test/Physics`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
            const data = await response.json();
            if (data.data && data.data.length > 0) return true;
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
        <div style="text-align: center; padding: 40px; background: #e8f5e9; border-radius: 10px; margin: 20px;">
            <h2 style="color: #1a6b3b; margin-bottom: 20px;">You've Already Taken This Test</h2>
            <p style="font-size: 18px; color: #333; margin-bottom: 30px;">We have recorded your previous attempt. You can only take each test once.</p>

            <div style="background: white; padding: 30px; border-radius: 10px; display: inline-block; margin-bottom: 30px;">
                <h3 style="color: #1a6b3b; margin-bottom: 20px;">Your Score</h3>
                <div style="margin: 15px 0;">
                    <p><strong>Total Marks:</strong> <span style="color: #1a6b3b; font-size: 20px;">${testResult.totalMarks}/80</span></p>
                    <p><strong>Correct Answers:</strong> ${testResult.correctAnswers}</p>
                    <p><strong>Wrong Answers:</strong> ${testResult.wrongAnswers}</p>
                    <p><strong>Unattempted:</strong> ${testResult.unattempted}</p>
                    <p><strong>Accuracy:</strong> <span style="color: #1a6b3b;">${((testResult.correctAnswers / 20) * 100).toFixed(2)}%</span></p>
                    <p><strong>Submitted:</strong> ${new Date(testResult.submittedAt).toLocaleString()}</p>
                </div>
            </div>

            <a href="scholarship.html" style="display: inline-block; padding: 12px 30px; background-color: #1a6b3b; color: white; text-decoration: none; border-radius: 5px; font-size: 16px; margin-top: 20px;">Back to Scholarship Page</a>
        </div>
    `;
}

// Initialize the test
async function initializeTest() {
    const isRegistered = localStorage.getItem("scholarshipUserRegistered");
    if (!isRegistered) {
        alert("Please register first on the scholarship page");
        window.location.href = "scholarship.html";
        return;
    }

    const alreadyTaken = await checkIfTestAlreadyTaken();
    if (alreadyTaken) {
        const userData = JSON.parse(localStorage.getItem("scholarshipUserData"));
        try {
            const response = await fetch(`${CONFIG.API_BASE_URL}/api/test-results/by-email/${userData.email}/test/Physics`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
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
    loadQuestion(0);
    document.addEventListener("keydown", handleKeyPress);
}

function loadQuestion(index) {
    if (index < 0 || index >= physicsQuestions.length) return;

    currentQuestion = index;
    const question = physicsQuestions[index];

    const progress = ((index + 1) / physicsQuestions.length) * 100;
    document.getElementById("progressBar").style.width = progress + "%";
    document.getElementById("currentQuestion").textContent = index + 1;

    let html = `
        <div class="question-card">
            <div class="question-meta">
                <span class="question-category">${question.category}</span>
                <span class="question-number">Q.${question.id}</span>
            </div>

            <div class="question-text">${question.question}</div>

            <div class="options-container">
    `;

    question.options.forEach(option => {
        const selected = userAnswers[index] === option.value ? "selected" : "";

        html += `
            <div class="option ${selected}" onclick="selectOption(${index}, '${option.value}')">
                <input type="radio" ${selected ? "checked" : ""}>
                <label>${option.value}. ${option.text}</label>
            </div>
        `;
    });

    html += `</div></div>`;

    document.getElementById("questionSection").innerHTML = html;

    document.getElementById("prevBtn").disabled = index === 0;
    document.getElementById("nextBtn").disabled = index === physicsQuestions.length - 1;
}

function selectOption(index, answer) {
    userAnswers[index] = answer;
    loadQuestion(index);
}

function nextQuestion() {
    loadQuestion(currentQuestion + 1);
}

function previousQuestion() {
    loadQuestion(currentQuestion - 1);
}

function handleKeyPress(e) {
    if (e.key === "ArrowRight") nextQuestion();
    if (e.key === "ArrowLeft") previousQuestion();
}

function calculateMarks() {
    let correct = 0, wrong = 0, unattempted = 0, totalMarks = 0;

    physicsQuestions.forEach((q, i) => {
        const userAnswer = userAnswers[i];
        if (userAnswer === undefined) {
            unattempted++;
        } else if (userAnswer === q.correctAnswer) {
            correct++;
            totalMarks += 4;
        } else {
            wrong++;
            totalMarks -= 1;
        }
    });

    totalMarks = Math.max(0, totalMarks);
    return { correct, wrong, unattempted, totalMarks };
}

function submitTest() {
    const confirmed = confirm("Are you sure you want to submit the test? You cannot change your answers after submission.");
    if (!confirmed) return;

    const marks = calculateMarks();
    const userData = JSON.parse(localStorage.getItem("scholarshipUserData"));

    if (!userData) {
        alert("Error: User data not found. Please register first.");
        return;
    }

    const testDuration = Math.floor((new Date() - testStartTime) / 1000);

    const submissionData = {
        fullName: userData.fullName,
        email: userData.email,
        phone: userData.phone,
        school: userData.school,
        testType: "Physics",
        totalQuestions: 20,
        correctAnswers: marks.correct,
        wrongAnswers: marks.wrong,
        unattempted: marks.unattempted,
        totalMarks: marks.totalMarks,
        maxMarks: 80,
        duration: testDuration,
        submittedAt: new Date().toISOString()
    };

    fetch(CONFIG.API_BASE_URL + "/api/test-results/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData)
    })
    .then(response => {
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        return response.json();
    })
    .then(data => {
        if (data.status === "success") {
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

function showResultModal(marks) {
    document.getElementById("totalQuestionsResult") && (document.getElementById("totalQuestionsResult").textContent = "20");
    document.getElementById("correctAnswersResult").textContent = marks.correct;
    document.getElementById("wrongAnswersResult").textContent = marks.wrong;
    document.getElementById("unattemptedResult").textContent = marks.unattempted;
    document.getElementById("totalMarksResult").textContent = marks.totalMarks;

    document.getElementById("resultModal").style.display = "flex";
}

function closeResultModal() {
    window.location.href = "scholarship.html";
}

// Initialize test when page loads
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeTest);
} else {
    initializeTest();
}

initializeTest();