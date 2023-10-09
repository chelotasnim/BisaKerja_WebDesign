const url = window.location.href.split('?');

const loker = [
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
    }
];

let used_index = url[1] - 1;
if (url[1] == undefined || loker[url[1] - 1] == undefined) {
    used_index = 0;
};

for (let key in loker[used_index]) {
    if (key == 'desc' || key == 'req') {
        let new_list = '';
        loker[used_index][key].forEach(li => {
            new_list += `<li>${li}</li>`;
        });
        document.querySelector(`#d-${key}`).innerHTML = new_list;
    } else if (key == 'logo') {
        document.querySelector(`#d-${key}`).setAttribute('src', `../../Chelo Tasnim Haryono_Bahan/images/${loker[used_index][key]}`);
    } else {
        document.querySelectorAll(`.d-${key}`).forEach(e => {
            e.textContent = loker[used_index][key];
        });
    };
};