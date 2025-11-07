console.log("loaded instructions...");
document.querySelector("#Spot-En-Myg").addEventListener("click", spotF);
function spotF() {
  console.log("spotF er loaded");

  document.querySelector("#nr_1").classList.add("my_scale1");

  document.querySelector(".info-text h2").textContent = "Spot En Myg";
  document.querySelector(".info-text #efficiency").innerHTML = `
  <ul>
    <li> Hold afstand på mindst 10 meter – myggen kan udlade elektrisk væske.</li>
    <li> Indberet straks via formularen eller kontakt beredskabet.</li>
    <li> Forsøg ikke at slå den ihjel – det kan udløse en kemisk reaktion.</li>
  </ul>
`;

  document.querySelector(".info-text #requirement").innerHTML = `
  <p>De såkaldte NVD-myg (Neon Vector Drones) er en genmodificeret art, som udsender svage elektriske impulser for at orientere sig. Ved kontakt med mennesker kan de overføre den såkaldte <strong>Neonpest-væske</strong>, som indeholder ustabile nanostoffer.</p>

  <p>Myndighederne fraråder enhver fysisk kontakt, da myggen kan reagere aggressivt på bevægelse, varme og lys. Hvis du observerer en enkelt myg, bør du straks fjerne dig fra området, undgå at bruge elektroniske enheder i nærheden, og derefter indberette hændelsen.</p>

  <p>En hurtig indberetning hjælper sundheds- og beredskabsmyndighederne med at kortlægge udbredelsen og forhindre yderligere smitte.</p>`;
}
document
  .querySelector("#Hvis-Du-Bliver-Stukket")
  .addEventListener("click", stukketF);

function stukketF() {
  console.log("stukketF er loaded");
  document.querySelector("#nr_2").classList.add("my_scale1");

  document.querySelector(".info-text h2").textContent =
    "Hvis Du Bliver Stukket";
  document.querySelector(".info-text #efficiency").innerHTML = `
    <ul>
      <li>Undgå panik og hold området i ro.</li>
      <li>Vask forsigtigt såret med koldt vand – undgå sæbe og sprit.</li>
      <li>Kontakt straks sundhedsberedskabet eller indberet via formularen.</li>
    </ul>
  `;

  document.querySelector(".info-text #requirement").innerHTML = `
    <p>Et stik fra en NVD-myg kan føre til elektrisk overledning i huden og midlertidig svimmelhed. Symptomerne viser sig som rødme, prikken eller små glødende sår.</p>
    <p>Hvis du oplever uregelmæssig puls, elektriske rystelser eller metallisk smag i munden, skal du straks søge lægehjælp. Myndighederne anbefaler, at du bliver i et roligt miljø, indtil assistance ankommer.</p>
  `;
}
document
  .querySelector("#Mine-Forholdsregler")
  .addEventListener("click", reglerF);

function reglerF() {
  console.log("reglerF er loaded");
  document.querySelector("#nr_3").classList.add("my_scale1");

  document.querySelector(".info-text h2").textContent = "Mine Forholdsregler";
  document.querySelector(".info-text #efficiency").innerHTML = `
    <ul>
      <li>Hold vinduer og døre lukkede efter mørkets frembrud.</li>
      <li>Undgå stillestående vand i hjemmet og omkring boligen.</li>
      <li>Bær tøj, der dækker arme og ben – især i kystområder.</li>
    </ul>
  `;

  document.querySelector(".info-text #requirement").innerHTML = `
    <p>Forebyggelse er den bedste beskyttelse mod NVD-25. Myggene tiltrækkes af varme, fugt og lys, så undgå at opholde dig udendørs i skumringen uden beskyttelse.</p>
    <p>Brug certificeret myggemiddel og undgå ultraviolet lys, som kan tiltrække de elektrisk responsive insekter.</p>
  `;
}
