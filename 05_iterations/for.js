for (let i = 0; i < 10; i++) {
    const element = i;
    // /console.log(element);
    if (element == 5) {
        console.log("we got number 5");
        break;
    }
    else {
        console.log(`finding number 5 but we got ${i}`);
    }
}