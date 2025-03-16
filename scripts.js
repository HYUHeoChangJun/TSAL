document.addEventListener("DOMContentLoaded", function () {
    // header.html을 가져와서 삽입
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        });

    // footer.html을 가져와서 삽입
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        });
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseenter", () => {
            dropdown.querySelector(".dropdown-menu").style.display = "block";
        });

        dropdown.addEventListener("mouseleave", () => {
            dropdown.querySelector(".dropdown-menu").style.display = "none";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // 현재 페이지의 URL을 확인하여 메뉴 강조 표시
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage.includes("research.html")) {
        document.getElementById("research").classList.add("active");
    } else if (currentPage.includes("project.html")) {
        document.getElementById("project").classList.add("active");
    } else if (currentPage.includes("professor.html")) {
        document.getElementById("professor").classList.add("active");
    } else if (currentPage.includes("student.html")) {
        document.getElementById("student").classList.add("active");
    } else if (currentPage.includes("alumni.html")) {
        document.getElementById("alumni").classList.add("active");
    } else if (currentPage.includes("paper.html")) {
        document.getElementById("paper").classList.add("active");
    } else if (currentPage.includes("conference.html")) {
        document.getElementById("conference").classList.add("active");
    } else if (currentPage.includes("notice.html")) {
        document.getElementById("notice").classList.add("active");
    } else if (currentPage.includes("gallery.html")) {
        document.getElementById("gallery").classList.add("active");
    }
});
