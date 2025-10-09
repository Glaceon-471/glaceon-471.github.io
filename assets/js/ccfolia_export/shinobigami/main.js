const all_format_type = getOption("base", "format_type");
const all_add_brackets_ninpou_name = getOption("base", "add_brackets_ninpou_name");
const all_add_brackets_designated_specialties = getOption("base", "add_brackets_designated_specialties");
const all_add_p_page = getOption("base", "add_p_page");
const all_mention_url = getOption("base", "mention_url");

const ninpou_mention_name = getOption("ninpou", "mention_name");
const ninpou_mention_type = getOption("ninpou", "mention_type");
const ninpou_mention_target_skill = getOption("ninpou", "mention_target_skill");
const ninpou_mention_range = getOption("ninpou", "mention_range");
const ninpou_mention_cost = getOption("ninpou", "mention_cost");
const ninpou_mention_page = getOption("ninpou", "mention_page");

const background_mention_name = getOption("background", "mention_name");
const background_mention_type = getOption("background", "mention_type");
const background_mention_page = getOption("background", "mention_page");

const personalities_mention_name = getOption("personalities", "mention_name");
const personalities_mention_place = getOption("personalities", "mention_place");
const personalities_mention_secret = getOption("personalities", "mention_secret");
const personalities_mention_special_effect = getOption("personalities", "mention_special_effect");
const personalities_mention_emotion = getOption("personalities", "mention_emotion");

const memo_mention_pl_name = getOption("memo", "mention_pl_name");
const memo_mention_sex = getOption("memo", "mention_sex");
const memo_mention_age = getOption("memo", "mention_age");
const memo_mention_cover = getOption("memo", "mention_cover");
const memo_mention_belief = getOption("memo", "mention_belief");
const memo_mention_race = getOption("memo", "mention_race");
const memo_mention_upperstyle = getOption("memo", "mention_upperstyle");
const memo_mention_substyle = getOption("memo", "mention_substyle");
const memo_mention_stylerule = getOption("memo", "mention_stylerule");
const memo_mention_foe = getOption("memo", "mention_foe");
const memo_mention_level = getOption("memo", "mention_level");
const memo_mention_mission = getOption("memo", "mention_mission");
const memo_mention_memo = getOption("memo", "mention_memo");
const memo_mention_ninpou = getOption("memo", "mention_ninpou");
const memo_mention_background = getOption("memo", "mention_background");
const memo_mention_personalities = getOption("memo", "mention_personalities");

const status_compile_vitality = getOption("status", "compile_vitality");
const status_additional_vitality = getOption("status", "additional_vitality");
const status_three_values = getOption("status", "three_values");
const status_cost = getOption("status", "cost");

const chat_palette_mention_skill = getOption("chat_palette", "mention_skill");
const chat_palette_mention_ninpou = getOption("chat_palette", "mention_ninpou");

