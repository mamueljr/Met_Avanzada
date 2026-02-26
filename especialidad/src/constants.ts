import { NavItem, Pillar, Semester, Specialization, Competency, Stat, GalleryItem } from './types';

// Images
import imgAlberca from './assets/fccf-alberca.jpg';
import imgExplanada from './assets/fccf-explanada.jpg';
import imgGym from './assets/fccf-gym.jpg';

export const NAV_ITEMS: NavItem[] = [
  { label: '¿Qué es?', href: '#que-es' },
  { label: 'Pilares', href: '#pilares' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Áreas', href: '#areas' },
  { label: 'Competencias', href: '#competencias' },
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Instalaciones', href: '#gallery' },
  { label: '¿Por qué?', href: '#por-que' },
];

export const PILLARS: Pillar[] = [
  {
    id: 1,
    title: 'Seminarios de Especialización y Aplicación Contextualizada',
    description: 'Acompañamiento individualizado para tu proyecto de investigación.',
    whatIsIt: 'Los Seminarios de Especialización y Aplicación Contextualizada son espacios donde profundizas en el conocimiento teórico, epistemológico y metodológico de tu área. En los Seminarios de Proyecto de Tesis se te guía desde la formulación de tus preguntas de investigación hasta la publicación de tus resultados.',
    benefits: [
      'Identificarás problemáticas relevantes y lagunas de conocimiento en tu campo',
      'Desarrollarás tu proyecto de investigación con acompañamiento experto en cada etapa',
      'Adquirirás las competencias para publicar en revistas científicas de impacto'
    ]
  },
  {
    id: 2,
    title: 'Cursos-Taller de Metodología de Investigación',
    description: '5 cursos-taller prácticos distribuidos en 4 semestres.',
    whatIsIt: 'Una secuencia progresiva diseñada para que apliques inmediatamente lo aprendido en tu proyecto de investigación usando datos reales.',
    benefits: [
      'Dominarás técnicas desde lo básico hasta lo más avanzado de manera progresiva',
      'Aprenderás haciendo: cada curso es 100% práctico',
      'Podrás aplicar cada técnica directamente en tu proyecto de investigación',
      'Desarrollarás habilidades en diseño de instrumentos, análisis estadísticos sofisticados y redacción científica',
      'Estarás preparado para publicar artículos o capítulos de libros'
    ]
  },
  {
    id: 3,
    title: 'Acompañamiento Individualizado',
    description: 'Tutoría personalizada de tu director de proyecto de titulación y profesores.',
    whatIsIt: 'Más allá de las clases grupales, recibirás atención que adapta la formación a las necesidades específicas de tu proyecto.',
    benefits: [
      'Atención personalizada para refinar tus proyecto de investigación',
      'Asesoría específica en el diseño metodológico más apropiado',
      'Resolución de problemas metodológicos durante la ejecución de tu investigación',
      'Retroalimentación experta en la interpretación de resultados',
      'Desarrollo de pensamiento crítico y autocrítico sobre tu propio trabajo',
      'Mentoría para navegar el proceso de publicación científica'
    ]
  },
  {
    id: 4,
    title: 'Enfoque Interdisciplinario',
    description: 'Integración de estudiantes de múltiples disciplinas.',
    whatIsIt: 'Un espacio formativo compartido por profesionales de educación, psicología, salud, ciencias de la cultura física, sociología, etc.',
    benefits: [
      'Aprenderás de las mejores prácticas metodológicas de diferentes campos',
      'Desarrollarás capacidad para diseñar investigaciones que trasciendan fronteras disciplinares',
      'Recibirás perspectivas frescas de profesores y compañeros de otras áreas',
      'Ampliarás tu visión sobre cómo abordar problemas complejos',
      'Crearás oportunidades de colaboración interdisciplinaria'
    ]
  }
];

export const SEMESTERS: Semester[] = [
  {
    id: 1,
    title: 'Semestre 1',
    courses: [
      'Fundamentos Estadísticos para la Investigación',
      'Diseño de Cuestionarios en Investigación',
      'Búsqueda y Síntesis de Literatura Científica',
      'Validación de Contenido de Instrumentos de Autorreporte'
    ]
  },
  {
    id: 2,
    title: 'Semestre 2',
    courses: [
      'Modelos de Análisis Factorial Confirmatorio',
      'Escritura y Publicación Científica',
      'Suficiencia Investigadora en Diseño y Validación de Cuestionarios ',
    ]
  }
];

export const SPECIALIZATIONS: Specialization[] = [
  { id: 1, title: 'Ciclo Vital y Calidad de Vida', description: 'Estudia el desarrollo humano desde la infancia hasta la vejez, y cómo promover calidad de vida en diferentes etapas.' },
  { id: 2, title: 'Salud, Ejercicio y Comportamiento', description: 'Investiga la relación entre factores psicológicos, actividad física y comportamientos saludables.' },
  { id: 3, title: 'Teoría de la Autodeterminación y Motivación en Contextos Aplicados', description: 'Profundiza en los mecanismos motivacionales que impulsan el comportamiento humano en educación, deporte y salud.' },
  { id: 4, title: 'Desarrollo del Autoconcepto, Habilidades Socioemocionales y Afrontamiento', description: 'Estudia cómo las personas construyen su identidad y desarrollan competencias para enfrentar desafíos.' },
  { id: 5, title: 'Psicología y Entornos de Aprendizaje', description: 'Analiza los procesos de enseñanza-aprendizaje y cómo optimizar contextos educativos.' },
  { id: 6, title: 'Recursos Didácticos, Innovación y Tecnología', description: 'Investigar el diseño, la implementación y la eficacia de metodologías y herramientas innovadoras para la enseñanza.' },
  { id: 7, title: 'Bienestar y Comportamiento Saludable en Contextos de Educación Física Escolar', description: 'Explora cómo la educación física escolar puede promover bienestar integral en niños y adolescentes.' },
  { id: 8, title: 'Psico Sociología de la Adherencia a la Actividad Física', description: 'Estudia los factores psicológicos y sociales que influyen en la práctica sostenida de actividad física.' },
  { id: 9, title: 'Ejercicio Físico como Herramienta de Inclusión y Salud', description: 'Investiga cómo el ejercicio puede promover inclusión social y mejorar la salud en poblaciones diversas.' }
];

export const COMPETENCIES: Competency[] = [
  { id: 1, title: 'Principios y Fundamentos de la Investigación Científica', items: ['Buscar, analizar y utilizar información científica de manera crítica', 'Redactar artículos científicos con estándares internacionales', 'Aplicar estadística básica a problemas de investigación'] },
  { id: 2, title: 'Instrumentos de Medición: Diseño y Validación Científica', items: ['Diseñar cuestionarios y escalas psicométricamente sólidas', 'Validar instrumentos mediante análisis factorial confirmatorio', 'Garantizar la fiabilidad y validez de tus mediciones'] }
];

export const STATS: Stat[] = [
  { value: '2', label: 'Semestres', subtext: '1 año de duración' },
  { value: '100%', label: 'En Línea', subtext: 'Reuniones cada 15 días' },
  { value: '8', label: 'Espacios Curriculares', subtext: 'Totalmente prácticos' },
  { value: '9', label: 'Áreas', subtext: 'De especialización' }
];

export const GRADUATION_CAPABILITIES = [
  'Diseñar, desarrollar y validar instrumentos de medición psicométricamente sólidos, incluyendo escalas, cuestionarios y pruebas, aplicando estándares internacionales de calidad en cuanto a validez, confiabilidad y precisión',
  'Analizar e interpretar resultados estadísticos con rigor científico, utilizando técnicas apropiadas y actualizadas, y traduciendo hallazgos complejos en conclusiones claras, coherentes y fundamentadas',
  'Redactar, estructurar y someter a publicación artículos científicos en revistas internacionales indizadas de alto impacto, cumpliendo con criterios editoriales, normativas éticas y estándares metodológicos reconocidos globalmente',
  'Elaborar capítulos de libros académicos y otras contribuciones científicas, aportando conocimiento original y relevante que fortalezca el debate y el desarrollo teórico-metodológico en sus respectivas disciplinas',
  'Comunicar hallazgos científicos de manera estratégica y accesible, tanto a comunidades académicas como a tomadores de decisiones, profesionales y actores sociales, favoreciendo la transferencia del conocimiento y la implementación de prácticas y políticas basadas en evidencia'
];

export const HERO_CONTENT = {
  title: {
    prefix: 'Especialidad en',
    highlight: 'Diseño y Validación de Cuestionarios',
    suffix: 'de Autoreporte'
  },
  subtitle: 'en Ciencias Sociales, Humanidades, Educación y Salud',
  university: 'Universidad Autónoma de Chihuahua',
  faculty: 'Facultad de Ciencias de la Cultura Física',
  cta: 'Conocer el Programa'
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: imgExplanada,
    alt: 'Mural en la explanada de la FCCF',
    title: 'Explanada Principal',
    description: 'El corazón de la facultad, adornado con un mural vibrante que representa la cultura y el deporte.'
  },
  {
    id: 2,
    src: imgGym,
    alt: 'Gimnasio de la FCCF',
    title: 'Gimnasio',
    description: 'Instalaciones equipadas para el desarrollo físico y la práctica de diversas disciplinas deportivas.'
  },
  {
    id: 3,
    src: imgAlberca,
    alt: 'Alberca olímpica de la FCCF',
    title: 'Alberca Olímpica',
    description: 'Una alberca de primer nivel para la natación y actividades acuáticas.'
  }
];
