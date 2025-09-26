document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const kontenId = parseInt(params.get('id'));
    const kontenDetail = document.getElementById('konten-detail');

    if (!kontenId) {
        kontenDetail.innerHTML = '<div class="text-center"><h2 class="text-4xl font-bold text-red-500">Konten tidak ditemukan.</h2><p class="mt-4">Kembali ke <a href="index.html" class="text-blue-600">beranda</a>.</p></div>';
        return;
    }

    const konten = kontenData.find(k => k.id === kontenId);

    if (konten) {
        const shareTitle = konten.judul;
        const shareText = konten.deskripsi.substring(0, 150) + '...';
        const shareUrl = window.location.href;

        // --- Isi halaman dengan data konten dan tombol share ---
        let shareButtonsHtml = '';

        // Tombol Salin URL
        shareButtonsHtml += `
            <button id="copyUrlBtn" class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors hover:bg-gray-300 flex items-center">
                <i class="fas fa-link mr-2"></i> Salin Link
            </button>
        `;

        // Web Share API untuk perangkat mobile
        if (navigator.share) {
            shareButtonsHtml += `
                <button id="nativeShareBtn" class="bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors hover:bg-blue-600 flex items-center">
                    <i class="fas fa-share-alt mr-2"></i> Bagikan
                </button>
            `;
        } else {
            // Tombol-tombol fallback untuk desktop
            shareButtonsHtml += `
                <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}" target="_blank" class="bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors hover:bg-blue-700 flex items-center">
                    <i class="fab fa-facebook-f mr-2"></i> Facebook
                </a>
                <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}" target="_blank" class="bg-sky-500 text-white px-4 py-2 rounded-lg transition-colors hover:bg-sky-600 flex items-center">
                    <i class="fab fa-twitter mr-2"></i> Twitter
                </a>
                <a href="whatsapp://send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}" target="_blank" class="bg-green-500 text-white px-4 py-2 rounded-lg transition-colors hover:bg-green-600 flex items-center">
                    <i class="fab fa-whatsapp mr-2"></i> WhatsApp
                </a>
            `;
        }

        kontenDetail.innerHTML = `
            <img src="${konten.gambar || 'https://via.placeholder.com/800x400?text=Yayasan+SABDA'}" alt="${konten.judul}" class="w-full rounded-lg mb-6 shadow-md">
            <h1 class="text-4xl md:text-5xl font-bold text-blue-800 mb-4">${konten.judul}</h1>
            <p class="text-gray-700 leading-relaxed text-lg">${konten.deskripsi}</p>
            <div class="mt-8 pt-4 border-t border-gray-200">
                <h3 class="text-xl font-semibold text-gray-700 mb-4">Bagikan Konten Ini</h3>
                <div class="flex flex-wrap items-center space-x-2">
                    ${shareButtonsHtml}
                </div>
            </div>
        `;
        
        // --- Bagian 2: Atur meta tag Open Graph (SEO) ---
        const head = document.head;
        const ogTags = [
            { property: 'og:title', content: konten.judul },
            { property: 'og:description', content: konten.deskripsi.substring(0, 150) + '...' },
            { property: 'og:image', content: konten.gambar || 'images/logo_yayasan.png' },
            { property: 'og:url', content: window.location.href }
        ];

        ogTags.forEach(tagData => {
            let meta = document.createElement('meta');
            meta.setAttribute('property', tagData.property);
            meta.setAttribute('content', tagData.content);
            head.appendChild(meta);
        });

        document.title = `${konten.judul} - Yayasan Sabilulhuda`;

        // --- Bagian 3: Tambahkan event listener untuk tombol-tombol setelah elemen dibuat ---
        const copyUrlBtn = document.getElementById('copyUrlBtn');
        if (copyUrlBtn) {
            copyUrlBtn.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(shareUrl);
                    copyUrlBtn.textContent = 'Link Tersalin!';
                    copyUrlBtn.classList.add('bg-green-100', 'text-green-700');
                    setTimeout(() => {
                        copyUrlBtn.innerHTML = '<i class="fas fa-link mr-2"></i> Salin Link';
                        copyUrlBtn.classList.remove('bg-green-100', 'text-green-700');
                    }, 2000);
                } catch (err) {
                    alert('Gagal menyalin link.');
                }
            });
        }

        const nativeShareBtn = document.getElementById('nativeShareBtn');
        if (nativeShareBtn) {
            nativeShareBtn.addEventListener('click', () => {
                if (navigator.share) {
                    navigator.share({
                        title: shareTitle,
                        text: shareText,
                        url: shareUrl,
                    }).then(() => {
                        console.log('Berbagi berhasil.');
                    }).catch((error) => {
                        console.error('Gagal berbagi:', error);
                    });
                }
            });
        }

    } else {
        kontenDetail.innerHTML = '<div class="text-center"><h2 class="text-4xl font-bold text-red-500">Konten tidak ditemukan.</h2><p class="mt-4">Kembali ke <a href="index.html" class="text-blue-600">beranda</a>.</p></div>';
    }
});
