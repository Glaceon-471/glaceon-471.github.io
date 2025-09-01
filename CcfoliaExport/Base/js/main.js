var params = new URLSearchParams(window.location.search);
var character_sheets_url = document.getElementById("character_sheets_url");
var conversion_button = document.getElementById("conversion");
function setTitle(title) {
    document.querySelectorAll("#title").forEach(function (element) {
        element.textContent = title;
    });
}
function setCharacterSheetsUrlPlaceholder(url) {
    character_sheets_url === null || character_sheets_url === void 0 ? void 0 : character_sheets_url.setAttribute("placeholder", url);
}
function setOptionTitle(group_id, title) {
    var _a;
    var label = document.createElement("label");
    label.className = "block font-medium";
    label.innerHTML = title;
    var group = document.querySelector("#option > #".concat(group_id));
    if (group) {
        group.appendChild(label);
    }
    else {
        var div = document.createElement("div");
        div.id = "".concat(group_id);
        if (group_id != null) {
            div.className = "border border-gray-300 rounded p-4";
        }
        div.appendChild(label);
        (_a = document.getElementById("option")) === null || _a === void 0 ? void 0 : _a.appendChild(div);
    }
}
function addOption(group_id, type, id) {
    var _a;
    var arg = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        arg[_i - 3] = arguments[_i];
    }
    var element = null;
    switch (type) {
        case "input:checkbox":
            element = document.createElement("label");
            element.className = "block";
            var checkbox = document.createElement("input");
            checkbox.id = id;
            checkbox.type = "checkbox";
            checkbox.className = "mr-2";
            if (arg[1]) {
                checkbox.setAttribute("checked", "true");
            }
            element.appendChild(checkbox);
            element.innerHTML += " ".concat(arg[0]);
            break;
        case "select":
            element = document.createElement("select");
            element.id = id;
            element.className = "border rounded px-2 py-1";
            for (var _b = 0, arg_1 = arg; _b < arg_1.length; _b++) {
                var _c = arg_1[_b], name_1 = _c[0], value = _c[1];
                var option = document.createElement("option");
                option.value = value;
                option.innerHTML = name_1;
                element.appendChild(option);
            }
            break;
    }
    if (element == null)
        return null;
    var group = document.querySelector("#option > #".concat(group_id));
    if (group) {
        group.appendChild(element);
    }
    else {
        var div = document.createElement("div");
        div.id = "".concat(group_id);
        if (group_id != null) {
            div.className = "border border-gray-300 rounded p-4";
        }
        div.appendChild(element);
        (_a = document.getElementById("option")) === null || _a === void 0 ? void 0 : _a.appendChild(div);
    }
    switch (type) {
        case "input:checkbox":
            return document.querySelector("#option > #".concat(group_id, " input[type=\"checkbox\"]#").concat(id));
        case "select":
            return document.querySelector("#option > #".concat(group_id, " select#").concat(id));
        default:
            return null;
    }
}
function addOutputSlot(id, text) {
    var _a;
    var div = document.createElement("div");
    div.id = id;
    div.className = "border border-gray-300 rounded p-4 flex flex-col gap-y-2";
    var label = document.createElement("label");
    label.className = "block font-medium";
    label.innerHTML = text;
    div.appendChild(label);
    var textarea = document.createElement("textarea");
    textarea.id = "result";
    textarea.className = "w-full h-40 border rounded p-2";
    textarea.placeholder = "ここに変換結果が表示されます";
    textarea.setAttribute("readonly", "true");
    div.appendChild(textarea);
    var button = document.createElement("button");
    button.className = "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600";
    button.innerHTML = "コピー";
    button.onclick = function (event) {
        var _a;
        navigator.clipboard.writeText("".concat((_a = document.querySelector("#output > #".concat(id, " > #result"))) === null || _a === void 0 ? void 0 : _a.value));
    };
    div.appendChild(button);
    (_a = document.getElementById("output")) === null || _a === void 0 ? void 0 : _a.appendChild(div);
    return document.querySelector("#output > #".concat(id, " > #result"));
}
function checkBlank(text) {
    return text == null || (typeof text == "string" && text.length <= 0);
}
function checkURL(system, url) {
    if (new RegExp("^https://character-sheets.appspot.com/".concat(system, "/edit.html\\?key=[\\w-]+$")).test(url))
        return 1;
    if (new RegExp("^https://character-sheets.appspot.com/".concat(system, "/display\\?key=[\\w-]+$")).test(url))
        return 2;
    if (new RegExp("^https://character-sheets.appspot.com/".concat(system, "/display\\?key=[\\w-]+&ajax=1$")).test(url))
        return 3;
    if (new RegExp("^https://character-sheets.appspot.com/".concat(system, "/display\\?key=[\\w-]+&ajax=1&callback=resultGenerate$")).test(url))
        return 4;
    return 0;
}
function startGenerate(isClick) {
    var url = character_sheets_url === null || character_sheets_url === void 0 ? void 0 : character_sheets_url.value;
    switch (checkURL(params.get("system"), url)) {
        case 1:
            url = "".concat(url.replace("edit.html", "display"), "&ajax=1&callback=resultGenerate");
            break;
        case 2:
            url += "&ajax=1&callback=resultGenerate";
            break;
        case 3:
            url += "&callback=resultGenerate";
            break;
        case 0:
            console.error("\"".concat(url, "\"\u306F\u5BFE\u5FDC\u3057\u3066\u3044\u306A\u3044\u30EA\u30F3\u30AF\u3067\u3059"));
            if (isClick)
                alert("\"".concat(url, "\"\u306F\u5BFE\u5FDC\u3057\u3066\u3044\u306A\u3044\u30EA\u30F3\u30AF\u3067\u3059"));
            return;
    }
    axios.get(url).then(function (response) {
        resultGenerate(response.data);
    });
}
var corner_brackets = /^【.+】$/;
function addCornerBrackets(name) {
    if (corner_brackets.test(name))
        return name;
    else
        return "\u3010".concat(name, "\u3011");
}
var double_parentheses = /^《.+》$/;
function addDoubleParentheses(name) {
    if (name.includes("可変"))
        return "可変";
    else if (name.includes("なし"))
        return "なし";
    else if (double_parentheses.test(name))
        return name;
    else
        return "\u300A".concat(name, "\u300B");
}
var reference_page = /^.+P$/i;
function addReferencePage(name) {
    if (reference_page.test(name))
        return name;
    else
        return "".concat(name, "P");
}
var row_number = /row[\d]+/;
var column_number = /name[\d]+/;
function convertSkill(id, skills) {
    var _a, _b;
    return skills[(_a = row_number.exec(id)) === null || _a === void 0 ? void 0 : _a[0]][(_b = column_number.exec(id)) === null || _b === void 0 ? void 0 : _b[0]];
}
character_sheets_url.onchange = function () {
    startGenerate(false);
};
conversion_button.onclick = function () {
    startGenerate(true);
};
