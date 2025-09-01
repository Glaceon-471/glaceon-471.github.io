async function setContent(system) {
    const response = await fetch(`/CcfoliaExport/${system}`);
    if (!response.ok) {
        throw new Error(`HTTPエラー: ${response.status}`);
    }
    document.body.outerHTML = await response.text();
    document.querySelectorAll("#added_html script").forEach(value => {
        let script = document.createElement("script");
        script.src = value.src;
        value.remove();
        document.body.appendChild(script);
    });
}

async function setSite() {
    const params = new URLSearchParams(window.location.search);
    const script = document.createElement("script");
    switch (params.get("system")) {
        case "mglg":
            await setContent("Base");
            script.src = "MagicaLogia/js/main.js";
            document.body.appendChild(script);
            break;
        case "shinobigami":
            await setContent("Base");
            script.src = "ShinobiGami/js/main.js";
            document.body.appendChild(script);
            break;
        default:
            setContent("Default");
            break;
    }
}

setSite();