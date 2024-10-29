import gigiImg from "../assets/images/main/gigi-1.jpg";
import bambiniImg from "../assets/images/main/bambini-1.jpg";
import sofitelImg from "../assets/images/main/sofitel-1.jpg";
import montanaImg from "../assets/images/main/montana-1.jpg";
import cornichonImg from "../assets/images/main/cornichon-1.jpg";
import revkaImg from "../assets/images/main/revka-1.jpg";
import perrucheImg from "../assets/images/main/perruche-1.jpg";
import coutumeImg from "../assets/images/main/coutume-1.jpg";
import cadetImg from "../assets/images/main/cadet-1.jpg";
import clutchImg from "../assets/images/main/clutch-1.jpg";
import phantomImg from "../assets/images/main/phantom-1.jpg";
import terminalImg from "../assets/images/main/terminal-1.jpg";
import haussmannImg from "../assets/images/main/haussmann-1.jpg";
import usopfImg from "../assets/images/main/usopf-1.jpg";
import adidasImg from "../assets/images/main/adidas-1.jpg";
import alpineImg from "../assets/images/main/alpine-1.jpg";
import longchampImg from "../assets/images/main/longchamp-1.jpg";
import entrepriseImg from "../assets/images/main/entreprise-1.png";
import melbaImg from "../assets/images/main/melba-1.jpg";
import burberryImg from "../assets/images/main/burberry-1.jpg";
import zadigImg from "../assets/images/main/zadig-1.jpg";
import jimmyImg from "../assets/images/main/jimmy-1.jpg";
import mackageImg from "../assets/images/main/mackage-1.jpg";
import saintgermainImg from "../assets/images/main/germain-1.jpg";
import paris9Img from "../assets/images/main/paris-9-1.jpg";
import raspailImg from "../assets/images/main/raspail-1.jpg";
import lepicImg from "../assets/images/main/lepic-1.jpg";
import bottaImg from "../assets/images/main/botta-1.jpg";
import vaugirardImg from "../assets/images/main/vaugirard-1.jpg";
import chellesImg from "../assets/images/main/chelles-1.jpg";
import vocalcomImg from "../assets/images/main/vocalcom-1.jpg";

