export default {
    name: 'skill',
    title: 'Keahlian & Tools',
    type: 'document',
    fields: [{
            name: 'title',
            title: 'Nama Teknologi',
            type: 'string',
            description: 'Pilih dari daftar atau ketik nama teknologi secara custom',
            options: {
                list: [
                    // Frontend & Mobile
                    { title: 'Flutter', value: 'Flutter' },
                    { title: 'Dart', value: 'Dart' },
                    { title: 'React.js', value: 'React' },
                    { title: 'Next.js', value: 'Next.js' },
                    { title: 'TypeScript', value: 'TypeScript' },
                    { title: 'JavaScript', value: 'JavaScript' },
                    { title: 'Tailwind CSS', value: 'Tailwind CSS' },
                    { title: 'HTML5 / CSS3', value: 'HTML5' },

                    // Backend & AI
                    { title: 'Python', value: 'Python' },
                    { title: 'FastAPI', value: 'FastAPI' },
                    { title: 'Django', value: 'Django' },
                    { title: 'Node.js', value: 'Node.js' },
                    { title: 'Express.js', value: 'Express.js' },
                    { title: 'YOLO / Computer Vision', value: 'YOLO' },
                    { title: 'TensorFlow / PyTorch', value: 'PyTorch' },
                    { title: 'PHP', value: 'PHP' },

                    // Databases & Cloud
                    { title: 'Firebase', value: 'Firebase' },
                    { title: 'MySQL', value: 'MySQL' },
                    { title: 'PostgreSQL', value: 'PostgreSQL' },
                    { title: 'MongoDB', value: 'MongoDB' },

                    // DevOps & OS
                    { title: 'Linux (Arch / Pop!_OS / CachyOS)', value: 'Linux' },
                    { title: 'Docker', value: 'Docker' },
                    { title: 'Git & GitHub', value: 'Git' },
                    { title: 'Bash / Shell Script', value: 'Bash' },
                    { title: 'Nginx', value: 'Nginx' },

                    // IoT & Hardware
                    { title: 'Arduino / ESP32', value: 'Arduino' },
                    { title: 'Internet of Things (IoT)', value: 'IoT' },

                    // Tools & Media
                    { title: 'Figma', value: 'Figma' },
                    { title: 'Postman', value: 'Postman' },
                    { title: 'CapCut / Video Editing', value: 'CapCut' },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Kategori',
            type: 'string',
            options: {
                list: [
                    { title: 'Frontend & Mobile', value: 'frontend' },
                    { title: 'Backend & AI', value: 'backend' },
                    { title: 'DevOps & OS', value: 'devops' },
                    { title: 'Multimedia & Manajemen', value: 'tools' },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'proficiency',
            title: 'Tingkat Kemahiran (1 - 100)',
            type: 'number',
            validation: (Rule) => Rule.required().min(1).max(100),
            initialValue: 85,
        },
        {
            name: 'icon',
            title: 'Logo Kustom (Opsional - Jika kosong, sistem otomatis pakai SVG resmi)',
            type: 'image',
            options: { hotspot: true },
        },
    ],
    preview: {
        select: {
            title: 'title',
            category: 'category',
            proficiency: 'proficiency',
            media: 'icon',
        },
        prepare({ title, category, proficiency, media }) {
            return {
                title: title || 'Teknologi',
                subtitle: `${category?.toUpperCase() || 'TECH'} • ${proficiency || 85}%`,
                media,
            }
        },
    },
}
