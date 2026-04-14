/** Site-wide UI strings (header, hero, sections). Merged with per-locale patches. */

function mergePage(base, patch) {
  if (!patch) return base;
  return {
    ...base,
    ...patch,
    header: { ...base.header, ...patch.header },
    hero: { ...base.hero, ...patch.hero },
    privacy: patch.privacy ? { ...base.privacy, ...patch.privacy } : base.privacy,
    splits: patch.splits ?? base.splits,
    stayUpToDate: patch.stayUpToDate
      ? { ...base.stayUpToDate, ...patch.stayUpToDate, cards: patch.stayUpToDate.cards ?? base.stayUpToDate.cards }
      : base.stayUpToDate,
  };
}

const PAGE_EN = {
  header: {
    features: 'Features',
    privacy: 'Privacy',
    helpCenter: 'Help Center',
    blog: 'Blog',
    forBusiness: 'For Business',
    apps: 'Apps',
    login: 'Log in',
    download: 'Download',
  },
  hero: {
    h1a: 'Message',
    h1b: 'privately',
    sub: 'Simple, reliable, private messaging and calling for free*, available all over the world.',
    download: 'Download',
    dataNote: '* Data charges may apply. Contact your provider for details.',
    chat1: 'Good morning mom 🥰',
    chat2Trip: "Can't wait for our next family trip!",
  },
  privacy: {
    line1: 'With private messaging and calling, you',
    line2: 'can be yourself, speak freely and feel',
    line3: 'close to the most important people in',
    line4: 'your life no matter where they are.',
  },
  splits: [
    {
      key: 'calls',
      titleLines: ['Never miss a moment with voice and video calls'],
      titleLine2Green: false,
      description:
        "From a group call to classmates to a quick call with mom, feel like you're in the same room with voice and video calls.",
      linkText: 'Learn more',
      imageAlt: 'Video call mockup',
    },
    {
      key: 'windows',
      titleLines: ['Chat and call on a larger screen'],
      titleLine2Green: false,
      description:
        'View messages, photos, videos and documents on a larger screen with WhatsApp for Windows.',
      linkText: 'Download Windows app',
      imageAlt: 'WhatsApp for Windows mockup',
    },
    {
      key: 'speak',
      titleLines: ['Speak', 'freely'],
      titleLine2Green: true,
      description:
        "With end-to-end encryption on WhatsApp, your personal messages and calls are secured with a lock. Only you and the person you're talking to can read or listen to them, and no one else, not even WhatsApp",
      linkText: 'Learn more',
      imageAlt: 'Encrypted message mockup',
    },
    {
      key: 'groups',
      titleLines: ['Keep in touch', 'with your groups'],
      titleLine2Green: false,
      description:
        "Whether it's planning an outing with friends or simply staying on top of your family chats, group conversations should feel effortless.",
      linkText: 'Learn more',
      imageAlt: 'Group chat mockup',
    },
    {
      key: 'feel',
      titleLines: ['Say what', 'you feel'],
      titleLine2Green: false,
      description:
        'Express yourself without words. Use stickers and GIFs or share everyday moments on Status. Record a voice message for a quick hello or a longer story.',
      linkText: 'Learn more',
      imageAlt: 'Say what you feel mockup',
    },
    {
      key: 'business',
      titleLines: ['Transform', 'your business'],
      titleLine2Green: false,
      description:
        'WhatsApp Business helps you reach your customers globally to deliver compelling experiences at scale. Showcase your products and services, increase sales, and build relationships all with WhatsApp.',
      linkText: 'Learn more',
      imageAlt: 'WhatsApp Business catalog on phone',
    },
  ],
  stayUpToDate: {
    title: 'Stay up to date',
    sub: 'Get the latest from WhatsApp: news, useful tips, and our newest features to help you stay connected.',
    readMore: 'Read more',
    prevAria: 'Previous article',
    nextAria: 'Next article',
    cards: [
      {
        title: "WhatsApp's Latest Privacy Protection: Strict Account Settings",
        excerpt:
          "WhatsApp's new Strict Account Settings feature provides stronger security against sophisticated attacks by locking privacy settings and blocking media from non-contacts.",
        href: '#',
      },
      {
        title: 'Level Up Your WhatsApp Group Chats With New Member Tags, Text Stickers, and More',
        excerpt:
          "It's a new year and a great time for some upgrades to your group chats. Group chats on WhatsApp make it easier to stay connected with the people in your life no matter what you're planning.",
        href: '#',
      },
      {
        title: 'Introducing parent-managed accounts on WhatsApp',
        excerpt:
          "We're building safer experiences for families: parent-managed accounts help caregivers guide how young people use WhatsApp with clear controls and visibility.",
        href: '#',
      },
      {
        title: 'New Feature Roundup: Free up space, multiple accounts, cross-platform transfer and more',
        excerpt:
          'Catch up on the latest improvements—manage storage smarter, use multiple accounts where supported, and move chats more smoothly across devices when you upgrade.',
        href: '#',
      },
      {
        title: 'Introducing Group Message History: A more private way to catch up in group chats',
        excerpt:
          "We're excited to introduce Group Message History—a feature that makes group chats easier to join without losing context, with privacy designed for admins and members.",
        href: '#',
      },
    ],
  },
};

