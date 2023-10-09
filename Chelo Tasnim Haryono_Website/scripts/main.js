// Halaman Utama

// Loading Layer
const loading_layer = document.querySelector('.loading-layer');
function setLoading() {
    loading_layer.style.display = 'flex';
    loading_layer.classList.add('appear');
    function appear() {
        loading_layer.classList.remove('inactive');
    };
    setTimeout(appear, 1);
};

function removeLoading() {
    loading_layer.classList.add('inactive');
    function remove() {
        loading_layer.style.display = 'none';
    };
    setTimeout(remove, 500);
};
setTimeout(removeLoading, 700);



// Anchor Point
const nav_anchor = document.querySelectorAll('.navigation-link a');
if (nav_anchor[0] != undefined) {
    const tab_nav = document.querySelector('.nav-tab');

    // Inisiasi Koordinat Sesi Laman
    let sections = null;
    let section_point = [];
    function get_sections() {
        section_point = [];
        sections = document.querySelectorAll('.navigable');

        sections.forEach(section => {
            let section_pos = {
                top: section.offsetTop,
                height: section.offsetTop + section.offsetHeight,
                minUp: section.getAttribute('data-min-up'),
                maxDown: section.getAttribute('data-max-down'),
                index: section.getAttribute('data-section')
            };
            section_point.push(section_pos);
        });
    };
    get_sections();
    window.addEventListener('resize', get_sections, false);

    // Navigasi Dengan Link Navigasi
    function toPoint(e) {
        let point = document.querySelector(`.navigable[data-section="${e.getAttribute('data-section')}"]`);
        document.body.scrollTop = point.offsetTop - point.getAttribute('data-anchor');
        document.documentElement.scrollTop = point.offsetTop - point.getAttribute('data-anchor');

        tab_nav.style.transitionDelay = '.5s';
        tab_nav.classList.remove('active');
    };

    // Navigasi Dengan Scroll Laman
    window.addEventListener(
        'scroll', function () {
            let scroll_count = Math.floor(window.scrollY);

            nav_anchor.forEach(a => { a.classList.remove('visited') });

            section_point.forEach(section => {
                if (scroll_count >= (section.top - section.minUp) && scroll_count < (section.height - section.maxDown)) {
                    const current_nav_link = document.querySelectorAll(`.navigation-link a[data-section="${section.index}`);
                    current_nav_link.forEach(link => {
                        link.classList.add('visited');
                    });
                };
            });
        }
    );

    // Tab Navigasi
    function toggleNav() {
        tab_nav.style.transitionDelay = '0s';
        tab_nav.classList.toggle('active');
    };
};



// Ketik Konten Tagline Per Huruf
const tagline_head = document.querySelector('#tagline-head');
const tagline_content = document.querySelector('#tagline-content');
if (tagline_content != undefined) {
    const content_top = [
        'Dapatkan',
        'Dengan'
    ];

    const content_list = [
        'Pekerjaan',
        'Proyek',
        'Penghasilan',
        'bisakerja.com'
    ];

    let count_act = 0;
    function setNewWord() {
        let top_index = 0;
        let word_index = 0;
        let top_word = content_top[1];
        let word = content_list[count_act];

        tagline_head.textContent = content_top[0];
        if (count_act == content_list.length - 1) {
            tagline_head.textContent = '';
        } else if (count_act == 0) {
            tagline_head.textContent = '';
            top_word = content_top[0];
        };

        function addLetter() {
            if (word_index < word.length) {
                if (count_act == content_list.length - 1 && top_word[top_index] != undefined ||
                    count_act == 0 && top_word[top_index] != undefined) {
                    tagline_head.textContent += top_word[top_index];
                    top_index++;
                };

                tagline_content.textContent += word[word_index];
                word_index++;
                setTimeout(addLetter, 75);
            } else {
                setTimeout(() => {
                    tagline_content.textContent = '';
                    count_act = (count_act + 1) % content_list.length;
                    setNewWord();
                }, 1500);
            };
        };
        addLetter();
    };
    setNewWord();
};



