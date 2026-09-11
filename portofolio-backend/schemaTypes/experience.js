export default {
  name: 'experience',
  title: 'Pengalaman Kerja & Organisasi',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Posisi / Jabatan',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      title: 'Ringkasan Tanggung Jawab & Dampak',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
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
