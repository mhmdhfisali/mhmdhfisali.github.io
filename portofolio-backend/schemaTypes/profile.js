import {UserIcon} from '../icons'

export default {
  name: 'profile',
  title: 'Profil Utama',
  type: 'document',
  icon: UserIcon,
  groups: [
    {name: 'bioGroup', title: 'Identitas & Bio', default: true},
    {name: 'telemetryGroup', title: 'Metrik Hero'},
    {name: 'socialGroup', title: 'Kontak & Tautan'},
  ],
  fields: [
    {
      name: 'name',
      title: 'Nama Lengkap',
      type: 'string',
      group: 'bioGroup',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'headline',
      title: 'Headline Profesional (Bahasa Indonesia)',
      type: 'string',
      group: 'bioGroup',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'headlineEn',
      title: 'Professional Headline (English)',
      type: 'string',
      group: 'bioGroup',
    },
    {
      name: 'bio',
      title: 'Bio Ringkas Hero (Bahasa Indonesia)',
      type: 'text',
      rows: 3,
      group: 'bioGroup',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bioEn',
      title: 'Short Bio (English)',
      type: 'text',
      rows: 3,
      group: 'bioGroup',
    },
    {
      name: 'profileImage',
      title: 'Foto Profil',
      type: 'image',
      options: {hotspot: true},
      group: 'bioGroup',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isAvailableForWork',
      title: 'Status Ketersediaan',
      type: 'boolean',
      initialValue: true,
      group: 'bioGroup',
    },

    // Metrik Hero
    {
      name: 'researchPaperCount',
      title: 'Jumlah Paper Riset Terbit',
      type: 'string',
      initialValue: '1',
      group: 'telemetryGroup',
    },
    {
      name: 'researchPaperUrl',
      title: 'URL Tautan Publikasi Riset / DOI Paper (Opsional)',
      type: 'url',
      description: 'Tautan langsung ke Google Scholar, IEEE, atau SINTA',
      group: 'telemetryGroup',
    },
    {
      name: 'completedProjectCount',
      title: 'Total Proyek Selesai',
      type: 'string',
      initialValue: '10+',
      group: 'telemetryGroup',
    },
    {
      name: 'environmentMetric',
      title: 'Workspace / Environment Metric',
      type: 'string',
      initialValue: '100%',
      group: 'telemetryGroup',
    },

    // Kontak & Sosial Media Lengkap
    {
      name: 'email',
      title: 'Email Kontak',
      type: 'string',
      group: 'socialGroup',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'phone',
      title: 'Nomor WhatsApp (Contoh: 6281234567890)',
      type: 'string',
      description: 'Gunakan format angka internasional tanpa tanda plus (+)',
      group: 'socialGroup',
    },
    {
      name: 'githubUrl',
      title: 'URL GitHub',
      type: 'url',
      group: 'socialGroup',
    },
    {
      name: 'linkedinUrl',
      title: 'URL LinkedIn',
      type: 'url',
      group: 'socialGroup',
    },
    {
      name: 'instagramUrl',
      title: 'URL Instagram',
      type: 'url',
      group: 'socialGroup',
    },
    {
      name: 'telegramUrl',
      title: 'URL / Username Telegram',
      type: 'url',
      group: 'socialGroup',
    },
    {
      name: 'resumeUrl',
      title: 'URL Dokumen CV (PDF)',
      type: 'url',
      group: 'socialGroup',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'headline',
      media: 'profileImage',
    },
  },
}
