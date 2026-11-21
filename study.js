// Study methods for going from zero to B1:
//  1. Daily spaced-repetition session (review due words + a few new words)
//  2. Verb conjugation drills for the B1 tenses
//  3. Shadowing practice (listen, repeat aloud, optionally record yourself)
//  4. B1 roadmap and study guide
// Loaded before the main script; uses its globals (S, t, L, render, ...) only inside functions.

/* ================= Strings ================= */
window.STUDY_T = {
  ja:{
    studyTitle:"今日の学習", studySub:"復習と新しい単語を、忘れかける前にまとめて", studyStart:"今日の学習をはじめる",
    studyReview:"復習", studyNew:"新しい単語", studyMin:"約{n}分", studyDoneTitle:"今日の学習は完了！",
    studyTomorrow:"明日の復習：{n}語", studyMore:"新しい単語をあと5語", studyNothing:"今日やることはありません",
    newWord:"新しい単語", introTip:"音声を聞いて、声に出して2回言ってみよう", gotIt:"覚えた！",
    resReviewed:"復習した単語", resNew:"新しく覚えた単語", resAcc:"正答率",
    newPerDay:"1日の新しい単語の数", perDay:"{n}語",
    practiceTitle:"練習メニュー",
    conjTitle:"活用ドリル", conjSub:"B1に必要な時制", shadowTitle:"シャドーイング", shadowSub:"聞いて真似して言う",
    conjPickTense:"練習する時制", conjVos:"vosotros（スペイン式の「君たち」）も出す", conjStart:"ドリル開始",
    conjQ:"正しい活用を選んでください", conjQType:"活用形を入力してください", conjTable:"活用表", conjFinish:"ドリル完了！",
    conjMistakes:"間違えた活用", conjNoMistakes:"ミスなし！", conjPickOne:"時制を1つ以上選んでください",
    shStage0:"まずは文字を見ずに聞いてみよう", shShowText:"文字を見る", shStage1:"音声に重ねて、同じリズムで3回言おう",
    shPlay:"再生", shSlow:"ゆっくり", shRecord:"録音して比べる", shStop:"録音を止める", shMine:"自分の声", shNoMic:"マイクが使えません",
    shEasy:"言えた 👍", shHard:"むずかしい 😅", shFinish:"シャドーイング完了！", shCount:"練習した文",
    roadmap:"B1ロードマップ", known:"定着した単語", hours:"学習時間", hoursGoal:"B1の目安：合計350〜400時間（自習を含む）",
    tensesOk:"マスターした時制", talks:"会話ミッション", current:"いまここ", stageDone:"達成",
    lvA1:"A1 入門：あいさつ・自己紹介・買い物ができる", lvA2:"A2 初級：過去や予定について簡単に話せる", lvB1:"B1 中級：旅行や日常の大半を自分の言葉で話せる",
    guideTitle:"効果的な勉強のやり方", guideOpen:"勉強法を見る",
    g1t:"毎日の復習（間隔反復）", g1:"忘れかけた頃に思い出すと、記憶に長く残ります。正解するたびに次の復習が1日→3日→7日→14日…と延びます。毎日「今日の学習」を開くだけでOK。",
    g2t:"見るより「思い出す」", g2:"答えを見て覚えるより、自分で思い出すほうが定着します。覚えた単語ほど「選ぶ」→「並べる」→「書く」と難しい問題になります。",
    g3t:"よく使う順に覚える", g3:"新しい単語は、使う頻度が高いもの（代名詞・基本動詞・あいさつ）から順に出ます。上位1,000語で日常会話の約8割をカバーできます。",
    g4t:"動詞の活用を固める", g4:"B1では現在・点過去・線過去・現在完了・未来・過去未来・接続法現在を使います。活用ドリルで1つずつ固めましょう。",
    g5t:"シャドーイング", g5:"音声を聞きながら少し遅れて真似して言う練習です。リスニングとフレーズの記憶に効果があると報告されています。1日5分でも続けましょう。",
    g6t:"実際に話す", g6:"覚えた表現は使うと定着します。ルーレットで出たフレーズを毎日1回、誰かとの会話で使いましょう。",
    g7t:"時間の目安", g7:"ゼロからB1までは合計350〜400時間が目安です。1日1時間なら約1年、30分なら約2年。毎日少しずつが一番の近道です。",
    sources:"参考：間隔反復のメタ分析（Kim & Webb 2022）、シャドーイング研究（JALT Journal ほか）、FSI・CEFRの学習時間目安"
  },
  en:{
    studyTitle:"Today's study", studySub:"Review words right before you forget them, plus a few new ones", studyStart:"Start today's study",
    studyReview:"Review", studyNew:"New words", studyMin:"about {n} min", studyDoneTitle:"Today's study is done!",
    studyTomorrow:"Due tomorrow: {n} words", studyMore:"5 more new words", studyNothing:"Nothing due today",
    newWord:"New word", introTip:"Listen, then say it out loud twice", gotIt:"Got it!",
    resReviewed:"Words reviewed", resNew:"New words learned", resAcc:"Accuracy",
    newPerDay:"New words per day", perDay:"{n}",
    practiceTitle:"Practice",
    conjTitle:"Conjugation drill", conjSub:"The tenses B1 needs", shadowTitle:"Shadowing", shadowSub:"Listen and repeat aloud",
    conjPickTense:"Tenses to practice", conjVos:"Include vosotros (Spain's “you all”)", conjStart:"Start drill",
    conjQ:"Choose the correct form", conjQType:"Type the correct form", conjTable:"Conjugation table", conjFinish:"Drill complete!",
    conjMistakes:"Forms you missed", conjNoMistakes:"No mistakes!", conjPickOne:"Pick at least one tense",
    shStage0:"First, listen without looking at the text", shShowText:"Show text", shStage1:"Speak along with the audio, same rhythm, 3 times",
    shPlay:"Play", shSlow:"Slow", shRecord:"Record and compare", shStop:"Stop recording", shMine:"My voice", shNoMic:"Microphone not available",
    shEasy:"I said it 👍", shHard:"Hard 😅", shFinish:"Shadowing complete!", shCount:"Sentences practiced",
    roadmap:"Road to B1", known:"Words retained", hours:"Study time", hoursGoal:"B1 takes about 350–400 hours in total (including self-study)",
    tensesOk:"Tenses mastered", talks:"Conversation missions", current:"You are here", stageDone:"Done",
    lvA1:"A1 Beginner: greetings, introductions, shopping", lvA2:"A2 Elementary: talk simply about the past and plans", lvB1:"B1 Intermediate: handle travel and most everyday talk in your own words",
    guideTitle:"How to study effectively", guideOpen:"See study method",
    g1t:"Daily review (spaced repetition)", g1:"Recalling a word just as you're about to forget it makes memory last. Each correct answer pushes the next review further: 1 → 3 → 7 → 14 days… Just open Today's study every day.",
    g2t:"Recall, don't just reread", g2:"Pulling an answer from memory works better than looking at it. The better you know a word, the harder its question gets: choose → arrange → type.",
    g3t:"Learn the most frequent words first", g3:"New words come in order of usefulness: pronouns, core verbs, greetings. The top 1,000 words cover about 80% of everyday conversation.",
    g4t:"Nail the verb tenses", g4:"B1 uses the present, preterite, imperfect, present perfect, future, conditional and present subjunctive. Practice them one at a time in the conjugation drill.",
    g5t:"Shadowing", g5:"Repeat the audio aloud a split second behind the speaker. Studies report gains in listening and in remembering phrases. Even 5 minutes a day helps.",
    g6t:"Actually speak", g6:"Phrases stick when you use them. Use the roulette phrase once a day in a real conversation.",
    g7t:"How long it takes", g7:"Zero to B1 is about 350–400 hours in total: roughly a year at 1 hour a day, or two years at 30 minutes. A little every day is the fastest route.",
    sources:"Based on: spacing meta-analysis (Kim & Webb 2022), shadowing studies (JALT Journal and others), FSI and CEFR hour estimates"
  }
};
const fmt = (s, n) => String(s).replace("{n}", n);

