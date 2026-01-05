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
    // dropdown menu
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

// 게시판 목록 로딩 함수
function loadPostList() {
  fetch("posts.json")
    .then(res => res.json())
    .then(posts => {
      const tbody = document.getElementById("post-list");
      if (!tbody) return;

      posts.forEach(post => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${post.id}</td>
          <td class="title" onclick="location.href='view.html?id=${post.id}'">${post.title}</td>
          <td>${post.author}</td>
          <td>${post.date}</td>
        `;
        tbody.appendChild(tr);
      });
    });
}

// 게시물 상세 로딩 함수
function loadPostDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  fetch("posts.json")
    .then(res => res.json())
    .then(posts => {
      const post = posts.find(p => p.id == id);
      if (post) {
        document.getElementById("post-title").innerText = post.title;
        document.getElementById("post-meta").innerText = `${post.author} | ${post.date}`;
        document.getElementById("post-content").innerText = post.content;
      } else {
        document.getElementById("post-title").innerText = "글을 찾을 수 없습니다.";
      }
    });
}

// DOM 로드 후 실행
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("post-list")) {
    loadPostList();
  }
  if (document.getElementById("post-title")) {
    loadPostDetail();
  }
});

// Modal Module
const Modal = (() => {
  let modal;

  function init() {
    modal = document.getElementById("modal");
    if (!modal) return;

    modal.querySelector(".close").addEventListener("click", close);
    modal.addEventListener("click", e => {
      if (e.target === modal) close();
    });
  }

  function open(data) {
    document.getElementById("modal-name").innerText = data.name
    document.getElementById("modal-enName").innerText = data.enName
    document.getElementById("modal-role").innerText = data.role;
    document.getElementById("modal-desc").innerText = data.desc;
    document.getElementById("modal-email").innerText =
      `Email: ${data.email}`;

    modal.style.display = "block";
  }

  function close() {
    modal.style.display = "none";
  }

  return { init, open };
})();


// Card → Modal 연결
function initCardModal() {
  fetch("students.json")
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
          const id = card.dataset.id;
          if (data[id]) {
            Modal.open(data[id]);
          }
        });
      });
    });
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  Modal.init();
  initCardModal();
});
