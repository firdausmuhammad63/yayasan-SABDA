document.addEventListener('DOMContentLoaded', () => {
    // === Logic untuk Modal Login Admin ===
    const loginCard = document.getElementById('loginCard');
    const adminPanel = document.getElementById('adminPanel');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const adminID = document.getElementById('adminID');
    const adminPass = document.getElementById('adminPass');

    // Cek status login saat halaman dimuat
    if (localStorage.getItem('isLoggedIn') === 'true') {
        showAdminPanel();
    }

    // Ganti logika login Anda yang baru di sini
    loginBtn.addEventListener('click', () => {
        if (adminID.value === 'admin' && adminPass.value === '12345') { // Gunakan username dan password dari admin.html
            localStorage.setItem('isLoggedIn', 'true');
            showAdminPanel();
        } else {
            alert('ID Admin atau Password salah.');
        }
    });

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        showLoginCard();
    });

    function showAdminPanel() {
        loginCard.classList.add('hidden');
        adminPanel.classList.remove('hidden');
    }

    function showLoginCard() {
        loginCard.classList.remove('hidden');
        adminPanel.classList.add('hidden');
        adminID.value = '';
        adminPass.value = '';
    }

    // === Logic untuk Menu Mobile (Jika Anda menggunakannya di admin.html) ===
    // Pastikan ID elemennya sesuai
    const menuToggleBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggleBtn && mobileMenu) {
        menuToggleBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('translate-x-full');
        });
    }
});
