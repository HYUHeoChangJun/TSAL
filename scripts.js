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

// 햄버거 버튼 클릭 시 메뉴 열고 닫기
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function closeMenu() {
    const menu = document.querySelector(".menu");
    menu.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    // 현재 페이지의 URL을 확인하여 메뉴 강조 표시
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage.includes("research.html")) {
        document.getElementById("research").classList.add("active");
    } else if (currentPage.includes("project.html")) {
        document.getElementById("project").classList.add("active");
    } else if (currentPage.includes("lab.html")) {
        document.getElementById("lab").classList.add("active");
    } else if (currentPage.includes("professor.html")) {
        document.getElementById("professor").classList.add("active");
    } else if (currentPage.includes("postdoc.html")) {
        document.getElementById("postdoc").classList.add("active");
    } else if (currentPage.includes("student.html")) {
        document.getElementById("student").classList.add("active");
    } else if (currentPage.includes("alumni.html")) {
        document.getElementById("alumni").classList.add("active");
    } else if (currentPage.includes("ppaper.html")) {
        document.getElementById("ppaper").classList.add("active");
    } else if (currentPage.includes("upaper.html")) {
        document.getElementById("upaper").classList.add("active");
    } else if (currentPage.includes("conference.html")) {
        document.getElementById("conference").classList.add("active");
    } else if (currentPage.includes("book.html")) {
        document.getElementById("book").classList.add("active");
    } else if (currentPage.includes("notice.html")) {
        document.getElementById("notice").classList.add("active");
    } else if (currentPage.includes("gallery.html")) {
        document.getElementById("gallery").classList.add("active");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const lists = document.querySelector(".main .sec1-2 .lists");

    if (lists) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    lists.classList.add("ani", "active");
                    observer.unobserve(entry.target); // 한 번 실행 후 감지 중지
                }
            });
        }, { threshold: 0.3 });

        observer.observe(lists);
    }
});