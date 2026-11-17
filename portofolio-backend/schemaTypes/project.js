import {ProjectsIcon} from '../icons'

export default {
  name: 'project',
  title: 'Katalog Proyek',
  type: 'document',
  icon: ProjectsIcon,
  fieldsets: [
    {name: 'basic', title: 'Informasi Utama', options: {collapsible: false}},
    {name: 'classification', title: 'Klasifikasi & Perusahaan', options: {collapsible: false}},
    {name: 'bilingual', title: 'Konten Bahasa Inggris (English Translation)', options: {collapsible: true, collapsed: true}},
    {name: 'mediaAndDetails', title: 'Media & Studi Kasus', options: {collapsible: false}},
    {name: 'links', title: 'Tautan & Urutan', options: {collapsible: false}},
  ],
  fields: [
    // 1. Informasi Utama
    {
      name: 'title',
      title: 'Judul Proyek (Bahasa Indonesia)',
      type: 'string',
      fieldset: 'basic',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      fieldset: 'basic',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Peran Anda (Misal: Full Stack Developer / Lead Engineer)',
      type: 'string',
      fieldset: 'basic',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Ringkasan Singkat (Bahasa Indonesia)',
      type: 'text',
      rows: 2,
      fieldset: 'basic',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'techStack',
      title: 'Teknologi Utama (Misal: Laravel, Flutter, Next.js, MySQL, Docker)',
      type: 'array',
      fieldset: 'basic',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      validation: (Rule) => Rule.required().min(1),
    },

    // 2. Klasifikasi & Status Distribusi
    {
      name: 'projectType',
      title: 'Jenis Proyek (Perusahaan vs Pribadi)',
      type: 'string',
      fieldset: 'classification',
      options: {
        list: [
          {title: 'Proyek Perusahaan / Enterprise (Company Project)', value: 'company'},
          {title: 'Proyek Pribadi & Riset (Personal Project)', value: 'personal'},
        ],
        layout: 'radio',
      },
      initialValue: 'personal',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Nama Perusahaan / Organisasi',
      type: 'string',
      fieldset: 'classification',
      description: 'Misal: PT Sinar Meadow International Indonesia (Bisa diisi nama perusahaan baru di masa depan)',
      hidden: ({document}) => document?.projectType !== 'company',
    },
    {
      name: 'category',
      title: 'Kategori Platform',
      type: 'string',
      fieldset: 'classification',
      options: {
        list: [
          {title: 'Web Application', value: 'web'},
          {title: 'Mobile Application', value: 'mobile'},
          {title: 'System, Cloud & Architecture', value: 'system'},
        ],
      },
      initialValue: 'web',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'deploymentStatus',
      title: 'Status Hosting / Akses',
      type: 'string',
      fieldset: 'classification',
      options: {
        list: [
          {title: 'Jaringan Internal / On-Premise (Local Enterprise Network)', value: 'internal'},
          {title: 'Live Production (Dihosting Publik)', value: 'live'},
          {title: 'Publikasi Riset / Jurnal', value: 'research'},
          {title: 'Dalam Pengembangan (Development)', value: 'development'},
        ],
      },
      initialValue: 'internal',
      validation: (Rule) => Rule.required(),
    },

    // 3. Konten Bahasa Inggris (Opsional untuk i18n)
    {
      name: 'titleEn',
      title: 'Project Title (English)',
      type: 'string',
      fieldset: 'bilingual',
    },
    {
      name: 'roleEn',
      title: 'Your Role (English)',
      type: 'string',
      fieldset: 'bilingual',
    },
    {
      name: 'summaryEn',
      title: 'Short Summary (English)',
      type: 'text',
      rows: 2,
      fieldset: 'bilingual',
    },

    // 4. Media & Studi Kasus
    {
      name: 'thumbnail',
      title: 'Gambar Sampul Utama (Thumbnail)',
      type: 'image',
      fieldset: 'mediaAndDetails',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caseStudyPhases',
      title: 'Tahapan Studi Kasus (Tampil di Modal Detail)',
      type: 'array',
      fieldset: 'mediaAndDetails',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'phaseName',
              title: 'Label Fase (Misal: Fase 01 / Phase 01)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'topic',
              title: 'Fokus Bahasan (Misal: Arsitektur Data / Quality Check)',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Judul Pembahasan (Bahasa Indonesia)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'titleEn',
              title: 'Discussion Title (English)',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Penjelasan Teknis (Bahasa Indonesia)',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'descriptionEn',
              title: 'Technical Explanation (English)',
              type: 'text',
              rows: 3,
            },
            {
              name: 'previewImage',
              title: 'Tangkapan Layar / Diagram Alur',
              type: 'image',
              options: {hotspot: true},
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'phaseName',
              media: 'previewImage',
            },
          },
        },
      ],
    },
    {
      name: 'impactMetrics',
      title: 'Metrik Dampak Bisnis & Efisiensi Sistem',
      description: 'Tambahkan 2-3 angka dampak nyata (Contoh: 40% Lebih Cepat, < 5 Menit, 99.9% Uptime)',
      type: 'array',
      fieldset: 'mediaAndDetails',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Angka / Nilai (Misal: < 5 Menit / 35% / 99.9%)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Keterangan Dampak (Bahasa Indonesia)',
              type: 'string',
              description: 'Misal: Waktu rekapitulasi jadwal produksi pabrik otomatis',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'labelEn',
              title: 'Impact Description (English)',
              type: 'string',
              description: 'e.g. Automated daily plant batch scheduling time',
            },
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'label',
            },
          },
        },
      ],
    },
    {
      name: 'galleryImages',
      title: 'Galeri Tangkapan Layar / Mockup Antarmuka (Opsional)',
      type: 'array',
      fieldset: 'mediaAndDetails',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Keterangan Gambar (Misal: Tampilan Tabel Work Order)',
            },
          ],
        },
      ],
      description: 'Unggah screenshot tambahan untuk sistem internal/live',
    },

    // 5. Tautan & Urutan
    {
      name: 'demoUrl',
      title: 'Tautan Demo / Publikasi Live (Misal: https://absolutestore.id)',
      type: 'url',
      fieldset: 'links',
      description: 'Kosongkan jika sistem internal / on-premise perusahaan',
    },
    {
      name: 'githubUrl',
      title: 'Tautan Repositori GitHub',
      type: 'url',
      fieldset: 'links',
    },
    {
      name: 'featuredOrder',
      title: 'Urutan Tampil (Angka 1 = Paling Atas)',
      type: 'number',
      fieldset: 'links',
      initialValue: 1,
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      projectType: 'projectType',
      company: 'company',
      status: 'deploymentStatus',
      media: 'thumbnail',
    },
    prepare({title, category, projectType, company, status, media}) {
      const typeLabel = projectType === 'company'
        ? `[Enterprise] ${company || 'Perusahaan'}`
        : '[Personal] Pribadi & Riset';
      const statusLabel = status === 'live'
        ? 'Live'
        : status === 'internal'
        ? 'Internal On-Premise'
        : status === 'research'
        ? 'Riset'
        : 'Dev';
      return {
        title: title || 'Proyek Tanpa Judul',
        subtitle: `${typeLabel} • ${category?.toUpperCase() || 'WEB'} (${statusLabel})`,
        media,
      };
    },
  },
}