//Caraousel Hero
const carousel = document.querySelector('.carousel');
if (carousel != undefined) {
    function removeHighlight() {
        const c_cards = document.querySelectorAll('.c-card');
        c_cards[1].classList.remove('highlight');
        function slide() {
            c_cards[0].style.borderRightWidth = '0px';
            c_cards[0].style.minWidth = '0';
            c_cards[0].style.transform = 'skewY(-16deg) translateY(54px)';
            c_cards[1].style.minWidth = '150px';
            c_cards[1].style.transform = 'skewY(-16deg)';
            c_cards[1].classList.add('fliped');

            function newHighlight() {
                c_cards[2].classList.add('highlight');

                let first_to_last = c_cards[0];
                c_cards[0].remove();
                first_to_last.classList.remove('fliped');
                first_to_last.style.borderRightWidth = '8px';
                first_to_last.style.minWidth = '225px';
                first_to_last.style.transform = 'none';
                carousel.insertAdjacentElement('beforeend', first_to_last);

                setTimeout(removeHighlight, 2000);
            };
            setTimeout(newHighlight, 500);
        };
        setTimeout(slide, 200);
    };
    setTimeout(removeHighlight, 2000);
};



// Hitung Statistik Penggunaan
const use_stats = document.querySelectorAll('.count-stat');
if (use_stats[0] != undefined) {
    use_stats.forEach(stat => {
        let count = 0;
        function countUp() {
            if (count + Math.floor(stat.getAttribute('data-count') / 8) <= stat.getAttribute('data-count')) {
                stat.textContent = count += Math.floor(stat.getAttribute('data-count') / 8);
                setTimeout(countUp, 50);
            } else {
                stat.textContent = Number(stat.textContent) + 1;
                count = 0;
            }
        };
        setInterval(countUp, 2000);
        setTimeout(countUp, 1000);
    });
};



// Nyalakan Kotak Panduan
const steps = document.querySelectorAll('.step-box');
if (steps[0] != undefined) {
    let now_step = 3;
    setInterval(() => {
        now_step = (now_step + 1) % steps.length;
        document.querySelector('.step-box.active').classList.remove('active');
        steps[now_step].classList.add('active');
    }, 2000);
};



// Slider Logo Perusahaan
const manual_slider = document.querySelector('.slider-move');
if (manual_slider != undefined) {
    let startX = 0, newX = 0;

    manual_slider.addEventListener(
        'mousedown', e => {
            e.preventDefault();
            startX = e.clientX;

            document.addEventListener('mousemove', doSlide);
            document.addEventListener(
                'mouseup', function () {
                    document.removeEventListener('mousemove', doSlide);
                }
            );
        }
    );

    function doSlide(e) {
        newX = startX - e.clientX;
        startX = e.clientX;
        scroll_total = manual_slider.offsetLeft - newX;

        if (scroll_total < 0 && scroll_total >= (manual_slider.clientWidth - manual_slider.parentElement.clientWidth) * -1) {
            manual_slider.style.left = (scroll_total) + 'px';
        };
    }
};



// Jawaban Pertanyaan Umum
const q_box = document.querySelectorAll('.q-box');
if (q_box[0] != undefined) {
    const modal = document.querySelector('#q-modal');

    q_box.forEach(q => {
        q.addEventListener(
            'click', function () {
                modal.style.display = 'flex';
                modal.querySelector('.title').innerHTML = `Pertanyaan <b>#${q.getAttribute('data-q-num')}</b>`;
                modal.querySelector('#your-q').textContent = q.querySelector('p').textContent;

                const answers = q.getAttribute('data-q-answer').split('|');
                let answer_boxes = '';
                let delay = 2;
                answers.forEach(answer => {
                    answer_boxes += `
                        <div style="--delay: ${delay++}" class="q-answer">${answer}</div>
                    `;
                });
                modal.querySelector('.q-modal-answer').insertAdjacentHTML('beforeend', answer_boxes);

                function appearModal() {
                    modal.classList.add('show');
                };
                setTimeout(appearModal, 100);
            }
        );
    });

    function closeQuestion() {
        modal.classList.remove('show');

        function removeBackAction() {
            modal.style.display = 'none';
            modal.querySelector('.q-modal-answer').innerHTML = '<div style="--delay: 1" id="your-q"></div>';
        };
        setTimeout(removeBackAction, 300);
    };
};



