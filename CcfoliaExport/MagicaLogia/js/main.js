setTitle("マギカロギア キャラシート変換ツール");
setCharacterSheetsUrlPlaceholder("https://character-sheets.appspot.com/mglg/...");

setOptionTitle(null, "全体の形式");
const all_format_type = addOption(null, "select", "format_type", ["標準", "standard"], ["簡略", "brief"], ["拡張", "expansion"], ["カスタム", "custom"]);
const all_add_brackets_magic_name = addOption(null, "input:checkbox", "add_brackets_magic_name", "魔法名に【】を付ける (すでに付いている場合はスキップ)", true);
const all_add_brackets_designated_specialties = addOption(null, "input:checkbox", "add_brackets_designated_specialties", "指定特技に《》を付ける (すでに付いている場合はスキップ)", true);
const all_add_p_reference_page = addOption(null, "input:checkbox", "add_p_reference_page", "参照ページにPを付ける (すでに付いている場合はスキップ)", true);
const all_mention_character_sheets_url = addOption(null, "input:checkbox", "mention_character_sheets_url", "キャラクターシートのURLを記載する", false);

setOptionTitle("library", "蔵書の形式");
const library_mention_name = addOption("library", "input:checkbox", "mention_name", "魔法名を記載する", false);
const library_mention_type = addOption("library", "input:checkbox", "mention_type", "魔法タイプを記載する", false);
const library_mention_skill = addOption("library", "input:checkbox", "mention_skill", "指定特技を記載する", false);
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
const memo_mention_level = addOption("memo", "input:checkbox", "mention_level", "階梯を記載する", false);
const memo_mention_domain = addOption("memo", "input:checkbox", "mention_domain", "領域を記載する", false);
const memo_mention_attribute = addOption("memo", "input:checkbox", "mention_attribute", "能力値を記載する", false);
const memo_mention_career = addOption("memo", "input:checkbox", "mention_career", "経歴/機関を記載する", false);
const memo_mention_belief = addOption("memo", "input:checkbox", "mention_belief", "信条を記載する", false);
const memo_mention_cover = addOption("memo", "input:checkbox", "mention_cover", "表の顔を記載する", false);
const memo_mention_memo = addOption("memo", "input:checkbox", "mention_memo", "メモを記載する", false);
const memo_mention_true_form = addOption("memo", "input:checkbox", "mention_true_form", "真の姿を記載する", false);
const memo_mention_effect_true_form = addOption("memo", "input:checkbox", "mention_effect_true_form", "真の姿の効果を記載する", false);
const memo_mention_soul_skill = addOption("memo", "input:checkbox", "mention_soul_skill", "魂の特技を記載する", false);
const memo_mention_library = addOption("memo", "input:checkbox", "mention_library", "蔵書を記載する", false);

setOptionTitle("chat_palette", "チャットパレットの形式");
const chat_palette_mention_magic_name = addOption("chat_palette", "input:checkbox", "mention_magic_name", "魔法名を記載する", false);
const chat_palette_mention_true_form = addOption("chat_palette", "input:checkbox", "mention_true_form", "真の姿とその効果を記載する", false);
const chat_palette_mention_learned_skill = addOption("chat_palette", "input:checkbox", "mention_learned_skill", "修得特技を記載する", false);
const chat_palette_mention_library = addOption("chat_palette", "input:checkbox", "mention_library", "蔵書を記載する", false);

const ccfolia_result = addOutputSlot("ccfolia", "ココフォリア式出力");
const memo_result = addOutputSlot("memo", "ココフォリア式メモ出力");
const chat_palette_result = addOutputSlot("chat_palette", "ココフォリア式チャットパレット出力");

