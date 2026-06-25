from django.shortcuts import render


PROFILE = {
    "name": "Subin S R",
    "role": "Python Full Stack Developer",
    "location": "Tamil Nadu, India",
    "email": "subinsr.developer@gmail.com",
    "phone": "+91 ******5090",
    "summary": (
        "I build clean, responsive web applications with Django, Python, "
        "JavaScript, React, and MySQL. I enjoy turning practical ideas into "
        "fast, usable products with thoughtful frontend details and reliable "
        "backend logic."
    ),
}

SKILLS = [
    {"name": "Python", "level": 90, "group": "Backend"},
    {"name": "Django", "level": 85, "group": "Backend"},
    {"name": "HTML", "level": 95, "group": "Frontend"},
    {"name": "CSS", "level": 90, "group": "Frontend"},
    {"name": "JavaScript", "level": 78, "group": "Frontend"},
    {"name": "React", "level": 72, "group": "Frontend"},
    {"name": "MySQL", "level": 76, "group": "Database"},
    {"name": "Git", "level": 74, "group": "Tools"},
]

PROJECTS = [
    {
        "title": "Django Portfolio Website",
        "description": (
            "Developed a responsive personal portfolio website to showcase my skills, projects,"
            " education, and achievements. The website provides a professional online presence"
            " with an intuitive user interface, project gallery, contact section, and viewable"
            " resume. Designed with a focus on responsiveness, accessibility, and user experience"
            " to ensure seamless performance across desktop and mobile devices."
        ),
        "stack": ["Python", "Django", "HTML", "CSS", "JavaScript"],
    },
    {
        "title": "Gym Management App",
        "description": (
            "A full-stack Gym Management System using Python, Django, HTML, CSS,"
            " JavaScript, and MySQL. Implemented role-based authentication for Admin, Trainer,"
            " and Member users. Developed modules for member registration, trainer management,"
            " attendance tracking, membership plans, payment records, and dashboard reporting."
            " Created responsive interfaces and optimized database operations for efficient data "
            "management. Used Git and GitHub for version control and collaborative development."
        ),
        "stack": ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"],
    },
    {
        "title": "Tic-Tac-Toe",
        "description": (
            "Developed an interactive Tic-Tac-Toe game that allows two players to compete on a"
            " 3×3 grid. The application provides a simple and user-friendly interface where"
            " players take turns marking X and O. The game automatically detects winning"
            " combinations, declares the winner, and supports game reset functionality for"
            " multiple rounds. The project demonstrates fundamental programming concepts, event"
            " handling, state management, and user interface design."
        ),
        "stack": ["Django", "HTML", "CSS", "JavaScript"],
    },
]

SERVICES = [
    "Responsive portfolio and business websites",
    "Django web applications and admin dashboards",
    "Frontend UI implementation with HTML, CSS, JavaScript, and React",
    "Database-backed features using MySQL",
]


def get_context(**extra):
    context = {
        "profile": PROFILE,
        "skills": SKILLS,
        "projects": PROJECTS,
        "services": SERVICES,
    }
    context.update(extra)
    return context


def home(request):
    return render(request, "home.html", get_context(featured_projects=PROJECTS[:2]))


def about(request):
    return render(request, "about.html", get_context())


def contact(request):
    success = request.method == "POST"
    return render(request, "contact.html", get_context(success=success))


def skills(request):
    return render(request, "skills.html", get_context())


def projects(request):
    return render(request, "projects.html", get_context())

def education(request):
    return render(request, "education.html")
