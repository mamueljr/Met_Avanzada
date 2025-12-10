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
  { label: '¿Por qué?', href: '#por-que' },
];

export const PILLARS: Pillar[] = [
  {
    id: 1,
    title: 'Seminarios de Formación Específica y Seminarios de Tesis',
    description: 'Acompañamiento individualizado para tu proyecto doctoral.',
    whatIsIt: 'Los Seminarios de Formación Específica son espacios donde profundizas en el conocimiento teórico, epistemológico y metodológico de tu área. En los Seminarios de Tesis se te guía desde la formulación de tus preguntas de investigación hasta la publicación de tus resultados.',
    benefits: [
      'Identificarás problemáticas relevantes y lagunas de conocimiento en tu campo',
      'Aprenderás a formular preguntas de investigación pertinentes y bien delimitadas',
      'Desarrollarás tu proyecto doctoral con acompañamiento experto en cada etapa',
      'Adquirirás las competencias para publicar en revistas científicas de impacto'
    ]
  },
  {
    id: 2,
    title: 'Cursos-Taller de Metodología de Investigación',
    description: '16 cursos-taller prácticos distribuidos en 6 semestres.',
    whatIsIt: 'Una secuencia progresiva diseñada para que apliques inmediatamente lo aprendido en tu proyecto doctoral usando datos reales.',
    benefits: [
      'Dominarás técnicas desde lo básico hasta lo más avanzado de manera progresiva',
      'Aprenderás haciendo: cada curso es 100% práctico',
      'Podrás aplicar cada técnica directamente en tu investigación doctoral',
      'Desarrollarás habilidades en diseño de instrumentos, análisis estadísticos sofisticados y redacción científica',
      'Estarás preparado para publicar diferentes tipos de artículos: empíricos, revisiones sistemáticas y meta-análisis'
    ]
  },
  {
    id: 3,
    title: 'Acompañamiento Individualizado',
    description: 'Tutoría personalizada de tu director de tesis y profesores.',
    whatIsIt: 'Más allá de las clases grupales, recibirás atención que adapta la formación a las necesidades específicas de tu proyecto.',
    benefits: [
      'Atención personalizada para refinar tus preguntas de investigación',
      'Asesoría específica en el diseño metodológico más apropiado',
      'Resolución de problemas metodológicos durante la ejecución de tu investigación',
      'Retroalimentación experta en la interpretación de resultados',
      'Desarrollo de pensamiento crítico y autocrítico sobre tu propio trabajo',
      'Mentoría para navegar el proceso de publicación científica'
    ]
  },
  {
    id: 4,
    title: 'Coloquios de Investigación',
    description: 'Espacios académicos formales para presentar avances.',
    whatIsIt: 'Inician en el tercer semestre, donde presentas tus avances ante profesores, compañeros e investigadores invitados.',
    benefits: [
      'Desarrollarás habilidades de comunicación científica oral de nivel profesional',
      'Recibirás retroalimentación constructiva de múltiples expertos',
      'Te expondrás a investigaciones diversas que enriquecerán tu perspectiva',
      'Aprenderás a defender tus decisiones metodológicas ante audiencias críticas',
      'Te prepararás para presentar en congresos internacionales',
      'Crearás redes de colaboración con otros doctorandos',
      'Desarrollarás resiliencia ante la evaluación por pares'
    ]
  },
  {
    id: 5,
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
      'Búsqueda y Análisis de Información Científica',
      'Redacción de Artículos de Revisión Sistemática I',
      'Estadística Básica Aplicada',
      'Redacción de Artículos Científicos',
      'Diseño de Cuestionarios de Autorreporte'
    ]
  },
  {
    id: 2,
    title: 'Semestre 2',
    courses: [
      'Validez de Contenido en Investigación Cuantitativa',
      'Redacción de Artículos de Revisión Sistemática II',
      'Análisis Factorial Confirmatorio',
      'Regresión Lineal',
      'Seminario de Tesis I'
    ]
  },
  {
    id: 3,
    title: 'Semestre 3',
    courses: [
      'Redacción de Artículos de Meta-análisis I',
      'Modelos de Ecuaciones Estructurales I',
      'Seminario de Formación Específica I',
      'Seminario de Tesis II',
      'COLOQUIO DE INVESTIGACIÓN I'
    ]
  },
  {
    id: 4,
    title: 'Semestre 4',
    courses: [
      'Redacción de Artículos de Meta-análisis II',
      'Modelos de Ecuaciones Estructurales II',
      'Seminario de Formación Específica II',
      'Seminario de Tesis III',
      'COLOQUIO DE INVESTIGACIÓN II'
    ]
  },
  {
    id: 5,
    title: 'Semestre 5',
    courses: [
      'Diseños de Caso Único I',
      'Regresión Logística',
      'Seminario de Formación Específica III',
      'Seminario de Tesis IV',
      'COLOQUIO DE INVESTIGACIÓN III'
    ]
  },
  {
    id: 6,
    title: 'Semestre 6',
    courses: [
      'Diseños de Caso Único II',
      'Taller de Titulación',
      'Seminario de Formación Específica IV',
      'Seminario de Tesis V',
      'COLOQUIO DE INVESTIGACIÓN IV'
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
  { id: 1, title: 'Principios y Fundamentos de la Investigación', items: ['Buscar, analizar y utilizar información científica de manera crítica', 'Redactar artículos científicos con estándares internacionales', 'Aplicar estadística básica a problemas de investigación'] },
  { id: 2, title: 'Instrumentos de Medición', items: ['Diseñar cuestionarios y escalas psicométricamente sólidas', 'Validar instrumentos mediante análisis factorial confirmatorio', 'Garantizar la fiabilidad y validez de tus mediciones'] },
  { id: 3, title: 'Revisión Sistemática', items: ['Realizar revisiones sistemáticas de literatura con rigor metodológico', 'Sintetizar evidencia existente sobre preguntas específicas', 'Publicar revisiones de alto impacto'] },
  { id: 4, title: 'Análisis Estadístico Aplicado', items: ['Aplicar regresión lineal para modelar relaciones entre variables', 'Utilizar regresión logística para predecir resultados categóricos', 'Interpretar correctamente los resultados de modelos predictivos'] },
  { id: 5, title: 'Modelos Avanzados de Relación', items: ['Implementar modelos de ecuaciones estructurales (SEM)', 'Analizar relaciones complejas entre múltiples variables', 'Probar modelos teóricos sofisticados'] },
  { id: 6, title: 'Meta-investigación y Publicación', items: ['Dominar técnicas de meta-análisis', 'Calcular tamaños del efecto y evaluar heterogeneidad', 'Generar publicaciones científicas de alto impacto'] },
  { id: 7, title: 'Intervenciones y Caso Único', items: ['Diseñar e implementar estudios de caso único con controles internos', 'Evaluar rigurosamente intervenciones individualizadas', 'Comunicar hallazgos con estándares científicos'] }
];

export const STATS: Stat[] = [
  { value: '6', label: 'Semestres', subtext: '3 años de duración' },
  { value: '100%', label: 'En Línea', subtext: 'Reuniones cada 15 días' },
  { value: '30', label: 'Espacios Curriculares', subtext: 'Totalmente prácticos' },
  { value: '9', label: 'Áreas', subtext: 'De especialización' }
];

export const GRADUATION_CAPABILITIES = [
  'Formular preguntas de investigación relevantes que emergen de las necesidades reales de tu campo',
  'Diseñar estudios metodológicamente rigurosos que cumplan estándares internacionales',
  'Ejecutar análisis estadísticos avanzados desde técnicas básicas hasta SEM, meta-análisis y diseños de caso único',
  'Interpretar resultados con precisión considerando implicaciones teóricas y prácticas',
  'Publicar en revistas científicas de impacto con la calidad que exigen los evaluadores internacionales',
  'Presentar tu investigación efectivamente en congresos y conferencias',
  'Contribuir significativamente al avance del conocimiento en tu área de especialización',
  'Liderar proyectos de investigación en universidades, centros de investigación, gobierno u organizaciones',
  'Asesorar y formar a nuevas generaciones de investigadores',
  'Influir en la toma de decisiones basadas en evidencia en tu campo profesional'
];

export const HERO_CONTENT = {
  title: {
    prefix: 'Doctorado en',
    highlight: 'Metodología Avanzada',
    suffix: 'para la Investigación'
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
