const all_format_type = getOption("base", "format_type");
const all_add_brackets_magic_name = getOption("base", "add_brackets_magic_name");
const all_add_brackets_designated_specialties = getOption("base", "add_brackets_designated_specialties");
const all_add_p_page = getOption("base", "add_p_page");
const all_mention_url = getOption("base", "mention_url");

const library_mention_name = getOption("library", "mention_name");
const library_mention_type = getOption("library", "mention_type");
const library_mention_skill = getOption("library", "mention_skill");
const library_mention_target = getOption("library", "mention_target");
const library_mention_mana = getOption("library", "mention_mana");
const library_mention_page = getOption("library", "mention_page");

const anchor_mention_name = getOption("anchor", "mention_name");
const anchor_mention_destiny = getOption("anchor", "mention_destiny");
const anchor_mention_attribute = getOption("anchor", "mention_attribute");

const memo_mention_magic_name = getOption("memo", "mention_magic_name");
const memo_mention_sex = getOption("memo", "mention_sex");
const memo_mention_age = getOption("memo", "mention_age");
const memo_mention_level = getOption("memo", "mention_level");
const memo_mention_domain = getOption("memo", "mention_domain");
const memo_mention_attribute = getOption("memo", "mention_attribute");
const memo_mention_career = getOption("memo", "mention_career");
const memo_mention_belief = getOption("memo", "mention_belief");
const memo_mention_cover = getOption("memo", "mention_cover");
const memo_mention_memo = getOption("memo", "mention_memo");
const memo_mention_true_form = getOption("memo", "mention_true_form");
const memo_mention_true_form_effect = getOption("memo", "mention_true_form_effect");
const memo_mention_soul_skill = getOption("memo", "mention_soul_skill");
const memo_mention_library = getOption("memo", "mention_library");
const memo_mention_anchor = getOption("memo", "mention_anchor");

const chat_palette_mention_magic_name = getOption("chat_palette", "mention_magic_name");
const chat_palette_mention_true_form = getOption("chat_palette", "mention_true_form");
const chat_palette_mention_skill = getOption("chat_palette", "mention_skill");
const chat_palette_mention_library = getOption("chat_palette", "mention_library");

all_format_type.onchange = function () {
  switch (all_format_type.value) {
    case "standard":
      // 蔵書の形式
      library_mention_name.checked = true;
      library_mention_type.checked = false;
      library_mention_skill.checked = true;
      library_mention_target.checked = false;
      library_mention_mana.checked = true;
      library_mention_page.checked = false;
      
      // アンカーの形式
      anchor_mention_name.checked = true;
      anchor_mention_destiny.checked = true;
      anchor_mention_attribute.checked = true;
      
      // メモの形式
      memo_mention_magic_name.checked = true;
      memo_mention_sex.checked = true;
      memo_mention_age.checked = true;
      memo_mention_level.checked = true;
      memo_mention_domain.checked = false;
      memo_mention_attribute.checked = false;
      memo_mention_career.checked = true;
      memo_mention_belief.checked = false;
      memo_mention_cover.checked = true;
      memo_mention_memo.checked = false;
      memo_mention_true_form.checked = false;
      memo_mention_true_form_effect.checked = false;
      memo_mention_soul_skill.checked = false;
      memo_mention_library.checked = false;
      memo_mention_anchor.checked = false;
      
      // チャットパレットの形式
      chat_palette_mention_magic_name.checked = false;
      chat_palette_mention_true_form.checked = true;
      chat_palette_mention_skill.checked = true;
      chat_palette_mention_library.checked = true;
      break;
    case "brief":
      // 蔵書の形式
      library_mention_name.checked = true;
      library_mention_type.checked = false;
      library_mention_skill.checked = true;
      library_mention_target.checked = false;
      library_mention_mana.checked = false;
      library_mention_page.checked = false;
      
      // メモの形式
      memo_mention_magic_name.checked = true;
      memo_mention_sex.checked = false;
      memo_mention_age.checked = false;
      memo_mention_level.checked = true;
      memo_mention_domain.checked = false;
      memo_mention_attribute.checked = false;
      memo_mention_career.checked = true;
      memo_mention_belief.checked = false;
      memo_mention_cover.checked = true;
      memo_mention_memo.checked = false;
      memo_mention_true_form.checked = false;
      memo_mention_true_form_effect.checked = false;
      memo_mention_soul_skill.checked = false;
      memo_mention_library.checked = false;
      memo_mention_anchor.checked = false;
      
      // チャットパレットの形式
      chat_palette_mention_magic_name.checked = false;
      chat_palette_mention_true_form.checked = false;
      chat_palette_mention_skill.checked = false;
      chat_palette_mention_library.checked = true;
      break;
    case "expansion":
      // 蔵書の形式
      library_mention_name.checked = true;
      library_mention_type.checked = true;
      library_mention_skill.checked = true;
      library_mention_target.checked = true;
      library_mention_mana.checked = true;
      library_mention_page.checked = false;
      
      // メモの形式
      memo_mention_magic_name.checked = true;
      memo_mention_sex.checked = true;
      memo_mention_age.checked = true;
      memo_mention_level.checked = true;
      memo_mention_domain.checked = true;
      memo_mention_attribute.checked = true;
      memo_mention_career.checked = true;
      memo_mention_belief.checked = true;
      memo_mention_cover.checked = true;
      memo_mention_memo.checked = false;
      memo_mention_true_form.checked = true;
      memo_mention_true_form_effect.checked = true;
      memo_mention_soul_skill.checked = true;
      memo_mention_library.checked = true;
      memo_mention_anchor.checked = true;
      
      // チャットパレットの形式
      chat_palette_mention_magic_name.checked = true;
      chat_palette_mention_true_form.checked = true;
      chat_palette_mention_skill.checked = true;
      chat_palette_mention_library.checked = true;
      break;
  }
};

