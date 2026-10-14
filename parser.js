
globalThis.parser = function (text)  {
    const result = [];
    let obj = {};

    text.split("\n").forEach((line) => {
        line = line.trim();

        if (line.startsWith("-")) {
            if (Object.keys(obj).length > 0) {
                result.push(obj);
            }

            obj = {
                question: line,
                ans: []
            };
        } else if (line.startsWith("*")) {
            obj.ans.push(line);
        }
    });

    if (Object.keys(obj).length > 0) {
        result.push(obj);
    }

    return result;
}
