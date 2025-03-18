document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

document.getElementById("downloadResume").addEventListener("click", function() {
    let link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=15nSD2Mh0uNm96bizu3WC3UAYguPSAh85"; 
    link.click();
});