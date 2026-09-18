// Source : Liste de passage 19_septembre_2026.docx, tableaux 1 a 15.
// Les references 1..119 restent celles de la liste precedente. Elles ne sont pas un ordre de passage.
// Reference interne 120 : binome ajoute en page 14. Son site d'origine n'est pas fourni.
(function () {
  "use strict";
  const timetable = [
  [10,"08h00 - 08h45",1],[1,"09h00 - 09h45",1],[11,"10h00 - 10h45",1],[9,"11h00 - 11h45",1],[6,"12h00 - 12h45",1],[7,"13h00 - 13h45",1],[2,"14h00 - 14h45",1],[3,"15h00 - 15h45",1],[4,"16h00 - 16h45",1],[5,"17h00 - 17h45",1],[8,"18h00 - 18h45",1],
  [14,"08h00 - 08h45",2],[15,"09h00 - 09h45",2],[12,"10h00 - 10h45",2],[13,"11h00 - 11h45",2],[19,"12h00 - 12h45",2],[20,"13h00 - 13h45",2],[21,"14h00 - 14h45",2],[16,"15h00 - 15h45",2],[17,"16h00 - 16h45",2],[18,"17h00 - 17h45",2],
  [22,"08h00 - 08h45",3],[23,"09h00 - 09h45",3],[24,"10h00 - 10h45",3],[25,"11h00 - 11h45",3],[26,"12h00 - 12h45",3],[27,"13h00 - 13h45",3],[28,"14h00 - 14h45",3],[29,"15h00 - 15h45",3],[30,"16h00 - 16h45",3],[31,"17h00 - 17h45",3],
  [34,"08h00 - 08h45",4],[38,"09h00 - 09h45",4],[32,"10h00 - 10h45",4],[33,"11h00 - 11h45",4],[35,"12h00 - 12h45",4],[36,"13h00 - 13h45",4],[37,"14h00 - 14h45",4],[39,"15h00 - 15h45",4],
  [44,"08h00 - 08h45",5],[46,"09h00 - 09h45",5],[43,"10h00 - 10h45",5],[45,"11h00 - 11h45",5],[47,"12h00 - 12h45",5],[48,"13h00 - 13h45",5],[40,"14h00 - 14h45",5],[41,"15h00 - 15h45",5],[42,"16h00 - 16h45",5],
  [53,"08h00 - 08h45",6],[49,"09h00 - 09h45",6],[50,"10h00 - 10h45",6],[51,"11h00 - 11h45",6],[52,"12h00 - 12h45",6],[54,"13h00 - 13h45",6],[55,"14h00 - 14h45",6],[56,"15h00 - 15h45",6],
  [60,"08h00 - 08h45",7],[63,"09h00 - 09h45",7],[58,"10h00 - 10h45",7],[61,"11h00 - 11h45",7],[62,"12h00 - 12h45",7],[57,"13h00 - 13h45",7],[59,"14h00 - 14h45",7],
  [64,"08h00 - 08h45",8],[65,"09h00 - 09h45",8],[66,"10h00 - 10h45",8],[67,"11h00 - 11h45",8],[68,"12h00 - 12h45",8],[69,"13h00 - 13h45",8],[70,"14h00 - 14h45",8],[71,"15h00 - 15h45",8],
  [72,"08h00 - 08h45",9],[76,"09h00 - 09h45",9],[77,"10h00 - 10h45",9],[75,"11h00 - 11h45",9],[74,"12h00 - 12h45",9],[73,"13h00 - 13h45",9],
  [82,"08h00 - 08h45",10],[78,"09h00 - 09h45",10],[79,"10h00 - 10h45",10],[80,"11h00 - 11h45",10],[81,"12h00 - 12h45",10],[83,"13h00 - 13h45",10],
  [89,"08h00 - 08h45",11],[86,"09h00 - 09h45",11],[85,"10h00 - 10h45",11],[84,"11h00 - 11h45",11],[87,"12h00 - 12h45",11],[88,"13h00 - 13h45",11],[90,"14h00 - 14h45",11],
  [98,"08h00 - 08h45",12],[91,"09h00 - 09h45",12],[92,"10h00 - 10h45",12],[93,"11h00 - 11h45",12],[94,"12h00 - 12h45",12],[95,"13h00 - 13h45",12],[96,"14h00 - 14h45",12],[97,"15h00 - 15h45",12],
  [106,"08h00 - 08h45",13],[101,"09h00 - 09h45",13],[102,"10h00 - 10h45",13],[103,"11h00 - 11h45",13],[99,"12h00 - 12h45",13],[100,"13h00 - 13h45",13],[104,"14h00 - 14h45",13],[105,"15h00 - 15h45",13],
  [107,"08h00 - 08h45",14],[120,"09h00 - 09h45",14],[108,"10h00 - 10h45",14],[109,"11h00 - 11h45",14],[110,"12h00 - 12h45",14],[111,"13h00 - 13h45",14],[112,"14h00 - 14h45",14],
  [113,"08h00 - 08h45",15],[114,"09h00 - 09h45",15],[115,"10h00 - 10h45",15],[116,"11h00 - 11h45",15],[117,"12h00 - 12h45",15],[118,"13h00 - 13h45",15],[119,"14h00 - 14h45",15]
  ];
  if (!D.some(r => r.id === 120)) D.push({id:120,n:["Awa Dramane TRAORE","Binta TOURE"],room:"SALLE 14 - A6",site:null,floor:"1er étage"});
  const byId = new Map(timetable.map(([id,slot,page]) => [id,{slot,page}]));
  if (D.length !== 120 || byId.size !== 120 || D.some(r => !byId.has(r.id))) throw new Error("Programme incomplet : publication interrompue.");
  for (const r of D) {
    const s = byId.get(r.id);
    r.slot = s.slot;
    r.sourcePage = s.page;
    r.date = "2026-09-19";
    r.roomNumber = s.page;
    const code = r.room.match(/\b([ABC])\d+\b/i);
    // Niveau A=1, B=2, C=3. Les deux salles nommees sont au 2e etage,
    // d'apres la precision explicite de Chamsoudine THIENTA.
    const level = code ? ({A:1,B:2,C:3}[code[1].toUpperCase()]) : 2;
    r.floorNumber = level;
    r.floor = level === 1 ? "1er étage" : level + "e étage";
  }
  const hint = document.querySelector(".hint");
  if (hint) hint.textContent = "Recherche sans distinction de majuscules ni d'accents · 120 dossiers · horaires inclus";
})();

