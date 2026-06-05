from django.shortcuts import render


PROFILE = {
    "name": "Subin S R",
    "role": "Python Full Stack Developer",
    "location": "Tamil Nadu, India",
    "email": "subinsr.developer@gmail.com",
    "phone": "+91 00000 00000",
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
            "A responsive personal portfolio with reusable templates, a strong "
            "hero section, skill highlights, project cards, and a contact flow."
        ),
        "stack": ["Django", "HTML", "CSS", "JavaScript"],
    },
    {
        "title": "Task Management App",
        "description": (
            "A full stack productivity app concept with authentication, task "
            "tracking, filtering, and database-backed user workflows."
        ),
        "stack": ["Python", "Django", "MySQL"],
    },
    {
        "title": "Responsive Business Website",
        "description": (
            "A modern marketing website layout built for quick scanning, mobile "
            "performance, and clean calls to action."
        ),
        "stack": ["HTML", "CSS", "JavaScript"],
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
