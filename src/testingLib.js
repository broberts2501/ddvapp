function testJSONParse(json)  {
    
    let json = ``

const obj = JSON.parse(json);
if (obj instanceof SyntaxError) {
console.log(obj);
// expected output: SyntaxError: Unexpected token o in JSON at position 1.
} else {
console.log(obj.count);}
  

}