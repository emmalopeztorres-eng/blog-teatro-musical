const mediaItems=[
{title:"21 Chump Street",version:"This American Life · Live at BAM",type:"Fragmento oficial",source:"This American Life",videoId:"ELBGa6-uOhc",link:"https://www.youtube.com/watch?v=ELBGa6-uOhc",linkLabel:"Abrir fragmento en YouTube",description:"Fragmento musical publicado por This American Life, con registro de la función en BAM. El enlace lleva al canal que publicó la pieza.",status:"Disponible"},
{title:"A Little Night Music",version:"Tráiler de Opera North",type:"Tráiler",source:"Opera North",videoId:"HmESMLjbxWk",link:"https://www.youtube.com/watch?v=HmESMLjbxWk",linkLabel:"Abrir tráiler en YouTube",description:"Avance de una producción de Opera North. No es la grabación por actos de los enlaces recibidos.",status:"Disponible"},
{title:"Amélie",version:"Amélie the Musical · tráiler",type:"Tráiler",source:"Amélie the Musical",videoId:"IPFkSuGVUYQ",link:"https://www.youtube.com/watch?v=IPFkSuGVUYQ",linkLabel:"Abrir tráiler en YouTube",description:"Tráiler promocional de la adaptación musical. El recurso seleccionado es una pieza de presentación, no una función completa.",status:"Disponible"},
{title:"Anastasia",version:"Teaser de Broadway",type:"Teaser",source:"Anastasia The Musical",videoId:"wjAx__D2eeM",link:"https://www.youtube.com/watch?v=wjAx__D2eeM",linkLabel:"Abrir teaser en YouTube",description:"Teaser publicado por el canal de Anastasia The Musical para la producción de Broadway.",status:"Disponible"},
{title:"A New Brain",version:"Producción Encores! Off-Center · 2015",type:"Avance y clip",source:"Concord Theatricals",videoId:"Aeu3KaRDaeg",link:"https://www.youtube.com/watch?v=Aeu3KaRDaeg",linkLabel:"Ver avance de New York City Center",extraLinks:[{label:"Ver otro clip de A New Brain",url:"https://www.youtube.com/watch?v=zUuL8eefk60"}],description:"La página del titular de derechos identifica los videos como material de la producción de New York City Center de 2015, protagonizada por Jonathan Groff.",status:"Disponible"},
{title:"Avenue Q",version:"Tráiler del revival de West End · 2026",type:"Tráiler",source:"Official London Theatre",videoId:"80r3Ilfurfs",link:"https://www.youtube.com/watch?v=80r3Ilfurfs",linkLabel:"Abrir tráiler en YouTube",description:"Avance oficial del revival londinense de 2026. No corresponde a una grabación del elenco original de Broadway.",status:"Disponible"},
{title:"Bare: A Pop Opera",version:"Los Angeles Revival · material del titular de derechos",type:"Tráiler y material del musical",source:"Theatrical Rights Worldwide",link:"https://www.theatricalrights.com/show/bare/",linkLabel:"Ver tráiler y material del musical",description:"Página del representante de licencias que reúne el tráiler y material promocional de Bare. La ficha no afirma que se trate de la grabación completa del revival de Los Ángeles.",status:"Disponible"},
{title:"Beetlejuice",version:"Tráiler y clips de Broadway",type:"Clips oficiales",source:"Beetlejuice Broadway",link:"https://beetlejuicebroadway.com/gallery",linkLabel:"Ver videos en el sitio oficial",description:"Galería audiovisual publicada en el sitio oficial de la producción de Broadway.",status:"Disponible"},
{title:"Beetlejuice",version:"Edición de varias tomas",type:"Grabación recibida · revisión pendiente",source:"Enlace recibido",link:null,description:"La edición de varias tomas queda en revisión porque no se pudo comprobar autorización para publicar la grabación. Se conserva la ficha para identificar el material recibido.",status:"Pendiente"},
{title:"Be More Chill",version:"Primer vistazo a la producción Off-Broadway",type:"Clip promocional",source:"Be More Chill",videoId:"t5Bgtcle4EI",link:"https://www.youtube.com/watch?v=t5Bgtcle4EI",linkLabel:"Abrir clip en YouTube",description:"Primer vistazo promocional publicado por el canal de Be More Chill. Los enlaces a funciones completas que llegaron no se reproducen en esta sección.",status:"Disponible"},
{title:"Billy Elliot",version:"Tráiler del regreso al West End · 2027",type:"Tráiler",source:"West End Theatre",link:"https://www.westendtheatre.com/351489/news/show-photos/videos/watch-the-new-trailer-for-billy-elliot-the-musical-west-end/",linkLabel:"Ver el tráiler del revival",description:"Avance del regreso de Billy Elliot al West End, anunciado para 2027. Es un tráiler de esa nueva temporada, no el registro en vivo enviado.",status:"Disponible"},
{title:"Bloody Bloody Andrew Jackson",version:"Videos y cobertura de Broadway",type:"Clips y entrevistas",source:"Broadway.com",link:"https://www.broadway.com/shows/bloody-bloody-andrew-jackson/videos/",linkLabel:"Ver videos de la producción",description:"Archivo audiovisual de Broadway.com con clips, entrevistas y cobertura de la producción.",status:"Disponible"},
{title:"Bob Esponja: el musical",version:"Presentación oficial de la obra",type:"Video de presentación",source:"SpongeBob SquarePants Official",videoId:"pjQQNZ2yaOE",link:"https://www.youtube.com/watch?v=pjQQNZ2yaOE",linkLabel:"Abrir video en YouTube",description:"Video de presentación publicado por el canal oficial de SpongeBob SquarePants, con integrantes del equipo creativo y adelantos musicales.",status:"Disponible"},
{title:"Cabaret",version:"Donmar Warehouse · producción de 1993",type:"Ficha de archivo",source:"Donmar Warehouse",link:"https://www.donmarwarehouse.com/past-productions-2/",linkLabel:"Consultar archivo del Donmar",description:"El archivo institucional permite consultar la producción de 1993. No se encontró un visionado público autorizado para enlazar desde esta ficha.",status:"Archivo"}
];