/* ================= Time tracking ================= */
function addTime(start){
  if (!start) return;
  S.studyMs = (S.studyMs || 0) + Math.min(Date.now() - start, 45*60e3);
}

/* ================= 1. Spaced repetition ================= */
// Days until the next review for each box. Box 0 = new / just failed.
const SRS_DAYS = [0, 1, 3, 7, 14, 30, 60, 120, 240];
const REVIEW_CAP = 80;
// New words are introduced in order of usefulness, not in the order units appear on the path.
const CURRICULUM = ["saludos","pronombres","basicos","conectores","verbos3","numeros","verbos","familia","comida",
  "conversacion","frases","cortesia","tiempo","sentir","adjetivos2","verbos4","tiempo2","semana","colores","casa",
  "ciudad","transporte","viaje","compras","gente","trabajo","trabajos","estudio","adverbios","sustantivos","verbos2",
  "verbos6","verbos5","sentir2","clima","cuerpo","cuerpo2","comida2","restaurante","casa2","ropa","dinero","numeros2",
  "adjetivos3","personalidad","ocio","tecnologia","naturaleza","animales","animales2"];

function dayStart(ms){ const d = ms ? new Date(ms) : new Date(); d.setHours(0,0,0,0); return d.getTime(); }
function srsSeed(){
  if (!S.srs) S.srs = {};
  if (S.srsSeeded) return;
  // Words already learned in lessons start as reviews instead of being taught again.
  ALL_ITEMS.forEach(i=>{ if (!S.srs[i.es] && strength(i.es) >= 3) S.srs[i.es] = {b:2, due:dayStart(), n:1, lapse:0}; });
  S.srsSeeded = true;
}
function dueItems(){
  const end = dayStart();
  return ALL_ITEMS.filter(i=>{ const r = S.srs[i.es]; return r && r.due <= end; })
                  .sort((a,b)=>S.srs[a.es].due - S.srs[b.es].due);
}
function curriculumItems(){
  const order = CURRICULUM.concat(UNITS.map(u=>u.id).filter(id=>!CURRICULUM.includes(id)));
  return order.flatMap(id=>{ const u = UNITS.find(x=>x.id===id); return u ? u.items : []; });
}
function nextNew(n){ return curriculumItems().filter(i=>!S.srs[i.es]).slice(0, Math.max(0, n)); }
function newLeftToday(){ return Math.max(0, (S.settings?.newPerDay ?? 10) - (S.daily.newDone || 0)); }
function studyCounts(){ srsSeed(); return {due: Math.min(dueItems().length, REVIEW_CAP), fresh: Math.min(newLeftToday(), nextNew(999).length)}; }

