// ===== CV TOGGLE =====
const cvFiles = {
    dev: { path: 'assets/Eva_Tsatsi_Software_Developer_CV.pdf', filename: 'Eva_Tsatsi_Software_Developer_CV.pdf' },
    cloud: { path: 'assets/Eva_Tsatsi_Cloud_Engineer_CV.pdf', filename: 'Eva_Tsatsi_Cloud_Engineer_CV.pdf' }
};

const downloadCvBtn = document.getElementById('download-cv-btn');
const viewCvBtn = document.getElementById('view-cv-btn');

document.querySelectorAll('.cv-toggle-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.cv-toggle-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const cv = cvFiles[this.getAttribute('data-cv')];
        downloadCvBtn.setAttribute('href', cv.path);
        downloadCvBtn.setAttribute('download', cv.filename);
        viewCvBtn.setAttribute('href', cv.path);
    });
});

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('theme-toggle');
const bodyElement = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light-mode';
bodyElement.classList.add(currentTheme);
updateThemeToggle();

themeToggle.addEventListener('click', function() {
    if (bodyElement.classList.contains('light-mode')) {
        bodyElement.classList.remove('light-mode');
        bodyElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        bodyElement.classList.remove('dark-mode');
        bodyElement.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
    updateThemeToggle();
});

function updateThemeToggle() {
    if (bodyElement.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light';
    } else {
        themeToggle.textContent = '🌙 Dark';
    }
}

// ===== PROJECTS DATA =====
const projectsData = [
    {
        id: 1,
        title: "College Learning Management System",
        category: "backend",
        tech: ["ASP.NET Core MVC", "SQL", "C#", "Entity Framework"],
        description: "Problem: Institutions relying on manual or ad hoc processes for enrollment and course management face access-control gaps and data integrity risks. Solution: Built a full-stack ASP.NET Core MVC web application with role-based access control, secure authentication, and CRUD-driven course/enrollment management backed by Entity Framework and SQL Server. Outcome: A working multi-role system (student/instructor/admin) demonstrating secure, database-backed web architecture — the same pattern I now apply on real client and production work.",
        image: "assets/images/CollegeLMS.png",
        github: "https://github.com/Evesprogram/A-College-LMS-Application"
    },
    {
        id: 5,
        title: "Fleet Management Dashboard",
        category: "desktop",
        tech: ["C#", "Windows Forms", "SQL", "Data Visualization"],
        description: "Problem: Potent Conceptials (Pty) Ltd had no centralized way to monitor fuel efficiency, vehicle location, or driver safety across their fleet — risks like driver fatigue, illness, or hijacking situations, and cost drains like poor route planning and fuel waste, went unseen until it was too late. Solution: Built Certiflow360, a C# WinForms desktop application with a SQL Server backend and live GPS/mapping via Leaflet, plus an alerting system — laying the platform for fuel-intelligence tracking, smart route optimization, and driver-safety monitoring as the system expands. Outcome: A production system now in active use, giving fleet managers real-time visibility instead of reactive guesswork, later expanded with a companion Blazor Server web dashboard and automated email alerting.",
        image: "assets/images/FleetManagement.png",
        github: "https://github.com/Evesprogram/FleetManagement-Application"
    },
    {
        id: 9,
        title: "First Keys Advisory — Property Services Website",
        category: "web",
        tech: ["HTML5", "CSS3", "JavaScript", "WhatsApp Business API", "Vercel"],
        description: "Problem: A registered South African estate agent needed a professional web presence with a low-friction way for prospective clients to make contact. Solution: Built and deployed a responsive marketing site with a click-to-WhatsApp booking flow as the primary conversion path, a floating WhatsApp button, and a structured enquiry form with type-based routing. Outcome: Live, client-facing site that gets a visitor from 'interested' to 'conversation started' in one tap, with zero form friction.",
        image: "assets/images/FirstKeysAdvisory.png",
        github: "https://github.com/Evesprogram/First-Keys-Advisory",
        demo: "https://first-keys-advisory.vercel.app/"
    },
    {
        id: 10,
        title: "DCF Research Institute — Clinical Data Quality Dashboard",
        category: "analytics",
        tech: ["Power BI", "DAX", "Excel/CSV", "Data Analysis"],
        description: "Problem: A clinical research organization had 420 recurring Data Correction Forms (DCFs) raised between 2022–2025, with no clear visibility into why errors kept happening or which sites were driving them. Solution: Built Power BI dashboards tracking trigger sources, error categories, site performance, and turnaround time, then delivered a corrective-action plan to stakeholders. Outcome: Found that 98.3% of errors were pre-analytical and that just 3 sites accounted for 65% of all DCFs; median resolution time improved from 19 days (2022) to 6 days (2024).",
        image: "assets/images/DCFResearchInstitute.png",
        github: "https://github.com/Evesprogram/DCF-Research-Institute"
    },
    {
        id: 6,
        title: "Power BI Dashboard",
        category: "analytics",
        tech: ["Power BI", "Data Transformation", "DAX", "SQL"],
        description: "Problem: Raw operational data is hard to act on without structure — stakeholders needed to see trends and KPIs at a glance rather than parsing spreadsheets. Solution: Cleaned and transformed raw datasets, then built interactive Power BI dashboards with DAX-driven KPI measures for reporting. Outcome: Turned static spreadsheet data into a tool stakeholders could use directly for decision-making, without needing to interpret raw numbers themselves.",
        image: "assets/images/PowerBI-Dashboard.png",
        github: "#"
    },
    {
        id: 2,
        title: "College Management System",
        category: "desktop",
        tech: ["C#", ".NET 8", "Windows Forms", "SQL Server", "Microsoft.Data.SqlClient", "EPPlus"],
        description: "Problem: Manually tracking student marks, attendance, and administrative records doesn't scale — no role separation, no reporting, no reusable admin tooling, and a high risk of errors or lost paperwork. Solution: Rebuilt from a single-form Student Management System into a full College Management System with role-based login (Admin/Lecturer), a central dashboard, and CRUD across Students, Lecturers, Courses, Modules, and Departments — including marks and attendance tracking — with reusable print-preview and Excel/CSV export built once via a shared BaseForm layer. Outcome: Reduces manual administrative work by centralizing marks, attendance, and record-keeping in one role-aware system instead of paper or disconnected spreadsheets.",
        image: "assets/images/College-app.png",
        github: "https://github.com/Evesprogram/CollegeApplication"
    },
    {
        id: 4,
        title: "Teller Application",
        category: "desktop",
        tech: ["C#", "Windows Forms", "OOP"],
        description: "Problem: Understanding how real banking systems handle multi-step transactions, validation, and state safely is hard to learn without building one. Solution: Built a banking simulation in C#/WinForms covering account management, transaction logging, balance tracking, and edge-case error handling across multi-step workflows. Outcome: Solidified OOP and business-logic design skills directly transferable to transactional, data-integrity-sensitive systems.",
        image: "assets/images/Teller-App.png",
        github: "#"
    },
    {
        id: 7,
        title: "Weather Dashboard",
        category: "web",
        tech: ["JavaScript", "HTML5", "CSS3", "REST API", "Async/Await"],
        description: "Problem: Needed a first real-world project to prove out JavaScript fundamentals and API consumption beyond tutorials. Solution: Built a responsive weather app consuming the Open-Meteo REST API with async/await, dynamic UI updates, and local storage for user preferences. Outcome: My first shipped web project — solidified the JS and API-integration fundamentals that every later project builds on.",
        image: "assets/images/weather-Dashboard.png",
        github: "https://github.com/Evesprogram/Weather-App-DashBoard",
        demo: "https://weather-app-dash-board.vercel.app/"
    },
    {
        id: 11,
        title: "Mini Budget Tracker",
        category: "web",
        tech: ["JavaScript (ES6)", "HTML5", "CSS3", "Chart.js", "Local Storage"],
        description: "Problem: Personal finance tools are often too simple (no goals or budgets) or too complex for everyday use — wanted something lightweight that still supports real budgeting behavior. Solution: Built a budget tracker with category-based expense logging, savings goals, dynamic Chart.js visualizations, and local storage persistence, with unit tests covering the core calculation logic. Outcome: A working personal tool, plus practice writing tested, maintainable JS logic rather than just UI code.",
        image: "assets/images/MiniBudgetTracker.png",
        github: "https://github.com/Evesprogram/Mini-Budget-Tracker"
    },
    {
        id: 8,
        title: "To-Do List Application",
        category: "web",
        tech: ["JavaScript", "DOM", "Local Storage", "HTML5"],
        description: "Problem: Needed a focused project to learn DOM manipulation and state handling without a framework doing it for me. Solution: Built a task manager with add/edit/delete/complete functionality, using vanilla DOM manipulation and local storage for persistence. Outcome: Built the JavaScript interactivity and event-handling foundation that carried into every project since.",
        image: "assets/images/To-do-List.png",
        github: "https://github.com/Evesprogram/To-do-App",
        demo: "https://to-do-app-murex-delta-27.vercel.app/"
    }
];

// ===== EXPERIENCE DATA =====
const experienceData = [
    {
        role: "Junior Software Engineer (WIL)",
        company: "4IRI",
        period: "June 2026",
        highlights: [
            "Independently designed and built Certiflow360, a full-stack fleet management system for client Potent Conceptials (Pty) Ltd — delivering both front-end and back-end as a production-ready system",
            "Built a C# WinForms desktop app with SQL Server backend and live GPS mapping, plus a companion Blazor Server web dashboard with real-time KPIs and automated email alerting",
            "Delivered a fully functional production system within a short, high-intensity engagement window"
        ]
    },
    {
        role: "Junior Software Developer (WIL)",
        company: "Foci Group",
        period: "Nov 2025 – Present",
        highlights: [
            "Collaborated with development team on feature implementation and bug fixes",
            "Participated in daily standups and sprint planning using Agile methodology",
            "Gained practical experience with SDLC, code reviews, and Git workflows"
        ]
    },
    {
        role: "Freelance Software Tester / QA",
        company: "Self-Employed",
        period: "2026 – Present",
        highlights: [
            "Executed ~50+ manual test cases across multiple projects",
            "Documented and logged defects in tracking systems with clear reproduction steps",
            "Performed regression testing and user acceptance testing (UAT)"
        ]
    },
    {
        role: "Software Quality Assurer (Internship)",
        company: "Edian.io",
        period: "Nov 2022 – May 2023",
        highlights: [
            "Conducted manual testing on web and mobile applications",
            "Created detailed defect reports and participated in defect triage meetings",
            "Performed system validation and compatibility testing across browsers"
        ]
    }
];

// ===== RENDER PROJECTS =====
function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === filter);

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        const githubLink = project.github !== '#' ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">View on GitHub</a>` : '';
        const demoLink = project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link project-link-demo">Live Demo</a>` : '';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy" width="400" height="250" onerror="this.src='https://via.placeholder.com/400x250?text=${encodeURIComponent(project.title)}'">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${demoLink}
                    ${githubLink}
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// ===== RENDER EXPERIENCE =====
function renderExperience() {
    const timelineContainer = document.querySelector('.experience-timeline');
    timelineContainer.innerHTML = '';

    experienceData.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'experience-item fade-in';
        expItem.innerHTML = `
            <div class="experience-item-header">
                <h3>${exp.role}</h3>
                <span class="experience-item-period">${exp.period}</span>
            </div>
            <p class="experience-item-company">${exp.company}</p>
            <ul class="experience-item-highlights">
                ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        `;
        timelineContainer.appendChild(expItem);
    });
}

// ===== PROJECT FILTERING =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Render filtered projects
        const filter = this.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const toggler = document.querySelector('.navbar-toggler');
                toggler.click();
            }
        }
    });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    renderExperience();
});

// ===== SMOOTH FADE IN ON SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
