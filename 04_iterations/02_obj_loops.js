const myObj = {
    py: "python", 
    java: "java", 
    cpp: "c++", 
    rb: "ruby",
    swift: "swift"
}

for (const lang in myObj) {
    console.log(`${lang} is the shortcut for ${myObj[lang]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}