// Harder question types as a word moves up the boxes (recognition → recall → production).
function srsType(item, b){
  const multi = words(item.es).length >= 2, listen = canSpeak && !listenPaused(), r = Math.random();
  if (b <= 1) return listen && r < 0.35 ? "listen" : "es2m";
  if (b === 2) return listen && r < 0.3 ? "listen" : "m2es";
  if (b === 3) return multi && r < 0.6 ? "build" : "m2es";
  return r < 0.6 ? "type" : (multi ? "build" : "m2es");
}
function startStudy(extraNew){
  srsSeed();
  const due = dueItems().slice(0, REVIEW_CAP);
  const fresh = nextNew(extraNew != null ? extraNew : newLeftToday());
  if (!due.length && !fresh.length){ toast(t("studyNothing")); return; }
  const revQ = shuffle(due).map(i=>makeQ(i, srsType(i, S.srs[i.es].b)));
  const queue = [];
  // Introduce 3 new words, test them right away, then mix in a few reviews.
  for (let g = 0; g < fresh.length; g += 3){
    const grp = fresh.slice(g, g+3);
    grp.forEach(i=>queue.push({type:"intro", item:i}));
    shuffle(grp).forEach(i=>queue.push(makeQ(i, "es2m")));
    queue.push(...revQ.splice(0, 4));
  }
  queue.push(...revQ);
  L = {srs:true, auto:true, key:"study", label:t("studyTitle"), queue, total:queue.length, doneCount:0,
       answered:0, correctN:0, mistakes:0, graded:new Set(), newN:fresh.length, revN:due.length,
       start:Date.now(), sel:null, state:"ask"};
  save(); go("lesson");
}
function srsGrade(item, ok){
  const r = S.srs[item.es] || (S.srs[item.es] = {b:0, due:dayStart(), n:0, lapse:0});
  if (L.graded.has(item.es)){
    // A retry inside the same session: a new word answered correctly moves to box 1.
    if (ok && r.b === 0){ r.b = 1; r.due = dayStart() + SRS_DAYS[1]*864e5; }
    return;
  }
  L.graded.add(item.es);
  r.n++;
  if (ok){ r.b = Math.min(SRS_DAYS.length-1, r.b + 1); r.due = dayStart() + SRS_DAYS[r.b]*864e5; }
  else {
    if (r.b > 0) r.lapse++;
    r.b = r.b >= 4 ? 2 : (r.b > 0 ? 1 : 0);
    r.due = dayStart() + (r.b > 0 ? 864e5 : 0);
  }
}
function srsNext(){
  clearTimeout(L.autoT);
  const q = L.queue.shift();
  if (q.type === "intro"){
    L.doneCount++;
    S.daily.newDone = (S.daily.newDone || 0) + 1;
    if (!S.srs[q.item.es]) S.srs[q.item.es] = {b:0, due:dayStart(), n:0, lapse:0};
    save();
  } else if (L.state === "right") L.doneCount++;
  else {
    // Ask it again a few cards later, as an easier recognition question.
    L.queue.splice(Math.min(3, L.queue.length), 0, makeQ(q.item, q.type==="listen" ? "listen" : "m2es"));
    L.total++;
  }
  L.sel = null; L.state = "ask";
  if (!L.queue.length){ finishStudy(); return; }
  renderLesson();
}
function finishStudy(){
  S.daily.studyDone = true; S.gems += 10; S.xp += L.correctN;
  addTime(L.start);
  const advanced = markActive(); checkQuests(); save();
  const tomorrow = ALL_ITEMS.filter(i=>{ const r=S.srs[i.es]; return r && r.due > dayStart() && r.due <= dayStart()+864e5; }).length;
  view = {name:"studyres", correct:L.correctN, answered:L.answered, newN:L.newN, revN:L.revN, tomorrow, advanced};
  render(); confetti();
}
function renderStudyRes(){
  const v = view, acc = v.answered ? Math.round(v.correct/v.answered*100) : 100;
  $("#main").innerHTML = `<div class="center">
    <div class="pop">${mascot(130)}</div>
    <div class="h1" style="color:var(--sun-d);font-size:28px">${t("studyDoneTitle")}</div>
    <div class="statgrid">
      <div class="card" style="border-color:var(--blue)"><small style="background:var(--blue)">${t("resReviewed")}</small>🔁 ${v.revN}</div>
      <div class="card" style="border-color:var(--sun)"><small style="background:var(--sun)">${t("resNew")}</small>🆕 ${v.newN}</div>
      <div class="card" style="border-color:var(--ok)"><small style="background:var(--ok)">${t("resAcc")}</small>🎯 ${acc}%</div>
    </div>
    <p class="muted">${fmt(t("studyTomorrow"), v.tomorrow)} ・ 💎 +10</p>
    <div style="width:100%;margin-top:8px"><button class="btn" onclick="${v.advanced?"go('streak')":"go('learn')"}">${t("cont")}</button></div></div>`;
}
function studyCardHtml(){
  const c = studyCounts(), done = S.daily.studyDone && !c.due && !c.fresh;
  const mins = Math.max(1, Math.ceil((c.due*8 + c.fresh*25)/60));
  const known = ALL_ITEMS.filter(i=>(S.srs[i.es]?.b||0) >= 3).length;
  return `<div class="mission" style="margin:16px">
    <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px">
      <div class="h1" style="font-size:20px;margin:0">📅 ${t("studyTitle")}</div>
      <button class="muted" style="color:var(--blue)" onclick="go('guide')">${t("guideOpen")} ›</button></div>
    ${done
      ? `<p style="margin:8px 0 12px">✅ ${t("studyDoneTitle")}</p>
         <button class="btn ghost" onclick="startStudy(5)">${t("studyMore")}</button>`
      : `<p class="muted" style="margin:6px 0 10px">${t("studySub")}</p>
         <div style="display:flex;gap:16px;margin-bottom:12px;font-size:15px">
           <span>🔁 ${t("studyReview")} <b>${c.due}</b></span><span>🆕 ${t("studyNew")} <b>${c.fresh}</b></span>
           <span class="muted">⏱ ${fmt(t("studyMin"), mins)}</span></div>
         ${c.due || c.fresh ? `<button class="btn" onclick="startStudy()">${t("studyStart")}</button>`
                           : `<button class="btn ghost" onclick="startStudy(5)">${t("studyMore")}</button>`}`}
    <div style="margin-top:12px" onclick="go('profile')"><div class="muted" style="display:flex;justify-content:space-between"><span>🎯 B1 ・ ${t("known")}</span><span>${known} / ${ALL_ITEMS.length}</span></div>
      <div class="bar" style="height:10px;margin-top:4px"><i style="width:${known/ALL_ITEMS.length*100}%;background:var(--ok)"></i></div></div>
  </div>`;
}

