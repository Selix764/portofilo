export type Language = 'ro' | 'en'

export const translations = {
  ro: {
    // Navigation
    nav: {
      home: 'Acasă',
      about: 'Despre',
      skills: 'Competențe',
      howItStarted: 'Cum a început',
      projects: 'Proiecte',
      contact: 'Contact'
    },

    // Hero Section
    hero: {
      title: 'Construiesc',
      subtitle: 'Vise',
      description: 'Dezvoltator web pasionat care transformă ideile în realitate digitală. Specializat în aplicații moderne, design intuitiv și soluții scalabile.',
      learnMore: 'Descoperă Portofoliul',
      scrollDown: 'Derulează în jos'
    },

    // About Section
    about: {
      title: 'Despre Mine',
      subtitle: 'Un dezvoltator tânăr cu ambiții mari',
      description: 'Sunt un dezvoltator web freelance de 16 ani din România, pasionat de crearea soluțiilor web moderne care aduc rezultate pentru afacere. În ciuda vârstei mele, aduc o abordare matură dezvoltării, concentrându-mă pe cod curat, experiența utilizatorului și livrarea proiectelor la timp.',
      description2: 'Sunt specializat în Next.js, React și integrarea API-urilor. Experiența mea include construirea de site-uri responsive, integrarea serviciilor terțe și crearea fluxurilor de lucru automatizate. În prezent caut oportunități freelance pentru a-mi extinde portofoliul și a construi relații durabile cu clienții.',
      stats: {
        age: 'Vârsta',
        projects: 'Proiecte Finalizate',
        technologies: 'Tehnologii',
        satisfaction: 'Satisfacția Clienților'
      },
      location: 'România',
      availability: 'Disponibil pentru proiecte freelance',
      email: 'iordachepaul764@gmail.com'
    },

    // Skills Section
    skills: {
      title: 'Competențe & Expertiză',
      subtitle: 'Un set complet de instrumente și metodologii pe care le folosesc pentru a da viață ideilor',
      categories: {
        frontend: 'Dezvoltare Frontend',
        backend: 'Backend & API-uri',
        tools: 'Instrumente de Dezvoltare',
        design: 'Design & UX',
        business: 'Competențe de Afacere',
        payments: 'Plăți & Finanțe'
      }
    },



    // Projects Section
    projects: {
      title: 'Proiecte Selectate',
      subtitle: 'O prezentare a ultimelor mele lucrări și contribuții la comunitatea de dezvoltatori',
      viewAll: 'Vezi Toate Proiectele pe GitHub',
      screenshotPlaceholder: 'Imagine Proiect',
      addScreenshot: 'Adaugă {name}.png în /public/projects/',
      clickToVisit: 'Click pentru site live →',
      viewCode: 'Vezi Codul',
      liveDemo: 'Demo Live'
    },

    // How It Started Section
    howItStarted: {
      title: 'Cum a început totul',
      subtitle: 'Călătoria mea în programare a început din curiozitate pură — aveam în jur de 7 sau 8 ani când am început să mă întreb cum funcționează de fapt calculatoarele. Am încercat să învăț, dar ca majoritatea copiilor, am pierdut răbdarea destul de repede.',
      paragraph2: 'Ani mai târziu, când aveam 13 ani, ceva s-a declanșat. Am văzut un prieten al unui prieten — doar un adolescent — care și-a construit propriul motor de joc de la zero. Era autodidact, organizat și concentrat. M-a inspirat. Dacă el putea să facă asta, și eu puteam.',
      paragraph3: 'M-am aruncat în acest domeniu, am început să învăț tot ce puteam — de la frontend la API-uri până la construirea de aplicații reale. Nu mult după aceea, am obținut primul meu proiect ajutând o mică echipă rusă cu o aplicație desktop WPF. Nu era perfect, dar era real.',
      paragraph4: 'De atunci, am construit site-uri web complete, mi-am îmbunătățit abilitățile de UI/UX și am început să lucrez cu afaceri reale. Restul este istorie — și încă se scrie.',
      projectTitle: 'Primul meu proiect (2024)',
      projectDescription1: 'Înainte să construiesc site-uri web rapide și să lucrez cu clienți reali, am început cu ceva complet diferit — o aplicație desktop.',
      projectDescription2: 'La doar 15 ani, m-am alăturat unei mici echipe remote de dezvoltatori ruși și am ajutat la construirea unei aplicații WPF folosind C# și .NET. Era dur, nepolishat și cu siguranță nu frumos — dar m-a învățat cum să colaborez, să debug și să livrez cod într-un mediu real.',
      projectDescription3: 'Această experiență a modelat modul în care lucrez astăzi — concentrat, autodidact și niciodată frică să mă arunc în apele adânci.',
      projectNote: 'Acest proiect nu mai este online, dar a marcat începutul călătoriei mele de dezvoltator.',
      viewFirstProject: 'Vezi primul meu proiect'
    },

                   // Contact Section
    contact: {
      title: 'Ia Legătura',
      subtitle: 'Sunt întotdeauna deschis la discuții despre noi oportunități și proiecte interesante',
      description: 'Sunt în prezent disponibil pentru proiecte freelance și gata să te ajut să dai viață ideilor tale. Fie că ai nevoie de un website, integrare API sau ai întrebări despre proiectul tău, voi răspunde în 24 de ore cu o propunere detaliată.',
      letsConnect: 'Să Ne Conectăm',
      followMe: 'Urmărește-mă',
      phone: '+40 745 032 132',
      readyToStart: 'Gata să Începi Proiectul Tău?',
      readyToStartDescription: 'Sunt entuziasmat să aud despre ideile tale și să te ajut să le dai viață. Să creăm ceva minunat împreună!',
      sendEmail: 'Trimite-mi un Email',
      callDirectly: 'Sună-mă Direct',
      form: {
        name: 'Nume',
        email: 'Email',
        subject: 'Subiect',
        message: 'Mesaj',
        namePlaceholder: 'Numele tău',
        emailPlaceholder: 'emailul.tau@exemplu.com',
        subjectPlaceholder: 'Despre ce este vorba?',
        messagePlaceholder: 'Spune-mi despre proiectul tău...',
        send: 'Trimite Mesajul',
        sending: 'Se trimite...',
        success: 'Mulțumesc pentru mesaj! Voi răspunde în curând.'
      }
    },

    // Footer
    footer: {
      tagline: 'Construind experiențe digitale care contează',
      quickLinks: 'Link-uri Rapide',
      connect: 'Conectează-te',
      madeWith: 'Realizat cu',
      using: 'folosind Next.js & Tailwind CSS'
    },

    // Common
    common: {
      loading: 'Se încarcă portofoliul...',
      years: 'ani',
      plus: '+',
      percent: '%'
    }
  },

  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      howItStarted: 'How it started',
      projects: 'Projects',
      contact: 'Contact'
    },

    // Hero Section
    hero: {
      title: 'Building',
      subtitle: 'Dreams',
      description: 'Passionate web developer turning ideas into digital reality. Specializing in modern applications, intuitive design, and scalable solutions.',
      learnMore: 'Explore Portfolio',
      scrollDown: 'Scroll Down'
    },

    // About Section
    about: {
      title: 'About Me',
      subtitle: 'Young Developer, Big Ambitions',
      description: 'I\'m a 16-year-old freelance web developer from Romania, passionate about creating modern web solutions that drive business results. Despite my age, I bring a mature approach to development, focusing on clean code, user experience, and delivering projects on time.',
      description2: 'I specialize in Next.js, React, and API integrations. My experience includes building responsive websites, integrating third-party services, and creating automated workflows. I\'m currently seeking freelance opportunities to expand my portfolio and build lasting client relationships.',
      stats: {
        age: 'Age',
        projects: 'Projects Completed',
        technologies: 'Technologies',
        satisfaction: 'Client Satisfaction'
      },
      location: 'Romania',
      availability: 'Available for freelance projects',
      email: 'iordachepaul764@gmail.com'
    },

    // Skills Section
    skills: {
      title: 'Skills & Expertise',
      subtitle: 'A comprehensive toolkit of technologies and methodologies I use to bring ideas to life',
      categories: {
        frontend: 'Frontend Development',
        backend: 'Backend & APIs',
        tools: 'Development Tools',
        design: 'Design & UX',
        business: 'Business Skills',
        payments: 'Payment & Finance'
      }
    },



    // Projects Section
    projects: {
      title: 'Featured Projects',
      subtitle: 'A showcase of my latest work and contributions to the developer community',
      viewAll: 'View All Projects on GitHub',
      screenshotPlaceholder: 'Screenshot Placeholder',
      addScreenshot: 'Add {name}.png to /public/projects/',
      clickToVisit: 'Click to visit live site →',
      viewCode: 'View Code',
      liveDemo: 'Live Demo'
    },

    // How It Started Section
    howItStarted: {
      title: 'How It All Started',
      subtitle: 'My journey into programming started from pure curiosity — I was around 7 or 8 when I first wondered how computers actually worked. I tried to learn, but like most kids, I lost patience pretty quickly.',
      paragraph2: 'Years later, when I was 13, something clicked. I saw a friend of a friend — just a teenager — who had built his own game engine from scratch. He was self-taught, organized, and focused. It inspired me. If he could do it, so could I.',
      paragraph3: 'I dove in, started learning everything I could — from frontend to APIs to building real apps. Not long after, I landed my first project helping a small Russian team with a WPF desktop app. It wasn\'t perfect, but it was real.',
      paragraph4: 'Since then, I\'ve built full websites, polished my UI/UX skills, and started working with real businesses. The rest is history — and it\'s still being written.',
      projectTitle: 'My First Ever Project (2024)',
      projectDescription1: 'Before I was building fast websites and working with real clients, I started with something completely different — a desktop app.',
      projectDescription2: 'At just barely 15, I joined a small remote team of Russian developers and helped build a WPF application using C# and .NET. It was rough, unpolished, and definitely not pretty — but it taught me how to collaborate, debug, and ship code in a real environment.',
      projectDescription3: 'This experience shaped how I work today — focused, self-taught, and never afraid to jump into the deep end.',
      projectNote: 'This project is no longer online, but it marked the start of my developer journey.',
      viewFirstProject: 'View My First Project'
    },

    // Contact Section
    contact: {
      title: 'Get In Touch',
      subtitle: 'I\'m always open to discussing new opportunities and interesting projects',
      description: 'I\'m currently available for freelance projects and ready to help bring your ideas to life. Whether you need a website, API integration, or have questions about your project, I\'ll respond within 24 hours with a detailed proposal.',
      letsConnect: 'Let\'s Connect',
      followMe: 'Follow Me',
      phone: '+40 745 032 132',
      readyToStart: 'Ready to Start Your Project?',
      readyToStartDescription: 'I\'m excited to hear about your ideas and help bring them to life. Let\'s create something amazing together!',
      sendEmail: 'Send Me an Email',
      callDirectly: 'Call Me Directly',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your.email@example.com',
        subjectPlaceholder: 'What\'s this about?',
        messagePlaceholder: 'Tell me about your project...',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Thank you for your message! I\'ll get back to you soon.'
      }
    },

    // Footer
    footer: {
      tagline: 'Building digital experiences that matter',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      madeWith: 'Made with',
      using: 'using Next.js & Tailwind CSS'
    },

    // Common
    common: {
      loading: 'Loading portfolio...',
      years: 'years',
      plus: '+',
      percent: '%'
    }
  }
} 