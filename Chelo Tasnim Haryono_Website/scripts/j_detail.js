const url = window.location.href.split('?');

const loker = [
    {
        logo: 'otsuka.png',
        name: 'PT Amerta Indah Otsuka',
        job: 'Relationship Manager',
        loc: 'Pasuruan, Jawa Timur',
        start: '3 Hari Yang Lalu',
        end: '20 November 2023',
        sector: 'Manajemen',
        range: 'Gaji Dirahasiakan',
        tipe: 'Kerja Tetap',
        desc: [
            'Mengimplementasikan kebijakan dan prosedur manajemen',
            'Membangun hubungan bisnis dengan klien dan konsumen',
            'Memecahkan tantangan dari segi bisnis dan teknis',
            'Menerapkan strategi penjualan dengan memperluas jangkauan klien'
        ],
        req: [
            'S1 Manajemen dengan minimal IPK 3.00',
            'Minimal pengalaman 2 tahun dalam bidang ini',
            'Memiliki kemampuan komunikasi dan negosiasi yang baik',
            'Memiliki kondisi fisik yang sehat',
            'Usia Maksimal 35 Tahun',
            'Bersedia untuk penempatan di Pasuruan, Jawa Timur',
            'Bersedia bekerja part-time sewaktu waktu di hari sabtu & minggu'
        ],
        comp_desc: 'PT Amerta Indah Otsuka merupakan produsen dari produk kesehatan seperti Pocari Sweat, SOYJOY, air ion, Oronamin C dan Fiber Mini. Melalui produk-produk kami, PT Amerta Indah Otsuka membawa filosofi mereka, yaitu ingin menciptakan produk baru untuk kesehatan yang lebih baik di seluruh dunia.'
    },
    {
        logo: 'otsuka.png',
        name: 'PT Amerta Indah Otsuka',
        job: 'Chief Engineer',
        loc: 'Pasuruan, Jawa Timur',
        start: '6 Hari Yang Lalu',
        end: '18 November 2023',
        sector: 'Teknik',
        range: 'Rp 23.000.000 - Rp 26.000.000',
        tipe: 'Kontrak',
        desc: [
            'Mengimplementasikan kebijakan dan prosedur kerja',
            'Mengambil dan mempertanggungjawabkan seluruh kerja mesin',
            'Mengawasi dan mengatur kerja staff teknik',
            'Merancang jadwal pengawasan, audit dan uji mesin'
        ],
        req: [
            'S1 Teknik dengan minimal IPK 3.00',
            'Minimal pengalaman 3 tahun dalam bidang ini',
            'Memiliki kemampuan memimpin tim dengan baik',
            'Memiliki kondisi fisik yang sehat',
            'Usia Maksimal 27 Tahun',
            'Bersedia untuk penempatan di Pasuruan, Jawa Timur',
            'Bersedia bekerja full-time sewaktu waktu di hari sabtu & minggu'
        ],
        comp_desc: 'PT Amerta Indah Otsuka merupakan produsen dari produk kesehatan seperti Pocari Sweat, SOYJOY, air ion, Oronamin C dan Fiber Mini. Melalui produk-produk kami, PT Amerta Indah Otsuka membawa filosofi mereka, yaitu ingin menciptakan produk baru untuk kesehatan yang lebih baik di seluruh dunia.'
    },
    {
        logo: 'pomi.png',
        name: 'PT Paiton Operation & Maintenance',
        job: 'Crane Operator',
        loc: 'Probolinggo, Jawa Timur',
        start: '13 Oktober 2023',
        end: '18 November 2023',
        sector: 'Teknik',
        range: 'Rp 8.000.000 - Rp 12.000.000',
        tipe: 'Kontrak',
        desc: [
            'Mengimplementasikan kebijakan dan prosedur kerja',
            'Bertanggungjawab atas unit yang dibawa',
            'Melakukan pengecekan unit harian'
        ],
        req: [
            'S1 / D3 Teknik Mesin',
            'Tidak memiliki gangguan mata',
            'Memiliki kondisi fisik yang sehat',
            'Usia Maksimal 25 Tahun',
            'Bersedia untuk penempatan di Probolinggo, Jawa Timur',
            'Bersedia bekerja full-time sewaktu waktu di hari sabtu & minggu'
        ],
        comp_desc: 'PT Paiton Operation & Maintenance Indonesia adalah perusahaan swasta yang mengkhususkan diri dalam pengoperasian dan pemeliharaan pembangkit listrik skala besar yang menyediakan energi listrik kepada masyarakat Indonesia.'
    },
    {
        logo: 'puninar.png',
        name: 'PT Puninar Logistics',
        job: 'Supervisor',
        loc: 'DKI Jakarta',
        start: '11 Oktober 2023',
        end: '17 November 2023',
        sector: 'Manajemen',
        range: 'Rp 7.000.000 - Rp 13.000.000',
        tipe: 'Kontrak',
        desc: [
            'Mengimplementasikan kebijakan dan prosedur kerja',
            'Memimpin dan bertanggungjawab atas tim dengan baik',
            'Memecahkan tantangan dari segi bisnis dan teknis saat bertugas',
            'Mengatur dan mengawasi proses distribusi dan unit distribusi'
        ],
        req: [
            'Memiliki kondisi fisik yang sehat',
            'Usia Maksimal 30 Tahun',
            'Bersedia untuk penempatan di DKI Jakarta',
            'Bersedia bekerja full-time sewaktu waktu di hari sabtu & minggu'
        ],
        comp_desc: 'Sejak didirikan pada tahun 1969, Puninar Logistics telah tumbuh dan berkembang menjadi perusahaan logistik terkemuka dan berpengalaman yang memimpin dunia logistik di Indonesia dengan kemampuan dan kompetensi untuk menyediakan solusi logistik total melalui operasi anak perusahaannya.'
    },
    {
        logo: 'bri.png',
        name: 'PT Bank Rakyat Indonesia',
        job: 'Management Trainee',
        loc: 'Surabaya, Jawa Timur',
        start: '10 Oktober 2023',
        end: '21 November 2023',
        sector: 'Manajemen',
        range: 'Rp 3.000.000 - Rp 5.000.000',
        tipe: 'Magang',
        desc: [
            'Mengikuti kegiatan pelatihan manajemen',
            'Memimpin dan bertanggungjawab atas unit kerja',
            'Mengisi jabatan asisten manajer hingga manajer'
        ],
        req: [
            'S1 Manajemen / Ekonomi',
            'Minimal pengalaman 1 tahun dalam bidang manajemen',
            'Memiliki komitmen untuk menyelesaikan pelatihan dengan baik',
            'Memiliki kondisi fisik yang sehat',
            'Usia Maksimal 27 Tahun',
            'Bersedia untuk penempatan di seluruh Indonesia',
            'Bersedia bekerja atau pelatihan part-time sewaktu waktu di hari sabtu & minggu'
        ],
        comp_desc: 'PT Bank Rakyat Indonesia (Persero) Tbk atau biasa disingkat menjadi BRI, adalah sebuah badan usaha milik negara Indonesia yang menyediakan berbagai macam jasa keuangan.'
    },
    {
        logo: 'bri.png',
        name: 'PT Bank Rakyat Indonesia',
        job: 'Account Officer',
        loc: 'Malang, Jawa Timur',
        start: '10 Oktober 2023',
        end: '17 November 2023',
        sector: 'Keuangan',
        range: 'Rp 4.000.000 - Rp 7.000.000',
        tipe: 'Kerja Tetap',
        desc: [
            'Melayani transaksi, pembukaan rekening dan kredit',
            'Memantau aktivitas rekening',
            'Menjaga hubungan dengan nasabah',
            'Bertanggungjawab atas kesalahan yang merugikan nasabah atau perusahaan'
        ],
        req: [
            'S1 Manajemen / Ekonomi',
            'Minimal pengalaman 1 tahun dalam bidang akuntansi',
            'Memiliki kondisi fisik yang sehat',
            'Usia Maksimal 25 Tahun',
            'Bersedia untuk penempatan di seluruh Indonesia',
            'Bersedia bekerja part-time sewaktu waktu di hari sabtu & minggu'
        ],
        comp_desc: 'PT Bank Rakyat Indonesia (Persero) Tbk atau biasa disingkat menjadi BRI, adalah sebuah badan usaha milik negara Indonesia yang menyediakan berbagai macam jasa keuangan.'
    },
    {
        logo: 'niagahoster.png',
        name: 'Niagahoster International',
        job: 'Server Administrator',
        loc: 'Singapura, Asia',
        start: '07 Oktober 2023',
        end: '17 November 2023',
        sector: 'IT',
        range: 'Rp 23.000.000 - Rp 32.000.000',
        tipe: 'Kontrak',
        desc: [
            'Mengimplementasikan kebijakan dan prosedur kerja',
            'Bertanggungjawab atas unit server',
            'Memimpin dan bertanggungjawab atas tim',
            'Menganalisa resiko teknis'
        ],
        req: [
            'S1 Teknik Elektronika / Informatika',
            'Memiliki pengalaman minimal 5 tahun dalam bidang ini',
            'Tidak memiliki gangguan mata',
            'Memiliki kondisi fisik yang sehat',
            'Usia Maksimal 35 Tahun',
            'Bersedia untuk penempatan di Singapura',
            'Bersedia bekerja full-time sewaktu waktu di hari sabtu & minggu'
        ],
        comp_desc: 'Sejak didirikan pada 2013, Niagahoster membawa misi untuk meningkatkan kesadaran jutaan orang di Indonesia akan pentingnya memaksimalkan potensi internet melalui sebuah website. Berangkat dari hal ini, kami mulai menghadirkan produk serta layanan web hosting yang tidak hanya memiliki harga bersaing, tapi juga jaminan kualitas terbaik.'
    },
    {
        logo: 'pomi.png',
        name: 'PT Paiton Operation & Maintenance',
        job: 'IT Support Helpdesk',
        loc: 'Probolinggo, Jawa Timur',
        start: '07 Oktober 2023',
        end: '25 November 2023',
        sector: 'IT',
        range: 'Rp 12.000.000 - Rp 14.000.000',
        tipe: 'Kontrak',
        desc: [
            'Mengimplementasikan kebijakan dan prosedur kerja',
            'Melakukan dukungan teknis dalam operasi dan penggunaan',
            'Bertanggungjawab atas terlibatnya dukungan',
            'Menganalisa resiko dan mengajukan penanganan teknis dukungan'
        ],
        req: [
            'S1 Teknik Mesin / Elektronika / Informatika',
            'Disabilitas ringan diperbolehkan',
            'Usia Maksimal 25 Tahun',
            'Bersedia untuk penempatan di Probolinggo, Jawa Timur',
            'Bersedia bekerja full-time sewaktu waktu di hari sabtu & minggu'
        ],
        comp_desc: 'PT Paiton Operation & Maintenance Indonesia adalah perusahaan swasta yang mengkhususkan diri dalam pengoperasian dan pemeliharaan pembangkit listrik skala besar yang menyediakan energi listrik kepada masyarakat Indonesia.'
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