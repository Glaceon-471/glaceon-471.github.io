options.base.format_type.onchange = function () {
  switch (options.base.format_type.value) {
    case "standard":
      // 忍法の形式
      options.ninpou.mention_type.checked = false;
      options.ninpou.mention_target_skill.checked = true;
      options.ninpou.mention_range.checked = true;
      options.ninpou.mention_cost.checked = true;
      options.ninpou.mention_page.checked = true;

      // 背景の形式
      options.background.mention_type.checked = false;
      options.background.mention_page.checked = true;

      // 人物の形式
      options.personalities.mention_place.checked = true;
      options.personalities.mention_secret.checked = true;
      options.personalities.mention_special_effect.checked = true;
      options.personalities.mention_emotion.checked = true;

      // 奥義の形式
      options.special_effect.mention_skill.checked = true;
      options.special_effect.mention_effect.checked = true;
      options.special_effect.mention_page.checked = true;

      // 忍具の形式
      options.item.mention_effect.checked = true;

      // メモの形式
      options.memo.mention_player.checked = false;
      options.memo.mention_sex.checked = true;
      options.memo.mention_age.checked = true;
      options.memo.mention_cover.checked = true;
      options.memo.mention_belief.checked = false;
      options.memo.mention_race.checked = false;
      options.memo.mention_upperstyle.checked = true;
      options.memo.mention_substyle.checked = false;
      options.memo.mention_stylerule.checked = true;
      options.memo.mention_foe.checked = true;
      options.memo.mention_level.checked = true;
      options.memo.mention_memo.checked = false;
      options.memo.mention_ninpou.checked = false;
      options.memo.mention_background.checked = false;
      options.memo.mention_personalities.checked = true;
      options.memo.mention_modulation_field.checked = true;
      options.memo.mention_special_effect_field.checked = true;

      // ステータスの形式
      options.status.compile_vitality.checked = false;
      options.status.four_values.checked = true;
      options.status.cost.checked = true;

      // チャットパレットの形式
      options.chat_palette.mention_skill.checked = true;
      options.chat_palette.mention_ninpou.checked = true;
      options.chat_palette.mention_hidden_skill.checked = true;
      options.chat_palette.mention_hidden_ninpou.checked = true;
      options.chat_palette.mention_special_effect.checked = true;
      options.chat_palette.mention_item.checked = false;
      break;
    case "brief":
      // 忍法の形式
      options.ninpou.mention_type.checked = false;
      options.ninpou.mention_target_skill.checked = true;
      options.ninpou.mention_range.checked = true;
      options.ninpou.mention_cost.checked = true;
      options.ninpou.mention_page.checked = false;

      // 背景の形式
      options.background.mention_type.checked = false;
      options.background.mention_page.checked = false;

      // 人物の形式
      options.personalities.mention_place.checked = true;
      options.personalities.mention_secret.checked = true;
      options.personalities.mention_special_effect.checked = true;
      options.personalities.mention_emotion.checked = true;

      // 奥義の形式
      options.special_effect.mention_skill.checked = true;
      options.special_effect.mention_effect.checked = true;
      options.special_effect.mention_page.checked = false;

      // 忍具の形式
      options.item.mention_effect.checked = false;

      // メモの形式
      options.memo.mention_player.checked = false;
      options.memo.mention_sex.checked = false;
      options.memo.mention_age.checked = false;
      options.memo.mention_cover.checked = true;
      options.memo.mention_belief.checked = false;
      options.memo.mention_race.checked = false;
      options.memo.mention_upperstyle.checked = true;
      options.memo.mention_substyle.checked = false;
      options.memo.mention_stylerule.checked = false;
      options.memo.mention_foe.checked = false;
      options.memo.mention_level.checked = true;
      options.memo.mention_memo.checked = false;
      options.memo.mention_ninpou.checked = false;
      options.memo.mention_background.checked = false;
      options.memo.mention_personalities.checked = false;
      options.memo.mention_modulation_field.checked = true;
      options.memo.mention_special_effect_field.checked = false;

      // ステータスの形式
      options.status.compile_vitality.checked = false;
      options.status.four_values.checked = true;
      options.status.cost.checked = true;

      // チャットパレットの形式
      options.chat_palette.mention_skill.checked = true;
      options.chat_palette.mention_ninpou.checked = true;
      options.chat_palette.mention_hidden_skill.checked = true;
      options.chat_palette.mention_hidden_ninpou.checked = true;
      options.chat_palette.mention_special_effect.checked = true;
      options.chat_palette.mention_item.checked = false;
      break;
    case "expansion":
      // 忍法の形式
      options.ninpou.mention_type.checked = true;
      options.ninpou.mention_target_skill.checked = true;
      options.ninpou.mention_range.checked = true;
      options.ninpou.mention_cost.checked = true;
      options.ninpou.mention_page.checked = true;

      // 背景の形式
      options.background.mention_type.checked = true;
      options.background.mention_page.checked = true;

      // 人物の形式
      options.personalities.mention_place.checked = true;
      options.personalities.mention_secret.checked = true;
      options.personalities.mention_special_effect.checked = true;
      options.personalities.mention_emotion.checked = true;

      // 奥義の形式
      options.special_effect.mention_skill.checked = true;
      options.special_effect.mention_effect.checked = true;
      options.special_effect.mention_page.checked = true;

      // 忍具の形式
      options.item.mention_effect.checked = true;

      // メモの形式
      options.memo.mention_player.checked = true;
      options.memo.mention_sex.checked = true;
      options.memo.mention_age.checked = true;
      options.memo.mention_cover.checked = true;
      options.memo.mention_belief.checked = true;
      options.memo.mention_race.checked = true;
      options.memo.mention_upperstyle.checked = true;
      options.memo.mention_substyle.checked = true;
      options.memo.mention_stylerule.checked = true;
      options.memo.mention_foe.checked = true;
      options.memo.mention_level.checked = true;
      options.memo.mention_memo.checked = false;
      options.memo.mention_ninpou.checked = true;
      options.memo.mention_background.checked = true;
      options.memo.mention_personalities.checked = true;
      options.memo.mention_modulation_field.checked = true;
      options.memo.mention_special_effect_field.checked = true;

      // ステータスの形式
      options.status.compile_vitality.checked = false;
      options.status.four_values.checked = true;
      options.status.cost.checked = true;

      // チャットパレットの形式
      options.chat_palette.mention_skill.checked = true;
      options.chat_palette.mention_ninpou.checked = true;
      options.chat_palette.mention_hidden_skill.checked = true;
      options.chat_palette.mention_hidden_ninpou.checked = true;
      options.chat_palette.mention_special_effect.checked = true;
      options.chat_palette.mention_item.checked = true;
      break;
    case "recommended":
      // 忍法の形式
      options.ninpou.mention_type.checked = true;
      options.ninpou.mention_target_skill.checked = true;
      options.ninpou.mention_range.checked = true;
      options.ninpou.mention_cost.checked = true;
      options.ninpou.mention_page.checked = true;

      // 背景の形式
      options.background.mention_type.checked = false;
      options.background.mention_page.checked = true;

      // 人物の形式
      options.personalities.mention_place.checked = true;
      options.personalities.mention_secret.checked = true;
      options.personalities.mention_special_effect.checked = true;
      options.personalities.mention_emotion.checked = true;

      // 奥義の形式
      options.special_effect.mention_skill.checked = true;
      options.special_effect.mention_effect.checked = true;
      options.special_effect.mention_page.checked = true;

      // 忍具の形式
      options.item.mention_effect.checked = true;

      // メモの形式
      options.memo.mention_player.checked = false;
      options.memo.mention_sex.checked = true;
      options.memo.mention_age.checked = true;
      options.memo.mention_cover.checked = true;
      options.memo.mention_belief.checked = true;
      options.memo.mention_race.checked = false;
      options.memo.mention_upperstyle.checked = true;
      options.memo.mention_substyle.checked = true;
      options.memo.mention_stylerule.checked = true;
      options.memo.mention_foe.checked = true;
      options.memo.mention_level.checked = true;
      options.memo.mention_memo.checked = false;
      options.memo.mention_ninpou.checked = true;
      options.memo.mention_background.checked = true;
      options.memo.mention_personalities.checked = true;
      options.memo.mention_modulation_field.checked = true;
      options.memo.mention_special_effect_field.checked = true;

      // ステータスの形式
      options.status.compile_vitality.checked = false;
      options.status.four_values.checked = true;
      options.status.cost.checked = true;

      // チャットパレットの形式
      options.chat_palette.mention_skill.checked = true;
      options.chat_palette.mention_ninpou.checked = true;
      options.chat_palette.mention_hidden_skill.checked = true;
      options.chat_palette.mention_hidden_ninpou.checked = true;
      options.chat_palette.mention_special_effect.checked = true;
      options.chat_palette.mention_item.checked = true;
      break;
  }
};

