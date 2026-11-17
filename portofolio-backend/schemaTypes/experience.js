import {ExperienceIcon} from '../icons'

export default {
  name: 'experience',
  title: 'Pengalaman Kerja & Organisasi',
  type: 'document',
  icon: ExperienceIcon,
  fields: [
    {
      name: 'jobTitle',
      title: 'Posisi / Jabatan (Bahasa Indonesia)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'jobTitleEn',
      title: 'Job Title / Position (English)',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Perusahaan / Organisasi / Unit',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'startDate',
      title: 'Waktu Mulai (Contoh: 2024-08 atau Agustus 2024)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'Waktu Selesai (Kosongkan jika masih aktif)',
      type: 'string',
    },
    {
      name: 'isCurrent',
      title: 'Masih Aktif di Posisi Ini?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'description',
      title: 'Ringkasan Tanggung Jawab & Dampak (Bahasa Indonesia)',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'descriptionEn',
      title: 'Responsibilities & Impact Summary (English)',
      type: 'text',
      rows: 4,
    },
    {
      name: 'highlights',
      title: 'Poin-Poin Pencapaian Kunci (Highlights)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Misal: "Mengembangkan modul PPIC otomatisasi jadwal pabrik"',
    },
  ],
  preview: {
    select: {
      title: 'jobTitle',
      company: 'company',
      startDate: 'startDate',
      endDate: 'endDate',
      isCurrent: 'isCurrent',
    },
    prepare({title, company, startDate, endDate, isCurrent}) {
      const timePeriod = `${startDate || '?'} — ${isCurrent ? 'Sekarang' : endDate || 'Selesai'}`
      return {
        title: title || 'Posisi Tanpa Nama',
        subtitle: `${company || 'Perusahaan'} (${timePeriod})`,
      }
    },
  },
}
