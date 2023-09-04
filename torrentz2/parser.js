function torrentzParser(html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, "text/html");
    const resultsDiv = doc.querySelector(".results");
    const extractedData = [];
    const dlElements = resultsDiv.querySelectorAll("dl");
    dlElements.forEach((dlElement) => {
        const title = dlElement.querySelector("dt a").textContent.trim();
        const infoHash = dlElement
            .querySelector("dd a")
            .href.match(/xt=urn:btih:(.*?)(?:&|$)/)[1];
        const size = dlElement
            .querySelector("dd span:nth-child(3)")
            .textContent.trim();
        extractedData.push({
            name: "Torrentz2",
            title: `${title}\n💾 ${size}`,
            infoHash: infoHash,
        });
    });
    return extractedData;
}
