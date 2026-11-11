// Extra vocabulary units. One word per line: Spanish | English | Japanese
// Units are added after the built-in ones in index.html; duplicates are skipped there.
(function(){
const PALETTE = [
  ["#F2542D","#c63e1c"],["#14B8A6","#0e8a7c"],["#3B82F6","#2563c9"],["#9B5DE5","#7a3fc4"],
  ["#E0A100","#b07e00"],["#EC4899","#be2f78"],["#10B981","#0b8a60"],["#6366F1","#4547c9"],
  ["#F97316","#c2570c"],["#0EA5E9","#0b7fb5"],["#EF4444","#bf2f2f"],["#65A30D","#4a7a08"]
];
const units = [];
function u(id, icon, ja, en, txt){
  const [color, dark] = PALETTE[units.length % PALETTE.length];
  units.push({id, icon, color, dark, name:{ja, en},
    items: txt.trim().split("\n").map(l=>l.split("|").map(s=>s.trim())).filter(r=>r.length===3)});
}

u("pronombres","👉","代名詞・疑問詞","Pronouns & Questions",`
yo|I|私
tú|you (informal)|君・あなた
él|he|彼
ella|she|彼女
usted|you (formal)|あなた（丁寧）
nosotros|we|私たち
ellos|they|彼ら
ustedes|you all|あなたたち
mi|my|私の
tu|your|君の
su|his / her / their|彼の・彼女の・彼らの
este|this|この・これ
ese|that|その・それ
aquí|here|ここ
allí|there|あそこ
qué|what|何
quién|who|誰
dónde|where|どこ
cuándo|when|いつ
cómo|how|どのように
por qué|why|なぜ
cuánto|how much|いくら・どれくらい
cuál|which|どれ
porque|because|なぜなら
también|also|〜も
`);

u("conectores","🔗","小さなことば","Small words",`
y|and|そして
o|or|または
pero|but|でも
con|with|〜と一緒に
sin|without|〜なしで
para|for / in order to|〜のために
de|of / from|〜の・〜から
en|in / on / at|〜に・〜で
a|to|〜へ
desde|since / from|〜から（以来）
hasta|until|〜まで
entre|between|〜の間
sobre|on / about|〜の上に・〜について
muy|very|とても
más|more|もっと
menos|less|より少なく
mucho|a lot|たくさん
poco|little|少し
todo|all / everything|全部
nada|nothing|何も〜ない
algo|something|何か
alguien|someone|誰か
nadie|nobody|誰も〜ない
ya|already|もう
todavía|still / yet|まだ
`);

u("verbos3","⭐","基本動詞","Core verbs",`
ser|to be (permanent)|〜である
estar|to be (state / location)|（状態・場所が）〜である
hay|there is / there are|〜がある・いる
decir|to say|言う
dar|to give|与える
llegar|to arrive|着く
pasar|to pass / to happen|過ぎる・起こる
deber|must / to owe|〜すべき
poner|to put|置く
parecer|to seem|〜のように見える
quedar|to stay / to remain|残る・とどまる
creer|to believe|信じる・思う
llevar|to carry / to wear|運ぶ・身につける
dejar|to leave / to let|置いていく・させる
seguir|to follow / to continue|続ける・従う
encontrar|to find|見つける
llamar|to call|呼ぶ・電話する
conocer|to know (a person / place)|（人・場所を）知っている
pensar|to think|考える
empezar|to begin|始める
volver|to return|戻る
entender|to understand|理解する
esperar|to wait / to hope|待つ・期待する
buscar|to look for|探す
necesitar|to need|必要とする
recordar|to remember|覚えている・思い出す
terminar|to finish|終える
sentir|to feel|感じる
mirar|to look at|見る・眺める
usar|to use|使う
`);

u("verbos4","🧹","毎日の動作","Daily actions",`
abrir|to open|開ける
cerrar|to close|閉める
caminar|to walk|歩く
correr|to run|走る
nadar|to swim|泳ぐ
bailar|to dance|踊る
cantar|to sing|歌う
jugar|to play (a game / sport)|遊ぶ・（スポーツを）する
tocar|to touch / to play (an instrument)|触る・演奏する
cocinar|to cook|料理する
limpiar|to clean|掃除する
lavar|to wash|洗う
ducharse|to take a shower|シャワーを浴びる
levantarse|to get up|起きる
acostarse|to go to bed|寝る（床につく）
despertarse|to wake up|目を覚ます
vestirse|to get dressed|服を着る
viajar|to travel|旅行する
conducir|to drive|運転する
enviar|to send|送る
recibir|to receive|受け取る
ayudar|to help|助ける
enseñar|to teach / to show|教える・見せる
aprender|to learn|学ぶ
preguntar|to ask|尋ねる
contestar|to answer|答える
olvidar|to forget|忘れる
perder|to lose|失う・なくす
ganar|to win / to earn|勝つ・稼ぐ
cambiar|to change|変える
`);

u("verbos5","🎭","いろいろな動詞","More actions",`
abrazar|to hug|抱きしめる
besar|to kiss|キスする
sonreír|to smile|ほほえむ
reír|to laugh|笑う
llorar|to cry|泣く
gritar|to shout|叫ぶ
descansar|to rest|休む
invitar|to invite|招待する
visitar|to visit|訪ねる
subir|to go up|上がる・登る
bajar|to go down|下りる
entrar|to enter|入る
sentarse|to sit down|座る
preparar|to prepare|準備する
probar|to try / to taste|試す・味見する
mostrar|to show|見せる
explicar|to explain|説明する
ocurrir|to happen|起こる
morir|to die|死ぬ
nacer|to be born|生まれる
crecer|to grow|成長する
construir|to build|建てる
romper|to break|壊す
elegir|to choose|選ぶ
decidir|to decide|決める
`);

u("verbos6","🧰","便利な動詞","Useful verbs",`
mandar|to send / to order|送る・命じる
traer|to bring|持ってくる
tomar|to take / to drink|取る・飲む
coger|to take / to catch|つかむ・（乗り物に）乗る
intentar|to try|試みる
guardar|to keep / to save|保管する・保存する
cuidar|to take care of|世話をする
compartir|to share|共有する
contar|to count / to tell|数える・話す
cortar|to cut|切る
llenar|to fill|満たす
mover|to move|動かす
tirar|to throw / to pull|投げる・引く
empujar|to push|押す
pedir|to ask for / to order|頼む・注文する
alquilar|to rent|借りる（賃貸）
prestar|to lend|貸す
devolver|to give back|返す
reservar|to book|予約する
celebrar|to celebrate|祝う
funcionar|to work (machine)|作動する
gustar|to like|好む
encantar|to love (like a lot)|大好きである
doler|to hurt|痛む
importar|to matter|重要である
`);

u("comida2","🥗","食べ物2","Food 2",`
el huevo|egg|卵
el pollo|chicken|鶏肉
la sopa|soup|スープ
la ensalada|salad|サラダ
la fruta|fruit|果物
la verdura|vegetable|野菜
el tomate|tomato|トマト
la patata|potato|じゃがいも
la cebolla|onion|玉ねぎ
el ajo|garlic|にんにく
la naranja|orange (fruit)|オレンジ
el plátano|banana|バナナ
la fresa|strawberry|いちご
el limón|lemon|レモン
el azúcar|sugar|砂糖
la sal|salt|塩
el aceite|oil|油
la mantequilla|butter|バター
el té|tea|お茶
el zumo|juice|ジュース
el desayuno|breakfast|朝食
el almuerzo|lunch|昼食
la cena|dinner|夕食
el postre|dessert|デザート
el helado|ice cream|アイスクリーム
el pastel|cake|ケーキ
el chocolate|chocolate|チョコレート
el bocadillo|sandwich (baguette)|サンドイッチ（スペイン風）
la galleta|cookie|クッキー
el jamón|ham|ハム
`);

u("restaurante","🍷","レストランで","At the restaurant",`
el restaurante|restaurant|レストラン
el camarero|waiter|ウェイター
el menú|menu|メニュー
el plato|plate / dish|皿・料理
el vaso|glass|コップ
la taza|cup|カップ
el tenedor|fork|フォーク
el cuchillo|knife|ナイフ
la cuchara|spoon|スプーン
la servilleta|napkin|ナプキン
la propina|tip|チップ
Una mesa para dos, por favor|A table for two, please|2人席をお願いします
¿Qué me recomienda?|What do you recommend?|おすすめは何ですか？
Para mí, la sopa|The soup for me|私はスープにします
Sin hielo, por favor|No ice, please|氷なしでお願いします
Soy vegetariano|I'm vegetarian|私はベジタリアンです
¿Tienen wifi?|Do you have wifi?|Wi-Fiはありますか？
Otra cerveza, por favor|Another beer, please|ビールをもう一杯お願いします
Estoy lleno|I'm full|お腹いっぱいです
¿Está incluida la propina?|Is the tip included?|チップは含まれていますか？
`);

u("ciudad","🏙️","街・場所","City & Places",`
la ciudad|city|都市・街
el pueblo|town / village|町・村
el centro|center / downtown|中心・繁華街
el parque|park|公園
la plaza|square|広場
el banco|bank / bench|銀行・ベンチ
el mercado|market|市場
el supermercado|supermarket|スーパー
el hospital|hospital|病院
la iglesia|church|教会
el museo|museum|博物館・美術館
la biblioteca|library|図書館
el cine|cinema|映画館
el teatro|theater|劇場
el bar|bar|バル・バー
la playa|beach|ビーチ
la montaña|mountain|山
el río|river|川
el mar|sea|海
el puente|bridge|橋
el edificio|building|建物
la universidad|university|大学
la panadería|bakery|パン屋
la peluquería|hair salon|美容院
la comisaría|police station|警察署
el ayuntamiento|city hall|市役所
la esquina|corner|角
el barrio|neighborhood|地区・近所
`);

u("transporte","🚆","交通・旅","Transport & Travel",`
el tren|train|電車
el autobús|bus|バス
el metro|subway|地下鉄
el avión|airplane|飛行機
el barco|ship / boat|船
la bicicleta|bicycle|自転車
el taxi|taxi|タクシー
la parada|stop (bus)|停留所
el andén|platform|（駅の）ホーム
la salida|exit / departure|出口・出発
la llegada|arrival|到着
la entrada|entrance / ticket|入口・入場券
el pasaporte|passport|パスポート
la maleta|suitcase|スーツケース
el mapa|map|地図
el viaje|trip|旅行
la reserva|reservation|予約
Un billete de ida y vuelta|A round-trip ticket|往復切符を1枚
¿A qué hora sale el tren?|What time does the train leave?|電車は何時に出ますか？
¿Cuánto tiempo se tarda?|How long does it take?|どれくらい時間がかかりますか？
Tengo una reserva|I have a reservation|予約しています
Me he perdido|I'm lost|道に迷いました
`);

u("gente","🧑‍🤝‍🧑","人・家族2","People & Family 2",`
el hombre|man|男性
la mujer|woman / wife|女性・妻
el niño|boy / child|男の子・子ども
la niña|girl|女の子
el bebé|baby|赤ちゃん
el chico|boy / guy|男の子・若い男性
la chica|girl / young woman|女の子・若い女性
la gente|people|人々
la persona|person|人
el marido|husband|夫
la esposa|wife|妻
el novio|boyfriend|彼氏
la novia|girlfriend|彼女（恋人）
el tío|uncle|おじ
la tía|aunt|おば
el primo|cousin (male)|いとこ（男性）
la prima|cousin (female)|いとこ（女性）
el nieto|grandson|孫（男）
la nieta|granddaughter|孫（女）
los padres|parents|両親
el vecino|neighbor|隣人
el señor|Mr. / gentleman|〜さん（男性）・紳士
la señora|Mrs. / lady|〜さん（女性）・婦人
la familia|family|家族
Somos cuatro en mi familia|There are four of us in my family|私の家族は4人です
`);

u("trabajos","👩‍⚕️","職業・会社","Jobs & Company",`
el enfermero|nurse|看護師
el abogado|lawyer|弁護士
el ingeniero|engineer|エンジニア
el cocinero|cook|料理人
el policía|police officer|警察官
el bombero|firefighter|消防士
el conductor|driver|運転手
el vendedor|salesperson|販売員
el empleado|employee|従業員
la empresa|company|会社
el sueldo|salary|給料
el cliente|customer|客
el horario|schedule|スケジュール・時間割
el proyecto|project|プロジェクト
el correo|mail / email|郵便・メール
el ordenador|computer|パソコン
la impresora|printer|プリンター
el documento|document|書類
las vacaciones|vacation|休暇
Estoy de vacaciones|I'm on vacation|休暇中です
¿A qué te dedicas?|What do you do (for work)?|お仕事は何ですか？
Soy estudiante|I'm a student|私は学生です
`);

u("estudio","✏️","勉強・ことば","Study & Language",`
la clase|class|授業・クラス
el examen|exam|試験
la tarea|homework|宿題
el cuaderno|notebook|ノート
el bolígrafo|pen|ボールペン
el lápiz|pencil|鉛筆
el papel|paper|紙
la palabra|word|単語
la frase|sentence / phrase|文・フレーズ
el idioma|language|言語
el español|Spanish (language)|スペイン語
el inglés|English (language)|英語
el japonés|Japanese (language)|日本語
el diccionario|dictionary|辞書
la página|page|ページ
el error|mistake|間違い
¿Cómo se dice esto en español?|How do you say this in Spanish?|これはスペイン語で何と言いますか？
¿Qué significa esto?|What does this mean?|これはどういう意味ですか？
Estoy aprendiendo español|I'm learning Spanish|スペイン語を勉強中です
Hablo un poco de español|I speak a little Spanish|スペイン語を少し話します
¿Puedes escribirlo?|Can you write it?|書いてくれますか？
Soy de Japón|I'm from Japan|日本出身です
`);

u("tiempo2","🕰️","時間・月","Time & Months",`
el día|day|日
la noche|night|夜
la mañana|morning|朝・午前
la tarde|afternoon / evening|午後・夕方
la hora|hour / time|時間・〜時
el minuto|minute|分
el segundo|second (time)|秒
el fin de semana|weekend|週末
temprano|early|早く
tarde|late|遅く
pronto|soon|すぐに
luego|later|後で
antes|before|前に
después|after|後に
a veces|sometimes|ときどき
otra vez|again|もう一度
febrero|February|2月
marzo|March|3月
abril|April|4月
mayo|May|5月
junio|June|6月
julio|July|7月
agosto|August|8月
septiembre|September|9月
octubre|October|10月
noviembre|November|11月
diciembre|December|12月
Son las tres|It's three o'clock|3時です
`);

u("clima","🌦️","天気・季節","Weather & Seasons",`
el tiempo|weather / time|天気・時間
el sol|sun|太陽
la lluvia|rain|雨
la nieve|snow|雪
el viento|wind|風
la nube|cloud|雲
el cielo|sky|空
la temperatura|temperature|気温
la primavera|spring|春
el verano|summer|夏
el otoño|autumn|秋
el invierno|winter|冬
el paraguas|umbrella|傘
Hace sol|It's sunny|晴れています
Hace viento|It's windy|風が強いです
Hace buen tiempo|The weather is nice|いい天気です
Hace mal tiempo|The weather is bad|天気が悪いです
Está nublado|It's cloudy|曇っています
Nieva|It's snowing|雪が降っています
¿Qué tiempo hace?|What's the weather like?|天気はどうですか？
`);

u("adjetivos2","📏","形容詞2","Adjectives 2",`
bueno|good|良い
malo|bad|悪い
alto|tall / high|背が高い・高い
bajo|short / low|背が低い・低い
largo|long|長い
corto|short (length)|短い
gordo|fat|太った
delgado|thin|やせた
joven|young|若い
guapo|good-looking|かっこいい・美人の
feo|ugly|醜い
fácil|easy|簡単な
difícil|difficult|難しい
rápido|fast|速い
lento|slow|遅い
caliente|hot (to the touch)|熱い
frío|cold|冷たい
limpio|clean|清潔な
sucio|dirty|汚い
lleno|full|いっぱいの
vacío|empty|空（から）の
abierto|open|開いている
cerrado|closed|閉まっている
importante|important|重要な
interesante|interesting|面白い
aburrido|boring / bored|退屈な
divertido|fun|楽しい
simpático|nice (person)|感じのいい
tranquilo|calm / quiet|静かな・落ち着いた
ocupado|busy|忙しい
`);

u("adjetivos3","🌶️","形容詞3・味","Adjectives 3 & Taste",`
libre|free (available)|空いている・自由な
mismo|same|同じ
diferente|different|違う
mejor|better / best|より良い・最高の
peor|worse|より悪い
primero|first|最初の
último|last|最後の
próximo|next|次の
posible|possible|可能な
imposible|impossible|不可能な
seguro|sure / safe|確かな・安全な
listo|ready / smart|準備ができた・賢い
verdadero|true|本当の
falso|false|偽の
fuerte|strong|強い
débil|weak|弱い
rico|rich / tasty|金持ちの・おいしい
pobre|poor|貧しい・かわいそうな
duro|hard|かたい・つらい
blando|soft|やわらかい
dulce|sweet|甘い
salado|salty|しょっぱい
picante|spicy|辛い
amargo|bitter|苦い
ácido|sour|酸っぱい
`);

u("personalidad","🙂","性格・見た目","Personality & Looks",`
amable|kind|親切な
inteligente|intelligent|賢い
tímido|shy|内気な
alegre|cheerful|陽気な
serio|serious|まじめな
trabajador|hard-working|働き者の
perezoso|lazy|怠け者の
valiente|brave|勇敢な
generoso|generous|気前のいい
educado|polite|礼儀正しい
gracioso|funny|面白い（人）
sincero|sincere|誠実な
famoso|famous|有名な
rubio|blond|金髪の
moreno|dark-haired / tanned|黒髪の・日焼けした
`);

u("sentir2","💗","気持ちの表現","Expressing feelings",`
el amor|love|愛
la alegría|joy|喜び
el miedo|fear|恐怖
Tengo miedo|I'm scared|怖いです
Tengo frío|I'm cold|寒いです
Tengo calor|I'm hot|暑いです
Tengo sueño|I'm sleepy|眠いです
Tengo prisa|I'm in a hurry|急いでいます
Estoy aburrido|I'm bored|退屈です
Estoy preocupado|I'm worried|心配です
Estoy ocupado|I'm busy|忙しいです
Estoy listo|I'm ready|準備できました
Estoy de acuerdo|I agree|賛成です
Me gusta|I like it|好きです
No me gusta|I don't like it|好きではありません
Te quiero|I love you|愛してる
Te echo de menos|I miss you|会いたいよ
¡Qué pena!|What a pity!|残念！
¡Qué miedo!|How scary!|怖い！
¡Qué sorpresa!|What a surprise!|びっくり！
`);

u("casa2","🛋️","家の中","Around the house",`
el baño|bathroom|浴室・トイレ
el dormitorio|bedroom|寝室
el salón|living room|リビング
el piso|apartment / floor|マンション・階
la habitación|room|部屋
la pared|wall|壁
el suelo|floor / ground|床・地面
la escalera|stairs|階段
el jardín|garden|庭
la luz|light|光・電気
el espejo|mirror|鏡
el sofá|sofa|ソファ
el armario|closet|クローゼット
la nevera|fridge|冷蔵庫
el horno|oven|オーブン
la lavadora|washing machine|洗濯機
la televisión|television|テレビ
la toalla|towel|タオル
el jabón|soap|石けん
la basura|trash|ゴミ
la caja|box / checkout|箱・レジ
la foto|photo|写真
el reloj|clock / watch|時計
las gafas|glasses|メガネ
el regalo|gift|プレゼント
la cartera|wallet|財布
el bolso|handbag|ハンドバッグ
la cosa|thing|もの
`);

u("ropa","👕","服","Clothes",`
la ropa|clothes|服
los pantalones|pants|ズボン
la falda|skirt|スカート
la chaqueta|jacket|ジャケット
el abrigo|coat|コート
el jersey|sweater|セーター
la camiseta|T-shirt|Tシャツ
el sombrero|hat|帽子
los calcetines|socks|靴下
el cinturón|belt|ベルト
la corbata|tie|ネクタイ
el traje|suit|スーツ
las botas|boots|ブーツ
el pijama|pajamas|パジャマ
¿Me lo puedo probar?|Can I try it on?|試着してもいいですか？
¿Lo tiene en otra talla?|Do you have it in another size?|別のサイズはありますか？
Me queda bien|It fits me well|ぴったりです
Me lo llevo|I'll take it|これにします（買います）
`);

u("cuerpo2","🤒","体・病院","Body & Doctor",`
la cara|face|顔
la nariz|nose|鼻
la oreja|ear|耳
el diente|tooth|歯
el cuello|neck|首
la espalda|back|背中
el estómago|stomach|胃・お腹
la pierna|leg|脚
el dedo|finger|指
la rodilla|knee|ひざ
la piel|skin|肌
la sangre|blood|血
el dolor|pain|痛み
la fiebre|fever|熱
la tos|cough|せき
la medicina|medicine|薬
Me duele el estómago|I have a stomachache|お腹が痛いです
Tengo fiebre|I have a fever|熱があります
Necesito un médico|I need a doctor|医者が必要です
¡Ayuda!|Help!|助けて！
Llame a una ambulancia|Call an ambulance|救急車を呼んでください
¿Dónde está el hospital?|Where is the hospital?|病院はどこですか？
`);

u("naturaleza","🌳","自然","Nature",`
el árbol|tree|木
la flor|flower|花
la planta|plant|植物
el bosque|forest|森
el lago|lake|湖
la isla|island|島
la tierra|earth / land|地球・土地
la piedra|stone|石
la arena|sand|砂
el campo|countryside / field|田舎・畑
la luna|moon|月（天体）
la estrella|star|星
el fuego|fire|火
el aire|air|空気
la hoja|leaf / sheet|葉・紙1枚
el mundo|world|世界
el país|country|国
el animal|animal|動物
el insecto|insect|虫
el paisaje|landscape|景色
`);

u("animales2","🦁","動物2","Animals 2",`
la gallina|hen|ニワトリ
el pato|duck|アヒル
la oveja|sheep|羊
la cabra|goat|ヤギ
el león|lion|ライオン
el tigre|tiger|トラ
el elefante|elephant|ゾウ
el mono|monkey|サル
la serpiente|snake|ヘビ
el lobo|wolf|オオカミ
el zorro|fox|キツネ
la mariposa|butterfly|チョウ
la abeja|bee|ハチ
la araña|spider|クモ
la tortuga|turtle|カメ
`);

u("ocio","⚽","趣味・遊び","Hobbies & Free time",`
la música|music|音楽
la película|movie|映画
el deporte|sport|スポーツ
el fútbol|soccer|サッカー
el baloncesto|basketball|バスケットボール
el tenis|tennis|テニス
el juego|game|ゲーム・遊び
la fiesta|party|パーティー
el concierto|concert|コンサート
la canción|song|歌
la novela|novel|小説
el arte|art|芸術
la guitarra|guitar|ギター
el piano|piano|ピアノ
el partido|match / game|試合
el equipo|team|チーム
el tiempo libre|free time|自由時間
¿Qué te gusta hacer?|What do you like to do?|何をするのが好き？
Me gusta leer|I like reading|読書が好きです
Me gusta viajar|I like traveling|旅行が好きです
Juego al fútbol|I play soccer|サッカーをします
¿Vamos al cine?|Shall we go to the movies?|映画に行かない？
¿Quedamos mañana?|Shall we meet tomorrow?|明日会わない？
¿Tienes planes para el fin de semana?|Do you have plans for the weekend?|週末の予定はある？
`);

u("conversacion","🗨️","会話フレーズ","Conversation",`
¿Qué haces?|What are you doing?|何してるの？
¿De dónde eres?|Where are you from?|どこの出身？
¿Dónde vives?|Where do you live?|どこに住んでるの？
¿Cuántos años tienes?|How old are you?|何歳？
Tengo treinta años|I'm thirty years old|30歳です
¿Te gusta?|Do you like it?|気に入った？
¡Por supuesto!|Of course!|もちろん！
Creo que sí|I think so|そう思う
Creo que no|I don't think so|そうは思わない
Depende|It depends|場合による
No importa|It doesn't matter|気にしないで
Tienes razón|You're right|その通り
No estoy seguro|I'm not sure|よくわからない
¡Qué interesante!|How interesting!|面白いね！
¡Genial!|Great!|最高！
¡Perfecto!|Perfect!|完璧！
¡Venga!|Come on!|さあ！・いいよ！
Un momento|Just a moment|ちょっと待って
Ahora vuelvo|I'll be right back|すぐ戻ります
¡Bienvenido!|Welcome!|ようこそ！
¡Que te diviertas!|Have fun!|楽しんでね！
¡Buen viaje!|Have a good trip!|よい旅を！
¡Feliz cumpleaños!|Happy birthday!|誕生日おめでとう！
¡Mucha suerte!|Good luck!|幸運を！
¿Qué pasa?|What's up?|どうしたの？
Nada especial|Nothing special|特に何も
Lo mismo|The same|同じく
Igualmente|Likewise|こちらこそ
Encantado|Pleased to meet you|はじめまして（よろしく）
¿Y tú?|And you?|君は？
`);

u("cortesia","🙇","ていねいな表現","Polite phrases",`
Disculpe|Excuse me (formal)|すみません（丁寧）
Con permiso|Excuse me (passing through)|失礼します（通ります）
¿Me permite?|May I?|よろしいですか？
Muy amable|Very kind of you|ご親切にどうも
No hay de qué|Don't mention it|どういたしまして
Perdone la molestia|Sorry to bother you|お手数をおかけしてすみません
¡Que tengas un buen día!|Have a nice day!|よい一日を！
¡Hasta pronto!|See you soon!|また近いうちに！
¡Hasta la próxima!|Until next time!|また次回！
Saludos a tu familia|Say hello to your family|ご家族によろしく
¿Cómo está usted?|How are you? (formal)|お元気ですか？（丁寧）
Bastante bien|Pretty good|まあまあ元気です
Más o menos|So-so|まあまあ
¿Qué tal el día?|How was your day?|今日はどうだった？
Fenomenal|Fantastic|最高です
Me alegro|I'm glad|よかった
Lo siento mucho|I'm very sorry|本当にごめんなさい
Gracias por todo|Thanks for everything|いろいろありがとう
`);

u("frases","💡","毎日の一文","Everyday sentences",`
Voy a casa|I'm going home|家に帰ります
Voy al trabajo|I'm going to work|仕事に行きます
Tengo que irme|I have to go|もう行かなきゃ
Quiero dormir|I want to sleep|寝たい
Necesito ayuda|I need help|助けが必要です
No tengo tiempo|I don't have time|時間がありません
Tengo mucho trabajo|I have a lot of work|仕事がたくさんあります
Estoy en casa|I'm at home|家にいます
Estoy llegando|I'm almost there|もうすぐ着きます
Llego tarde|I'm running late|遅れます
¿Dónde estás?|Where are you?|どこにいるの？
¿A qué hora?|At what time?|何時に？
Nos vemos a las ocho|See you at eight|8時に会おう
¿Qué quieres comer?|What do you want to eat?|何食べたい？
¿Quieres un café?|Do you want a coffee?|コーヒー飲む？
Sí, por favor|Yes, please|はい、お願いします
No, gracias|No, thank you|いいえ、結構です
Me voy a dormir|I'm going to bed|もう寝るね
Buen trabajo|Good job|よくやった
¡Ten cuidado!|Be careful!|気をつけて！
No te preocupes|Don't worry|心配しないで
Espera un momento|Wait a moment|ちょっと待って
¿Puedes hablar más alto?|Can you speak louder?|もっと大きな声で話してくれる？
Llámame|Call me|電話して
Escríbeme|Write to me|連絡してね
¿Cuál prefieres?|Which do you prefer?|どっちがいい？
Prefiero este|I prefer this one|こっちがいい
Es verdad|It's true|本当だよ
No es verdad|It's not true|本当じゃないよ
Hace mucho tiempo|It's been a long time|ずいぶん前に・久しぶり
`);

u("numeros2","💶","数字2・お金","Numbers 2 & Money",`
cero|zero (0)|0
trece|thirteen (13)|13
catorce|fourteen (14)|14
quince|fifteen (15)|15
dieciséis|sixteen (16)|16
diecisiete|seventeen (17)|17
dieciocho|eighteen (18)|18
diecinueve|nineteen (19)|19
cuarenta|forty (40)|40
sesenta|sixty (60)|60
setenta|seventy (70)|70
ochenta|eighty (80)|80
noventa|ninety (90)|90
doscientos|two hundred (200)|200
quinientos|five hundred (500)|500
un millón|one million|100万
la mitad|half|半分
el número|number|数字・番号
tercero|third|3番目の
¿Cuántos?|How many?|いくつ？
Dos cafés, por favor|Two coffees, please|コーヒーを2つください
el euro|euro|ユーロ
el precio|price|値段
Son diez euros|It's ten euros|10ユーロです
`);

u("dinero","💳","お店・郵便","Money & Services",`
el cajero|ATM / cashier|ATM・レジ係
la tarjeta|card|カード
el efectivo|cash|現金
la moneda|coin / currency|硬貨・通貨
el recibo|receipt|レシート
la oferta|sale / offer|セール・特価
el descuento|discount|割引
gratis|free (no cost)|無料
la oficina de correos|post office|郵便局
el sello|stamp|切手
el paquete|package|小包
la carta|letter / menu|手紙・メニュー
¿Dónde hay un cajero?|Where is there an ATM?|ATMはどこにありますか？
¿Aceptan efectivo?|Do you accept cash?|現金は使えますか？
¿Me da el recibo?|Can I have the receipt?|レシートをもらえますか？
¿Hay descuento?|Is there a discount?|割引はありますか？
`);

u("sustantivos","📦","よく使う名詞","Common nouns",`
la vida|life|人生・生活
la vez|time (occurrence)|〜回
la forma|form / way|形・方法
el problema|problem|問題
la idea|idea|アイデア
la verdad|truth|真実
la historia|history / story|歴史・物語
el nombre|name|名前
la parte|part|部分
el lugar|place|場所
el momento|moment|瞬間
la razón|reason|理由
el final|end|終わり
el principio|beginning|始まり
la noticia|news (item)|ニュース
la cuenta|bill / account|会計・口座
el ejemplo|example|例
el tema|topic|テーマ・話題
la información|information|情報
la ayuda|help|助け
la oportunidad|opportunity|機会
el cambio|change|変化・おつり
la diferencia|difference|違い
el resto|rest (remainder)|残り
el sitio|spot / site|（ちょっとした）場所・席・サイト
la manera|way|やり方
el sueño|dream / sleepiness|夢・眠気
la fecha|date|日付
la edad|age|年齢
la dirección|address / direction|住所・方向
`);

u("tecnologia","📱","スマホ・ネット","Phone & Internet",`
el móvil|mobile phone|携帯電話
el mensaje|message|メッセージ
la contraseña|password|パスワード
la batería|battery|バッテリー
el cargador|charger|充電器
la aplicación|app|アプリ
la red|network|ネットワーク
la página web|website|ウェブサイト
la pantalla|screen|画面
el correo electrónico|email|電子メール
descargar|to download|ダウンロードする
¿Me das tu número?|Can I have your number?|電話番号を教えてくれる？
Te mando un mensaje|I'll send you a message|メッセージ送るね
No tengo batería|My battery is dead|充電が切れた
¿Cuál es la contraseña del wifi?|What's the wifi password?|Wi-Fiのパスワードは何ですか？
Te llamo luego|I'll call you later|後で電話するね
`);

u("adverbios","✨","便利な副詞","Useful adverbs",`
bien|well|よく・上手に
mal|badly|悪く・下手に
así|like this|このように
casi|almost|ほとんど
solo|only|〜だけ
juntos|together|一緒に
despacio|slowly|ゆっくり
rápidamente|quickly|すばやく
quizás|maybe|たぶん
claro|of course / clear|もちろん・明るい
tampoco|neither|〜もない
además|besides|さらに
entonces|then / so|それで・その時
sin embargo|however|しかし
por ejemplo|for example|例えば
de verdad|really|本当に
de repente|suddenly|突然
al final|in the end|最後に・結局
por fin|finally|ついに
a menudo|often|よく・しばしば
en casa|at home|家で
afuera|outside|外に
adentro|inside|中に
arriba|up / upstairs|上に
abajo|down / downstairs|下に
`);

window.EXTRA_UNITS = units;
})();
