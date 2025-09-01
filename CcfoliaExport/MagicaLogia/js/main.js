setTitle("マギカロギア キャラシート変換ツール");
setCharacterSheetsUrlPlaceholder("https://character-sheets.appspot.com/mglg/...");

setOptionTitle(null, "全体の形式");
const all_format_type = addOption(null, "select", "format_type", ["標準", "standard"], ["簡略", "brief"], ["拡張", "expansion"], ["カスタム", "custom"]);
const all_add_brackets_magic_name = addOption(null, "input:checkbox", "add_brackets_magic_name", "魔法名に【】を付ける (すでに付いている場合はスキップ)", true);
const all_add_brackets_designated_specialties = addOption(null, "input:checkbox", "add_brackets_designated_specialties", "指定特技に《》を付ける (すでに付いている場合はスキップ)", true);
const all_add_p_reference_page = addOption(null, "input:checkbox", "add_p_reference_page", "参照ページにPを付ける (すでに付いている場合はスキップ)", true);
const all_mention_character_sheets_url = addOption(null, "input:checkbox", "mention_character_sheets_url", "キャラクターシートのURLを記載する", false);

setOptionTitle("library", "蔵書の形式");
const library_mention_magic_name = addOption("library", "input:checkbox", "mention_magic_name", "魔法名を記載する", false);
const library_mention_magic_type = addOption("library", "input:checkbox", "mention_magic_type", "魔法タイプを記載する", false);
const library_mention_designated_specialties = addOption("library", "input:checkbox", "mention_designated_specialties", "指定特技を記載する", false);
const library_mention_goals = addOption("library", "input:checkbox", "mention_goals", "目標を記載する", false);
const library_mention_mana = addOption("library", "input:checkbox", "mention_mana", "魔素を記載する", false);
const library_mention_reference_page = addOption("library", "input:checkbox", "mention_reference_page", "参照ページを記載する", false);

setOptionTitle("anchor", "アンカーの形式");
const anchor_mention_name = addOption("anchor", "input:checkbox", "mention_name", "名前を記載する", false);
const anchor_mention_destiny = addOption("anchor", "input:checkbox", "mention_destiny", "運命を記載する", false);
const anchor_mention_attribute = addOption("anchor", "input:checkbox", "mention_attribute", "属性を記載する", false);

setOptionTitle("memo", "メモの形式");
const memo_mention_magic_name = addOption("memo", "input:checkbox", "mention_magic_name", "魔法名を記載する", false);
const memo_mention_gender = addOption("memo", "input:checkbox", "mention_gender", "性別を記載する", false);
const memo_mention_age = addOption("memo", "input:checkbox", "mention_age", "年齢を記載する", false);
const memo_mention_stage = addOption("memo", "input:checkbox", "mention_stage", "階梯を記載する", false);
const memo_mention_field = addOption("memo", "input:checkbox", "mention_field", "領域を記載する", false);
const memo_mention_attribute = addOption("memo", "input:checkbox", "mention_attribute", "能力値を記載する", false);
const memo_mention_background_and_institution = addOption("memo", "input:checkbox", "mention_background_and_institution", "経歴/機関を記載する", false);
const memo_mention_belief = addOption("memo", "input:checkbox", "mention_belief", "信条を記載する", false);
const memo_mention_public_face = addOption("memo", "input:checkbox", "mention_public_face", "表の顔を記載する", false);
const memo_mention_memo = addOption("memo", "input:checkbox", "mention_memo", "メモを記載する", false);
const memo_mention_true_form = addOption("memo", "input:checkbox", "mention_true_form", "真の姿を記載する", false);
const memo_mention_effect_true_form = addOption("memo", "input:checkbox", "mention_effect_true_form", "真の姿の効果を記載する", false);
const memo_mention_soul_specialties = addOption("memo", "input:checkbox", "mention_soul_specialties", "魂の特技を記載する", false);
const memo_mention_library = addOption("memo", "input:checkbox", "mention_library", "蔵書を記載する", false);

setOptionTitle("chat_palette", "チャットパレットの形式");
const chat_palette_mention_magic_name = addOption("chat_palette", "input:checkbox", "mention_magic_name", "魔法名を記載する", false);
const chat_palette_mention_true_form = addOption("chat_palette", "input:checkbox", "mention_true_form", "真の姿とその効果を記載する", false);
const chat_palette_mention_library = addOption("chat_palette", "input:checkbox", "mention_library", "蔵書を記載する", false);

const ccfolia_result = addOutputSlot("ccfolia", "ココフォリア式出力");
const memo_result = addOutputSlot("memo", "ココフォリア式メモ出力");
const chat_palette_result = addOutputSlot("chat_palette", "ココフォリア式チャットパレット出力");

