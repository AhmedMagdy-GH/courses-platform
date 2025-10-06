// Course data
const courses = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        category: "programming",
        description: "Learn HTML, CSS, JavaScript, Node.js, React, MongoDB and more! This comprehensive course will take you from beginner to full-stack developer.",
        instructor: "John Smith",
        price: "$99",
        rating: 4.8,
        students: 15420,
        duration: "52 hours",
        image: "Images/Featured-Courses/Course-1.avif",
        featured: true,
        learningObjectives: [
            "Build responsive websites using HTML, CSS, and JavaScript",
            "Create full-stack web applications with Node.js and React",
            "Work with databases using MongoDB",
            "Deploy applications to production servers",
            "Use Git and GitHub for version control"
        ]
    },
    {
        id: 2,
        title: "UI/UX Design Masterclass",
        category: "design",
        description: "Master the art of user interface and user experience design. Learn design principles, prototyping, and industry-standard tools.",
        instructor: "Sarah Johnson",
        price: "$79",
        rating: 4.9,
        students: 8930,
        duration: "38 hours",
        image: "Images/Featured-Courses/Course-2.avif",
        featured: true,
        learningObjectives: [
            "Understand user-centered design principles",
            "Create wireframes and prototypes",
            "Master Figma and Adobe XD",
            "Conduct user research and testing",
            "Build a professional design portfolio"
        ]
    },
    {
        id: 3,
        title: "Digital Marketing Strategy",
        category: "marketing",
        description: "Learn how to create and execute effective digital marketing campaigns across multiple platforms and channels.",
        instructor: "Mike Davis",
        price: "$69",
        rating: 4.7,
        students: 12350,
        duration: "28 hours",
        image: "Images/Featured-Courses/Course-3.avif",
        featured: true,
        learningObjectives: [
            "Develop comprehensive marketing strategies",
            "Master social media marketing",
            "Learn SEO and content marketing",
            "Understand Google Ads and Facebook Ads",
            "Analyze marketing performance with analytics"
        ]
    },
    {
        id: 4,
        title: "Machine Learning with Python",
        category: "ai",
        description: "Dive into the world of artificial intelligence and machine learning using Python. Learn algorithms, data analysis, and practical applications.",
        instructor: "Dr. Emily Chen",
        price: "$129",
        rating: 4.6,
        students: 6780,
        duration: "45 hours",
        image: "Images/Featured-Courses/Course-4.avif",
        featured: false,
        learningObjectives: [
            "Understand machine learning fundamentals",
            "Work with popular Python libraries (NumPy, Pandas, Scikit-learn)",
            "Build and train machine learning models",
            "Implement deep learning with TensorFlow",
            "Deploy ML models to production"
        ]
    },
    {
        id: 5,
        title: "Business Strategy & Leadership",
        category: "business",
        description: "Develop essential business leadership skills and learn how to create winning business strategies in today's competitive market.",
        instructor: "Robert Taylor",
        price: "$89",
        rating: 4.5,
        students: 9420,
        duration: "32 hours",
        image: "Images/Featured-Courses/Course-5.avif",
        featured: false,
        learningObjectives: [
            "Develop strategic thinking skills",
            "Learn effective leadership techniques",
            "Understand financial planning and analysis",
            "Master team management and communication",
            "Create sustainable business models"
        ]
    },
    {
        id: 6,
        title: "Photography Fundamentals",
        category: "photography",
        description: "Master the art of photography from basics to advanced techniques. Learn composition, lighting, and post-processing skills.",
        instructor: "Lisa Anderson",
        price: "$59",
        rating: 4.8,
        students: 11200,
        duration: "24 hours",
        image: "Images/Featured-Courses/Course-6.avif",
        featured: false,
        learningObjectives: [
            "Understand camera settings and controls",
            "Master composition and framing techniques",
            "Learn lighting principles and techniques",
            "Edit photos using Lightroom and Photoshop",
            "Build a professional photography portfolio"
        ]
    },
    {
        id: 7,
        title: "React & Redux Development",
        category: "programming",
        description: "Build modern, scalable web applications using React and Redux. Learn hooks, state management, and best practices.",
        instructor: "David Wilson",
        price: "$109",
        rating: 4.7,
        students: 7650,
        duration: "42 hours",
        image: "Images/Featured-Courses/Course-7.avif",
        featured: false,
        learningObjectives: [
            "Master React fundamentals and hooks",
            "Implement state management with Redux",
            "Build responsive user interfaces",
            "Work with APIs and async data",
            "Deploy React applications"
        ]
    },
    {
        id: 8,
        title: "Graphic Design with Adobe Creative Suite",
        category: "design",
        description: "Learn professional graphic design using Adobe Photoshop, Illustrator, and InDesign. Create stunning visual designs.",
        instructor: "Maria Garcia",
        price: "$79",
        rating: 4.6,
        students: 5430,
        duration: "36 hours",
        image: "Images/Featured-Courses/Course-8.jpeg",
        featured: false,
        learningObjectives: [
            "Master Adobe Photoshop for photo editing",
            "Create vector graphics with Illustrator",
            "Design layouts with InDesign",
            "Understand color theory and typography",
            "Develop a professional design portfolio"
        ]
    }
];



// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }

    return starsHTML;
}

// Create course card HTML
function createCourseCard(course) {
    return `
        <div class="course-card" onclick="goToCourseDetails(${course.id})" >
            <img src="${course.image}" alt="${course.title}" class="course-image">
            <div class="course-content">
                <div class="course-category">${course.category.charAt(0).toUpperCase() + course.category.slice(1)}</div>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <div class="course-instructor">By ${course.instructor}</div>
                    <div class="course-rating">
                        <div class="stars">${generateStars(course.rating)}</div>
                        <span>${course.rating}</span>
                    </div>
                </div>
                <div class="course-footer">
                    <div class="course-price">${course.price}</div>
                    <button class="enroll-btn" onclick="event.stopPropagation(); enrollInCourse('${course.title}');">
                        <i class="fas fa-play"></i> Enroll
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Display featured courses on homepage
function displayFeaturedCourses() {
    const featuredCoursesGrid = document.getElementById('featured-courses-grid');
    if (featuredCoursesGrid) {
        const featuredCourses = courses.filter(course => course.featured);
        featuredCoursesGrid.innerHTML = featuredCourses.map(course => createCourseCard(course)).join('');
    }
}

// Display all courses on courses page
function displayAllCourses(coursesToShow = courses) {
    const coursesGride = document.getElementById('courses-grid');
    if (coursesGride) {
        coursesGride.innerHTML = coursesToShow.map(course => createCourseCard(course)).join('');
        updateResultsCount(coursesToShow.length);
    }
}

// Update results count
function updateResultsCount(count) {
    const resultCount = document.getElementById('result-count');
    if (resultCount) {
        resultCount.textContent = `showing ${count} courses${count !== 1 ? 's' : ''}`;
    }
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('course-search');
    const categoryFilter = document.getElementById('category-filter');

    if (searchInput && categoryFilter) {
        function filterCourses() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;

            let filteredCourses = courses.filter(course => {
                const matchesSearch = course.title.toLowerCase().includes(searchTerm) ||
                    course.description.toLowerCase().includes(searchTerm) ||
                    course.instructor.toLowerCase().includes(searchTerm);
                const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
                return matchesSearch && matchesCategory;
            });
            displayAllCourses(filteredCourses);
        }
        searchInput.addEventListener('input', filterCourses);
        categoryFilter.addEventListener('change', filterCourses);
    }
}

// Handle URL parameters for category filtering
function HandleURLParams(){
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if(category){
        const categoryFiter = document.getElementById('category-filter');
        if(categoryFiter){
            categoryFiter.value = category;
            const filteredCourses = courses.filter(course => course.category === category );
            displayAllCourses(filteredCourses);
        }
    }
}

// Navigate to course details
function goToCourseDetails(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        // Store course data in localStorage for the details page
        localStorage.setItem('selectedCourse', JSON.stringify(course));
        window.location.href = 'course-details.html';
    }
}

// Load course details page
function loadCourseDetails() {
    const selectedCourse = localStorage.getItem('selectedCourse');
    if (!selectedCourse) {
        window.location.href = 'courses.html';
        return;
    }
    const course = JSON.parse(selectedCourse);

    // Update page elements
    document.getElementById('course-breadcrumb').textContent = course.title;
    document.getElementById('course-details-image').src = course.image;
    document.getElementById('course-details-image').alt = course.title;
    document.getElementById('course-details-category').textContent = course.category.charAt(0).toUpperCase() + course.category.slice(1);
    document.getElementById('course-details-title').textContent = course.title;
    document.getElementById('course-details-description').textContent = course.description;
    document.getElementById('course-details-instructor').textContent = course.instructor;
    document.getElementById('course-details-stars').innerHTML = generateStars(course.rating);
    document.getElementById('course-details-rating').textContent = course.rating;
    document.getElementById('course-details-students').textContent = course.students.toLocaleString();
    document.getElementById('course-details-duration').textContent = course.duration;
    document.getElementById('course-details-price').textContent = course.price;

    // Update learning objectives
    const learningObjectivesList = document.getElementById('learning-objectives');
    if (learningObjectivesList && course.learningObjectives) {
        learningObjectivesList.innerHTML = course.learningObjectives.map(objective =>
            `<li>${objective}</li>`).join('');
    }

    // Set up enroll button
    const enrollBtn = document.getElementById('enroll-btn');
    if (enrollBtn) {
        enrollBtn.addEventListener('click', () => enrollInCourse(course.title));
    }
}


// Enroll in course
function enrollInCourse(courseTitle) {
    alert(`Congratulations! You have successfully enrolled in "${courseTitle}". You can now access all course materials and start learning.`);
}

// Tab functionality for course details
function setTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // Remove active class from all tabs and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked tab and corresponding pane
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Auth form functionality
function setupAuthForms() {
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginTab && registerTab && loginForm && registerForm) {
        loginTab.addEventListener('click', () => {
            loginTab.classList.add('active');
            registerTab.classList.remove('active');
            loginForm.classList.add('active');
            registerForm.classList.remove('active');
        });
        
        registerTab.addEventListener('click', () => {
            registerTab.classList.add('active');
            loginTab.classList.remove('active');
            registerForm.classList.add('active');
            loginForm.classList.remove('active');
        });
        
        // Handle form submissions
        loginForm.addEventListener('submit', handleLogin);
        registerForm.addEventListener('submit', handleRegister);
    }
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        alert('Login successful! Welcome back.');
        window.location.href = 'index.html';
    }
}

// Handle registration
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (name && email && password) {
        alert('Registration successful! Welcome to EduLearn.');
        window.location.href = 'index.html';
    }
}

// Smooth scrolling for anchor links

function setupSmoothScrolling(){
    document.querySelectorAll('a[href="#"]').forEach(anchor =>{
        anchor.addEventListener('click', function(e){
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize page-specific functionality
function initializePage(){
    const currentPage = window.location.pathname.split('/').pop();

    switch(currentPage){
        case 'index.html':
        case '' :
            displayFeaturedCourses();
            setupSmoothScrolling();
            break;

        case 'courses.html':
            displayAllCourses();
            setupSearch();
            HandleURLParams();
            break;

        case 'course-details.html':
            loadCourseDetails();
            setTabs();
            break;

        case 'login.html':
            setupAuthForms();
            break;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);


// Add intersection observer for scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe course cards for animation
    document.querySelectorAll('.course-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Set up scroll animations after course cards are loaded
setTimeout(setupScrollAnimations, 100);