(function(){const style=document.createElement("style");style.id="horaires-layout";style.textContent=".roomgrid{grid-template-columns:repeat(2,minmax(0,1fr))}.fact{min-width:0}.fact strong{overflow-wrap:anywhere}.fact:last-child{grid-column:auto}.programme-note{font-size:11px;color:var(--muted);margin:15px 0 0}.programme-note a{color:inherit}.orientation{margin-top:14px;font-size:13px;color:var(--muted)}.orientation summary{cursor:pointer;padding:8px 0;color:var(--ink)}.orientation p{margin:8px 0;line-height:1.6}.result-count{font-size:12px;color:var(--muted)}@media(max-width:350px){.fact{padding:11px}.fact strong{font-size:13px}.fact.room strong{font-size:15px}}";document.head.append(style);document.getElementById("q").setAttribute("aria-label","Rechercher votre nom ou celui de votre binôme");})();
"use strict";
const q=document.getElementById('q');
const out=document.getElementById('results');
const norm=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ').trim();
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
function render(){
  out.replaceChildren();
  const terms=norm(q.value).split(' ').filter(Boolean);
  if(!terms.length){out.append(el('div','empty','Commencez à taper votre nom pour afficher votre horaire et votre salle.'));return;}
  const found=D.filter(r=>terms.every(t=>norm(r.n.join(' ')).includes(t))).sort((a,b)=>a.slot.localeCompare(b.slot)||a.roomNumber-b.roomNumber||a.id-b.id);
  if(!found.length){out.append(el('div','empty','Aucun étudiant trouvé. Vérifiez l’orthographe ou essayez le nom de votre binôme.'));return;}
  out.append(el('p','result-count',found.length+' dossier'+(found.length>1?'s':'')+' · Programme du 19 septembre 2026'));
  for(const r of found){
    const card=el('article','card');
    const top=el('div','top');
    top.append(el('span','num',r.id===120?'DOSSIER AJOUTÉ AU PROGRAMME':'RÉFÉRENCE N° '+r.id),el('span','site','SITE D’ORIGINE · '+(r.site||'Non précisé')));
    const names=el('h2','names');r.n.forEach(n=>names.append(el('span','',n)));
    const grid=el('div','roomgrid');
    for(const [label,value,cls] of [['Horaire de passage',r.slot,'fact room'],['Salle de soutenance',r.room,'fact room'],['Étage',r.floor,'fact'],['Lieu','Bacodjicoroni','fact']]){
      const fact=el('div',cls);fact.append(el('label','',label),el('strong','',value));grid.append(fact);
    }
    const note=el('p','programme-note','Horaire prévu dans le programme transmis par la direction pédagogique, page '+r.sourcePage+'. La référence n’est pas un ordre de passage.');
    const path=el('details','orientation');path.append(el('summary','','Repères pour rejoindre cet étage'));
    path.append(el('p','','Depuis l’entrée de l’école, prendre l’escalier de droite puis monter au '+r.floor+'. Rechercher le repère de votre salle : '+r.room+'.'));
    path.append(el('p','programme-note','Repères d’étage communiqués pour cette liste. Le côté du couloir et le trajet porte à porte ne sont pas encore cartographiés.'));
    card.append(top,names,grid,note,path);out.append(card);
  }
}
q.addEventListener('input',render);
render();
