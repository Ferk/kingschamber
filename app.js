const pieces={K:"♔",Q:"♕",R:"♖",B:"♗",N:"♘"};
const dictionaries={
  en:{
    "app.title":"The King's Chamber",
    "moves.label":"Moves",
    "menu.open":"Open menu",
    "menu.title":"Menu",
    "target.card":"Target Card {n}",
    "target.board":"Target board",
    "target.controls":"Target card controls",
    "target.rotateLeft":"Rotate target card counterclockwise, adds one move",
    "target.rotateRight":"Rotate target card clockwise, adds one move",
    "target.flipH":"Flip target card horizontally, adds one move",
    "target.flipV":"Flip target card vertically, adds one move",
    "board.playable":"Playable Board",
    "board.aria":"Playable chess puzzle board",
    "controls.aria":"Game controls",
    "actions.reset":"Reset Board",
    "actions.undo":"Undo",
    "actions.retry":"Retry",
    "actions.nextCard":"Next Card",
    "actions.newGame":"New Game",
    "actions.share":"Share",
    "actions.instructions":"Instructions",
    "actions.close":"Close",
    "win.solved":"Puzzle solved",
    "win.moves":"Matched in {n} {movesWord}.",
    "win.moveSingular":"move",
    "win.movePlural":"moves",
    "rating.perfect":"PERFECT!",
    "rating.excellent":"Excellent!",
    "rating.great":"Great!",
    "rating.ok":"Ok.",
    "rating.notBad":"Not bad.",
    "rating.better":"You can do better.",
    "instructions.title":"How to Play",
    "instructions.goalTitle":"Goal",
    "instructions.goalText":"Move the pieces until the playable board exactly matches the Target Card.",
    "instructions.turnsTitle":"Turns",
    "instructions.turnsText":"Tap a piece to reveal legal empty squares, then tap a highlighted square to move. Pieces never capture.",
    "instructions.toolsText":"The target tools rotate or flip the Target Card. Each target change adds one move.",
    "instructions.chainTitle":"Card Chain",
    "instructions.chainText":"After solving a card, you'll get a message indicating how well you did. Try to get it perfect! You can retry the card, or take the next target card and continue from your solved board.",
    "instructions.piecesAria":"Piece movement rules",
    "instructions.king":"Moves one square in any direction.",
    "instructions.queen":"Slides horizontally, vertically, or diagonally. Cannot jump over pieces.",
    "instructions.rook":"Slides horizontally or vertically. Cannot jump over pieces.",
    "instructions.bishop":"Moves diagonally only between dark squares. Cannot jump over pieces.",
    "instructions.knight":"Moves in an L shape and can jump over pieces. It can never land on the center square.",
    "piece.K":"King",
    "piece.Q":"Queen",
    "piece.R":"Rook",
    "piece.B":"Bishop",
    "piece.N":"Knight",
    "square.piece":"{piece} on square {n}",
    "square.empty":"Empty square {n}",
    "par.title":"Move Guide",
    "par.text":"Current moves: {moves}. Board-only par: {boardPar}. With target tools: {anyPar}.",
    "moves.aria":"Moves: {moves}. Board par {boardPar}. Any par {anyPar}.",
    "share.title":"The King's Chamber",
    "share.text":"Try this puzzle seed.",
    "share.copied":"Link copied.",
    "share.cancelled":"Share was cancelled."
  },
  es:{
    "app.title":"La Cámara Real",
    "moves.label":"Movs.",
    "menu.open":"Abrir menú",
    "menu.title":"Menú",
    "target.card":"Carta Objetivo {n}",
    "target.board":"Tablero objetivo",
    "target.controls":"Controles de la carta objetivo",
    "target.rotateLeft":"Girar la carta objetivo en sentido antihorario, suma un movimiento",
    "target.rotateRight":"Girar la carta objetivo en sentido horario, suma un movimiento",
    "target.flipH":"Reflejar la carta objetivo horizontalmente, suma un movimiento",
    "target.flipV":"Reflejar la carta objetivo verticalmente, suma un movimiento",
    "board.playable":"Tablero Jugable",
    "board.aria":"Tablero de ajedrez jugable",
    "controls.aria":"Controles del juego",
    "actions.reset":"Reiniciar Tablero",
    "actions.undo":"Deshacer",
    "actions.retry":"Reintentar",
    "actions.nextCard":"Siguiente Carta",
    "actions.newGame":"Nuevo Juego",
    "actions.share":"Compartir",
    "actions.instructions":"Instrucciones",
    "actions.close":"Cerrar",
    "win.solved":"Puzzle resuelto",
    "win.moves":"Completado en {n} {movesWord}.",
    "win.moveSingular":"movimiento",
    "win.movePlural":"movimientos",
    "rating.perfect":"¡PERFECTO!",
    "rating.excellent":"¡Excelente!",
    "rating.great":"¡Genial!",
    "rating.ok":"Bien.",
    "rating.notBad":"No está mal.",
    "rating.better":"Puedes hacerlo mejor.",
    "instructions.title":"Cómo jugar",
    "instructions.goalTitle":"Objetivo",
    "instructions.goalText":"Mueve las piezas hasta que el tablero jugable coincida exactamente con la Carta Objetivo.",
    "instructions.turnsTitle":"Turnos",
    "instructions.turnsText":"Toca una pieza para ver sus casillas legales vacías, luego toca una casilla resaltada para mover. Las piezas nunca capturan.",
    "instructions.toolsText":"Las herramientas de objetivo giran o reflejan la Carta Objetivo. Cada cambio de objetivo suma un movimiento.",
    "instructions.chainTitle":"Cadena de Cartas",
    "instructions.chainText":"Después de resolver una carta, verás un mensaje con tu resultado. Intenta lograr un perfecto. Puedes reintentar la carta o tomar la siguiente carta objetivo y continuar desde tu tablero resuelto.",
    "instructions.piecesAria":"Reglas de movimiento de las piezas",
    "instructions.king":"Se mueve una casilla en cualquier dirección.",
    "instructions.queen":"Se desliza horizontal, vertical o diagonalmente. No puede saltar piezas.",
    "instructions.rook":"Se desliza horizontal o verticalmente. No puede saltar piezas.",
    "instructions.bishop":"Se mueve en diagonal solo entre casillas oscuras. No puede saltar piezas.",
    "instructions.knight":"Se mueve en forma de L y puede saltar piezas. Nunca puede caer en la casilla central.",
    "piece.K":"Rey",
    "piece.Q":"Dama",
    "piece.R":"Torre",
    "piece.B":"Alfil",
    "piece.N":"Caballo",
    "square.piece":"{piece} en la casilla {n}",
    "square.empty":"Casilla vacía {n}",
    "par.title":"Guía de Movimientos",
    "par.text":"Movimientos actuales: {moves}. Par solo tablero: {boardPar}. Con herramientas de objetivo: {anyPar}.",
    "moves.aria":"Movimientos: {moves}. Par de tablero {boardPar}. Par con herramientas {anyPar}.",
    "share.title":"La Cámara Real",
    "share.text":"Prueba esta semilla de puzzle.",
    "share.copied":"Enlace copiado.",
    "share.cancelled":"Se canceló el compartir."
  }
};
const locale=(globalThis.navigator?.languages||[globalThis.navigator?.language||"en"])
  .map(lang=>lang&&lang.toLowerCase().split("-")[0])
  .find(lang=>dictionaries[lang])||"en";