all_format_type.onchange = (event) => {
    switch (all_format_type.value) {
        case "standard":
            // 蔵書の形式
            library_mention_magic_name.checked = true;
            library_mention_magic_type.checked = false;
            library_mention_designated_specialties.checked = true;
            library_mention_goals.checked = false;
            library_mention_mana.checked = true;
            library_mention_reference_page.checked = false;
            
            // アンカーの形式
            anchor_mention_name.checked = true;
            anchor_mention_destiny.checked = true;
            anchor_mention_attribute.checked = true;
            
            // メモの形式
            memo_mention_magic_name.checked = true;
            memo_mention_gender.checked = true;
            memo_mention_age.checked = true;
            memo_mention_stage.checked = true;
            memo_mention_field.checked = false;
            memo_mention_attribute.checked = false;
            memo_mention_background_and_institution.checked = true;
            memo_mention_belief.checked = false;
            memo_mention_public_face.checked = true;
            memo_mention_memo.checked = false;
            memo_mention_true_form.checked = false;
            memo_mention_effect_true_form.checked = false;
            memo_mention_soul_specialties.checked = false;
            memo_mention_library.checked = false;
            
            // チャットパレットの形式
            chat_palette_mention_magic_name.checked = false;
            chat_palette_mention_true_form.checked = true;
            chat_palette_mention_library.checked = true;
            break;
        case "brief":
            // 蔵書の形式
            library_mention_magic_name.checked = true;
            library_mention_magic_type.checked = false;
            library_mention_designated_specialties.checked = true;
            library_mention_goals.checked = false;
            library_mention_mana.checked = false;
            library_mention_reference_page.checked = false;
            
            // メモの形式
            memo_mention_magic_name.checked = true;
            memo_mention_gender.checked = false;
            memo_mention_age.checked = false;
            memo_mention_stage.checked = true;
            memo_mention_field.checked = false;
            memo_mention_attribute.checked = false;
            memo_mention_background_and_institution.checked = true;
            memo_mention_belief.checked = false;
            memo_mention_public_face.checked = true;
            memo_mention_memo.checked = false;
            memo_mention_true_form.checked = false;
            memo_mention_effect_true_form.checked = false;
            memo_mention_soul_specialties.checked = false;
            memo_mention_library.checked = false;
            
            // チャットパレットの形式
            chat_palette_mention_magic_name.checked = false;
            chat_palette_mention_true_form.checked = false;
            chat_palette_mention_library.checked = true;
            break;
        case "expansion":
            // 蔵書の形式
            library_mention_magic_name.checked = true;
            library_mention_magic_type.checked = true;
            library_mention_designated_specialties.checked = true;
            library_mention_goals.checked = true;
            library_mention_mana.checked = true;
            library_mention_reference_page.checked = false;
            
            // メモの形式
            memo_mention_magic_name.checked = true;
            memo_mention_gender.checked = true;
            memo_mention_age.checked = true;
            memo_mention_stage.checked = true;
            memo_mention_field.checked = true;
            memo_mention_attribute.checked = true;
            memo_mention_background_and_institution.checked = true;
            memo_mention_belief.checked = true;
            memo_mention_public_face.checked = true;
            memo_mention_memo.checked = false;
            memo_mention_true_form.checked = true;
            memo_mention_effect_true_form.checked = true;
            memo_mention_soul_specialties.checked = true;
            memo_mention_library.checked = true;
            
            // チャットパレットの形式
            chat_palette_mention_magic_name.checked = true;
            chat_palette_mention_true_form.checked = true;
            chat_palette_mention_library.checked = true;
            break;
    }
};

document.querySelectorAll("#option div:not(#null) input[type=\"checkbox\"]").forEach(element => {
    element.onchange = (event) => {
        all_format_type.value = "custom";
    };
});

all_format_type.onchange();

function checkAddCornerBrackets(name) {
    if (all_add_brackets_magic_name.checked) {
        return addCornerBrackets(name);
    }
    else if (corner_brackets.test(name)) return name.match(corner_brackets)[0].substring(1, -1);
    else return name;
}

function checkAddDoubleParentheses(name) {
    if (name.includes("可変")) return "可変";
    else if (name.includes("なし")) return "なし";
    else if (all_add_brackets_designated_specialties.checked) {
        return addDoubleParentheses(name);
    }
    else if (double_parentheses.test(name)) return name.match(double_parentheses)[0].substring(1, -1);
    else return name;
}

function checkAddPReferencePage(name) {
    if (all_add_p_reference_page.checked) {
        return addReferencePage(name);
    }
    else if (reference_page.test(name)) return name.match(reference_page)[0].substring(0, -1);
    else return name;
}

