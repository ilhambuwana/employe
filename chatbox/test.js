document.addEventListener("DOMContentLoaded", () => {
    const msgerForm = document.querySelector(".msger-inputarea");
    const msgerInput = document.querySelector(".msger-input");
    const msgerChat = document.querySelector(".msger-chat");

    msgerForm.addEventListener("submit", event => {
        event.preventDefault();

        const msgText = msgerInput.value;
        if (!msgText) return;

        appendMessage("Filter Coding", "right", "https://image.flaticon.com/icons/svg/145/145867.svg", msgText);
        msgerInput.value = "";

        botResponse(msgText);
    });

    function appendMessage(name, side, img, text) {
        const msgHTML = `
            <div class="msg ${side}-msg">
                <div class="msg-img" style="background-image: url(${img})"></div>

                <div class="msg-bubble">
                    <div class="msg-info">
                        <div class="msg-info-name">${name}</div>
                        <div class="msg-info-time">${formatDate(new Date())}</div>
                    </div>

                    <div class="msg-text">${text}</div>
                </div>
            </div>
        `;

        msgerChat.insertAdjacentHTML("beforeend", msgHTML);
        msgerChat.scrollTop = msgerChat.scrollHeight;
    }

    function botResponse(rawText) {
        const responses = {
            // Topik terkait kebijakan dan prosedur perusahaan
            "Pertanyaan terkait cuti yang tersedia bagi karyawan?": "Karyawan memiliki 12 hari cuti tahunan dan 5 hari cuti sakit.",
            "Bagaimana proses pengajuan kenaikan gaji?": "Proses pengajuan kenaikan gaji dimulai dengan evaluasi kinerja yang diajukan ke manajer langsung.",
            "Apa saja peraturan terkait jam kerja dan absensi?": "Jam kerja adalah dari pukul 9 pagi hingga 6 sore. Karyawan diharapkan untuk absen menggunakan sistem fingerprint di pintu masuk.",

            // Topik terkait fasilitas dan sumber daya perusahaan
            "Di mana saya bisa menemukan formulir cuti?": "Formulir cuti dapat ditemukan di portal perusahaan di bagian dokumen HR.",
            "Bagaimana cara memesan ruang rapat?": "Ruang rapat dapat dipesan melalui aplikasi internal perusahaan atau dengan menghubungi resepsionis.",
            "Siapa yang bisa saya hubungi untuk masalah IT?": "Anda dapat menghubungi tim IT melalui email it_support@company.com atau langsung ke meja bantuan IT di lantai 3.",

            // Topik terkait program dan kegiatan perusahaan
            "Kapan acara perayaan ulang tahun perusahaan diadakan?": "Acara perayaan ulang tahun perusahaan diadakan setiap tanggal 10 Januari.",
            "Apa saja program pelatihan yang tersedia untuk karyawan?": "Perusahaan menawarkan berbagai program pelatihan termasuk pelatihan kepemimpinan, pengembangan keterampilan teknis, dan manajemen proyek.",
            "Bagaimana cara mendaftar untuk program mentoring?": "Anda dapat mendaftar untuk program mentoring dengan mengisi formulir di portal karyawan atau menghubungi departemen HR.",

            // Topik terkait informasi umum perusahaan
            "Apa visi dan misi perusahaan?": "Visi perusahaan adalah menjadi pemimpin di industri teknologi dengan misi untuk inovasi berkelanjutan dan kepuasan pelanggan.",
            "Siapa saja anggota direksi perusahaan?": "Anggota direksi perusahaan termasuk CEO John Doe, CFO Jane Smith, dan CTO Robert Johnson.",
            "Di mana kantor pusat perusahaan berlokasi?": "Kantor pusat perusahaan berlokasi di Jalan Merdeka No. 123, Jakarta.",

            // Topik terkait proses internal dan alur kerja
            "Bagaimana prosedur pengajuan cuti?": "Prosedur pengajuan cuti dimulai dengan mengisi formulir cuti dan mendapatkan persetujuan dari manajer langsung.",
            "Siapa yang harus saya hubungi untuk mengajukan perbaikan peralatan?": "Anda dapat mengajukan perbaikan peralatan dengan menghubungi tim fasilitas melalui email facilities@company.com.",
            "Apa langkah-langkah dalam proses onboarding karyawan baru?": "Proses onboarding meliputi orientasi perusahaan, pengenalan tim, pelatihan awal, dan pengaturan akun dan perangkat kerja."
        };

        const responseText = responses[rawText] || "Maaf, saya tidak mengerti pertanyaan Anda. Bisa Anda ulangi dengan pertanyaan yang lebih spesifik?";
        setTimeout(() => {
            appendMessage("Computer", "left", "https://image.flaticon.com/icons/svg/327/327779.svg", responseText);
        }, 1000);
    }

    function formatDate(date) {
        const h = "0" + date.getHours();
        const m = "0" + date.getMinutes();

        return `${h.slice(-2)}:${m.slice(-2)}`;
    }
});
