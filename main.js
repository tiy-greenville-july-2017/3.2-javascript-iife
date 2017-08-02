/*
 * Function Expressions
 */
// console.log('vroom', vroom);
// Function decleration
function saySomethingAwesome(saying){
 console.log('that was ' + saying);
}

// Function Expression
var saySomethingCool = function(saying){
  console.log('that was ' + saying);
};

// console.log(saySomethingCool);

saySomethingCool('awesome!');

document.querySelector('button').addEventListener('click', function(){
  // saySomethingCool('a button click!');
  console.log('yay, you clicked the button!');
});


// IIFE: Immediately Invoked Function Expression
(function(){
  // console.log('Function Expression that is Immediately Invoked');
}());


/*
 * Scope
 */
var withdrawAmount = 20;

bank();

function bank(){
  var withdrawAmount = 40;
  var accountBalance = 100;
  var sadMessage;

  // Can I see this variable?
  console.log(sadMessage);

  function makeWithdraw(){
    sadMessage = 'Sorry, you are poor';

    if(accountBalance < 60){
      console.log(sadMessage);
      return;
    }

    accountBalance = accountBalance - withdrawAmount;
    console.log('Account Balance:', accountBalance);
    return withdrawAmount;
  }

  console.log(makeWithdraw());
  window.setTimeout(makeWithdraw, 5000);
}

console.log('withdrawAmount', withdrawAmount);


/*
 * Hoisting
 */
// var accountBalance;
// console.log(accountBalance);
// var accountBalance = 100;
// accountBalance = accountBalance - 20;

console.log('vroom', vroom);

// this produces an error
// console.log('vroom', vroom());

// Declerations are hoisted, but not assignment
var vroom = function(){
  return 'wow! that was fast!';
};

console.log('vroom', vroom);
