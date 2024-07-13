import logoC from "../assets/images/logo-c.png";
import logoE from "../assets/images/logo-e.png";
import logoO from "../assets/images/logo-o.png";
import logoA from "../assets/images/logo-a.png";

const missionContent = [
  {
    name: "moec",
    navTitle: (
      <p>
        MOEC <br /> CONCEPTION |
      </p>
    ),
    title: ( 
      <div className="title-content">
        <img src={logoC} alt="moec-conception" />
        <h2>MAITRE D’OEUVRE CONCEPTEUR |</h2>
      </div>
    ),
    content: (
      <p>
        L’équipe MAD Design entreprend : <br /> <br />
        <li>L’élaboration d’un concept architectural</li>
        <li>Un travail sur l’ergonomie et la fonctionnalité de l’espace</li>
        <li>La prise en compte du lieux, de la lumière, de l’acoustique,</li>
        <li>
          La prise en compte aussi dans nos dessins de la Règlementation PMR
          ainsi que de la règlementation sécurité incendie
        </li>
        <li>Le dépôt des dossiers auprès de l’administration concernée</li>
        <li>La réalisation des plans et visuels 3D.</li>
      </p>
    ),
  },
  {
    name: "moex",
    navTitle: (
      <p>
        MOEX <br /> EXECUTION |
      </p>
    ),
    title: ( 
      <div className="title-content">
        <img src={logoE} alt="moec-execution" />
        <h2>MAITRES D’OEUVRE EXECUTION |</h2>
      </div>
    ),
    content: (
      <p>
        Le maître d'œuvre d'exécution chez MAD Design joue un rôle essentiel
        dans la gestion technique des projets : <br /> <br />
        <li>
          Rédaction des pièces écrites et élaboration du budget estimatif.
        </li>
        <li>Consultation et désignation des entreprises.</li>
        <li>
          Coordination des bureaux d'études et prise de décisions techniques.
        </li>
        <li>Élaboration des ordres de services et suivi financier.</li>
        <li>Organisation de la réception des travaux.</li>
      </p>
    ),
  },
  {
    name: "opc",
    navTitle: "OPC |",
    title: ( 
      <div className="title-content">
        <img src={logoO} alt="moec-organisation" />
        <h2>ORGANISATION PILOTAGE ET COORDINATION |</h2>
      </div>
    ),
    content: (
      <p>
        Chez MAD Design, notre OPC joue un rôle crucial dans la gestion de nos
        chantiers : <br /> <br />
        <li>
          Il élabore minutieusement le planning d'étude et d'exécution pour
          garantir une progression efficace des travaux.
        </li>
        <li>
          Il assure une liaison et une coordination fluides avec l'ensemble des
          intervenants tout au long du projet.
        </li>
        <li>
          Il coordonne l'avancement des travaux en veillant à ce que les
          ouvrages réalisés soient conformes aux normes et aux exigences du
          projet.
        </li>
        <li>
          Enfin, il procède à la réception et à la clôture de l'opération,
          assurant ainsi la qualité et la complétude du projet finalisé.
        </li>
      </p>
    ),
  },
  {
    name: "amo",
    navTitle: "AMO |",
    title: ( 
      <div className="title-content">
        <img src={logoA} alt="moec-assistance" />
        <h2>ASSISTANT MAITRE OUVRAGE |</h2>
      </div>
    ),
    content: (
      <p>
        Pour l'Assistant Maître d'Ouvrage (AMO) chez MAD Design, son rôle est
        central dans le suivi et la gestion globale des projets : <br /> <br />
        <li>
          Assistance durant les phases d'études et de travaux, incluant la
          coordination des réunions avec les parties prenantes.
        </li>
        <li>
          Aide à la négociation des contrats de travaux et définition du budget
          total de l'opération.
        </li>
        <li>
          Garantie du respect des délais contractuels et production de rapports
          financiers périodiques.
        </li>
        <li>
          Soutien dans les procédures de clôture du projet, y compris la levée
          des réserves.
        </li>
        <li>
          Établissement et transmission des décomptes généraux définitifs.
        </li>
        <li>
          Suivi de la production des documents relatifs aux ouvrages exécutés.
        </li>
      </p>
    ),
  },
];

export default missionContent;