all_format_type.onchange = (event) => {
    switch (all_format_type.value) {
        case "standard":
            // 蔵書の形式
            library_mention_name.checked = true;
            library_mention_type.checked = false;
            library_mention_skill.checked = true;
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
            memo_mention_level.checked = true;
            memo_mention_domain.checked = false;
            memo_mention_attribute.checked = false;
            memo_mention_career.checked = true;
            memo_mention_belief.checked = false;
            memo_mention_cover.checked = true;
            memo_mention_memo.checked = false;
            memo_mention_true_form.checked = false;
            memo_mention_effect_true_form.checked = false;
            memo_mention_soul_skill.checked = false;
            memo_mention_library.checked = false;
            
            // チャットパレットの形式
            chat_palette_mention_magic_name.checked = false;
            chat_palette_mention_true_form.checked = true;
            chat_palette_mention_learned_skill.checked = true;
            chat_palette_mention_library.checked = true;
            break;
        case "brief":
            // 蔵書の形式
            library_mention_name.checked = true;
            library_mention_type.checked = false;
            library_mention_skill.checked = true;
            library_mention_goals.checked = false;
            library_mention_mana.checked = false;
            library_mention_reference_page.checked = false;
            
            // メモの形式
            memo_mention_magic_name.checked = true;
            memo_mention_gender.checked = false;
            memo_mention_age.checked = false;
            memo_mention_level.checked = true;
            memo_mention_domain.checked = false;
            memo_mention_attribute.checked = false;
            memo_mention_career.checked = true;
            memo_mention_belief.checked = false;
            memo_mention_cover.checked = true;
            memo_mention_memo.checked = false;
            memo_mention_true_form.checked = false;
            memo_mention_effect_true_form.checked = false;
            memo_mention_soul_skill.checked = false;
            memo_mention_library.checked = false;
            
            // チャットパレットの形式
            chat_palette_mention_magic_name.checked = false;
            chat_palette_mention_true_form.checked = false;
            chat_palette_mention_learned_skill.checked = false;
            chat_palette_mention_library.checked = true;
            break;
        case "expansion":
            // 蔵書の形式
            library_mention_name.checked = true;
            library_mention_type.checked = true;
            library_mention_skill.checked = true;
            library_mention_goals.checked = true;
            library_mention_mana.checked = true;
            library_mention_reference_page.checked = false;
            
            // メモの形式
            memo_mention_magic_name.checked = true;
            memo_mention_gender.checked = true;
            memo_mention_age.checked = true;
            memo_mention_level.checked = true;
            memo_mention_domain.checked = true;
            memo_mention_attribute.checked = true;
            memo_mention_career.checked = true;
            memo_mention_belief.checked = true;
            memo_mention_cover.checked = true;
            memo_mention_memo.checked = false;
            memo_mention_true_form.checked = true;
            memo_mention_effect_true_form.checked = true;
            memo_mention_soul_skill.checked = true;
            memo_mention_library.checked = true;
            
            // チャットパレットの形式
            chat_palette_mention_magic_name.checked = true;
            chat_palette_mention_true_form.checked = true;
            chat_palette_mention_learned_skill.checked = true;
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

const skills = {
    "row0": {
        "name0": "黄金",
        "name1": "肉",
        "name2": "重力",
        "name3": "物語",
        "name4": "追憶",
        "name5": "深淵",
        "number": "2"
    },
    "row1": {
        "name0": "大地",
        "name1": "蟲",
        "name2": "風",
        "name3": "旋律",
        "name4": "謎",
        "name5": "腐敗",
        "number": "3"
    },
    "row2": {
        "name0": "森",
        "name1": "花",
        "name2": "流れ",
        "name3": "涙",
        "name4": "嘘",
        "name5": "裏切り",
        "number": "4"
    },
    "row3": {
        "name0": "道",
        "name1": "血",
        "name2": "水",
        "name3": "別れ",
        "name4": "不安",
        "name5": "迷い",
        "number": "5"
    },
    "row4": {
        "name0": "海",
        "name1": "鱗",
        "name2": "波",
        "name3": "微笑み",
        "name4": "眠り",
        "name5": "怠惰",
        "number": "6"
    },
    "row5": {
        "name0": "静寂",
        "name1": "混沌",
        "name2": "自由",
        "name3": "想い",
        "name4": "偶然",
        "name5": "歪み",
        "number": "7"
    },
    "row6": {
        "name0": "雨",
        "name1": "牙",
        "name2": "衝撃",
        "name3": "勝利",
        "name4": "幻",
        "name5": "不幸",
        "number": "8"
    },
    "row7": {
        "name0": "嵐",
        "name1": "叫び",
        "name2": "雷",
        "name3": "恋",
        "name4": "狂気",
        "name5": "バカ",
        "number": "9"
    },
    "row8": {
        "name0": "太陽",
        "name1": "怒り",
        "name2": "炎",
        "name3": "情熱",
        "name4": "祈り",
        "name5": "悪意",
        "number": "10"
    },
    "row9": {
        "name0": "天空",
        "name1": "翼",
        "name2": "光",
        "name3": "癒し",
        "name4": "希望",
        "name5": "絶望",
        "number": "11"
    },
    "row10": {
        "name0": "異界",
        "name1": "エロス",
        "name2": "円環",
        "name3": "時",
        "name4": "未来",
        "name5": "死",
        "number": "12"
    }
};

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
            if (library_mention_name.checked) book_data.push(checkAddCornerBrackets(book.name).replace("\n", " "));
            status_label.push(checkAddCornerBrackets(book.name).replace("\n", " "));
        }
        if (library_mention_type.checked && !checkBlank(book.type)) book_data.push(book.type.replace("\n", " "));
        if (library_mention_skill.checked && !checkBlank(book.skill)) book_data.push(checkAddDoubleParentheses(book.skill).replace("\n", " "));
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
    if (memo_mention_level.checked && !checkBlank(data.base.level) && !checkBlank(data.base.levelname)) add_memo("第{0}階梯{1}", data.base.level, data.base.levelname);
    if (memo_mention_domain.checked) {
        var domain;
        switch(data.base.domain) {
            case "a":
                domain = "星";
                break;
            case "ab":
                domain = "獣";
                break;
            case "bc":
                domain = "力";
                break;
            case "cd":
                domain = "歌";
                break;
            case "de":
                domain = "夢";
                break;
            case "e":
                domain = "闇";
                break;
        }
        add_memo("領域 : {0}", domain);
    }
    if (memo_mention_attribute.checked && !checkBlank(data.base.attack) && !checkBlank(data.base.defense) && !checkBlank(data.base.source))
        add_memo("攻撃力 : {0}, 防御力 : {1}, 根源力 : {2}", data.base.attack, data.base.defense, data.base.source);
    if (memo_mention_career.checked && !checkBlank(data.base.career)) add_memo("経歴/機関 : {0}", data.base.career);
    if (memo_mention_belief.checked && !checkBlank(data.base.belief)) add_memo("信念 : {0}", data.base.belief);
    if (memo_mention_cover.checked && !checkBlank(data.base.cover)) add_memo("表の顔 : {0}", data.base.cover);
    if (memo_mention_memo.checked && !checkBlank(data.base.memo)) add_memo("メモ :\n{0}", data.base.memo);
    if (memo_mention_true_form.checked && !checkBlank(data.trueform.name)) add_memo("真の姿 : {0}", data.trueform.name);
    if (memo_mention_effect_true_form.checked && !checkBlank(data.trueform.effect)) add_memo("真の姿の効果 : {0}", data.trueform.effect);
    if (memo_mention_soul_skill.checked && !checkBlank(data.soul.skill)) add_memo("魂の特技 : {0}", data.soul.skill)
    if (memo_mention_library.checked && library.length > 0) {
        add_memo("蔵書 :\n{0}", library.join("\n"));
    }
    
    if (chat_palette_mention_magic_name.checked && !checkBlank(data.base.magicname)) chat_palette.push(`@魔法名\n${data.base.magicname}`);
    if (chat_palette_mention_true_form.checked && !checkBlank(data.trueform.name) && !checkBlank(data.trueform.effect)) chat_palette.push(`@真の姿\n${data.trueform.name} ${data.trueform.effect}`);
    if (chat_palette_mention_learned_skill.checked) {
        const learned = [];
        for (const element of data.learned) {
            if (checkBlank(element.id)) continue;
            learned.push(`2d6>=5 （判定 : ${convertSkill(element.id, skills)}）`);
        }
        if (learned.length > 0) chat_palette.push(`@修得特技\n${learned.join("\n")}`)
    }
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