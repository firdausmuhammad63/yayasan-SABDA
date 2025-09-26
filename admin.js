document.addEventListener('DOMContentLoaded', () => {
    const daftarKonten = document.getElementById('daftarKonten');
    const kontenForm = {
        id: document.getElementById('kontenId'),
        judul: document.getElementById('kontenJudul'),
        deskripsi: document.getElementById('kontenDeskripsi'),
        gambar: document.getElementById('kontenGambar'),
        sembunyi: document.getElementById('kontenTersembunyi')
    };
    const simpanBtn = document.getElementById('simpanKontenBtn');
    const batalEditBtn = document.getElementById('batalEditBtn');

    function renderKontenAdmin() {
        daftarKonten.innerHTML = '';
        kontenData.forEach(konten => {
            const status = konten.sembunyi ? 'Tersembunyi' : 'Ditampilkan';
            const statusClass = konten.sembunyi ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700';

            daftarKonten.innerHTML += `
                <div class="p-4 border rounded-lg bg-white flex justify-between items-center">
                    <div>
                        <h4 class="text-xl font-bold text-gray-800">${konten.judul}</h4>
                        <p class="text-gray-600 truncate">${konten.deskripsi}</p>
                        <span class="text-sm font-medium px-2 py-1 rounded-full ${statusClass}">${status}</span>
                    </div>
                    <div class="flex space-x-2">
                        <button onclick="editKonten(${konten.id})" class="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-2 rounded-lg transition-all"><i class="fas fa-edit"></i></button>
                        <button onclick="toggleVisibility(${konten.id})" class="bg-gray-400 hover:bg-gray-500 text-white px-3 py-2 rounded-lg transition-all"><i class="fas fa-eye-slash"></i></button>
                        <button onclick="hapusKonten(${konten.id})" class="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition-all"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
        });
    }

    function simpanKonten() {
        const id = kontenForm.id.value;
        const judul = kontenForm.judul.value;
        const deskripsi = kontenForm.deskripsi.value;
        const gambar = kontenForm.gambar.value;
        const sembunyi = kontenForm.sembunyi.checked;

        if (id) {
            // Edit konten yang sudah ada
            const index = kontenData.findIndex(k => k.id == id);
            if (index !== -1) {
                kontenData[index] = { id: parseInt(id), judul, deskripsi, gambar, sembunyi };
            }
        } else {
            // Tambah konten baru
            const newId = kontenData.length > 0 ? Math.max(...kontenData.map(k => k.id)) + 1 : 1;
            kontenData.push({ id: newId, judul, deskripsi, gambar, sembunyi });
        }

        localStorage.setItem('kontenData', JSON.stringify(kontenData));
        resetForm();
        renderKontenAdmin();
    }

    function resetForm() {
        kontenForm.id.value = '';
        kontenForm.judul.value = '';
        kontenForm.deskripsi.value = '';
        kontenForm.gambar.value = '';
        kontenForm.sembunyi.checked = false;
        simpanBtn.textContent = 'Tambah Konten';
        batalEditBtn.classList.add('hidden');
    }

    window.editKonten = function(id) {
        const konten = kontenData.find(k => k.id === id);
        if (konten) {
            kontenForm.id.value = konten.id;
            kontenForm.judul.value = konten.judul;
            kontenForm.deskripsi.value = konten.deskripsi;
            kontenForm.gambar.value = konten.gambar;
            kontenForm.sembunyi.checked = konten.sembunyi;
            simpanBtn.textContent = 'Simpan Perubahan';
            batalEditBtn.classList.remove('hidden');
            window.scrollTo(0, 0); // Gulir ke atas ke form
        }
    };

    window.hapusKonten = function(id) {
        if (confirm('Apakah Anda yakin ingin menghapus konten ini?')) {
            kontenData = kontenData.filter(k => k.id !== id);
            localStorage.setItem('kontenData', JSON.stringify(kontenData));
            renderKontenAdmin();
        }
    };

    window.toggleVisibility = function(id) {
        const konten = kontenData.find(k => k.id === id);
        if (konten) {
            konten.sembunyi = !konten.sembunyi;
            localStorage.setItem('kontenData', JSON.stringify(kontenData));
            renderKontenAdmin();
        }
    };

    simpanBtn.addEventListener('click', simpanKonten);
    batalEditBtn.addEventListener('click', resetForm);
    
    renderKontenAdmin();
});
