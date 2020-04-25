"use_strict";
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("Registro de SW exitoso", reg))
    .catch((err) => console.warn("Error al tratar de registrar el sw", err));
}
var bar1 = new ldBar("#instagram_caracteres", {
  stroke: "#54c1ab",
  "stroke-width": 6,
  preset: "fan",
  width: "50%",
  height: "50%",
});
var bar2 = new ldBar("#linkedin_caracteres", {
  stroke: "#54c1ab",
  "stroke-width": 6,
  preset: "fan",
  width: "50%",
  height: "50%",
});
var bar3 = new ldBar("#facebook_caracteres", {
  stroke: "#54c1ab",
  "stroke-width": 6,
  preset: "fan",
});
// emojisDiv.innerHTML = html;
// $('#area_texto_copiar').emoji({
// 	button:'&#x1F642;',
// 	place: 'before'
// });
$("#area_texto_copiar").emoji({
  button: "&#x1F642;",
  place: "after",
});
// ♕ ♚ ♛ ⚜ ★ ☆ ✮ ✯ ☄ ☾ ☽ ☼ ☀ ☁ ☂ ☃ ☻ ☺ ☹ ۞ ۩'
let characterText = document.getElementById("characterCount");
let textarea = document.getElementById("area_texto_copiar");
textarea.addEventListener("keyup", function () {
  const facebookCantidadCaracteres = 63206;
  const linkedinCantidadCaracteres = 600;
  const instagramCantidadCaracteres = 2200;
  let characters = textarea.value;
  let cant = characters.length;
  //Instagram
  if (cant >= instagramCantidadCaracteres) {
    $("#instagram_caracteres").css({
      color: "#fff",
      backgroundColor: "#df4c4c",
    });
    bar1.set(0, true);
  } else {
    $("#instagram_caracteres").css({
      color: "#000",
      backgroundColor: "#e1e1e1",
    });
    bar1.set(cant, true);
  } // Linkedin

  if (cant >= linkedinCantidadCaracteres) {
    $("#linkedin_caracteres").css({
      color: "#fff",
      backgroundColor: "#df4c4c",
    });
    bar2.set(0, true);
  } else {
    $("#linkedin_caracteres").css({
      color: "#000",
      backgroundColor: "#e1e1e1",
    });
    bar2.set(cant, true);
  } //Facebook

  if (cant >= facebookCantidadCaracteres) {
    $("#facebook_caracteres").css({
      color: "#fff",
      backgroundColor: "#df4c4c",
    });
    bar3.set(0, true);
  } else {
    $("#facebook_caracteres").css({
      color: "#000",
      backgroundColor: "#e1e1e1",
    });
    bar3.set(cant, true);
  }
  characterText.textContent = `${cant}
 caracteres`;
});
function boldTap() {
  // obtain the object reference for the <textarea>
  var txtarea = document.getElementById("area_texto_copiar");
  // obtain the index of the first selected character
  var start = txtarea.selectionStart;
  // obtain the index of the last selected character
  var finish = txtarea.selectionEnd;
  // obtain the selected text
  var sel = txtarea.value.substring(start, finish);
  // do something with the selected content
  var selectionLength = finish - start;
  if (selectionLength <= 0) {
    notyf.error("Selecciona primero el texto al que deseas aplicar negritas");
  } else {
    if (sel.includes("http") || sel.includes(".com")) {
      notyf.error("No se le puede poner estilos a un enlace");
      return false;
    }
    sel = sel.replace(/𝘢/g, "a");
    sel = sel.replace(/𝘣/g, "b");
    sel = sel.replace(/𝘤/g, "c");
    sel = sel.replace(/𝘥/g, "d");
    sel = sel.replace(/𝘦/g, "e");
    sel = sel.replace(/𝘧/g, "f");
    sel = sel.replace(/𝘨/g, "g");
    sel = sel.replace(/𝘩/g, "h");
    sel = sel.replace(/𝘪/g, "i");
    sel = sel.replace(/𝘫/g, "j");
    sel = sel.replace(/𝘬/g, "k");
    sel = sel.replace(/𝘭/g, "l");
    sel = sel.replace(/𝘮/g, "m");
    sel = sel.replace(/𝘯/g, "n");
    sel = sel.replace(/𝘰/g, "o");
    sel = sel.replace(/𝘱/g, "p");
    sel = sel.replace(/𝘲/g, "q");
    sel = sel.replace(/𝘳/g, "r");
    sel = sel.replace(/𝘴/g, "s");
    sel = sel.replace(/𝘵/g, "t");
    sel = sel.replace(/𝘶/g, "u");
    sel = sel.replace(/𝘷/g, "v");
    sel = sel.replace(/𝘸/g, "w");
    sel = sel.replace(/𝘹/g, "x");
    sel = sel.replace(/𝘺/g, "y");
    sel = sel.replace(/𝘻/g, "z");
    sel = sel.replace(/𝘈/g, "A");
    sel = sel.replace(/𝘉/g, "B");
    sel = sel.replace(/𝘊/g, "C");
    sel = sel.replace(/𝘋/g, "D");
    sel = sel.replace(/𝘌/g, "E");
    sel = sel.replace(/𝘍/g, "F");
    sel = sel.replace(/𝘎/g, "G");
    sel = sel.replace(/𝘏/g, "H");
    sel = sel.replace(/𝘐/g, "I");
    sel = sel.replace(/𝘑/g, "J");
    sel = sel.replace(/𝘒/g, "K");
    sel = sel.replace(/𝘓/g, "L");
    sel = sel.replace(/𝘔/g, "M");
    sel = sel.replace(/𝘕/g, "N");
    sel = sel.replace(/𝘖/g, "O");
    sel = sel.replace(/𝘗/g, "P");
    sel = sel.replace(/𝘘/g, "Q");
    sel = sel.replace(/𝘙/g, "R");
    sel = sel.replace(/𝘚/g, "S");
    sel = sel.replace(/𝘛/g, "T");
    sel = sel.replace(/𝘜/g, "U");
    sel = sel.replace(/𝘝/g, "V");
    sel = sel.replace(/𝘞/g, "W");
    sel = sel.replace(/𝘟/g, "X");
    sel = sel.replace(/𝘠/g, "Y");
    sel = sel.replace(/𝘡/g, "Z");
    sel = sel.replace(/𝟶/g, "0");
    sel = sel.replace(/𝟷/g, "1");
    sel = sel.replace(/𝟸/g, "2");
    sel = sel.replace(/𝟹/g, "3");
    sel = sel.replace(/𝟺/g, "4");
    sel = sel.replace(/𝟻/g, "5");
    sel = sel.replace(/𝟼/g, "6");
    sel = sel.replace(/𝟽/g, "7");
    sel = sel.replace(/𝟾/g, "8");
    sel = sel.replace(/𝟿/g, "9");
    sel = sel.replace(/a/g, "{boldReplacementKey-a}");
    sel = sel.replace(/𝐚/g, "a");
    sel = sel.replace(/{boldReplacementKey-a}/g, "𝐚");
    sel = sel.replace(/b/g, "{boldReplacementKey-b}");
    sel = sel.replace(/𝐛/g, "b");
    sel = sel.replace(/{boldReplacementKey-b}/g, "𝐛");
    sel = sel.replace(/c/g, "{boldReplacementKey-c}");
    sel = sel.replace(/𝐜/g, "c");
    sel = sel.replace(/{boldReplacementKey-c}/g, "𝐜");
    sel = sel.replace(/d/g, "{boldReplacementKey-d}");
    sel = sel.replace(/𝐝/g, "d");
    sel = sel.replace(/{boldReplacementKey-d}/g, "𝐝");
    sel = sel.replace(/e/g, "{boldReplacementKey-e}");
    sel = sel.replace(/𝐞/g, "e");
    sel = sel.replace(/{boldReplacementKey-e}/g, "𝐞");
    sel = sel.replace(/f/g, "{boldReplacementKey-f}");
    sel = sel.replace(/𝐟/g, "f");
    sel = sel.replace(/{boldReplacementKey-f}/g, "𝐟");
    sel = sel.replace(/g/g, "{boldReplacementKey-g}");
    sel = sel.replace(/𝐠/g, "g");
    sel = sel.replace(/{boldReplacementKey-g}/g, "𝐠");
    sel = sel.replace(/h/g, "{boldReplacementKey-h}");
    sel = sel.replace(/𝐡/g, "h");
    sel = sel.replace(/{boldReplacementKey-h}/g, "𝐡");
    sel = sel.replace(/i/g, "{boldReplacementKey-i}");
    sel = sel.replace(/𝐢/g, "i");
    sel = sel.replace(/{boldReplacementKey-i}/g, "𝐢");
    sel = sel.replace(/j/g, "{boldReplacementKey-j}");
    sel = sel.replace(/𝐣/g, "j");
    sel = sel.replace(/{boldReplacementKey-j}/g, "𝐣");
    sel = sel.replace(/k/g, "{boldReplacementKey-k}");
    sel = sel.replace(/𝐤/g, "k");
    sel = sel.replace(/{boldReplacementKey-k}/g, "𝐤");
    sel = sel.replace(/l/g, "{boldReplacementKey-l}");
    sel = sel.replace(/𝐥/g, "l");
    sel = sel.replace(/{boldReplacementKey-l}/g, "𝐥");
    sel = sel.replace(/m/g, "{boldReplacementKey-m}");
    sel = sel.replace(/𝐦/g, "m");
    sel = sel.replace(/{boldReplacementKey-m}/g, "𝐦");
    sel = sel.replace(/n/g, "{boldReplacementKey-n}");
    sel = sel.replace(/𝐧/g, "n");
    sel = sel.replace(/{boldReplacementKey-n}/g, "𝐧");
    sel = sel.replace(/o/g, "{boldReplacementKey-o}");
    sel = sel.replace(/𝐨/g, "o");
    sel = sel.replace(/{boldReplacementKey-o}/g, "𝐨");
    sel = sel.replace(/p/g, "{boldReplacementKey-p}");
    sel = sel.replace(/𝐩/g, "p");
    sel = sel.replace(/{boldReplacementKey-p}/g, "𝐩");
    sel = sel.replace(/q/g, "{boldReplacementKey-q}");
    sel = sel.replace(/𝐪/g, "q");
    sel = sel.replace(/{boldReplacementKey-q}/g, "𝐪");
    sel = sel.replace(/r/g, "{boldReplacementKey-r}");
    sel = sel.replace(/𝐫/g, "r");
    sel = sel.replace(/{boldReplacementKey-r}/g, "𝐫");
    sel = sel.replace(/s/g, "{boldReplacementKey-s}");
    sel = sel.replace(/𝐬/g, "s");
    sel = sel.replace(/{boldReplacementKey-s}/g, "𝐬");
    sel = sel.replace(/t/g, "{boldReplacementKey-t}");
    sel = sel.replace(/𝐭/g, "t");
    sel = sel.replace(/{boldReplacementKey-t}/g, "𝐭");
    sel = sel.replace(/u/g, "{boldReplacementKey-u}");
    sel = sel.replace(/𝐮/g, "u");
    sel = sel.replace(/{boldReplacementKey-u}/g, "𝐮");
    sel = sel.replace(/v/g, "{boldReplacementKey-v}");
    sel = sel.replace(/𝐯/g, "v");
    sel = sel.replace(/{boldReplacementKey-v}/g, "𝐯");
    sel = sel.replace(/w/g, "{boldReplacementKey-w}");
    sel = sel.replace(/𝐰/g, "w");
    sel = sel.replace(/{boldReplacementKey-w}/g, "𝐰");
    sel = sel.replace(/x/g, "{boldReplacementKey-x}");
    sel = sel.replace(/𝐱/g, "x");
    sel = sel.replace(/{boldReplacementKey-x}/g, "𝐱");
    sel = sel.replace(/y/g, "{boldReplacementKey-y}");
    sel = sel.replace(/𝐲/g, "y");
    sel = sel.replace(/{boldReplacementKey-y}/g, "𝐲");
    sel = sel.replace(/z/g, "{boldReplacementKey-z}");
    sel = sel.replace(/𝐳/g, "z");
    sel = sel.replace(/{boldReplacementKey-z}/g, "𝐳");
    sel = sel.replace(/A/g, "{boldReplacementKey-A}");
    sel = sel.replace(/𝐀/g, "A");
    sel = sel.replace(/{boldReplacementKey-A}/g, "𝐀");
    sel = sel.replace(/B/g, "{boldReplacementKey-B}");
    sel = sel.replace(/𝐁/g, "B");
    sel = sel.replace(/{boldReplacementKey-B}/g, "𝐁");
    sel = sel.replace(/C/g, "{boldReplacementKey-C}");
    sel = sel.replace(/𝐂/g, "C");
    sel = sel.replace(/{boldReplacementKey-C}/g, "𝐂");
    sel = sel.replace(/D/g, "{boldReplacementKey-D}");
    sel = sel.replace(/𝐃/g, "D");
    sel = sel.replace(/{boldReplacementKey-D}/g, "𝐃");
    sel = sel.replace(/E/g, "{boldReplacementKey-E}");
    sel = sel.replace(/𝐄/g, "E");
    sel = sel.replace(/{boldReplacementKey-E}/g, "𝐄");
    sel = sel.replace(/F/g, "{boldReplacementKey-F}");
    sel = sel.replace(/𝐅/g, "F");
    sel = sel.replace(/{boldReplacementKey-F}/g, "𝐅");
    sel = sel.replace(/G/g, "{boldReplacementKey-G}");
    sel = sel.replace(/𝐆/g, "G");
    sel = sel.replace(/{boldReplacementKey-G}/g, "𝐆");
    sel = sel.replace(/H/g, "{boldReplacementKey-H}");
    sel = sel.replace(/𝐇/g, "H");
    sel = sel.replace(/{boldReplacementKey-H}/g, "𝐇");
    sel = sel.replace(/I/g, "{boldReplacementKey-I}");
    sel = sel.replace(/𝐈/g, "I");
    sel = sel.replace(/{boldReplacementKey-I}/g, "𝐈");
    sel = sel.replace(/J/g, "{boldReplacementKey-J}");
    sel = sel.replace(/𝐉/g, "J");
    sel = sel.replace(/{boldReplacementKey-J}/g, "𝐉");
    sel = sel.replace(/K/g, "{boldReplacementKey-K}");
    sel = sel.replace(/𝐊/g, "K");
    sel = sel.replace(/{boldReplacementKey-K}/g, "𝐊");
    sel = sel.replace(/L/g, "{boldReplacementKey-L}");
    sel = sel.replace(/𝐋/g, "L");
    sel = sel.replace(/{boldReplacementKey-L}/g, "𝐋");
    sel = sel.replace(/M/g, "{boldReplacementKey-M}");
    sel = sel.replace(/𝐌/g, "M");
    sel = sel.replace(/{boldReplacementKey-M}/g, "𝐌");
    sel = sel.replace(/N/g, "{boldReplacementKey-N}");
    sel = sel.replace(/𝐍/g, "N");
    sel = sel.replace(/{boldReplacementKey-N}/g, "𝐍");
    sel = sel.replace(/O/g, "{boldReplacementKey-O}");
    sel = sel.replace(/𝐎/g, "O");
    sel = sel.replace(/{boldReplacementKey-O}/g, "𝐎");
    sel = sel.replace(/P/g, "{boldReplacementKey-P}");
    sel = sel.replace(/𝐏/g, "P");
    sel = sel.replace(/{boldReplacementKey-P}/g, "𝐏");
    sel = sel.replace(/Q/g, "{boldReplacementKey-Q}");
    sel = sel.replace(/𝐐/g, "Q");
    sel = sel.replace(/{boldReplacementKey-Q}/g, "𝐐");
    sel = sel.replace(/R/g, "{boldReplacementKey-R}");
    sel = sel.replace(/𝐑/g, "R");
    sel = sel.replace(/{boldReplacementKey-R}/g, "𝐑");
    sel = sel.replace(/S/g, "{boldReplacementKey-S}");
    sel = sel.replace(/𝐒/g, "S");
    sel = sel.replace(/{boldReplacementKey-S}/g, "𝐒");
    sel = sel.replace(/T/g, "{boldReplacementKey-T}");
    sel = sel.replace(/𝐓/g, "T");
    sel = sel.replace(/{boldReplacementKey-T}/g, "𝐓");
    sel = sel.replace(/U/g, "{boldReplacementKey-U}");
    sel = sel.replace(/𝐔/g, "U");
    sel = sel.replace(/{boldReplacementKey-U}/g, "𝐔");
    sel = sel.replace(/V/g, "{boldReplacementKey-V}");
    sel = sel.replace(/𝐕/g, "V");
    sel = sel.replace(/{boldReplacementKey-V}/g, "𝐕");
    sel = sel.replace(/W/g, "{boldReplacementKey-W}");
    sel = sel.replace(/𝗪/g, "W");
    sel = sel.replace(/{boldReplacementKey-W}/g, "𝗪");
    sel = sel.replace(/X/g, "{boldReplacementKey-X}");
    sel = sel.replace(/𝐗/g, "X");
    sel = sel.replace(/{boldReplacementKey-X}/g, "𝐗");
    sel = sel.replace(/Y/g, "{boldReplacementKey-Y}");
    sel = sel.replace(/𝐘/g, "Y");
    sel = sel.replace(/{boldReplacementKey-Y}/g, "𝐘");
    sel = sel.replace(/Z/g, "{boldReplacementKey-Z}");
    sel = sel.replace(/𝐙/g, "Z");
    sel = sel.replace(/{boldReplacementKey-Z}/g, "𝐙");
    sel = sel.replace(/0/g, "{boldReplacementKey-0}");
    sel = sel.replace(/𝟎/g, "0");
    sel = sel.replace(/{boldReplacementKey-0}/g, "𝟎");
    sel = sel.replace(/1/g, "{boldReplacementKey-1}");
    sel = sel.replace(/𝟏/g, "1");
    sel = sel.replace(/{boldReplacementKey-1}/g, "𝟏");
    sel = sel.replace(/2/g, "{boldReplacementKey-2}");
    sel = sel.replace(/𝟐/g, "2");
    sel = sel.replace(/{boldReplacementKey-2}/g, "𝟐");
    sel = sel.replace(/3/g, "{boldReplacementKey-3}");
    sel = sel.replace(/𝟑/g, "3");
    sel = sel.replace(/{boldReplacementKey-3}/g, "𝟑");
    sel = sel.replace(/4/g, "{boldReplacementKey-4}");
    sel = sel.replace(/𝟒/g, "4");
    sel = sel.replace(/{boldReplacementKey-4}/g, "𝟒");
    sel = sel.replace(/5/g, "{boldReplacementKey-5}");
    sel = sel.replace(/𝟓/g, "5");
    sel = sel.replace(/{boldReplacementKey-5}/g, "𝟓");
    sel = sel.replace(/6/g, "{boldReplacementKey-6}");
    sel = sel.replace(/𝟔/g, "6");
    sel = sel.replace(/{boldReplacementKey-6}/g, "𝟔");
    sel = sel.replace(/7/g, "{boldReplacementKey-7}");
    sel = sel.replace(/𝟕/g, "7");
    sel = sel.replace(/{boldReplacementKey-7}/g, "𝟕");
    sel = sel.replace(/8/g, "{boldReplacementKey-8}");
    sel = sel.replace(/𝟖/g, "8");
    sel = sel.replace(/{boldReplacementKey-8}/g, "𝟖");
    sel = sel.replace(/9/g, "{boldReplacementKey-9}");
    sel = sel.replace(/𝟗/g, "9");
    sel = sel.replace(/{boldReplacementKey-9}/g, "𝟗");
    var allText = txtarea.value;
    allText = replaceRange(allText, start, finish, sel);
    txtarea.value = allText;
    setTimeout(function () {
      txtarea.focus();
    }, 5);
    setTimeout(function () {
      txtarea.setSelectionRange(start, start + sel.length);
    }, 10);
  }
}
function italicTap() {
  // obtain the object reference for the <textarea>
  var txtarea = document.getElementById("area_texto_copiar");
  // obtain the index of the first selected character
  var start = txtarea.selectionStart;
  // obtain the index of the last selected character
  var finish = txtarea.selectionEnd;
  // obtain the selected text
  var sel = txtarea.value.substring(start, finish);
  // do something with the selected content
  var selectionLength = finish - start;
  if (selectionLength <= 0) {
    notyf.error(
      "Selecciona primero el texto al que deseas aplicar las cursivas"
    );
  } else {
    if (sel.includes("http") || sel.includes(".com")) {
      notyf.error("No se le puede poner estilos a un enlace");
      return false;
    }
    sel = sel.replace(/𝐚/g, "a");
    sel = sel.replace(/𝐛/g, "b");
    sel = sel.replace(/𝐜/g, "c");
    sel = sel.replace(/𝐝/g, "d");
    sel = sel.replace(/𝐞/g, "e");
    sel = sel.replace(/𝐟/g, "f");
    sel = sel.replace(/𝐠/g, "g");
    sel = sel.replace(/𝐡/g, "h");
    sel = sel.replace(/𝐢/g, "i");
    sel = sel.replace(/𝐣/g, "j");
    sel = sel.replace(/𝐤/g, "k");
    sel = sel.replace(/𝐥/g, "l");
    sel = sel.replace(/𝐦/g, "m");
    sel = sel.replace(/𝐧/g, "n");
    sel = sel.replace(/𝐨/g, "o");
    sel = sel.replace(/𝐩/g, "p");
    sel = sel.replace(/𝐪/g, "q");
    sel = sel.replace(/𝐫/g, "r");
    sel = sel.replace(/𝐬/g, "s");
    sel = sel.replace(/𝐭/g, "t");
    sel = sel.replace(/𝐮/g, "u");
    sel = sel.replace(/𝐯/g, "v");
    sel = sel.replace(/𝐰/g, "w");
    sel = sel.replace(/𝐱/g, "x");
    sel = sel.replace(/𝐲/g, "y");
    sel = sel.replace(/𝐳/g, "z");
    sel = sel.replace(/𝐀/g, "A");
    sel = sel.replace(/𝐁/g, "B");
    sel = sel.replace(/𝐂/g, "C");
    sel = sel.replace(/𝐃/g, "D");
    sel = sel.replace(/𝐄/g, "E");
    sel = sel.replace(/𝐅/g, "F");
    sel = sel.replace(/𝐆/g, "G");
    sel = sel.replace(/𝐇/g, "H");
    sel = sel.replace(/𝐈/g, "I");
    sel = sel.replace(/𝐉/g, "J");
    sel = sel.replace(/𝐊/g, "K");
    sel = sel.replace(/𝐋/g, "L");
    sel = sel.replace(/𝐌/g, "M");
    sel = sel.replace(/𝐍/g, "N");
    sel = sel.replace(/𝐎/g, "O");
    sel = sel.replace(/𝐏/g, "P");
    sel = sel.replace(/𝐐/g, "Q");
    sel = sel.replace(/𝐑/g, "R");
    sel = sel.replace(/𝐒/g, "S");
    sel = sel.replace(/𝐓/g, "T");
    sel = sel.replace(/𝐔/g, "U");
    sel = sel.replace(/𝐕/g, "V");
    sel = sel.replace(/𝗪/g, "W");
    sel = sel.replace(/𝐗/g, "X");
    sel = sel.replace(/𝐘/g, "Y");
    sel = sel.replace(/𝐙/g, "Z");
    sel = sel.replace(/𝟎/g, "0");
    sel = sel.replace(/𝟏/g, "1");
    sel = sel.replace(/𝟐/g, "2");
    sel = sel.replace(/𝟑/g, "3");
    sel = sel.replace(/𝟒/g, "4");
    sel = sel.replace(/𝟓/g, "5");
    sel = sel.replace(/𝟔/g, "6");
    sel = sel.replace(/𝟕/g, "7");
    sel = sel.replace(/𝟖/g, "8");
    sel = sel.replace(/𝟗/g, "9");
    sel = sel.replace(/a/g, "{italicReplacementKey-a}");
    sel = sel.replace(/𝘢/g, "a");
    sel = sel.replace(/{italicReplacementKey-a}/g, "𝘢");
    sel = sel.replace(/b/g, "{italicReplacementKey-b}");
    sel = sel.replace(/𝘣/g, "b");
    sel = sel.replace(/{italicReplacementKey-b}/g, "𝘣");
    sel = sel.replace(/c/g, "{italicReplacementKey-c}");
    sel = sel.replace(/𝘤/g, "c");
    sel = sel.replace(/{italicReplacementKey-c}/g, "𝘤");
    sel = sel.replace(/d/g, "{italicReplacementKey-d}");
    sel = sel.replace(/𝘥/g, "d");
    sel = sel.replace(/{italicReplacementKey-d}/g, "𝘥");
    sel = sel.replace(/e/g, "{italicReplacementKey-e}");
    sel = sel.replace(/𝘦/g, "e");
    sel = sel.replace(/{italicReplacementKey-e}/g, "𝘦");
    sel = sel.replace(/f/g, "{italicReplacementKey-f}");
    sel = sel.replace(/𝘧/g, "f");
    sel = sel.replace(/{italicReplacementKey-f}/g, "𝘧");
    sel = sel.replace(/g/g, "{italicReplacementKey-g}");
    sel = sel.replace(/𝘨/g, "g");
    sel = sel.replace(/{italicReplacementKey-g}/g, "𝘨");
    sel = sel.replace(/h/g, "{italicReplacementKey-h}");
    sel = sel.replace(/𝘩/g, "h");
    sel = sel.replace(/{italicReplacementKey-h}/g, "𝘩");
    sel = sel.replace(/i/g, "{italicReplacementKey-i}");
    sel = sel.replace(/𝘪/g, "i");
    sel = sel.replace(/{italicReplacementKey-i}/g, "𝘪");
    sel = sel.replace(/j/g, "{italicReplacementKey-j}");
    sel = sel.replace(/𝘫/g, "j");
    sel = sel.replace(/{italicReplacementKey-j}/g, "𝘫");
    sel = sel.replace(/k/g, "{italicReplacementKey-k}");
    sel = sel.replace(/𝘬/g, "k");
    sel = sel.replace(/{italicReplacementKey-k}/g, "𝘬");
    sel = sel.replace(/l/g, "{italicReplacementKey-l}");
    sel = sel.replace(/𝘭/g, "l");
    sel = sel.replace(/{italicReplacementKey-l}/g, "𝘭");
    sel = sel.replace(/m/g, "{italicReplacementKey-m}");
    sel = sel.replace(/𝘮/g, "m");
    sel = sel.replace(/{italicReplacementKey-m}/g, "𝘮");
    sel = sel.replace(/n/g, "{italicReplacementKey-n}");
    sel = sel.replace(/𝘯/g, "n");
    sel = sel.replace(/{italicReplacementKey-n}/g, "𝘯");
    sel = sel.replace(/o/g, "{italicReplacementKey-o}");
    sel = sel.replace(/𝘰/g, "o");
    sel = sel.replace(/{italicReplacementKey-o}/g, "𝘰");
    sel = sel.replace(/p/g, "{italicReplacementKey-p}");
    sel = sel.replace(/𝘱/g, "p");
    sel = sel.replace(/{italicReplacementKey-p}/g, "𝘱");
    sel = sel.replace(/q/g, "{italicReplacementKey-q}");
    sel = sel.replace(/𝘲/g, "q");
    sel = sel.replace(/{italicReplacementKey-q}/g, "𝘲");
    sel = sel.replace(/r/g, "{italicReplacementKey-r}");
    sel = sel.replace(/𝘳/g, "r");
    sel = sel.replace(/{italicReplacementKey-r}/g, "𝘳");
    sel = sel.replace(/s/g, "{italicReplacementKey-s}");
    sel = sel.replace(/𝘴/g, "s");
    sel = sel.replace(/{italicReplacementKey-s}/g, "𝘴");
    sel = sel.replace(/t/g, "{italicReplacementKey-t}");
    sel = sel.replace(/𝘵/g, "t");
    sel = sel.replace(/{italicReplacementKey-t}/g, "𝘵");
    sel = sel.replace(/u/g, "{italicReplacementKey-u}");
    sel = sel.replace(/𝘶/g, "u");
    sel = sel.replace(/{italicReplacementKey-u}/g, "𝘶");
    sel = sel.replace(/v/g, "{italicReplacementKey-v}");
    sel = sel.replace(/𝘷/g, "v");
    sel = sel.replace(/{italicReplacementKey-v}/g, "𝘷");
    sel = sel.replace(/w/g, "{italicReplacementKey-w}");
    sel = sel.replace(/𝘸/g, "w");
    sel = sel.replace(/{italicReplacementKey-w}/g, "𝘸");
    sel = sel.replace(/x/g, "{italicReplacementKey-x}");
    sel = sel.replace(/𝘹/g, "x");
    sel = sel.replace(/{italicReplacementKey-x}/g, "𝘹");
    sel = sel.replace(/y/g, "{italicReplacementKey-y}");
    sel = sel.replace(/𝘺/g, "y");
    sel = sel.replace(/{italicReplacementKey-y}/g, "𝘺");
    sel = sel.replace(/z/g, "{italicReplacementKey-z}");
    sel = sel.replace(/𝘻/g, "z");
    sel = sel.replace(/{italicReplacementKey-z}/g, "𝘻");
    sel = sel.replace(/A/g, "{italicReplacementKey-A}");
    sel = sel.replace(/𝘈/g, "A");
    sel = sel.replace(/{italicReplacementKey-A}/g, "𝘈");
    sel = sel.replace(/B/g, "{italicReplacementKey-B}");
    sel = sel.replace(/𝘉/g, "B");
    sel = sel.replace(/{italicReplacementKey-B}/g, "𝘉");
    sel = sel.replace(/C/g, "{italicReplacementKey-C}");
    sel = sel.replace(/𝘊/g, "C");
    sel = sel.replace(/{italicReplacementKey-C}/g, "𝘊");
    sel = sel.replace(/D/g, "{italicReplacementKey-D}");
    sel = sel.replace(/𝘋/g, "D");
    sel = sel.replace(/{italicReplacementKey-D}/g, "𝘋");
    sel = sel.replace(/E/g, "{italicReplacementKey-E}");
    sel = sel.replace(/𝘌/g, "E");
    sel = sel.replace(/{italicReplacementKey-E}/g, "𝘌");
    sel = sel.replace(/F/g, "{italicReplacementKey-F}");
    sel = sel.replace(/𝘍/g, "F");
    sel = sel.replace(/{italicReplacementKey-F}/g, "𝘍");
    sel = sel.replace(/G/g, "{italicReplacementKey-G}");
    sel = sel.replace(/𝘎/g, "G");
    sel = sel.replace(/{italicReplacementKey-G}/g, "𝘎");
    sel = sel.replace(/H/g, "{italicReplacementKey-H}");
    sel = sel.replace(/𝘏/g, "H");
    sel = sel.replace(/{italicReplacementKey-H}/g, "𝘏");
    sel = sel.replace(/I/g, "{italicReplacementKey-I}");
    sel = sel.replace(/𝘐/g, "I");
    sel = sel.replace(/{italicReplacementKey-I}/g, "𝘐");
    sel = sel.replace(/J/g, "{italicReplacementKey-J}");
    sel = sel.replace(/𝘑/g, "J");
    sel = sel.replace(/{italicReplacementKey-J}/g, "𝘑");
    sel = sel.replace(/K/g, "{italicReplacementKey-K}");
    sel = sel.replace(/𝘒/g, "K");
    sel = sel.replace(/{italicReplacementKey-K}/g, "𝘒");
    sel = sel.replace(/L/g, "{italicReplacementKey-L}");
    sel = sel.replace(/𝘓/g, "L");
    sel = sel.replace(/{italicReplacementKey-L}/g, "𝘓");
    sel = sel.replace(/M/g, "{italicReplacementKey-M}");
    sel = sel.replace(/𝘔/g, "M");
    sel = sel.replace(/{italicReplacementKey-M}/g, "𝘔");
    sel = sel.replace(/N/g, "{italicReplacementKey-N}");
    sel = sel.replace(/𝘕/g, "N");
    sel = sel.replace(/{italicReplacementKey-N}/g, "𝘕");
    sel = sel.replace(/O/g, "{italicReplacementKey-O}");
    sel = sel.replace(/𝘖/g, "O");
    sel = sel.replace(/{italicReplacementKey-O}/g, "𝘖");
    sel = sel.replace(/P/g, "{italicReplacementKey-P}");
    sel = sel.replace(/𝘗/g, "P");
    sel = sel.replace(/{italicReplacementKey-P}/g, "𝘗");
    sel = sel.replace(/Q/g, "{italicReplacementKey-Q}");
    sel = sel.replace(/𝘘/g, "Q");
    sel = sel.replace(/{italicReplacementKey-Q}/g, "𝘘");
    sel = sel.replace(/R/g, "{italicReplacementKey-R}");
    sel = sel.replace(/𝘙/g, "R");
    sel = sel.replace(/{italicReplacementKey-R}/g, "𝘙");
    sel = sel.replace(/S/g, "{italicReplacementKey-S}");
    sel = sel.replace(/𝘚/g, "S");
    sel = sel.replace(/{italicReplacementKey-S}/g, "𝘚");
    sel = sel.replace(/T/g, "{italicReplacementKey-T}");
    sel = sel.replace(/𝘛/g, "T");
    sel = sel.replace(/{italicReplacementKey-T}/g, "𝘛");
    sel = sel.replace(/U/g, "{italicReplacementKey-U}");
    sel = sel.replace(/𝘜/g, "U");
    sel = sel.replace(/{italicReplacementKey-U}/g, "𝘜");
    sel = sel.replace(/V/g, "{italicReplacementKey-V}");
    sel = sel.replace(/𝘝/g, "V");
    sel = sel.replace(/{italicReplacementKey-V}/g, "𝘝");
    sel = sel.replace(/W/g, "{italicReplacementKey-W}");
    sel = sel.replace(/𝘞/g, "W");
    sel = sel.replace(/{italicReplacementKey-W}/g, "𝘞");
    sel = sel.replace(/X/g, "{italicReplacementKey-X}");
    sel = sel.replace(/𝘟/g, "X");
    sel = sel.replace(/{italicReplacementKey-X}/g, "𝘟");
    sel = sel.replace(/Y/g, "{italicReplacementKey-Y}");
    sel = sel.replace(/𝘠/g, "Y");
    sel = sel.replace(/{italicReplacementKey-Y}/g, "𝘠");
    sel = sel.replace(/Z/g, "{italicReplacementKey-Z}");
    sel = sel.replace(/𝘡/g, "Z");
    sel = sel.replace(/{italicReplacementKey-Z}/g, "𝘡");
    sel = sel.replace(/0/g, "{italicReplacementKey-0}");
    sel = sel.replace(/𝟶/g, "0");
    sel = sel.replace(/{italicReplacementKey-0}/g, "𝟶");
    sel = sel.replace(/1/g, "{italicReplacementKey-1}");
    sel = sel.replace(/𝟷/g, "1");
    sel = sel.replace(/{italicReplacementKey-1}/g, "𝟷");
    sel = sel.replace(/2/g, "{italicReplacementKey-2}");
    sel = sel.replace(/𝟸/g, "2");
    sel = sel.replace(/{italicReplacementKey-2}/g, "𝟸");
    sel = sel.replace(/3/g, "{italicReplacementKey-3}");
    sel = sel.replace(/𝟹/g, "3");
    sel = sel.replace(/{italicReplacementKey-3}/g, "𝟹");
    sel = sel.replace(/4/g, "{italicReplacementKey-4}");
    sel = sel.replace(/𝟺/g, "4");
    sel = sel.replace(/{italicReplacementKey-4}/g, "𝟺");
    sel = sel.replace(/5/g, "{italicReplacementKey-5}");
    sel = sel.replace(/𝟻/g, "5");
    sel = sel.replace(/{italicReplacementKey-5}/g, "𝟻");
    sel = sel.replace(/6/g, "{italicReplacementKey-6}");
    sel = sel.replace(/𝟼/g, "6");
    sel = sel.replace(/{italicReplacementKey-6}/g, "𝟼");
    sel = sel.replace(/7/g, "{italicReplacementKey-7}");
    sel = sel.replace(/𝟽/g, "7");
    sel = sel.replace(/{italicReplacementKey-7}/g, "𝟽");
    sel = sel.replace(/8/g, "{italicReplacementKey-8}");
    sel = sel.replace(/𝟾/g, "8");
    sel = sel.replace(/{italicReplacementKey-8}/g, "𝟾");
    sel = sel.replace(/9/g, "{italicReplacementKey-9}");
    sel = sel.replace(/𝟿/g, "9");
    sel = sel.replace(/{italicReplacementKey-9}/g, "𝟿");
    var allText = txtarea.value;
    allText = replaceRange(allText, start, finish, sel);
    txtarea.value = allText;
    setTimeout(function () {
      txtarea.focus();
    }, 5);
    setTimeout(function () {
      txtarea.setSelectionRange(start, start + sel.length);
    }, 10);
  }
}
function replaceRange(s, start, end, substitute) {
  return s.substring(0, start) + substitute + s.substring(end);
}
function copiar(el) {
  var str = document.getElementById("area_texto_copiar").value;
  str = str.replace(/(?:\r\n|\r|\n)/g, "⁣\n");
  let antiguohtml = str;
  // var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}\r\n|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}\r\n|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}\n|www\.[a-zA-Z0-9]+\.[^\s]{2,}\n)/ig;
  // var regex = new RegExp(expression);
  // let entry = str.match(regex);
  // console.log(entry);
  // for(let i = 0; i < entry.length; i++){
  // 	console.log(entry[i].slice(0, -1));
  // 	str = str.replace(entry[i], entry[i].slice(0, -1));
  // }
  str = str.replace(
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}\n|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
    "[Agrega tu link aquí]"
  );
  document.getElementById("area_texto_copiar").value = str;
  // resolve the element
  el = typeof el === "string" ? document.querySelector(el) : el;
  // handle iOS as a special case
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    // save current contentEditable/readOnly status
    var editable = el.contentEditable;
    var readOnly = el.readOnly;
    // convert to editable with readonly to stop iOS keyboard opening
    el.contentEditable = true;
    el.readOnly = false;
    // create a selectable range
    var range = document.createRange();
    range.selectNodeContents(el);
    // select the range
    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(range);
    el.setSelectionRange(0, 999999);
    // restore contentEditable/readOnly to original state
    el.contentEditable = editable;
    el.readOnly = readOnly;
  } else {
    el.select();
  } // execute copy command

  document.execCommand("copy");
  document.getElementById("area_texto_copiar").value = antiguohtml;
  notyf.success("Genial, ahora pega el texto en tu publicación de Instagram");
}
function limpiar_area_texto() {
  let area = document.getElementById("area_texto_copiar");
  area.value = "";
  area.focus();
}
function crearLink() {
  // obtain the object reference for the <textarea>
  var txtarea = document.getElementById("area_texto_copiar");
  // obtain the index of the first selected character
  var start = txtarea.selectionStart;
  // obtain the index of the last selected character
  var finish = txtarea.selectionEnd;
  // obtain the selected text
  var sel = txtarea.value.substring(start, finish);
  // do something with the selected content
  var selectionLength = finish - start;
  if (selectionLength <= 0) {
    notyf.error("Selecciona primero el texto al que deseas aplicar negritas");
  } else {
    let html = `<a href="${sel}
">${sel}
</a>`;
    var str = document.getElementById("area_texto_copiar").value;
    str = str.replace(sel, html);
    console.log(str);
    console.log("Texto Seleccionar", sel);
  }
}
