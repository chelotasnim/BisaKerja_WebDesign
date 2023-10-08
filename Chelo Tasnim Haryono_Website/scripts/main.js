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
const nav_anchor = document.querySelectorAll('.nav-link a');
if (nav_anchor[0] != undefined) {

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
    };

    // Navigasi Dengan Scroll Laman
    window.addEventListener(
        'scroll', function () {
            let scroll_count = Math.floor(window.scrollY);

            nav_anchor.forEach(a => { a.classList.remove('visited') });

            section_point.forEach(section => {
                if (scroll_count >= (section.top - section.minUp) && scroll_count < (section.height - section.maxDown)) {
                    document.querySelector(`.nav-link a[data-section="${section.index}`).classList.add('visited');
                };
            });
        }
    );
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