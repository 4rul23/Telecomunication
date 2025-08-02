import { getIcon } from "../utils/iconUtils";

export const allFacts = [
  {
    title: "JARINGAN 5G MENGGUNAKAN MIMO UNTUK KECEPATAN SUPER",
    subtitle: "Teknologi Massive MIMO Menghadirkan Era Konektivitas Ultra-Cepat",
    description: "Salah satu teknologi kunci di balik kecepatan 5G adalah Massive MIMO (Multiple Input, Multiple Output). Ini berarti stasiun pangkalan 5G memiliki puluhan hingga ratusan antena yang bisa mengirim dan menerima banyak sinyal secara bersamaan, menciptakan 'jalur' data yang lebih banyak.",
    fullDescription: "Massive MIMO merupakan teknologi revolusioner yang menggunakan array antena dengan puluhan hingga ratusan elemen untuk menciptakan multiple jalur data secara simultan. Setiap antena dapat mengirim dan menerima sinyal independen, memungkinkan stasiun pangkalan 5G melayani banyak pengguna sekaligus dengan kecepatan optimal. Teknologi ini menggunakan beamforming adaptif dan spatial multiplexing untuk memaksimalkan efisiensi spektral dan mengurangi interferensi antar pengguna.",
    icon: getIcon("Antenna", 60),
    image: "/image.png",
    year: "2021 - Sekarang",
    impact: "Revolusi Kecepatan - Era Baru Konektivitas Ultra-Cepat dengan Teknologi MIMO",
    category: "TEKNOLOGI 5G MIMO",
    keyStats: [
      { label: "antennaConfig", value: "'64T64R MIMO'", icon: getIcon("Antenna", 16) },
      { label: "beamforming", value: "'3D Adaptif'", icon: getIcon("Radar", 16) },
      { label: "kapasitas", value: "'10x Peningkatan'", icon: getIcon("TrendingUp", 16) },
      { label: "pengguna", value: "'100 Simultan'", icon: getIcon("Users", 16) },
      { label: "frekuensi", value: "'Sub-6GHz + mmWave'", icon: getIcon("Waves", 16) },
      { label: "efisiensi", value: "'5x Spektral'", icon: getIcon("Zap", 16) }
    ],
        code: `const massiveMIMO5G = {
  teknologi: 'Massive_MIMO',
  antena: 'puluhan_hingga_ratusan',
  jalurData: 'multiple_simultaneous',
  kecepatan: 'super_speed_5G',
  fungsi: [
    'mengirim_sinyal_bersamaan',
    'menerima_sinyal_bersamaan',
    'menciptakan_jalur_lebih_banyak'
  ]
};`
  },
  {
    title: "OTAK DI BALIK JARINGAN",
    subtitle: "Lulusan Telekomunikasi Sebagai Arsitek Dunia Digital",
    description: "Setiap kali kamu streaming, gaming online, atau video call, ada jaringan kompleks yang dirancang dan diatur oleh lulusan telekomunikasi. Mereka adalah arsitek di balik dunia digital kita.",
    fullDescription: "Para lulusan telekomunikasi adalah engineer dan arsitek sistem yang bekerja di balik layar untuk memastikan setiap aktivitas digital berjalan lancar. Mereka merancang infrastruktur jaringan, mengoptimalkan protokol komunikasi, dan mengelola sistem kompleks yang memungkinkan miliaran perangkat terhubung secara global. Keahlian mereka mencakup network design, protocol engineering, traffic optimization, dan quality of service management yang menjadi fondasi pengalaman digital seamless.",
    icon: getIcon("Network", 60),
    image: "/image.png",
    year: "Era Digital - Sekarang",
    impact: "Arsitek Digital - Perancang Infrastruktur Konektivitas Global",
    category: "PROFESIONAL TELEKOMUNIKASI",
    keyStats: [
      { label: "keahlian", value: "'Network Design'", icon: getIcon("Code", 16) },
      { label: "protokol", value: "'TCP/IP, MPLS'", icon: getIcon("Terminal", 16) },
      { label: "teknologi", value: "'SDN, Cloud'", icon: getIcon("Cpu", 16) },
      { label: "layanan", value: "'Streaming, Gaming'", icon: getIcon("Monitor", 16) },
      { label: "optimasi", value: "'QoS Management'", icon: getIcon("Settings", 16) },
      { label: "koneksi", value: "'Jutaan Simultan'", icon: getIcon("Users", 16) }
    ],
    code: `const arsitekDigital = {
  peran: 'arsitek_dunia_digital',
  aktivitas: [
    'streaming',
    'gaming_online',
    'video_call'
  ],
  tanggungJawab: [
    'merancang_jaringan',
    'mengatur_sistem',
    'optimasi_performa'
  ],
  dampak: 'pengalaman_digital_seamless'
};`
    ],
    code: `const arsitekDigital = {
  peran: 'arsitek_dunia_digital',
  aktivitas: [
    'streaming',
    'gaming_online',
    'video_call'
  ],
  tanggungJawab: [
    'merancang_jaringan',
    'mengatur_sistem',
    'optimasi_performa'
  ],
  dampak: 'pengalaman_digital_seamless'
};`
  },
  {
    title: "PENCIPTA KONEKSI DUNIA",
    subtitle: "Inti dari Bagaimana Kita Semua Terhubung",
    description: "Mereka adalah inti dari bagaimana kita semua terhubung! Dari panggilan telepon biasa, video call dengan keluarga di luar negeri, sampai streaming film favoritmu, semua berkat orang-orang di balik telekomunikasi.",
    fullDescription: "Para profesional telekomunikasi adalah guardian konektivitas global yang memungkinkan setiap momen komunikasi terjadi dengan sempurna. Mereka mengelola infrastruktur kompleks yang menghubungkan panggilan keluarga internasional, memastikan kualitas streaming film favorit, dan mengoptimalkan jaringan untuk pengalaman gaming yang smooth. Network operation centers bekerja 24/7 untuk memonitor traffic global dan memastikan setiap koneksi—dari yang sederhana hingga yang paling kompleks—berjalan tanpa gangguan.",
    icon: getIcon("Globe", 60),
    image: "/image.png",
    year: "Era Konektivitas Global",
    impact: "Global Connectivity Guardian - Penghubung Keluarga dan Komunitas Dunia",
    category: "KONEKTIVITAS GLOBAL",
    keyStats: [
      { label: "layanan", value: "'Global Calls'", icon: getIcon("MessageCircle", 16) },
      { label: "streaming", value: "'Ultra HD Video'", icon: getIcon("Monitor", 16) },
      { label: "monitoring", value: "'24/7 NOC'", icon: getIcon("Eye", 16) },
      { label: "jaringan", value: "'Cross-Border'", icon: getIcon("Globe", 16) },
      { label: "kualitas", value: "'QoE Optimal'", icon: getIcon("Star", 16) },
      { label: "koneksi", value: "'Seamless Global'", icon: getIcon("Network", 16) }
    ],
    code: `const penciptaKoneksi = {
  peran: 'inti_konektivitas_dunia',
  layanan: [
    'panggilan_telepon_biasa',
    'video_call_keluarga_luar_negeri',
    'streaming_film_favorit'
  ],
  cakupan: 'global_connectivity',
  operasi: '24/7_non_stop',
  misi: 'menghubungkan_semua_orang'
};`
  },
  {
    title: "LEBIH DARI SEKADAR SINYAL",
    subtitle: "Fondasi Koneksi Modern untuk Semua",
    description: "Telekomunikasi adalah inti dari bagaimana kita semua terhubung! Dari panggilan telepon biasa, video call dengan keluarga di luar negeri, sampai streaming film favoritmu, semua berkat orang-orang di balik telekomunikasi.",
    fullDescription: "Telekomunikasi modern jauh lebih dari sekadar mengirim sinyal—ini adalah ecosystem digital yang menghubungkan kehidupan kita sehari-hari. Teknologi ini memungkinkan remote work yang mengubah cara kerja global, telemedicine yang menyelamatkan nyawa, distance learning yang membuka akses pendidikan, dan social media yang menghubungkan komunitas global. Infrastruktur telekomunikasi menjadi nervous system dari smart cities, Internet of Things, dan berbagai aplikasi yang membentuk masa depan peradaban digital.",
    icon: getIcon("Wifi", 60),
    image: "/image.png",
    year: "Era Digital Modern",
    impact: "Foundation of Modern Connectivity - Jembatan Digital Peradaban Manusia",
    category: "FONDASI DIGITAL",
    keyStats: [
      { label: "remoteWork", value: "'Global Workforce'", icon: getIcon("Users", 16) },
      { label: "telemedicine", value: "'Healthcare Access'", icon: getIcon("Activity", 16) },
      { label: "education", value: "'Distance Learning'", icon: getIcon("BookOpen", 16) },
      { label: "socialMedia", value: "'Global Community'", icon: getIcon("MessageCircle", 16) },
      { label: "smartCities", value: "'IoT Integration'", icon: getIcon("Building", 16) },
      { label: "ai", value: "'Future Foundation'", icon: getIcon("Cpu", 16) }
    ],
    code: `const lebihDariSinyal = {
  peran: 'inti_koneksi_modern',
  layanan: [
    'panggilan_telepon',
    'video_call_keluarga',
    'streaming_film_favorit'
  ],
  teknologi: [
    'remote_work',
    'telemedicine',
    'distance_learning',
    'social_media'
  ],
  visi: 'menghubungkan_dunia',
  dampak: 'ecosystem_digital_global'
};`
  },
  {
    title: "TEKNOLOGI BEAMFORMING 3D ADAPTIF",
    subtitle: "Sistem Pelacakan dan Pengarahan Sinyal Real-Time",
    description: "Teknologi beamforming 3D adaptif memungkinkan antena 5G melacak dan mengarahkan sinyal secara real-time ke perangkat pengguna dengan presisi tinggi. Sistem ini secara otomatis menyesuaikan pola radiasi untuk mengoptimalkan kualitas sinyal dan mengurangi interferensi hingga 90%.",
    fullDescription: "Beamforming 3D adaptif merupakan teknologi canggih yang menggunakan algoritma machine learning untuk secara dinamis membentuk beam pattern antenna. Sistem ini mampu melakukan spatial tracking terhadap ratusan perangkat pengguna secara simultan, mengoptimalkan signal-to-noise ratio (SNR) dan mengurangi co-channel interference. Teknologi ini memungkinkan massive MIMO untuk mencapai efisiensi spektral maksimal dengan adaptive modulation dan coding.",
    icon: getIcon("Radar", 60),
    image: "/image.png",
    year: "2022 - Sekarang",
    impact: "Precision Signal Technology - Optimasi Kualitas dan Kapasitas Jaringan",
    category: "BEAMFORMING TECHNOLOGY",
    keyStats: [
      { label: "tracking", value: "'Real-Time 3D'", icon: getIcon("Target", 16) },
      { label: "interferensi", value: "'-90% Reduction'", icon: getIcon("Shield", 16) },
      { label: "adaptif", value: "'ML Algorithm'", icon: getIcon("Cpu", 16) },
      { label: "presisi", value: "'Sub-Degree'", icon: getIcon("Gauge", 16) },
      { label: "perangkat", value: "'Ratusan Simultan'", icon: getIcon("Users", 16) },
      { label: "efisiensi", value: "'Spektral Optimal'", icon: getIcon("TrendingUp", 16) }
    ],
    code: `const beamforming3D = {
  teknologi: '3D_adaptive',
  tracking: 'real_time_spatial',
  algoritma: 'machine_learning',
  interferenceReduction: '90%',
  precisionLevel: 'sub_degree',
  deviceCapacity: 'hundreds_simultaneous'
};`
  },
  {
    title: "NETWORK OPERATION CENTER 24/7",
    subtitle: "Pusat Kendali Konektivitas Global Non-Stop",
    description: "Network Operation Center (NOC) bekerja 24/7 untuk memantau dan mengelola traffic jaringan global, memastikan setiap panggilan, streaming, dan transfer data berjalan lancar. Para engineer telekomunikasi bekerja dalam shift untuk menjaga konektivitas dunia tetap aktif tanpa henti.",
    fullDescription: "NOC merupakan nerve center dari operasi telekomunikasi global yang dikelola oleh tim engineer berpengalaman. Mereka menggunakan advanced network monitoring tools, AI-powered anomaly detection, dan predictive analytics untuk mencegah gangguan sebelum terjadi. System mengintegrasikan SNMP monitoring, flow analysis, dan real-time performance dashboards untuk memberikan visibility penuh terhadap network health dan traffic patterns.",
    icon: getIcon("Monitor", 60),
    image: "/image.png",
    year: "Operasi Berkelanjutan",
    impact: "24/7 Guardian - Penjaga Konektivitas Global Tanpa Henti",
    category: "NETWORK OPERATIONS",
    keyStats: [
      { label: "operasi", value: "'24/7 Non-Stop'", icon: getIcon("Clock", 16) },
      { label: "monitoring", value: "'Real-Time'", icon: getIcon("Eye", 16) },
      { label: "prediksi", value: "'AI Analytics'", icon: getIcon("Cpu", 16) },
      { label: "response", value: "'Instant Alert'", icon: getIcon("Activity", 16) },
      { label: "coverage", value: "'Global Network'", icon: getIcon("Globe", 16) },
      { label: "uptime", value: "'99.99%'", icon: getIcon("Shield", 16) }
    ],
    code: `const noc24x7 = {
  operasi: '24/7_continuous',
  monitoring: [
    'traffic_analysis',
    'performance_metrics',
    'anomaly_detection'
  ],
  tools: ['SNMP', 'AI_analytics'],
  response: 'instant_alerting',
  uptime: '99.99%'
};`
  }
];
