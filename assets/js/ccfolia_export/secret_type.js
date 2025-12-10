const character_sheets_password = document.getElementById("character_sheets_password");

/**
 * @param {string} key
 * @returns {JQuery.jqXHR[]}
 */
function getRequest(key) {
  const requests = [];
  requests.push(
    $.ajax({ dataType: "json", url: `https://character-sheets.appspot.com/${system}/display`, data: { key: key, ajax: 1 }, type: "get" })
      .done((data, status, xhr, never) => {
        if (data.error) {
          alert(data.error);
          return null;
        }
        return data;
      })
      .fail((xhr, status, thrown) => {
        console.error(`Error fetching "https://character-sheets.appspot.com/${system}/display":`, status, thrown);
        return null;
      }),
  );
  requests.push(
    $.ajax({
      dataType: "json",
      url: `https://character-sheets.appspot.com/${system}/openSecret`,
      data: { key: key, pass: character_sheets_password ? character_sheets_password.value : void 0 },
      type: "post",
    })
      .done((data, status, xhr, never) => {
        if (data.error) {
          alert(data.error);
          return null;
        }
        return data;
      })
      .fail((xhr, status, thrown) => {
        console.error(`Error fetching "https://character-sheets.appspot.com/${system}/openSecret":`, status, thrown);
        return null;
      }),
  );
  return requests;
}

character_sheets_password.onchange = function () {
  assignData(false);
};
