# Animose feed parsers

## What is this?

This is a collection of parsers for various feeds you can configure in Animose. It is a work in progress, and I will add more as I go along.

## How do I use it?

You can use this by going to settings and then configure feeds in your animose app. add the feed url with search params and paste the corresponding parser function in the parser field.

## Currently available parsers

### Torrentz2

```js
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
```
