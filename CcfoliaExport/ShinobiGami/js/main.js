setTitle("シノビガミ キャラシート変換ツール");
setCharacterSheetsUrlPlaceholder("https://character-sheets.appspot.com/shinobigami/...");

setOptionTitle(null, "全体の形式");
const all_format_type = addOption(null, "select", "format_type", ["標準", "standard"], ["簡略", "brief"], ["拡張", "expansion"], ["カスタム", "custom"]);
const all_add_brackets_ninpou_name = addOption(null, "input:checkbox", "add_brackets_ninpou_name", "忍法名に【】を付ける (すでに付いている場合はスキップ)", true);
const all_add_brackets_designated_specialties = addOption(null, "input:checkbox", "add_brackets_designated_specialties", "指定特技に《》を付ける (すでに付いている場合はスキップ)", true);
const all_add_p_reference_page = addOption(null, "input:checkbox", "add_p_reference_page", "参照ページにPを付ける (すでに付いている場合はスキップ)", true);
const all_mention_character_sheets_url = addOption(null, "input:checkbox", "mention_character_sheets_url", "キャラクターシートのURLを記載する", false);

setOptionTitle("ninpou", "忍法の形式");
const ninpou_mention_name = addOption("ninpou", "input:checkbox", "mention_name", "忍法名を記載する", false);
const ninpou_mention_type = addOption("ninpou", "input:checkbox", "mention_type", "忍法タイプを記載する", false);
const ninpou_mention_target_skill = addOption("ninpou", "input:checkbox", "mention_target_skill", "指定特技を記載する", false);
const ninpou_mention_range = addOption("ninpou", "input:checkbox", "mention_range", "間合を記載する", false);
const ninpou_mention_cost = addOption("ninpou", "input:checkbox", "mention_cost", "コストを記載する", false);
const ninpou_mention_reference_page = addOption("ninpou", "input:checkbox", "mention_reference_page", "参照ページを記載する", false);

setOptionTitle("background", "背景の形式");
const background_mention_name = addOption("background", "input:checkbox", "mention_name", "背景名を記載する", false);
const background_mention_type = addOption("background", "input:checkbox", "mention_type", "背景タイプを記載する", false);
const background_mention_reference_page = addOption("background", "input:checkbox", "mention_reference_page", "参照ページを記載する", false);

setOptionTitle("personalities", "人物の形式");
const personalities_mention_personal_name = addOption("personalities", "input:checkbox", "mention_personal_name", "人物名を記載する", false);
const personalities_mention_place = addOption("personalities", "input:checkbox", "mention_place", "居所所持を記載する", false);
const personalities_mention_secret = addOption("personalities", "input:checkbox", "mention_secret", "秘密所持を記載する", false);
const personalities_mention_special_effect = addOption("personalities", "input:checkbox", "mention_special_effect", "奥義情報所持を記載する", false);
const personalities_mention_emotion = addOption("personalities", "input:checkbox", "mention_emotion", "感情を記載する", false);

setOptionTitle("memo", "メモの形式");
const memo_mention_pl_name = addOption("memo", "input:checkbox", "mention_pl_name", "PL名を記載する", false);
const memo_mention_gender = addOption("memo", "input:checkbox", "mention_gender", "性別を記載する", false);
const memo_mention_age = addOption("memo", "input:checkbox", "mention_age", "年齢を記載する", false);
const memo_mention_cover = addOption("memo", "input:checkbox", "mention_cover", "表の顔を表記する", false);
const memo_mention_belief = addOption("memo", "input:checkbox", "mention_belief", "信念を表記する", false);
const memo_mention_type = addOption("memo", "input:checkbox", "mention_type", "タイプを記載する", false);
const memo_mention_upperstyle = addOption("memo", "input:checkbox", "mention_upperstyle", "上位流派を記載する", false);
const memo_mention_substyle = addOption("memo", "input:checkbox", "mention_substyle", "下位流派を記載する", false);
const memo_mention_stylerule = addOption("memo", "input:checkbox", "mention_stylerule", "流儀を記載する", false);
const memo_mention_foe = addOption("memo", "input:checkbox", "mention_foe", "仇敵を記載する", false);
const memo_mention_level = addOption("memo", "input:checkbox", "mention_level", "階級を記載する", false);
const memo_mention_mission = addOption("memo", "input:checkbox", "mention_mission", "使命を記入する", false);
const memo_mention_memo = addOption("memo", "input:checkbox", "mention_memo", "メモを記載する", false);
const memo_mention_ninpou = addOption("memo", "input:checkbox", "mention_ninpou", "忍法を記載する", false);

