import commits from "../../../shared/assets/img/Commits.png";

const Project1 = () => {
  return (
    <article className="info-cards">
      <h2>Project 1</h2>
      <h4>Discord Bots</h4>
      <p>
        Voor het eindproject informatica HAVO 5 moest je een keuze project maken. Omstreeks die tijd was ik
        thuis al een tijd bezig met het bouwen van Discord bots. Een Discord bot is een chatbot, voor het
        bel- en chatprogramma <a href="https://discord.com/" className="paragraph-link" target="_blank" rel="noreferrer">Discord</a>.
        Dit project voldeed aan de eisen, en heb deze daarom mijn eigen thuis project, gecombineerd met school.
      </p>
      <p>
        Ik heb er in totaal 16 gemaakt, elk hun eigen <a href="https://github.com/PuffinKwadraat/Discord-Bots/blob/main/bot-names.md" className="paragraph-link" target="_blank" rel="noreferrer">functie</a> categorie.
        Voor dit project heb ik toen ook een Raspberry Pi 4 aangeschaft, om de bots te hosten, en 24/7 aan te houden.
      </p>
      <p>
        Dit project heeft mij enorm veel geleerd. De algemene programmeer flow, GitHub en voornamelijk Javascript.
        Buiten deze 3, kwamen er ook heel veel andere services en programma's aan bod.
      </p>
      <p>
        Later ontdekte ik het programma <a href="https://www.docker.com/" className="paragraph-link" target="_blank" rel="noreferrer">functie</a>,
        een programma die ik gebruikte om ook de bots aan te houden. Dit programma gaf mij het voordeel dat het
        super efficient werkt, en ik niet de CMD line hoef te openen. Ik heb in 1 overzicht de status van al mijn
        bots. Hiermee werken was wel weer iets nieuws om te leren, maar het is gelukt.
      </p>
      <p>
        Het project is nu af, en bij gelegenheid patch ik dingen. Toevoegen van functies en onderhouden is
        stopgezet.
      </p>
      <h4>Statistieken</h4>
      <table>
        <thead>
          <tr>
            <th className="table-top-left">Type</th>
            <th className="table-top-right">Gegeven</th>
          </tr>
          <tr>
            <td>Hoeveelheid Bots</td>
            <td>16</td>
          </tr>
          <tr>
            <td>GH Repo Commits</td>
            <td>870+</td>
          </tr>
          <tr>
            <td>Start Project</td>
            <td>13 Maart 2021</td>
          </tr>
          <tr>
            <td>Einde Project</td>
            <td>September 2022</td>
          </tr>
          <tr>
            <td>Totale Duur</td>
            <td>18 maanden</td>
          </tr>
          <tr>
            <td>Pull Requests</td>
            <td>86</td>
          </tr>
          <tr>
            <td>Closed Issues</td>
            <td>11</td>
          </tr>
          <tr>
            <td>Open Issues</td>
            <td>8</td>
          </tr>
          <tr>
            <td>GitHub Bots</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Nieuwste Versie</td>
            <td>v9.0.1</td>
          </tr>
          <tr>
            <td className="table-bottom-left">Zie in actie</td>
            <td className="table-bottom-right"><a href="https://discord.gg/gBVFuBqENA" className="paragraph-link" target="_blank" rel="noreferrer">Discord server</a></td>
          </tr>
        </thead>
      </table>
      <h4>Commits op repository</h4>
      <img src={commits} alt="Commit Stats" className="commit-stat-picture" />
      <h4>Talen en Tools</h4>
      <ul className="bullet-list">
        <li>Javascript</li>
        <li>.ENV</li>
        <li>JSON</li>
        <li>Dockerfile</li>
        <li>D/G ignore</li>
        <li>Markdown</li>
        <br />
      </ul>
      <ul className="bullet-list">
        <li>Node.js</li>
        <li>NPM</li>
        <li>GitHub</li>
        <li>Docker</li>
        <li>MongoDB</li>
        <li>Robo3T</li>
      </ul>
    </article>
  )
}

export default Project1