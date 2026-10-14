
(() => {
    const messages = document.querySelectorAll(
        ".x1n2onr6.x1mzt3pk.x126k92a.x6ikm8r.x10wlt62"
    );
    // inner message line class x1lliihq

    let quizFound = false;

    const result = [];

    messages.forEach((message) => {
        const text = message.innerText.trim();

        if (text.toLowerCase().startsWith("quiz")) {
            quizFound = true;
            result.push(parser(text));
            console.log(result);
        }
    });

    if (quizFound) {
        alert("Quiz found");
    } else {
        alert("Quiz not found");
    }
})();