setOptionTitle("status", "ステータスの形式")
const status_compile_vitality = addOption("status", "input:checkbox", "compile_vitality", "生命力をまとめる", false);
const status_additional_vitality = addOption("status", "input:checkbox", "additional_vitality", "追加生命力を追加する", false);
const status_three_values = addOption("status", "input:checkbox", "three_values", "目標・スペシャル・ファンブル値を追加する", false);
const status_cost = addOption("status", "input:checkbox", "cost", "使用可能コストを追加する", false);

setOptionTitle("chat_palette", "チャットパレットの形式");
const chat_palette_mention_learned_skill = addOption("chat_palette", "input:checkbox", "mention_learned_skill", "修得特技を記載する", false);
const chat_palette_mention_ninpou = addOption("chat_palette", "input:checkbox", "mention_ninpou", "忍法を記載する", false);

const ccfolia_result = addOutputSlot("ccfolia", "ココフォリア式出力");
const memo_result = addOutputSlot("memo", "ココフォリア式メモ出力");
const chat_palette_result = addOutputSlot("chat_palette", "ココフォリア式チャットパレット出力");

all_format_type.onchange = (event) => {
    switch (all_format_type.value) {
        case "standard":
            // 忍法の形式
            ninpou_mention_name.checked = true;
            ninpou_mention_type.checked = false;
            ninpou_mention_target_skill.checked = true;
            ninpou_mention_range.checked = false;
            ninpou_mention_cost.checked = true;
            ninpou_mention_reference_page.checked = false;
            
            // 背景の形式
            background_mention_name.checked = true;
            background_mention_type.checked = true;
            background_mention_reference_page.checked = false;
            
            // 人物の形式
            personalities_mention_personal_name.checked = true;
            personalities_mention_place.checked = false;
            personalities_mention_secret.checked = true;
            personalities_mention_special_effect.checked = true;
            personalities_mention_emotion.checked = true;
            
            // メモの形式
            memo_mention_pl_name.checked = true;
            memo_mention_gender.checked = true;
            memo_mention_age.checked = true;
            memo_mention_cover.checked = true;
            memo_mention_belief.checked = false;
            memo_mention_type.checked = false;
            memo_mention_upperstyle.checked = true;
            memo_mention_substyle.checked = false;
            memo_mention_stylerule.checked = true;
            memo_mention_foe.checked = true;
            memo_mention_level.checked = true;
            memo_mention_mission.checked = true;
            memo_mention_memo.checked = false;
            memo_mention_ninpou.checked = false;
            
            // ステータスの形式
            status_compile_vitality.checked = false;
            status_three_values.checked = true;
            status_cost.checked = true;
            
            // チャットパレットの形式
            chat_palette_mention_learned_skill.checked = true;
            chat_palette_mention_ninpou.checked = true;
            break;
        case "brief":
            // 忍法の形式
            ninpou_mention_name.checked = true;
            ninpou_mention_type.checked = false;
            ninpou_mention_target_skill.checked = true;
            ninpou_mention_range.checked = false;
            ninpou_mention_cost.checked = false;
            ninpou_mention_reference_page.checked = false;
            
            // 背景の形式
            background_mention_name.checked = false;
            background_mention_type.checked = false;
            background_mention_reference_page.checked = false;
            
            // 人物の形式
            memo_mention_pl_name.checked = true;
            personalities_mention_personal_name.checked = true;
            personalities_mention_place.checked = false;
            personalities_mention_secret.checked = false;
            personalities_mention_special_effect.checked = true;
            personalities_mention_emotion.checked = true;
            
            // メモの形式
            memo_mention_gender.checked = false;
            memo_mention_age.checked = false;
            memo_mention_cover.checked = false;
            memo_mention_belief.checked = false;
            memo_mention_type.checked = false;
            memo_mention_upperstyle.checked = true;
            memo_mention_substyle.checked = false;
            memo_mention_stylerule.checked = true;
            memo_mention_foe.checked = true;
            memo_mention_level.checked = false;
            memo_mention_mission.checked = true;
            memo_mention_memo.checked = false;
            memo_mention_ninpou.checked = false;
            
            // ステータスの形式
            status_compile_vitality.checked = true;
            status_three_values.checked = false;
            status_cost.checked = false;
            
            // チャットパレットの形式
            chat_palette_mention_learned_skill.checked = false;
            chat_palette_mention_ninpou.checked = true;
            break;
        case "expansion":
            // 忍法の形式
            ninpou_mention_name.checked = true;
            ninpou_mention_type.checked = true;
            ninpou_mention_target_skill.checked = true;
            ninpou_mention_range.checked = true;
            ninpou_mention_cost.checked = true;
            ninpou_mention_reference_page.checked = true;
            
            // 背景の形式
            background_mention_name.checked = true;
            background_mention_type.checked = true;
            background_mention_reference_page.checked = true;
            
            // 人物の形式
            personalities_mention_personal_name.checked = true;
            personalities_mention_place.checked = true;
            personalities_mention_secret.checked = true;
            personalities_mention_special_effect.checked = true;
            personalities_mention_emotion.checked = true;
            
            // メモの形式
            memo_mention_pl_name.checked = true;
            memo_mention_gender.checked = true;
            memo_mention_age.checked = true;
            memo_mention_cover.checked = true;
            memo_mention_belief.checked = true;
            memo_mention_type.checked = true;
            memo_mention_upperstyle.checked = true;
            memo_mention_substyle.checked = true;
            memo_mention_stylerule.checked = true;
            memo_mention_foe.checked = true;
            memo_mention_level.checked = true;
            memo_mention_mission.checked = true;
            memo_mention_memo.checked = false;
            memo_mention_ninpou.checked = true;
            
            // ステータスの形式
            status_compile_vitality.checked = false;
            status_three_values.checked = true;
            status_cost.checked = true;
            
            // チャットパレットの形式
            chat_palette_mention_learned_skill.checked = true;
            chat_palette_mention_ninpou.checked = true;
            break;
    }
}

