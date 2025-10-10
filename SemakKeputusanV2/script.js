// Initialize jsPDF
const { jsPDF } = window.jspdf;

document.addEventListener('DOMContentLoaded', function() {
    const checkBtn = document.getElementById('checkBtn');
    const studentIdInput = document.getElementById('studentId');
    const successResult = document.getElementById('successResult');
    const failMessage = document.getElementById('failMessage');
    const tryAgainBtn = document.getElementById('tryAgainBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Student database
    const studentDatabase = {
        "STD2023003": {
            status: "fail",
        },
        "2251706": {
            status: "fail",
        },
        "2550196": {
            status: "fail",
        },
        "2250584": {
            status: "fail",
        },
        "2251418": {
            status: "fail",
        },
        "2251651": {
            status: "fail",
        },
        "2250876": {
            status: "fail",
        },
        "2251376": {
            status: "fail",
        },
        "2251028": {
            status: "fail",
        },
        "2251029": {
            status: "fail",
        },
        "2250879": {
            status: "fail",
        },
        "2251279": {
            status: "fail",
        },
        "2230833": {
            status: "fail",
        },
        "2250159": {
            status: "fail",
        },
        "2251524": {
            status: "fail",
        },
        "2250797": {
            status: "fail",
        },
        "2250626": {
            status: "fail",
        },
        "2251873": {
            status: "fail",
        },
        "2250956": {
            status: "fail",
        },
        "2250233": {
            status: "fail",
        },
        "2251271": {
            status: "fail",
        },
        "2251189": {
            status: "fail",
        },
        "2251285": {
            status: "fail",
        },
        "2251382": {
            status: "fail",
        },
        "2251650": {
            status: "fail",
        },
        "2250955": {
            status: "fail",
        },
        "2251456": {
            status: "fail",
        },
        "2251667": {
            status: "fail",
        },
        "2240224": {
            status: "success",
            name: "Muhammad Taufiq bin Rosdan",
            faculty: "Fakulti Pengajian dan Pengurusan Pertahanan",
            phone: "012-3456789",
            year: "Tahun 1",
            room: "_____",
            exco: "Multimedia",
            careTaker: "Muhammad Nuramirul Afiq bin Mad Azhar",
            dateStart: "1 November 2025"
        },
        "2250349": {
            status: "success",
            name: "THIVYAN A/L THILAIKUMARAN ",
            faculty: "FAKULTI KEJURUTERAAN",
            phone: "01116500180",
            year: "Tahun 1",
            room: "228",
            exco: "EXCO PEMBANGUNAN INSAN & KESUKARELAWANAN",
            careTaker: "Muhammad Taufiq bin Rosdan",
            dateStart: "13 Oktober 2025"
        },
        "2251603": {
            status: "success",
            name: "MUHAMMAD DANISH AIBAQ BIN FAUZI",
            faculty: "FAKULTI PENGAJIAN DAN PENGURUSAN PERTAHANAN",
            phone: "01131991069",
            year: "Tahun 1",
            room: "427",
            exco: "EXCO KEBAJIKAN & KEROHANIAN",
            careTaker: "Muhammad Taufiq bin Rosdan",
            dateStart: "13 Oktober 2025"
        },
        "2251509": {
            status: "success",
            name: "MUHAMMAD AMIRULLAH BIN AZHAR",
            faculty: "AKADEMI PENGAJIAN PERTAHANAN ISLAM",
            phone: "0166073015",
            year: "Tahun 1",
            room: "512",
            exco: "EXCO KESELAMATAN & KESIHATAN",
            careTaker: "Muhammad Taufiq bin Rosdan",
            dateStart: "13 Oktober 2025"
        },
        "2250944": {
            status: "success",
            name: "MUHAMMAD DARWISY BIN MOHD ZAKY",
            faculty: "FAKULTI SAINS DAN TEKNOLOGI PERTAHANAN",
            phone: "0165480752",
            year: "Tahun 1",
            room: "331",
            exco: "SETIAUSAHA AGUNG",
            careTaker: "Muhammad Taufiq bin Rosdan",
            dateStart: "13 Oktober 2025"
        },
        "2251027": {
            status: "success",
            name: "MOHAMAD IZMAN BIN ABD HALIM",
            faculty: "FAKULTI PENGAJIAN DAN PENGURUSAN PERTAHANAN",
            phone: "01114144340",
            year: "Tahun 1",
            room: "337",
            exco: "EXCO PEMBANGUNAN INSAN & KESUKARELAWANAN",
            careTaker: "Muhammad Taufiq bin Rosdan",
            dateStart: "13 Oktober 2025"
        },
        "2251563": {
            status: "success",
            name: "CHEN YONG JIE",
            faculty: "FAKULTI PENGAJIAN DAN PENGURUSAN PERTAHANAN",
            phone: "0169491879",
            year: "Tahun 1",
            room: "423",
            exco: "EXCO AKADEMIK & KEPIMPINAN",
            careTaker: "Muhammad Taufiq bin Rosdan",
            dateStart: "13 Oktober 2025"
        },
        "2251790": {
            status: "success",
            name: "MUHAMMAD AMIRUL HAFIS BIN MOHD AHAIR",
            faculty: "PUSAT BAHASA",
            phone: "0175637973",
            year: "Tahun 1",
            room: "335",
            exco: "TIMBALAN SETIAUSAHA AGUNG",
            careTaker: "Muhammad Taufiq bin Rosdan",
            dateStart: "13 Oktober 2025"
        },
        "2251517": {
            status: "success",
            name: "MUHAMMAD HIDAYAT BIN SHAH RON",
            faculty: "AKADEMI PENGAJIAN PERTAHANAN ISLAM",
            phone: "0148817408",
            year: "Tahun 1",
            room: "513",
            exco: "BENDAHARI KEHORMAT",
            careTaker: "Muhammad Taufiq bin Rosdan",
            dateStart: "13 Oktober 2025"
        },
        "2250302": {
            status: "success",
            name: "KESHWINAANANTHAN PILLAI A/L APPOOPILLAI",
            faculty: "FAKULTI KEJURUTERAAN",
            phone: "0172837362",
            year: "Tahun 1",
            room: "224",
            exco: "EXCO SUKAN & REKREASI",
            careTaker: "Muhammad Taufiq bin Rosdan",
            dateStart: "13 Oktober 2025"
        },
        "2250950": {
            status: "success",
            name: "MUHAMMAD HARITH AKIF SYAHMI BIN SUFAIZAL",
            faculty: "FAKULTI SAINS DAN TEKNOLOGI PERTAHANAN",
            phone: "0198478981",
            year: "Tahun 1",
            room: "224",
            exco: "EXCO KEBAJIKAN & KEROHANIAN",
            careTaker: "Muhammad Taufiq bin Rosdan",
            dateStart: "13 Oktober 2025"
        },
        "2251514": {
            status: "success",
            name: "MUHAMMAD FAQRUL FAIZ BIN AHMAD PUAD",
            faculty: "AKADEMI PENGAJIAN PERTAHANAN ISLAM",
            phone: "0123959904",
            year: "Tahun 1",
            room: "513",
            exco: "EXCO MULTIMEDIA & PUBLISITI",
            careTaker: "Muhammad Taufiq bin Rosdan",
            dateStart: "13 Oktober 2025"
        },
        "2251365": {
            status: "success",
            name: "CRISTOPHER EMANUEL ANAK EWARD",
            faculty: "FAKULTI PENGAJIAN DAN PENGURUSAN PERTAHANAN",
            phone: "0168745612",
            year: "Tahun 1",
            room: "416",
            exco: "EXCO KELESTARIAN & ALAM SEKITAR",
            careTaker: "Muhammad Taufiq bin Rosdan",
            dateStart: "13 Oktober 2025"
        },
        "2250920": {
            status: "success",
            name: "KAATHIR A/L SUGUMARAN",
            faculty: "FAKULTI SAINS DAN TEKNOLOGI PERTAHANAN",
            phone: "01116924758",
            year: "Tahun 1",
            room: "328",
            exco: "EXCO MULTIMEDIA & PUBLISITI",
            careTaker: "Muhammad Taufiq bin Rosdan",
            dateStart: "13 Oktober 2025"
        },
        "2251885": {
            status: "success",
            name: "MUHAMMAD NAJMI BIN SAHRULRIZAD",
            faculty: "AKADEMI KECERGASAN PERTAHANAN",
            phone: "0136077169",
            year: "Tahun 1",
            room: "502",
            exco: "TIMBALAN PRESIDEN",
            careTaker: "Muhammad Taufiq bin Rosdan",
            dateStart: "13 Oktober 2025"
        }
    };
    
    checkBtn.addEventListener('click', function() {
        const studentId = studentIdInput.value.trim().toUpperCase();
        
        if (!studentId) {
            alert('Please enter your Student ID');
            return;
        }
        
        // Simulate network delay
        setTimeout(() => {
            const studentData = studentDatabase[studentId];
            
            if (studentData) {
                if (studentData.status === "success") {
                    // Populate the success data
                    document.getElementById('resultName').textContent = studentData.name;
                    document.getElementById('resultId').textContent = studentId;
                    document.getElementById('resultFaculty').textContent = studentData.faculty;
                    document.getElementById('resultPhone').textContent = studentData.phone;
                    document.getElementById('resultYear').textContent = studentData.year;
                    
                    // Show success result
                    failMessage.style.display = 'none';
                    successResult.style.display = 'block';
                } else {
                    // Update fail message with reason
                    document.querySelector('.fail-message p').textContent = 
                        `Dukacita dimaklumkan permohonan anda tidak berjaya. Terima kasih.`;
                    
                    // Show fail message
                    successResult.style.display = 'none';
                    failMessage.style.display = 'block';
                }
            } else {
                // Student ID not found
                document.querySelector('.fail-message p').textContent = 
                    'Tiada Rekod Permohonan.';
                
                successResult.style.display = 'none';
                failMessage.style.display = 'block';
            }
            
            // Scroll to result
            document.querySelector('.result-container, .fail-message').scrollIntoView({
                behavior: 'smooth'
            });
        }, 500); // Simulate network delay
    });
    
    tryAgainBtn.addEventListener('click', function() {
        failMessage.style.display = 'none';
        studentIdInput.focus();
    });
    
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        generateAdmissionSlip();
    });
    
    function generateAdmissionSlip() {
        const studentId = studentIdInput.value.trim().toUpperCase();
        const studentData = studentDatabase[studentId];
        
        if (!studentData || studentData.status !== "success") return;
        
        // Create new PDF in portrait mode
        const doc = new jsPDF({
            orientation: "portrait",
            unit: "mm"
        });

        // Set document properties
        doc.setProperties({
            title: `Slip Tawaran MTKT - ${studentData.name}`,
            subject: 'Tawaran Keahlian MTKT',
            author: 'Majlis Tertinggi Kolej Tuah',
            keywords: 'admission, university, slip',
            creator: 'Majlis Tertinggi Kolej Tuah'
        });

        // Add background watermark
        doc.setFillColor(240, 240, 240);
        doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F');
        doc.setTextColor(200, 200, 200);
        doc.setFontSize(40);
        doc.text("", 140, 230, { angle: 45, align: 'center' });
        
        // Reset text color
        doc.setTextColor(0, 0, 0);

        // Add header with university info
        doc.setFillColor(44, 62, 80); // Dark blue
        doc.rect(0, 0, doc.internal.pageSize.width, 20, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("SLIP TAWARAN KEAHLIAN BADAN PELAJAR", 108, 10, { align: 'center' });
        doc.setFontSize(10);
        doc.text("MAJLIS TERTINGGI KOLEJ TUAH (MTKT)", 108, 15, { align: 'center' });

        // Main content container
        doc.setDrawColor(44, 62, 80);
        doc.setLineWidth(0.5);
        doc.rect(10, 25, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 35);

        // Student photo placeholder with border
        doc.setFillColor(255, 255, 255);
        doc.rect(15, 31, 34, 43, 'F');
        doc.addImage("https://via.placeholder.com/150x200?text=Photo", "JPEG", 15, 31, 34, 43);
        doc.rect(15, 31, 34, 43); // Border

        // Student information section
        doc.setTextColor(44, 62, 80);
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text("MAKLUMAT DIRI", 54, 35);
        
        doc.setFont("helvetica", "normal");
        doc.text(`Nama Penuh : ${studentData.name}`, 54, 42);
        doc.text(`Nombor Matrik : ${studentId}`, 54, 48);
        doc.text(`Fakulti : ${studentData.faculty}`, 54, 54);
        doc.text(`No Telefon : ${studentData.phone}`, 54, 60);
        doc.text(`No Bilik : ${studentData.room}`, 54, 66);

        // Academic details section
        doc.setFont("helvetica", "bold");
        doc.text("MAKLUMAT LANTIKAN", 54, 78);
        
        doc.setFont("helvetica", "normal");
        doc.text(`Jawatan : ${studentData.exco}`, 54, 85);
        doc.text(`Caretaker : ${studentData.careTaker}`, 54, 91);
        doc.text(`Tarikh Mula Lantikan : ${studentData.dateStart}`, 54, 97);
        doc.text(`Tarikh Tamat Lantikan : 30 September 2026`, 54, 103);
        doc.setFontSize(10);
        doc.text(`Saya, dengan penuh rasa tanggungjawab dan kesedaran, BERJANJI akan melaksanakan tugas dan amanah`, 15, 165);
        doc.text(`sebagai ahli MTKT dengan sepenuh komitmen saya dan sebaik-baiknya serta mematuhi Perlembagaan MTKT.`, 15, 170);
        doc.text(`Saya berikrar akan:`, 15, 180);
        doc.text(`1. Memegang amanah ini dengan penuh integriti, ketelusan dan rasa tanggungjawab demi kepentingan mahasiswa,`, 15, 190);
        doc.text(`institusi, dan masyarakat.`, 19, 195);
        doc.text(`2. Menolak segala bentuk salah guna kuasa, unsur pilih kasih, dan kepentingan peribadi dalam menjalankan`, 15, 200);
        doc.text(`tugas kepimpinan.`, 19, 205);
        doc.text(`3. Bekerja secara profesional, berdisiplin dan sistematik dalam setiap tindakan, mesyuarat dan urusan pentadbiran.`, 15, 210);
        doc.text(`4. Mengutamakan kepentingan bersama berbanding kepentingan individu atau kumpulan, dan sentiasa bersikap adil`, 15, 215);
        doc.text(`serta terbuka dalam membuat keputusan.`, 19, 220);
        doc.text(`5. Menjadi agen perubahan yang berani bersuara dan berfikir secara kritikal, serta komited menyuarakan isu-isu`, 15, 225);
        doc.text(`mahasiswa di Kolej Kediaman secara berhemah dan berfakta.`, 19, 230);
        doc.text(`6. Menjaga nama baik dan reputasi universiti, serta tidak terlibat dalam sebarang aktiviti yang boleh mencemarkan`, 15, 235);
        doc.text(`imej institusi.`, 19, 240);
        doc.text(`7. Sanggup ditegur dan bersedia memperbaiki kelemahan diri, demi memperkukuh kepercayaan mahasiswa`, 15, 245);
        doc.text(`MTKT.`, 19, 250);

        // University seal and barcode
        doc.addImage("https://via.placeholder.com/80x80?text=University+Seal", "JPEG", 180, 30, 25, 25);
        doc.addImage("https://via.placeholder.com/80x30?text=Barcode+"+studentId, "JPEG", 180, 60, 25, 10);

        // Important notes section
        doc.setFontSize(10);
        doc.setFont("helvetica", "bold");
        doc.text("MAKLUMAT PENTING", 15, 120);
        doc.text("AKU JANJI AHLI MTKT", 15, 160);
        
        doc.setFont("helvetica", "normal");
        doc.text("1. Slip ini perlu DICETAK dan DITANDATANGANI oleh ahli baharu.", 15, 125);
        doc.text("2. Slip ini perlu dibawa ke Mesyuarat Agung Tahunan MTKT 2025/26.", 15, 130);
        doc.text("3. Slip ini menunjukkan pengesahan rasmi sebagai ahli MTKT 2025/26.", 15, 135);
        doc.text("4. Ahli MTKT perlu menampal gambar bersaiz passport di ruangan gambar.", 15, 140);

        // Signature section
        doc.setFontSize(10);
        doc.text("Tandatangan Penasihat: _________________________", 109, 275);
        doc.text("Tarikh: _______________", 109, 283);
        
        doc.text("Tandatangan Ahli: _________________________", 15, 275);
        doc.text("Tarikh: 13 Oktober 2025", 15, 283);

        // Footer
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text('Slip Tawaran ini adalah cetakan komputer.', 15, 293, { align: 'left' });
        doc.text(`Dicetak pada : ${new Date().toLocaleString()}`, 198, 293, { align: 'right' });

        // Save the PDF
        doc.save(`Slip Tawaran MTKT - ${studentId}.pdf`);
    }

    // Helper function to calculate expected graduation year
    function calculateGraduation(academicYear, role) {
        const years = role.toLowerCase().includes("postgraduate") ? 2 : 4;
        const startYear = parseInt(academicYear.split('/')[0]);
        return `${startYear + years}/${startYear + years + 1}`;
    }
});