const projetContent = [
  {
    identification: 1,
    categoryId: "restaurant",
    name: "gigi",
    title: (
      <p>
        Gigi |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Aménagement Restaurant</h2>
        <h2>15 avenue Montaigne | Paris</h2>
        <h2>MOA : PARIS SOCIETY</h2>
        <h2>Architecte : Hugo Toro</h2>
        <h2>MO / OPC : MAD design</h2>
        <br />
        <h2>
          Mission : Rénovation complète du restaurant Gigi, ancienne adresse
          mythique Maison Blanche sur le toit du théâtre des Champs Elysées
        </h2>
      </>
    ),
    mainImage: gigiImg,
    images: [
      {
        name: "gigi-1",
        url: "../images/gigi/gigi-1.jpg",
      },
      {
        name: "gigi-2",
        url: "../images/gigi/gigi-2.jpg",
      },
      {
        name: "gigi-3",
        url: "../images/gigi/gigi-3.jpg",
      },
    ],
  },
  {
    identification: 2,
    categoryId: "restaurant",
    name: "bambini",
    title: (
      <p>
        Bambini |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Aménagement Restaurant</h2>
        <h2>51 avenue franklin Delano Roosevelt | Paris</h2>
        <h2>MOA : PARIS SOCIETY</h2>
        <h2>Architecte : Friedmann & Versace </h2>
        <h2>MO / OPC : MAD design </h2>
        <br />
        <h2>
          Mission : Création complète d’un restaurant au sein du musée du Palais
          de Tokyo, avec terrasse extérieure sur l’esplanade de la fontaine du
          palais.
        </h2>
      </>
    ),
    mainImage: bambiniImg,
    images: [
      {
        name: "bambini-1",
        url: "../images/bambini/bambini-1.jpg",
      },
      {
        name: "bambini-2",
        url: "../images/bambini/bambini-2.jpg",
      },
      {
        name: "bambini-3",
        url: "../images/bambini/bambini-3.jpg",
      },
      {
        name: "bambini-4",
        url: "../images/bambini/bambini-4.jpg",
      },
      {
        name: "bambini-5",
        url: "../images/bambini/bambini-5.jpg",
      },
    ],
  },
  {
    identification: 3,
    categoryId: "restaurant",
    name: "sofitel",
    title: (
      <p>
        MGallery Sofitel |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Rénovation Espace d’Accueil, Restaurant, Circulations</h2>
        <h2>La Défense | PARIS</h2>
        <h2>MOA: Groupe Accor</h2>
        <h2>Architecte d’intérieur : Maison Numéro 20</h2>
        <h2>MO d’exécution : MAD design </h2>
        <br />
        <h2>
          Mission : Direction des travaux, suivi de projet tout corps d’état du
          Lobby-Restaurant
        </h2>
      </>
    ),
    mainImage: sofitelImg,
    images: [
      {
        name: "sofitel-1",
        url: "../images/sofitel/sofitel-1.jpg",
      },
      {
        name: "sofitel-2",
        url: "../images/sofitel/sofitel-2.jpg",
      },
      {
        name: "sofitel-3",
        url: "../images/sofitel/sofitel-3.jpg",
      },
      {
        name: "sofitel-4",
        url: "../images/sofitel/sofitel-4.jpg",
      },
      {
        name: "sofitel-5",
        url: "../images/sofitel/sofitel-5.jpg",
      },
      {
        name: "sofitel-6",
        url: "../images/sofitel/sofitel-6.jpg",
      },
      {
        name: "sofitel-7",
        url: "../images/sofitel/sofitel-7.jpg",
      },
    ],
  },
  {
    identification: 4,
    categoryId: "restaurant",
    name: "montana",
    title: (
      <p>
        Le Montana |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Rénovation Restaurant</h2>
        <h2>28 rue Saint-Benoît | Paris</h2>
        <h2>MOA : Privé</h2>
        {/* <h2>Architecte : Hugo Toro</h2> */}
        <h2>Architecte d'intérieur / MO / OPC : MAD design</h2>
        <br />
        <h2>
          Mission : Reprise du club mythique des années 80 : Rénovation complète
          du bar, restaurant, rooftop.
        </h2>
      </>
    ),
    mainImage: montanaImg,
    images: [
      {
        name: "montana-1",
        url: "../images/montana/montana-1.jpg",
      },
      {
        name: "montana-2",
        url: "../images/montana/montana-2.jpg",
      },
      {
        name: "montana-3",
        url: "../images/montana/montana-3.jpg",
      },
      {
        name: "montana-4",
        url: "../images/montana/montana-4.jpg",
      },
      {
        name: "montana-5",
        url: "../images/montana/montana-5.jpg",
      },
    ],
  },
  {
    identification: 5,
    categoryId: "restaurant",
    name: "cornichon",
    title: (
      <p>
        Cornichon |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Aménagement Restaurant</h2>
        <h2>2 rue Goncourt | Paris</h2>
        <h2>MOA : PANEM & CIRCENSES GROUP </h2>
        <h2>Architecte : Claves Architecture </h2>
        <h2>MO / OPC : MAD design</h2>
        <br />
        <h2>
          Mission : Direction des travaux pour l'aménagement de Cornichon, un
          restaurant inspiré des bars tabac des années 80. Ce projet recrée avec
          authenticité l’atmosphère nostalgique de l'époque, alliant décor rétro
          et touches contemporaines.
        </h2>
      </>
    ),
    mainImage: cornichonImg,
    images: [
      {
        name: "cornichon-1",
        url: "../images/cornichon/cornichon-1.jpg",
      },
      {
        name: "cornichon-2",
        url: "../images/cornichon/cornichon-2.jpg",
      },
      {
        name: "cornichon-3",
        url: "../images/cornichon/cornichon-3.jpg",
      },
      {
        name: "cornichon-4",
        url: "../images/cornichon/cornichon-4.jpg",
      },
      {
        name: "cornichon-5",
        url: "../images/cornichon/cornichon-5.jpg",
      },
      {
        name: "cornichon-6",
        url: "../images/cornichon/cornichon-6.jpg",
      },
    ],
  },
  {
    identification: 6,
    categoryId: "restaurant",
    name: "maison-revka",
    title: (
      <p>
        Maison Revka |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Rénovation Restaurant</h2>
        <h2>Avenue Raymond Poincaré | Paris</h2>
        <h2>MOA : PARIS SOCIETY</h2>
        <h2>Architecte : Laleh Amir Assefi</h2>
        <h2>MO / OPC : MAD design</h2>
        <br />
        <h2>
          Mission : Direction des travaux, suivi de projet tout corps d’état du
          restaurant, des salons privés ainsi que de la terrasse de la cour
          privée.
        </h2>
      </>
    ),
    mainImage: revkaImg,
    images: [
      {
        name: "revka-1",
        url: "../images/revka/revka-1.jpg",
      },
      {
        name: "revka-2",
        url: "../images/revka/revka-2.jpg",
      },
      {
        name: "revka-3",
        url: "../images/revka/revka-3.jpg",
      },
    ],
  },
  {
    identification: 7,
    categoryId: "restaurant",
    name: "perruche",
    title: (
      <p>
        Le Perruche |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Aménagement Restaurant sur le toit du Printemps</h2>
        <h2>Boulevard Hausmann | Paris</h2>
        <h2>MOA : PARIS SOCIETY</h2>
        <h2>Architecte : Hugo Toro</h2>
        <h2>MO / OPC : MAD design</h2>
        <br />
        <h2>
          Mission : Direction des travaux du restaurant situé sur le toit du
          Printemps, boulevard Haussmann. Travaux comprenant grutage, horaires
          de nuit, phasage du chantier suivant demande du Printemps.
        </h2>
      </>
    ),
    mainImage: perrucheImg,
    images: [
      {
        name: "perruche-1",
        url: "../images/perruche/perruche-1.jpg",
      },
      {
        name: "perruche-2",
        url: "../images/perruche/perruche-2.jpg",
      },
      {
        name: "perruche-3",
        url: "../images/perruche/perruche-3.jpg",
      },
      {
        name: "perruche-4",
        url: "../images/perruche/perruche-4.jpg",
      },
      {
        name: "perruche-5",
        url: "../images/perruche/perruche-5.jpg",
      },
      {
        name: "perruche-6",
        url: "../images/perruche/perruche-6.jpg",
      },
    ],
  },
  {
    identification: 8,
    categoryId: "restaurant",
    name: "coutume",
    title: (
      <p>
        Café Coutume |
        <br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Aménagement du Café des Galerie Lafayette Paris</h2>
        <h2>Boulevard Hausmann | Paris</h2>
        <h2>MOA : SAS Maitre du Terroir</h2>
        <h2>Architecte : Cut Architecture</h2>
        <h2>MO / OPC : MAD design</h2>
        <br />
        <h2>
          Mission : Direction des travaux d’un espace café restauration sous la
          coupole des Galerie Lafayette. Suivi du projet avec le centre
          commercial – travail en horaire décalé pour permettre l’accueil du
          public.
        </h2>
      </>
    ),
    mainImage: coutumeImg,
    images: [
      {
        name: "coutume-1",
        url: "../images/coutume/coutume-1.jpg",
      },
      {
        name: "coutume-2",
        url: "../images/coutume/coutume-2.jpg",
      },
      {
        name: "coutume-3",
        url: "../images/coutume/coutume-3.jpg",
      },
      {
        name: "coutume-4",
        url: "../images/coutume/coutume-4.jpg",
      },
      {
        name: "coutume-5",
        url: "../images/coutume/coutume-5.jpg",
      },
      {
        name: "coutume-6",
        url: "../images/coutume/coutume-6.jpg",
      },
      {
        name: "coutume-7",
        url: "../images/coutume/coutume-7.jpg",
      },
    ],
  },
  {
    identification: 9,
    categoryId: "restaurant",
    name: "cadet",
    title: (
      <p>
        Le Petit Cadet |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Réhabilitation, Extension, Aménagement restaurant</h2>
        <h2>9 rue Cachet | Paris</h2>
        <h2>MOA : Maxime et Marcel MAISONOBE</h2>
        {/* <h2>Architecte : Cut Architecture</h2> */}
        <h2>Architecte d’intérieur : MAD design </h2>
        <br />
        <h2>
          Mission : Conception, Rénovation et agrandissement d’un bistro
          parisien existant
        </h2>
      </>
    ),
    mainImage: cadetImg,
    images: [
      {
        name: "cadet-1",
        url: "../images/cadet/cadet-1.jpg",
      },
      {
        name: "cadet-2",
        url: "../images/cadet/cadet-2.jpg",
      },
      {
        name: "cadet-3",
        url: "../images/cadet/cadet-3.jpg",
      },
      {
        name: "cadet-4",
        url: "../images/cadet/cadet-4.jpg",
      },
    ],
  },
  {
    identification: 10,
    categoryId: "restaurant",
    name: "clutch",
    title: (
      <p>
        Le Clutch |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Réalisation Restaurant</h2>
        <h2>Rue des boulets | Paris</h2>
        <h2>MOA : Pierre Rieder et Maxime Mérienne</h2>
        {/* <h2>Architecte : Cut Architecture</h2> */}
        <h2>Architecte d’intérieur / MO : MAD design </h2>
        <br />
        <h2>
          Mission : Conception d’un restaurant bistronomique, suivi des travaux
          en tout corps d’etat.
        </h2>
      </>
    ),
    mainImage: clutchImg,
    images: [
      {
        name: "clutch-1",
        url: "../images/clutch/clutch-1.jpg",
      },
      {
        name: "clutch-2",
        url: "../images/clutch/clutch-2.jpg",
      },
      {
        name: "clutch-3",
        url: "../images/clutch/clutch-3.jpg",
      },
    ],
  },
  // {
  //   categoryId: "restaurant",
  //   name: "codys",
  //   title: "Cody’s | Paris (À Venir)",
  //   content: (
  //     <>
  //       <h2>Rénovation Espace d’Accueil, Restaurant, Circulations</h2>
  //       <h2>7e arrondissement | Paris</h2>
  //       <h2>MOA : Two dot</h2>
  //       {/* <h2>Architecte : Cut Architecture</h2> */}
  //       <h2>Architecte d’intérieur / MO : MAD design </h2>
  //       <h2>
  //         Mission :Conception et suivi de chantier d’un café / vente bagel à
  //         emporter.
  //       </h2>
  //     </>
  //   ),
  //   mainImage: codysImg,
  //   images: [
  //     {
  //       name: "codys-1",
  //       url: "../images/codys/codys-1.jpg",
  //     },
  //     {
  //       name: "codys-2",
  //       url: "../images/codys/codys-2.jpg",
  //     },
  //     {
  //       name: "codys-3",
  //       url: "../images/codys/codys-3.jpg",
  //     },
  //     {
  //       name: "codys-4",
  //       url: "../images/codys/codys-4.jpg",
  //     },
  //     {
  //       name: "codys-5",
  //       url: "../images/codys/codys-5.jpg",
  //     },
  //     {
  //       name: "codys-6",
  //       url: "../images/codys/codys-6.jpg",
  //     },
  //     {
  //       name: "codys-7",
  //       url: "../images/codys/codys-7.jpg",
  //     },
  //   ],
  // },
  {
    identification: 11,
    categoryId: "club",
    name: "phantom",
    title: (
      <p>
        Phantom |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Club</h2>
        <h2>8 boulevard de Bercy | Paris</h2>
        <h2>MOA : PARIS SOCIETY </h2>
        {/* <h2>Architecte : Cut Architecture</h2> */}
        <h2>Architecte d’intérieur / MO / OPC : MAD design </h2>
        <br />
        <h2>
          Mission : Conception de la plus grande scene de musique electronique à
          Paris. Travail sur la scénographie – l’architecture des différents
          espaces ( Accueil extérieur, Salle de concert, Zone VIP… ). Le but de
          ce projet : plonger le spectateur dans une véritable expérience
          immersive.
        </h2>
      </>
    ),
    mainImage: phantomImg,
    images: [
      {
        name: "phantom-1",
        url: "../images/phantom/phantom-1.jpg",
      },
      {
        name: "phantom-2",
        url: "../images/phantom/phantom-2.jpg",
      },
      {
        name: "phantom-3",
        url: "../images/phantom/phantom-3.jpg",
      },
      {
        name: "phantom-4",
        url: "../images/phantom/phantom-4.jpg",
      },
      {
        name: "phantom-5",
        url: "../images/phantom/phantom-5.jpg",
      },
      {
        name: "phantom-6",
        url: "../images/phantom/phantom-6.jpg",
      },
      {
        name: "phantom-7",
        url: "../images/phantom/phantom-7.jpg",
      },
      {
        name: "phantom-8",
        url: "../images/phantom/phantom-8.jpg",
      },
    ],
  },
  {
    identification: 12,
    categoryId: "club",
    name: "terminal",
    title: (
      <p>
        Terminal 7 |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Club</h2>
        <h2>Parc des Expositions | Paris</h2>
        <h2>MOA : PARIS SOCIETY </h2>
        {/* <h2>Architecte : Cut Architecture</h2> */}
        <h2>Architecte d’intérieur / MO / OPC : MAD design </h2>
        <br />
        <h2>
          Mission : Direction des travaux du Club du Parc des expositions -
          Porte de Versailles. Suivi du projet architectural, respect du timing
          ainsi que du budget client.
        </h2>
      </>
    ),
    mainImage: terminalImg,
    images: [
      {
        name: "terminal-1",
        url: "../images/terminal/terminal-1.jpg",
      },
      {
        name: "terminal-2",
        url: "../images/terminal/terminal-2.jpg",
      },
      {
        name: "terminal-3",
        url: "../images/terminal/terminal-3.jpg",
      },
      {
        name: "terminal-4",
        url: "../images/terminal/terminal-4.jpg",
      },
      {
        name: "terminal-5",
        url: "../images/terminal/terminal-5.jpg",
      },
      {
        name: "terminal-6",
        url: "../images/terminal/terminal-6.jpg",
      }
    ],
  },
  {
    identification: 13,
    categoryId: "club",
    name: "haussmann",
    title: (
      <p>
        Club Haussmann | <br />
        Paris
      </p>
    ),
    content: (
      <>
        <h2>Club</h2>
        <h2>Parc des Expositions | Paris</h2>
        <h2>MOA : PARIS SOCIETY </h2>
        {/* <h2>Architecte : Cut Architecture</h2> */}
        <h2>Architecte d’intérieur / MO / OPC : MAD design </h2>
        <br />
        <h2>
          Mission : Direction des travaux du Club du Parc des expositions -
          Porte de Versailles. Suivi du projet architectural, respect du timing
          ainsi que du budget client.
        </h2>
      </>
    ),
    mainImage: haussmannImg,
    images: [
      {
        name: "haussmann-1",
        url: "../images/haussmann/haussmann-1.jpg",
      },
      {
        name: "haussmann-2",
        url: "../images/haussmann/haussmann-2.jpg",
      },
      {
        name: "haussmann-3",
        url: "../images/haussmann/haussmann-3.jpg",
      },
      {
        name: "haussmann-4",
        url: "../images/haussmann/haussmann-4.jpg",
      },
      {
        name: "haussmann-5",
        url: "../images/haussmann/haussmann-5.jpg",
      },
      {
        name: "haussmann-6",
        url: "../images/haussmann/haussmann-6.jpg",
      },
      {
        name: "haussmann-7",
        url: "../images/haussmann/haussmann-7.jpg",
      },
    ],
  },
  {
    identification: 14,
    categoryId: "evenementiel",
    name: "usopf",
    title: (
      <p>
        JO 2024 Team USA |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Salons d’accueil</h2>
        <h2>Le Meurice - Le Peninsula | Paris</h2>
        <h2>MOA : On Location (organisateur principal des JO de Paris 2024)</h2>
        {/* <h2>Architecte : Cut Architecture</h2> */}
        <h2>Architecte d’intérieur / MO : MAD design </h2>
        <br />
        <h2>
          Mission : Conception des salons d'accueil pour les familles d’athlètes
          de la Team USA durant les Jeux Olympiques, au sein des hôtels 5* Le
          Meurice et Le Peninsula. Espaces confortables, permettant le
          visionnage des épreuves, avec des zones de restauration ainsi que des
          espaces de travail.
        </h2>
      </>
    ),
    mainImage: usopfImg,
    images: [
      {
        name: "usopf-1",
        url: "../images/usopf/usopf-1.jpg",
      },
      {
        name: "usopf-2",
        url: "../images/usopf/usopf-2.jpg",
      },
      {
        name: "usopf-3",
        url: "../images/usopf/usopf-3.jpg",
      },
      {
        name: "usopf-4",
        url: "../images/usopf/usopf-4.jpg",
      },
      {
        name: "usopf-5",
        url: "../images/usopf/usopf-5.jpg",
      },
      {
        name: "usopf-6",
        url: "../images/usopf/usopf-6.jpg",
      },
      {
        name: "usopf-7",
        url: "../images/usopf/usopf-7.jpg",
      },
    ],
  },
  {
    identification: 15,
    categoryId: "evenementiel",
    name: "adidas",
    title: (
      <p>
        Adidas Arena |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Arena - Stade couvert </h2>
        <h2>58 boulevard Ney | Paris</h2>
        <h2>MOA : Groupe Accor</h2>
        {/* <h2>Architecte : Cut Architecture</h2> */}
        <h2>OPC : MAD design </h2>
        <br />
        <h2>
          Mission : Suivi des travaux et pose de la signalétique de la salle
          polyvalente (extérieur et intérieur)
        </h2>
      </>
    ),
    mainImage: adidasImg,
    images: [
      {
        name: "adidas-1",
        url: "../images/adidas/adidas-1.jpg",
      },
      {
        name: "adidas-2",
        url: "../images/adidas/adidas-2.jpg",
      },
      {
        name: "adidas-3",
        url: "../images/adidas/adidas-3.jpg",
      },
      {
        name: "adidas-4",
        url: "../images/adidas/adidas-4.jpg",
      },
    ],
  },
  {
    identification: 16,
    categoryId: "evenementiel",
    name: "alpine",
    title: (
      <p>
        Alpine |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Espace Muséographique</h2>
        <h2>Le Dernier Etage, 9 rue Forest | Paris</h2>
        <h2>MOA : PARIS SOCIETY</h2>
        {/* <h2>Architecte : Cut Architecture</h2> */}
        <h2>Architecte scénographe / MO : MAD design </h2>
        <br />
        <h2>
          Mission : Elaboration de l'exposition Alpine à Paris, dédiée à la
          présentation de voitures de la marque. Mise en scène des véhicules au
          sein du Dernier Etage – lieux d’exposition Paris Society.
        </h2>
      </>
    ),
    mainImage: alpineImg,
    images: [
      {
        name: "alpine-1",
        url: "../images/alpine/alpine-1.jpg",
      },
      {
        name: "alpine-2",
        url: "../images/alpine/alpine-2.jpg",
      },
      {
        name: "alpine-3",
        url: "../images/alpine/alpine-3.jpg",
      },
      {
        name: "alpine-4",
        url: "../images/alpine/alpine-4.jpg",
      },
      {
        name: "alpine-5",
        url: "../images/alpine/alpine-5.jpg",
      },
    ],
  },
  {
    identification: 17,
    categoryId: "evenementiel",
    name: "longchamp",
    title: (
      <p>
        Hippodrome Longchamp |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Espace Événementiel</h2>
        <h2>2 routes des tribunes | Paris</h2>
        <h2>MOA : PARIS SOCIETY</h2>
        {/* <h2>Architecte : Cut Architecture</h2> */}
        <h2>Architecte scénographe / MO : MAD design </h2>
        <br />
        <h2>
          Mission : Création d’un espace de restauration et de détente au cœur
          de l'Hippodrome de Longchamp. Aménagement de bars, de zones de jeux,
          et d’une scène pour les DJ sets. Une grande piste de roller a aussi
          été conçue.
        </h2>
      </>
    ),
    mainImage: longchampImg,
    images: [
      {
        name: "longchamp-1",
        url: "../images/longchamp/longchamp-1.jpg",
      },
      {
        name: "longchamp-2",
        url: "../images/longchamp/longchamp-2.jpg",
      },
      {
        name: "longchamp-3",
        url: "../images/longchamp/longchamp-3.jpg",
      },
      {
        name: "longchamp-4",
        url: "../images/longchamp/longchamp-4.jpg",
      },
      {
        name: "longchamp-5",
        url: "../images/longchamp/longchamp-5.jpg",
      },
      {
        name: "longchamp-6",
        url: "../images/longchamp/longchamp-6.jpg",
      },
    ],
  },
  {
    identification: 18,
    categoryId: "evenementiel",
    name: "entreprise",
    title: (
      <p>
        Entreprise Privée |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Espace Événementiel JO 2024</h2>
        <h2>10 avenue des Champs-Elysées | Paris</h2>
        <h2>MOA : On Location (organisateur principal des JO de Paris 2024)</h2>
        {/* <h2>Architecte : Cut Architecture</h2> */}
        <h2>Architecte d'Intérieur : MAD design </h2>
        <br />
        <h2>
          Mission : Conception d’espaces de réception pour une entreprise
          internationale s’installant au Pavillon de l’Elysée pour les Jeux
          Olympiques de Paris. Conception d’espaces lounge, de points d’accueil,
          d’espace de restauration, d’exposition.
        </h2>
      </>
    ),
    mainImage: entrepriseImg,
    images: [
      {
        name: "entreprise-1",
        url: "../images/entreprise/entreprise-1.jpg",
      },
      {
        name: "entreprise-2",
        url: "../images/entreprise/entreprise-2.jpg",
      },
      {
        name: "entreprise-3",
        url: "../images/entreprise/entreprise-3.jpg",
      },
      {
        name: "entreprise-4",
        url: "../images/entreprise/entreprise-4.jpg",
      },
    ],
  },
  {
    identification: 19,
    categoryId: "evenementiel",
    name: "melba",
    title: (
      <p>
        Melba |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Peniche Restaurant </h2>
        <h2>1 rue de Solferino | Paris</h2>
        <h2>MOA : PARIS SOCIETY</h2>
        {/* <h2>Architecte : Cut Architecture</h2> */}
        <h2>Architecte d'Intérieur / MO : MAD design </h2>
        <br />
        <h2>
          Mission : Conception et suivi des travaux du projet Melba, Vaporetto
          vénitien des années 30, transformé en un espace évènementiel. Péniche
          à l’esprit méditerranéenne, entre le Pont de la Concorde et le Pont
          Royal, évoquant l'ambiance conviviale d'une maison de vacances en bord
          de mer.
        </h2>
      </>
    ),
    mainImage: melbaImg,
    images: [
      {
        name: "melba-1",
        url: "../images/melba/melba-1.jpg",
      },
      {
        name: "melba-2",
        url: "../images/melba/melba-2.jpg",
      },
      {
        name: "melba-3",
        url: "../images/melba/melba-3.jpg",
      },
      {
        name: "melba-4",
        url: "../images/melba/melba-4.jpg",
      },
    ],
  },
  {
    identification: 20,
    categoryId: "retail",
    name: "burberry",
    title: (
      <p>
        Burberry |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Réalisation Boutique de Luxe</h2>
        <h2>Galeries Lafayette, Boulevard Haussmann | Paris</h2>
        <h2>MOA : BURBERRY France</h2>
        <h2>Architecte : BURBERRY</h2>
        <h2>MO / OPC : MAD design </h2>
        <br />
        <h2>
          Mission : Gestion des travaux en tout corps d’état – travail combiné
          avec les Galeries Lafayette, phasage travaux suivant accueil du public
          la journée.
        </h2>
      </>
    ),
    mainImage: burberryImg,
    images: [
      {
        name: "burberry-1",
        url: "../images/burberry/burberry-1.jpg",
      },
      {
        name: "burberry-2",
        url: "../images/burberry/burberry-2.jpg",
      },
      {
        name: "burberry-3",
        url: "../images/burberry/burberry-3.jpg",
      },
      {
        name: "burberry-4",
        url: "../images/burberry/burberry-4.jpg",
      },
    ],
  },
  {
    identification: 21,
    categoryId: "retail",
    name: "zadig",
    title: (
      <p>
        Zadig et Voltaire |<br /> Europe
      </p>
    ),
    content: (
      <>
        <h2>Réalisation Boutiques et Corners Haut de Gamme</h2>
        <h2>
          France, Portugal, Pays Bas, Suisse, Allemagne, Angleterre, Italie,
          Belgique, Espagne
        </h2>
        <h2>MOA : Zadig & Voltaire</h2>
        <h2>Architecte : Zadig & Voltaire</h2>
        <h2>MO / OPC : MAD design </h2>
        <br />
        <h2>
          Mission : Rénovation des boutiques et corners dans les centres
          commerciaux et villages de marque, à travers l’Europe – Dessins
          techniques et visuels 3D
        </h2>
      </>
    ),
    mainImage: zadigImg,
    images: [
      {
        name: "zadig-1",
        url: "../images/zadig/zadig-1.jpg",
      },
      {
        name: "zadig-2",
        url: "../images/zadig/zadig-2.jpg",
      },
      {
        name: "zadig-3",
        url: "../images/zadig/zadig-3.jpg",
      },
      {
        name: "zadig-4",
        url: "../images/zadig/zadig-4.jpg",
      },
      {
        name: "zadig-5",
        url: "../images/zadig/zadig-5.jpg",
      },
      {
        name: "zadig-6",
        url: "../images/zadig/zadig-6.jpg",
      },
      {
        name: "zadig-7",
        url: "../images/zadig/zadig-7.jpg",
      },
      {
        name: "zadig-8",
        url: "../images/zadig/zadig-8.jpg",
      },
      {
        name: "zadig-9",
        url: "../images/zadig/zadig-9.jpg",
      },
      {
        name: "zadig-10",
        url: "../images/zadig/zadig-10.jpg",
      },
      {
        name: "zadig-11",
        url: "../images/zadig/zadig-11.jpg",
      },
      {
        name: "zadig-12",
        url: "../images/zadig/zadig-12.jpg",
      },
    ],
  },
  {
    identification: 22,
    categoryId: "retail",
    name: "jimmy",
    title: (
      <p>
        Jimmy Choo |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Réalisation Boutique de Luxe</h2>
        <h2>Avenue Montaigne | Paris</h2>
        <h2>MOA : Jimmy CHOO</h2>
        <h2>Architecte : Jimmy CHOO</h2>
        <h2>MO / OPC : MAD design </h2>
        <br />
        <h2>
          Mission : Direction des travaux, suivi de projet tout corps d’état de
          la boutique ainsi que du back office.
        </h2>
      </>
    ),
    mainImage: jimmyImg,
    images: [
      {
        name: "jimmy-1",
        url: "../images/jimmy/jimmy-1.jpg",
      },
      {
        name: "jimmy-2",
        url: "../images/jimmy/jimmy-2.jpg",
      },
      {
        name: "jimmy-3",
        url: "../images/jimmy/jimmy-3.jpg",
      },
      {
        name: "jimmy-4",
        url: "../images/jimmy/jimmy-4.jpg",
      },
      {
        name: "jimmy-5",
        url: "../images/jimmy/jimmy-5.jpg",
      },
      {
        name: "jimmy-6",
        url: "../images/jimmy/jimmy-6.jpg",
      },
    ],
  },
  {
    identification: 23,
    categoryId: "retail",
    name: "mackage",
    title: (
      <p>
        Mackage |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Réalisation Boutique Haut de Gamme</h2>
        <h2>Rue St-Honoré | Paris</h2>
        <h2>MOA : MACKAGE</h2>
        <h2>Architecte : Burdifilek</h2>
        <br />
        <h2>Mission : Réhabilitation complète d’une boutique sur 2 niveaux</h2>
      </>
    ),
    mainImage: mackageImg,
    images: [
      {
        name: "mackage-1",
        url: "../images/mackage/mackage-1.jpg",
      },
      {
        name: "mackage-2",
        url: "../images/mackage/mackage-2.jpg",
      },
      {
        name: "mackage-3",
        url: "../images/mackage/mackage-3.jpg",
      },
      {
        name: "mackage-4",
        url: "../images/mackage/mackage-4.jpg",
      },
    ],
  },
  {
    identification: 24,
    categoryId: "residentiel",
    name: "saint-germain",
    title: (
      <p>
        Bd Saint-Germain |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Rénovation d’un appartement</h2>
        <h2>St-Germain des Prés | Paris</h2>
        <h2>MOA : Client Privé</h2>
        <h2>Architecte d'intérieur : Peggy Bels</h2>
        <h2>MO / OPC : MAD Design</h2>
        <br />
        <h2>
          Mission : Rénovation complète appartement haussmannien, travaux tout
          corps d’état.
        </h2>
      </>
    ),
    mainImage: saintgermainImg,
    images: [
      {
        name: "germain-1",
        url: "../images/germain/germain-1.jpg",
      },
      {
        name: "germain-2",
        url: "../images/germain/germain-2.jpg",
      },
      {
        name: "germain-3",
        url: "../images/germain/germain-3.jpg",
      },
      {
        name: "germain-4",
        url: "../images/germain/germain-4.jpg",
      },
    ],
  },
  {
    identification: 25,
    categoryId: "residentiel",
    name: "paris-9",
    title: (
      <p>
        Appartement 9ème |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Rénovation d’un appartement</h2>
        <h2>Quartier Saint Georges | Paris</h2>
        <h2>MOA : Client Privé</h2>
        <h2>Architecte intérieur / MO / OPC : MAD design</h2>
        <br />
        <h2>
          Mission : Conception et suivi de travaux appartement haussmannien,
          travaux tout corps d’état.
        </h2>
      </>
    ),
    mainImage: paris9Img,
    images: [
      {
        name: "paris-9-1",
        url: "../images/paris-9/paris-9-1.jpg",
      },
      {
        name: "paris-9-2",
        url: "../images/paris-9/paris-9-2.jpg",
      },
      {
        name: "paris-9-3",
        url: "../images/paris-9/paris-9-3.jpg",
      },
    ],
  },
  {
    identification: 26,
    categoryId: "residentiel",
    name: "raspail",
    title: (
      <p>
        Appartement Raspail |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Rénovation d’un appartement</h2>
        <h2>Boulevard Raspail | Paris</h2>
        <h2>MOA : Client Privé</h2>
        <h2>Architecte : Cut Architecture</h2>
        <h2>MO / OPC : MAD design</h2>
        <br />
        <h2>
          Mission : Direction des travaux tout corps d’état de l’appartement –
          lots techniques ainsi que lots de second œuvre.
        </h2>
      </>
    ),
    mainImage: raspailImg,
    images: [
      {
        name: "raspail-1",
        url: "../images/raspail/raspail-1.jpg",
      },
      {
        name: "raspail-2",
        url: "../images/raspail/raspail-2.jpg",
      },
      {
        name: "raspail-3",
        url: "../images/raspail/raspail-3.jpg",
      },
      {
        name: "raspail-4",
        url: "../images/raspail/raspail-4.jpg",
      },
      {
        name: "raspail-5",
        url: "../images/raspail/raspail-5.jpg",
      },
    ],
  },
  {
    identification: 27,
    categoryId: "residentiel",
    name: "lepic",
    title: (
      <p>
        Appartement Rue Lepic |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Rénovation d’un appartement</h2>
        <h2>Quartier Montmartre | Paris</h2>
        <h2>MOA : Client Privé</h2>
        <h2>Architecte : BL</h2>
        <h2>MO / OPC : MAD design</h2>
        <br />
        <h2>
          Mission : Direction des travaux tout corps d’état de l’appartement –
          lots techniques ainsi que lots de second œuvre.
        </h2>
      </>
    ),
    mainImage: lepicImg,
    images: [
      {
        name: "lepic-1",
        url: "../images/lepic/lepic-1.jpg",
      },
      {
        name: "lepic-2",
        url: "../images/lepic/lepic-2.jpg",
      },
      {
        name: "lepic-3",
        url: "../images/lepic/lepic-3.jpg",
      },
      {
        name: "lepic-4",
        url: "../images/lepic/lepic-4.jpg",
      },
    ],
  },
  {
    identification: 28,
    categoryId: "residentiel",
    name: "botta",
    title: (
      <p>
        Appartement Regis Botta |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Rénovation d’un appartement</h2>
        <h2>La Madeleine | Paris</h2>
        <h2>MOA : Client Privé</h2>
        <h2>Architecte : Regis Botta</h2>
        <h2>MO / OPC : MAD design</h2>
        <br />
        <h2>
          Mission : Direction des travaux tout corps d’état de l’appartement –
          lots techniques ainsi que lots de second œuvre.
        </h2>
      </>
    ),
    mainImage: bottaImg,
    images: [
      {
        name: "botta-1",
        url: "../images/botta/botta-1.jpg",
      },
      {
        name: "botta-2",
        url: "../images/botta/botta-2.jpg",
      },
      {
        name: "botta-3",
        url: "../images/botta/botta-3.jpg",
      },
      {
        name: "botta-4",
        url: "../images/botta/botta-4.jpg",
      },
    ],
  },
  {
    identification: 29,
    categoryId: "office",
    name: "vaugirard",
    title: (
      <p>
        Gare Vaugirard |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Espace de coworking et café associatif</h2>
        <h2>1 rue François Ory à Montrouge | Paris</h2>
        <h2>MOA : Fifus-Voie 15</h2>
        <h2>Architecte : Neufville-Gayet Architectes</h2>
        <h2>MO / OPC : MAD design</h2>
        <br />
        <h2>
          Mission : Direction et suivi des travaux de transformation de
          l'ancienne gare d'acheminement des marchandises de Vaugirard (XVIIIe
          siècle), en un espace de coworking. Chaque étape de la rénovation a
          été minutieusement supervisée pour préserver le charme historique,
          tout en intégrant des éléments techniques nécessaire au fonctionnement
          d’un bâtiment contemporains.
        </h2>
      </>
    ),
    mainImage: vaugirardImg,
    images: [
      {
        name: "vaugirard-1",
        url: "../images/vaugirard/vaugirard-1.jpg",
      },
      {
        name: "vaugirard-2",
        url: "../images/vaugirard/vaugirard-2.jpg",
      },
      {
        name: "vaugirard-3",
        url: "../images/vaugirard/vaugirard-3.jpg",
      },
      {
        name: "vaugirard-4",
        url: "../images/vaugirard/vaugirard-4.jpg",
      },
      {
        name: "vaugirard-5",
        url: "../images/vaugirard/vaugirard-5.jpg",
      },
      {
        name: "vaugirard-6",
        url: "../images/vaugirard/vaugirard-6.jpg",
      },
      {
        name: "vaugirard-7",
        url: "../images/vaugirard/vaugirard-7.jpg",
      },
    ],
  },
  {
    identification: 30,
    categoryId: "office",
    name: "chelles",
    title: (
      <p>
        Cabinet dentaire |<br /> Chelles
      </p>
    ),
    content: (
      <>
        {/* <h2>Espace de coworking et café associatif</h2> */}
        <h2>61 Avenue de la résistance | Chelles</h2>
        <h2>MOA : SCM TRISMUS</h2>
        <h2>Architecte : Neufville-Gayet Architectes</h2>
        <h2>Architecte d'Intérieur / MO / OPC : MAD design</h2>
        <br />
        <h2>
          Mission : Création d’un cabinet dentaire avec cabinet d’urgence, salle
          de soin et radio. Elaboration des plans techniques et suivi de
          chantier.
        </h2>
      </>
    ),
    mainImage: chellesImg,
    images: [
      {
        name: "chelles-1",
        url: "../images/chelles/chelles-1.jpg",
      },
      {
        name: "chelles-2",
        url: "../images/chelles/chelles-2.jpg",
      },
      {
        name: "chelles-3",
        url: "../images/chelles/chelles-3.jpg",
      },
      {
        name: "chelles-4",
        url: "../images/chelles/chelles-4.jpg",
      },
    ],
  },
  {
    identification: 31,
    categoryId: "office",
    name: "vocalcom",
    title: (
      <p>
        Vocalcom |<br /> Paris
      </p>
    ),
    content: (
      <>
        <h2>Bureaux</h2>
        <h2>25 rue de Balzac | Paris</h2>
        <h2>MOA : Vocalcom</h2>
        <h2>Architecte d'Intérieur / OPC : MAD design</h2>
        <br />
        <h2>
          Mission : Reprise, création et optimisation de plateau de bureau,
          accueil, cafétéria. Gestion des réseaux techniques, téléphonique et
          informatique. Phasage travaux suivant travail des équipes et
          déménagement des bureaux.
        </h2>
      </>
    ),
    mainImage: vocalcomImg,
    images: [
      {
        name: "vocalcom-1",
        url: "../images/vocalcom/vocalcom-1.jpg",
      },
      {
        name: "vocalcom-2",
        url: "../images/vocalcom/vocalcom-2.jpg",
      },
      {
        name: "vocalcom-3",
        url: "../images/vocalcom/vocalcom-3.jpg",
      },
      {
        name: "vocalcom-4",
        url: "../images/vocalcom/vocalcom-4.jpg",
      },
      {
        name: "vocalcom-5",
        url: "../images/vocalcom/vocalcom-5.jpg",
      },
    ],
  },
];

export default projetContent;
