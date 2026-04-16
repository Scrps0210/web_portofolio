document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.');
    this.reset();
});

document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('order-name').value.trim();
    const item = document.getElementById('order-item').value;
    const quantity = document.getElementById('order-quantity').value;

    if (!name || !item || quantity < 1) {
        alert('Mohon isi semua data pemesanan dengan benar.');
        return;
    }

    const confirmation = document.getElementById('order-confirmation');
    confirmation.textContent = `Terima kasih, ${name}. Pesanan Anda untuk ${quantity} x ${item} telah diterima.`;
    confirmation.classList.remove('hidden');

    this.reset();
});

// Add click event listeners to order buttons in menu
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.getAttribute('data-item');
        const orderSelect = document.getElementById('order-item');
        orderSelect.value = item;
        document.getElementById('order-quantity').value = 1;
        // Scroll to order section
        document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    });
});
