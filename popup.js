document.getElementById("start").addEventListener("click", async()=>{
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });


    if(!tab?.url?.startsWith("https://web.whatsapp.com/")){
        alert("open whatsapp web first");
        return;
    }

    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["parser.js", "whatsapp.js"]
    });

    window.close();
})