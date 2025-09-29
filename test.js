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