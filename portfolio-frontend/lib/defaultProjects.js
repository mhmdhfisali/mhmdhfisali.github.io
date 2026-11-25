export const defaultProjects = [
  {
    _id: "project-ppic-smii",
    title: "PPIC System: Production Planning & Inventory Control",
    titleEn: "PPIC System: Production Planning & Inventory Control",
    slug: { current: "ppic-system-smii" },
    projectType: "company",
    company: "PT Sinar Meadow International Indonesia",
    category: "web",
    deploymentStatus: "internal",
    role: "Web Development Intern / Full-Stack Engineer",
    roleEn: "Web Development Intern / Full-Stack Engineer",
    summary:
      "Sistem enterprise internal untuk perencanaan kapasitas produksi, monitoring stok bahan baku formula margarin, dan penjadwalan batch harian secara terintegrasi di PT Sinar Meadow International Indonesia.",
    summaryEn:
      "Enterprise internal platform for production capacity planning, raw material inventory monitoring, and daily batch scheduling integration at PT Sinar Meadow International Indonesia.",
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS", "REST API", "Docker"],
    featuredOrder: 1,
    impactMetrics: [
      {
        value: "< 5 Menit",
        label: "Otomasi jadwal harian pabrik (dari sebelumnya manual 2 jam)",
        labelEn: "Automated daily plant scheduling (down from 2 hours manual)",
      },
      {
        value: "100%",
        label: "Akurasi kalkulasi kebutuhan bahan baku formula margarin",
        labelEn: "Margarine recipe ingredient requirement calculation accuracy",
      },
      {
        value: "Zero Conflict",
        label: "Eliminasi tumpang-tindih work order antar shift produksi",
        labelEn: "Elimination of multi-shift work order overlaps & scheduling conflicts",
      },
    ],
    caseStudyPhases: [
      {
        phaseName: "Fase 01",
        phaseNameEn: "Phase 01",
        topic: "Analisis Alur PPIC",
        topicEn: "Workflow Analysis",
        title: "Pemetaan Alur Produksi & Inventarisasi Formula",
        titleEn: "Production Mapping & Formula Inventory",
        description:
          "Menganalisis alur kerja manual penjadwalan pabrik margarin, standarisasi formula batch, serta kebutuhan pencatatan ketersediaan bahan baku secara real-time.",
        descriptionEn:
          "Analyzed margarine manufacturing scheduling workflows, recipe formulation standards, and real-time raw material requirements.",
      },
      {
        phaseName: "Fase 02",
        phaseNameEn: "Phase 02",
        topic: "Arsitektur Database",
        topicEn: "Database Architecture",
        title: "Desain Relasi Data Transaksional & Work Orders",
        titleEn: "Transactional Data Schema & Work Orders",
        description:
          "Merancang skema database relasional ternormalisasi untuk menangani multi-shift work order, estimasi pemakaian material, dan pelacakan batch code.",
        descriptionEn:
          "Designed normalized relational database schemas handling multi-shift work orders, material consumption projections, and batch code traceability.",
      },
      {
        phaseName: "Fase 03",
        phaseNameEn: "Phase 03",
        topic: "Implementasi & Integrasi",
        topicEn: "Implementation & Integration",
        title: "Pembangunan Modul Perencanaan & Pengujian Internal",
        titleEn: "Planning Module Implementation & Internal Validation",
        description:
          "Membangun antarmuka manajemen jadwal, kalkulator otomatis kebutuhan bahan baku, serta validasi operasional bersama tim produksi pabrik.",
        descriptionEn:
          "Implemented scheduling UI, automated ingredient requirement calculators, and conducted operational validation with plant production personnel.",
      },
    ],
  },
  {
    _id: "project-ipc-smii",
    title: "IPC System: In-Process Quality Control & Sampling Validation",
    titleEn: "IPC System: In-Process Quality Control & Sampling Validation",
    slug: { current: "ipc-system-smii" },
    projectType: "company",
    company: "PT Sinar Meadow International Indonesia",
    category: "web",
    deploymentStatus: "internal",
    role: "Web Development Intern / System Engineer",
    roleEn: "Web Development Intern / System Engineer",
    thumbnail: {
      url: "/images/projects/ipc/02-line-control-board.webp",
    },
    ursUrl: "https://drive.google.com/file/d/1w4wKxYpwN3p4seTWhDVsGxVj2CmoSKxF/view?usp=sharing",
    manualBookUrl: "https://drive.google.com/file/d/1N0MdCRBy9pLkaCA1VboyG7MSTIt-fHdS/view?usp=sharing",
    summary:
      "Sistem digitalisasi inspeksi mutu in-process (IPC) pabrik PT Sinar Meadow International Indonesia untuk pemantauan real-time lini kemas (Line A-G & Repack), input checklist parameter mutu (Stencil, Tare, Netto), integrasi kamera web langsung, penandaan area cacat (Defect Annotation), dan cap watermark anti-manipulasi.",
    summaryEn:
      "In-Process Quality Control (IPC) industrial digitalization platform for PT Sinar Meadow International Indonesia. Monitors real-time packaging lines (Line A-G & Repack), parameter checklists (Stencil, Tare, Netto), in-app web camera capture, defect canvas annotation, and tamper-evident watermarking.",
    techStack: [
      "PHP",
      "CodeIgniter / Laravel",
      "MySQL",
      "JavaScript",
      "HTML5 Canvas API",
      "Camera Web API",
      "Bootstrap",
      "Chart.js",
    ],
    featuredOrder: 2,
    impactMetrics: [
      {
        value: "1-2 Jam/Shift",
        label: "Penghematan waktu harian tim QA (eliminasi rekap form manual & pencarian binder)",
        labelEn: "Daily QA shift time saved (eliminated manual binder logs & paper collation)",
      },
      {
        value: "1.000+ Foto/Bln",
        label: "Digitalisasi foto bukti visual inspeksi ber-watermark waktu, shift, & anotasi cacat",
        labelEn: "Monthly inspection photos digitized with tamper-evident watermark & defect annotation",
      },
      {
        value: "8 Lini Kemas",
        label: "Validasi toleransi stencil, tare & netto real-time di Line A-G & Area Repack",
        labelEn: "Real-time stencil, tare & netto tolerance checks across Lines A-G & Repack",
      },
    ],
    galleryImages: [
      {
        url: "/images/projects/ipc/01-dashboard-menu.webp",
        caption: "Dashboard Menu IPC: Akses Cepat Input Pemeriksaan, Katalog Produk & Mode QA Command Center",
        captionEn: "IPC Dashboard Menu: Quick Access for Inspection Input, SKU Catalog & QA Command Center Mode",
      },
      {
        url: "/images/projects/ipc/02-line-control-board.webp",
        caption: "Packing Line Control Board: Monitoring Real-Time Shift Operasional Lini A-G & Area Repack",
        captionEn: "Packing Line Control Board: Real-Time Operational Shift Monitoring for Lines A-G & Repack Area",
      },
      {
        url: "/images/projects/ipc/03-step1-production-info.webp",
        caption: "Step 1 - Production Info: Tanggal Inspeksi Auto-Locked, Pilihan SKU Produk, Nomor Batch, & Palet",
        captionEn: "Step 1 - Production Info: Auto-Locked Date, Running SKU Selection, Batch & Pallet Sequence",
      },
      {
        url: "/images/projects/ipc/04-step2-parameter-checklist.webp",
        caption: "Step 2 - QC Checklist: Verifikasi Parameter Stencil, Berat Tare (g), & Netto Produk (kg) Berbasis Toleransi",
        captionEn: "Step 2 - QC Checklist: Stencil, Tare Weight (g), & Netto (kg) Parameter Verification with Tolerances",
      },
      {
        url: "/images/projects/ipc/05-qa-camera-viewfinder.webp",
        caption: "In-App QA Camera: Pengambilan Foto Bukti Fisik Kemasan Langsung di Peramban Web Tanpa Pindah Aplikasi",
        captionEn: "In-App QA Camera: Packaging Physical Evidence Capture Directly Inside Browser Without App Switching",
      },
      {
        url: "/images/projects/ipc/06-defect-annotation.webp",
        caption: "Defect Annotation & Watermark: Penandaan Area Cacat Lingkaran Merah & Cap Waktu/Shift Anti-Manipulasi",
        captionEn: "Defect Annotation & Watermark: Canvas Red Circle Marking & Anti-Tamper Date/Shift Timestamp",
      },
      {
        url: "/images/projects/ipc/07-step3-confirmation-summary.webp",
        caption: "Step 3 - Summary & Confirmation: Validasi Kelengkapan Foto & Data Batch Sebelum Commit ke Database",
        captionEn: "Step 3 - Summary & Confirmation: Photo Completeness & Batch Verification Prior to Database Commit",
      },
      {
        url: "/images/projects/ipc/08-inactive-line-declaration.webp",
        caption: "Inactive Line Declaration: Form Deklarasi Alasan Downtime Mesin & Transparansi Lini Non-Aktif",
        captionEn: "Inactive Line Declaration: Downtime Reason Logging & Machine Breakdown Transparency Form",
      },
    ],
    caseStudyPhases: [
      {
        phaseName: "Fase 01",
        phaseNameEn: "Phase 01",
        topic: "Spesifikasi Sistem (URS)",
        topicEn: "System Specification (URS)",
        title: "Pemetaan Kebutuhan Departemen QA/QM & URS Standarisasi",
        titleEn: "QA/QM Department Requirements & URS Standardization",
        description:
          "Merumuskan User Requirement Specification (URS) bersama Project Leader Jeremy Louis Adisurya untuk mengeliminasi pencatatan binder fisik, mengotomasi penguncian tanggal, dan menyusun matriks toleransi kemasan produk margarin.",
        descriptionEn:
          "Formulated User Requirement Specifications (URS) alongside Project Leader Jeremy Louis Adisurya to eliminate physical binders, auto-lock inspection dates, and standardize tolerance matrices.",
        previewImage: {
          url: "/images/projects/ipc/01-dashboard-menu.webp",
        },
      },
      {
        phaseName: "Fase 02",
        phaseNameEn: "Phase 02",
        topic: "In-App Camera & Annotation",
        topicEn: "In-App Camera & Annotation",
        title: "Integrasi Kamera Web, Watermark Timestamp & Canvas Anotasi",
        titleEn: "Web Camera Integration, Watermark Timestamp & Canvas Annotation",
        description:
          "Membangun modul viewfinder kamera in-app dengan capture instan, canvas drawing untuk melingkari titik cacat kemasan berwarna merah, serta watermarking dinamis anti-manipulasi berisi tanggal, jam WIB, shift, dan nama lini.",
        descriptionEn:
          "Engineered in-app camera viewfinder with instant capture, interactive canvas defect annotation (red circle), and tamper-evident watermarking encoding date, WIB time, shift, and line name.",
        previewImage: {
          url: "/images/projects/ipc/06-defect-annotation.webp",
        },
      },
      {
        phaseName: "Fase 03",
        phaseNameEn: "Phase 03",
        topic: "Control Board & Akuntabilitas",
        topicEn: "Control Board & Accountability",
        title: "Packing Line Control Board & Deklarasi Inactive Line",
        titleEn: "Packing Line Control Board & Inactive Line Accountability",
        description:
          "Mengembangkan papan kontrol terpusat untuk memantau status inspeksi Shift 1-3 pada Lini A-G dan Repack, form deklarasi downtime mesin saat lini non-aktif, serta summary validasi kelengkapan foto sebelum penyimpanan permanen.",
        descriptionEn:
          "Built centralized control board monitoring inspection status across Shifts 1-3 for Lines A-G & Repack, downtime declaration forms for inactive lines, and multi-step validation checks.",
        previewImage: {
          url: "/images/projects/ipc/02-line-control-board.webp",
        },
      },
    ],
  },
  {
    _id: "project-dashboard-smii",
    title: "Executive Production & Operational Dashboard SMII",
    titleEn: "SMII Executive Production & Operational Analytics Dashboard",
    slug: { current: "dashboard-smii" },
    projectType: "company",
    company: "PT Sinar Meadow International Indonesia",
    category: "system",
    deploymentStatus: "internal",
    role: "Web Developer / Data Visualization",
    roleEn: "Web Developer / Data Visualization",
    summary:
      "Dashboard analitik eksekutif terpusat yang memantau performa lini produksi pabrik SMII, efisiensi OEE mesin, pencapaian target harian, dan metrik operasional secara real-time.",
    summaryEn:
      "Centralized executive analytics dashboard monitoring SMII plant production line performance, machine OEE efficiency, daily output targets, and real-time operational KPIs.",
    techStack: ["Next.js", "React", "Tailwind CSS", "PHP Backend", "MySQL", "Data Analytics", "Chart.js"],
    featuredOrder: 3,
    impactMetrics: [
      {
        value: "24/7 Real-Time",
        label: "Pemantauan efisiensi OEE & throughput lini pengemasan",
        labelEn: "24/7 OEE efficiency & packaging line throughput telemetry",
      },
      {
        value: "50% Lebih Cepat",
        label: "Deteksi dini anomali mesin & peringatan downtime operasional",
        labelEn: "Early machine anomaly detection & operational downtime alerts",
      },
      {
        value: "Multi-Lini",
        label: "Integrasi pelaporan terpusat lintas departemen produksi",
        labelEn: "Centralized cross-departmental production reporting unification",
      },
    ],
    caseStudyPhases: [
      {
        phaseName: "Fase 01",
        phaseNameEn: "Phase 01",
        topic: "Konsolidasi Data",
        topicEn: "Data Aggregation",
        title: "Penyatuan Sumber Data Operasional Multi-Lini",
        titleEn: "Multi-Line Operational Data Unification",
        description:
          "Mengagregasi data keluaran produksi dari beragam lini pengemasan dan proses menjadi satu gudang data operasional terstruktur.",
        descriptionEn:
          "Aggregated production output records across diverse packaging and processing lines into a structured operational data warehouse.",
      },
      {
        phaseName: "Fase 02",
        phaseNameEn: "Phase 02",
        topic: "Visualisasi UI/UX",
        topicEn: "UI/UX Visualization",
        title: "Perancangan Widget KPI & Telemetri Visual",
        titleEn: "KPI Widgets & Visual Telemetry Design",
        description:
          "Merancang visual interaktif grafik throughput, persentase downtime, dan status utilisasi mesin yang mudah dibaca pimpinan produksi.",
        descriptionEn:
          "Designed interactive widgets displaying throughput trends, downtime ratios, and machine utilization states for plant leaders.",
      },
      {
        phaseName: "Fase 03",
        phaseNameEn: "Phase 03",
        topic: "Live Monitoring",
        topicEn: "Live Monitoring",
        title: "Pembaruan Berkala & Optimasi Kecepatan Tampil",
        titleEn: "Interval Refresh & Render Performance Optimization",
        description:
          "Mengoptimalkan query analitik besar agar grafik dan rangkuman angka dapat dirender dengan instan dan hemat sumber daya server.",
        descriptionEn:
          "Optimized analytical database queries ensuring immediate visual rendering with minimal server resource consumption.",
      },
    ],
  },
  {
    _id: "project-absolutestore",
    title: "absolutestore.id: Automated Digital Goods & Top-Up Platform",
    titleEn: "absolutestore.id: Automated Digital Goods & Top-Up Platform",
    slug: { current: "absolutestore-id" },
    projectType: "personal",
    category: "web",
    deploymentStatus: "live",
    role: "Founder & Lead Full-Stack Developer",
    roleEn: "Founder & Lead Full-Stack Developer",
    summary:
      "Platform e-commerce digital top-up game dan voucher instan live dengan integrasi payment gateway otomatis, pemrosesan transaksi berkecepatan tinggi, dan webhook real-time.",
    summaryEn:
      "Live production digital e-commerce store for instant game top-ups and vouchers featuring automated payment gateway integration, high-concurrency order engine, and real-time webhooks.",
    demoUrl: "https://absolutestore.id",
    githubUrl: "https://github.com/mhmdhfisali",
    techStack: ["Next.js", "React", "Node.js", "PHP", "MySQL", "Payment Gateway API", "Nginx", "Linux"],
    featuredOrder: 4,
    impactMetrics: [
      {
        value: "99.9%",
        label: "Uptime production server di domain publik absolutestore.id",
        labelEn: "Production server uptime on public domain absolutestore.id",
      },
      {
        value: "< 3 Detik",
        label: "Kecepatan validasi pembayaran QRIS & webhook otomatis",
        labelEn: "Instant QRIS payment validation & automated webhook callback",
      },
      {
        value: "100% Otomatis",
        label: "Pemrosesan transaksi digital tanpa intervensi manual admin",
        labelEn: "Autonomous digital order fulfillment with zero manual intervention",
      },
    ],
    caseStudyPhases: [
      {
        phaseName: "Fase 01",
        phaseNameEn: "Phase 01",
        topic: "Arsitektur Sistem",
        topicEn: "System Architecture",
        title: "Perancangan Katalog Produk & Antarmuka Cepat",
        titleEn: "Product Catalog Design & High-Speed UI",
        description:
          "Merancang katalog produk game populer, validasi ID akun game secara dinamis, dan pengalaman transaksi tanpa hambatan bagi pengguna.",
        descriptionEn:
          "Engineered popular gaming catalogs, dynamic player user-ID checks, and friction-free payment checkout flows.",
      },
      {
        phaseName: "Fase 02",
        phaseNameEn: "Phase 02",
        topic: "Payment Gateway",
        topicEn: "Payment Gateway",
        title: "Integrasi QRIS, Virtual Account, & Webhook Real-Time",
        titleEn: "QRIS, Virtual Account & Real-Time Webhook Integration",
        description:
          "Menghubungkan gerbang pembayaran otomatis nasional dengan callback webhook berkeamanan tanda tangan digital (HMAC signature).",
        descriptionEn:
          "Connected automated payment gateways supporting QRIS and Virtual Accounts secured with HMAC digital signature verification.",
      },
      {
        phaseName: "Fase 03",
        phaseNameEn: "Phase 03",
        topic: "Deployment Publik",
        topicEn: "Production Deployment",
        title: "Hosting Mandiri, Konfigurasi SSL, & Optimasi SEO",
        titleEn: "Self-Hosting, SSL Configuration, & Production SEO",
        description:
          "Mengonfigurasi server cloud Linux production, reverse proxy Nginx, auto SSL certificate, serta optimasi SEO publik di https://absolutestore.id.",
        descriptionEn:
          "Configured production Linux cloud servers, Nginx reverse proxy, auto SSL encryption, and high-ranking public SEO at https://absolutestore.id.",
      },
    ],
  },
  {
    _id: "ca94d2a9-7c10-4784-ab61-efe7a895e911",
    title: "Cloud E-Absensi: Mobile Geofencing & Biometric Attendance",
    titleEn: "Cloud E-Absensi: Mobile Geofencing & Biometric Attendance",
    slug: { current: "cloud-e-absensi" },
    projectType: "personal",
    category: "mobile",
    deploymentStatus: "live",
    role: "Lead Mobile & Backend Developer",
    roleEn: "Lead Mobile & Backend Developer",
    summary:
      "Aplikasi absensi cloud berbasis Flutter dan Firebase dengan validasi koordinat GPS geofencing radius kantor, verifikasi foto selfie, dan dashboard manajemen karyawan multi-role.",
    summaryEn:
      "Cloud attendance mobile app built with Flutter and Firebase featuring office GPS radius geofencing, selfie photo verification, and multi-role employee management dashboards.",
    githubUrl: "https://github.com/mhmdhfisali",
    techStack: ["Flutter", "Dart", "Firebase", "Google Maps API", "REST API", "Android"],
    featuredOrder: 5,
    impactMetrics: [
      {
        value: "< 5 Meter",
        label: "Presisi radius geofencing GPS anti-mock location",
        labelEn: "GPS geofencing radius precision with anti-spoofing",
      },
      {
        value: "99.8%",
        label: "Tingkat keberhasilan presensi real-time via Firebase sync",
        labelEn: "Real-time attendance success rate via Firebase sync",
      },
      {
        value: "< 1.5 Detik",
        label: "Waktu verifikasi foto selfie dan pencatatan log presensi",
        labelEn: "Selfie photo verification & attendance log write latency",
      },
    ],
    caseStudyPhases: [
      {
        phaseName: "Fase 01",
        phaseNameEn: "Phase 01",
        topic: "Mobile UI",
        topicEn: "Mobile UI",
        title: "Pengembangan Antarmuka Flutter & State Management",
        titleEn: "Flutter Interface & State Management",
        description:
          "Merancang UI responsif multi-platform dengan manajemen status yang ringan dan intuitif untuk karyawan lapangan maupun kantor.",
        descriptionEn:
          "Engineered responsive multi-platform mobile UI with lightweight state management for field and office employees.",
      },
      {
        phaseName: "Fase 02",
        phaseNameEn: "Phase 02",
        topic: "Geofencing",
        topicEn: "Geofencing",
        title: "Implementasi GPS Radius & Anti-Fake GPS",
        titleEn: "GPS Radius & Anti-Spoofing Implementation",
        description:
          "Mengintegrasikan kalkulasi jarak Euclidean / Haversine untuk memastikan pengguna berada dalam radius valid lokasi kantor.",
        descriptionEn:
          "Integrated Haversine distance calculations ensuring device attendance claims occur strictly within verified geographic boundaries.",
      },
    ],
  },
  {
    _id: "e4adfc50-99a9-433f-98f0-2a960ad394db",
    title: "Real-Time Computer Vision Klasifikasi Sampah (YOLOv8 & IoT)",
    titleEn: "Real-Time Computer Vision Waste Classification (YOLOv8 & IoT)",
    slug: { current: "computer-vision-yolov8" },
    projectType: "personal",
    category: "system",
    deploymentStatus: "research",
    role: "Lead Computer Vision Researcher & Developer",
    roleEn: "Lead Computer Vision Researcher & Developer",
    summary:
      "Perancangan dan pelatihan model Deep Learning YOLOv8n untuk sistem klasifikasi sampah real-time terintegrasi perangkat IoT yang dipublikasikan pada Seminar Nasional Riset dan Inovasi Teknologi.",
    summaryEn:
      "Design and fine-tuning of YOLOv8n Deep Learning model for real-time automated waste classification integrated with IoT hardware, published in National Research & Technology Proceedings.",
    demoUrl: "https://proceeding.unindra.ac.id/index.php/semnasristek/article/view/8895",
    githubUrl: "https://github.com/mhmdhfisali",
    techStack: ["Python", "PyTorch", "YOLOv8", "OpenCV", "IoT", "Raspberry Pi", "Roboflow"],
    featuredOrder: 6,
    caseStudyPhases: [
      {
        phaseName: "Fase 01",
        phaseNameEn: "Phase 01",
        topic: "Dataset & Anotasi",
        topicEn: "Dataset & Annotation",
        title: "Pengumpulan Data Visual & Augmentasi Gambar",
        titleEn: "Visual Data Collection & Augmentation",
        description:
          "Mengumpulkan ribuan sampel citra limbah anorganik dan organik dengan berbagai sudut pencahayaan dan variasi augmentasi gambar.",
        descriptionEn:
          "Collected thousands of organic and inorganic waste images under diverse lighting conditions with systematic augmentations.",
      },
      {
        phaseName: "Fase 02",
        phaseNameEn: "Phase 02",
        topic: "Training Model",
        topicEn: "Model Training",
        title: "Fine-Tuning YOLOv8n & Evaluasi mAP",
        titleEn: "YOLOv8n Fine-Tuning & mAP Evaluation",
        description:
          "Melatih arsitektur neural network YOLOv8 nano agar menghasilkan inferensi cepat di atas 30 FPS dengan metrik mAP tinggi.",
        descriptionEn:
          "Trained YOLOv8 nano neural networks achieving real-time inference exceeding 30 FPS with high mAP accuracy scores.",
      },
      {
        phaseName: "Fase 03",
        phaseNameEn: "Phase 03",
        topic: "Publikasi Ilmiah",
        topicEn: "Scientific Publication",
        title: "Diseminasi Ilmiah di Semnasristek UNINDRA",
        titleEn: "Academic Dissemination at Semnasristek UNINDRA",
        description:
          "Menulis naskah ilmiah lengkap dan mempresentasikannya di hadapan dewan penguji seminar nasional terindeks.",
        descriptionEn:
          "Authored comprehensive research paper presented at indexed national technology conferences.",
      },
    ],
  },
  {
    _id: "a5e66933-006d-4263-8c63-f85099020fb4",
    title: "Smart Lighting System Berbasis IoT & Sensor Cahaya",
    titleEn: "IoT-Based Smart Automated Lighting System",
    slug: { current: "smart-lighting-iot" },
    projectType: "personal",
    category: "system",
    deploymentStatus: "research",
    role: "IoT Hardware & Software Developer",
    roleEn: "IoT Hardware & Software Developer",
    summary:
      "Prototipe otomasi pencahayaan cerdas hemat energi dengan integrasi daylight sensor cahaya yang berhasil meraih Juara 3 IT Bootcamp.",
    summaryEn:
      "Energy-efficient smart lighting automation prototype featuring daylight sensor integration, awarded 3rd Place at IT Bootcamp.",
    githubUrl: "https://github.com/mhmdhfisali",
    techStack: ["C++", "Arduino / ESP32", "LDR Sensor", "Relay Module", "IoT"],
    featuredOrder: 7,
    caseStudyPhases: [
      {
        phaseName: "Fase 01",
        phaseNameEn: "Phase 01",
        topic: "Rangkaian Elektronika",
        topicEn: "Circuit Prototyping",
        title: "Desain Skematik Sirkuit Sensor & Aktuator",
        titleEn: "Sensor & Actuator Circuit Schematic Design",
        description:
          "Merancang sirkuit terpadu mikrokontroler dengan isolasi optocoupler untuk keandalan switching beban listrik tegangan tinggi.",
        descriptionEn:
          "Designed microcontroller circuits with optocoupler isolation for secure high-voltage electrical load switching.",
      },
    ],
  },
];
