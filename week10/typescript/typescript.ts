/*
* Typescript and superset of JavaScript, which is transpiled into plain old JS.
* Type coercion is not valued in TypeScript. 
* Variables should be typed.
*
* tsc --init : creates a Typescript config file
* tsc -w : starts tsc live transpilation watcher
*/

let countWords = (sentence:any):number =>{
    return (sentence as string).split(' ').length;
}

let n:number = countWords("This is the first day of the rest of my Angular");

console.log(n);