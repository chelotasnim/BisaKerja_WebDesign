const url = window.location.href.split('?');

const proyek_data = [
    {
        owner: 'Geprek Kak Rose Malang',
        name: 'Web Promosi Produk',
        cat: 'Website Landing Page',
        up: 'Diunggah 3 Hari Yang Lalu',
        end: '20 November 2023',
        range: 'Rp 200.000 - Rp 700.000',
        ask: '12 Orang',
        desc: [
            'Halaman utama yang menyoroti daftar menu diikuti lokasi gerai dan profile geprek kak rose',
            'Tema warna utama geprek kak rose, merah dan kuning',
            'Daftar kontak gerai dengan platform digital lain'
        ],
        req: [
            'Konten tidak mengandung unsur sara',
            'Menggunakan assets yang kami berikan',
            'Menggunakan konsep Progressive Web App',
            'Tidak menggunakan alat atau bahan bantu yang kadaluarsa'
        ],
        comp_desc: 'Usaha makanan cepat saji di Ruko Soekarno Hatta, Blok DR, Jl. Soekarno Hatta No.15 65142, Kelurahan Mojolangu, Jawa Timur. Menyediakan aneka olahan ayam geprek, mie geprek dan aneka sambal.'
    },
    {
        owner: 'Disparpora Kab. Bondowoso',
        name: 'Artikel Situs Wisata Desa',
        cat: 'Artikel Website',
        up: 'Diunggah 7 Hari Yang Lalu',
        end: '29 November 2023',
        range: 'Rp 500.000 - Rp 1.000.000',
        ask: '27 Orang',
        desc: [
            'Halaman utama yang menyoroti daftar wisata dilanjut dengan paket tour',
            'Setiap wisata diberi data profile, lokasi dan tips',
            'Konten menjelaskan wisata dari segi teknis'
        ],
        req: [
            'Konten tidak mengandung unsur sara',
            'Menggunakan acuan isi yang kami berikan',
            'Dibuat menggunakan CMS Wordpress',
            'Asset dapat menggunakan yang tersedia di internet namun real picture'
        ],
        comp_desc: 'Disparpora, Dinas Pariwisata Pemuda dan Olahraga Kabupaten Bondowoso di Jl. A. Yani No.33 Bondowoso (0332) 421475. Mengembangkan potensi pariwisata bondowoso "The Highland Paradise".'
    },
    {
        owner: 'Abhista Farrel',
        name: 'PowerPoint Evaluasi Produk',
        cat: 'PowerPoint',
        up: 'Diunggah 7 Hari Yang Lalu',
        end: '29 November 2023',
        range: 'Rp 250.000 - Rp 750.000',
        ask: '27 Orang',
        desc: [
            'Tema evaluasi produk berfokus di bidang konstruksi',
            'Tema warna sederhana menyesuaikan konten',
            'Assets dan konten saya berikan'
        ],
        req: [
            'Materi singkat dapat terlihat jelas dan padat',
            'Desain tidak merusak pengalaman pengguna membaca materi',
            'Dapat menggunakan ms ppt atau google slide',
            'Asset dapat menggunakan yang tersedia di internet'
        ],
        comp_desc: 'Abhista Farrel, siswa kelas 12 Rekayasa Perangkat Lunak SMK Negeri 1 Bondowoso. Jl. HOS Cokroaminoto No. 110 Kademangan Bondowoso, Jawa Timur.'
    },
    {
        owner: 'Dolant Kreatif Bondowoso',
        name: 'Desain Stok Logo',
        cat: 'Desain Logo',
        up: 'Diunggah 14 Oktober 2023',
        end: '31 November 2023',
        range: 'Rp 5.000.000 - Rp 12.000.000',
        ask: '51 Orang',
        desc: [
            'Tema logo thin outline',
            'Tema warna monotone',
            'Logo memiliki unsur kartunis 2D',
            'Logo akan digunakan di media gelap dan terang'
        ],
        req: [
            'Bentuk logo padat dan menyatu',
            'Warna utama menyesuaikan latar dengan semantik warna tertentu',
            'Logo tidak boleh diambil dari internet'
        ],
        comp_desc: 'Dolant Kreatif Indonesia adalah perusahaan multimedia dan animasi yang berlokasi di Bondowoso, Jawa Timur. Kami telah memproduksi berbagai jenis film animasi yang kami tayangkan di YouTube dan menerima berbagai macam tanggapan positif melalui banyaknya pelanggan yang kami dapatkan di setiap saluran kami.'
    }
];

let used_index = url[1] - 1;
if (url[1] == undefined || proyek_data[url[1] - 1] == undefined) {
    used_index = 0;
};

for (let key in proyek_data[used_index]) {
    if (key == 'desc' || key == 'req') {
        let new_list = '';
        proyek_data[used_index][key].forEach(li => {
            new_list += `<li>${li}</li>`;
        });
        document.querySelector(`#d-${key}`).innerHTML = new_list;
    } else if (key == 'logo') {
        document.querySelector(`#d-${key}`).setAttribute('src', `../../Chelo Tasnim Haryono_Bahan/images/${proyek_data[used_index][key]}`);
    } else {
        document.querySelectorAll(`.d-${key}`).forEach(e => {
            e.textContent = proyek_data[used_index][key];
        });
    };
};