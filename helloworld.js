console.log('Hello World');

function say(word) {
  console.log(word);
}

function execute(someFunction, value){
  someFunction(value);
}

execute(function(word){
  console.log(word);
}, 'Hello');
