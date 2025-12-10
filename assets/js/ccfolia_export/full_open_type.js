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
  return requests;
}