const blacklist = [status_additional_vitality.id];
document.querySelectorAll("#option div:not(#null) input[type=\"checkbox\"]").forEach(element => {
    if (blacklist.includes(element.id)) return;
    element.onchange = (event) => {
        all_format_type.value = "custom";
    };
});

all_format_type.onchange();

const skills = {
    "row0": {
        "name0": "絡繰術",
        "name1": "騎乗術",
        "name2": "生存術",
        "name3": "医術",
        "name4": "兵糧術",
        "name5": "異形化"
    },
    "row1": {
        "name0": "火術",
        "name1": "砲術",
        "name2": "潜伏術",
        "name3": "毒術",
        "name4": "鳥獣術",
        "name5": "召喚術"
    },
    "row2": {
        "name0": "水術",
        "name1": "手裏剣術",
        "name2": "遁走術",
        "name3": "罠術",
        "name4": "野戦術",
        "name5": "死霊術"
    },
    "row3": {
        "name0": "針術",
        "name1": "手練",
        "name2": "盗聴術",
        "name3": "調査術",
        "name4": "地の利",
        "name5": "結界術"
    },
    "row4": {
        "name0": "仕込み",
        "name1": "身体操術",
        "name2": "腹話術",
        "name3": "詐術",
        "name4": "意気",
        "name5": "封術"
    },
    "row5": {
        "name0": "衣装術",
        "name1": "歩法",
        "name2": "隠形術",
        "name3": "対人術",
        "name4": "用兵術",
        "name5": "言霊術"
    },
    "row6": {
        "name0": "縄術",
        "name1": "走法",
        "name2": "変装術",
        "name3": "遊芸",
        "name4": "記憶術",
        "name5": "幻術"
    },
    "row7": {
        "name0": "登術",
        "name1": "飛術",
        "name2": "香術",
        "name3": "九ノ一の術",
        "name4": "見敵術",
        "name5": "瞳術"
    },
    "row8": {
        "name0": "拷問術",
        "name1": "骨法術",
        "name2": "分身の術",
        "name3": "傀儡の術",
        "name4": "暗号術",
        "name5": "千里眼の術"
    },
    "row9": {
        "name0": "壊器術",
        "name1": "刀術",
        "name2": "隠蔽術",
        "name3": "流言の術",
        "name4": "伝達術",
        "name5": "憑依術"
    },
    "row10": {
        "name0": "掘削術",
        "name1": "怪力",
        "name2": "第六感",
        "name3": "経済力",
        "name4": "人脈",
        "name5": "呪術"
    }
};

