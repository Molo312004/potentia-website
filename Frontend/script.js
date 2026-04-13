// Registration Modal Handler
function initializeRegistrationModal() {
    const registrationModal = document.getElementById("registrationModal");
    const registrationForm = document.getElementById("registrationForm");
    
    // Check if user is already registered
    if (window.location.pathname.includes("scholarship.html") || window.location.href.includes("scholarship")) {
        const isRegistered = localStorage.getItem("scholarshipUserRegistered");
        
        if (!isRegistered) {
            // Show modal
            registrationModal.style.display = "flex";
        } else {
            // Hide modal
            registrationModal.style.display = "none";
        }
    }
    
    // Handle form submission
    if (registrationForm) {
        registrationForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                fullName: document.getElementById("fullName").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                school: document.getElementById("school").value
            };
            
            // Validate required fields
            if (!formData.fullName || !formData.email || !formData.phone || !formData.school) {
                alert("Please fill in all required fields (marked with *)");
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert("Please enter a valid email address");
                return;
            }
            
            // Validate phone format (exactly 10 digits, no letters allowed)
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(formData.phone) || formData.phone.length !== 10) {
                alert("Please enter a valid 10-digit phone number");
                return;
            }
            
            // Send data to backend
            const registerBtn = registrationForm.querySelector("button[type='submit']");
            registerBtn.disabled = true;
            registerBtn.textContent = "Registering...";
            
            fetch(CONFIG.API_BASE_URL + "/api/registrations/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.message && data.message.includes("successful")) {
                    // Store registration status in localStorage
                    localStorage.setItem("scholarshipUserRegistered", "true");
                    localStorage.setItem("scholarshipUserData", JSON.stringify(formData));
                    
                    // Hide modal
                    registrationModal.style.display = "none";
                    
                    // Reset form
                    registrationForm.reset();
                    registerBtn.disabled = false;
                    registerBtn.textContent = "Register & Continue";
                    
                    // Show success message
                    alert(`Welcome ${formData.fullName}! You are now registered for the scholarship test.`);
                } else {
                    alert(data.message || "Registration failed. Please try again.");
                    registerBtn.disabled = false;
                    registerBtn.textContent = "Register & Continue";
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Error connecting to server. Make sure the backend is running on " + CONFIG.API_BASE_URL);
                registerBtn.disabled = false;
                registerBtn.textContent = "Register & Continue";
            });
        });
    }
}

