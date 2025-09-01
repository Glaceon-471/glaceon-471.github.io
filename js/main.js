const converter = new showdown.Converter();

async function setMeadme() {
    const response = await fetch("/README.md");
    if (!response.ok) {
        throw new Error(`HTTPエラー: ${response.status}`);
    }
    document.body.innerHTML = converter.makeHtml(await response.text());
}

setMeadme();