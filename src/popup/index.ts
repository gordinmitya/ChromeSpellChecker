function sayHello(name: string): void {
    document.getElementById("this_place")!.innerHTML = `Hello, ${name}!`;
}

let myName: string = "Dima";
chrome.bookmarks.getRecent(5, results => {
    console.log(results);
});
sayHello(myName);