const character_sheets_password = document.getElementById("character_sheets_password");

/**
 * @param {string} key
 * @returns {JQuery.jqXHR[]}
 */
function getRequest(key) {
  const requests = [];
  requests.push(
    $.ajax({ dataType: "json", url: `https://character-sheets.appspot.com/${system}/display?key=${key}&ajax=1`, type: "get", callback: "" })
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
  const pass = character_sheets_password ? character_sheets_password.value : void 0;
  requests.push(
    $.ajax({ dataType: "json", url: `https://character-sheets.appspot.com/${system}/openSecret?key=${key}&pass=${pass}`, type: "post", callback: "" })
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
