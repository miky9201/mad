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
        <li>L’élaboration d’un concept architectural,</li>
        <br />
        <li>Un travail sur l’ergonomie et la fonctionnalité de l’espace,</li>
        <br />
        <li>La prise en compte du lieu, de la lumière, de l’acoustique,</li>
        <br />
        <li>
          La prise en compte, dans nos dessins, de la réglementation PMR ainsi
          que de la réglementation sécurité incendie,
        </li>
        <br />
        <li>Le dépôt des dossiers auprès de l’administration concernée,</li>
        <br />
        <li>La réalisation des plans et visuels 3D.</li>
        <br />
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
          Rédaction des pièces écrites et élaboration du budget estimatif,
        </li>
        <br />
        <li>Consultation et désignation des entreprises,</li>
        <br />
        <li>
          Coordination des bureaux d'études et prise de décisions techniques,
        </li>
        <br />
        <li>Élaboration des ordres de service et suivi financier,</li>
        <br />
        <li>Organisation de la réception des travaux.</li>
        <br />
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
          garantir une progression efficace des travaux,
        </li>
        <br />
        <li>
          Il assure une liaison et une coordination fluides avec l'ensemble des
          intervenants tout au long du projet,
        </li>
        <br />
        <li>
          Il coordonne l'avancement des travaux en veillant à ce que les
          ouvrages réalisés soient conformes aux normes et aux exigences du
          projet,
        </li>
        <br />
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
          coordination des réunions avec les parties prenantes,
        </li>
        <br />
        <li>
          Aide à la négociation des contrats de travaux et définition du budget
          total de l'opération,
        </li>
        <br />
        <li>
          Garantie du respect des délais contractuels et production de rapports
          financiers périodiques,
        </li>
        <br />
        <li>
          Soutien dans les procédures de clôture du projet, y compris la levée
          des réserves,
        </li>
        <br />
        <li>
          Établissement et transmission des décomptes généraux définitifs,
        </li>
        <br />
        <li>
          Suivi de la production des documents relatifs aux ouvrages exécutés.
        </li>
      </p>
    ),
  },
];

export default missionContent;
