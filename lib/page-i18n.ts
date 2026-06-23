import { Locale } from "@/lib/i18n";

export const pageCopy: Record<Locale, {
  about: {
    hero: { kicker: string; title: string; body: string };
    lead: string;
    timeline: [string, string][];
  };
  projects: { hero: { kicker: string; title: string; body: string } };
  international: {
    hero: { kicker: string; title: string; body: string };
    locations: [string, string, string][];
  };
  masterclasses: {
    hero: { kicker: string; title: string; body: string };
    topic: string;
    topicBody: string;
    ctaTitle: string;
    cta: string;
  };
  calendar: {
    hero: { kicker: string; title: string; body: string };
    filters: string[];
  };
  media: {
    hero: { kicker: string; title: string; body: string };
    items: [string, string][];
  };
  gallery: {
    hero: { kicker: string; title: string; body: string };
    filters: string[];
  };
  resources: {
    hero: { kicker: string; title: string; body: string };
    items: string[];
    cardBody: string;
  };
  contact: {
    hero: { kicker: string; title: string; body: string };
    inquiryTypes: string;
    reasons: string[];
  };
  form: {
    fields: string[];
    inquiry: string;
    options: string[];
    message: string;
    send: string;
  };
}> = {
  eu: {
    about: {
      hero: {
        kicker: "Biografia",
        title: "Gaztetasunak, lekuak eta eraldaketak moldatutako zuzendaria.",
        body: "Artistaren eragina ez da emanaldietan bakarrik neurtzen, baizik eta aldaturik ateratzen diren abeslari eta zuzendariengan."
      },
      lead: "Lan artistikoa beti da, aldi berean, lan humanoa.",
      timeline: [
        ["Hasierako urteak", "Musika-bizitza komunitateko ahotsen energia zuzenarekin hasten da."],
        ["Formazioa", "Ikastea entzute, analisi eta eskuzabaltasun artistikoaren praktika etengabe bihurtzen da."],
        ["Nazioarteko ibilbidea", "Gonbidatutako zuzendaritzak, jaialdiek, epaimahaiek eta masterclassek truke-zirkulua zabaltzen dute."],
        ["Irakaskuntza", "Entsegu-gela teknika eta hazkunde pertsonala elkartzen diren lekua da."],
        ["Lidergoaren filosofia", "Basiliok arretaren bidez gidatzen du: soinuari, gorputzei, kulturari eta aukerari begira."]
      ]
    },
    projects: {
      hero: {
        kicker: "Proiektuak",
        title: "Koruak identitatearen, bikaintasunaren eta asmakuntzaren espazio gisa.",
        body: "Proiektu bakoitzak Basilioren lanaren alde bat erakusten du: gazteen formazioa, talde helduen soinua, euskal kultura eta nazioarteko ikusgarritasuna."
      }
    },
    international: {
      hero: {
        kicker: "Nazioarteko jarduera",
        title: "Ahots gazteek daramaten elkarrizketa globala.",
        body: "Jaialdiek, masterclassek, lehiaketek eta gonbidatutako zuzendaritzek Basilioren lana munduko komunitate koralekin lotzen dute."
      },
      locations: [
        ["Euskal Herria", "Etxeko oinarria", "left-[42%] top-[42%]"],
        ["Ipar Amerika", "Jaialdiak", "left-[21%] top-[38%]"],
        ["Latinoamerika", "Masterclassak", "left-[31%] top-[66%]"],
        ["Europa", "Sinposioak", "left-[49%] top-[39%]"],
        ["Asia", "Lehiaketak", "left-[70%] top-[46%]"]
      ]
    },
    masterclasses: {
      hero: {
        kicker: "Masterclassak",
        title: "Zuzendariek entzuteko modua aldatzen duen irakaskuntza.",
        body: "Basilioren hezkuntza-lanak zuzendariei, irakasleei eta koruei tresna praktikoak, musikaltasun gorputzatua eta estandar artistiko eskuzabala eskaintzen dizkie."
      },
      topic: "Gaia",
      topicBody: "Teknika, interpretazioa, mugimendua eta lidergoa uztartzen dituen saio zehatza, entseguetan eragin erreala izateko.",
      ctaTitle: "Antolatu masterclass edo egonaldi bat.",
      cta: "Gonbidapen-eskaera"
    },
    calendar: {
      hero: {
        kicker: "Agenda",
        title: "Datozen kontzertuak, jaialdiak, tailerrak eta lankidetzak.",
        body: "Ekitaldien agenda profesionala, etorkizunean iragazkiak eta gonbidapen-fluxuak gehitzeko prest."
      },
      filters: ["Guztiak", "Kontzertuak", "Jaialdiak", "Tailerrak", "Masterclass", "Gonbidatutako zuzendaritza", "Hitzaldia"]
    },
    media: {
      hero: {
        kicker: "Media gunea",
        title: "Ikusi, irakurri eta entzun lanaren inguruan.",
        body: "Bideoak, elkarrizketak, artikuluak, podcastak, prentsa-materialak eta deskargak biltzeko media-zentro modularra."
      },
      items: [
        ["Bideoak", "Emanaldi, entsegu eta elkarrizketa nabarmenduak."],
        ["Elkarrizketak", "Hezkuntza, artea eta lidergoari buruzko solasaldiak."],
        ["Artikuluak", "Zuzendari eta hezitzaileentzako testuak eta prentsa."],
        ["Deskargak", "Prentsa-kit, biografia, erretratuak eta aurkezpen-materialak."],
        ["Podcastak", "Audio-solasaldiak eta nazioarteko konferentziak."],
        ["Prentsa", "Jaialdien albisteak, kritikak eta profil instituzionalak."]
      ]
    },
    gallery: {
      hero: {
        kicker: "Galeria",
        title: "Soinua presentzia partekatu bihurtzen den artxibo bisuala.",
        body: "Argazkiak zuzendaritza, tailer, kontzertu, jaialdi, entsegu eta bidaiaren arabera antolatuta."
      },
      filters: ["Guztiak", "Zuzendaritza", "Tailerrak", "Kontzertuak", "Jaialdiak", "Entseguak", "Bidaiak"]
    },
    resources: {
      hero: {
        kicker: "Baliabideak",
        title: "Zuzendari, irakasle, koru eta ikasleentzako liburutegi bizia.",
        body: "Deskargak, material didaktikoak, artikuluak, aurkezpenak eta ikaskuntza-edukiak jasotzeko prestatutako gunea."
      },
      items: ["Artikuluak", "Irakaskuntza-materialak", "Aurkezpenak", "Bideoak", "Zuzendarientzat", "Irakasleentzat", "Koruentzat", "Ikasleentzat"],
      cardBody: "Deskarga hautatuetarako eta eguneratze kudeatuetarako prestatuta."
    },
    contact: {
      hero: {
        kicker: "Kontaktua",
        title: "Gonbidatu Basilio Astulez topaketa artistiko eraldatzaile baterako.",
        body: "Jaialdi, erakunde, koru, unibertsitate, kongresu, media-eskaera eta nazioarteko lankidetzetarako."
      },
      inquiryTypes: "Eskaera motak",
      reasons: ["Nazioarteko kontratazioa", "Gazte-koruen egonaldiak", "Gonbidatutako zuzendaritza", "Jaialdi eta epaimahai gonbidapenak", "Hitzaldiak", "Media-eskaerak"]
    },
    form: {
      fields: ["Izena", "Emaila", "Erakundea", "Herrialdea"],
      inquiry: "Eskaera",
      options: ["Tailerra edo masterclassa", "Gonbidatutako zuzendaritza", "Jaialdi gonbidapena", "Hitzaldi gonbidapena", "Media-eskaera"],
      message: "Mezua",
      send: "Bidali eskaera"
    }
  },
  en: {
    about: {
      hero: {
        kicker: "Biography",
        title: "A conductor shaped by youth, place and transformation.",
        body: "This is a story-first biography for an artist whose influence is measured not only by performances, but by the singers and conductors who leave changed."
      },
      lead: "The artistic work is always also human work.",
      timeline: [
        ["Early years", "A life in music begins with the direct human electricity of voices in community."],
        ["Education", "Training becomes a lifelong practice of listening, analysis and artistic generosity."],
        ["International career", "Guest conducting, festivals, juries and masterclasses widen the circle of exchange."],
        ["Teaching activity", "The rehearsal room becomes a place where technique and personal growth meet."],
        ["Leadership philosophy", "Basilio leads through attention: to sound, to bodies, to culture and to possibility."]
      ]
    },
    projects: {
      hero: {
        kicker: "Projects",
        title: "Choirs as spaces of identity, excellence and invention.",
        body: "Each project reflects a different part of Basilio's work: youth formation, mature ensemble sound, Basque culture, international visibility and artistic experimentation."
      }
    },
    international: {
      hero: {
        kicker: "International Activity",
        title: "A global conversation carried by young voices.",
        body: "Festivals, masterclasses, competitions, symposiums and guest conducting appearances connect Basilio's work with choral communities around the world."
      },
      locations: [
        ["Basque Country", "Home base", "left-[42%] top-[42%]"],
        ["North America", "Festivals", "left-[21%] top-[38%]"],
        ["Latin America", "Masterclasses", "left-[31%] top-[66%]"],
        ["Europe", "Symposiums", "left-[49%] top-[39%]"],
        ["Asia", "Competitions", "left-[70%] top-[46%]"]
      ]
    },
    masterclasses: {
      hero: {
        kicker: "Masterclasses",
        title: "Teaching that changes how conductors listen.",
        body: "Basilio's educational work supports conductors, teachers and choirs through practical tools, embodied musicianship and a generous artistic standard."
      },
      topic: "Topic",
      topicBody: "A focused session that blends technique, interpretation, movement and leadership for real rehearsal impact.",
      ctaTitle: "Plan a masterclass or residency.",
      cta: "Booking inquiry"
    },
    calendar: {
      hero: {
        kicker: "Calendar",
        title: "Upcoming concerts, festivals, workshops and collaborations.",
        body: "A professional event calendar prepared for CMS-backed filtering and future ticketing or invitation workflows."
      },
      filters: ["All", "Concerts", "Festivals", "Workshops", "Masterclass", "Guest Conducting", "Speaking"]
    },
    media: {
      hero: {
        kicker: "Media Hub",
        title: "Watch, read and listen across the work.",
        body: "A modular media center for videos, interviews, articles, podcasts, press assets and downloadable materials."
      },
      items: [
        ["Videos", "Featured performances, rehearsals and interviews."],
        ["Interviews", "Conversations on education, artistry and leadership."],
        ["Articles", "Essays and press coverage for conductors and educators."],
        ["Downloads", "Press kit, biography, portraits and presentation materials."],
        ["Podcasts", "Audio conversations and international conference features."],
        ["Press", "Festival announcements, reviews and institutional profiles."]
      ]
    },
    gallery: {
      hero: {
        kicker: "Gallery",
        title: "A visual archive of sound becoming shared presence.",
        body: "Photography organized for conducting, workshops, concerts, festivals, rehearsals and travel."
      },
      filters: ["All", "Conducting", "Workshops", "Concerts", "Festivals", "Rehearsals", "Travel"]
    },
    resources: {
      hero: {
        kicker: "Resources",
        title: "A growing library for conductors, teachers, choirs and students.",
        body: "A future-ready resource center designed for downloads, teaching materials, articles, presentations and embedded learning content."
      },
      items: ["Articles", "Teaching materials", "Presentations", "Videos", "For conductors", "For teachers", "For choirs", "For students"],
      cardBody: "Prepared for curated downloads and CMS-managed updates."
    },
    contact: {
      hero: {
        kicker: "Contact",
        title: "Hire Basilio Astulez for a transformative artistic encounter.",
        body: "For festivals, institutions, choirs, universities, conferences, media requests and international partnerships."
      },
      inquiryTypes: "Inquiry types",
      reasons: ["International booking requests", "Youth choir residencies", "Guest conducting", "Festival and jury invitations", "Speaking invitations", "Media requests"]
    },
    form: {
      fields: ["Name", "Email", "Organization", "Country"],
      inquiry: "Inquiry",
      options: ["Workshop or masterclass", "Guest conducting", "Festival invitation", "Speaking invitation", "Media request"],
      message: "Message",
      send: "Send Inquiry"
    }
  },
  ca: {
    about: {
      hero: {
        kicker: "Biografia",
        title: "Un director format per la joventut, el lloc i la transformacio.",
        body: "Una biografia narrativa per a un artista la influencia del qual es mesura tambe pels cantaires i directors que surten transformats."
      },
      lead: "El treball artistic sempre es tambe treball huma.",
      timeline: [
        ["Primers anys", "La vida musical comenca amb l'energia humana directa de les veus en comunitat."],
        ["Formacio", "La formacio esdeve una practica permanent d'escolta, analisi i generositat artistica."],
        ["Trajectoria internacional", "La direccio convidada, els festivals, jurats i masterclasses amplien el cercle d'intercanvi."],
        ["Activitat docent", "La sala d'assaig es converteix en un espai on tecnica i creixement personal es troben."],
        ["Filosofia de lideratge", "Basilio dirigeix des de l'atencio: al so, als cossos, a la cultura i a la possibilitat."]
      ]
    },
    projects: {
      hero: {
        kicker: "Projectes",
        title: "Cors com a espais d'identitat, excellencia i invencio.",
        body: "Cada projecte reflecteix una part del treball de Basilio: formacio juvenil, so de conjunt madur, cultura basca i visibilitat internacional."
      }
    },
    international: {
      hero: {
        kicker: "Activitat internacional",
        title: "Una conversa global portada per veus joves.",
        body: "Festivals, masterclasses, concursos, simposis i direccions convidades connecten el treball de Basilio amb comunitats corals d'arreu del mon."
      },
      locations: [
        ["Pais Basc", "Base principal", "left-[42%] top-[42%]"],
        ["Nord-america", "Festivals", "left-[21%] top-[38%]"],
        ["Llatinoamerica", "Masterclasses", "left-[31%] top-[66%]"],
        ["Europa", "Simposis", "left-[49%] top-[39%]"],
        ["Asia", "Concursos", "left-[70%] top-[46%]"]
      ]
    },
    masterclasses: {
      hero: {
        kicker: "Masterclasses",
        title: "Docencia que canvia la manera d'escoltar dels directors.",
        body: "El treball educatiu de Basilio acompanya directors, professors i cors amb eines practiques, musicalitat corporal i un estandard artistic generos."
      },
      topic: "Tema",
      topicBody: "Una sessio focalitzada que combina tecnica, interpretacio, moviment i lideratge per generar impacte real a l'assaig.",
      ctaTitle: "Planifica una masterclass o residencia.",
      cta: "Consulta de contractacio"
    },
    calendar: {
      hero: {
        kicker: "Agenda",
        title: "Propers concerts, festivals, tallers i collaboracions.",
        body: "Una agenda professional preparada per a filtres, entrades futures i fluxos d'invitacio."
      },
      filters: ["Tot", "Concerts", "Festivals", "Tallers", "Masterclass", "Direccio convidada", "Conferencia"]
    },
    media: {
      hero: {
        kicker: "Centre media",
        title: "Mira, llegeix i escolta el treball.",
        body: "Un centre multimedia modular per a videos, entrevistes, articles, podcasts, materials de premsa i descarregues."
      },
      items: [
        ["Videos", "Actuacions, assajos i entrevistes destacades."],
        ["Entrevistes", "Converses sobre educacio, art i lideratge."],
        ["Articles", "Textos i cobertura de premsa per a directors i educadors."],
        ["Descarregues", "Kit de premsa, biografia, retrats i materials de presentacio."],
        ["Podcasts", "Converses d'audio i conferencies internacionals."],
        ["Premsa", "Anuncis de festivals, critiques i perfils institucionals."]
      ]
    },
    gallery: {
      hero: {
        kicker: "Galeria",
        title: "Un arxiu visual del so convertint-se en presencia compartida.",
        body: "Fotografia organitzada per direccio, tallers, concerts, festivals, assajos i viatges."
      },
      filters: ["Tot", "Direccio", "Tallers", "Concerts", "Festivals", "Assajos", "Viatges"]
    },
    resources: {
      hero: {
        kicker: "Recursos",
        title: "Una biblioteca en creixement per a directors, professors, cors i estudiants.",
        body: "Un centre preparat per a descarregues, materials docents, articles, presentacions i continguts d'aprenentatge."
      },
      items: ["Articles", "Materials docents", "Presentacions", "Videos", "Per a directors", "Per a professors", "Per a cors", "Per a estudiants"],
      cardBody: "Preparat per a descarregues curades i actualitzacions gestionades."
    },
    contact: {
      hero: {
        kicker: "Contacte",
        title: "Contracta Basilio Astulez per a una trobada artistica transformadora.",
        body: "Per a festivals, institucions, cors, universitats, congressos, peticions media i aliances internacionals."
      },
      inquiryTypes: "Tipus de consulta",
      reasons: ["Contractacio internacional", "Residencies de cors joves", "Direccio convidada", "Invitacions a festivals i jurats", "Conferencies", "Peticions media"]
    },
    form: {
      fields: ["Nom", "Email", "Organitzacio", "Pais"],
      inquiry: "Consulta",
      options: ["Taller o masterclass", "Direccio convidada", "Invitacio a festival", "Invitacio a conferencia", "Peticio media"],
      message: "Missatge",
      send: "Enviar consulta"
    }
  }
};
