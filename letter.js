// used for each letter in current word. 
//Each letter object should either display underlying character or "_" placeholder 

var Letter = function (alphabet){
	this.character = alphabet;
	this.appear = false; 
	
	this.letterSelect = function (){
		return !(this.appear) ? "_" : this.character; 
	};

};

module.exports = Letter;