
var Letter = require("./letter.js"); 

function Word(answer) {
	this.answer = answer;
	this.letters = [];
	this.found = false;

	this.getLetters = function(){
		for (var i=0; i<this.answer.length; i++){
			this.letters.push (new Letter(this.answer[i]));//check this
		}
	};

	this.findWord = function() {
		this.found = this.letters.every(function(currentLetter){ //check this
			return currentLetter.appear; //check this
		}); 
		return this.found; //check this
	}; 

	this.checkLetter = function(guessLetter){ //check whole thing
		var toReturn = 0; 

		for (var i =0; i <this.letters.length; i++){
			if (this.letters[i].characters == guessLetter){
				this.letters[i].appear = true; 
				toReturn++;
			}
		}
		return toReturn;
	};

	this.wordSelect = function (){ //check 
		var string = ""; 
		for (var i=0; i< this.letters.length; i++){
			string += this.letters[i].letterSelect();

		}
		return string;
	};
}

module.exports = Word;