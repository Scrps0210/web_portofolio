document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const contactForm = document.getElementById('contactForm');

    // 1. Menu Hamburger untuk Mobile
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Tutup menu saat link di-klik (untuk navigasi satu halaman)
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('toggle');
            }
        });
    });

    // 2. Toggle Mode Gelap/Terang
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.remove('light-mode');
            darkModeToggle.textContent = '🌙';
        } else {
            document.body.classList.add('light-mode');
            darkModeToggle.textContent = '☀️';
        }
    };

    darkModeToggle.addEventListener('click', () => {
        let currentTheme = localStorage.getItem('theme');
        let newTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    // Terapkan tema yang tersimpan saat memuat halaman
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default ke mode gelap
    applyTheme(savedTheme);


    // 3. Validasi Formulir Kontak
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Mencegah pengiriman formulir default

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Harap isi semua kolom yang wajib diisi.');
                return;
            }

            // Simulasi pengiriman berhasil
            alert('Pesan Anda telah berhasil dikirim! Terima kasih.');
            contactForm.reset(); // Mengosongkan formulir
        });
    }
});