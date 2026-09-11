export default {
  name: 'education',
  title: 'Riwayat Pendidikan',
  type: 'document',
  fields: [
    {
      name: 'degree',
      title: 'Gelar / Program Studi',
      type: 'string',
      description: 'Contoh: S1 Informatika',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'institution',
      title: 'Nama Institusi / Universitas',
      type: 'string',
      description: 'Contoh: Universitas Bina Sarana Informatika',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'startDate',
      title: 'Tahun Mulai',
      type: 'string',
      description: 'Contoh: 2023',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'Tahun Lulus (Kosongkan jika masih aktif)',
      type: 'string',
      description: 'Contoh: 2027',
    },
    {
      name: 'isCurrent',
      title: 'Masih Aktif Menempuh Studi?',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'description',
      title: 'Fokus Studi / Pencapaian Akademik',
      type: 'text',
      rows: 3,
      description:
        'Contoh: Fokus riset kecerdasan buatan, arsitektur cloud, dan sistem terdistribusi.',
    },
    {
      name: 'order',
      title: 'Urutan Tampil (Angka 1 = Prioritas Paling Atas)',
      type: 'number',
      initialValue: 1,
    },
  ],
  preview: {
    select: {
      title: 'degree',
      institution: 'institution',
      startDate: 'startDate',
      endDate: 'endDate',
      isCurrent: 'isCurrent',
    },
    prepare({title, institution, startDate, endDate, isCurrent}) {
      const yearRange = `${startDate || '?'} — ${isCurrent ? 'Sekarang' : endDate || 'Lulus'}`
      return {
        title: title || 'Program Studi',
        subtitle: `${institution || 'Universitas'} (${yearRange})`,
      }
    },
  },
}
