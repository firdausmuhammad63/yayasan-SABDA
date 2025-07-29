// SLIDER GAMBAR MASJID
   document.addEventListener("DOMContentLoaded", function () {
      const slides = document.querySelectorAll(".slide");
      let currentSlide = 0;

      setInterval(() => {
        slides[currentSlide].classList.remove("opacity-100");
        slides[currentSlide].classList.add("opacity-0");

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.remove("opacity-0");
        slides[currentSlide].classList.add("opacity-100");
      }, 4000);
    });

  const slides = document.querySelectorAll(".slide-video");
  let current = 0;

// SLIDER VIDEO KAJIAN
      document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    setInterval(() => {
      slides[currentSlide].classList.remove("opacity-100");
      slides[currentSlide].classList.add("opacity-0");

      currentSlide = (currentSlide + 1) % slides.length;

      slides[currentSlide].classList.remove("opacity-0");
      slides[currentSlide].classList.add("opacity-100");
    }, 7000); // ganti video setiap 7 detik
  });
  
  document.addEventListener("DOMContentLoaded", function () {
  const toggleCard = document.querySelector(".toggle-card");
  const subContent = toggleCard.querySelector(".sub-content");

  toggleCard.addEventListener("click", () => {
    subContent.classList.toggle("hidden");
  });
});

// =========================== SLIDER UTAMA ========================
  const total = 3;
  var current1 = 0;

  function showSlide(index) {
    for (let i = 0; i < total; i++) {
      document.getElementById(`slide-${i}`).style.opacity = i === index ? 1 : 0;
    }
  }

  setInterval(() => {
    current = (current + 1) % total;
    showSlide(current);
  }, 5000);

  // tampilkan slide pertama saat load
  showSlide(current);

// =========================== BACA SELENGKAPNYA ========================
  function toggleAbout() {
    const hidden = document.getElementById("aboutHidden");
    const button = event.target;

    hidden.classList.toggle("hidden");
    button.textContent = hidden.classList.contains("hidden") ? "Lihat Selengkapnya" : "Sembunyikan";
  }

// =========================== NAVBAR BIAR NEMPEL SAAT SCROLL ========================
  const menuBtn = document.getElementById('menu-btn');
  const dropdown = document.getElementById('dropdown');

  menuBtn.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
  });

  // =========================== NAVBAR HUMBERGER HILANG SAAT KLIK SEMBARANG =======================
  document.addEventListener("click", function (event) {
    const menu = document.getElementById("menu-btn");

    // Kalau menu sedang terbuka dan kliknya di luar <details>, tutup
    if (menu.open && !menu.contains(event.target)) {
      menu.removeAttribute("open");
    }
  });