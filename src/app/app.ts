import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  menuOpen = signal(false);
  activeSection = signal('hero');

  navLinks = [
    { id: 'about', label: 'À propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ];

  skills = [
    {
      category: 'Data Science & IA',
      items: [
        'Python',
        'Machine Learning',
        'Deep Learning',
        'TensorFlow',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Jupyter',
      ],
    },
    {
      category: 'IoT & Systèmes embarqués',
      items: [
        'Arduino',
        'Raspberry Pi',
        'MQTT',
        'Node-RED',
        'ESP32',
        'Edge Computing',
        'Protocoles IoT',
      ],
    },
    {
      category: 'Développement logiciel',
      items: [
        'Angular',
        'TypeScript',
        'Java',
        'Spring Boot',
        'REST API',
        'Git',
        'Docker',
      ],
    },
    {
      category: 'Bases de données',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'],
    },
  ];

  techIcons: Record<string, string> = {
    PHP: 'devicon-php-plain colored',
    MySQL: 'devicon-mysql-plain colored',
    NestJS: 'devicon-nestjs-plain colored',
    'Next.js': 'devicon-nextjs-plain',
    Supabase: 'devicon-supabase-plain colored',
    Prisma: 'devicon-prisma-plain colored',
    Angular: 'devicon-angular-plain colored',
    'React Native': 'devicon-react-plain colored',
    TensorFlow: 'devicon-tensorflow-original colored',
    Django: 'devicon-django-plain colored',
    Flutter: 'devicon-flutter-plain colored',
    PostgreSQL: 'devicon-postgresql-plain colored',
    'Spring Boot': 'devicon-spring-plain colored',
    TypeScript: 'devicon-typescript-plain colored',
    Python: 'devicon-python-plain colored',
    Docker: 'devicon-docker-plain colored',
    Git: 'devicon-git-plain colored',
    Grafana: 'devicon-grafana-plain colored',
    Arduino: 'devicon-arduino-plain colored',
  };

  techImgs: Record<string, string> = {
    HuggingFace:
      'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
    Higgsfield: 'https://higgsfield.ai/icon.png',
  };

  techBadges: Record<string, { label: string; bg: string; color: string }> = {
    NanoBanana: { label: '🍌', bg: '#fef9c3', color: '#0f0f0f' },
  };

  projects = [
    {
      title: 'Plateforme AgriTrack — EcoTech Mali',
      description:
        "Chef de projet pour le développement d'une plateforme permettant de visualiser en temps réel les installations des produits agricoles dans les champs, destinée aux clients d'EcoTech Mali.",
      tags: ['PHP', 'MySQL'],
      status: 'réalisé',
      role: 'Chef de projet',
    },
    {
      title: 'Pipeline Vidéo IA Marketing — EcoTech Mali',
      description:
        "Mise en place d'un pipeline de vidéo IA professionnelle pour automatiser la création de contenus marketing pour les différents équipements d'EcoTech Mali.",
      tags: ['Higgsfield', 'NanoBanana'],
      status: 'réalisé',
      role: 'Développeur',
    },
    {
      title: 'API Projet PARCA — Sitan Informatique',
      description:
        "Participation au développement de l'API du projet PARCA au Mali, une solution déployée dans le cadre d'un programme national.",
      tags: ['NestJS'],
      status: 'réalisé',
      role: 'Développeur backend',
    },
    {
      title: 'Site Web Journal du Tchad — Sitan Informatique',
      description:
        "Participation majeure au développement du site web du Journal du Tchad, plateforme d'information en ligne.",
      tags: ['Next.js', 'Supabase', 'Prisma', 'NestJS'],
      status: 'réalisé',
      role: 'Développeur fullstack',
    },
    {
      title: 'Gestion des Cotisations — Sitan Informatique',
      description:
        "Chef de projet pour le développement d'une application web de gestion des cotisations au sein de Sitan Informatique.",
      tags: ['Angular', 'NestJS'],
      status: 'réalisé',
      role: 'Chef de projet',
    },
    {
      title: 'CRM Cabinet Diarra',
      description:
        "Participation au développement d'un CRM sur mesure pour le cabinet Diarra, incluant la gestion des clients, des dossiers et des interactions.",
      tags: ['Next.js', 'NestJS'],
      status: 'réalisé',
      role: 'Développeur',
    },
    {
      title: 'CarHealthAI — Prédiction de pannes véhicules électriques',
      description:
        'Système de prédiction préventive des pannes avec une IA entraînée pour anticiper les défaillances sur les véhicules électriques. Application mobile en cours de développement.',
      tags: ['React Native', 'TensorFlow', 'Django', 'Supabase', 'HuggingFace'],
      status: 'en cours',
      role: 'Chef de projet & IA',
    },
    {
      title: 'Système IA de Gestion Agricole',
      description:
        'Plateforme de gestion automatisée des champs avec capteurs IoT (ESP32, NPK, température, humidité, pH via Arduino) et IA entraînée sur données agricoles pour prédire la santé des parcelles, optimiser les récoltes et piloter le champ de bout en bout.',
      tags: [
        'Flutter',
        'Django',
        'HuggingFace',
        'TensorFlow',
        'PostgreSQL',
        'Grafana',
        'Arduino',
      ],
      status: 'en cours',
      role: 'Data Scientist & Architecte',
    },
    {
      title: 'Plateforme Étudiants Maliens au Maroc',
      description:
        "Développement d'une plateforme web dédiée au suivi et à la gestion des étudiants maliens résidant au Maroc.",
      tags: ['Spring Boot', 'Angular'],
      status: 'en cours',
      role: 'Développeur fullstack',
    },
  ];

  education = [
    {
      degree: 'Master Data Science & IoT',
      period: '2025 — Présent',
      description:
        'Spécialisation en intelligence artificielle, apprentissage automatique et systèmes embarqués connectés.',
    },
    {
      degree: 'Licence Génie Logiciel',
      period: '2021 — 2024',
      description:
        'Développement logiciel, architecture des systèmes, bases de données et méthodes agiles.',
    },
  ];

  currentYear = new Date().getFullYear();

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  @HostListener('window:scroll')
  onScroll() {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= 80 && bottom > 80) {
          this.activeSection.set(id);
          break;
        }
      }
    }
  }
}
