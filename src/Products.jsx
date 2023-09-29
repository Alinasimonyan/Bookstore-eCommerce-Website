import lines from "./images/lines.jpg";
import wind from "./images/wind.jpg";
import mimesis from "./images/mimesis.jpg";
import hongKong from "./images/hongKong.jpg";
import sphere from "./images/sphere.jpg";
import saul_leiter from "./images/saul_leiter.jpg";
import kazuo from "./images/kazuo.jpg";
import reductionism from "./images/reductionism.jpg";
import asian_cinemas from "./images/asian_cinemas.jpg";
import jonas from "./images/jonas.jpeg";
import anselm from "./images/anselm.jpeg";
import fog from "./images/fog.jpeg";
import memory_place from "./images/memory-place.jpeg";
import takesada from "./images/takesada.jpeg";
import melancholy from "./images/melancholy.jpeg";
import haneke from "./images/haneke.jpeg";
import gothic_music from "./images/gothic_music.jpeg";
import yann from "./images/yann.jpeg";
import tarkovsky from "./images/tarkovsky.jpeg";
import music from "./images/music.jpeg";
import four from "./images/four.jpeg";

const Theory_of_Art = "Theory of Art";
const Photography = "Photography";
const Poetry = "Poetry";
const Fine_Arts = "Fine Arts";
const Film = "Film";
const Architecture = "Architecture";
const Music = "Music";

const Princeton_University_Press = "Princeton University Press";
const Routledge = "Routledge";
const Simon_and_Schuster = "Simon & Schuster";
const Columbia_University_Press = "Columbia University Press";
const Edinburgh_University_Press = "Edinburgh University Press";

