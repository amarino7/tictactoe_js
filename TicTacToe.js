window.onload = function() {

	var box1 = document.getElementById('box1');
	var box2 = document.getElementById('box2');
	var box3 = document.getElementById('box3');
	var box4 = document.getElementById('box4');
	var box5 = document.getElementById('box5');
	var box6 = document.getElementById('box6');
	var box7 = document.getElementById('box7');
	var box8 = document.getElementById('box8');
	var box9 = document.getElementById('box9');
	var turn = 1;
	var moves = [];
	var sign = "x";

	box1.onclick = function() {
		if (box1.innerHTML === "x" || box1.innerHTML === "O") {
			alert("Square is taken, try another box");
		} else {
			box1.innerHTML = box1.innerHTML + sign ;
		}
		if (box1.innerHTML === "x") {
			box1.classList.add("orange"); 
		} else {
			box1.classList.add("blue");
			moves[0] = sign;
		}
		if (sign === "O") {
			sign = "x";
		} else {
			sign = "O";
		}
	};

	box2.onclick = function() {
		if (box2.innerHTML === "x" || box2.innerHTML === "O") {
			alert("square is taken, try another box");
		} else {
			box2.innerHTML = box2.innerHTML + sign ;
		}
		if (box2.innerHTML === "x") {
			box2.classList.add("orange"); 
		} else {
			box2.classList.add("blue");
			moves[0] = sign;
		}
		if (sign === "O") {
			sign = "x";
		} else {
			sign = "O";
		}
	};

	box3.onclick = function() {
		if (box3.innerHTML === "x" || box3.innerHTML === "O") {
			alert("square is taken, try another box");
		} else {
			box3.innerHTML = box3.innerHTML + sign ;
		}
		if (box3.innerHTML === "x") {
			box3.classList.add("orange"); 
		} else {
			box3.classList.add("blue");
			moves[0] = sign;
		}
		if (sign === "O") {
			sign = "x";
		} else {
			sign = "O";
		}
	};

	box4.onclick = function() {
		if (box4.innerHTML === "x" || box4.innerHTML === "O") {
			alert("square is taken, try another box");
		} else {
			box4.innerHTML = box4.innerHTML + sign ;
		}
		if (box4.innerHTML === "x") {
			box4.classList.add("orange"); 
		} else {
			box4.classList.add("blue");
			moves[0] = sign;
		}
		if (sign === "O") {
			sign = "x";
		} else {
			sign = "O";
		}
	};

	box5.onclick = function() {
		if (box5.innerHTML === "x" || box5.innerHTML === "O") {
			alert("square is taken, try another box");
		} else {
			box5.innerHTML = box5.innerHTML + sign ;
		}
		if (box5.innerHTML === "x") {
			box5.classList.add("orange"); 
		} else {
			box5.classList.add("blue");
			moves[0] = sign;
		}
		if (sign === "O") {
			sign = "x";
		} else {
			sign = "O";
		}
	};

	box6.onclick = function() {
		if (box6.innerHTML === "x" || box6.innerHTML === "O") {
			alert("square is taken, try another box");
		} else {
			box6.innerHTML = box6.innerHTML + sign ;
		}
		if (box6.innerHTML === "x") {
			box6.classList.add("orange"); 
		} else {
			box6.classList.add("blue");
			moves[0] = sign;
		}
		if (sign === "O") {
			sign = "x";
		} else {
			sign = "O";
		}
	};

	box7.onclick = function() {
		if (box7.innerHTML === "x" || box7.innerHTML === "O") {
			alert("square is taken, try another box");
		} else {
			box7.innerHTML = box7.innerHTML + sign ;
		}
		if (box7.innerHTML === "x") {
			box7.classList.add("orange"); 
		} else {
			box7.classList.add("blue");
			moves[0] = sign;
		}
		if (sign === "O") {
			sign = "x";
		} else {
			sign = "O";
		}
	};

	box8.onclick = function() {
		if (box8.innerHTML === "x" || box8.innerHTML === "O") {
			alert("square is taken, try another box");
		} else {
			box8.innerHTML = box8.innerHTML + sign ;
		}
		if (box8.innerHTML === "x") {
			box8.classList.add("orange"); 
		} else {
			box8.classList.add("blue");
			moves[0] = sign;
		}
		if (sign === "O") {
			sign = "x";
		} else {
			sign = "O";
		}
	};

	box9.onclick = function() {
		if (box9.innerHTML === "x" || box9.innerHTML === "O") {
			alert("square is taken, try another box");
		} else {
			box9.innerHTML = box9.innerHTML + sign ;
		}
		if (box9.innerHTML === "x") {
			box9.classList.add("orange"); 
		} else {
			box9.classList.add("blue");
			moves[0] = sign;
		}
		if (sign === "O") {
			sign = "x";
		} else {
			sign = "O";
		}
	};
};



