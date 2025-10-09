const character_sheets_url = document.getElementById("character_sheets_url");
const conversion_button = document.getElementById("conversion");
const ccfolia_result = document.querySelector("div#output > div#ccfolia > textarea");
const memo_result = document.querySelector("div#output > div#memo > textarea");
const chat_palette_result = document.querySelector("div#output > div#chat_palette > textarea");

function getOption(group, id) {
  return document.querySelector(`div#option > div#${group} #${id}`);
}

function addOutputSlot(id, text) {
  let div = document.createElement("div");
  div.id = id;
  div.className = "border border-gray-300 rounded p-4 flex flex-col gap-y-2";
  let label = document.createElement("label");
  label.className = "block font-medium";
  label.innerHTML = text;
  div.appendChild(label);
  let textarea = document.createElement("textarea");
  textarea.className = "w-full h-40 border rounded p-2";
  textarea.placeholder = "ここに変換結果が表示されます";
  textarea.setAttribute("readonly", "true");
  div.appendChild(textarea);
  let button = document.createElement("button");
  button.className = "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600";
  button.innerHTML = "コピー";
  button.onclick = function (event) {
    let _a;
    navigator.clipboard.writeText((_a = document.querySelector(`div#output > div#${id} > textarea`)) ? _a.value : void 0);
  };
  div.appendChild(button);
  let _a;
  (_a = document.getElementById("output")) ? _a.appendChild(div) : void 0;
  return document.querySelector(`div#output > div#${id} > textarea`);
}

function checkBlank(text) {
  return !text || (typeof text == "string" && text.length <= 0);
}

function checkURL(url) {
  if (new RegExp(`^https://character-sheets.appspot.com/${system}/edit.html\\?key=[\\w-]+$`).test(url))
    return 1;
  if (new RegExp(`^https://character-sheets.appspot.com/${system}/display\\?key=[\\w-]+$`).test(url))
    return 2;
  if (new RegExp(`^https://character-sheets.appspot.com/${system}/display\\?key=[\\w-]+&ajax=1$`).test(url))
    return 3;
  if (new RegExp(`^https://character-sheets.appspot.com/${system}/display\\?key=[\\w-]+&ajax=1&callback=resultGenerate$`).test(url))
    return 4;
  return 0;
}

function startGenerate(is_click) {
  let url = character_sheets_url ? character_sheets_url.value : void 0;
  switch (checkURL(url)) {
    case 0:
      console.error(`"${url}"は対応していないリンクです`);
      if (is_click) {
        alert(`"${url}"は対応していないリンクです`);
      }
      return;
    case 1:
      url = `${url.replace("edit.html", "display")}&ajax=1&callback=resultGenerate`;
      break;
    case 2:
      url += "&ajax=1&callback=resultGenerate";
      break;
    case 3:
      url += "&callback=resultGenerate";
      break;
  }
  
  $.ajax({
    url: url,
    dataType: "jsonp",
    callback: "resultGenerate",
    jsonp: false
  });
}

const corner_brackets = /^【.+】$/;
function addCornerBrackets(name) {
  if (corner_brackets.test(name)) return name;
  else return `【${name}】`;
}
function checkAddCornerBrackets(name, checked) {
  if (checked) return addCornerBrackets(name);
  else if (corner_brackets.test(name)) return name.match(corner_brackets)[0].substring(1, -1);
  else return name;
}

const double_parentheses = /^《.+》$/;
function addDoubleParentheses(name) {
  if (name.includes("可変")) return "可変";
  else if (name.includes("なし")) return "なし";
  else if (double_parentheses.test(name)) return name;
  else return `《${name}》`;
}
function checkAddDoubleParentheses(name, checked) {
  if (checked) return addDoubleParentheses(name);
  else if (double_parentheses.test(name)) return name.match(double_parentheses)[0].substring(1, -1);
  else return name;
}

const reference_page = /^.+P$/i;
function addReferencePage(name) {
  if (reference_page.test(name)) return name;
  else return `${name}P`;
}
function checkAddPReferencePage(name, checked) {
  if (checked) return addReferencePage(name);
  else if (reference_page.test(name)) return name.match(reference_page)[0].substring(0, -1);
  else return name;
}

const row_number = /row[\d]+/;
const column_number = /name[\d]+/;
function convertSkill(id) {
  let _a, _b;
  return skills[(_a = row_number.exec(id)) ? _a[0] : void 0][(_b = column_number.exec(id)) ? _b[0] : void 0];
}

character_sheets_url.onchange = function () {
  startGenerate(false);
};

conversion_button.onclick = function () {
  startGenerate(true);
};

document.querySelector("div#output > div#ccfolia > button").onclick = function () {
  navigator.clipboard.writeText(ccfolia_result.value);
};
document.querySelector("div#output > div#memo > button").onclick = function () {
  navigator.clipboard.writeText(memo_result.value);
};
document.querySelector("div#output > div#chat_palette > button").onclick = function () {
  navigator.clipboard.writeText(chat_palette_result.value);
};