function checkAddCornerBrackets(name) {
    if (all_add_brackets_ninpou_name.checked) {
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
    const url_type = checkURL("shinobigami", url);
    const ninpou = [];
    const status = [];
    const params = [];
    const memo = [];
    const chat_palette = [];
    
    for (const element of data.ninpou) {
        const data = [];
        if (ninpou_mention_name.checked && !checkBlank(element.name)) data.push(checkAddCornerBrackets(element.name).replace("\n", " "));
        if (ninpou_mention_type.checked && !checkBlank(element.type)) data.push(`${element.type}忍法`);
        if (ninpou_mention_target_skill.checked && !checkBlank(element.targetSkill)) data.push(checkAddDoubleParentheses(element.targetSkill));
        if (ninpou_mention_range.checked && !checkBlank(element.range)) data.push(element.range);
        if (ninpou_mention_cost.checked && !checkBlank(element.cost)) data.push(element.cost);
        if (ninpou_mention_reference_page.checked && !checkBlank(element.page)) data.push(checkAddPReferencePage(element.page));
        ninpou.push(data.join(" "));
    }
    
    if (status_compile_vitality.checked) {
        status.push({
            label: "生命力",
            value: 6,
            max: 6
        });
    }
    else {
        status.push({
            label: "器術",
            value: 1,
            max: 1
        });
        status.push({
            label: "体術",
            value: 1,
            max: 1
        });
        status.push({
            label: "忍術",
            value: 1,
            max: 1
        });
        status.push({
            label: "謀術",
            value: 1,
            max: 1
        });
        status.push({
            label: "戦術",
            value: 1,
            max: 1
        });
        status.push({
            label: "妖術",
            value: 1,
            max: 1
        });
    }
    if (status_additional_vitality.checked) {
        status.push({
            label: "追加生命力",
            value: 0
        });
    }
    if (status_three_values.checked) {
        status.push({
            label: "目標値",
            value: 5
        });
        status.push({
            label: "スペシャル値",
            value: 12
        });
        status.push({
            label: "ファンブル値",
            value: 2
        });
    }
    if (status_cost.checked) {
        status.push({
            label: "使用可能コスト",
            value: 0
        });
    }
    
    params.push({
        label: "シーン表を振る",
        value: "ST"
    });
    params.push({
        label: "感情表を振る",
        value: "ET"
    });
    params.push({
        label: "ファンブル表を振る",
        value: "FT"
    });
    params.push({
        label: "変調表を振る",
        value: "WT"
    });
    
    if (memo_mention_pl_name.checked && !checkBlank(data.base.player)) memo.push(`PL: ${data.base.player}`);
    if (memo_mention_gender.checked && !checkBlank(data.base.sex)) memo.push(`性別 : ${data.base.sex}`);
    if (memo_mention_age.checked && !checkBlank(data.base.age)) memo.push(`年齢 : ${data.base.age}`);
    if (memo_mention_cover.checked && !checkBlank(data.base.cover)) memo.push(`表の顔 : ${data.base.cover}`);
    if (memo_mention_belief.checked && !checkBlank(data.base.belief)) memo.push(`信念 : ${data.base.belief}`);
    if (memo_mention_type.checked && !checkBlank(data.base.race)) {
        let race = "忍者";
        switch (data.base.race) {
            case "1":
                race = "忍者";
                break;
            case "2":
                race = "一般人";
                break;
            case "3":
                race = "半忍";
                break;
        }
        memo.push(`タイプ : ${race}`);
    }
    if (memo_mention_upperstyle.checked && !checkBlank(data.base.upperstyle)) {
        var upperstyle = "ハグレモノ";
        switch(data.base.upperstyle) {
            case "a":
                upperstyle = "斜歯忍軍";
                break;
            case "ab":
                upperstyle = "鞍馬神流";
                break;
            case "bc":
                upperstyle = "ハグレモノ";
                break;
            case "cd":
                upperstyle = "比良坂機関";
                break;
            case "de":
                upperstyle = "私立御斎学園";
                break;
            case "e":
                upperstyle = "隠忍の血統";
                break;
        }
        memo.push(`上位流派 : ${upperstyle}`);
    }
    if (memo_mention_substyle.checked && !checkBlank(data.base.substyle)) memo.push(`下位流派 : ${data.base.substyle}`);
    if (memo_mention_stylerule.checked && !checkBlank(data.base.stylerule)) memo.push(`流儀 : ${data.base.stylerule}`);
    if (memo_mention_foe.checked && !checkBlank(data.base.foe)) memo.push(`仇敵 : ${data.base.foe}`);
    if (memo_mention_level.checked && !checkBlank(data.base.level)) memo.push(`階級 : ${data.base.level}`);
    if (memo_mention_mission.checked && !checkBlank(data.scenario.mission)) memo.push(`使命 :\n${data.scenario.mission}`);
    if (memo_mention_memo.checked && !checkBlank(data.base.memo)) memo.push(`メモ :\n${data.base.memo}`);
    if (memo_mention_ninpou.checked && ninpou.length > 0) memo.push(`忍法 :\n${ninpou.join("\n")}`);
    
    chat_palette.push("@各種表\n{シーン表を振る}\n{感情表を振る}\n{ファンブル表を振る}\n{変調表を振る}");
    if (!status_compile_vitality.checked) chat_palette.push("@生命力関係\n:器術-1\n:器術+1\n:体術-1\n:体術+1\n:忍術-1\n:忍術+1\n:謀術-1\n:謀術+1\n:戦術-1\n:戦術+1\n:妖術-1\n:妖術+1");
    if (chat_palette_mention_learned_skill.checked) {
        const learned = [];
        for (const element of data.learned) {
            if (checkBlank(element.id)) continue;
            if (status_three_values.checked) {
                learned.push(`SG@{スペシャル値}#{ファンブル値}>={目標値} （判定 : ${convertSkill(element.id, skills)}）`);
            }
            else {
                learned.push(`SG>=5 （判定 : ${convertSkill(element.id, skills)}）`);
            }
        }
        if (learned.length > 0) chat_palette.push(`@修得特技\n${learned.join("\n")}`)
    }
    if (chat_palette_mention_ninpou.checked && ninpou.length > 0) chat_palette.push(`@忍法\n${ninpou.join("\n")}`);
    
    const json = {
        kind: "character",
        data: {
            name: `${data.base.name} (${data.base.nameKana})`,
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