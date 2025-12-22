const character_sheets_url = document.getElementById("character_sheets_url");
const conversion_button = document.getElementById("conversion");
const ccfolia_result = document.querySelector("div#output > div#ccfolia > textarea");
const memo_result = document.querySelector("div#output > div#memo > textarea");
const chat_palette_result = document.querySelector("div#output > div#chat_palette > textarea");
const options = {};

for (const div of document.querySelectorAll("div#option > div")) {
  const group = div.id;
  const group_options = {};
  for (const element of div.querySelectorAll("input, select")) {
    group_options[element.id] = element;
  }
  options[group] = group_options;
}

/**
 * @param {string} id
 * @param {string} text
 * @returns {HTMLTextAreaElement}
 */
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

/**
 * @param {string} text
 * @returns {boolean}
 */
function checkBlank(text) {
  return text == undefined || typeof text != "string" || text.length <= 0;
}

const character_sheets_url_reg = new RegExp(`^https://character-sheets.appspot.com/${system}/edit.html\\?key=[\\w-]+$`);
const character_sheets_key_reg = /^[\w-]+$/;
/**
 * @param {string} url
 * @returns {0 | 1 | 2} 0: 対応していないリンク, 1~: 対応しているリンク
 */
function checkURL(url) {
  if (character_sheets_url_reg.test(url)) return 1;
  if (character_sheets_key_reg.test(url)) return 2;
  return 0;
}

/**
 * @param {boolean} is_click
 */
function assignData(is_click) {
  let key = character_sheets_url ? character_sheets_url.value : void 0;
  switch (checkURL(key)) {
    case 0:
      console.error(`"${key}"は対応していないリンクです`);
      if (is_click) {
        alert(`"${key}"は対応していないリンクです`);
      }
      return;
    case 1:
      key = new URLSearchParams(key.substring(key.indexOf("?") + 1)).get("key");
      break;
  }

  $.when.apply($, getRequest(key)).done(function (...responses) {
    const datas = responses.map((value) => value[0]);
    if (datas[0] == null || datas[0].error != null) {
      return;
    }
    setResult(datas);
  });
}

const corner_brackets = /^【.+】$/;
/**
 * @param {string} name
 * @returns {string}
 */
function addCornerBrackets(name) {
  if (corner_brackets.test(name)) return name;
  else return `【${name}】`;
}
/**
 * @param {string} name
 * @param {boolean} checked
 * @returns {string}
 */
function checkAddCornerBrackets(name, checked) {
  if (checked) return addCornerBrackets(name);
  else if (corner_brackets.test(name)) return name.match(corner_brackets)[0].substring(1, -1);
  else return name;
}

const double_parentheses = /^《.+》$/;
/**
 * @param {string} name
 * @returns {string}
 */
function addDoubleParentheses(name) {
  if (name.includes("可変")) return "可変";
  else if (name.includes("なし")) return "なし";
  else if (name.includes("-")) return "-";
  else if (double_parentheses.test(name)) return name;
  else return `《${name}》`;
}
/**
 * @param {string} name
 * @param {boolean} checked
 * @returns {string}
 */
function checkAddDoubleParentheses(name, checked) {
  if (checked) return addDoubleParentheses(name);
  else if (double_parentheses.test(name)) return name.match(double_parentheses)[0].substring(1, -1);
  else return name;
}

const reference_page = /^.+P$/i;
/**
 * @param {string} name
 * @returns {string}
 */
function addReferencePage(name) {
  if (reference_page.test(name)) return name;
  else return `${name}P`;
}
/**
 * @param {string} name
 * @param {boolean} checked
 * @returns {string}
 */
function checkAddPReferencePage(name, checked) {
  if (checked) return addReferencePage(name);
  else if (reference_page.test(name)) return name.match(reference_page)[0].substring(0, -1);
  else return name;
}

const row_number = /row[\d]+/;
const column_number = /name[\d]+/;
/**
 * @param {string} id
 * @returns {string | undefined}
 */
function convertSkill(id) {
  let _a, _b;
  return skills[(_a = row_number.exec(id)) ? _a[0] : void 0][(_b = column_number.exec(id)) ? _b[0] : void 0];
}

character_sheets_url.onchange = function () {
  assignData(false);
};
conversion_button.onclick = function () {
  assignData(true);
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
