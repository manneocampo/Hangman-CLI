// running this file will start game 

var Word = require("./word.js"); 
var prompt = require("prompt");

console.log("Exotic Fruits from the Philippines and Peru Hangman");
console.log("Guess any letter of the name of an exotic fruit");
console.log("Good luck!")
console.log("-----------------------------------------");
prompt.start();

game = {
	wordBank: ["mango", "rambutan", "lanzones", "chico", "durian", "capulin", "chirimoya", "guanabana"],
	wordsWon: 0, 
	guessesRemaining: 6, 

	startGame: function (word) {
		this.resetGuesses();
		this.currentWord = new Word(this.wordBank[Math.floor(Math.random()*this.wordBank.length)]);
		this.currentWord.getLetters();
		this.promptUser();

	},

	resetGuesses: function(){
		this.guessesRemaining = 6;
	}, 

	promptUser: function(){
		var _this = this;
		prompt.get(["guessLetter"], function(err, result){
			console.log("Guessed letter:" + result.guessLetter);
			var guesses = _this.currentWord.checkLetter(result.guessLetter); //check to make sure correct
			
			if (guesses == 0) {
				console.log("Incorrect");
				_this.guessesRemaining--;

			}else {
				console.log("Correct!"); 
				if(_this.currentWord.findWord()){
					console.log("You win!");
					console.log("-------------------------");
					return; //make sure correct
				}
			}
			console.log("Guesses remaining:" + _this.guessesRemaining);
			console.log("--------------------------------");
			if((_this.guessesRemaining > 0) && (_this.currentWord.found == false)){
				_this.promptUser();
			} else if (_this.guessesRemaining == 0) {
				console.log("Game Over. Correct Word:", _this.currentWord.answer);
			}else {
				console.log(_this.currentWord.wordSelect());
			}
		});
	}
};

game.startGame();