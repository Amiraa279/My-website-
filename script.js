
function changeLanguage(lang) {
    if (lang === 'ar') {
        document.getElementById("title").innerText = "مرحبًا بك في Amira Dev";
        document.getElementById("description").innerText = "هنا أقدم أفضل خدمات تطوير المواقع وتطوير الألعاب.";
    } else if (lang === 'en') {
        document.getElementById("title").innerText = "Welcome to Amira Dev";
        document.getElementById("description").innerText = "Here, I offer the best services in web development and game development.";
    }
}
