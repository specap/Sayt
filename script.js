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

document.addEventListener("DOMContentLoaded", function () {

    const banner = document.getElementById("cookie-banner");
    const button = document.getElementById("accept-cookies");

    if (!banner || !button) {
        console.log("Cookie elements not found");
        return;
    }

    button.addEventListener("click", function () {
        banner.style.display = "none";
    });

});

<script>
  const menuItem = document.querySelector('.menu-item');
  const dropdown = document.querySelector('.dropdown');

  menuItem.addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });
</script>