document.querySelectorAll("#option div:not(#base) input[type=\"checkbox\"]").forEach(element => {
  element.onchange = function () {
    all_format_type.value = "custom";
  };
});

function resultGenerate(data) {
  const url = character_sheets_url.value;
  const url_type = checkURL(url);
  const library = [];
  const anchor = [];
  const status = [];
  const params = [];
  const memo = [];
  const chat_palette = [];
  
  /**
   * @param {String} base 
   * @param  {...String} args 
   */
  function add_memo(base, ...args) {
    if (args.findIndex(x => checkBlank(x)) != -1) return;
    for (const [index, element] of args.entries()) {
      base = base.replace(new RegExp(`\\{${index}\\}`, "g"), element);
    }
    memo.push(base);
  }
  
  for (const book of data.library) {
    const book_data = [];
    const status_label = [];
    if (!checkBlank(book.name)) {
      if (library_mention_name.checked) book_data.push(checkAddCornerBrackets(book.name, all_add_brackets_magic_name.checked).replace("\n", " "));
      status_label.push(checkAddCornerBrackets(book.name, all_add_brackets_magic_name.checked).replace("\n", " "));
    }
    if (library_mention_type.checked && !checkBlank(book.type)) book_data.push(book.type.replace("\n", " "));
    if (library_mention_skill.checked && !checkBlank(book.skill)) book_data.push(checkAddDoubleParentheses(book.skill, all_add_brackets_designated_specialties.checked).replace("\n", " "));
    if (library_mention_target.checked && !checkBlank(book.target)) book_data.push(book.target.replace("\n", " "));
    if (!checkBlank(book.cost)) {
      if (library_mention_mana.checked) book_data.push(book.cost.replace("\n", " "));
      status_label.push(book.cost.replace("\n", " "));
    }
    if (library_mention_page.checked && !checkBlank(book.page)) book_data.push(checkAddPReferencePage(book.page, all_add_p_page.checked).replace("\n", " "));
    library.push(book_data.join(" "));
    
    status.push({
      label: status_label.join(" "),
      value: 0,
      max: !checkBlank(data.base.source) ? Number.parseInt(data.base.source) : 0
    });
  }
  
  for (const character of data.anchor) {
    const anchor_data = [];
    if (anchor_mention_name.checked && !checkBlank(character.name)) anchor.push(character.name.replace("\n", " "));
    if (anchor_mention_destiny.checked && !checkBlank(character.destiny)) anchor.push(`運命点 : ${character.destiny.replace("\n", " ")}`);
    if (anchor_mention_attribute.checked && !checkBlank(character.attribute)) anchor.push(`属性 : ${character.attribute.replace("\n", " ")}`);
    anchor.push(anchor_data.join(", "));
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
  if (memo_mention_sex.checked && !checkBlank(data.base.sex)) add_memo("性別 : {0}", data.base.sex);
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
  if (memo_mention_true_form_effect.checked && !checkBlank(data.trueform.effect)) add_memo("真の姿の効果 : {0}", data.trueform.effect);
  if (memo_mention_soul_skill.checked && !checkBlank(data.soul.skill)) add_memo("魂の特技 : {0}", data.soul.skill);
  if (memo_mention_library.checked && library.length > 0) add_memo("蔵書 :\n{0}", library.join("\n"));
  if (memo_mention_anchor.checked && anchor.length > 0) add_memo("アンカー :\n{0}", anchor.join("\n"));
  
  if (chat_palette_mention_magic_name.checked && !checkBlank(data.base.magicname)) chat_palette.push(`@魔法名\n${data.base.magicname}`);
  if (chat_palette_mention_true_form.checked && !checkBlank(data.trueform.name) && !checkBlank(data.trueform.effect))
    chat_palette.push(`@真の姿\n${data.trueform.name} ${data.trueform.effect}`);
  if (chat_palette_mention_skill.checked) {
    const learned = [];
    for (const element of data.learned) {
      if (checkBlank(element.id)) continue;
      learned.push(`2d6>=5 （判定 : ${convertSkill(element.id)}）`);
    }
    if (learned.length > 0) chat_palette.push(`@修得特技\n${learned.join("\n")}`);
  }
  if (chat_palette_mention_library.checked && library.length > 0) chat_palette.push(`@蔵書\n${library.join("\n")}`);
  
  const json = {
    kind: "character",
    data: {
      name: data.base.covername,
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