const originalItems=mediaItems.map(item=>({...item,region:"Internacional"}));
mediaItems.length=0;
mediaItems.push(...originalItems);
function addVideo({title,id,region,type,source,description,link=true,version=""}){
  const item={title,version,type,source,videoId:id,region,description,status:link?"Disponible":"Pendiente de autorización"};
  if(link){item.link="https://www.youtube.com/watch?v="+id;item.linkLabel="Abrir video individual"}
  mediaItems.push(item);
}
[
["Entrevista a Alan Madanes · video 1","j35M9XvgkRw"],
["Entrevista a Alan Madanes · video 2","LahoTEbFFzE"],
["Entrevista a Alan Madanes · video 3","WPy_gOuOnvk"]
].forEach(([title,id],i)=>addVideo({title,id,region:"Argentina",type:"Entrevista",source:"Enlace recibido",version:"Entrevista a Alan Madanes",description:"Video individual de la entrevista a Alan Madanes, incluido en el documento enviado ("+(i+1)+" de 3)."}));
[
["BUSCANDO A TRACY | Camino a Hairspray: Capítulo #1","XjseYpssJv0"],
["¿TIENEN EL TALENTO NECESARIO? | Camino a Hairspray: Capítulo #2","JzRhuMMzqCE"],
["ASÍ FUE LA TRANSFORMACIÓN DE BETULAR | Camino a Hairspray: #3","EVc6yClixUo"],
["ENCONTRAMOS A TRACY | Camino a Hairspray #4","Gvj3Td4UjvY"],
["ÚLTIMO ENSAYO ANTES DEL ESTRENO | Camino a Hairspray #5","gEU5iZfte4E"],
["ASÍ FUE LA PRIMERA FUNCIÓN DE HAIRSPRAY | Camino a Hairspray","kal1wU1CeMs"]
].forEach(([title,id])=>addVideo({title,id,region:"Argentina",type:"Proceso de producción",source:"Camino a Hairspray",description:"Episodio individual de la serie Camino a Hairspray, incluido en el documento enviado."}));
[
["ALEJANDRA PERLUSKY: una vida dedicada al Musical - Entrevista Teatro Musical #29","I_I79pEDUls"],
["DARÍO PETRUZIO: de Fiebre de Sábado por la Noche a Formar Artistas - Entrevista Teatro Musical #28","iRvtcgCZdCo"],
["OSCAR LAJAD: El GARDEL del Musical Moderno - Entrevista Teatro Musical #27","uvhhCbty-eE"],
["ANDREW MACBEAN: Entre West End y Broadway - Entrevista Teatro Musical #26","SKUqsWCTqao"],
["BONO MAGIC (Juan Esteban Bonora): INFLUENCER - Entrevista Teatro Musical #25","tQCfVMnk1-A"],
["Del COLÓN a PREMIOS GEA por DESPERTAR DE PRIMAVERA: OCTAVIO MURILLO - Entrevista Teatro Musical #24","j4CrOpafS_Y"],
["SILVIA LUCHETTI: ESPAÑA, ARGENTINA Y EL MUSICAL - Entrevista Teatro Musical #23","9Lf0mn4D8Ug"],
["LEONARDO PARDO: ROSARIO, LA IA Y EL NEGOCIO DEL TEATRO - Entrevista Teatro Musical #22","0qW5pEGUFNM"],
["JOAQUIN CATARINEU: Hugo Midón y el Teatro Argentino - Entrevista Teatro Musical #21","Yfuwwp8OSc4"],
["NICOLÁS MANASSERI: Psicología y Teatro Musical Argentino - Entrevista Teatro Musical #20","KliDaqO8adc"],
["NICOLÁS SOUSA: Con Más Trabajos que Años de Vida - Entrevista Teatro Musical #19","BIAZCgpU4vE"],
["IÑAKI AGUSTIN: Entre Nueva York, Madrid y Argentina - Entrevista Teatro Musical #18","GL2oRB7i1KY"],
["AZUL SIERRA: Broadway Fan, Coach Vocal y Audiciones - Entrevista Teatro Musical #17","EiSTkdOlFAM"],
["JAZMÍN LORENZO: 3 Oros en la Performer Cup Argentina - Entrevista Teatro Musical #16","WIVK9F4UVAg"],
["PABLO GORLERO: Premios Hugo, Comedia Musical y Cantantes que Actúan - Entrevista Teatro Musical #15","1Wv-G_SufFg"],
["MARIANO TACCAGNI: Drácula, Inteligencia Artificial y Actores - Entrevista Teatro Musical #14","82ipgDbhxPc"],
["MATIAS PRIETO PECCIA: Dragearse, Industria Nacional y el Teatro - Entrevista Teatro Musical #13","LncdhNNjbfE"],
["SERGIO LOMBARDO: Famosos, Dirección y Puntualidad - Entrevista Teatro Musical #12","Y89tidOOxzQ"],
["COMO CREAR UN MUSICAL - PABLO FLORES TORRES en una Entrevista GEA Musical","rPkkH3IyGKU"],
["FACUNDO CICCIU: Dirigir Música, Componer e Tocar en Vivo - Entrevista Teatro Musical #10","EvJbSyY0AVE"],
["MARIAN LORENA VAZQUEZ: La Discapacidad, Venezuela y el Teatro Musical - Entrevista Teatro Musical #9","6iNZEoJSr3g"],
["MARCELO CABALLERO: Trabajar con Famosos, Megaéxitos y Dirección - Entrevista Teatro Musical #8","p-Q_JJZigf0"],
["DIEGO ORIA: La Parka, Éxito en el Off e Internacionalización - Entrevista Teatro Musical #7","ra8Vyws7G0Y"],
["HERNÁN ESPINOSA: Córdoba, Creación y Federalismo - Entrevista Teatro Musical #6","b2EBZ_AJZYE"],
["GASTÓN BRIAN GLIKSZTEIN: Broadway, Teatro Judío y Periodismo Teatral - Entrevista Teatro Musical #5","5b77ZewHQTY"],
["PEDRO VELÁZQUEZ: Chicago, Folklore LGBT y Teatro Off - Entrevista Teatro Musical #4","l-9i68k9rWY"],
["IGNACIO NACHO OLIVERA: Ternura, Dramaturgia y Teatro Off - Entrevista Teatro Musical #3","X4bB2a-SZJc"],
["EMMANUEL DEGRACIA: Versatilidad, Mil Trabajos e Interpretación - Entrevista Teatro Musical #2","svd4PAbBObQ"],
["JUAN PABLO SCHAPIRA: Música, Comedia y Ternura - Entrevista Teatro Musical #1","1yYkmT9goJI"],
["MARIANO CONDOLUCI: La Desgracia, Jennifer López y Mucho Musical - Entrevista Teatro Musical #30","hSNLXoXOfEM"],
["GABY GOLDMAN: Música en vivo en el Musical - Entrevista Teatro Musical #31","8iWHFVkMxT4"]
].forEach(([title,id])=>addVideo({title,id,region:"Argentina",type:"Entrevista",source:"GEA Musical",description:"Entrevista en video publicada por GEA Musical. Ficha atribuida a la fuente; abre el episodio individual."}));
[
["HEATHERS REVIVAL: ¿VALE LA PENA? - RESEÑA BROADWAY","2DpR347DSMA","Internacional"],
["THE GREAT GATSBY!: ¿VALE LA PENA? - RESEÑA BROADWAY","05dtWXBfgQM","Internacional"],
["TWO STRANGERS: ¿VALE LA PENA? - RESEÑA BROADWAY","enAe3Bdcm3E","Internacional"],
["SCHMIGADOON!: ¿VALE LA PENA? - RESEÑA BROADWAY","Ny-ozn9VXQI","Internacional"],
["THE LOST BOYS: ¿VALE LA PENA? - RESEÑA BROADWAY","l1HA47MCa64","Internacional"],
["BILLY ELLIOT ARGENTINA: ¿VALE LA PENA?","gL7X0RVxXik","Argentina"],
["RADA en CHARLIE Y LA FÁBRICA...: ¿VALE LA PENA?","a_kd9UXjW0E","Argentina"],
["HAIRSPRAY CON BETULAR: ¿VALE LA PENA?","u10oNwl-Bjk","Argentina"],
["RESEÑA ANNIE ARGENTINA: ¿VALE LA PENA?","owIzImxtnls","Argentina"],
["RESEÑA COMPANY: ¿VALE LA PENA?","FF3TlSi95ng","Argentina"],
["RESEÑA ALBERDI MUSICAL: ¿VALE LA PENA?","WA19a1D12jo","Argentina"],
["¿VALE LA PENA NEXT TO NORMAL IMMERSIVE?","1yRBOfT881c","Argentina"],
["RESEÑA THE BOOK OF MORMON ESPAÑA","5ZEaWMWc0E8","Internacional"],
["RESEÑA GREASE ESPAÑA","FjsWKC8lrMQ","Internacional"],
["RESEÑA MAR I CEL BARCELONA","JEhZcKV7-JA","Internacional"],
["RESEÑA DESPERTAR DE PRIMAVERA POR FER DENTE","iKMdRXvz7lE","Argentina"],
["RESEÑA LOS CHICOS DEL CORO ESPAÑA","8flYOiXuH5A","Internacional"],
["RESEÑA LA SIRENITA ARGENTINA","-Z7DZqKdjNU","Argentina"],
["RESEÑA ASESINATO PARA DOS ESPAÑA","kuu8tfCNsNg","Internacional"],
["RESEÑA LOS PILARES DE LA TIERRA EL MUSICAL","-nkyhrZxy-I","Internacional"],
["RESEÑA EL FANTASMA DE LA ÓPERA ESPAÑA","AUqMdVQSSAw","Internacional"],
["RESEÑA MAMMA MIA! con MARISOL OTERO","0iXIG9giAXk","Argentina"],
["WICKED: RESEÑA DE LA PELÍCULA","x6A7HfRQfSo","Internacional"],
["Los Productores: Reseña Sin Crítica de Teatro Musical","DJvF44fcI6c","Argentina"],
["SPAMALOT: RESEÑA DE TEATRO MUSICAL","_kZfzrW4fBU","Argentina"],
["Little Shop fo Horrors vs La Tiendita del Horror: Reseña Broadway y Argentina","ZRMoQBGK5NQ","Internacional"],
["Some Like It Hot: Reseña Broadway","njOWGVMo9UY","Internacional"],
["Shucked: Reseña Broadway","rEuvG8tuc_0","Internacional"],
["Parade: Reseña Broadway","Tsk1xbA5vsQ","Internacional"],
["Once Upon A One More Time: Reseña Broadway","FqgdPAtUZpI","Internacional"],
["Kimberly Akimbo: Reseña Broadway","jwOcb_HJgUM","Internacional"],
["Camelot: Reseña Broadway","Ay15KJZTkAQ","Internacional"],
["Matilda: Reseña Teatro Musical","Aqd8hFyhHuc","Argentina"],
["Heathers: Reseña Teatro Musical","8N9MXELUyYA","Argentina"],
["La Desgracia: Reseña Teatro Musical","f5IhE4uHK14","Argentina"],
["El Funeral de los Objetos: Reseña Teatro Musical","Z4GV5svZztY","Argentina"],
["Como Todos los Dias (Ordinary Days): Reseña Teatro Musical","F4BKYP00PZ8","Argentina"],
["Querido Evan (Dear Evan Hansen Argentina): Reseña Teatro Musical","ODqRcGwbAy8","Argentina"],
["Mujercitas (Little Women): Reseña Teatro Musical","55Mv5LXDyPU","Argentina"],
["Atte Tus Vecinos: Reseña Teatro Musical","91Jkg6Vox9I","Argentina"]
].forEach(([title,id,region])=>addVideo({title,id,region,type:"Reseña en video",source:"GEA Musical",description:"Reseña audiovisual publicada por GEA Musical. MTM atribuye el contenido a su canal y enlaza al video individual."}));
[
["La Bella y La Bestia - Buenos Aires, 1999 (Obra completa)","7zySaxJBd_g","Marisol Otero Oficial","Argentina",false],
["Rita la Salvaje, Teatro Maipo","M9QFkI0TENY","MaipoVideos","Argentina",true],
["CABARET Argentina 2007","GN6Qr70DV78","ALEJANDRA RADANO Teatro Musical","Argentina",false],
["SUEÑOS, el Musical","8BLg6pMDTSg","Salesianos España","Internacional",true],
["Lolita Cortés - La dulce CARIDAD","h8co5NTAfHA","Lolita Cortés ♡Fan♡","Internacional",false],
["HAIR - 2019 - Buenos Aires - Konex - Función completa. Agosto","VKyQQZmOoa4","Pablo Gorlero","Argentina",false],
["EL CASCANUECES, UN MUSICAL NAVIDEÑO","2XGgdnI6pTg","Hernán Espinosa","Argentina",false],
["...Y un día Nico se fue | El musical","kWmvbxCaqt4","Rimas Producciones","Argentina",true],
["BARE, una ópera pop (Argentina)","WKBqERbHg6w","Pedro Velázquez","Argentina",false],
["BANUEV - “JESÚS DE NAZARETH, LA PASIÓN” en Teatro Opera 2022","GsHefwTT9Bg","BANUEV","Argentina",true],
["LOS TRES MOSQUETEROS, el musical (COMPLETO)","NLOJMv4yVms","Hernán Espinosa","Argentina",false],
["La Celia Show Completo","o8xzZhIgqO8","MaipoVideos","Argentina",true],
["JOROBADO de PARIS acto1 CIBRIAN - MAHLER LUNA PARK ABRIL 2024","RmEsRXYMCX8","Paula Barbii","Argentina",false],
["#BaCulturaEnCasa - Y un día Nico se fue","8TpTGITe9n8","BA Cultura","Argentina",true],
["FOREVER YOUNG HD 2014","DQ906UtpSUI","Matías Sanchez de Bustamante","Argentina",false],
["Jesús de Nazareth, La Pasión - Ángel Mahler y Carlos Abregú","DeNoQUBnhJI","Angel Mahler","Argentina",true],
["FRANKENSTEIN en el Teatro del Libertador","fr-njPqPcIg","Hernán Espinosa","Argentina",false],
["Gordofobia, a rodar mi vida · [Jukebox Musical] · Show Completo","tw6OhlrHzDg","Matcha Contenidos","Argentina",true],
["Zorba el Griego - Teatro El Nacional - Raúl Lavié - 2003 - Buenos Aires","CWNA3a46Xrc","Ariel Altieri","Argentina",false],
["Jose Maria Alvarez - Sadica","NJycDAITaI4","Jose Maria Alvarez","Argentina",false],
["EL JOROBADO DE PARIS acto2 CIBRIAN - MAHLER 2024 ESTADIO LUNA PARK","5JiHPHmUSAk","Paula Barbii","Argentina",false],
["EL GRINGO, EL MUSICAL DE TOSCO (completo)","pE5Un7hjhmI","El Gringo el musical de Tosco","Argentina",false],
["Lucila Gandolfo en Una película sin Julie en el teatro Maipo 2024","mDKKfJO8wOU","Miguel Ale Granado","Argentina",false],
["JEKYLL&HYDE 2017 HD","OeKBdNE8AWo","Matías Sanchez de Bustamante","Argentina",false],
["COMPANY ALTA","RhMULjax1PI","Matías Sanchez de Bustamante","Argentina",false],
["COMPAÑERA EVITA (obra completa)","QAXtiMiHeHM","Hernán Espinosa","Argentina",false],
["LA PELADA DE LA CAÑADA, UN THRILLER MUSICAL Obra completa","4P0oXCbQQ2k","Hernán Espinosa","Argentina",false],
["Dracula el musical, Interpretando al conde.","5J7HmSeUZDU","Damian Iglesias","Argentina",false],
["LA MASCARA DE HIERRO HD 2014","DjXy_iTNaiE","Matías Sanchez de Bustamante","Argentina",false],
["LORD, el musical","PwXTGeWTh0o","Matías Sanchez de Bustamante","Argentina",false],
["CABARET DE LOS HOMBRES","fhDxtBnvkSk","Matías Sanchez de Bustamante","Argentina",false],
["Gomez Brothers (completa) CCK","qbMw8vBj018","Ramiro Pettina","Argentina",false],
["SMOKEY JOES CAFE 2016","JgIvqPJTvf8","Matías Sanchez de Bustamante","Argentina",false],
["Smokey Joes Cafe 2015","sJEXSYRHmKo","Matías Sanchez de Bustamante","Argentina",false],
["Jesucristo Superstar - Musical - Spanish","97zT-_cbMdo","GoseAn","Internacional",false],
["Mar y cielo - Teatro Musical - DAGOLL DAGOM, TVE (versión en castellano)","4FTd95ipduU","GoseAn","Internacional",false],
["Los miserables, ... Más que un musical una leyenda - Musical","iK2xSaSA8f8","GoseAn","Internacional",false]
].forEach(([title,id,uploader,region,link])=>addVideo({
  title,id,region,type:"Registro completo",source:"Canal: "+uploader,
  link,version:"Material listado por GEA Musical",
  description:link
    ?"Registro completo listado por GEA Musical y publicado en el canal "+uploader+". Enlace al video individual."
    :"Referencia a un registro completo listado por GEA Musical. El video queda sin enlace hasta verificar autorización de publicación en la cuenta de origen."
}));
const mediaGrid=document.getElementById("mediaGrid");
const mediaSearch=document.getElementById("mediaSearch");
const typeFilter=document.getElementById("typeFilter");
const sourceFilter=document.getElementById("sourceFilter");
const regionFilter=document.getElementById("regionFilter");
const mediaCount=document.getElementById("mediaCount");
const mediaEmpty=document.getElementById("mediaEmpty");
const loadMore=document.getElementById("loadMore");
let visibleLimit=24;
const escapeHtml=value=>String(value??"").replace(/[&<>\"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[ch]));
function fillOptions(select,values){[...new Set(values)].sort((a,b)=>a.localeCompare(b,"es")).forEach(value=>{const option=document.createElement("option");option.value=value;option.textContent=value;select.appendChild(option)})}
function resourceLinks(item){const all=[...(item.link?[{label:item.linkLabel||"Abrir recurso original",url:item.link}]:[]),...(item.extraLinks||[])];return all.map(resource=>'<a class="av-resource" href="'+escapeHtml(resource.url)+'" target="_blank" rel="noopener noreferrer">'+escapeHtml(resource.label)+' <span>↗</span></a>').join("")}
function cardMarkup(item,index){
  const pending=item.status==="Pendiente"||item.status==="Pendiente de autorización";
  const statusClass=pending?" pending":"";
  const badge=pending?"En revisión":item.status==="Archivo"?"Archivo institucional":"Fuente externa";
  const visual='<div class="av-visual" aria-hidden="true"><span class="av-visual-mark">'+escapeHtml("MTM")+'</span><span class="av-visual-caption">MATERIAL AUDIOVISUAL · '+escapeHtml(item.type.toLocaleUpperCase("es"))+'</span></div>';
  const noResource=pending?'<div class="av-no-resource">Enlace individual pendiente de autorización verificable.</div>':item.status==="Archivo"?'<div class="av-no-resource">Ficha institucional disponible; sin visionado público autorizado.</div>':"";
  const regionBadge='<span class="av-badge region">'+escapeHtml(item.region||"Internacional")+'</span>';
  return '<article class="av-card"><div class="av-card-head"><span class="av-card-number">'+String(index+1).padStart(3,"0")+'</span><div class="av-badges">'+regionBadge+'<span class="av-badge'+statusClass+'">'+escapeHtml(badge)+'</span><span class="av-badge">'+escapeHtml(item.type)+'</span></div></div>'+visual+'<div class="av-card-body"><span class="av-card-source">'+escapeHtml(item.source)+' · '+escapeHtml(item.version||"")+'</span><h3>'+escapeHtml(item.title)+'</h3><p>'+escapeHtml(item.description)+'</p><div class="av-resource-list">'+resourceLinks(item)+noResource+'</div></div></article>'
}
function renderMedia(){
  const query=mediaSearch.value.trim().toLocaleLowerCase("es"),type=typeFilter.value,source=sourceFilter.value,region=regionFilter.value;
  const results=mediaItems.filter(item=>(!query||[item.title,item.version,item.type,item.source,item.description,item.region].join(" ").toLocaleLowerCase("es").includes(query))&&(type==="all"||item.type===type)&&(source==="all"||item.source===source)&&(region==="all"||item.region===region));
  const shown=results.slice(0,visibleLimit);
  mediaGrid.innerHTML=shown.map(item=>cardMarkup(item,mediaItems.indexOf(item))).join("");
  mediaCount.textContent=results.length+" "+(results.length===1?"ficha":"fichas")+" de "+mediaItems.length+" · "+shown.length+" visibles";
  mediaEmpty.hidden=results.length>0;mediaGrid.hidden=results.length===0;
  loadMore.hidden=shown.length>=results.length;
  if(!loadMore.hidden)loadMore.textContent="MOSTRAR MÁS MATERIALES · "+(results.length-shown.length);
}
fillOptions(typeFilter,mediaItems.map(item=>item.type));
fillOptions(sourceFilter,mediaItems.map(item=>item.source));
fillOptions(regionFilter,mediaItems.map(item=>item.region));
mediaSearch.addEventListener("input",()=>{visibleLimit=24;renderMedia()});
typeFilter.addEventListener("change",()=>{visibleLimit=24;renderMedia()});
sourceFilter.addEventListener("change",()=>{visibleLimit=24;renderMedia()});
regionFilter.addEventListener("change",()=>{visibleLimit=24;renderMedia()});
loadMore.addEventListener("click",()=>{visibleLimit+=24;renderMedia()});
document.getElementById("resetFilters").addEventListener("click",()=>{mediaSearch.value="";typeFilter.value="all";sourceFilter.value="all";regionFilter.value="all";visibleLimit=24;renderMedia();mediaSearch.focus()});
renderMedia();