/* ================= 2. Conjugation drill ================= */
const PERSONS = ["yo","tú","él / ella / usted","nosotros","vosotros","ellos / ustedes"];
const TENSES = [
  {id:"pres", lv:"A1", ja:"現在形", en:"Present", useJa:"〜する・〜している（今・習慣）", useEn:"I do / I'm doing (now, habits)", ex:"Hablo español todos los días.", exJa:"毎日スペイン語を話します。", exEn:"I speak Spanish every day."},
  {id:"pret", lv:"A2", ja:"点過去", en:"Preterite", useJa:"〜した（終わった出来事）", useEn:"I did (finished events)", ex:"Ayer comí paella.", exJa:"昨日パエリアを食べた。", exEn:"Yesterday I ate paella."},
  {id:"imp", lv:"A2", ja:"線過去", en:"Imperfect", useJa:"〜していた・よく〜した（過去の状況・習慣）", useEn:"I was doing / I used to do", ex:"De niño vivía en Osaka.", exJa:"子どもの頃、大阪に住んでいた。", exEn:"As a child I lived in Osaka."},
  {id:"perf", lv:"A2", ja:"現在完了", en:"Present perfect", useJa:"〜した（今日・今までに）・〜したことがある", useEn:"I have done (today, ever)", ex:"Hoy he trabajado mucho.", exJa:"今日はたくさん働いた。", exEn:"I've worked a lot today."},
  {id:"fut", lv:"A2", ja:"未来形", en:"Future", useJa:"〜するだろう・〜するつもり", useEn:"I will do", ex:"Mañana iré a Madrid.", exJa:"明日マドリードに行く。", exEn:"Tomorrow I'll go to Madrid."},
  {id:"cond", lv:"B1", ja:"過去未来（条件）", en:"Conditional", useJa:"〜するだろうに・〜したいのですが（丁寧）", useEn:"I would do (also polite requests)", ex:"Me gustaría un café.", exJa:"コーヒーをいただきたいのですが。", exEn:"I'd like a coffee."},
  {id:"subj", lv:"B1", ja:"接続法現在", en:"Present subjunctive", useJa:"〜しますように・〜してほしい（願い・感情）", useEn:"wishes, feelings, requests (que …)", ex:"Espero que estés bien.", exJa:"元気でいてくれるといいな。", exEn:"I hope you're well."}
];
const END = {
  pres:{ar:"o as a amos áis an", er:"o es e emos éis en", ir:"o es e imos ís en"},
  pret:{ar:"é aste ó amos asteis aron", er:"í iste ió imos isteis ieron", ir:"í iste ió imos isteis ieron"},
  imp:{ar:"aba abas aba ábamos abais aban", er:"ía ías ía íamos íais ían", ir:"ía ías ía íamos íais ían"},
  subj:{ar:"e es e emos éis en", er:"a as a amos áis an", ir:"a as a amos áis an"}
};
const FUT_END = "é ás á emos éis án", COND_END = "ía ías ía íamos íais ían", HABER = "he has ha hemos habéis han";
// Irregular forms: a comma list is the full set of 6 forms; fut / subj without commas are stems.
const VERBS = {
  hablar:{en:"to speak",ja:"話す"}, trabajar:{en:"to work",ja:"働く"}, estudiar:{en:"to study",ja:"勉強する"},
  comprar:{en:"to buy",ja:"買う"}, cocinar:{en:"to cook",ja:"料理する"}, escuchar:{en:"to listen",ja:"聞く"},
  tomar:{en:"to take / to drink",ja:"取る・飲む"}, comer:{en:"to eat",ja:"食べる"}, beber:{en:"to drink",ja:"飲む"},
  aprender:{en:"to learn",ja:"学ぶ"}, vender:{en:"to sell",ja:"売る"}, vivir:{en:"to live",ja:"住む"},
  escribir:{en:"to write",ja:"書く", part:"escrito"}, abrir:{en:"to open",ja:"開ける", part:"abierto"},
  recibir:{en:"to receive",ja:"受け取る"}, decidir:{en:"to decide",ja:"決める"},
  ser:{en:"to be",ja:"〜である", irr:1, pres:"soy,eres,es,somos,sois,son", pret:"fui,fuiste,fue,fuimos,fuisteis,fueron",
       imp:"era,eras,era,éramos,erais,eran", subj:"sea,seas,sea,seamos,seáis,sean"},
  estar:{en:"to be (state / place)",ja:"（状態・場所が）〜である", irr:1, pres:"estoy,estás,está,estamos,estáis,están",
       pret:"estuve,estuviste,estuvo,estuvimos,estuvisteis,estuvieron", subj:"esté,estés,esté,estemos,estéis,estén"},
  ir:{en:"to go",ja:"行く", irr:1, pres:"voy,vas,va,vamos,vais,van", pret:"fui,fuiste,fue,fuimos,fuisteis,fueron",
       imp:"iba,ibas,iba,íbamos,ibais,iban", subj:"vaya,vayas,vaya,vayamos,vayáis,vayan"},
  tener:{en:"to have",ja:"持つ", irr:1, pres:"tengo,tienes,tiene,tenemos,tenéis,tienen",
       pret:"tuve,tuviste,tuvo,tuvimos,tuvisteis,tuvieron", fut:"tendr", subj:"teng"},
  hacer:{en:"to do / to make",ja:"する・作る", irr:1, pres:"hago,haces,hace,hacemos,hacéis,hacen",
       pret:"hice,hiciste,hizo,hicimos,hicisteis,hicieron", fut:"har", subj:"hag", part:"hecho"},
  poder:{en:"can",ja:"できる", irr:1, pres:"puedo,puedes,puede,podemos,podéis,pueden",
       pret:"pude,pudiste,pudo,pudimos,pudisteis,pudieron", fut:"podr", subj:"pueda,puedas,pueda,podamos,podáis,puedan"},
  querer:{en:"to want",ja:"欲しい・〜したい", irr:1, pres:"quiero,quieres,quiere,queremos,queréis,quieren",
       pret:"quise,quisiste,quiso,quisimos,quisisteis,quisieron", fut:"querr", subj:"quiera,quieras,quiera,queramos,queráis,quieran"},
  decir:{en:"to say",ja:"言う", irr:1, pres:"digo,dices,dice,decimos,decís,dicen",
       pret:"dije,dijiste,dijo,dijimos,dijisteis,dijeron", fut:"dir", subj:"dig", part:"dicho"},
  venir:{en:"to come",ja:"来る", irr:1, pres:"vengo,vienes,viene,venimos,venís,vienen",
       pret:"vine,viniste,vino,vinimos,vinisteis,vinieron", fut:"vendr", subj:"veng"},
  saber:{en:"to know",ja:"知っている", irr:1, pres:"sé,sabes,sabe,sabemos,sabéis,saben",
       pret:"supe,supiste,supo,supimos,supisteis,supieron", fut:"sabr", subj:"sep"},
  poner:{en:"to put",ja:"置く", irr:1, pres:"pongo,pones,pone,ponemos,ponéis,ponen",
       pret:"puse,pusiste,puso,pusimos,pusisteis,pusieron", fut:"pondr", subj:"pong", part:"puesto"},
  salir:{en:"to go out",ja:"出かける", irr:1, pres:"salgo,sales,sale,salimos,salís,salen", fut:"saldr", subj:"salg"},
  dar:{en:"to give",ja:"与える", irr:1, pres:"doy,das,da,damos,dais,dan", pret:"di,diste,dio,dimos,disteis,dieron",
       subj:"dé,des,dé,demos,deis,den"},
  ver:{en:"to see",ja:"見る", irr:1, pres:"veo,ves,ve,vemos,veis,ven", pret:"vi,viste,vio,vimos,visteis,vieron",
       imp:"veía,veías,veía,veíamos,veíais,veían", subj:"ve", part:"visto"},
  pensar:{en:"to think",ja:"考える", irr:1, pres:"pienso,piensas,piensa,pensamos,pensáis,piensan",
       subj:"piense,pienses,piense,pensemos,penséis,piensen"},
  volver:{en:"to return",ja:"戻る", irr:1, pres:"vuelvo,vuelves,vuelve,volvemos,volvéis,vuelven",
       subj:"vuelva,vuelvas,vuelva,volvamos,volváis,vuelvan", part:"vuelto"},
  dormir:{en:"to sleep",ja:"寝る", irr:1, pres:"duermo,duermes,duerme,dormimos,dormís,duermen",
       pret:"dormí,dormiste,durmió,dormimos,dormisteis,durmieron", subj:"duerma,duermas,duerma,durmamos,durmáis,duerman"},
  pedir:{en:"to ask for / to order",ja:"頼む・注文する", irr:1, pres:"pido,pides,pide,pedimos,pedís,piden",
       pret:"pedí,pediste,pidió,pedimos,pedisteis,pidieron", subj:"pida,pidas,pida,pidamos,pidáis,pidan"},
  conocer:{en:"to know (people / places)",ja:"（人・場所を）知っている", irr:1, pres:"conozco,conoces,conoce,conocemos,conocéis,conocen", subj:"conozc"}
};
function conj(verb, tense){
  const v = VERBS[verb], cls = verb.slice(-2), stem = verb.slice(0, -2), ov = v[tense];
  if (ov && ov.includes(",")) return ov.split(",");
  if (tense === "perf") return HABER.split(" ").map(h=>h + " " + (v.part || stem + (cls === "ar" ? "ado" : "ido")));
  if (tense === "fut" || tense === "cond") return (tense === "fut" ? FUT_END : COND_END).split(" ").map(e=>(v.fut || verb) + e);
  if (tense === "subj" && ov) return END.subj[cls === "ar" ? "ar" : "er"].split(" ").map(e=>ov + e);
  return END[tense][cls].split(" ").map(e=>stem + e);
}
const tenseName = id => { const x = TENSES.find(t=>t.id===id); return x[S.lang]; };
const verbMean = v => VERBS[v][S.lang];

