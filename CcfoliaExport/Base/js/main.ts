const params = new URLSearchParams(window.location.search);
const character_sheets_url = document.getElementById("character_sheets_url") as HTMLInputElement;
const conversion_button = document.getElementById("conversion") as HTMLButtonElement;

function setTitle(title: string): void {
    document.querySelectorAll("#title").forEach(element => {
        element.textContent = title;
    });
}

function setCharacterSheetsUrlPlaceholder(url: string): void {
    character_sheets_url?.setAttribute("placeholder", url);
}

function setOptionTitle(group_id: string | null, title: string): void {
    const label = document.createElement("label");
    label.className = "block font-medium";
    label.innerHTML = title;
    
    const group = document.querySelector(`#option > #${group_id}`);
    if (group) {
        group.appendChild(label);
    }
    else {
        const div = document.createElement("div");
        div.id = `${group_id}`;
        if (group_id != null) {
            div.className = "border border-gray-300 rounded p-4";
        }
        div.appendChild(label);
        document.getElementById("option")?.appendChild(div);
    }
}

function addOption(group_id: string | null, type: "input:checkbox", id: string, text: string, checked: boolean): HTMLInputElement | null;
function addOption(group_id: string | null, type: "select", id: string, ...arg: [string, string][]): HTMLSelectElement | null;
function addOption(group_id: string | null, type: string, id: string, ...arg: any[]): Element | null {
    let element: Element | null = null;
    switch (type) {
        case "input:checkbox":
            element = document.createElement("label");
            element.className = "block";
            const checkbox = document.createElement("input");
            checkbox.id = id;
            checkbox.type = "checkbox";
            checkbox.className = "mr-2";
            if (arg[1] as boolean) {
                checkbox.setAttribute("checked", "true");
            }
            element.appendChild(checkbox);
            element.innerHTML += ` ${arg[0]}`;
            break;
        case "select":
            element = document.createElement("select");
            element.id = id;
            element.className = "border rounded px-2 py-1";
            for (const [name, value] of arg) {
                let option = document.createElement("option");
                option.value = value;
                option.innerHTML = name;
                element.appendChild(option);
            }
            break;
    }
    
    if (element == null) return null;
    const group = document.querySelector(`#option > #${group_id}`);
    if (group) {
        group.appendChild(element);
    }
    else {
        const div = document.createElement("div");
        div.id = `${group_id}`;
        if (group_id != null) {
            div.className = "border border-gray-300 rounded p-4";
        }
        div.appendChild(element);
        document.getElementById("option")?.appendChild(div);
    }
    switch (type) {
        case "input:checkbox":
            return document.querySelector(`#option > #${group_id} input[type="checkbox"]#${id}`);
        case "select":
            return document.querySelector(`#option > #${group_id} select#${id}`);
        default:
            return null;
    }
}

function addOutputSlot(id: string, text: string): HTMLTextAreaElement | null {
    const div = document.createElement("div");
    div.id = id;
    div.className = "border border-gray-300 rounded p-4 flex flex-col gap-y-2";
    const label = document.createElement("label");
    label.className = "block font-medium";
    label.innerHTML = text;
    div.appendChild(label);
    const textarea = document.createElement("textarea");
    textarea.id = "result";
    textarea.className = "w-full h-40 border rounded p-2";
    textarea.placeholder = "ここに変換結果が表示されます";
    textarea.setAttribute("readonly", "true");
    div.appendChild(textarea);
    const button = document.createElement("button");
    button.className = "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600";
    button.innerHTML = "コピー";
    button.onclick = (event) => {
        navigator.clipboard.writeText(`${(document.querySelector(`#output > #${id} > #result`) as HTMLTextAreaElement)?.value}`);
    };
    div.appendChild(button);
    document.getElementById("output")?.appendChild(div);
    return document.querySelector(`#output > #${id} > #result`);
}

function checkBlank(text: string): boolean {
    return text == null || (typeof text == "string" && text.length <= 0);
}

function checkURL(system: string | null, url: string): number {
    if (new RegExp(`^https://character-sheets.appspot.com/${system}/edit.html\\?key=[\\w-]+$`).test(url)) return 1;
    if (new RegExp(`^https://character-sheets.appspot.com/${system}/display\\?key=[\\w-]+$`).test(url)) return 2;
    if (new RegExp(`^https://character-sheets.appspot.com/${system}/display\\?key=[\\w-]+&ajax=1$`).test(url)) return 3;
    if (new RegExp(`^https://character-sheets.appspot.com/${system}/display\\?key=[\\w-]+&ajax=1&callback=resultGenerate$`).test(url)) return 4;
    return 0;
}

function startGenerate(isClick: boolean): void {
    var url = character_sheets_url?.value;
    switch (checkURL(params.get("system"), url)) {
        case 1:
            url = `${url.replace("edit.html", "display")}&ajax=1&callback=resultGenerate`
            break;
        case 2:
            url += "&ajax=1&callback=resultGenerate"
            break;
        case 3:
            url += "&callback=resultGenerate"
            break;
        case 0:
            console.error(`"${url}"は対応していないリンクです`);
            if (isClick) alert(`"${url}"は対応していないリンクです`)
            return;
    }
    
    axios.get(url).then(response => {
        resultGenerate(response.data);
    });
}

const corner_brackets = /^【.+】$/;
function addCornerBrackets(name: string): string {
    if (corner_brackets.test(name)) return name;
    else return `【${name}】`;
}

const double_parentheses = /^《.+》$/;
function addDoubleParentheses(name: string): string {
    if (name.includes("可変")) return "可変";
    else if (name.includes("なし")) return "なし";
    else if (double_parentheses.test(name)) return name;
    else return `《${name}》`;
}

const reference_page = /^.+P$/i;
function addReferencePage(name: string): string {
    if (reference_page.test(name)) return name;
    else return `${name}P`;
}

const row_number = /row[\d]+/;
const column_number = /name[\d]+/;
function convertSkill(id: string, skills: {
    row0: {
        name0: string;
        name1: string;
        name2: string;
        name3: string;
        name4: string;
        name5: string;
    };
    row1: {
        name0: string;
        name1: string;
        name2: string;
        name3: string;
        name4: string;
        name5: string;
    };
    row2: {
        name0: string;
        name1: string;
        name2: string;
        name3: string;
        name4: string;
        name5: string;
    };
    row3: {
        name0: string;
        name1: string;
        name2: string;
        name3: string;
        name4: string;
        name5: string;
    };
    row4: {
        name0: string;
        name1: string;
        name2: string;
        name3: string;
        name4: string;
        name5: string;
    };
    row5: {
        name0: string;
        name1: string;
        name2: string;
        name3: string;
        name4: string;
        name5: string;
    };
    row6: {
        name0: string;
        name1: string;
        name2: string;
        name3: string;
        name4: string;
        name5: string;
    };
    row7: {
        name0: string;
        name1: string;
        name2: string;
        name3: string;
        name4: string;
        name5: string;
    };
    row8: {
        name0: string;
        name1: string;
        name2: string;
        name3: string;
        name4: string;
        name5: string;
    };
    row9: {
        name0: string;
        name1: string;
        name2: string;
        name3: string;
        name4: string;
        name5: string;
    };
    row10: {
        name0: string;
        name1: string;
        name2: string;
        name3: string;
        name4: string;
        name5: string;
    };
}) {
    return skills[row_number.exec(id)?.[0]!][column_number.exec(id)?.[0]];
}

character_sheets_url.onchange = () => {
    startGenerate(false);
};
conversion_button.onclick = () => {
    startGenerate(true);
};