// Handle Perpindahan Laman
function directTo(url) {
    setLoading();
    setTimeout(() => {
        window.location = url;
    }, 750);
};





// Halaman Daftar Lowongan

// Drowpdown Filter
const filter_dd = document.querySelectorAll('.filter-dd label');
if (filter_dd[0] != undefined) {
    filter_dd.forEach(dd => {
        dd.addEventListener(
            'click', function () {
                dd.parentElement.classList.toggle('active');
            }
        );
    });
};



// Filter Lowongan
const lowongan = document.querySelector('#lowongan');
if (lowongan != undefined) {
    const loker = document.querySelectorAll('.box');
    const not_found = document.querySelector('.not-found');
    const not_found2 = document.querySelector('.not-found.type-2');
    const notif_circle = document.querySelector('.notif-circle');
    let filter = {
        search: '',
        disabilitas: '',
        sektor: '',
        lokasi: '',
        gaji_minimum: '',
        gaji_maximum: '',
        tipe: '',
        fav: 'false'
    };

    function doFilter() {
        let found = false;
        loker.forEach(box => {
            let display = false;

            const params = {
                search: box.getAttribute('data-c') + box.getAttribute('data-j'),
                disabilitas: box.getAttribute('data-d'),
                sektor: box.getAttribute('data-s'),
                lokasi: box.getAttribute('data-l'),
                gaji_minimum: box.getAttribute('data-p1'),
                gaji_maximum: box.getAttribute('data-p2'),
                tipe: box.getAttribute('data-t'),
                fav: box.getAttribute('data-f')
            };

            let count_true = 0;
            let count_isset = 0;
            for (let key in filter) {
                if (filter[key] != '') {
                    count_isset++;
                    if (key === 'search') {
                        if (params[key].indexOf(filter[key]) > -1) {
                            count_true++;
                        };
                    } else if (key === 'gaji_minimum' || key === 'gaji_maximum') {
                        if (Number(filter['gaji_minimum']) <= Number(params['gaji_minimum']) && Number(filter['gaji_maximum']) >= Number(params['gaji_maximum'])) {
                            count_true++;
                        };
                    } else if (key === 'fav') {
                        if (filter[key] === params[key]) {
                            count_true++;
                        } else if (params[key] === 'true') {
                            count_true++;
                        };
                    } else {
                        if (filter[key].indexOf(params[key]) > -1) {
                            count_true++;
                        };
                    };
                };
            };

            if (count_true === count_isset) {
                display = true;
            };

            if (display === true) {
                box.style.display = 'flex';
                found = true;
            } else {
                box.style.display = 'none';
            };
        });

        if (found === false && filter.fav === 'false') {
            not_found.style.display = 'flex';
            not_found2.style.display = 'none';
        } else if (found === false && filter.fav === 'true') {
            not_found.style.display = 'none';
            not_found2.style.display = 'flex';
        } else {
            not_found.style.display = 'none';
            not_found2.style.display = 'none';
        };
    };

    function setFav(e) {
        if (e.parentElement.parentElement.getAttribute('data-f') == 'false') {
            e.parentElement.parentElement.setAttribute('data-f', 'true');
        } else {
            e.parentElement.parentElement.setAttribute('data-f', 'false');
        };

        if (document.querySelectorAll('.box[data-f="true"]').length > 0) {
            notif_circle.style.display = 'block';
        } else {
            notif_circle.style.display = 'none';
        };

        doFilter();
    };

    function toggleFav() {
        document.querySelector('.nav-tab').classList.remove('active');

        if (filter.fav === 'true') {
            filter.fav = 'false';
            notif_circle.parentElement.style.color = 'rgb(100, 100, 100)';
        } else {
            filter.fav = 'true';
            notif_circle.parentElement.style.color = 'rgb(39, 174, 96)';
        };

        doFilter();
    };

    function setField(poin, e) {
        filter[poin] = e.value;
        doFilter();
    };

    function setFilter(poin, e) {
        if (e.checked === true) {
            filter[poin] += e.value;
        } else {
            filter[poin] = filter[poin].replace(e.value, '');
        };
        filter[poin] = filter[poin].trim();

        doFilter();
    };
};