export const Products = [
  {
    id: 1,
    title: "Mimesis",
    genre: Theory_of_Art,
    author: "Erich Auerbach",
    about:
      "A half-century after its translation into English, Erich Auerbach's Mimesis still stands as a monumental achievement in literary criticism. A brilliant display of erudition, wit, and wisdom, his exploration of how great European writers from Homer to Virginia Woolf depicted reality has taught generations how to read Western literature.",
    publisher: Princeton_University_Press,
    price: 22.85,
    image: mimesis,
  },
  {
    id: 2,
    title: "Wind, Trees ",
    genre: "Poetry",
    author: "John Freeman",
    about:
      "A politically urgent yet timeless collection that studies the devastating failings of humanity and the redemptive possibilities of love. In Wind, Trees, John Freeman presents a meditation on power and loss, change and adaptation. What can the trees teach us about inhabiting space together?",
    publisher: "Copper Canyon Press",
    price: 12.49,
    image: wind,
  },
  {
    id: 3,
    title: "Lines: A Brief History",
    genre: Theory_of_Art,
    author: "Tim Ingold",
    about:
      "What do walking, weaving, observing, storytelling, singing, drawing and writing have in common? The answer is that they all proceed along lines. In this extraordinary book Tim Ingold imagines a world in which everyone and everything consists of interwoven or interconnected lines and lays the foundations for a completely new discipline: the anthropological archaeology of the line.",
    publisher: Routledge,
    price: 24.62,
    image: lines,
  },

  {
    id: 4,
    title: "Hong Kong Yesterday",
    genre: Photography,
    Theory_of_Art,
    author: "Fan Ho",
    about:
      "Hong Kong Yesterday presents a singular vision of this enigmatic city by award winning photographer, Fan Ho. Black and white images capturing life in mid-century Hong Kong range from quiet voyeuristic tableaus to chaotic crowds, most focusing on the citys inhabitants. Businessmen, families, dockworkers, alleys, markets and street scenes are all rendered in a style that is simultaneously abstract and humanistic.",
    publisher: Princeton_University_Press,
    price: 30.45,
    image: hongKong,
  },
  {
    id: 5,
    title: "Sphere: The Form of a Motion",
    genre: Poetry,
    author: "A.R. Ammons",
    about:
      "The sphere in question is the earth itself, and Ammons's wonderfully stocked mind roams globally, ruminating on subjects that range from galaxies to gas stations. It is a remarkable achievement, comparable in importance to Wallace Stevens's Notes Toward a Supreme Fiction .",
    publisher: Routledge,
    price: 15.45,
    image: sphere,
  },
  {
    id: 6,
    title: "Saul Leiter",
    genre: Photography,
    author: "Vince Aletti",
    about:
      "This major retrospective of American artist Saul Leiter, one of the great pioneers of color photography, features a comprehensive look at his work ranging from early photographs, his fashion photography, paintings, sketchbooks and more. Now back in its fourth reprint!  Saul Leiter (b. 1923 in Pittsburgh) has finally taken his rightful place among the great pioneers of color photography.",
    publisher: Simon_and_Schuster,
    price: 42.15,
    image: saul_leiter,
  },
  {
    id: 7,
    title: "Reductionism in Art and Brain Science",
    genre: Theory_of_Art,
    author: "Eric R. Kandel",
    about:
      "Are art and science separated by an unbridgeable divide? Can they find common ground? In this new book, neuroscientist Eric R. Kandel, whose remarkable scientific career and deep interest in art give him a unique perspective, demonstrates how science can inform the way we experience a work of art and seek to understand its meaning.",
    publisher: Columbia_University_Press,
    price: 34.12,
    image: reductionism,
  },
  {
    id: 8,
    title: "Kazuo Shiraga",
    genre: Fine_Arts,
    author: "Axel Vervoordt",
    about:
      "This volume presents the oeuvre of Gutai artist Kazuo Shiraga (1924–2008), discussing the influences of both Western action painting and ancient Japanese Buddhist ritual. With previously unpublished material, including a facsimile of his scrapbook, it is the first definitive English-language monograph on Shiraga.",
    publisher: Simon_and_Schuster,
    price: 20.05,
    image: kazuo,
  },

  {
    id: 9,
    title: "Asian Cinemas: A Reader and Guide",
    genre: Film,
    author: "Professor Gary Needham",
    about:
      "A number of detailed case studies are examined in order to investigate the limitations of Anglo-US theoretical models and critical paradigms. Familiar areas of critical discourse are used to introduce the 'unfamiliar' case studies. ",
    publisher: Edinburgh_University_Press,
    price: 19.43,
    image: asian_cinemas,
  },

  {
    id: 10,
    title: "Words Apart and Others",
    genre: Film,
    author: "Jonas Mekas",
    about:
      "Just like his films, Jonas Mekas's poems hold his dignity, their pace unfolding as the poet looks down at mountains from a plane. Later he's a bit of an actor sitting on the shore, anticipating darkness, uses 'soul' as singular, remembers being little and those old friends and then it is day, bright yellow and he is beginning again.",
    publisher: Edinburgh_University_Press,
    price: 50.15,
    image: jonas,
  },
  {
    id: 11,
    title: "Anselm Kiefer: Phaidon Focus ",
    genre: Theory_of_Art,
    author: "Matthew Biro",
    about:
      "This volume provides invaluable insight into the life and works of Anselm Kiefer, prolific contemporary German artist renown for his diverse body of work in painting, sculpture and installation",
    publisher: Edinburgh_University_Press,
    price: 15.67,
    image: anselm,
  },
  {
    id: 12,
    title: "Knitting the Fog    ",
    genre: Poetry,
    author: "Claudia D. Hernández",
    about:
      "Weaving together narrative essay and bilingual poetry, Claudia D. Hernández’s lyrical debut follows her tumultuous adolescence and fraught homecomings as she crisscrosses the American continent.    ",
    publisher: Columbia_University_Press,
    price: 19.45,
    image: fog,
  },
  {
    id: 13,
    title: "The Memory of Place: A Phenomenology of the Uncanny",
    genre: Architecture,
    author: "Dylan Trigg",
    about:
      "From the frozen landscapes of the Antarctic to the haunted houses of childhood, the memory of places we experience is fundamental to a sense of self. Drawing on influences as diverse as Merleau-Ponty, Freud, and J. G. Ballard, The Memory of Place charts the memorial landscape that is written into the body and its experience of the world. Dylan Trigg’s The Memory of Place offers a lively and original intervention into contemporary debates within “place studies,” an interdisciplinary field at the intersection of philosophy, geography, architecture, urban design, and environmental studies",
    publisher: Simon_and_Schuster,
    price: 45.34,
    image: memory_place,
  },
  {
    id: 14,
    title: "Takesada Matsutani",
    genre: Fine_Arts,
    author: "Takesada Matsutani",
    about:
      "An elegantly designed, career-spanning book on Gutai artist Takesada Matsutani, whose paintings unite organic and avant-garde aesthetics Accompanying a major survey on Japanese-born, Paris-based artist Takesada Matsutani (born 1937) at the Centre Pompidou, this volume reproduces works from 1958 to 2019.",
    publisher: Simon_and_Schuster,
    price: 50,
    image: takesada,
  },
  {
    id: 15,
    title: "Melancholy and Architecture: On Aldo Rossi ",
    genre: Architecture,
    author: "Diogo Seixas Lopes",
    about:
      "Italian architect Aldo Rossi (1931–97) is a crucial figure in twentieth-century architecture, his work highly influential in both theory and practice. Working in Italy and throughout Europe after World War II, he disputed the then-dominant credos of the modernists—and even went so far as to question the very status of his profession. Discarding utopian pretenses, his work claimed the autonomy of architecture with formal restraint.",
    publisher: Edinburgh_University_Press,
    price: 40,
    image: melancholy,
  },
  {
    id: 16,
    title: "Michael Haneke: Interviews",
    genre: Film,
    author: "Roy Grundmann",
    about:
      "Michael Haneke: Interviews presents some of Haneke's most profound interviews to English speakers. The volume features seventeen articles, fourteen of which have been translated into English for the first time, and all of which provide a detailed, eloquent commentary on his films and worldview. ",
    publisher: Princeton_University_Press,
    price: 21.89,
    image: haneke,
  },
  {
    id: 17,
    title: "Yann Tiersen - Piano Works: 1994-2003",
    genre: Music,
    author: "Yann Tiersen",
    about:
      "(Piano). 23 piano works from the French musician and composer Yann Tiersen (b. 1970). Includes 6 songs from Amelie (Comptine D'ete No. 2, La Dispute, Sur Le Fil, La Valse D'Amelie, Comptine D'un Autre L'Apres-Midi, Le Moulin). Comptine D'Ete No. 1 * Comptine D'Ete No. 2 * Comptine D'Ete No. 3 * Comptine D'Un Autre L'Apres-Midi * L'Absente * L'Echec * La Chute * La Dispute * La Jetee * La Piece Vide * La Plage * La Valse D'Amelie * Le Retour * Le Matin * Le Moulin * Le Vieux en Veut Encore * Les Jour Heureux * Les Retrouvailles * Mary * Naomi * Plus D'Hiver * Sur Le Fil * Toujours La ",
    publisher: "Ricordi",
    price: 50,
    image: yann,
  },

  {
    id: 18,
    title: "Gothic Music: The Sounds of the Uncanny",
    genre: Music,
    author: "Isabella van Elferen",
    about:
      "Gothic Music traces the sound of the Gothic from the eerie echoing footsteps that haunt gothic novels to the dark soundscapes that give contemporary goth nightclubs their dark atmosphere. This broad perspective enables Isabella van Elferen to widen the scope of gothic music—which includes bands such as Christian Death, Bauhaus, The Damned, and The Sisters of Mercy—from its roots in the contemporary goth subculture to manifestations in mainstream literature, film, television, and video games, while also offering a musical and theoretical definition of gothic music that is lacking in current scholarship",
    publisher: Routledge,
    price: 34.67,
    image: gothic_music,
  },

  {
    id: 19,
    title: "Instant Light: Tarkovsky Polaroids",
    genre: Film,
    author: "Andrei Tarkovsky",
    about:
      "This beautifully produced book comprises sixty Polaroid photographs of Andrei Tarkovsky's friends and family, taken between 1979 and 1984 in his native Russia and in Italy, where he spent time in political exile.The size of the Polaroids is exactly as presented in the book, including the frame. The book may therefore be viewed as a facsimile edition. 60 color illustrations.",
    publisher: Simon_and_Schuster,
    price: 70.56,
    image: tarkovsky,
  },
  {
    id: 20,
    title: "Emotion and Meaning in Music",
    genre: Music,
    author: "Leonard B. Meyer",
    about:
      "Altogether it is a book that should be required reading for any student of music, be he composer, performer, or theorist. It clears the air of many confused notions . . . and lays the groundwork for exhaustive study of the basic problem of music theory and aesthetics, the relationship between pattern and meaning.",
    publisher: Columbia_University_Press,
    price: 56.76,
    image: music,
  },
  {
    id: 21,
    title: "The First Four Books of Poems",
    genre: Poetry,
    author: "Louise Glück",
    about:
      "The fierce, austerely beautiful voice that has become Glück's trademark speaks in these poems of a life lived in unflinching awareness. Includes Firstborn, The House on Marshland, Descending Figure, and The Triumph of Achilles. ",
    publisher: Routledge,
    price: 14.35,
    image: four,
  },
];