document.querySelectorAll('#option div:not(#base) input[type="checkbox"]:not(#additional_vitality)').forEach((element) => {
  element.onchange = function () {
    options.base.format_type.value = "custom";
  };
});

function setAddCornerBrackets(name) {
  return checkAddCornerBrackets(name, options.base.add_brackets_ninpou_name.checked);
}

function setAddDoubleParentheses(name) {
  return checkAddDoubleParentheses(name, options.base.add_brackets_designated_specialties.checked);
}

function setAddPReferencePage(name) {
  return checkAddPReferencePage(name, options.base.add_p_page.checked);
}

function setResult(datas) {
  const public = datas[0];
  const secret = datas[1];
  const status = [];
  const params = [];
  const memo = [];
  const chat_palette = [];
  const chat_palette_variable = [];
  const use_secret = options.base.use_password.checked && secret.error == null;

  if (options.status.compile_vitality.checked) {
    status.push({ label: "生命力", value: 6, max: 6 });
  } else {
    status.push({ label: "器術", value: 1, max: 1 });
    status.push({ label: "体術", value: 1, max: 1 });
    status.push({ label: "忍術", value: 1, max: 1 });
    status.push({ label: "謀術", value: 1, max: 1 });
    status.push({ label: "戦術", value: 1, max: 1 });
    status.push({ label: "妖術", value: 1, max: 1 });
  }
  if (options.status.additional_vitality.checked) {
    status.push({ label: "追加生命力", value: 0 });
  }
  if (options.status.four_values.checked) {
    status.push({ label: "目標値", value: 5 });
    status.push({ label: "スペシャル値", value: 12 });
    status.push({ label: "ファンブル値", value: 2 });
    status.push({ label: "補正値", value: 0 });
  }
  if (options.status.cost.checked) {
    status.push({ label: "使用可能コスト", value: 0 });
  }

  params.push({ label: "シーン表", value: "ST" });
  params.push({ label: "感情表", value: "ET" });
  params.push({ label: "ファンブル表", value: "FT" });
  params.push({ label: "変調表", value: "WT" });

  if (options.memo.mention_player && !checkBlank(public.base.player)) memo.push(`PL: ${public.base.player}`);
  if (options.memo.mention_sex.checked && !checkBlank(public.base.sex)) memo.push(`性別 : ${public.base.sex}`);
  if (options.memo.mention_age.checked && !checkBlank(public.base.age)) memo.push(`年齢 : ${public.base.age}`);
  if (options.memo.mention_cover.checked && !checkBlank(public.base.cover)) memo.push(`表の顔 : ${public.base.cover}`);
  if (options.memo.mention_belief.checked && !checkBlank(public.base.belief)) memo.push(`信念 : ${public.base.belief}`);
  if (options.memo.mention_race.checked && !checkBlank(public.base.race)) {
    let race = "忍者";
    switch (public.base.race) {
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
  if (options.memo.mention_upperstyle.checked && !checkBlank(public.base.upperstyle)) {
    var upperstyle = "ハグレモノ";
    switch (public.base.upperstyle) {
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
  if (options.memo.mention_substyle.checked && !checkBlank(public.base.substyle)) memo.push(`下位流派 : ${public.base.substyle}`);
  if (options.memo.mention_stylerule.checked && !checkBlank(public.base.stylerule)) memo.push(`流儀 : ${public.base.stylerule}`);
  if (options.memo.mention_foe.checked && !checkBlank(public.base.foe)) memo.push(`仇敵 : ${public.base.foe}`);
  if (options.memo.mention_level.checked && !checkBlank(public.base.level)) memo.push(`階級 : ${public.base.level}`);
  if (options.memo.mention_memo.checked && !checkBlank(public.base.memo)) memo.push(`メモ :\n${public.base.memo}`);
  if (options.memo.mention_ninpou.checked && public.ninpou.length > 0) {
    const ninpou = [];
    for (const element of public.ninpou) {
      const data = [];
      data.push(setAddCornerBrackets(element.name.replace("\n", " ")));
      if (options.ninpou.mention_type.checked && !checkBlank(element.type)) data.push(`${element.type}忍法`);
      if (options.ninpou.mention_target_skill.checked && !checkBlank(element.targetSkill)) data.push(setAddDoubleParentheses(element.targetSkill));
      if (options.ninpou.mention_range.checked && !checkBlank(element.range)) data.push(element.range);
      if (options.ninpou.mention_cost.checked && !checkBlank(element.cost)) data.push(element.cost);
      if (options.ninpou.mention_page.checked && !checkBlank(element.page)) data.push(setAddPReferencePage(element.page));
      ninpou.push(data.join(" "));
    }
    if (ninpou.length > 0) memo.push(`忍法 :\n${ninpou.join("\n")}`);
  }
  if (options.memo.mention_background.checked && public.background.length > 0) {
    const background = [];
    for (const element of public.background) {
      if (checkBlank(element.name)) continue;
      const data = [];
      data.push(setAddCornerBrackets(element.name.replace("\n", " ")));
      if (options.background.mention_type.checked && !checkBlank(element.type)) data.push(element.type);
      if (options.background.mention_page.checked && !checkBlank(element.page)) data.push(element.page);
      background.push(data.join(" "));
    }
    if (background.length > 0) memo.push(`背景 :\n${background.join("\n")}`);
  }
  if (options.memo.mention_personalities.checked) {
    const personalities = [];
    for (const element of public.personalities) {
      if (checkBlank(element.name)) continue;
      const data = [];
      if (options.personalities.mention_place.checked) data.push(`居所: ${element.place == "1" ? "○" : "×"}`);
      if (options.personalities.mention_secret.checked) data.push(`秘密: ${element.secret == "1" ? "○" : "×"}`);
      if (options.personalities.mention_special_effect.checked) data.push(`奥義: ${element.specialEffect == "1" ? "○" : "×"}`);
      if (options.personalities.mention_emotion.checked) {
        let emotion = "共感";
        switch (element.emotion) {
          case "1":
            if (element.direction == "1") emotion = "共感";
            else emotion = "不信";
            break;
          case "2":
            if (element.direction == "1") emotion = "友情";
            else emotion = "怒り";
            break;
          case "3":
            if (element.direction == "1") emotion = "愛情";
            else emotion = "妬み";
            break;
          case "4":
            if (element.direction == "1") emotion = "忠誠";
            else emotion = "軽蔑";
            break;
          case "5":
            if (element.direction == "1") emotion = "憧憬";
            else emotion = "劣等感";
            break;
          case "6":
            if (element.direction == "1") emotion = "狂信";
            else emotion = "殺意";
            break;
        }
        data.push(`感情: ${emotion}`);
      }
      personalities.push(`${element.name}${data.length > 0 ? ` (${data.join(", ")})` : ""}`);
    }
    if (personalities.length <= 0) {
      const data = [];
      if (options.personalities.mention_place.checked) data.push(`居所: ○/×`);
      if (options.personalities.mention_secret.checked) data.push(`秘密: ○/×`);
      if (options.personalities.mention_special_effect.checked) data.push(`奥義: ○/×`);
      if (options.personalities.mention_emotion.checked) data.push(`感情: 感情`);
      personalities.push("");
    }
    memo.push(`\n人物 :\n${personalities.join("\n")}\n`);
  }
  if (options.memo.mention_modulation_field.checked) memo.push("\n変調:\n");
  if (options.memo.mention_special_effect_field.checked) memo.push("\n奥義:\n");

  chat_palette.push("@各種表\n{シーン表を振る}\n{感情表を振る}\n{ファンブル表を振る}\n{変調表を振る}");
  chat_palette_variable.push(`シーン表を振る={シーン表}`);
  chat_palette_variable.push(`感情表を振る={感情表}`);
  chat_palette_variable.push(`ファンブル表を振る={ファンブル表}`);
  chat_palette_variable.push(`変調表を振る={変調表}`);

  const learned = [];
  learned.push("{判定}");
  chat_palette_variable.push(`判定=SG${options.status.four_values.checked ? "@{スペシャル値}#{ファンブル値}+{補正値}>={目標値}" : ">=5"}`);
  if (options.chat_palette.mention_skill.checked) {
    const data = [];
    for (const element of public.learned) {
      if (checkBlank(element.id)) continue;
      const skill = convertSkill(element.id);
      data.push(`{${skill}判定}`);
      chat_palette_variable.push(`${skill}判定=SG${options.status.four_values.checked ? "@{スペシャル値}#{ファンブル値}+{補正値}>={目標値}" : ">=5"} (判定 : ${skill})`);
    }
    if (data.length > 0) {
      data.unshift("@公開");
      learned.push(data);
    }
  }
  if (use_secret && options.chat_palette.mention_hidden_skill.checked) {
    const data = [];
    for (const element of secret.hiddenSkills) {
      if (checkBlank(element.id)) continue;
      const skill = convertSkill(element.id);
      data.push(`{${skill}判定}`);
      chat_palette_variable.push(`${skill}判定=SG${options.status.four_values.checked ? "@{スペシャル値}#{ファンブル値}+{補正値}>={目標値}" : ">=5"} (判定 : ${skill})`);
    }
    if (data.length > 0) {
      data.unshift("@非公開");
      learned.push(data);
    }
  }
  if (learned.length > 0) chat_palette.push(`@特技\n${learned.map((value) => (Array.isArray(value) ? value.join("\n") : value)).join("\n")}`);

  const ninpou = [];
  if (options.chat_palette.mention_ninpou.checked) {
    const data = [];
    for (const element of public.ninpou) {
      const ninpou = [];
      ninpou.push(setAddCornerBrackets(element.name.replace("\n", " ")));
      if (options.ninpou.mention_type.checked && !checkBlank(element.type)) ninpou.push(`${element.type}忍法`);
      if (options.ninpou.mention_target_skill.checked && !checkBlank(element.targetSkill)) ninpou.push(setAddDoubleParentheses(element.targetSkill));
      if (options.ninpou.mention_range.checked && !checkBlank(element.range)) ninpou.push(element.range);
      if (options.ninpou.mention_cost.checked && !checkBlank(element.cost)) ninpou.push(element.cost);
      if (options.ninpou.mention_page.checked && !checkBlank(element.page)) ninpou.push(setAddPReferencePage(element.page));
      const name = checkAddCornerBrackets(element.name, false).replace("\n", " ");
      data.push(`{${name}}`);
      chat_palette_variable.push(`${name}=${ninpou.join(" ")}`);
    }
    if (data.length > 0) {
      data.unshift("@公開");
      ninpou.push(data);
    }
  }
  if (use_secret && options.chat_palette.mention_hidden_ninpou.checked && secret.ninpou != null) {
    const data = [];
    for (const element of secret.ninpou) {
      const ninpou = [];
      ninpou.push(setAddCornerBrackets(element.name.replace("\n", " ")));
      if (options.ninpou.mention_type.checked && !checkBlank(element.type)) ninpou.push(`${element.type}忍法`);
      if (options.ninpou.mention_target_skill.checked && !checkBlank(element.targetSkill)) ninpou.push(setAddDoubleParentheses(element.targetSkill));
      if (options.ninpou.mention_range.checked && !checkBlank(element.range)) ninpou.push(element.range);
      if (options.ninpou.mention_cost.checked && !checkBlank(element.cost)) ninpou.push(element.cost);
      if (options.ninpou.mention_page.checked && !checkBlank(element.page)) ninpou.push(setAddPReferencePage(element.page));
      const name = checkAddCornerBrackets(element.name, false).replace("\n", " ");
      data.push(`{${name}}`);
      chat_palette_variable.push(`${name}=${ninpou.join(" ")}`);
    }
    if (data.length > 0) {
      data.unshift("@非公開");
      ninpou.push(data);
    }
  }
  if (ninpou.length > 0) {
    console.log(ninpou);
    chat_palette.push(`@忍法\n${ninpou.map((value) => value.join("\n")).join("\n")}`);
  }

  if (use_secret) {
    if (options.chat_palette.mention_special_effect.checked) {
      const data = [];
      for (const element of secret.specialEffect) {
        const text = [];
        text.push(element.name.replace("\n", " "));
        if (options.special_effect.mention_skill.checked && !checkBlank(element.skill)) text.push(setAddDoubleParentheses(element.skill));
        if (options.special_effect.mention_effect.checked && !checkBlank(element.effect)) text.push(element.effect);
        if (options.special_effect.mention_page.checked && !checkBlank(element.page)) text.push(element.page);
        data.push(`{奥義${addCornerBrackets(element.name.replace("\n", " "))}}`);
        chat_palette_variable.push(`奥義${addCornerBrackets(element.name.replace("\n", " "))}=${text.join(" ")}`);
      }
      if (data.length > 0) chat_palette.push(`@奥義\n${data.join("\n")}`);
    }
    if (options.chat_palette.mention_item.checked) {
      const data = [];
      for (const element of secret.item) {
        const text = [];
        text.push(element.name.replace("\n", " "));
        if (options.item.mention_effect.checked) text.push(element.effect);
        data.push(`{アイテム${addCornerBrackets(element.name.replace("\n", " "))}}`);
        chat_palette_variable.push(`アイテム${addCornerBrackets(element.name.replace("\n", " "))}=${text.join(" ")}`);
      }
      if (data.length > 0) chat_palette.push(`@アイテム\n${data.join("\n")}`);
    }
  }

  chat_palette.push(`@チャントパレット変数\n${chat_palette_variable.map((value) => `//${value}`).join("\n")}`);

  const url = character_sheets_url.value;
  let externalUrl = "";
  switch (checkURL(url)) {
    case 0:
      externalUrl = url;
      break;
    case 1:
      externalUrl = `https://character-sheets.appspot.com/shinobigami/edit.html?key=${url}`;
      break;
  }
  const json = {
    kind: "character",
    data: {
      name: `${public.base.name} (${public.base.nameKana})`,
      memo: memo.join("\n"),
      initiative: -1,
      externalUrl: externalUrl,
      status: status,
      params: params,
      secret: true,
      commands: chat_palette.join("\n\n"),
    },
  };
  ccfolia_result.value = JSON.stringify(json);
  memo_result.value = json.data.memo;
  chat_palette_result.value = json.data.commands;
}
