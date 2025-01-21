// Ambil referensi tombol Back to Top
const backToTopButton = document.getElementById('backToTop');

// Fungsi untuk menampilkan atau menyembunyikan tombol Back to Top
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
};

// Fungsi untuk scroll ke atas halaman
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}