all_format_type.onchange = function () {
  switch (all_format_type.value) {
    case "standard":
      // 忍法の形式
      ninpou_mention_name.checked = true;
      ninpou_mention_type.checked = false;
      ninpou_mention_target_skill.checked = true;
      ninpou_mention_range.checked = false;
      ninpou_mention_cost.checked = true;
      ninpou_mention_page.checked = false;
      
      // 背景の形式
      background_mention_name.checked = true;
      background_mention_type.checked = true;
      background_mention_page.checked = false;
      
      // 人物の形式
      personalities_mention_name.checked = true;
      personalities_mention_place.checked = false;
      personalities_mention_secret.checked = true;
      personalities_mention_special_effect.checked = true;
      personalities_mention_emotion.checked = true;
      
      // メモの形式
      memo_mention_pl_name.checked = true;
      memo_mention_sex.checked = true;
      memo_mention_age.checked = true;
      memo_mention_cover.checked = true;
      memo_mention_belief.checked = false;
      memo_mention_race.checked = false;
      memo_mention_upperstyle.checked = true;
      memo_mention_substyle.checked = false;
      memo_mention_stylerule.checked = true;
      memo_mention_foe.checked = true;
      memo_mention_level.checked = true;
      memo_mention_mission.checked = true;
      memo_mention_memo.checked = false;
      memo_mention_ninpou.checked = false;
      memo_mention_background.checked = false;
      memo_mention_personalities.checked = true;
      
      // ステータスの形式
      status_compile_vitality.checked = false;
      status_three_values.checked = true;
      status_cost.checked = true;
      
      // チャットパレットの形式
      chat_palette_mention_skill.checked = true;
      chat_palette_mention_ninpou.checked = true;
      break;
    case "brief":
      // 忍法の形式
      ninpou_mention_name.checked = true;
      ninpou_mention_type.checked = false;
      ninpou_mention_target_skill.checked = true;
      ninpou_mention_range.checked = false;
      ninpou_mention_cost.checked = false;
      ninpou_mention_page.checked = false;
      
      // 背景の形式
      background_mention_name.checked = false;
      background_mention_type.checked = false;
      background_mention_page.checked = false;
      
      // 人物の形式
      memo_mention_pl_name.checked = true;
      personalities_mention_name.checked = true;
      personalities_mention_place.checked = false;
      personalities_mention_secret.checked = false;
      personalities_mention_special_effect.checked = true;
      personalities_mention_emotion.checked = true;
      
      // メモの形式
      memo_mention_sex.checked = false;
      memo_mention_age.checked = false;
      memo_mention_cover.checked = false;
      memo_mention_belief.checked = false;
      memo_mention_race.checked = false;
      memo_mention_upperstyle.checked = true;
      memo_mention_substyle.checked = false;
      memo_mention_stylerule.checked = true;
      memo_mention_foe.checked = true;
      memo_mention_level.checked = false;
      memo_mention_mission.checked = true;
      memo_mention_memo.checked = false;
      memo_mention_ninpou.checked = false;
      memo_mention_background.checked = false;
      memo_mention_personalities.checked = false;
      
      // ステータスの形式
      status_compile_vitality.checked = true;
      status_three_values.checked = false;
      status_cost.checked = false;
      
      // チャットパレットの形式
      chat_palette_mention_skill.checked = false;
      chat_palette_mention_ninpou.checked = true;
      break;
    case "expansion":
      // 忍法の形式
      ninpou_mention_name.checked = true;
      ninpou_mention_type.checked = true;
      ninpou_mention_target_skill.checked = true;
      ninpou_mention_range.checked = true;
      ninpou_mention_cost.checked = true;
      ninpou_mention_page.checked = true;
      
      // 背景の形式
      background_mention_name.checked = true;
      background_mention_type.checked = true;
      background_mention_page.checked = true;
      
      // 人物の形式
      personalities_mention_name.checked = true;
      personalities_mention_place.checked = true;
      personalities_mention_secret.checked = true;
      personalities_mention_special_effect.checked = true;
      personalities_mention_emotion.checked = true;
      
      // メモの形式
      memo_mention_pl_name.checked = true;
      memo_mention_sex.checked = true;
      memo_mention_age.checked = true;
      memo_mention_cover.checked = true;
      memo_mention_belief.checked = true;
      memo_mention_race.checked = true;
      memo_mention_upperstyle.checked = true;
      memo_mention_substyle.checked = true;
      memo_mention_stylerule.checked = true;
      memo_mention_foe.checked = true;
      memo_mention_level.checked = true;
      memo_mention_mission.checked = true;
      memo_mention_memo.checked = false;
      memo_mention_ninpou.checked = true;
      memo_mention_background.checked = true;
      memo_mention_personalities.checked = true;
      
      // ステータスの形式
      status_compile_vitality.checked = false;
      status_three_values.checked = true;
      status_cost.checked = true;
      
      // チャットパレットの形式
      chat_palette_mention_skill.checked = true;
      chat_palette_mention_ninpou.checked = true;
      break;
  }
};

document.querySelectorAll("#option div:not(#base) input[type=\"checkbox\"]:not(#additional_vitality)").forEach(element => {
  element.onchange = function () {
    all_format_type.value = "custom";
  };
});

const blacklist = [status_additional_vitality.id];
document.querySelectorAll("#option div:not(#null) input[type=\"checkbox\"]").forEach(element => {
  if (blacklist.includes(element.id)) return;
  element.onchange = (event) => {
    all_format_type.value = "custom";
  };
});

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
    if (ninpou_mention_name.checked && !checkBlank(element.name)) data.push(checkAddCornerBrackets(element.name, all_add_brackets_ninpou_name.checked).replace("\n", " "));
    if (ninpou_mention_type.checked && !checkBlank(element.type)) data.push(`${element.type}忍法`);
    if (ninpou_mention_target_skill.checked && !checkBlank(element.targetSkill)) data.push(checkAddDoubleParentheses(element.targetSkill, all_add_brackets_designated_specialties.checked));
    if (ninpou_mention_range.checked && !checkBlank(element.range)) data.push(element.range);
    if (ninpou_mention_cost.checked && !checkBlank(element.cost)) data.push(element.cost);
    if (ninpou_mention_page.checked && !checkBlank(element.page)) data.push(checkAddPReferencePage(element.page, all_add_p_page.checked));
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
  if (memo_mention_sex.checked && !checkBlank(data.base.sex)) memo.push(`性別 : ${data.base.sex}`);
  if (memo_mention_age.checked && !checkBlank(data.base.age)) memo.push(`年齢 : ${data.base.age}`);
  if (memo_mention_cover.checked && !checkBlank(data.base.cover)) memo.push(`表の顔 : ${data.base.cover}`);
  if (memo_mention_belief.checked && !checkBlank(data.base.belief)) memo.push(`信念 : ${data.base.belief}`);
  if (memo_mention_race.checked && !checkBlank(data.base.race)) {
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
  if (chat_palette_mention_skill.checked) {
    const learned = [];
    for (const element of data.learned) {
      if (checkBlank(element.id)) continue;
      if (status_three_values.checked) learned.push(`SG@{スペシャル値}#{ファンブル値}>={目標値} （判定 : ${convertSkill(element.id)}）`);
      else learned.push(`SG>=5 （判定 : ${convertSkill(element.id)}）`);
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
      externalUrl: all_mention_url.checked && url_type == 1 ? url : "",
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