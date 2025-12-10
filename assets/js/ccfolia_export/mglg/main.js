options.base.format_type.onchange = function () {
  switch (options.base.format_type.value) {
    case "standard":
      // 蔵書の形式
      options.library.mention_type.checked = false;
      options.library.mention_skill.checked = true;
      options.library.mention_target.checked = false;
      options.library.mention_mana.checked = true;
      options.library.mention_page.checked = false;

      // アンカーの形式
      options.anchor.mention_destiny.checked = true;
      options.anchor.mention_attribute.checked = true;

      // メモの形式
      options.memo.mention_magic_name.checked = true;
      options.memo.mention_sex.checked = true;
      options.memo.mention_age.checked = true;
      options.memo.mention_level.checked = true;
      options.memo.mention_domain.checked = false;
      options.memo.mention_attribute.checked = false;
      options.memo.mention_career.checked = true;
      options.memo.mention_belief.checked = false;
      options.memo.mention_cover.checked = true;
      options.memo.mention_memo.checked = false;
      options.memo.mention_true_form.checked = false;
      options.memo.mention_true_form_effect.checked = false;
      options.memo.mention_soul_skill.checked = false;
      options.memo.mention_library.checked = false;
      options.memo.mention_anchor.checked = false;

      // チャットパレットの形式
      options.chat_palette.mention_magic_name.checked = false;
      options.chat_palette.mention_true_form.checked = true;
      options.chat_palette.mention_skill.checked = true;
      options.chat_palette.mention_library.checked = true;
      break;
    case "brief":
      // 蔵書の形式
      options.library.mention_type.checked = false;
      options.library.mention_skill.checked = true;
      options.library.mention_target.checked = false;
      options.library.mention_mana.checked = false;
      options.library.mention_page.checked = false;

      // アンカーの形式
      options.anchor.mention_destiny.checked = false;
      options.anchor.mention_attribute.checked = false;

      // メモの形式
      options.memo.mention_magic_name.checked = true;
      options.memo.mention_sex.checked = false;
      options.memo.mention_age.checked = false;
      options.memo.mention_level.checked = true;
      options.memo.mention_domain.checked = false;
      options.memo.mention_attribute.checked = false;
      options.memo.mention_career.checked = true;
      options.memo.mention_belief.checked = false;
      options.memo.mention_cover.checked = true;
      options.memo.mention_memo.checked = false;
      options.memo.mention_true_form.checked = false;
      options.memo.mention_true_form_effect.checked = false;
      options.memo.mention_soul_skill.checked = false;
      options.memo.mention_library.checked = false;
      options.memo.mention_anchor.checked = false;

      // チャットパレットの形式
      options.chat_palette.mention_magic_name.checked = false;
      options.chat_palette.mention_true_form.checked = false;
      options.chat_palette.mention_skill.checked = false;
      options.chat_palette.mention_library.checked = true;
      break;
    case "expansion":
      // 蔵書の形式
      options.library.mention_type.checked = true;
      options.library.mention_skill.checked = true;
      options.library.mention_target.checked = true;
      options.library.mention_mana.checked = true;
      options.library.mention_page.checked = false;

      // アンカーの形式
      options.anchor.mention_destiny.checked = true;
      options.anchor.mention_attribute.checked = true;

      // メモの形式
      options.memo.mention_magic_name.checked = true;
      options.memo.mention_sex.checked = true;
      options.memo.mention_age.checked = true;
      options.memo.mention_level.checked = true;
      options.memo.mention_domain.checked = true;
      options.memo.mention_attribute.checked = true;
      options.memo.mention_career.checked = true;
      options.memo.mention_belief.checked = true;
      options.memo.mention_cover.checked = true;
      options.memo.mention_memo.checked = false;
      options.memo.mention_true_form.checked = true;
      options.memo.mention_true_form_effect.checked = true;
      options.memo.mention_soul_skill.checked = true;
      options.memo.mention_library.checked = true;
      options.memo.mention_anchor.checked = true;

      // チャットパレットの形式
      options.chat_palette.mention_magic_name.checked = true;
      options.chat_palette.mention_true_form.checked = true;
      options.chat_palette.mention_skill.checked = true;
      options.chat_palette.mention_library.checked = true;
      break;
  }
};

document.querySelectorAll('#option div:not(#base) input[type="checkbox"]').forEach((element) => {
  element.onchange = function () {
    base_format_type.value = "custom";
  };
});

