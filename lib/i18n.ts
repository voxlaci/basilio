export type Locale = "eu" | "en" | "ca";

export const localeOptions: { code: Locale; short: string; label: string }[] = [
  { code: "eu", short: "Eusk", label: "Euskara" },
  { code: "en", short: "Eng", label: "English" },
  { code: "ca", short: "Cat", label: "Català" }
];

export const translations = {
  eu: {
    nav: {
      about: "Biografia",
      projects: "Proiektuak",
      international: "Nazioartea",
      masterclasses: "Masterclassak",
      media: "Media",
      calendar: "Agenda",
      hire: "Kontratatu",
      invite: "Gonbidatu Basilio",
      toggle: "Menua ireki edo itxi"
    },
    hero: {
      kicker: "Conductor, educator, visionary artist",
      title: "Basilio Astulez Duque",
      body: "Musikak pertsonak eta komunitateak eraldatzen ditu diziplina, irudimena eta arnasa partekatuaren bidez.",
      primary: "Ezagutu ibilbidea",
      secondary: "Hurrengo ekitaldiak"
    },
    values: [
      ["Entzutea", "Arreta, zehaztasuna eta konfiantzan oinarritutako entsegu-kultura."],
      ["Formazioa", "Abeslari gazteak ahotsa, gorputza eta irudimena dituzten artistatzat hartzen dira."],
      ["Eraldaketa", "Musika diziplina, pertenentzia eta ausardiarako praktika partekatua bihurtzen da."]
    ],
    counters: [
      "25+ urte ahots gazteak eta kultura korala lantzen",
      "50+ herrialde jaialdi, bira eta irakaskuntzaren bidez",
      "20k+ abeslari zuzenean koru, tailer eta masterclassetan",
      "500k+ pertsonako irismen estimatua kontzertu, grabazio eta sare koralen bidez"
    ],
    languageStory: {
      kicker: "Euskara · English · Català",
      title: "Hiru hizkuntzatan irakurtzeko aukera",
      body: "Aukeratu Euskara, English edo Català goiko menuan. Webguneak aukeratutako hizkuntza gordetzen du bisitaldi osoan."
    },
    home: {
      featuredKicker: "Proiektu nagusiak",
      featuredTitle: "Laborategi artistiko biziak",
      viewAll: "Ikusi proiektu guztiak",
      videoKicker: "Bideo nabarmena",
      videoTitle: "Entsegu bat inflexio-puntu bihur daiteke.",
      playVideo: "Bideo nabarmena erreproduzitu",
      testimonials: "Testigantzak",
      latestNews: "Azken berriak",
      recentActivity: "Jarduera berria"
    },
    social: {
      kicker: "Azken jarduera soziala",
      heading: "Basilio Astulez Duquek sustatutako azken lana.",
      intro: "Eremu honek Basilioren kanal sozialetako azken jarduera publikoa erakusteko pentsatuta dago.",
      title: "Jarraitu Basiliok sustatutako azken lana",
      summary: "Webguneak Basilio Astulez Duqueren Facebook profil publikora eramaten du, berak sustatzen dituen azken argitalpenak ikusteko.",
      status: "Profil publikoa baieztatuta. Banakako azken argitalpenak ikusteko Facebookeko saioa behar da.",
      openFacebook: "Ireki Facebook"
    },
    hire: {
      kicker: "Kontratatu Basilio",
      title: "Ekarri presentzia koral eraldatzailea zure erakundera.",
      body: "Jaialdi, unibertsitate, kontserbatorio, gazte-koru program, kongresu eta nazioarteko kultur eragileentzat pentsatua.",
      cta: "Hasi gonbidapen-eskaera",
      context: "Iturri publikoetan oinarritutako testuingurua"
    },
    footer: {
      body: "Zuzendaria, hezitzailea eta lider artistikoa, musika koralaren indar eraldatzaileari eskainia.",
      credit: "© 2026 Basilio Astúlez. Marka pertsonalaren web kontzeptua."
    }
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      international: "International",
      masterclasses: "Masterclasses",
      media: "Media",
      calendar: "Calendar",
      hire: "Hire",
      invite: "Invite Basilio",
      toggle: "Toggle menu"
    },
    hero: {
      kicker: "Conductor, educator, visionary artist",
      title: "Basilio Astulez Duque",
      body: "Music transforms people and communities through discipline, imagination and shared breath.",
      primary: "Discover the Journey",
      secondary: "Upcoming Events"
    },
    values: [
      ["Listening", "A rehearsal culture built on attention, precision and trust."],
      ["Formation", "Young singers are treated as artists with voice, body and imagination."],
      ["Transformation", "Music becomes a shared practice for discipline, belonging and courage."]
    ],
    counters: [
      "Years shaping young voices and choral culture",
      "Countries reached through festivals, tours and teaching",
      "Singers reached directly in choirs, workshops and masterclasses",
      "Estimated wider reach through concerts, recordings and choral networks"
    ],
    languageStory: {
      kicker: "Euskara · English · Català",
      title: "Read the site in three languages",
      body: "Choose Euskara, English or Català in the top navigation. The site remembers the selected language while you browse."
    },
    home: {
      featuredKicker: "Featured Projects",
      featuredTitle: "Living artistic laboratories",
      viewAll: "View all projects",
      videoKicker: "Video Highlight",
      videoTitle: "A rehearsal can become a turning point.",
      playVideo: "Play featured video",
      testimonials: "Testimonials",
      latestNews: "Latest News",
      recentActivity: "Recent activity"
    },
    social: {
      kicker: "Latest Social Pulse",
      heading: "The latest work promoted by Basilio Astulez Duque.",
      intro: "This area is designed to surface Basilio's newest promoted post from his own social channels.",
      title: "Follow the latest work promoted by Basilio",
      summary: "The site now points directly to Basilio Astulez Duque's own Facebook profile for the most recent posts he promotes.",
      status: "Public profile confirmed. Latest individual posts require Facebook login to view.",
      openFacebook: "Open Facebook"
    },
    hire: {
      kicker: "Hire Basilio",
      title: "Bring a transformative choral presence to your institution.",
      body: "Designed for festivals, universities, conservatories, youth choir programs, conferences and international cultural partners.",
      cta: "Start booking inquiry",
      context: "Publicly supported context"
    },
    footer: {
      body: "Conductor, educator and artistic leader devoted to the transforming force of choral music.",
      credit: "© 2026 Basilio Astúlez. Personal brand website concept."
    }
  },
  ca: {
    nav: {
      about: "Biografia",
      projects: "Projectes",
      international: "Internacional",
      masterclasses: "Masterclasses",
      media: "Mitjans",
      calendar: "Agenda",
      hire: "Contractar",
      invite: "Convidar Basilio",
      toggle: "Obrir o tancar el menu"
    },
    hero: {
      kicker: "Conductor, educator, visionary artist",
      title: "Basilio Astulez Duque",
      body: "La musica transforma persones i comunitats a traves de la disciplina, la imaginacio i la respiracio compartida.",
      primary: "Descobrir el recorregut",
      secondary: "Propers esdeveniments"
    },
    values: [
      ["Escolta", "Una cultura d'assaig construida sobre l'atencio, la precisio i la confianca."],
      ["Formacio", "Els joves cantaires son tractats com a artistes amb veu, cos i imaginacio."],
      ["Transformacio", "La musica esdeve una practica compartida de disciplina, pertinenca i coratge."]
    ],
    counters: [
      "25+ anys formant veus joves i cultura coral",
      "50+ paisos assolits amb festivals, gires i docencia",
      "20k+ cantaires assolits directament en cors, tallers i masterclasses",
      "500k+ persones d'abast estimat amb concerts, gravacions i xarxes corals"
    ],
    languageStory: {
      kicker: "Euskara · English · Català",
      title: "Llegeix el web en tres llengues",
      body: "Tria Euskara, English o Català al menu superior. El web recorda la llengua seleccionada mentre navegues."
    },
    home: {
      featuredKicker: "Projectes destacats",
      featuredTitle: "Laboratoris artistics vius",
      viewAll: "Veure tots els projectes",
      videoKicker: "Video destacat",
      videoTitle: "Un assaig pot esdevenir un punt d'inflexio.",
      playVideo: "Reproduir el video destacat",
      testimonials: "Testimonis",
      latestNews: "Ultimes noticies",
      recentActivity: "Activitat recent"
    },
    social: {
      kicker: "Ultim impuls social",
      heading: "L'ultim treball promogut per Basilio Astulez Duque.",
      intro: "Aquest espai esta pensat per mostrar l'activitat publica mes recent dels canals socials de Basilio.",
      title: "Segueix l'ultim treball promogut per Basilio",
      summary: "El web apunta directament al perfil public de Facebook de Basilio Astulez Duque per veure les publicacions que promou.",
      status: "Perfil public confirmat. Les publicacions individuals recents requereixen iniciar sessio a Facebook.",
      openFacebook: "Obrir Facebook"
    },
    hire: {
      kicker: "Contractar Basilio",
      title: "Porta una presencia coral transformadora a la teva institucio.",
      body: "Pensat per a festivals, universitats, conservatoris, programes de cors joves, congressos i socis culturals internacionals.",
      cta: "Iniciar consulta de contractacio",
      context: "Context recolzat per fonts publiques"
    },
    footer: {
      body: "Director, educador i lider artistic dedicat a la forca transformadora de la musica coral.",
      credit: "© 2026 Basilio Astúlez. Concepte web de marca personal."
    }
  }
} as const;
