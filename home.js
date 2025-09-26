document.addEventListener('DOMContentLoaded', () => {
    const kontenContainer = document.getElementById('konten-container');

    function renderKontenHome() {
        kontenContainer.innerHTML = '';
        const kontenYangDitampilkan = kontenData.filter(konten => !konten.sembunyi);

        if (kontenYangDitampilkan.length === 0) {
            kontenContainer.innerHTML = '<p class="text-center text-gray-500 col-span-full">Belum ada kegiatan atau informasi terbaru.</p>';
            return;
        }

        kontenYangDitampilkan.forEach(konten => {
            kontenContainer.innerHTML += `
                <a href="detail.html?id=${konten.id}" class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 block">
                    <img src="${konten.gambar || 'https://via.placeholder.com/400x250?text=Yayasan+SABDA'}" alt="${konten.judul}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-blue-800 mb-2">${konten.judul}</h3>
                        <p class="text-gray-600">${konten.deskripsi.substring(0, 100)}...</p>
                    </div>
                </a>
            `;
        });
    }

    renderKontenHome();
});
