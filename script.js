document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelector(".slides");
    const bars = document.querySelectorAll(".bar");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    if (!slides) return;

    let index = 0;

    function show(i) {
        index = i;

        slides.style.transform = `translateX(-${i * 100}%)`;

        bars.forEach(b => b.classList.remove("active"));
        if (bars[i]) bars[i].classList.add("active");
    }

    if (next) {
        next.addEventListener("click", () => {
            index = (index + 1) % bars.length;
            show(index);
        });
    }

    if (prev) {
        prev.addEventListener("click", () => {
            index = (index - 1 + bars.length) % bars.length;
            show(index);
        });
    }

    bars.forEach((b, i) => {
        b.addEventListener("click", () => show(i));
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('owners-trigger');
    const menu = document.getElementById('owners-dropdown');

    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('show');
    });

    // Закрыть при клике вне меню
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && e.target !== trigger) {
            menu.classList.remove('show');
        }
    });
});