function t(key,values={}){
  const template=dictionaries[locale][key]??dictionaries.en[key]??key;
  return template.replace(/\{(\w+)\}/g,(_,name)=>values[name]??"");
}
function applyTranslations(){
  document.documentElement.lang=locale;
  document.title=t("app.title");
  document.querySelectorAll("[data-i18n]").forEach(el=>{ el.textContent=t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-aria-label]").forEach(el=>{ el.setAttribute("aria-label",t(el.dataset.i18nAriaLabel)); });
}
const canonical=["K","Q","R","B",null,null,"N",null,null];
const boardEl=document.querySelector("#board"),targetEl=document.querySelector("#target");
const movesEl=document.querySelector("#moves"),moveNum=document.querySelector("#moveNum"),statusEl=document.querySelector("#status");
const toast=document.querySelector("#toast"),winRating=document.querySelector("#winRating"),winText=document.querySelector("#winText"),targetTitle=document.querySelector("#targetTitle");
const menuDialog=document.querySelector("#menuDialog"),instructionsDialog=document.querySelector("#instructionsDialog"),menuNote=document.querySelector("#menuNote");
const parDialog=document.querySelector("#parDialog"),parText=document.querySelector("#parText");
let board,target,initial,baseTarget,moves=0,boardPar=0,anyPar=0,cardNumber=1,gameSeed=0,selected=null,hints=[],last=null,won=false,targetAnimating=false,animationToken=0,moveHistory=[];

const rc=i=>[Math.floor(i/3),i%3], idx=(r,c)=>r*3+c;
const dark=i=>(rc(i)[0]+rc(i)[1])%2===1;
const same=(a,b)=>a.every((v,i)=>v===b[i]);
const emptyAt=(state,i)=>!state[i];

function clearPath(state,from,to,dr,dc){
  let [r,c]=rc(from); r+=dr; c+=dc;
  while(idx(r,c)!==to){ if(state[idx(r,c)]) return false; r+=dr; c+=dc; }
  return true;
}

function legalMoves(state,from){
  const p=state[from]; if(!p) return [];
  const [fr,fc]=rc(from), out=[];
  for(let to=0;to<9;to++){
    if(to===from||!emptyAt(state,to)) continue;
    const [tr,tc]=rc(to), ar=Math.abs(tr-fr), ac=Math.abs(tc-fc);
    let ok=false;
    if(p==="K") ok=ar<=1&&ac<=1;
    if(p==="N") ok=((ar===2&&ac===1)||(ar===1&&ac===2))&&to!==4;
    if(p==="B") ok=ar===ac&&dark(from)&&dark(to)&&clearPath(state,from,to,Math.sign(tr-fr),Math.sign(tc-fc));
    if(p==="R") ok=(ar===0||ac===0)&&clearPath(state,from,to,Math.sign(tr-fr),Math.sign(tc-fc));
    if(p==="Q") ok=(ar===ac||ar===0||ac===0)&&clearPath(state,from,to,Math.sign(tr-fr),Math.sign(tc-fc));
    if(ok) out.push(to);
  }
  return out;
}

function allMoves(state){
  return state.flatMap((p,i)=>p?legalMoves(state,i).map(to=>[i,to]):[]);
}

function makeTarget(seed,rng){
  let state=seed.slice(), prev="";
  for(let step=0;step<18;step++){
    const options=allMoves(state).filter(m=>m.join("-")!==prev);
    if(!options.length) break;
    const [from,to]=options[Math.floor(rng()*options.length)];
    prev=to+"-"+from; state[to]=state[from]; state[from]=null;
  }
  return same(state,seed)?makeTarget(seed,rng):state;
}

function transform(state,fn){
  const next=Array(9).fill(null);
  state.forEach((p,i)=>{ const [r,c]=rc(i); next[idx(...fn(r,c))]=p; });
  return next;
}

const targetTransforms=[
  (r,c)=>[2-c,r],
  (r,c)=>[c,2-r],
  (r,c)=>[r,2-c],
  (r,c)=>[2-r,c]
];

function encode(state){
  return state.map(p=>p||".").join("");
}

function encodeSeed(seed){
  const bytes=[seed>>>24,(seed>>>16)&255,(seed>>>8)&255,seed&255];
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
}

function decodeSeed(value){
  if(!/^[A-Za-z0-9_-]{6}$/.test(value||"")) return null;
  const raw=atob(value.replace(/-/g,"+").replace(/_/g,"/")+"==");
  return ((raw.charCodeAt(0)<<24)|(raw.charCodeAt(1)<<16)|(raw.charCodeAt(2)<<8)|raw.charCodeAt(3))>>>0;
}

function randomSeed(){
  const values=new Uint32Array(1);
  if(globalThis.crypto?.getRandomValues) crypto.getRandomValues(values);
  else values[0]=(Math.random()*0x100000000)>>>0;
  return values[0]||1;
}

function seedFromUrl(){
  if(!globalThis.location) return null;
  return decodeSeed(new URLSearchParams(location.search).get("g"));
}

function writeSeedToUrl(){
  if(!globalThis.history||!globalThis.location) return;
  const url=new URL(location.href);
  url.searchParams.set("g",encodeSeed(gameSeed));
  history.replaceState(null,"",url);
}

function hashString(text){
  let h=2166136261;
  for(let i=0;i<text.length;i++){
    h^=text.charCodeAt(i);
    h=Math.imul(h,16777619);
  }
  return h>>>0;
}

function mixSeed(seed,number,boardState){
  let h=seed>>>0;
  h=Math.imul(h^number,2246822519);
  h=Math.imul(h^hashString(boardState),3266489917);
  return h>>>0;
}

function mulberry32(seed){
  return function(){
    seed=(seed+0x6D2B79F5)>>>0;
    let t=seed;
    t=Math.imul(t^(t>>>15),t|1);
    t^=t+Math.imul(t^(t>>>7),t|61);
    return ((t^(t>>>14))>>>0)/4294967296;
  };
}

function solveOptimal(boardSeed,targetSeed,allowTargetTransforms=true){
  const seen=new Set(), queue=[{board:boardSeed,target:targetSeed,depth:0}];
  seen.add(`${encode(boardSeed)}|${encode(targetSeed)}`);
  for(let qi=0;qi<queue.length;qi++){
    const cur=queue[qi];
    if(same(cur.board,cur.target)) return cur.depth;

    for(const [from,to] of allMoves(cur.board)){
      const nextBoard=cur.board.slice();
      nextBoard[to]=nextBoard[from]; nextBoard[from]=null;
      pushState(queue,seen,nextBoard,cur.target,cur.depth+1);
    }

    if(allowTargetTransforms){
      for(const fn of targetTransforms){
        pushState(queue,seen,cur.board,transform(cur.target,fn),cur.depth+1);
      }
    }
  }
  return null;
}

function pushState(queue,seen,nextBoard,nextTarget,depth){
  const key=`${encode(nextBoard)}|${encode(nextTarget)}`;
  if(seen.has(key)) return;
  seen.add(key);
  queue.push({board:nextBoard,target:nextTarget,depth});
}

function draw(el,state,interactive=false){
  el.innerHTML="";
  state.forEach((p,i)=>{
    const b=document.createElement("button");
    b.className="square "+(dark(i)?"dark":"light");
    b.type="button"; b.dataset.i=i; b.ariaLabel=p?t("square.piece",{piece:t(`piece.${p}`),n:i+1}):t("square.empty",{n:i+1});
    if(interactive&&selected===i) b.classList.add("selected");
    if(interactive&&hints.includes(i)) b.classList.add("hint");
    if(interactive&&last===i) b.classList.add("last");
    if(p){ const s=document.createElement("span"); s.className="piece"; s.textContent=pieces[p]; b.append(s); }
    if(interactive) b.addEventListener("click",tap);
    el.append(b);
  });
}

function render(){
  renderMeta();
  draw(boardEl,board,true); draw(targetEl,target);
}

function renderMeta(){
  moveNum.textContent=moves;
  targetTitle.textContent=t("target.card",{n:cardNumber});
  updateMoveColor();
  statusEl.textContent="☰";
  statusEl.setAttribute("aria-label",t("menu.open"));
  movesEl.setAttribute("aria-label",t("moves.aria",{moves,boardPar,anyPar}));
}

function selectedPiece(){ return selected==null?"":board[selected]; }

function updateMoveColor(){
  const low=Math.min(boardPar,anyPar), high=Math.max(boardPar,anyPar);
  movesEl.classList.remove("par-green","par-yellow","par-red");
  movesEl.classList.add(moves<=low?"par-green":moves<=high?"par-yellow":"par-red");
}

function addMove(){
  moves++;
  movesEl.classList.remove("bump");
  void movesEl.offsetWidth;
  movesEl.classList.add("bump");
}

function snapshot(){
  moveHistory.push({board:board.slice(),target:target.slice(),moves,selected,hints:hints.slice(),last,won});
}

function tap(e){
  if(won) return;
  const i=+e.currentTarget.dataset.i;
  if(hints.includes(i)){
    snapshot();
    board[i]=board[selected]; board[selected]=null; last=i; selected=null; hints=[]; addMove();
    if(same(board,target)) finish();
  }else if(board[i]){
    selected=i; hints=legalMoves(board,i); last=null;
  }else{
    selected=null; hints=[]; last=null;
  }
  render();
}

function finish(){
  won=true;
  winRating.textContent=resultMessage();
  winText.textContent=t("win.moves",{n:moves,movesWord:t(moves===1?"win.moveSingular":"win.movePlural")});
  setTimeout(()=>toast.classList.add("show"),120);
}

function resultMessage(){
  if(moves<=Math.min(boardPar,anyPar)) return t("rating.perfect");
  if(moves<boardPar) return t("rating.excellent");
  if(moves===boardPar) return t("rating.great");
  if(moves===boardPar+1) return t("rating.ok");
  if(moves===boardPar+2) return t("rating.notBad");
  return t("rating.better");
}

function startCard(seed,number=cardNumber){
  animationToken++;
  targetAnimating=false;
  clearTargetAnimation();
  cardNumber=number;
  initial=seed.slice(); board=initial.slice();
  baseTarget=makeTarget(initial,mulberry32(mixSeed(gameSeed,cardNumber,encode(initial))));
  target=baseTarget.slice();
  boardPar=solveOptimal(initial,baseTarget,false);
  anyPar=solveOptimal(initial,baseTarget,true);
  moves=0; moveHistory=[]; movesEl.classList.remove("bump"); selected=null; hints=[]; last=null; won=false; toast.classList.remove("show"); render();
}

function retryCard(){
  animationToken++;
  targetAnimating=false;
  clearTargetAnimation();
  board=initial.slice(); target=baseTarget.slice(); moves=0; moveHistory=[]; movesEl.classList.remove("bump"); selected=null; hints=[]; last=null; won=false; toast.classList.remove("show"); render();
}

function newPuzzle(useFreshSeed=true){
  if(useFreshSeed){
    gameSeed=randomSeed();
    writeSeedToUrl();
  }
  const initialBoard=makeTarget(canonical,mulberry32(mixSeed(gameSeed,0,encode(canonical))));
  startCard(initialBoard,1);
}

function nextCard(){
  startCard(board,cardNumber+1);
}

function clearTargetAnimation(){
  targetEl.classList.remove("spin-left","spin-right","flip-horizontal","flip-vertical");
}

function animateTargetCard(animationClass){
  clearTargetAnimation();
  void targetEl.offsetWidth;
  targetEl.classList.add(animationClass);
  const duration=globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches?0:340;
  return new Promise(resolve=>setTimeout(resolve,duration));
}

async function changeTarget(fn,animationClass){
  if(won||targetAnimating) return;
  targetAnimating=true;
  const token=++animationToken, nextTarget=transform(target,fn);
  snapshot();
  addMove(); selected=null; hints=[]; renderMeta();
  await animateTargetCard(animationClass);
  if(token!==animationToken) return;
  target=nextTarget;
  if(same(board,target)) finish();
  render();
  clearTargetAnimation();
  targetAnimating=false;
}

function undoMove(){
  if(targetAnimating||!moveHistory.length) return;
  animationToken++;
  clearTargetAnimation();
  const prev=moveHistory.pop();
  board=prev.board; target=prev.target; moves=prev.moves; selected=prev.selected; hints=prev.hints; last=prev.last; won=prev.won;
  toast.classList.remove("show");
  movesEl.classList.remove("bump");
  render();
}

function showDialog(dialog){
  dialog.classList.add("show");
}

function hideDialog(dialog){
  dialog.classList.remove("show");
}

function gameUrl(){
  writeSeedToUrl();
  if(!globalThis.location) return `?g=${encodeSeed(gameSeed)}`;
  const url=new URL(location.href);
  url.searchParams.set("g",encodeSeed(gameSeed));
  return url.href;
}

async function shareGame(){
  const url=gameUrl();
  try{
    if(navigator.share) await navigator.share({title:t("share.title"),text:t("share.text"),url});
    else{
      await navigator.clipboard.writeText(url);
      menuNote.textContent=t("share.copied");
    }
  }catch{
    menuNote.textContent=t("share.cancelled");
  }
}

function showParInfo(){
  parText.textContent=t("par.text",{moves,boardPar,anyPar});
  showDialog(parDialog);
}

document.querySelector("#reset").onclick=retryCard;
document.querySelector("#undo").onclick=undoMove;
document.querySelector("#retry").onclick=retryCard;
document.querySelector("#nextCard").onclick=nextCard;
statusEl.onclick=()=>{ menuNote.textContent=""; showDialog(menuDialog); };
movesEl.onclick=showParInfo;
document.querySelector("#closeMenu").onclick=()=>hideDialog(menuDialog);
document.querySelector("#menuNew").onclick=()=>{ hideDialog(menuDialog); newPuzzle(true); };
document.querySelector("#shareGame").onclick=shareGame;
document.querySelector("#showInstructions").onclick=()=>{ hideDialog(menuDialog); showDialog(instructionsDialog); };
document.querySelector("#closeInstructions").onclick=()=>hideDialog(instructionsDialog);
document.querySelector("#closePar").onclick=()=>hideDialog(parDialog);
document.querySelector("#rotateLeft").onclick=()=>changeTarget(targetTransforms[0],"spin-left");
document.querySelector("#rotateRight").onclick=()=>changeTarget(targetTransforms[1],"spin-right");
document.querySelector("#flipH").onclick=()=>changeTarget(targetTransforms[2],"flip-horizontal");
document.querySelector("#flipV").onclick=()=>changeTarget(targetTransforms[3],"flip-vertical");
gameSeed=seedFromUrl()??randomSeed();
writeSeedToUrl();
applyTranslations();
newPuzzle(false);