function resultGenerate(data) {
    const url = character_sheets_url.value;
    const url_type = checkURL("mglg", url);
    const library = [];
    const status = [];
    const params = [];
    const memo = [];
    const chat_palette = [];
    
    /**
     * @param {String} base 
     * @param  {...String} args 
     */
    function add_memo(base, ...args) {
        if (args.findIndex(x => checkBlank(x)) != -1) {
            return;
        }
        for (const [index, element] of args.entries()) {
            base = base.replace(new RegExp(`\\{${index}\\}`, "g"), element);
        }
        memo.push(base);
    }
    
    for (const book of data.library) {
        const book_data = [];
        const status_label = [];
        if (!checkBlank(book.name)) {
            if (library_mention_magic_name.checked) book_data.push(checkAddCornerBrackets(book.name).replace("\n", " "));
            status_label.push(checkAddCornerBrackets(book.name).replace("\n", " "));
        }
        if (library_mention_magic_type.checked && !checkBlank(book.type)) book_data.push(book.type.replace("\n", " "));
        if (library_mention_designated_specialties.checked && !checkBlank(book.skill)) book_data.push(checkAddDoubleParentheses(book.skill).replace("\n", " "));
        if (library_mention_goals.checked && !checkBlank(book.target)) book_data.push(book.target.replace("\n", " "));
        if (!checkBlank(book.cost)) {
            if (library_mention_mana.checked) book_data.push(book.cost.replace("\n", " "));
            status_label.push(book.cost.replace("\n", " "));
        }
        if (library_mention_reference_page.checked && !checkBlank(book.page)) book_data.push(checkAddPReferencePage(book.page).replace("\n", " "));
        library.push(book_data.join(" "));
        
        status.push({
            label: status_label.join(" "),
            value: 0,
            max: !checkBlank(data.base.source) ? Number.parseInt(data.base.source) : 0
        });
    }
    
    status.push({
        label: "魔力",
        value: 0,
        max: 0
    });
    status.push({
        label: "一時的魔力",
        value: 0,
        max: 0
    });
    if (!checkBlank(data.base.attack)) {
        params.push({
            "label": "攻撃力",
            value: data.base.attack
        });
    }
    if (!checkBlank(data.base.defense)) {
        params.push({
            "label": "防御力",
            value: data.base.defense
        });
    }
    if (!checkBlank(data.base.source)) {
        params.push({
            "label": "根源力",
            value: data.base.source
        });
    }
    
    if (memo_mention_magic_name.checked && !checkBlank(data.base.magicname)) add_memo("魔法名 : {0}", data.base.magicname);
    if (memo_mention_gender.checked && !checkBlank(data.base.sex)) add_memo("性別 : {0}", data.base.sex);
    if (memo_mention_age.checked && !checkBlank(data.base.age)) add_memo("年齢 : {0}", data.base.age);
    if (memo_mention_stage.checked && !checkBlank(data.base.level) && !checkBlank(data.base.levelname)) add_memo("第{0}階梯{1}", data.base.level, data.base.levelname);
    if (memo_mention_field.checked) {
        var field;
        switch(data.base.domain) {
            case "a":
                field = "星";
                break;
            case "ab":
                field = "獣";
                break;
            case "bc":
                field = "力";
                break;
            case "cd":
                field = "歌";
                break;
            case "de":
                field = "夢";
                break;
            case "e":
                field = "闇";
                break;
        }
        add_memo("領域 : {0}", field);
    }
    if (memo_mention_attribute.checked && !checkBlank(data.base.attack) && !checkBlank(data.base.defense) && !checkBlank(data.base.source))
        add_memo("攻撃力 : {0}, 防御力 : {1}, 根源力 : {2}", data.base.attack, data.base.defense, data.base.source);
    if (memo_mention_background_and_institution.checked && !checkBlank(data.base.career)) add_memo("経歴/機関 : {0}", data.base.career);
    if (memo_mention_belief.checked && !checkBlank(data.base.belief)) add_memo("信念 : {0}", data.base.belief);
    if (memo_mention_public_face.checked && !checkBlank(data.base.cover)) add_memo("表の顔 : {0}", data.base.cover);
    if (memo_mention_memo.checked && !checkBlank(data.base.memo)) add_memo("メモ :\n{0}", data.base.memo);
    if (memo_mention_true_form.checked && !checkBlank(data.trueform.name)) add_memo("真の姿 : {0}", data.trueform.name);
    if (memo_mention_effect_true_form.checked && !checkBlank(data.trueform.effect)) add_memo("真の姿の効果 : {0}", data.trueform.effect);
    if (memo_mention_soul_specialties.checked && !checkBlank(data.soul.skill)) add_memo("魂の特技 : {0}", data.soul.skill)
    if (memo_mention_library.checked && library.length > 0) {
        add_memo("蔵書 :\n{0}", library.join("\n"));
    }
    
    if (chat_palette_mention_magic_name.checked && !checkBlank(data.base.magicname)) chat_palette.push(`@魔法名\n${data.base.magicname}`);
    if (chat_palette_mention_true_form.checked && !checkBlank(data.trueform.name) && !checkBlank(data.trueform.effect)) chat_palette.push(`@真の姿\n${data.trueform.name} ${data.trueform.effect}`);
    if (chat_palette_mention_library.checked && library.length > 0) chat_palette.push(`@蔵書\n${library.join("\n")}`);
    
    const json = {
        kind: "character",
        data: {
            name: data.base.covername,
            memo: memo.join("\n"),
            initiative: -1,
            externalUrl: all_mention_character_sheets_url.checked && url_type == 1 ? url : "",
            status: status,
            params: params,
            secret: true,
            commands: chat_palette.join("\n\n")
        }
    };
    ccfolia_result.value = JSON.stringify(json);
    memo_result.value = json.data.memo;
    chat_palette_result.value = json.data.commands;
}