function setAddCornerBrackets(name) {
  return checkAddCornerBrackets(name, options.base.add_brackets_magic_name.checked);
}

function setAddDoubleParentheses(name) {
  return checkAddDoubleParentheses(name, options.base.add_brackets_designated_specialties.checked);
}

function setAddPReferencePage(name) {
  return checkAddPReferencePage(name, options.base.add_p_page.checked);
}

function setResult(datas) {
  const public = datas[0];
  const status = [];
  const params = [];
  const memo = [];
  const chat_palette = [];
  const chat_palette_variable = [];

  status.push({ label: "魔力", value: 0, max: 0 });
  status.push({ label: "一時的魔力", value: 0, max: 0 });
  if (public.library.length > 0) {
    const max = !checkBlank(public.base.source) ? Number.parseInt(public.base.source) : 0;
    for (const book of public.library) {
      if (checkBlank(book.name)) continue;
      const label = [];
      label.push(book.name.replace("\n", " "));
      if (!checkBlank(book.cost)) label.push(book.cost.replace("\n", " "));
      status.push({ label: label.join(" "), value: 0, max: max });
    }
  }
  if (!checkBlank(public.base.attack)) {
    params.push({ label: "攻撃力", value: public.base.attack });
  }
  if (!checkBlank(public.base.defense)) {
    params.push({ label: "防御力", value: public.base.defense });
  }
  if (!checkBlank(public.base.source)) {
    params.push({ label: "根源力", value: public.base.source });
  }
  params.push({ label: "シーン表", value: "ST" });
  params.push({ label: "運命属性表", value: "FAT" });
  params.push({ label: "事件表", value: "AT" });
  params.push({ label: "ファンブル表", value: "FT" });
  params.push({ label: "変調表", value: "WT" });

  if (options.memo.mention_magic_name.checked && !checkBlank(public.base.magicname)) memo.push(`魔法名: ${public.base.magicname}`);
  if (options.memo.mention_sex.checked && !checkBlank(public.base.sex)) memo.push(`性別: ${public.base.sex}`);
  if (options.memo.mention_age.checked && !checkBlank(public.base.age)) memo.push(`年齢: ${public.base.age}`);
  if (options.memo.mention_level.checked && !checkBlank(public.base.level) && !checkBlank(public.base.levelname)) memo.push(`第${public.base.level}階梯${public.base.levelname}`);
  if (options.memo.mention_domain.checked) {
    let domain = "獣";
    switch (public.base.domain) {
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
    memo.push(`領域: ${domain}`);
  }
  if (options.memo.mention_attribute.checked && !checkBlank(public.base.attack) && !checkBlank(public.base.defense) && !checkBlank(public.base.source))
    memo.push(`攻撃力: ${public.base.attack}, 防御力: ${public.base.defense}, 根源力: ${public.base.source}`);
  if (options.memo.mention_career.checked && !checkBlank(public.base.career)) memo.push(`経歴/機関: ${public.base.career}`);
  if (options.memo.mention_belief.checked && !checkBlank(public.base.belief)) memo.push(`信念: ${public.base.belief}`);
  if (options.memo.mention_cover.checked && !checkBlank(public.base.cover)) memo.push(`表の顔: ${public.base.cover}`);
  if (options.memo.mention_memo.checked && !checkBlank(public.base.memo)) memo.push(`メモ:\n${public.base.memo}`);
  if (options.memo.mention_true_form.checked && !checkBlank(public.trueform.name)) memo.push(`真の姿: ${public.trueform.name}`);
  if (options.memo.mention_true_form_effect.checked && !checkBlank(public.trueform.effect)) memo.push(`真の姿の効果: ${public.trueform.effect}`);
  if (options.memo.mention_soul_skill.checked && !checkBlank(public.soul.skill)) memo.push(`魂の特技: ${public.soul.skill}`);
  if (options.memo.mention_library.checked && public.library.length > 0) {
    const library = [];
    for (const book of public.library) {
      const book_data = [];
      book_data.push(setAddCornerBrackets(book.name).replace("\n", " "));
      if (options.library.mention_type.checked && !checkBlank(book.type)) book_data.push(book.type.replace("\n", " "));
      if (options.library.mention_skill.checked && !checkBlank(book.skill)) book_data.push(setAddDoubleParentheses(book.skill).replace("\n", " "));
      if (options.library.mention_target.checked && !checkBlank(book.target)) book_data.push(book.target.replace("\n", " "));
      if (options.library.mention_mana.checked && !checkBlank(book.cost)) book_data.push(book.cost.replace("\n", " "));
      if (options.library.mention_page.checked && !checkBlank(book.page)) book_data.push(setAddPReferencePage(book.page).replace("\n", " "));
      library.push(book_data.join(" "));
    }
    memo.push(`蔵書:\n${library.join("\n")}`);
  }
  if (options.memo.mention_anchor.checked && public.anchor.length > 0) {
    const anchor = [];
    for (const character of public.anchor) {
      if (checkBlank(character.name)) continue;
      const anchor_data = [];
      anchor_data.push(character.name.replace("\n", " "));
      if (options.anchor.mention_destiny.checked && !checkBlank(character.destiny)) anchor_data.push(`運命点: ${character.destiny.replace("\n", " ")}`);
      if (options.anchor.mention_attribute.checked && !checkBlank(character.attribute)) anchor_data.push(`属性: ${character.attribute.replace("\n", " ")}`);
      anchor.push(anchor_data.join(", "));
    }
    memo.push(`アンカー:\n${anchor.join("\n")}`);
  }

  chat_palette.push("@各種表\n{シーン表を振る}\n{運命属性表を振る}\n{事件表を振る}\n{ファンブル表を振る}\n{変調表を振る}");
  chat_palette_variable.push("シーン表を振る={シーン表}");
  chat_palette_variable.push("運命属性表を振る={運命属性表}");
  chat_palette_variable.push("事件表を振る={事件表}");
  chat_palette_variable.push("ファンブル表を振る={ファンブル表}");
  chat_palette_variable.push("変調表を振る={変調表}");

  const battle_chat_palette = [];
  if (options.chat_palette.mention_magic_name.checked && !checkBlank(public.base.magicname)) {
    battle_chat_palette.push("{魔法名を名乗る}");
    chat_palette_variable.push(`魔法名を名乗る=${public.base.magicname}`);
  }
  if (options.chat_palette.mention_true_form.checked && !checkBlank(public.trueform.name) && !checkBlank(public.trueform.effect)) {
    battle_chat_palette.push("{真の姿を解放する}");
    chat_palette_variable.push(`真の姿を解放する=${public.trueform.name} ${public.trueform.effect}`);
  }
  if (battle_chat_palette.length > 0) chat_palette.push(`@呪圏系\n${battle_chat_palette.join("\n")}`);

  if (options.chat_palette.mention_skill.checked) {
    const learned = [];
    for (const element of public.learned) {
      if (checkBlank(element.id)) continue;
      learned.push(`2d6>=5 (判定 : ${convertSkill(element.id)})`);
    }
    if (learned.length > 0) chat_palette.push(`@修得特技\n${learned.join("\n")}`);
  }

  if (options.chat_palette.mention_library.checked && public.library.length > 0) {
    const library = [];
    for (const book of public.library) {
      const book_data = [];
      book_data.push(setAddCornerBrackets(book.name).replace("\n", " "));
      if (options.library.mention_type.checked && !checkBlank(book.type)) book_data.push(book.type.replace("\n", " "));
      if (options.library.mention_skill.checked && !checkBlank(book.skill)) book_data.push(setAddDoubleParentheses(book.skill).replace("\n", " "));
      if (options.library.mention_target.checked && !checkBlank(book.target)) book_data.push(book.target.replace("\n", " "));
      if (options.library.mention_mana.checked && !checkBlank(book.cost)) book_data.push(book.cost.replace("\n", " "));
      if (options.library.mention_page.checked && !checkBlank(book.page)) book_data.push(setAddPReferencePage(book.page).replace("\n", " "));
      const name = checkAddCornerBrackets(book.name, false).replace("\n", " ");
      library.push(`{${name}}`);
      chat_palette_variable.push(`${name}=${book_data.join(" ")}`);
    }
    chat_palette.push(`@蔵書\n${library.join("\n")}`);
  }

  chat_palette.push(`@チャントパレット変数\n${chat_palette_variable.map((value) => `//${value}`).join("\n")}`);

  const url = character_sheets_url.value;
  let externalUrl = "";
  switch (checkURL(url)) {
    case 0:
      externalUrl = url;
      break;
    case 1:
      externalUrl = `https://character-sheets.appspot.com/mglg/edit.html?key=${url}`;
      break;
  }
  const json = {
    kind: "character",
    data: {
      name: public.base.covername,
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