let CJ = null;
function cjSettings(){ if (!S.conjSet) S.conjSet = {tenses:["pres"], vos:true}; if (!S.conj) S.conj = {}; if (!S.conjW) S.conjW = {}; return S.conjSet; }
function cjToggleTense(id){ const s = cjSettings(), i = s.tenses.indexOf(id); if (i>=0) s.tenses.splice(i,1); else s.tenses.push(id); save(); render(); }
function cjToggleVos(){ const s = cjSettings(); s.vos = !s.vos; save(); render(); }
function cjAcc(id){ const c = S.conj?.[id]; return c && (c.c + c.w) ? Math.round(c.c / (c.c + c.w) * 100) : null; }
function tenseMastered(id){ const c = S.conj?.[id]; return !!c && c.c >= 20 && c.c / (c.c + c.w) >= 0.8; }

function renderConjSetup(){
  const s = cjSettings();
  $("#main").innerHTML = `<div class="lhead"><button class="x" onclick="go('words')" aria-label="back">✕</button><div class="h1" style="margin:0;font-size:20px">🔤 ${t("conjTitle")}</div></div>
    <div class="pad" style="padding-top:0">
      <div class="muted" style="margin-bottom:8px">${t("conjPickTense")}</div>
      <div style="display:grid;gap:10px">${TENSES.map(x=>{ const on = s.tenses.includes(x.id), acc = cjAcc(x.id);
        return `<button onclick="cjToggleTense('${x.id}')" class="card" style="text-align:left;border-color:${on?"var(--blue)":"var(--line)"};background:${on?"#eef6ff":"#fff"};padding:12px 14px">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
            <b style="font-size:16px">${on?"☑️":"⬜"} ${x[S.lang]}</b>
            <span class="muted">${x.lv}${acc!=null?` ・ ${acc}%`:""}${tenseMastered(x.id)?" ・ 🏅":""}</span></div>
          <div class="muted" style="margin:4px 0 2px">${S.lang==="ja"?x.useJa:x.useEn}</div>
          <div style="font-size:14px">🇪🇸 ${esc(x.ex)} <span class="muted">— ${S.lang==="ja"?x.exJa:x.exEn}</span></div></button>`; }).join("")}</div>
      <button class="card" style="width:100%;text-align:left;margin-top:12px;padding:12px 14px" onclick="cjToggleVos()">${s.vos?"☑️":"⬜"} ${t("conjVos")}</button>
      <div style="margin-top:16px"><button class="btn" onclick="cjStart()">${t("conjStart")}</button></div>
    </div>`;
}
function cjPick(){
  const s = cjSettings(), verbs = Object.keys(VERBS);
  // Verb + tense pairs you got wrong before come up more often.
  const pairs = []; let tot = 0;
  s.tenses.forEach(tn=>verbs.forEach(v=>{ const w = 1 + 3*(S.conjW[v+":"+tn] || 0) + (VERBS[v].irr ? 0.5 : 0); pairs.push([v,tn,w]); tot += w; }));
  let r = Math.random()*tot, pick = pairs[0];
  for (const p of pairs){ r -= p[2]; if (r <= 0){ pick = p; break; } }
  const [verb, tense] = pick;
  const persons = [0,1,2,3,4,5].filter(p=>s.vos || p!==4);
  const person = persons[Math.floor(Math.random()*persons.length)];
  const forms = conj(verb, tense), ans = forms[person];
  const typeMode = (S.conj[tense]?.c || 0) >= 8 && Math.random() < 0.4;
  const pool = new Set([ans]);
  shuffle(forms.filter((f,i)=>i!==person && (s.vos || i!==4))).forEach(f=>pool.add(f));
  shuffle(TENSES.map(x=>x.id).filter(x=>x!==tense)).forEach(tn=>pool.add(conj(verb, tn)[person]));
  const opts = shuffle([ans, ...[...pool].filter(f=>f!==ans).slice(0, 3)]);
  return {verb, tense, person, ans, forms, mode: typeMode ? "type" : "pick", opts};
}
function cjStart(){
  const s = cjSettings();
  if (!s.tenses.length){ toast(t("conjPickOne")); return; }
  CJ = {i:0, total:12, q:cjPick(), state:"ask", sel:null, correct:0, answered:0, missed:[], start:Date.now()};
  go("conj");
}
function renderConj(){
  const q = CJ.q, ask = CJ.state === "ask";
  const head = `<div class="lhead"><button class="x" onclick="cjQuit()" aria-label="close">✕</button><div class="bar"><i style="width:${CJ.i/CJ.total*100}%;background:var(--ok)"></i></div><span class="stat" style="color:var(--ok)">✅ ${CJ.correct}</span></div>`;
  const card = `<div class="card" style="text-align:center;margin-bottom:18px">
      <div style="font-size:28px;font-weight:900;color:var(--pri)">${q.verb}</div><div class="muted">${esc(verbMean(q.verb))}</div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:12px">
        <span style="background:var(--blue);color:#fff;border-radius:99px;padding:6px 14px">${q.person===2&&S.lang==="ja"?"él / ella / usted":PERSONS[q.person]}</span>
        <span style="background:var(--purple);color:#fff;border-radius:99px;padding:6px 14px">${tenseName(q.tense)}</span></div></div>`;
  let body;
  if (q.mode === "pick"){
    body = `<div class="qtitle" style="font-size:18px">${t("conjQ")}</div>${card}
      <div class="choices">${q.opts.map((o,i)=>{ let cls = "";
        if (!ask){ if (o===q.ans) cls="right"; else if (CJ.sel===i) cls="wrong"; }
        return `<button class="choice ${cls}" onclick="cjAnswer(${i})">${esc(o)}</button>`; }).join("")}</div>`;
  } else {
    body = `<div class="qtitle" style="font-size:18px">${t("conjQType")}</div>${card}
      <input id="cjIn" class="field" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${t("typeHere")}" value="${esc(CJ.sel||"")}" ${ask?"":"disabled"}
        oninput="CJ.sel=this.value" onkeydown="if(event.key==='Enter'){event.preventDefault();cjAnswer()}">
      <div class="accents">${["á","é","í","ó","ú","ñ"].map(a=>`<button onclick="cjAccent('${a}')">${a}</button>`).join("")}</div>`;
  }
  let foot = "";
  if (ask && q.mode === "type") foot = `<div class="lfoot"><button class="btn ok" onclick="cjAnswer()">${t("check")}</button></div>`;
  if (!ask){
    const ok = CJ.state === "right";
    foot = `<div class="sheet ${ok?"ok":"ng"}"><h3>${ok?"✅ "+t("correct"):"❌ "+t("wrong")}</h3>
      ${ok ? "" : `<p><b>${t("answer")}</b>${esc(q.ans)}</p>
        <div style="background:#fff;border-radius:12px;padding:8px 12px;margin-bottom:12px;color:var(--ink);font-size:14px">
          <div class="muted" style="margin-bottom:4px">${t("conjTable")}：${q.verb} ・ ${tenseName(q.tense)}</div>
          ${q.forms.map((f,i)=>`<div style="display:flex;justify-content:space-between;padding:2px 0;${i===q.person?"color:var(--ng-d);font-weight:900":""}"><span class="muted">${PERSONS[i]}</span><span>${esc(f)}</span></div>`).join("")}</div>`}
      <button class="btn ${ok?"ok":"ng"}" onclick="cjNext()">${t("nextQ")}</button></div>`;
  }
  $("#main").innerHTML = `<div class="lesson">${head}<div class="qbody">${body}</div>${foot}</div>`;
  if (ask && q.mode === "type"){ const el = $("#cjIn"); el.focus(); }
}
function cjAccent(a){ const el = $("#cjIn"); const s = el.selectionStart, e = el.selectionEnd; el.value = el.value.slice(0,s)+a+el.value.slice(e); el.selectionStart = el.selectionEnd = s+a.length; CJ.sel = el.value; el.focus(); }
function cjAnswer(i){
  if (CJ.state !== "ask") return;
  const q = CJ.q; let ok;
  if (q.mode === "pick"){ CJ.sel = i; ok = q.opts[i] === q.ans; }
  else { if (!CJ.sel || !CJ.sel.trim()) return; ok = CJ.sel.trim().toLowerCase().replace(/\s+/g," ") === q.ans; }
  const st = S.conj[q.tense] || (S.conj[q.tense] = {c:0, w:0});
  const key = q.verb + ":" + q.tense;
  CJ.answered++;
  if (ok){ st.c++; CJ.correct++; CJ.state = "right"; if (S.conjW[key]) S.conjW[key] = Math.max(0, S.conjW[key]-1); }
  else { st.w++; CJ.state = "wrong"; S.conjW[key] = (S.conjW[key] || 0) + 1; CJ.missed.push(q); }
  speak(q.ans); save(); renderConj();
  if (ok){ clearTimeout(CJ.autoT); CJ.autoT = setTimeout(()=>{ if (view.name==="conj" && CJ.state==="right") cjNext(); }, 900); }
}
function cjNext(){
  clearTimeout(CJ.autoT);
  CJ.i++;
  if (CJ.i >= CJ.total){ cjFinish(); return; }
  CJ.q = cjPick(); CJ.state = "ask"; CJ.sel = null; renderConj();
}
function cjQuit(){ clearTimeout(CJ?.autoT); if (CJ && CJ.answered){ addTime(CJ.start); save(); } go("conjsetup"); }
function cjFinish(){
  addTime(CJ.start); S.gems += 5; S.xp += CJ.correct;
  const advanced = markActive(); checkQuests(); save();
  view = {name:"conjres", advanced}; render(); if (CJ.correct) confetti();
}
function renderConjRes(){
  const acc = CJ.answered ? Math.round(CJ.correct/CJ.answered*100) : 0;
  $("#main").innerHTML = `<div class="center">
    <div class="pop">${mascot(110)}</div>
    <div class="h1" style="color:var(--sun-d);font-size:26px">${t("conjFinish")}</div>
    <p style="font-size:18px">✅ ${CJ.correct} / ${CJ.answered} ・ 🎯 ${acc}% ・ 💎 +5</p>
    <div class="card" style="width:100%;text-align:left"><div class="muted" style="margin-bottom:6px">${t("conjMistakes")}</div>
      ${CJ.missed.length ? CJ.missed.map(q=>`<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--line)"><span>${q.verb} ・ ${PERSONS[q.person]} ・ <span class="muted">${tenseName(q.tense)}</span></span><b>${esc(q.ans)}</b></div>`).join("") : t("conjNoMistakes")}</div>
    <div style="width:100%;display:grid;gap:12px;margin-top:16px">
      <button class="btn" onclick="cjStart()">${t("retry")}</button>
      <button class="btn ghost" onclick="${view.advanced?"go('streak')":"go('words')"}">${t("home")}</button></div></div>`;
}

/* ================= 3. Shadowing ================= */
let SH = null;
function shPool(){
  const phrases = curriculumItems().filter(i=>words(i.es).length >= 2);
  const learned = shuffle(phrases.filter(i=>S.srs?.[i.es]));
  const rest = phrases.filter(i=>!S.srs?.[i.es]);
  return learned.concat(rest).slice(0, 8);
}
function shStart(){
  if (!canSpeak){ toast(t("shNoMic")); return; }
  SH = {items:shPool(), i:0, stage:0, plays:0, start:Date.now(), easy:0, rec:null, url:null};
  go("shadow");
  setTimeout(()=>shPlay(false), 400);
}
function shPlay(slow){ if (!SH || view.name !== "shadow" || !SH.items[SH.i]) return; SH.plays++; speak(SH.items[SH.i].es, slow); if (SH.stage === 1){ const b = $("#shPlays"); if (b) b.textContent = SH.plays; } }
function renderShadow(){
  const it = SH.items[SH.i];
  const head = `<div class="lhead"><button class="x" onclick="shQuit()" aria-label="close">✕</button><div class="bar"><i style="width:${SH.i/SH.items.length*100}%;background:var(--teal)"></i></div><span class="stat">${SH.i+1}/${SH.items.length}</span></div>`;
  let body;
  if (SH.stage === 0){
    body = `<div class="qtitle">🎧 ${t("shStage0")}</div>
      <div class="big-speaker"><button onclick="shPlay(false)">🔊</button><button class="slow" onclick="shPlay(true)">🐢</button></div>
      <div class="card" style="text-align:center;color:var(--ink2);letter-spacing:4px;font-size:22px">${it.es.replace(/[^\s¿?¡!.,]/g,"•")}</div>`;
  } else {
    body = `<div class="qtitle">🗣️ ${t("shStage1")}</div>
      <div class="card" style="text-align:center;padding:22px 14px">
        <div style="font-size:26px;font-weight:900;color:var(--pri)">${esc(it.es)}</div>
        <div style="margin-top:6px">${esc(mean(it))}</div></div>
      <div style="display:flex;gap:10px;justify-content:center;margin:16px 0">
        <button class="btn blue" style="width:auto;padding:12px 18px" onclick="shPlay(false)">🔊 ${t("shPlay")} (<span id="shPlays">${SH.plays}</span>)</button>
        <button class="btn ghost" style="width:auto;padding:12px 18px" onclick="shPlay(true)">🐢 ${t("shSlow")}</button></div>
      <div style="display:flex;gap:10px;justify-content:center">
        <button class="btn ${SH.rec?"ng":"ghost"}" style="width:auto;padding:10px 16px;font-size:14px" onclick="shRecord()">🎙️ ${SH.rec?t("shStop"):t("shRecord")}</button>
        ${SH.url ? `<button class="btn sun" style="width:auto;padding:10px 16px;font-size:14px" onclick="shPlayMine()">▶ ${t("shMine")}</button>` : ""}</div>`;
  }
  const foot = SH.stage === 0
    ? `<div class="lfoot"><button class="btn blue" onclick="SH.stage=1;SH.plays=0;renderShadow();shPlay(false)">${t("shShowText")}</button></div>`
    : `<div class="lfoot" style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><button class="btn ghost" onclick="shRate(false)">${t("shHard")}</button><button class="btn ok" onclick="shRate(true)">${t("shEasy")}</button></div>`;
  $("#main").innerHTML = `<div class="lesson">${head}<div class="qbody">${body}</div>${foot}</div>`;
}
async function shRecord(){
  try{
    if (SH.rec){ SH.rec.stop(); return; }
    const stream = await navigator.mediaDevices.getUserMedia({audio:true});
    const chunks = [], rec = new MediaRecorder(stream);
    rec.ondataavailable = e=>chunks.push(e.data);
    rec.onstop = ()=>{ stream.getTracks().forEach(tr=>tr.stop()); if (SH.url) URL.revokeObjectURL(SH.url);
      SH.url = URL.createObjectURL(new Blob(chunks, {type: rec.mimeType || "audio/webm"})); SH.rec = null; renderShadow(); };
    rec.start(); SH.rec = rec; renderShadow();
  }catch(e){ SH.rec = null; toast("🎙️ " + t("shNoMic")); }
}
function shPlayMine(){ try{ new Audio(SH.url).play(); }catch(e){} }
function shRate(easy){
  if (SH.rec){ try{ SH.rec.stop(); }catch(e){} }
  const it = SH.items[SH.i];
  if (easy) SH.easy++; else { const w = wstat(it.es); w.w++; w.s = 0; w.t = Date.now(); }
  if (SH.url){ URL.revokeObjectURL(SH.url); SH.url = null; }
  SH.i++; SH.stage = 0; SH.plays = 0;
  if (SH.i >= SH.items.length){ shFinish(); return; }
  renderShadow(); setTimeout(()=>shPlay(false), 300);
}
function shQuit(){ try{ speechSynthesis.cancel(); }catch(e){} if (SH?.rec){ try{ SH.rec.stop(); }catch(e){} } if (SH && SH.i) { addTime(SH.start); save(); } go("words"); }
function shFinish(){
  addTime(SH.start); S.shadow = (S.shadow || 0) + SH.items.length; S.gems += 5;
  const advanced = markActive(); checkQuests(); save();
  view = {name:"shadowres", advanced}; render(); confetti();
}
function renderShadowRes(){
  $("#main").innerHTML = `<div class="center"><div class="pop">${mascot(120)}</div>
    <div class="h1" style="color:var(--sun-d);font-size:26px">${t("shFinish")}</div>
    <p style="font-size:18px">🗣️ ${t("shCount")}: ${SH.items.length} ・ 👍 ${SH.easy} ・ 💎 +5</p>
    <div style="width:100%;display:grid;gap:12px;margin-top:12px">
      <button class="btn" onclick="shStart()">${t("retry")}</button>
      <button class="btn ghost" onclick="${view.advanced?"go('streak')":"go('words')"}">${t("home")}</button></div></div>`;
}

/* ================= 4. Roadmap & guide ================= */
function roadmapHtml(){
  srsSeed();
  const known = ALL_ITEMS.filter(i=>(S.srs[i.es]?.b||0) >= 3).length;
  const hours = (S.studyMs || 0) / 3.6e6, talks = (S.log || []).length;
  const stages = [
    {id:"A1", desc:t("lvA1"), words:300, tenses:["pres"], talks:0},
    {id:"A2", desc:t("lvA2"), words:700, tenses:["pret","imp","perf","fut"], talks:10},
    {id:"B1", desc:t("lvB1"), words:ALL_ITEMS.length, tenses:["cond","subj"], talks:30}
  ];
  const done = s => known >= s.words && s.tenses.every(tenseMastered) && talks >= s.talks;
  const cur = stages.findIndex(s=>!done(s));
  const bar = (v, max, color) => `<div class="bar" style="height:10px;margin:3px 0 8px"><i style="width:${Math.min(100, v/max*100)}%;background:${color}"></i></div>`;
  return `<div class="h1" style="font-size:18px;margin-top:20px">🗺️ ${t("roadmap")}</div>
    <div style="display:grid;gap:10px">${stages.map((s,i)=>{ const isCur = i===cur, ok = done(s);
      return `<div class="card" style="border-color:${isCur?"var(--pri)":ok?"var(--ok)":"var(--line)"};${!isCur&&!ok?"opacity:.75":""}">
        <div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:18px">${s.id}</b>
          <span class="muted" style="color:${isCur?"var(--pri)":"var(--ok)"}">${ok?"✅ "+t("stageDone"):isCur?"📍 "+t("current"):""}</span></div>
        <div class="muted" style="margin:2px 0 8px">${s.desc}</div>
        <div style="font-size:13px;display:flex;justify-content:space-between"><span>📖 ${t("known")}</span><span>${Math.min(known,s.words)} / ${s.words}</span></div>${bar(known, s.words, "var(--ok)")}
        <div style="font-size:13px;margin-bottom:4px">🔤 ${t("tensesOk")}：${s.tenses.map(tn=>`<span style="white-space:nowrap">${tenseMastered(tn)?"✅":"⬜"} ${tenseName(tn)}</span>`).join(" ")}</div>
        ${s.talks?`<div style="font-size:13px;display:flex;justify-content:space-between"><span>🗣️ ${t("talks")}</span><span>${Math.min(talks,s.talks)} / ${s.talks}</span></div>${bar(talks, s.talks, "var(--sun)")}`:""}
      </div>`; }).join("")}</div>
    <div class="card" style="margin-top:10px"><div style="display:flex;justify-content:space-between"><span>⏱ ${t("hours")}</span><b>${hours.toFixed(1)} h</b></div>
      ${bar(hours, 375, "var(--blue)")}<div class="muted">${t("hoursGoal")}</div></div>
    <button class="btn ghost" style="margin-top:12px" onclick="go('guide')">📘 ${t("guideTitle")}</button>`;
}
function renderGuide(){
  const items = [["🔁","g1"],["🧠","g2"],["📈","g3"],["🔤","g4"],["🎧","g5"],["🗣️","g6"],["⏱","g7"]];
  $("#main").innerHTML = `<div class="lhead"><button class="x" onclick="go(S.tab)" aria-label="back">✕</button><div class="h1" style="margin:0;font-size:20px">📘 ${t("guideTitle")}</div></div>
    <div class="pad" style="padding-top:0;display:grid;gap:10px">
      ${items.map(([ic,k])=>`<div class="card"><b style="font-size:16px">${ic} ${t(k+"t")}</b><p style="margin:6px 0 0;font-weight:600;line-height:1.6">${t(k)}</p></div>`).join("")}
      <p class="muted" style="line-height:1.6">${t("sources")}</p>
      <button class="btn" onclick="startStudy()">📅 ${t("studyStart")}</button>
    </div>`;
}
function newPerDayHtml(){
  const cur = S.settings?.newPerDay ?? 10;
  return `<div class="h1" style="font-size:18px;margin-top:20px">🆕 ${t("newPerDay")}</div>
    <div class="seg">${[5,10,15,20].map(n=>`<button class="${cur===n?"on":""}" onclick="S.settings=Object.assign({},S.settings,{newPerDay:${n}});save();render()">${fmt(t("perDay"), n)}</button>`).join("")}</div>`;
}
function practiceCardsHtml(){
  return `<div class="h1" style="font-size:20px">🏋️ ${t("practiceTitle")}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px">
      <button class="card" style="text-align:left;padding:14px" onclick="go('conjsetup')"><div style="font-size:28px">🔤</div><b>${t("conjTitle")}</b><div class="muted">${t("conjSub")}</div></button>
      <button class="card" style="text-align:left;padding:14px" onclick="shStart()"><div style="font-size:28px">🗣️</div><b>${t("shadowTitle")}</b><div class="muted">${t("shadowSub")}</div></button>
    </div>`;
}

window.EXTRA_VIEWS = {studyres:renderStudyRes, conjsetup:renderConjSetup, conj:renderConj, conjres:renderConjRes,
  shadow:renderShadow, shadowres:renderShadowRes, guide:renderGuide};
window.EXTRA_FULL = Object.keys(window.EXTRA_VIEWS);
