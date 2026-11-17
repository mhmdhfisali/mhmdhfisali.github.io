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
    summary:
      "Platform kontrol kualitas lini produksi in-process untuk verifikasi parameter standar mutu, pencatatan sampling batch bertingkat, dan peringatan dini anomali produksi pabrik.",
    summaryEn:
      "In-process manufacturing quality control platform for standard parameter verification, multi-stage batch sampling logs, and automated plant defect early warnings.",
    techStack: ["PHP", "CodeIgniter / Laravel", "MySQL", "JavaScript", "Bootstrap", "Chart.js"],
    featuredOrder: 2,
    impactMetrics: [
      {
        value: "35% Lebih Cepat",
        label: "Akselerasi alur validasi sampling mutu in-process lab pabrik",
        labelEn: "Accelerated in-process quality sampling verification flow",
      },
      {
        value: "Paperless",
        label: "Digitalisasi total form inspeksi mutu lini produksi",
        labelEn: "Total digitization of plant production quality inspection logs",
      },
      {
        value: "ISO / HACCP",
        label: "Standarisasi rekam jejak audit kepatuhan mutu industri",
        labelEn: "Standardized audit trail for industrial food safety compliance",
      },
    ],
    caseStudyPhases: [
      {
        phaseName: "Fase 01",
        phaseNameEn: "Phase 01",
        topic: "Standarisasi QA",
        topicEn: "QA Standardization",
        title: "Identifikasi Parameter Kritis & Ambang Batas Mutu",
        titleEn: "Critical Parameter & Quality Threshold Identification",
        description:
          "Mendefinisikan matriks parameter kimiawi, fisik, dan suhu pada setiap tahapan pengolahan produk pangan olahan minyak dan margarin.",
        descriptionEn:
          "Defined chemical, physical, and temperature parameter matrices across edible oil and margarine manufacturing stages.",
      },
      {
        phaseName: "Fase 02",
        phaseNameEn: "Phase 02",
        topic: "Formulir Dinamis",
        topicEn: "Dynamic Forms",
        title: "Input Sampling Real-Time & Validasi Otomatis",
        titleEn: "Real-Time Sampling Input & Automated Validation",
        description:
          "Mengembangkan form entri data cepat bagi teknisi lab dan operator lini dengan validasi toleransi ambang batas secara instan.",
        descriptionEn:
          "Developed rapid data entry interfaces for lab technicians and line operators featuring instant tolerance limit validations.",
      },
      {
        phaseName: "Fase 03",
        phaseNameEn: "Phase 03",
        topic: "Audit Trail",
        topicEn: "Audit Trail",
        title: "Log Audit Kepatuhan & Ekspor Laporan Mutu",
        titleEn: "Compliance Audit Trail & Quality Reporting Export",
        description:
          "Menyediakan histori perubahan parameter batch, ringkasan kepatuhan ISO/HACCP, dan fitur pelaporan berkala bagi jajaran manajemen.",
        descriptionEn:
          "Delivered batch parameter audit histories, ISO/HACCP compliance summaries, and periodic report generation for plant leadership.",
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