// Filter Proyek
const proyek = document.querySelector('#proyek');
if (proyek != undefined) {
    const loker = document.querySelectorAll('.box');
    const not_found = document.querySelector('.not-found');
    const not_found2 = document.querySelector('.not-found.type-2');
    const notif_circle = document.querySelector('.notif-circle');
    let filter = {
        search: '',
        kategori: '',
        lokasi: '',
        tenggat: '',
        harga_minimum: '',
        harga_maximum: '',
        fav: 'false'
    };

    function doFilter() {
        let found = false;
        loker.forEach(box => {
            let display = false;

            const params = {
                search: box.getAttribute('data-n'),
                kategori: box.getAttribute('data-k'),
                lokasi: box.getAttribute('data-l'),
                tenggat: box.getAttribute('data-t'),
                harga_minimum: box.getAttribute('data-p1'),
                harga_maximum: box.getAttribute('data-p2'),
                fav: box.getAttribute('data-f')
            };

            let count_true = 0;
            let count_isset = 0;
            for (let key in filter) {
                if (filter[key] != '') {
                    count_isset++;
                    if (key === 'search') {
                        if (params[key].indexOf(filter[key]) > -1) {
                            count_true++;
                        };
                    } else if (key === 'harga_minimum' || key === 'harga_maximum') {
                        if (Number(filter['harga_minimum']) <= Number(params['harga_minimum']) && Number(filter['harga_maximum']) >= Number(params['harga_maximum'])) {
                            count_true++;
                        };
                    } else if (key === 'fav') {
                        if (filter[key] === params[key]) {
                            count_true++;
                        } else if (params[key] === 'true') {
                            count_true++;
                        };
                    } else {
                        if (filter[key].indexOf(params[key]) > -1) {
                            count_true++;
                        };
                    };
                };
            };

            if (count_true === count_isset) {
                display = true;
            };

            if (display === true) {
                box.style.display = 'flex';
                found = true;
            } else {
                box.style.display = 'none';
            };
        });

        if (found === false && filter.fav === 'false') {
            not_found.style.display = 'flex';
            not_found2.style.display = 'none';
        } else if (found === false && filter.fav === 'true') {
            not_found.style.display = 'none';
            not_found2.style.display = 'flex';
        } else {
            not_found.style.display = 'none';
            not_found2.style.display = 'none';
        };
    };

    function setFav(e) {
        if (e.parentElement.parentElement.getAttribute('data-f') == 'false') {
            e.parentElement.parentElement.setAttribute('data-f', 'true');
        } else {
            e.parentElement.parentElement.setAttribute('data-f', 'false');
        };

        if (document.querySelectorAll('.box[data-f="true"]').length > 0) {
            notif_circle.style.display = 'block';
        } else {
            notif_circle.style.display = 'none';
        };

        doFilter();
    };

    function toggleFav() {
        document.querySelector('.nav-tab').classList.remove('active');

        if (filter.fav === 'true') {
            filter.fav = 'false';
            notif_circle.parentElement.style.color = 'rgb(100, 100, 100)';
        } else {
            filter.fav = 'true';
            notif_circle.parentElement.style.color = 'rgb(39, 174, 96)';
        };

        doFilter();
    };

    function setField(poin, e) {
        filter[poin] = e.value;
        doFilter();
    };

    function setFilter(poin, e) {
        if (e.checked === true) {
            filter[poin] += e.value;
        } else {
            filter[poin] = filter[poin].replace(e.value, '');
        };
        filter[poin] = filter[poin].trim();

        doFilter();
    };
};



// Collapse Filter
function slideFilter() {
    document.querySelector('#filter').classList.toggle('active');
};



// Focus Mode
const focus_btn = document.querySelector('.focus-mode-btn');
if (focus_btn != undefined) {
    const detail_container = document.querySelector('.detail-container');
    focus_btn.addEventListener(
        'click', function () {
            document.querySelector('body').classList.toggle('focus-mode');
            detail_container.classList.add('blur-first');
        }
    );

    focus_btn.addEventListener(
        'mouseleave', function () {
            detail_container.classList.remove('blur-first');
        }
    );
};