// Check if test has been taken
async function hasTestBeenTaken(testType) {
    const userData = JSON.parse(localStorage.getItem("scholarshipUserData"));
    if (!userData || !userData.email) return false;
    
    try {
        const response = await fetch(`${CONFIG.API_BASE_URL}/api/test-results/by-email/${userData.email}/test/${testType}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            return data.data && data.data.length > 0;
        }
    } catch (error) {
        console.error(`Error checking ${testType} test status:`, error);
    }
    
    return false;
}

// Lock test button if already taken
async function lockTestIfTaken(buttonElement, testType) {
    const hasTaken = await hasTestBeenTaken(testType);
    
    if (hasTaken) {
        // Disable button
        buttonElement.disabled = true;
        buttonElement.textContent = `✓ ${testType.toUpperCase()} Test Completed`;
        buttonElement.style.opacity = "0.6";
        buttonElement.style.cursor = "not-allowed";
        buttonElement.style.backgroundColor = "#888";
    }
}

// Test Button Handlers
async function initializeTestButtons() {
    const biologyBtn = document.querySelector(".biology-btn");
    const chemistryBtn = document.querySelector(".chemistry-btn");
    const physicsBtn = document.querySelector(".physics-btn");
    
    // Handle Biology Test Button
    if (biologyBtn) {
        lockTestIfTaken(biologyBtn, "Biology");
        
        biologyBtn.addEventListener("click", function() {
            if (this.disabled) {
                alert("You have already completed the Biology test. Each test can only be taken once.");
                return;
            }
            
            // Check if user is registered
            const isRegistered = localStorage.getItem("scholarshipUserRegistered");
            
            if (!isRegistered) {
                alert("Please register first to take the test");
                return;
            }
            
            // Redirect to biology test page
            window.location.href = "biology-test.html";
        });
    }
    
    // Handle Chemistry Test Button
    if (chemistryBtn) {
        lockTestIfTaken(chemistryBtn, "Chemistry");
        
        chemistryBtn.addEventListener("click", function() {
            if (this.disabled) {
                alert("You have already completed the Chemistry test. Each test can only be taken once.");
                return;
            }
            
            // Check if user is registered
            const isRegistered = localStorage.getItem("scholarshipUserRegistered");
            
            if (!isRegistered) {
                alert("Please register first to take the test");
                return;
            }
            
            // Redirect to chemistry test page
            window.location.href = "chemistry-test.html";
        });
    }
    
    // Handle Physics Test Button
    if (physicsBtn) {
        lockTestIfTaken(physicsBtn, "Physics");
        
        physicsBtn.addEventListener("click", function() {
            if (this.disabled) {
                alert("You have already completed the Physics test. Each test can only be taken once.");
                return;
            }
            
            // Check if user is registered
            const isRegistered = localStorage.getItem("scholarshipUserRegistered");
            
            if (!isRegistered) {
                alert("Please register first to take the test");
                return;
            }
            
            // ✅ Redirect to physics test page
            window.location.href = "physics-test.html";
        });
    }
}

// Show banner if all 3 tests are completed
async function checkAllTestsCompleted() {
    const banner = document.getElementById("allTestsCompletedBanner");
    if (!banner) return;

    const [bio, chem, phys] = await Promise.all([
        hasTestBeenTaken("Biology"),
        hasTestBeenTaken("Chemistry"),
        hasTestBeenTaken("Physics")
    ]);

    if (bio && chem && phys) {
        banner.style.display = "block";
    }
}

// Initialize on page load
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
        initializeRegistrationModal();
        initializeTestButtons();
        checkAllTestsCompleted();
    });
} else {
    initializeRegistrationModal();
    initializeTestButtons();
    checkAllTestsCompleted();
}

let autoScrollInterval;
let currentScroll = 0;

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) navLinks.classList.toggle("show");
}

function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = img.src;
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Close modal when clicking outside the image; also close mobile nav
window.onclick = function(event) {
    // Close gallery modal
    const modal = document.getElementById("imageModal");
    if (modal && event.target === modal) {
        modal.style.display = "none";
    }

    // Close mobile nav when clicking outside
    const navLinks = document.getElementById("navLinks");
    const menuToggle = document.querySelector(".menu-toggle");
    if (navLinks && navLinks.classList.contains("show") &&
        !navLinks.contains(event.target) &&
        menuToggle && !menuToggle.contains(event.target)) {
        navLinks.classList.remove("show");
    }
}

function scrollGallery(direction) {
    const gallery = document.getElementById("galleryGrid");
    const wrapper = document.querySelector(".gallery-wrapper");
    const scrollAmount = 290; // Image width (280px) + gap (10px)
    
    // Calculate max scroll - how many images fit in wrapper
    const visibleWidth = wrapper.offsetWidth;
    const imageWidth = 280;
    const gap = 10;
    const itemWidth = imageWidth + gap;
    const visibleItems = Math.floor(visibleWidth / itemWidth);
    const totalItems = gallery.querySelectorAll("img").length;
    const maxVisibleScroll = Math.max(0, totalItems - visibleItems);
    const maxScroll = maxVisibleScroll * scrollAmount;
    
    // Calculate current item position
    let currentItem = currentScroll / scrollAmount;
    currentItem += direction;
    currentItem = Math.max(0, Math.min(currentItem, maxVisibleScroll));
    currentScroll = currentItem * scrollAmount;
    
    gallery.style.transform = `translateX(-${currentScroll}px)`;
    
    // Update button states
    const prevBtn = document.querySelector(".gallery-prev");
    const nextBtn = document.querySelector(".gallery-next");
    
    prevBtn.disabled = currentItem === 0;
    nextBtn.disabled = currentItem >= maxVisibleScroll;
}

// Video Gallery Scrolling
let videoScroll = 0;

function scrollVideos(direction) {
    const videos = document.getElementById("videoGrid");
    const wrapper = document.querySelector(".video-wrapper");
    const scrollAmount = 320; // Video card width (300px) + gap (20px)
    
    // Calculate max scroll - how many videos fit in wrapper
    const visibleWidth = wrapper.offsetWidth;
    const videoWidth = 300;
    const gap = 20;
    const itemWidth = videoWidth + gap;
    const visibleItems = Math.floor(visibleWidth / itemWidth);
    const totalItems = videos.querySelectorAll(".video-card").length;
    const maxVisibleScroll = Math.max(0, totalItems - visibleItems);
    const maxScroll = maxVisibleScroll * scrollAmount;
    
    // Calculate current item position
    let currentItem = videoScroll / scrollAmount;
    currentItem += direction;
    currentItem = Math.max(0, Math.min(currentItem, maxVisibleScroll));
    videoScroll = currentItem * scrollAmount;
    
    videos.style.transform = `translateX(-${videoScroll}px)`;
    
    // Update button states
    const prevBtn = document.querySelector(".video-prev");
    const nextBtn = document.querySelector(".video-next");
    
    prevBtn.disabled = currentItem === 0;
    nextBtn.disabled = currentItem >= maxVisibleScroll;
}

// Initialize button states when page loads
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const galleryPrevBtn = document.querySelector(".gallery-prev");
        galleryPrevBtn.disabled = true; // Left button disabled at start
        
        const videoPrevBtn = document.querySelector(".video-prev");
        videoPrevBtn.disabled = true; // Left button disabled at start
    }, 100);
});

// Admin Login Functions
function openLoginModal(event) {
    event.preventDefault();
    const loginModal = document.getElementById("loginModal");
    loginModal.style.display = "flex";
    document.getElementById("loginError").textContent = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("username").focus();
}

function closeLoginModal() {
    const loginModal = document.getElementById("loginModal");
    loginModal.style.display = "none";
    document.getElementById("loginError").textContent = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function handleAdminLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("loginError");
    
    // Validate inputs
    if (!username || !password) {
        errorMsg.textContent = "Username and password are required.";
        return;
    }

    // Disable login button during request
    const loginBtn = event.target.querySelector("button[type='submit']");
    loginBtn.disabled = true;
    loginBtn.textContent = "Logging in...";

    // Send login request to backend
    fetch(CONFIG.API_BASE_URL + "/api/admin/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            // Successful login
            localStorage.setItem("adminToken", data.token);
            localStorage.setItem("adminUsername", data.username);
            localStorage.setItem("adminEmail", data.email);
            localStorage.setItem("adminId", data.adminId);
            localStorage.setItem("adminLoggedIn", "true");
            
            closeLoginModal();
            
            // Redirect to admin dashboard
            window.location.href = "admin-dashboard.html";
        } else {
            errorMsg.textContent = data.message || "Login failed. Please try again.";
            loginBtn.disabled = false;
            loginBtn.textContent = "Login";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        errorMsg.textContent = "Error connecting to server. Make sure the backend is running.";
        loginBtn.disabled = false;
        loginBtn.textContent = "Login";
    });
}

// Close login modal when clicking outside
window.addEventListener("click", function(event) {
    const loginModal = document.getElementById("loginModal");
    if (event.target == loginModal) {
        closeLoginModal();
    }
});