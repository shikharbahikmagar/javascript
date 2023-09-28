const myObj = {
    php: "PHP",
    py: "PYTHON",
    sw: "Swift",
    jv: "Java",
    js: "javascript"
}

for (const key in myObj) {

    console.log(`${key} is shortcut of ${myObj[key]}`);

}