const PATCHES = {
  fr: {
    header: {
      features: 'Fonctionnalités',
      privacy: 'Confidentialité',
      helpCenter: "Centre d'aide",
      blog: 'Blog',
      forBusiness: 'Pour les entreprises',
      apps: 'Applis',
      login: 'Connexion',
      download: 'Télécharger',
    },
    hero: {
      h1a: 'Échangez',
      h1b: 'en privé',
      sub:
        'Une messagerie et des appels simples, fiables et privés, gratuits*, partout dans le monde.',
      download: 'Télécharger',
      dataNote: '* Des frais de données peuvent s’appliquer. Contactez votre opérateur.',
      chat1: 'Bonjour maman 🥰',
      chat2Trip: 'Hâte de partir en voyage avec toute la famille !',
    },
    privacy: {
      line1: 'Avec la messagerie et les appels privés,',
      line2: 'vous pouvez être vous-même, parler librement et vous sentir',
      line3: 'proche des personnes les plus importantes de',
      line4: 'votre vie, où qu’elles soient.',
    },
    splits: [
      {
        key: 'calls',
        titleLines: ['Ne manquez aucun moment grâce aux appels vocaux et vidéo'],
        titleLine2Green: false,
        description:
          "D'un appel de groupe avec vos camarades à un petit mot à maman, les appels vocaux et vidéo vous rapprochent.",
        linkText: 'En savoir plus',
        imageAlt: 'Visuel appels vidéo',
      },
      {
        key: 'windows',
        titleLines: ['Discutez et appelez sur un grand écran'],
        titleLine2Green: false,
        description:
          'Consultez messages, photos, vidéos et documents sur un écran plus grand avec WhatsApp pour Windows.',
        linkText: 'Télécharger pour Windows',
        imageAlt: 'WhatsApp pour Windows',
      },
      {
        key: 'speak',
        titleLines: ['Parlez', 'librement'],
        titleLine2Green: true,
        description:
          "Avec le chiffrement de bout en bout, vos messages et appels personnels sont protégés. Seuls vous et votre interlocuteur pouvez les lire ou les entendre, pas même WhatsApp.",
        linkText: 'En savoir plus',
        imageAlt: 'Message chiffré',
      },
      {
        key: 'groups',
        titleLines: ['Restez proche', 'de vos groupes'],
        titleLine2Green: false,
        description:
          'Organiser une sortie entre amis ou suivre les discussions familiales : vos groupes restent simples et fluides.',
        linkText: 'En savoir plus',
        imageAlt: 'Discussion de groupe',
      },
      {
        key: 'feel',
        titleLines: ['Dites ce que', 'vous ressentez'],
        titleLine2Green: false,
        description:
          'Exprimez-vous sans mots : stickers, GIF, Statut ou message vocal pour un bonjour rapide ou une longue histoire.',
        linkText: 'En savoir plus',
        imageAlt: 'Exprimez-vous',
      },
      {
        key: 'business',
        titleLines: ['Transformez', 'votre entreprise'],
        titleLine2Green: false,
        description:
          'WhatsApp Business vous aide à toucher vos clients partout et à offrir de belles expériences : vitrine, ventes et lien durable avec vos clients.',
        linkText: 'En savoir plus',
        imageAlt: 'Catalogue WhatsApp Business',
      },
    ],
    stayUpToDate: {
      title: 'Restez informé',
      sub: 'Toutes les nouveautés WhatsApp : actualités, astuces et fonctionnalités pour rester connecté.',
      readMore: 'Lire la suite',
      prevAria: 'Article précédent',
      nextAria: 'Article suivant',
      cards: [
        {
          title: 'Nouvelle protection de la vie privée : paramètres de compte stricts',
          excerpt:
            'Des paramètres de compte plus stricts pour renforcer votre sécurité et limiter les médias des non-contacts.',
          href: '#',
        },
        {
          title: 'Donnez de la voix à vos groupes : tags, stickers et plus',
          excerpt:
            'De quoi dynamiser vos groupes : nouveaux outils pour rester proche de vos proches, quel que soit le projet.',
          href: '#',
        },
        {
          title: 'Les comptes gérés par les parents arrivent sur WhatsApp',
          excerpt:
            'Des expériences plus sûres pour les familles, avec des repères clairs pour les parents.',
          href: '#',
        },
        {
          title: 'Tour d’horizon : stockage, comptes multiples, transfert multi-appareils…',
          excerpt:
            'Gérez mieux le stockage, utilisez plusieurs comptes où c’est possible et passez à un nouvel appareil plus sereinement.',
          href: '#',
        },
        {
          title: 'Historique des messages de groupe, plus privé pour rattraper la conversation',
          excerpt:
            'Rejoignez un groupe sans perdre le fil : une solution pensée pour la vie privée des membres et des admins.',
          href: '#',
        },
      ],
    },
  },
  es: {
    header: {
      features: 'Funciones',
      privacy: 'Privacidad',
      helpCenter: 'Centro de ayuda',
      blog: 'Blog',
      forBusiness: 'Para empresas',
      apps: 'Apps',
      login: 'Iniciar sesión',
      download: 'Descargar',
    },
    hero: {
      h1a: 'Habla',
      h1b: 'en privado',
      sub:
        'Mensajería y llamadas simples, fiables y privadas gratis*, en todo el mundo.',
      download: 'Descargar',
      dataNote: '* Pueden aplicarse cargos de datos. Consulta a tu operador.',
      chat1: 'Buenos días mamá 🥰',
      chat2Trip: '¡No veo el momento del próximo viaje en familia!',
    },
    privacy: {
      line1: 'Con mensajes y llamadas privadas,',
      line2: 'puedes ser tú mismo, hablar con libertad y sentirte',
      line3: 'cerca de las personas más importantes',
      line4: 'estén donde estén.',
    },
    splits: [
      {
        key: 'calls',
        titleLines: ['No te pierdas ningún momento con llamadas de voz y vídeo'],
        titleLine2Green: false,
        description:
          'De una videollamada con tus compañeros a una llamada rápida con mamá, como si estuvierais en la misma habitación.',
        linkText: 'Más información',
        imageAlt: 'Llamadas de vídeo',
      },
      {
        key: 'windows',
        titleLines: ['Chatea y llama en una pantalla más grande'],
        titleLine2Green: false,
        description:
          'Mira mensajes, fotos, vídeos y documentos en pantalla grande con WhatsApp para Windows.',
        linkText: 'Descargar para Windows',
        imageAlt: 'WhatsApp para Windows',
      },
      {
        key: 'speak',
        titleLines: ['Habla', 'con libertad'],
        titleLine2Green: true,
        description:
          'Con el cifrado de extremo a extremo, solo tú y quien elijas podéis leer u oír vuestros mensajes y llamadas.',
        linkText: 'Más información',
        imageAlt: 'Mensaje cifrado',
      },
      {
        key: 'groups',
        titleLines: ['Mantente en contacto', 'con tus grupos'],
        titleLine2Green: false,
        description:
          'Organizar un plan con amigos o seguir tu grupo familiar debe resultar natural y fácil.',
        linkText: 'Más información',
        imageAlt: 'Chat grupal',
      },
      {
        key: 'feel',
        titleLines: ['Di lo que', 'sientes'],
        titleLine2Green: false,
        description:
          'Exprésate sin palabras: stickers, GIF, Estados o notas de voz para un hola rápido o una historia larga.',
        linkText: 'Más información',
        imageAlt: 'Di lo que sientes',
      },
      {
        key: 'business',
        titleLines: ['Transforma', 'tu negocio'],
        titleLine2Green: false,
        description:
          'WhatsApp Business te ayuda a llegar a clientes de todo el mundo con experiencias claras y ventas a escala.',
        linkText: 'Más información',
        imageAlt: 'Catálogo WhatsApp Business',
      },
    ],
    stayUpToDate: {
      title: 'Mantente al día',
      sub: 'Novedades de WhatsApp: noticias, consejos y funciones para seguir conectado.',
      readMore: 'Leer más',
      prevAria: 'Artículo anterior',
      nextAria: 'Artículo siguiente',
      cards: [
        {
          title: 'Nueva protección de privacidad de WhatsApp: ajustes estrictos de la cuenta',
          excerpt:
            'La nueva función de ajustes estrictos de la cuenta ofrece mayor seguridad frente a ataques avanzados al bloquear la configuración de privacidad y restringir multimedia de personas que no están en tus contactos.',
          href: '#',
        },
        {
          title:
            'Lleva tus chats grupales de WhatsApp al siguiente nivel: etiquetas para miembros, stickers de texto y más',
          excerpt:
            'Es un buen momento para renovar tus grupos. Los chats grupales en WhatsApp te ayudan a mantenerte cerca de las personas importantes, pase lo que pase.',
          href: '#',
        },
        {
          title: 'Presentamos cuentas gestionadas por los padres en WhatsApp',
          excerpt:
            'Construimos experiencias más seguras para las familias: las cuentas gestionadas por padres permiten orientar el uso de WhatsApp con controles claros y visibilidad.',
          href: '#',
        },
        {
          title:
            'Novedades: libera espacio, varias cuentas, transferencia entre dispositivos y más',
          excerpt:
            'Ponte al frente de las mejoras: gestiona mejor el almacenamiento, usa varias cuentas donde esté disponible y mueve tus chats entre dispositivos con más facilidad.',
          href: '#',
        },
        {
          title:
            'Historial de mensajes del grupo: una forma más privada de ponerte al día en los grupos',
          excerpt:
            'Presentamos el historial de mensajes del grupo: únete a conversaciones grupales sin perder el contexto, con la privacidad de administradores y miembros en mente.',
          href: '#',
        },
      ],
    },
  },
  de: {
    header: {
      features: 'Funktionen',
      privacy: 'Datenschutz',
      helpCenter: 'Hilfe-Center',
      blog: 'Blog',
      forBusiness: 'Für Unternehmen',
      apps: 'Apps',
      login: 'Einloggen',
      download: 'Herunterladen',
    },
    hero: {
      h1a: 'Schreib',
      h1b: 'privat',
      sub: 'Einfache, zuverlässige und private Nachrichten und Anrufe kostenlos*, weltweit.',
      download: 'Herunterladen',
      dataNote: '* Es können Datengebühren anfallen. Wende dich an deinen Anbieter.',
      chat1: 'Guten Morgen Mama 🥰',
      chat2Trip: 'Freue mich schon auf unseren nächsten Familienurlaub!',
    },
    privacy: {
      line1: 'Mit privaten Nachrichten und Anrufen',
      line2: 'kannst du du selbst sein, frei sprechen und',
      line3: 'den wichtigsten Menschen nah sein –',
      line4: 'egal, wo sie sind.',
    },
    splits: [
      {
        key: 'calls',
        titleLines: ['Verpasse keinen Moment mit Sprach- und Videoanrufen'],
        titleLine2Green: false,
        description:
          'Von Gruppen-Anrufen bis zum schnellen Hallo bei Mama – ihr seid nah bei euch.',
        linkText: 'Mehr erfahren',
        imageAlt: 'Videoanrufe',
      },
      {
        key: 'windows',
        titleLines: ['Chatten und telefonieren auf dem großen Bildschirm'],
        titleLine2Green: false,
        description:
          'Sieh Nachrichten, Fotos, Videos und Dokumente auf dem großen Bildschirm mit WhatsApp für Windows.',
        linkText: 'Windows-App laden',
        imageAlt: 'WhatsApp für Windows',
      },
      {
        key: 'speak',
        titleLines: ['Sprich', 'frei'],
        titleLine2Green: true,
        description:
          'Mit Ende-zu-Ende-Verschlüsselung sind eure persönlichen Chats und Anrufe geschützt – nur ihr und euer Gesprächspartner.',
        linkText: 'Mehr erfahren',
        imageAlt: 'Verschlüsselte Nachricht',
      },
      {
        key: 'groups',
        titleLines: ['Bleib in Kontakt', 'mit deinen Gruppen'],
        titleLine2Green: false,
        description:
          'Ob Ausflug mit Freunden oder Familien-Chat – Gruppen sollen mühelos funktionieren.',
        linkText: 'Mehr erfahren',
        imageAlt: 'Gruppenchat',
      },
      {
        key: 'feel',
        titleLines: ['Sag, was du', 'fühlst'],
        titleLine2Green: false,
        description:
          'Ohne Worte: Sticker, GIFs, Status oder Sprachnachricht für ein kurzes Hallo oder eine lange Geschichte.',
        linkText: 'Mehr erfahren',
        imageAlt: 'Ausdruck',
      },
      {
        key: 'business',
        titleLines: ['Verändere', 'dein Business'],
        titleLine2Green: false,
        description:
          'WhatsApp Business erreicht Kunden weltweit: Produkte zeigen, verkaufen und Beziehungen pflegen.',
        linkText: 'Mehr erfahren',
        imageAlt: 'WhatsApp Business Katalog',
      },
    ],
    stayUpToDate: {
      title: 'Bleib auf dem Laufenden',
      sub: 'Neues von WhatsApp: News, Tipps und Funktionen für dich.',
      readMore: 'Weiterlesen',
      prevAria: 'Vorheriger Artikel',
      nextAria: 'Nächster Artikel',
      cards: [
        {
          title: 'Neuer WhatsApp-Datenschutz: strenge Kontoeinstellungen',
          excerpt:
            'Mit „Strenge Kontoeinstellungen“ schützt du dich besser vor ausgeklügelten Angriffen: Datenschutzeinstellungen bleiben gesperrt und Medien von Nicht-Kontakten werden blockiert.',
          href: '#',
        },
        {
          title:
            'WhatsApp-Gruppen upgraden: Mitglieds-Tags, Text-Sticker und mehr',
          excerpt:
            'Ein guter Zeitpunkt für Gruppenchats: Auf WhatsApp bleibst du mit den Menschen in deinem Leben vernetzt – egal, was du planst.',
          href: '#',
        },
        {
          title: 'Elternverwaltete Konten kommen auf WhatsApp',
          excerpt:
            'Sicherere Erlebnisse für Familien: Eltern können Nutzung und Kontrollen klar begleiten – mit guter Übersicht.',
          href: '#',
        },
        {
          title:
            'Feature-Round-up: Speicher freimachen, mehrere Konten, plattformübergreifender Transfer u. v. m.',
          excerpt:
            'Die neuesten Verbesserungen: Speicher klüger verwalten, mehrere Konten nutzen, wo unterstützt, und Chats beim Gerätewechsel reibungsloser übernehmen.',
          href: '#',
        },
        {
          title:
            'Gruppennachrichtenverlauf: privatere Art, in Gruppen einzusteigen',
          excerpt:
            'Wir stellen den Gruppennachrichtenverlauf vor – damit du Gruppen leichter beitrittst, ohne Kontext zu verlieren, mit Fokus auf Privatsphäre von Admins und Mitgliedern.',
          href: '#',
        },
      ],
    },
  },
  sl: {
    header: {
      features: 'Funkcije',
      privacy: 'Zasebnost',
      helpCenter: 'Središče za pomoč',
      blog: 'Blog',
      forBusiness: 'Za podjetje',
      apps: 'Aplikacije',
      login: 'Prijava',
      download: 'Prenos',
    },
    hero: {
      h1a: 'Sporočajte',
      h1b: 'zasebno',
      sub: 'Preprosto, zanesljivo in zasebno sporočanje ter klici brezplačno*, povsod po svetu.',
      download: 'Prenos',
      dataNote: '* Lahko se zaračunajo podatki. Za podrobnosti se obrnite na ponudnika.',
      chat1: 'Dobro jutro, mama 🥰',
      chat2Trip: 'Komaj čakam na naslednji družinski izlet!',
    },
    privacy: {
      line1: 'Z zasebnim sporočanjem in klici',
      line2: 'lahko ostanete sami sebi, govorite svobodno in',
      line3: 'ste blizu najpomembnejšim ljudem',
      line4: 'kjerkoli so.',
    },
    splits: [
      {
        key: 'calls',
        titleLines: ['Z glasovnimi in video klici ne zamudite trenutkov'],
        titleLine2Green: false,
        description:
          'Od skupinskega klica do hitrega pozdrava mami – občutek bližine čez razdaljo.',
        linkText: 'Več',
        imageAlt: 'Videoklici',
      },
      {
        key: 'windows',
        titleLines: ['Klepetajte in kličite na večjem zaslonu'],
        titleLine2Green: false,
        description:
          'Sporočila, fotografije, videoposnetke in dokumente na večjem zaslonu z WhatsApp za Windows.',
        linkText: 'Prenos za Windows',
        imageAlt: 'WhatsApp za Windows',
      },
      {
        key: 'speak',
        titleLines: ['Govorite', 'svobodno'],
        titleLine2Green: true,
        description:
            'S šifriranjem od konca do konca so vaša osebna sporočila in klici zaščitena.',
        linkText: 'Več',
        imageAlt: 'Šifrirano sporočilo',
      },
      {
        key: 'groups',
        titleLines: ['Ostanite v stiku', 's svojimi skupinami'],
        titleLine2Green: false,
        description:
          'Načrtovanje z družbo ali družinskimi klepeti naj bo preprosto.',
        linkText: 'Več',
        imageAlt: 'Skupinski klepet',
      },
      {
        key: 'feel',
        titleLines: ['Povejte, kaj', 'čutite'],
        titleLine2Green: false,
        description:
          'Brez besed: nalepke, GIF-i, status ali glasovno sporočilo.',
        linkText: 'Več',
        imageAlt: 'Izražanje',
      },
      {
        key: 'business',
        titleLines: ['Spremenite', 'svoje podjetje'],
        titleLine2Green: false,
        description:
          'WhatsApp Business doseže stranke po svetu in pomaga pri prodaji.',
        linkText: 'Več',
        imageAlt: 'Katalog WhatsApp Business',
      },
    ],
    stayUpToDate: {
      title: 'Bodite na tekočem',
      sub: 'Najnovejše od WhatsApp: novice, nasveti in funkcije.',
      readMore: 'Preberi več',
      prevAria: 'Prejšnji članek',
      nextAria: 'Naslednji članek',
      cards: [
        {
          title: 'Najnovejša zaščita zasebnosti WhatsApp: stroge nastavitve računa',
          excerpt:
            'Nova možnost Stroge nastavitve računa na WhatsAppu krepi varnost pred napadi z zaklenjenimi nastavitvami zasebnosti in blokiranjem vsebine od oseb, ki niso med vašimi stiki.',
          href: '#',
        },
        {
          title:
            'Izboljšajte skupinske klepete na WhatsAppu z novimi oznakami članov, besedilnimi nalepkami in več',
          excerpt:
            'Novo obdobje je pravi čas za prenovo skupinskih klepetov. Na WhatsAppu vam ti klepeti olajšajo stik z ljudmi v vašem življenju, ne glede na to, kar načrtujete.',
          href: '#',
        },
        {
          title: 'Predstavljamo starševsko upravljane račune na WhatsAppu',
          excerpt:
            'Gradimo varnejše izkušnje za družine: starševsko upravljani računi skrbnikom pomagajo usmerjati, kako mladi uporabljajo WhatsApp, z jasnimi kontrolami in preglednostjo.',
          href: '#',
        },
        {
          title:
            'Povzetek novosti: sprostite prostor za shranjevanje, več računov, prenos med napravami in še več',
          excerpt:
            'Oglejte si najnovejše izboljšave — pametnejše upravljanje prostora, uporabo več računov tam, kjer je na voljo, in lažji prehod klepetov med napravami ob nadgradnji.',
          href: '#',
        },
        {
          title:
            'Zgodovina skupinskih sporočil: bolj zaseben način, da v skupinskih klepetih vse nadoknadite',
          excerpt:
            'Predstavljamo zgodovino skupinskih sporočil — funkcijo, ki poenostavi vstop v skupinske klepete brez izgube konteksta, z zasebnostjo zasnovano za skrbnike in člane.',
          href: '#',
        },
      ],
    },
  },
  ar: {
    header: {
      features: 'الميزات',
      privacy: 'الخصوصية',
      helpCenter: 'مركز المساعدة',
      blog: 'المدونة',
      forBusiness: 'للأعمال',
      apps: 'التطبيقات',
      login: 'تسجيل الدخول',
      download: 'تنزيل',
    },
    hero: {
      h1a: 'راسل',
      h1b: 'بخصوصية',
      sub: 'رسائل ومكالمات بسيطة وموثوقة وخاصة مجانًا*، حول العالم.',
      download: 'تنزيل',
      dataNote: '* قد تطبق رسوم البيانات. راجع مزود الخدمة.',
      chat1: 'صباح الخير يا ماما 🥰',
      chat2Trip: 'لا أطيق انتظار رحلتنا العائلية القادمة!',
    },
    privacy: {
      line1: 'مع المراسلة والمكالمات الخاصة،',
      line2: 'يمكنك أن تكون على طبيعتك، وتحدث بحرية',
      line3: 'وتشعر بالقرب من أهم الناس',
      line4: 'في حياتك أينما كانوا.',
    },
    stayUpToDate: {
      title: 'ابقَ على اطلاع',
      sub: 'آخر الأخبار من واتساب: نصائح وميزات جديدة.',
      readMore: 'اقرأ المزيد',
      prevAria: 'المقال السابق',
      nextAria: 'المقال التالي',
    },
  },
  ur: {
    header: {
      features: 'فیچرز',
      privacy: 'پرائیویسی',
      helpCenter: 'ہیلپ سنٹر',
      blog: 'بلاگ',
      forBusiness: 'کاروبار کے لیے',
      apps: 'ایپس',
      login: 'لاگ ان',
      download: 'ڈاؤن لوڈ',
    },
    hero: {
      h1a: 'پرائیویٹلی',
      h1b: 'میسج کریں',
      sub:
        'آسان، قابلِ اعتماد اور نجی پیغام رسانی اور کالز مفت*، دنیا بھر میں۔',
      download: 'ڈاؤن لوڈ',
      dataNote: '* ڈیٹا چارجز لاگو ہو سکتے ہیں۔ اپنے فراہم کنندہ سے پوچھیں۔',
      chat1: 'صبح بخیر ماما 🥰',
      chat2Trip: 'گھریلو سفر کا انتظار نہیں ہو رہا!',
    },
    privacy: {
      line1: 'نجی پیغامات اور کالز کے ساتھ،',
      line2: 'آپ خود رہ سکتے ہیں، آزادانہ بات کر سکتے ہیں',
      line3: 'اور زندگی کے اہم لوگوں کے قریب محسوس',
      line4: 'کر سکتے ہیں، وہ کہیں بھی ہوں۔',
    },
    splits: [
      {
        key: 'calls',
        titleLines: ['آواز اور ویڈیو کالز سے کوئی لمحہ چھوٹے نہ'],
        titleLine2Green: false,
        description:
          'کلاس کے ساتھیوں سے گروپ کال سے لے کر ماں کو فوری کال تک — آواز اور ویڈیو کالز کے ساتھ ایسا محسوس کریں جیسے آپ ایک ہی کمرے میں ہوں۔',
        linkText: 'مزید جانیں',
        imageAlt: 'ویڈیو کال',
      },
      {
        key: 'windows',
        titleLines: ['بڑی اسکرین پر چیٹ اور کال کریں'],
        titleLine2Green: false,
        description:
          'WhatsApp for Windows سے پیغامات، تصاویر، ویڈیوز اور دستاویزات بڑی اسکرین پر دیکھیں۔',
        linkText: 'Windows ایپ ڈاؤن لوڈ کریں',
        imageAlt: 'Windows پر WhatsApp',
      },
      {
        key: 'speak',
        titleLines: ['بولیں', 'بے خوف'],
        titleLine2Green: true,
        description:
          'WhatsApp پر اینڈ ٹو اینڈ انکرپشن سے آپ کے نجی پیغامات اور کالز تالے سے محفوظ ہیں۔ صرف آپ اور جس سے بات کر رہے ہیں انہیں پڑھ یا سن سکتے ہیں — کوئی اور نہیں، نہ ہی WhatsApp۔',
        linkText: 'مزید جانیں',
        imageAlt: 'خفیہ پیغام',
      },
      {
        key: 'groups',
        titleLines: ['رابطے میں رہیں', 'اپنے گروپس کے ساتھ'],
        titleLine2Green: false,
        description:
          'دوستوں کے ساتھ منصوبہ بندی ہو یا فیملی چیٹس کا خیال رکھنا ہو — گروپ بات چیت آسان محسوس ہونی چاہیے۔',
        linkText: 'مزید جانیں',
        imageAlt: 'گروپ چیٹ',
      },
      {
        key: 'feel',
        titleLines: ['جو محسوس کرتے ہیں', 'وہ کہیں'],
        titleLine2Green: false,
        description:
          'بغیر لفظوں کے اظہار کریں۔ اسٹیکرز اور GIFs استعمال کریں یا اسٹیٹس پر روزمرہ لمحات شیئر کریں۔ فوری ہیلو یا لمبی کہانی کے لیے وائس میسج ریکارڈ کریں۔',
        linkText: 'مزید جانیں',
        imageAlt: 'اسٹیٹس اور اسٹیکرز',
      },
      {
        key: 'business',
        titleLines: ['اپنے کاروبار کو', 'نئی سمت دیں'],
        titleLine2Green: false,
        description:
          'WhatsApp Business آپ کو دنیا بھر میں گاہکوں تک پہنچ کر بہتر تجربات فراہم کرنے میں مدد دیتا ہے۔ مصنوعات اور خدمات دکھائیں، فروخت بڑھائیں اور تعلقات استوار کریں — سب WhatsApp کے ذریعے۔',
        linkText: 'مزید جانیں',
        imageAlt: 'WhatsApp Business',
      },
    ],
    stayUpToDate: {
      title: 'اپ ڈیٹ رہیں',
      sub: 'وٹس ایپ کی تازہ خبریں، تجاویز اور نئی خصوصیات۔',
      readMore: 'مزید پڑھیں',
      prevAria: 'پچھلا مضمون',
      nextAria: 'اگلا مضمون',
    },
  },
  hi: {
    header: {
      features: 'फ़ीचर्स',
      privacy: 'गोपनीयता',
      helpCenter: 'सहायता केंद्र',
      blog: 'ब्लॉग',
      forBusiness: 'व्यवसाय के लिए',
      apps: 'ऐप्स',
      login: 'लॉग इन',
      download: 'डाउनलोड करें',
    },
    hero: {
      h1a: 'निजी तौर पर',
      h1b: 'मैसेज करें',
      sub:
        'दुनिया भर में सरल, विश्वसनीय और निजी मैसेजिंग व कॉलिंग मुफ्त*।',
      download: 'डाउनलोड करें',
      dataNote: '* डेटा शुल्क लागू हो सकते हैं। अपने ऑपरेटर से पूछें।',
      chat1: 'सुप्रभात माँ 🥰',
      chat2Trip: 'पारिवारिक यात्रा का इंतज़ार नहीं हो रहा!',
    },
    privacy: {
      line1: 'निजी मैसेजिंग और कॉलिंग के साथ,',
      line2: 'आप स्वयं रह सकते हैं, खुलकर बात कर सकते हैं',
      line3: 'और जीवन के सबसे महत्वपूर्ण लोगों के करीब',
      line4: 'महसूस कर सकते हैं, चाहे वे कहीं भी हों।',
    },
    stayUpToDate: {
      title: 'अपडेट रहें',
      sub: 'व्हाट्सऐप से ताज़ा समाचार, उपयोगी टिप्स और नई सुविधाएँ।',
      readMore: 'और पढ़ें',
      prevAria: 'पिछला लेख',
      nextAria: 'अगला लेख',
    },
  },
  it: {
    header: {
      features: 'Funzioni',
      privacy: 'Privacy',
      helpCenter: 'Centro assistenza',
      blog: 'Blog',
      forBusiness: 'Per le aziende',
      apps: 'App',
      login: 'Accedi',
      download: 'Scarica',
    },
    hero: {
      h1a: 'Messaggi',
      h1b: 'in privato',
      sub:
        'Messaggi e chiamate semplici, affidabili e privati gratis*, in tutto il mondo.',
      download: 'Scarica',
      dataNote: '* Possono applicarsi costi di dati. Contatta il tuo operatore.',
      chat1: 'Buongiorno mamma 🥰',
      chat2Trip: 'Non vedo l’ora del prossimo viaggio in famiglia!',
    },
    privacy: {
      line1: 'Con messaggi e chiamate private,',
      line2: 'puoi essere te stesso, parlare liberamente',
      line3: 'e sentirti vicino alle persone più importanti',
      line4: 'ovunque si trovino.',
    },
    stayUpToDate: {
      title: 'Resta aggiornato',
      sub: 'Novità da WhatsApp: notizie, suggerimenti e funzioni per restare connesso.',
      readMore: 'Leggi di più',
      prevAria: 'Articolo precedente',
      nextAria: 'Articolo successivo',
    },
  },
  pt: {
    header: {
      features: 'Recursos',
      privacy: 'Privacidade',
      helpCenter: 'Central de ajuda',
      blog: 'Blog',
      forBusiness: 'Para empresas',
      apps: 'Apps',
      login: 'Entrar',
      download: 'Baixar',
    },
    hero: {
      h1a: 'Mensagem',
      h1b: 'privada',
      sub:
        'Mensagens e chamadas simples, confiáveis e privadas de graça*, no mundo todo.',
      download: 'Baixar',
      dataNote: '* Taxas de dados podem se aplicar. Consulte sua operadora.',
      chat1: 'Bom dia, mãe 🥰',
      chat2Trip: 'Mal posso esperar pela nossa próxima viagem em família!',
    },
    privacy: {
      line1: 'Com mensagens e chamadas privadas,',
      line2: 'você pode ser você mesmo, falar à vontade',
      line3: 'e sentir-se perto das pessoas mais importantes',
      line4: 'da sua vida, onde estiverem.',
    },
    stayUpToDate: {
      title: 'Fique por dentro',
      sub: 'Novidades do WhatsApp: notícias, dicas e recursos para continuar conectado.',
      readMore: 'Ler mais',
      prevAria: 'Artigo anterior',
      nextAria: 'Próximo artigo',
    },
  },
  nl: {
    header: {
      features: 'Functies',
      privacy: 'Privacy',
      helpCenter: 'Helpcentrum',
      blog: 'Blog',
      forBusiness: 'Voor bedrijven',
      apps: 'Apps',
      login: 'Inloggen',
      download: 'Downloaden',
    },
    hero: {
      h1a: 'Bericht',
      h1b: 'privé',
      sub: 'Eenvoudige, betrouwbare en privéberichten en bellen gratis*, overal ter wereld.',
      download: 'Downloaden',
      dataNote: '* Er kunnen datakosten van toepassing zijn. Neem contact op met je provider.',
      chat1: 'Goedemorgen mama 🥰',
      chat2Trip: 'Ik kan niet wachten op onze volgende familiereis!',
    },
    privacy: {
      line1: 'Met privéberichten en bellen',
      line2: 'kun je jezelf zijn, vrij praten',
      line3: 'en dicht bij de belangrijkste mensen in je leven voelen',
      line4: 'waar ze ook zijn.',
    },
    stayUpToDate: {
      title: 'Blijf op de hoogte',
      sub: 'Het nieuwste van WhatsApp: nieuws, tips en functies om verbonden te blijven.',
      readMore: 'Meer lezen',
      prevAria: 'Vorig artikel',
      nextAria: 'Volgend artikel',
    },
  },
  tr: {
    header: {
      features: 'Özellikler',
      privacy: 'Gizlilik',
      helpCenter: 'Yardım Merkezi',
      blog: 'Blog',
      forBusiness: 'İşletmeler için',
      apps: 'Uygulamalar',
      login: 'Giriş yap',
      download: 'İndir',
    },
    hero: {
      h1a: 'Özel olarak',
      h1b: 'mesajlaşın',
      sub: 'Dünya çapında basit, güvenilir ve özel mesajlaşma ve aramalar ücretsiz*.',
      download: 'İndir',
      dataNote: '* Veri ücretleri uygulanabilir. Operatörünüze danışın.',
      chat1: 'Günaydın anneciğim 🥰',
      chat2Trip: 'Bir sonraki aile gezimizi dört gözle bekliyorum!',
    },
    privacy: {
      line1: 'Özel mesajlaşma ve aramalarla',
      line2: 'kendiniz olabilir, özgürce konuşabilir',
      line3: 've hayatınızdaki en önemli insanlara yakın',
      line4: 'hissedebilirsiniz, nerede olurlarsa olsunlar.',
    },
    stayUpToDate: {
      title: 'Güncel kalın',
      sub: "WhatsApp'tan haberler, ipuçları ve yeni özellikler.",
      readMore: 'Devamını oku',
      prevAria: 'Önceki makale',
      nextAria: 'Sonraki makale',
    },
  },
  pl: {
    header: {
      features: 'Funkcje',
      privacy: 'Prywatność',
      helpCenter: 'Centrum pomocy',
      blog: 'Blog',
      forBusiness: 'Dla firm',
      apps: 'Aplikacje',
      login: 'Zaloguj się',
      download: 'Pobierz',
    },
    hero: {
      h1a: 'Pisz',
      h1b: 'prywatnie',
      sub:
        'Prosta, niezawodna i prywatna komunikacja i rozmowy za darmo*, na całym świecie.',
      download: 'Pobierz',
      dataNote: '* Mogą obowiązywać opłaty za transmisję danych. Zapytaj operatora.',
      chat1: 'Dzień dobry mamo 🥰',
      chat2Trip: 'Nie mogę doczekać się naszej kolejnej rodzinnej wyprawy!',
    },
    privacy: {
      line1: 'Dzięki prywatnym wiadomościom i rozmowom',
      line2: 'możesz być sobą, swobodnie rozmawiać',
      line3: 'i czuć bliskość najważniejszych ludzi',
      line4: 'bez względu na to, gdzie są.',
    },
    stayUpToDate: {
      title: 'Bądź na bieżąco',
      sub: 'Nowości z WhatsApp: wiadomości, porady i funkcje.',
      readMore: 'Czytaj dalej',
      prevAria: 'Poprzedni artykuł',
      nextAria: 'Następny artykuł',
    },
  },
  ru: {
    header: {
      features: 'Функции',
      privacy: 'Конфиденциальность',
      helpCenter: 'Справочный центр',
      blog: 'Блог',
      forBusiness: 'Для бизнеса',
      apps: 'Приложения',
      login: 'Войти',
      download: 'Скачать',
    },
    hero: {
      h1a: 'Общайтесь',
      h1b: 'конфиденциально',
      sub: 'Простые, надежные и приватные сообщения и звонки бесплатно* по всему миру.',
      download: 'Скачать',
      dataNote: '* Могут взиматься плата за трафик. Уточните у оператора.',
      chat1: 'Доброе утро, мам 🥰',
      chat2Trip: 'Жду не дождусь следующей семейной поездки!',
    },
    privacy: {
      line1: 'С личными сообщениями и звонками',
      line2: 'вы можете быть собой, свободно говорить',
      line3: 'и чувствовать близость важнейших людей',
      line4: 'в вашей жизни — где бы они ни были.',
    },
    stayUpToDate: {
      title: 'Будьте в курсе',
      sub: 'Новости WhatsApp: советы и функции, чтобы оставаться на связи.',
      readMore: 'Подробнее',
      prevAria: 'Предыдущая статья',
      nextAria: 'Следующая статья',
    },
  },
  ja: {
    header: {
      features: '機能',
      privacy: 'プライバシー',
      helpCenter: 'ヘルプセンター',
      blog: 'ブログ',
      forBusiness: 'ビジネス向け',
      apps: 'アプリ',
      login: 'ログイン',
      download: 'ダウンロード',
    },
    hero: {
      h1a: 'プライベートに',
      h1b: 'メッセージ',
      sub: 'シンプルで信頼できるプライベートなメッセージと通話を無料*で、世界中で。',
      download: 'ダウンロード',
      dataNote: '* データ通信料がかかる場合があります。通信事業者にご確認ください。',
      chat1: 'おはようママ 🥰',
      chat2Trip: '次の家族旅行が待ちきれない！',
    },
    privacy: {
      line1: 'プライベートなメッセージと通話で、',
      line2: 'ありのままでいられ、自由に話せ、',
      line3: '人生で大切な人々に近くにいるような',
      line4: '気持ちになれます。どこにいても。',
    },
    stayUpToDate: {
      title: '最新情報',
      sub: 'WhatsAppからのニュース、ヒント、新機能でつながりを保ちましょう。',
      readMore: '続きを読む',
      prevAria: '前の記事',
      nextAria: '次の記事',
    },
  },
  ko: {
    header: {
      features: '기능',
      privacy: '개인정보 보호',
      helpCenter: '고객센터',
      blog: '블로그',
      forBusiness: '비즈니스용',
      apps: '앱',
      login: '로그인',
      download: '다운로드',
    },
    hero: {
      h1a: '프라이빗하게',
      h1b: '메시지하세요',
      sub: '전 세계 어디서나 간단하고 안전한 개인 메시지와 통화를 무료로*.',
      download: '다운로드',
      dataNote: '* 데이터 요금이 부과될 수 있습니다. 통신사에 문의하세요.',
      chat1: '좋은 아침이에요 엄마 🥰',
      chat2Trip: '다음 가족 여행이 너무 기다려져요!',
    },
    privacy: {
      line1: '비공개 메시지와 통화로',
      line2: '당신답게 자유롭게 이야기하고',
      line3: '삶에서 가장 소중한 사람들과',
      line4: '가까이 있는 듯한 기분을 느낄 수 있어요.',
    },
    stayUpToDate: {
      title: '새 소식',
      sub: 'WhatsApp의 뉴스, 팁, 새로운 기능으로 연결을 유지하세요.',
      readMore: '더 보기',
      prevAria: '이전 글',
      nextAria: '다음 글',
    },
  },
  zh: {
    header: {
      features: '功能',
      privacy: '隐私',
      helpCenter: '帮助中心',
      blog: '博客',
      forBusiness: '商业用途',
      apps: '应用',
      login: '登录',
      download: '下载',
    },
    hero: {
      h1a: '私下',
      h1b: '发消息',
      sub: '简单、可靠、私密的免费*消息和通话，遍布全球。',
      download: '下载',
      dataNote: '* 可能产生数据费用，请咨询运营商。',
      chat1: '早上好妈妈 🥰',
      chat2Trip: '迫不及待想和家人下一次旅行！',
    },
    privacy: {
      line1: '通过私人消息和通话，',
      line2: '你可以自在做自己，畅所欲言',
      line3: '并感到与生命中最重要的人',
      line4: '紧密相连，无论他们身在何处。',
    },
    stayUpToDate: {
      title: '保持更新',
      sub: '来自 WhatsApp 的最新资讯、实用提示和新功能。',
      readMore: '阅读更多',
      prevAria: '上一篇文章',
      nextAria: '下一篇文章',
    },
  },
  id: {
    header: {
      features: 'Fitur',
      privacy: 'Privasi',
      helpCenter: 'Pusat Bantuan',
      blog: 'Blog',
      forBusiness: 'Untuk bisnis',
      apps: 'Aplikasi',
      login: 'Masuk',
      download: 'Unduh',
    },
    hero: {
      h1a: 'Mengirim pesan',
      h1b: 'secara pribadi',
      sub: 'Pesan dan panggilan sederhana, andal, dan privat gratis*, di seluruh dunia.',
      download: 'Unduh',
      dataNote: '* Biaya data mungkin berlaku. Hubungi operator Anda.',
      chat1: 'Selamat pagi, Bu 🥰',
      chat2Trip: 'Tidak sabar untuk liburan keluarga berikutnya!',
    },
    privacy: {
      line1: 'Dengan pesan dan panggilan privat,',
      line2: 'Anda bisa menjadi diri sendiri, berbicara bebas',
      line3: 'dan merasa dekat dengan orang-orang terpenting',
      line4: 'di hidup Anda di mana pun mereka berada.',
    },
    stayUpToDate: {
      title: 'Tetap update',
      sub: 'Terbaru dari WhatsApp: berita, tips, dan fitur baru.',
      readMore: 'Baca selengkapnya',
      prevAria: 'Artikel sebelumnya',
      nextAria: 'Artikel berikutnya',
    },
  },
  vi: {
    header: {
      features: 'Tính năng',
      privacy: 'Riêng tư',
      helpCenter: 'Trung tâm trợ giúp',
      blog: 'Blog',
      forBusiness: 'Doanh nghiệp',
      apps: 'Ứng dụng',
      login: 'Đăng nhập',
      download: 'Tải xuống',
    },
    hero: {
      h1a: 'Nhắn tin',
      h1b: 'riêng tư',
      sub:
        'Nhắn tin và gọi đơn giản, đáng tin cậy và riêng tư miễn phí*, trên khắp thế giới.',
      download: 'Tải xuống',
      dataNote: '* Có thể phát sinh phí dữ liệu. Liên hệ nhà mạng.',
      chat1: 'Chào buổi sáng mẹ 🥰',
      chat2Trip: 'Không thể chờ chuyến đi gia đình tiếp theo!',
    },
    privacy: {
      line1: 'Với tin nhắn và cuộc gọi riêng tư,',
      line2: 'bạn có thể là chính mình, nói chuyện thoải mái',
      line3: 'và cảm thấy gần gũi những người quan trọng nhất',
      line4: 'trong cuộc đời, dù họ ở đâu.',
    },
    stayUpToDate: {
      title: 'Cập nhật mới nhất',
      sub: 'Tin tức, mẹo và tính năng mới từ WhatsApp.',
      readMore: 'Đọc thêm',
      prevAria: 'Bài trước',
      nextAria: 'Bài sau',
    },
  },
  th: {
    header: {
      features: 'คุณสมบัติ',
      privacy: 'ความเป็นส่วนตัว',
      helpCenter: 'ศูนย์ช่วยเหลือ',
      blog: 'บล็อก',
      forBusiness: 'ธุรกิจ',
      apps: 'แอป',
      login: 'เข้าสู่ระบบ',
      download: 'ดาวน์โหลด',
    },
    hero: {
      h1a: 'ส่งข้อความ',
      h1b: 'แบบส่วนตัว',
      sub: 'ข้อความและการโทรที่เรียบง่าย น่าเชื่อถือ และเป็นส่วนตัวฟรี* ทั่วโลก',
      download: 'ดาวน์โหลด',
      dataNote: '* อาจมีค่าบริการข้อมูล สอบถามผู้ให้บริการ',
      chat1: 'สวัสดีตอนเช้านะคะแม่ 🥰',
      chat2Trip: 'รอทริปครอบครัวครั้งหน้าไม่ไหวแล้ว!',
    },
    privacy: {
      line1: 'ด้วยการแชทและโทรแบบส่วนตัว',
      line2: 'คุณเป็นตัวคุณ พูดได้อย่างอิสระ',
      line3: 'และรู้สึกใกล้ชิดคนที่สำคัญที่สุด',
      line4: 'ไม่ว่าพวกเขาจะอยู่ที่ไหน',
    },
    stayUpToDate: {
      title: 'อัปเดตข่าวสาร',
      sub: 'ข่าว เคล็ดลับ และฟีเจอร์ใหม่จาก WhatsApp',
      readMore: 'อ่านเพิ่มเติม',
      prevAria: 'บทความก่อนหน้า',
      nextAria: 'บทความถัดไป',
    },
  },
  sv: {
    header: {
      features: 'Funktioner',
      privacy: 'Integritet',
      helpCenter: 'Hjälpcenter',
      blog: 'Blogg',
      forBusiness: 'För företag',
      apps: 'Appar',
      login: 'Logga in',
      download: 'Ladda ner',
    },
    hero: {
      h1a: 'Chatta',
      h1b: 'privat',
      sub: 'Enkla, tillförlitliga och privata meddelanden och samtal gratis*, över hela världen.',
      download: 'Ladda ner',
      dataNote: '* Dataavgifter kan tillkomma. Kontakta din operatör.',
      chat1: 'God morgon mamma 🥰',
      chat2Trip: 'Längtar efter vår nästa familjesemester!',
    },
    privacy: {
      line1: 'Med privata meddelanden och samtal',
      line2: 'kan du vara dig själv, prata fritt',
      line3: 'och känna dig nära de viktigaste människorna',
      line4: 'i ditt liv – oavsett var de är.',
    },
    stayUpToDate: {
      title: 'Håll dig uppdaterad',
      sub: 'Det senaste från WhatsApp: nyheter, tips och nya funktioner.',
      readMore: 'Läs mer',
      prevAria: 'Föregående artikel',
      nextAria: 'Nästa artikel',
    },
  },
  da: {
    header: {
      features: 'Funktioner',
      privacy: 'Privatliv',
      helpCenter: 'Hjælpecenter',
      blog: 'Blog',
      forBusiness: 'Til virksomheder',
      apps: 'Apps',
      login: 'Log ind',
      download: 'Download',
    },
    hero: {
      h1a: 'Besked',
      h1b: 'privat',
      sub: 'Enkle, pålidelige og private beskeder og opkald gratis*, over hele verden.',
      download: 'Download',
      dataNote: '* Datagebyrer kan forekomme. Kontakt din udbyder.',
      chat1: 'Godmorgen mor 🥰',
      chat2Trip: 'Glæder mig til vores næste familieudflugt!',
    },
    privacy: {
      line1: 'Med private beskeder og opkald',
      line2: 'kan du være dig selv, tale frit',
      line3: 'og føle dig tæt på de vigtigste mennesker',
      line4: 'i dit liv – uanset hvor de er.',
    },
    stayUpToDate: {
      title: 'Hold dig opdateret',
      sub: 'Det seneste fra WhatsApp: nyheder, tips og nye funktioner.',
      readMore: 'Læs mere',
      prevAria: 'Forrige artikel',
      nextAria: 'Næste artikel',
    },
  },
  fi: {
    header: {
      features: 'Ominaisuudet',
      privacy: 'Yksityisyys',
      helpCenter: 'Ohjekeskus',
      blog: 'Blogi',
      forBusiness: 'Yrityksille',
      apps: 'Sovellukset',
      login: 'Kirjaudu sisään',
      download: 'Lataa',
    },
    hero: {
      h1a: 'Viestitä',
      h1b: 'yksityisesti',
      sub: 'Yksinkertainen, luotettava ja yksityinen viestintä ja puhelut ilmaiseksi*, maailmanlaajuisesti.',
      download: 'Lataa',
      dataNote: '* Datasiirroista voi aiheutua maksuja. Kysy palveluntarjoajaltasi.',
      chat1: 'Hyvää huomenta äiti 🥰',
      chat2Trip: 'En malta odottaa seuraavaa perhematkaa!',
    },
    privacy: {
      line1: 'Yksityisviestinnällä ja -puheluilla',
      line2: 'voit olla oma itsesi, puhua vapaasti',
      line3: 'ja tuntea olosi läheiseksi tärkeimpien ihmisten',
      line4: 'kanssa – missä he ikinä ovatkin.',
    },
    stayUpToDate: {
      title: 'Pysy ajan tasalla',
      sub: 'Uutta WhatsAppilta: uutisia, vinkkejä ja uusia ominaisuuksia.',
      readMore: 'Lue lisää',
      prevAria: 'Edellinen artikkeli',
      nextAria: 'Seuraava artikkeli',
    },
  },
  nb: {
    header: {
      features: 'Funksjoner',
      privacy: 'Personvern',
      helpCenter: 'Hjelpesenter',
      blog: 'Blogg',
      forBusiness: 'For bedrifter',
      apps: 'Apper',
      login: 'Logg inn',
      download: 'Last ned',
    },
    hero: {
      h1a: 'Melding',
      h1b: 'privat',
      sub: 'Enkle, pålitelige og private meldinger og samtaler gratis*, over hele verden.',
      download: 'Last ned',
      dataNote: '* Det kan påløpe datakostnader. Kontakt operatøren din.',
      chat1: 'God morgen, mamma 🥰',
      chat2Trip: 'Gleder meg til neste familietur!',
    },
    privacy: {
      line1: 'Med private meldinger og samtaler',
      line2: 'kan du være deg selv, snakke fritt',
      line3: 'og føle deg nær de viktigste menneskene',
      line4: 'i livet ditt – uansett hvor de er.',
    },
    stayUpToDate: {
      title: 'Hold deg oppdatert',
      sub: 'Det siste fra WhatsApp: nyheter, tips og nye funksjoner.',
      readMore: 'Les mer',
      prevAria: 'Forrige artikkel',
      nextAria: 'Neste artikkel',
    },
  },
  cs: {
    header: {
      features: 'Funkce',
      privacy: 'Soukromí',
      helpCenter: 'Nápověda',
      blog: 'Blog',
      forBusiness: 'Pro firmy',
      apps: 'Aplikace',
      login: 'Přihlásit se',
      download: 'Stáhnout',
    },
    hero: {
      h1a: 'Pište si',
      h1b: 'soukromě',
      sub: 'Jednoduché, spolehlivé a soukromé zprávy a hovory zdarma* po celém světě.',
      download: 'Stáhnout',
      dataNote: '* Mohou platit poplatky za data. Zeptejte se operátora.',
      chat1: 'Dobré ráno, mámo 🥰',
      chat2Trip: 'Už se nemůžu dočkat naší další rodinné dovolené!',
    },
    privacy: {
      line1: 'Se soukromými zprávami a hovory',
      line2: 'můžete být sami sebou, mluvit svobodně',
      line3: 'a cítit se blízko nejdůležitějším lidem',
      line4: 've vašem životě – ať jsou kdekoli.',
    },
    stayUpToDate: {
      title: 'Buďte v obraze',
      sub: 'Novinky z WhatsApp: zprávy, tipy a nové funkce.',
      readMore: 'Číst dál',
      prevAria: 'Předchozí článek',
      nextAria: 'Další článek',
    },
  },
  uk: {
    header: {
      features: 'Функції',
      privacy: 'Конфіденційність',
      helpCenter: 'Довідковий центр',
      blog: 'Блог',
      forBusiness: 'Для бізнесу',
      apps: 'Додатки',
      login: 'Увійти',
      download: 'Завантажити',
    },
    hero: {
      h1a: 'Пишіть',
      h1b: 'конфіденційно',
      sub: 'Прості, надійні та приватні повідомлення й дзвінки безкоштовно* по всьому світу.',
      download: 'Завантажити',
      dataNote: '* Можуть стягуватись плата за дані. Уточніть у оператора.',
      chat1: 'Доброго ранку, мамо 🥰',
      chat2Trip: 'Не можу дочекатися нашої наступної сімейної подорожі!',
    },
    privacy: {
      line1: 'Завдяки приватним повідомленням і дзвінкам',
      line2: 'ви можете бути собою, вільно говорити',
      line3: 'і відчувати близькість до найважливіших людей',
      line4: 'у вашому житті — де б вони не були.',
    },
    stayUpToDate: {
      title: 'Будьте в курсі',
      sub: 'Останнє від WhatsApp: новини, поради та нові функції.',
      readMore: 'Докладніше',
      prevAria: 'Попередня стаття',
      nextAria: 'Наступна стаття',
    },
  },
  ro: {
    header: {
      features: 'Funcții',
      privacy: 'Confidențialitate',
      helpCenter: 'Centru de ajutor',
      blog: 'Blog',
      forBusiness: 'Pentru afaceri',
      apps: 'Aplicații',
      login: 'Autentificare',
      download: 'Descarcă',
    },
    hero: {
      h1a: 'Mesajează',
      h1b: 'în privat',
      sub: 'Mesagerie și apeluri simple, fiabile și private gratuit*, disponibile în întreaga lume.',
      download: 'Descarcă',
      dataNote: '* Se pot aplica taxe pentru date. Contactați operatorul.',
      chat1: 'Bună dimineața, mama 🥰',
      chat2Trip: 'Abia aștept următoarea noastră excursie în familie!',
    },
    privacy: {
      line1: 'Cu mesaje și apeluri private,',
      line2: 'poți fi tu însuți, vorbi liber',
      line3: 'și simți apropiere de cei mai importanți oameni',
      line4: 'din viața ta, oriunde s-ar afla.',
    },
    stayUpToDate: {
      title: 'Rămâi la curent',
      sub: 'Ultimele de la WhatsApp: știri, sfaturi și funcții noi.',
      readMore: 'Citește mai mult',
      prevAria: 'Articolul anterior',
      nextAria: 'Articolul următor',
    },
  },
  el: {
    header: {
      features: 'Δυνατότητες',
      privacy: 'Απόρρητο',
      helpCenter: 'Κέντρο βοήθειας',
      blog: 'Ιστολόγιο',
      forBusiness: 'Για επιχειρήσεις',
      apps: 'Εφαρμογές',
      login: 'Σύνδεση',
      download: 'Λήψη',
    },
    hero: {
      h1a: 'Στείλτε',
      h1b: 'ιδιωτικά',
      sub: 'Απλή, αξιόπιστη και ιδιωτική ανταλλαγή μηνυμάτων και κλήσεων δωρεάν*, σε όλο τον κόσμο.',
      download: 'Λήψη',
      dataNote: '* Μπορεί να ισχύουν χρεώσεις δεδομένων. Επικοινωνήστε με τον πάροχο.',
      chat1: 'Καλημέρα μαμά 🥰',
      chat2Trip: 'Ανυπομονώ για την επόμενη οικογενειακή μας εκδρομή!',
    },
    privacy: {
      line1: 'Με ιδιωτικά μηνύματα και κλήσεις,',
      line2: 'μπορείτε να είστε ο εαυτός σας, να μιλάτε ελεύθερα',
      line3: 'και να νιώθετε κοντά στους σημαντικότερους ανθρώπους',
      line4: 'της ζωής σας, οπουδήποτε κι αν βρίσκονται.',
    },
    stayUpToDate: {
      title: 'Μείνετε ενημερωμένοι',
      sub: 'Τα νεότερα από το WhatsApp: ειδήσεις, συμβουλές και νέες λειτουργίες.',
      readMore: 'Διαβάστε περισσότερα',
      prevAria: 'Προηγούμενο άρθρο',
      nextAria: 'Επόμενο άρθρο',
    },
  },
  he: {
    header: {
      features: 'תכונות',
      privacy: 'פרטיות',
      helpCenter: 'מרכז העזרה',
      blog: 'בלוג',
      forBusiness: 'לעסקים',
      apps: 'אפליקציות',
      login: 'התחברות',
      download: 'הורדה',
    },
    hero: {
      h1a: 'הודעות',
      h1b: 'פרטיות',
      sub: 'הודעות ושיחות פשוטות, אמינות ופרטיות בחינם*, ברחבי העולם.',
      download: 'הורדה',
      dataNote: '* ייתכנו חיובי נתונים. פנו לספק השירות.',
      chat1: 'בוקר טוב אמא 🥰',
      chat2Trip: 'כבר מתים לחופשה המשפחתית הבאה!',
    },
    privacy: {
      line1: 'עם הודעות ושיחות פרטיות,',
      line2: 'אפשר להיות את עצמך, לדבר בחופשיות',
      line3: 'ולהרגיש קרוב לאנשים הכי חשובים',
      line4: 'בחיים — איפה שיהיו.',
    },
    stayUpToDate: {
      title: 'הישארו מעודכנים',
      sub: 'העדכונים האחרונים מ־WhatsApp: חדשות, טיפים ותכונות חדשות.',
      readMore: 'קראו עוד',
      prevAria: 'מאמר קודם',
      nextAria: 'מאמר הבא',
    },
  },
  ms: {
    header: {
      features: 'Ciri',
      privacy: 'Privasi',
      helpCenter: 'Pusat bantuan',
      blog: 'Blog',
      forBusiness: 'Untuk perniagaan',
      apps: 'Apl',
      login: 'Log masuk',
      download: 'Muat turun',
    },
    hero: {
      h1a: 'Mesej',
      h1b: 'secara peribadi',
      sub: 'Mesej dan panggilan mudah, boleh dipercayai dan peribadi secara percuma*, di seluruh dunia.',
      download: 'Muat turun',
      dataNote: '* Caj data mungkin dikenakan. Hubungi pembekal anda.',
      chat1: 'Selamat pagi ibu 🥰',
      chat2Trip: 'Tak sabar untuk percutian keluarga seterusnya!',
    },
    privacy: {
      line1: 'Dengan mesej dan panggilan peribadi,',
      line2: 'anda boleh jadi diri sendiri, berbicara bebas',
      line3: 'dan merasa dekat dengan orang paling penting',
      line4: 'dalam hidup anda – di mana mereka berada.',
    },
    stayUpToDate: {
      title: 'Kekal dimaklumkan',
      sub: 'Terkini dari WhatsApp: berita, petua dan ciri baharu.',
      readMore: 'Baca lagi',
      prevAria: 'Artikel sebelumnya',
      nextAria: 'Artikel seterusnya',
    },
  },
  fil: {
    header: {
      features: 'Mga feature',
      privacy: 'Privacy',
      helpCenter: 'Help Center',
      blog: 'Blog',
      forBusiness: 'Para sa negosyo',
      apps: 'Mga app',
      login: 'Mag-log in',
      download: 'I-download',
    },
    hero: {
      h1a: 'Mensahe',
      h1b: 'nang pribado',
      sub: 'Simple, maaasahan, at pribadong mensahe at tawag nang libre*, sa buong mundo.',
      download: 'I-download',
      dataNote: '* Maaaring may bayad sa data. Tanungin ang carrier mo.',
      chat1: 'Magandang umaga nanay 🥰',
      chat2Trip: 'Excited na sa susunod naming family trip!',
    },
    privacy: {
      line1: 'Sa pribadong mensahe at tawag,',
      line2: 'maaaring maging ikaw mismo, magsalita nang malaya',
      line3: 'at maramdaman ang malapit sa pinakamahahalagang tao',
      line4: 'sa buhay mo — nasaan man sila.',
    },
    stayUpToDate: {
      title: 'Manatiling updated',
      sub: 'Ang latest mula sa WhatsApp: balita, tips, at bagong features.',
      readMore: 'Magbasa pa',
      prevAria: 'Nakaraang artikulo',
      nextAria: 'Susunod na artikulo',
    },
  },
};

export function getPageStrings(code) {
  return mergePage(PAGE_EN, PATCHES[code]);
}

