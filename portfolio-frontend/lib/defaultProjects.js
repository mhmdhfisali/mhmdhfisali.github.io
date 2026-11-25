export const defaultProjects = [
  {
    _id: "project-ppic-smii",
    title: "PPIC System: Production Planning and Inventory Control",
    titleEn: "PPIC System: Production Planning and Inventory Control",
    slug: { current: "ppic-system-smii" },
    projectType: "company",
    company: "PT Sinar Meadow International Indonesia",
    category: "web",
    deploymentStatus: "internal",
    role: "Web Development Intern / Full-Stack Engineer",
    roleEn: "Web Development Intern / Full-Stack Engineer",
    summary:
      "Sistem internal perencanaan kapasitas produksi, monitoring stok bahan baku formula margarin, dan penjadwalan batch harian terintegrasi di PT Sinar Meadow International Indonesia.",
    summaryEn:
      "Internal manufacturing system for production capacity planning, raw material stock monitoring, and integrated daily batch scheduling at PT Sinar Meadow International Indonesia.",
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS", "REST API", "Docker"],
    featuredOrder: 1,
    impactMetrics: [
      {
        value: "< 5 Menit",
        label: "Otomasi jadwal harian pabrik (sebelumnya manual 2 jam)",
        labelEn: "Automated daily plant scheduling (down from 2 hours manual)",
      },
      {
        value: "100%",
        label: "Akurasi kalkulasi kebutuhan bahan baku formula margarin",
        labelEn: "Margarine recipe ingredient requirement calculation accuracy",
      },
      {
        value: "Zero Conflict",
        label: "Eliminasi tumpang tindih work order antar shift produksi",
        labelEn: "Elimination of multi-shift work order overlaps and conflicts",
      },
    ],
    caseStudyPhases: [
      {
        phaseName: "Fase 01",
        phaseNameEn: "Phase 01",
        topic: "Analisis Alur",
        topicEn: "Workflow Analysis",
        title: "Pemetaan Alur Produksi dan Inventaris Formula",
        titleEn: "Production Mapping and Formula Inventory",
        description:
          "Menganalisis alur kerja manual penjadwalan pabrik margarin dan standarisasi pencatatan stok bahan baku.",
        descriptionEn:
          "Analyzed manual plant scheduling workflows and standardized raw material inventory logs.",
      },
      {
        phaseName: "Fase 02",
        phaseNameEn: "Phase 02",
        topic: "Arsitektur Database",
        topicEn: "Database Architecture",
        title: "Desain Relasi Data Transaksional dan Work Orders",
        titleEn: "Transactional Data Schema and Work Orders",
        description:
          "Merancang skema database relasional untuk menangani multi-shift work order dan pelacakan batch code.",
        descriptionEn:
          "Designed relational database schemas handling multi-shift work orders and batch code tracking.",
      },
      {
        phaseName: "Fase 03",
        phaseNameEn: "Phase 03",
        topic: "Implementasi Sistem",
        topicEn: "System Implementation",
        title: "Pembangunan Modul Jadwal dan Validasi Pabrik",
        titleEn: "Schedule Module and Operational Validation",
        description:
          "Membangun kalkulator otomatis kebutuhan bahan baku dan validasi operasional bersama tim produksi.",
        descriptionEn:
          "Built automated material requirement calculators and conducted validation with plant personnel.",
      },
    ],
  },
  {
    _id: "project-ipc-smii",
    title: "IPC System: In-Process Quality Control dan Validasi Sampling",
    titleEn: "IPC System: In-Process Quality Control and Sampling Validation",
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
      "Digitalisasi inspeksi mutu lini kemas pabrik secara real-time. Dilengkapi kamera web terintegrasi, anotasi cacat kemasan, dan validasi toleransi otomatis.",
    summaryEn:
      "Real-time in-process packaging quality inspection platform. Features in-app web camera capture, canvas defect annotation, and automated tolerance validation.",
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
        value: "1-2 Jam",
        label: "Hemat waktu rekap per shift (tanpa binder fisik)",
        labelEn: "Shift time saved from physical binder logs",
      },
      {
        value: "1.000+",
        label: "Foto bukti inspeksi digital per bulan",
        labelEn: "Monthly inspection photos digitized",
      },
      {
        value: "8 Lini",
        label: "Validasi real-time Lini A sampai G dan Repack",
        labelEn: "Real-time checks across Lines A-G and Repack",
      },
    ],
    galleryImages: [
      {
        url: "/images/projects/ipc/01-dashboard-menu.webp",
        caption: "Menu Utama: Input Pemeriksaan dan Katalog Produk",
        captionEn: "Main Menu: Inspection Entry and Product Catalog",
      },
      {
        url: "/images/projects/ipc/02-line-control-board.webp",
        caption: "Papan Kontrol: Monitoring Real-Time Lini Produksi",
        captionEn: "Control Board: Real-Time Line Monitoring",
      },
      {
        url: "/images/projects/ipc/03-step1-production-info.webp",
        caption: "Tahap 1: Input Data Produk, Batch, dan Palet",
        captionEn: "Step 1: Product, Batch, and Pallet Entry",
      },
      {
        url: "/images/projects/ipc/04-step2-parameter-checklist.webp",
        caption: "Tahap 2: Checklist Parameter Stencil, Tare, dan Netto",
        captionEn: "Step 2: Stencil, Tare, and Netto Parameter Checks",
      },
      {
        url: "/images/projects/ipc/05-qa-camera-viewfinder.webp",
        caption: "Kamera Web: Ambil Bukti Fisik Kemasan Langsung",
        captionEn: "Web Camera: In-App Packaging Photo Capture",
      },
      {
        url: "/images/projects/ipc/06-defect-annotation.webp",
        caption: "Anotasi Cacat: Lingkari Titik Rusak dan Cap Waktu",
        captionEn: "Defect Marking: Highlight Defect and Watermark",
      },
      {
        url: "/images/projects/ipc/07-step3-confirmation-summary.webp",
        caption: "Tahap 3: Ringkasan dan Validasi Sebelum Simpan",
        captionEn: "Step 3: Summary and Final Submission Check",
      },
      {
        url: "/images/projects/ipc/08-inactive-line-declaration.webp",
        caption: "Deklarasi Lini: Form Alasan Downtime Mesin",
        captionEn: "Line Status: Machine Downtime Reason Form",
      },
    ],
    caseStudyPhases: [
      {
        phaseName: "Fase 01",
        phaseNameEn: "Phase 01",
        topic: "Spesifikasi URS",
        topicEn: "URS Specification",
        title: "Standarisasi Kebutuhan QA dan Matriks Toleransi",
        titleEn: "QA Requirements and Tolerance Standardization",
        description:
          "Menyusun dokumen URS bersama Project Leader, memetakan parameter kritis kemasan, dan mengeliminasi binder fisik.",
        descriptionEn:
          "Drafted URS with the Project Leader, standardized tolerance matrices, and replaced physical paper binders.",
        previewImage: {
          url: "/images/projects/ipc/01-dashboard-menu.webp",
        },
      },
      {
        phaseName: "Fase 02",
        phaseNameEn: "Phase 02",
        topic: "Kamera dan Anotasi",
        topicEn: "Camera and Annotation",
        title: "Kamera Web In-App dan Watermark Cap Waktu",
        titleEn: "Web Camera and Tamper-Evident Watermarking",
        description:
          "Membangun modul kamera in-app, alat canvas penanda cacat merah, serta cap waktu dan shift otomatis.",
        descriptionEn:
          "Built in-app camera capture, canvas red-circle defect marker, and automated timestamp/shift watermarking.",
        previewImage: {
          url: "/images/projects/ipc/06-defect-annotation.webp",
        },
      },
      {
        phaseName: "Fase 03",
        phaseNameEn: "Phase 03",
        topic: "Papan Kontrol",
        topicEn: "Control Board",
        title: "Monitoring Multi-Lini dan Deklarasi Downtime",
        titleEn: "Multi-Line Monitoring and Downtime Logging",
        description:
          "Mengembangkan papan kontrol Shift 1 sampai 3 pada 8 lini kemas, form downtime, serta validasi data batch.",
        descriptionEn:
          "Delivered multi-shift control board across 8 packaging lines, machine downtime reason forms, and batch validation.",
        previewImage: {
          url: "/images/projects/ipc/02-line-control-board.webp",
        },
      },
    ],
  },
  {
    _id: "project-dashboard-smii",
    title: "Executive Production and Operational Dashboard SMII",
    titleEn: "SMII Executive Production and Operational Analytics Dashboard",
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
        label: "Pemantauan efisiensi OEE dan throughput lini pengemasan",
        labelEn: "24/7 OEE efficiency and packaging line throughput telemetry",
      },
      {
        value: "50% Lebih Cepat",
        label: "Deteksi dini anomali mesin dan peringatan downtime operasional",
        labelEn: "Early machine anomaly detection and operational downtime alerts",
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
        title: "Perancangan Widget KPI dan Telemetri Visual",
        titleEn: "KPI Widgets and Visual Telemetry Design",
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
        title: "Pembaruan Berkala dan Optimasi Kecepatan Tampil",
        titleEn: "Interval Refresh and Render Performance Optimization",
        description:
          "Mengoptimalkan query analitik besar agar grafik dan rangkuman angka dapat dirender dengan instan dan hemat sumber daya server.",
        descriptionEn:
          "Optimized analytical database queries ensuring immediate visual rendering with minimal server resource consumption.",
      },
    ],
  },
  {
    _id: "project-absolutestore",
    title: "absolutestore.id: Platform Top-Up dan Produk Digital",
    titleEn: "absolutestore.id: Automated Digital Goods and Top-Up Platform",
    slug: { current: "absolutestore-id" },
    projectType: "personal",
    category: "web",
    deploymentStatus: "live",
    role: "Founder dan Lead Full-Stack Developer",
    roleEn: "Founder and Lead Full-Stack Developer",
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
        label: "Kecepatan validasi pembayaran QRIS dan webhook otomatis",
        labelEn: "Instant QRIS payment validation and automated webhook callback",
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
        title: "Perancangan Katalog Produk dan Antarmuka Cepat",
        titleEn: "Product Catalog Design and High-Speed UI",
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
        title: "Integrasi QRIS, Virtual Account, dan Webhook Real-Time",
        titleEn: "QRIS, Virtual Account and Real-Time Webhook Integration",
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
        title: "Hosting Mandiri, Konfigurasi SSL, dan Optimasi SEO",
        titleEn: "Self-Hosting, SSL Configuration, and Production SEO",
        description:
          "Mengonfigurasi server cloud Linux production, reverse proxy Nginx, auto SSL certificate, serta optimasi SEO publik di https://absolutestore.id.",
        descriptionEn:
          "Configured production Linux cloud servers, Nginx reverse proxy, auto SSL encryption, and high-ranking public SEO at https://absolutestore.id.",
      },
    ],
  },
  {
    _id: "ca94d2a9-7c10-4784-ab61-efe7a895e911",
    title: "Cloud E-Absensi: Mobile Geofencing dan Biometrik",
    titleEn: "Cloud E-Absensi: Mobile Geofencing and Biometric Attendance",
    slug: { current: "cloud-e-absensi" },
    projectType: "personal",
    category: "mobile",
    deploymentStatus: "live",
    role: "Lead Mobile dan Backend Developer",
    roleEn: "Lead Mobile and Backend Developer",
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
        labelEn: "Selfie photo verification and attendance log write latency",
      },
    ],
    caseStudyPhases: [
      {
        phaseName: "Fase 01",
        phaseNameEn: "Phase 01",
        topic: "Mobile UI",
        topicEn: "Mobile UI",
        title: "Pengembangan Antarmuka Flutter dan State Management",
        titleEn: "Flutter Interface and State Management",
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
        title: "Implementasi GPS Radius dan Anti-Fake GPS",
        titleEn: "GPS Radius and Anti-Spoofing Implementation",
        description:
          "Mengintegrasikan kalkulasi jarak Euclidean / Haversine untuk memastikan pengguna berada dalam radius valid lokasi kantor.",
        descriptionEn:
          "Integrated Haversine distance calculations ensuring device attendance claims occur strictly within verified geographic boundaries.",
      },
    ],
  },
  {
    _id: "e4adfc50-99a9-433f-98f0-2a960ad394db",
    title: "Real-Time Computer Vision Klasifikasi Sampah (YOLOv8 dan IoT)",
    titleEn: "Real-Time Computer Vision Waste Classification (YOLOv8 and IoT)",
    slug: { current: "computer-vision-yolov8" },
    projectType: "personal",
    category: "system",
    deploymentStatus: "research",
    role: "Lead Computer Vision Researcher dan Developer",
    roleEn: "Lead Computer Vision Researcher and Developer",
    summary:
      "Perancangan dan pelatihan model Deep Learning YOLOv8n untuk sistem klasifikasi sampah real-time terintegrasi perangkat IoT yang dipublikasikan pada Seminar Nasional Riset dan Inovasi Teknologi.",
    summaryEn:
      "Design and fine-tuning of YOLOv8n Deep Learning model for real-time automated waste classification integrated with IoT hardware, published in National Research and Technology Proceedings.",
    demoUrl: "https://proceeding.unindra.ac.id/index.php/semnasristek/article/view/8895",
    githubUrl: "https://github.com/mhmdhfisali",
    techStack: ["Python", "PyTorch", "YOLOv8", "OpenCV", "IoT", "Raspberry Pi", "Roboflow"],
    featuredOrder: 6,
    impactMetrics: [
      {
        value: "> 30 FPS",
        label: "Kecepatan inferensi model YOLOv8n secara real-time",
        labelEn: "Real-time YOLOv8n inference frame rate performance",
      },
      {
        value: "Semnasristek",
        label: "Publikasi ilmiah terindeks pada seminar nasional",
        labelEn: "Indexed scientific paper published at national conference",
      },
      {
        value: "Otomatis",
        label: "Klasifikasi citra limbah terintegrasi hardware IoT",
        labelEn: "Automated waste classification integrated with IoT hardware",
      },
    ],
    caseStudyPhases: [
      {
        phaseName: "Fase 01",
        phaseNameEn: "Phase 01",
        topic: "Dataset dan Anotasi",
        topicEn: "Dataset and Annotation",
        title: "Pengumpulan Data Visual dan Augmentasi Gambar",
        titleEn: "Visual Data Collection and Augmentation",
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
        title: "Fine-Tuning YOLOv8n dan Evaluasi mAP",
        titleEn: "YOLOv8n Fine-Tuning and mAP Evaluation",
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
    title: "Smart Lighting System Berbasis IoT dan Sensor Cahaya",
    titleEn: "IoT-Based Smart Automated Lighting System",
    slug: { current: "smart-lighting-iot" },
    projectType: "personal",
    category: "system",
    deploymentStatus: "research",
    role: "IoT Hardware dan Software Developer",
    roleEn: "IoT Hardware and Software Developer",
    summary:
      "Prototipe otomasi pencahayaan cerdas hemat energi dengan integrasi daylight sensor cahaya yang berhasil meraih Juara 3 IT Bootcamp.",
    summaryEn:
      "Energy-efficient smart lighting automation prototype featuring daylight sensor integration, awarded 3rd Place at IT Bootcamp.",
    githubUrl: "https://github.com/mhmdhfisali",
    techStack: ["C++", "Arduino / ESP32", "LDR Sensor", "Relay Module", "IoT"],
    featuredOrder: 7,
    impactMetrics: [
      {
        value: "Juara 3",
        label: "Penghargaan inovasi prototipe IT Bootcamp",
        labelEn: "IT Bootcamp prototype innovation award",
      },
      {
        value: "Otomatis",
        label: "Efisiensi daya berbasis sensor intensitas cahaya",
        labelEn: "Power efficiency based on ambient light sensor",
      },
      {
        value: "Isolasi Aman",
        label: "Proteksi switching beban listrik tegangan tinggi",
        labelEn: "Safe high-voltage electrical load switching protection",
      },
    ],
    caseStudyPhases: [
      {
        phaseName: "Fase 01",
        phaseNameEn: "Phase 01",
        topic: "Rangkaian Elektronika",
        topicEn: "Circuit Prototyping",
        title: "Desain Skematik Sirkuit Sensor dan Aktuator",
        titleEn: "Sensor and Actuator Circuit Schematic Design",
        description:
          "Merancang sirkuit terpadu mikrokontroler dengan isolasi optocoupler untuk keandalan switching beban listrik tegangan tinggi.",
        descriptionEn:
          "Designed microcontroller circuits with optocoupler isolation for secure high-voltage electrical load switching.",
      },
    ],
  },
];
