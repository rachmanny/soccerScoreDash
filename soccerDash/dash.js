	// name || pts || gd || gf || ga || w || d || L || played ||

	var team1 = ["SBVP FC", 0, 0, 0, 0, 0, 0 ,0 ,0];
	var team2 = ["International FC", 0, 0 ,0, 0, 0, 0 ,0 ,0];
	var team3 = ["Gluten Free", 0, 0 ,0, 0, 0, 0 ,0 ,0];
	var team4 = ["FC Harul", 0, 0 ,0 ,0, 0, 0 ,0 ,0];
	
	var team5 = ["ELIMinators", 0, 0, 0, 0, 0, 0 ,0 ,0];
	var team6 = ["FC New Life", 0, 0 ,0, 0, 0, 0 ,0 ,0];
	var team7 = ["FC Romania", 0, 0 ,0, 0, 0, 0 ,0 ,0];
	var team8 = ["Juventus", 0, 0 ,0 ,0, 0, 0 ,0 ,0];
	
	document.getElementById('team1').innerHTML = team1[0];
	document.getElementById('team11').innerHTML = team1[0];
	document.getElementById('team111').innerHTML = team1[0];
	document.getElementById('team1111').innerHTML = team1[0];
	
	document.getElementById('team2').innerHTML = team2[0];
	document.getElementById('team22').innerHTML = team2[0];
	document.getElementById('team222').innerHTML = team2[0];
	document.getElementById('team2222').innerHTML = team2[0];
	
	document.getElementById('team3').innerHTML = team3[0];
	document.getElementById('team33').innerHTML = team3[0];
	document.getElementById('team333').innerHTML = team3[0];
	document.getElementById('team3333').innerHTML = team3[0];
	
	document.getElementById('team4').innerHTML = team4[0];
	document.getElementById('team44').innerHTML = team4[0];
	document.getElementById('team444').innerHTML = team4[0];
	document.getElementById('team4444').innerHTML = team4[0];
	
	document.getElementById('team1Pts').innerHTML = team1[1];
	document.getElementById('team2Pts').innerHTML = team2[1];
	document.getElementById('team3Pts').innerHTML = team3[1];
	document.getElementById('team4Pts').innerHTML = team4[1];
	
	document.getElementById('team1GD').innerHTML = team1[2];
	document.getElementById('team1GF').innerHTML = team1[3];
	document.getElementById('team1GA').innerHTML = team1[4];
	document.getElementById('team1W').innerHTML = team1[5];
	document.getElementById('team1D').innerHTML = team1[6];
	document.getElementById('team1L').innerHTML = team1[7];
	document.getElementById('team1P').innerHTML = team1[8];
	
	document.getElementById('team2GD').innerHTML = team2[2];
	document.getElementById('team2GF').innerHTML = team2[3];
	document.getElementById('team2GA').innerHTML = team2[4];
	document.getElementById('team2W').innerHTML = team2[5];
	document.getElementById('team2D').innerHTML = team2[6];
	document.getElementById('team2L').innerHTML = team2[7];
	document.getElementById('team2P').innerHTML = team2[8];
	
	document.getElementById('team3GD').innerHTML = team3[2];
	document.getElementById('team3GF').innerHTML = team3[3];
	document.getElementById('team3GA').innerHTML = team3[4];
	document.getElementById('team3W').innerHTML = team3[5];
	document.getElementById('team3D').innerHTML = team3[6];
	document.getElementById('team3L').innerHTML = team3[7];
	document.getElementById('team3P').innerHTML = team2[8];
	
	document.getElementById('team4GD').innerHTML = team4[2];
	document.getElementById('team4GF').innerHTML = team4[3];
	document.getElementById('team4GA').innerHTML = team4[4];
	document.getElementById('team4W').innerHTML = team4[5];
	document.getElementById('team4D').innerHTML = team4[6];
	document.getElementById('team4L').innerHTML = team4[7];
	document.getElementById('team4P').innerHTML = team4[8];
	
	document.getElementById('team5').innerHTML = team5[0];
	document.getElementById('team55').innerHTML = team5[0];
	document.getElementById('team555').innerHTML = team5[0];
	document.getElementById('team5555').innerHTML = team5[0];
	
	
	document.getElementById('team6').innerHTML = team6[0];
	document.getElementById('team66').innerHTML = team6[0];
	document.getElementById('team666').innerHTML = team6[0];
	document.getElementById('team6666').innerHTML = team6[0];
	
	document.getElementById('team7').innerHTML = team7[0];
	document.getElementById('team77').innerHTML = team7[0];
	document.getElementById('team777').innerHTML = team7[0];
	document.getElementById('team7777').innerHTML = team7[0];
	
	document.getElementById('team8').innerHTML = team8[0];
	document.getElementById('team88').innerHTML = team8[0];
	document.getElementById('team888').innerHTML = team8[0];
	document.getElementById('team8888').innerHTML = team8[0];
	
	document.getElementById('team5Pts').innerHTML = team5[1];
	document.getElementById('team6Pts').innerHTML = team6[1];
	document.getElementById('team7Pts').innerHTML = team7[1];
	document.getElementById('team8Pts').innerHTML = team8[1];
	
	document.getElementById('team5GD').innerHTML = team5[2];
	document.getElementById('team5GF').innerHTML = team5[3];
	document.getElementById('team5GA').innerHTML = team5[4];
	document.getElementById('team5W').innerHTML = team5[5];
	document.getElementById('team5D').innerHTML = team5[6];
	document.getElementById('team5L').innerHTML = team5[7];
	document.getElementById('team5P').innerHTML = team5[8];
	
	document.getElementById('team6GD').innerHTML = team6[2];
	document.getElementById('team6GF').innerHTML = team6[3];
	document.getElementById('team6GA').innerHTML = team6[4];
	document.getElementById('team6W').innerHTML = team6[5];
	document.getElementById('team6D').innerHTML = team6[6];
	document.getElementById('team6L').innerHTML = team6[7];
	document.getElementById('team6P').innerHTML = team6[8];
	
	document.getElementById('team7GD').innerHTML = team7[2];
	document.getElementById('team7GF').innerHTML = team7[3];
	document.getElementById('team7GA').innerHTML = team7[4];
	document.getElementById('team7W').innerHTML = team7[5];
	document.getElementById('team7D').innerHTML = team7[6];
	document.getElementById('team7L').innerHTML = team7[7];
	document.getElementById('team7P').innerHTML = team7[8];
	
	document.getElementById('team8GD').innerHTML = team8[2];
	document.getElementById('team8GF').innerHTML = team8[3];
	document.getElementById('team8GA').innerHTML = team8[4];
	document.getElementById('team8W').innerHTML = team8[5];
	document.getElementById('team8D').innerHTML = team8[6];
	document.getElementById('team8L').innerHTML = team8[7];
	document.getElementById('team8P').innerHTML = team8[8];
	
	
	$('tbody').sortable();
	
	function submitScore(sc1,sc2,teamA,teamB) {
		if (sc1>sc2) {
			console.log(teamA+' won');
			compileNumbersIfFirstInputWins(teamA, teamB,sc1,sc2);
		}
		else if (sc2>sc1) {
			console.log(teamB+' won');
			compileNumbersIfSecondInputWins(teamA, teamB,sc1,sc2);
		}
		else {
			console.log("it's a tie");
			compileNumbersIfTie(teamA, teamB,sc1,sc2);
		}
	}
	
	
	
	function compileNumbersIfFirstInputWins(A,B,s1,s2) {
		if (A.includes("team1") && B.includes("team2")) {
			console.log("it got here");
	
			// PTS
			team1[1] += 3; 
	
			// GF and GA
			team1[3] += parseInt(s1); team1[4] += parseInt(s2);
			team2[3] += parseInt(s2);	team2[4] += parseInt(s1);
	
			 // GD 
			team1[2] = team1[3] - team1[4];
			team2[2] = team2[3] - team2[4];
	
			// Wins(5) . Draws . Losses (7)
			team1[5] += 1;
			team2[7] += 1;

			// Played(8)
			team1[8] += 1;
			team2[8] += 1;



			// display
			document.getElementById('team1Pts').innerHTML = team1[1];
			document.getElementById('team1GD').innerHTML = team1[2];
			document.getElementById('team1GF').innerHTML = team1[3];
			document.getElementById('team1GA').innerHTML = team1[4];
			document.getElementById('team1W').innerHTML = team1[5];
			document.getElementById('team1D').innerHTML = team1[6];
			document.getElementById('team1L').innerHTML = team1[7];
			document.getElementById('team1P').innerHTML = team1[8];
			document.getElementById('team2Pts').innerHTML = team2[1];
			document.getElementById('team2GD').innerHTML = team2[2];
			document.getElementById('team2GF').innerHTML = team2[3];
			document.getElementById('team2GA').innerHTML = team2[4];
			document.getElementById('team2W').innerHTML = team2[5];
			document.getElementById('team2D').innerHTML = team2[6];
			document.getElementById('team2L').innerHTML = team2[7];
			document.getElementById('team2P').innerHTML = team2[8];
		}
		else if (A.includes("team1") && B.includes("team3")) {
			// PTS
			team1[1] += 3; 
	
			// GF and GA
			team1[3] += parseInt(s1); team1[4] += parseInt(s2);
			team3[3] += parseInt(s2);	team3[4] += parseInt(s1);
	
			 // GD 
			team1[2] = team1[3] - team1[4];
			team3[2] = team3[3] - team3[4];

			// Wins(5) . Draws . Losses(7)
			team1[5] += 1;
			team3[7] += 1;

			// Played(8)
			team1[8] += 1;
			team3[8] += 1;
	
			// display
			document.getElementById('team1Pts').innerHTML = team1[1];
			document.getElementById('team1GD').innerHTML = team1[2];
			document.getElementById('team1GF').innerHTML = team1[3];
			document.getElementById('team1GA').innerHTML = team1[4];
			document.getElementById('team1W').innerHTML = team1[5];
			document.getElementById('team1D').innerHTML = team1[6];
			document.getElementById('team1L').innerHTML = team1[7];
			document.getElementById('team1P').innerHTML = team1[8];
			document.getElementById('team3Pts').innerHTML = team3[1];
			document.getElementById('team3GD').innerHTML = team3[2];
			document.getElementById('team3GF').innerHTML = team3[3];
			document.getElementById('team3GA').innerHTML = team3[4];
			document.getElementById('team3W').innerHTML = team3[5];
			document.getElementById('team3D').innerHTML = team3[6];
			document.getElementById('team3L').innerHTML = team3[7];
			document.getElementById('team3P').innerHTML = team3[8];
	
		}
		else if (A.includes("team1") && B.includes("team4")) {
			// PTS
			team1[1] += 3; 
	
			// GF and GA
			team1[3] += parseInt(s1); team1[4] += parseInt(s2);
			team4[3] += parseInt(s2);	team4[4] += parseInt(s1);
	
			 // GD 
			team1[2] = team1[3] - team1[4];
			team4[2] = team4[3] - team4[4];

			// Wins(5) . Draws . Losses(7)
			team1[5] += 1;
			team4[7] += 1;

			// Played(8)
			team1[8] += 1;
			team4[8] += 1;
	
			// display
			document.getElementById('team1Pts').innerHTML = team1[1];
			document.getElementById('team1GD').innerHTML = team1[2];
			document.getElementById('team1GF').innerHTML = team1[3];
			document.getElementById('team1GA').innerHTML = team1[4];
			document.getElementById('team1W').innerHTML = team1[5];
			document.getElementById('team1D').innerHTML = team1[6];
			document.getElementById('team1L').innerHTML = team1[7];
			document.getElementById('team1P').innerHTML = team1[8];
			document.getElementById('team4Pts').innerHTML = team4[1];
			document.getElementById('team4GD').innerHTML = team4[2];
			document.getElementById('team4GF').innerHTML = team4[3];
			document.getElementById('team4GA').innerHTML = team4[4];
			document.getElementById('team4W').innerHTML = team4[5];
			document.getElementById('team4D').innerHTML = team4[6];
			document.getElementById('team4L').innerHTML = team4[7];
			document.getElementById('team4P').innerHTML = team4[8];
	
		}
		else if (A.includes("team2") && B.includes("team3")) {
			// PTS
			team2[1] += 3; 
	
			// GF and GA
			team2[3] += parseInt(s1); team2[4] += parseInt(s2);
			team3[3] += parseInt(s2);	team3[4] += parseInt(s1);
	
			 // GD 
			team2[2] = team2[3] - team2[4];
			team3[2] = team3[3] - team3[4];

			// Wins(5) . Draws . Losses(7)
			team2[5] += 1;
			team3[7] += 1;

			// Played(8)
			team2[8] += 1;
			team3[8] += 1;
	
			// display
			document.getElementById('team2Pts').innerHTML = team2[1];
			document.getElementById('team2GD').innerHTML = team2[2];
			document.getElementById('team2GF').innerHTML = team2[3];
			document.getElementById('team2GA').innerHTML = team2[4];
			document.getElementById('team2W').innerHTML = team2[5];
			document.getElementById('team2D').innerHTML = team2[6];
			document.getElementById('team2L').innerHTML = team2[7];
			document.getElementById('team2P').innerHTML = team2[8];
			document.getElementById('team3Pts').innerHTML = team3[1];
			document.getElementById('team3GD').innerHTML = team3[2];
			document.getElementById('team3GF').innerHTML = team3[3];
			document.getElementById('team3GA').innerHTML = team3[4];
			document.getElementById('team3W').innerHTML = team3[5];
			document.getElementById('team3D').innerHTML = team3[6];
			document.getElementById('team3L').innerHTML = team3[7];
			document.getElementById('team3P').innerHTML = team3[8];
	
		}
		else if (A.includes("team2") && B.includes("team4")) {
			// PTS
			team2[1] += 3; 
	
			// GF and GA
			team2[3] += parseInt(s1); team2[4] += parseInt(s2);
			team4[3] += parseInt(s2);	team4[4] += parseInt(s1);
	
			 // GD  
			team2[2] = team2[3] - team2[4];
			team4[2] = team4[3] - team4[4];

			// Wins(5) . Draws . Losses(7)
			team2[5] += 1;
			team4[7] += 1;

			// Played(8)
			team2[8] += 1;
			team4[8] += 1;
	
			// display
			document.getElementById('team2Pts').innerHTML = team2[1];
			document.getElementById('team2GD').innerHTML = team2[2];
			document.getElementById('team2GF').innerHTML = team2[3];
			document.getElementById('team2GA').innerHTML = team2[4];
			document.getElementById('team2W').innerHTML = team2[5];
			document.getElementById('team2D').innerHTML = team2[6];
			document.getElementById('team2L').innerHTML = team2[7];
			document.getElementById('team2P').innerHTML = team2[8];
			document.getElementById('team4Pts').innerHTML = team4[1];
			document.getElementById('team4GD').innerHTML = team4[2];
			document.getElementById('team4GF').innerHTML = team4[3];
			document.getElementById('team4GA').innerHTML = team4[4];
			document.getElementById('team4W').innerHTML = team4[5];
			document.getElementById('team4D').innerHTML = team4[6];
			document.getElementById('team4L').innerHTML = team4[7];
			document.getElementById('team4P').innerHTML = team4[8];
	
		}
		else if (A.includes("team3") && B.includes("team4")) {
			// PTS
			team3[1] += 3; 
	
			// GF and GA
			team3[3] += parseInt(s1); team3[4] += parseInt(s2);
			team4[3] += parseInt(s2);	team4[4] += parseInt(s1);
	
			 // GD  
			team3[2] = team3[3] - team3[4];
			team4[2] = team4[3] - team4[4];

			// Wins(5) . Draws . Losses(7)
			team3[5] += 1;
			team4[7] += 1;

			// Played(8)
			team3[8] += 1;
			team4[8] += 1;
	
			// display
			document.getElementById('team3Pts').innerHTML = team3[1];
			document.getElementById('team3GD').innerHTML = team3[2];
			document.getElementById('team3GF').innerHTML = team3[3];
			document.getElementById('team3GA').innerHTML = team3[4];
			document.getElementById('team3W').innerHTML = team3[5];
			document.getElementById('team3D').innerHTML = team3[6];
			document.getElementById('team3L').innerHTML = team3[7];
			document.getElementById('team3P').innerHTML = team3[8];
			document.getElementById('team4Pts').innerHTML = team4[1];
			document.getElementById('team4GD').innerHTML = team4[2];
			document.getElementById('team4GF').innerHTML = team4[3];
			document.getElementById('team4GA').innerHTML = team4[4];
			document.getElementById('team4W').innerHTML = team4[5];
			document.getElementById('team4D').innerHTML = team4[6];
			document.getElementById('team4L').innerHTML = team4[7];
			document.getElementById('team4P').innerHTML = team4[8];
	
		}
	
		else if (A.includes("team5") && B.includes("team6")) {
	
	// PTS
	team5[1] += 3; 
	
	// GF and GA
	team5[3] += parseInt(s1); team5[4] += parseInt(s2);
	team6[3] += parseInt(s2);	team6[4] += parseInt(s1);
	
	// GD  
	team5[2] = team5[3] - team5[4];
	team6[2] = team6[3] - team6[4];

	// Wins(5) . Draws . Losses(7)
	team5[5] += 1;
	team6[7] += 1;

	// Played(8)
	team5[8] += 1;
	team6[8] += 1;
	
	// display
	document.getElementById('team5Pts').innerHTML = team5[1];
	document.getElementById('team5GD').innerHTML = team5[2];
	document.getElementById('team5GF').innerHTML = team5[3];
	document.getElementById('team5GA').innerHTML = team5[4];
	document.getElementById('team5W').innerHTML = team5[5];
	document.getElementById('team5D').innerHTML = team5[6];
	document.getElementById('team5L').innerHTML = team5[7];
	document.getElementById('team5P').innerHTML = team5[8];
	document.getElementById('team6Pts').innerHTML = team6[1];
	document.getElementById('team6GD').innerHTML = team6[2];
	document.getElementById('team6GF').innerHTML = team6[3];
	document.getElementById('team6GA').innerHTML = team6[4];
	document.getElementById('team6W').innerHTML = team6[5];
	document.getElementById('team6D').innerHTML = team6[6];
	document.getElementById('team6L').innerHTML = team6[7];
	document.getElementById('team6P').innerHTML = team6[8];
	}
	else if (A.includes("team5") && B.includes("team7")) {
	// PTS
	team5[1] += 3; 
	
	// GF and GA
	team5[3] += parseInt(s1); team5[4] += parseInt(s2);
	team7[3] += parseInt(s2);	team7[4] += parseInt(s1);
	
	// GD  
	team5[2] = team5[3] - team5[4];
	team7[2] = team7[3] - team7[4];

	// Wins(5) . Draws . Losses(7)
	team5[5] += 1;
	team7[7] += 1;

	// Played(8)
	team5[8] += 1;
	team7[8] += 1;
	
	// display
	document.getElementById('team5Pts').innerHTML = team5[1];
	document.getElementById('team5GD').innerHTML = team5[2];
	document.getElementById('team5GF').innerHTML = team5[3];
	document.getElementById('team5GA').innerHTML = team5[4];
	document.getElementById('team5W').innerHTML = team5[5];
	document.getElementById('team5D').innerHTML = team5[6];
	document.getElementById('team5L').innerHTML = team5[7];
	document.getElementById('team5P').innerHTML = team5[8];
	document.getElementById('team7Pts').innerHTML = team7[1];
	document.getElementById('team7GD').innerHTML = team7[2];
	document.getElementById('team7GF').innerHTML = team7[3];
	document.getElementById('team7GA').innerHTML = team7[4];
	document.getElementById('team7W').innerHTML = team7[5];
	document.getElementById('team7D').innerHTML = team7[6];
	document.getElementById('team7L').innerHTML = team7[7];
	document.getElementById('team7P').innerHTML = team7[8];
	
	}
	else if (A.includes("team5") && B.includes("team8")) {
	// PTS
	team5[1] += 3; 
	
	// GF and GA
	team5[3] += parseInt(s1); team5[4] += parseInt(s2);
	team8[3] += parseInt(s2);	team8[4] += parseInt(s1);
	
	// GD  
	team5[2] = team5[3] - team5[4];
	team8[2] = team8[3] - team8[4];

	// Wins(5) . Draws . Losses(7)
	team5[5] += 1;
	team8[7] += 1;

	// Played(8)
	team5[8] += 1;
	team8[8] += 1;
	
	// display
	document.getElementById('team5Pts').innerHTML = team5[1];
	document.getElementById('team5GD').innerHTML = team5[2];
	document.getElementById('team5GF').innerHTML = team5[3];
	document.getElementById('team5GA').innerHTML = team5[4];
	document.getElementById('team5W').innerHTML = team5[5];
	document.getElementById('team5D').innerHTML = team5[6];
	document.getElementById('team5L').innerHTML = team5[7];
	document.getElementById('team5P').innerHTML = team5[8];
	document.getElementById('team8Pts').innerHTML = team8[1];
	document.getElementById('team8GD').innerHTML = team8[2];
	document.getElementById('team8GF').innerHTML = team8[3];
	document.getElementById('team8GA').innerHTML = team8[4];
	document.getElementById('team8W').innerHTML = team8[5];
	document.getElementById('team8D').innerHTML = team8[6];
	document.getElementById('team8L').innerHTML = team8[7];
	document.getElementById('team8P').innerHTML = team8[8];
	
	}
	else if (A.includes("team6") && B.includes("team7")) {
	// PTS
	team6[1] += 3; 
	
	// GF and GA
	team6[3] += parseInt(s1); team6[4] += parseInt(s2);
	team7[3] += parseInt(s2);	team7[4] += parseInt(s1);
	
	// GD  
	team6[2] = team6[3] - team6[4];
	team7[2] = team7[3] - team7[4];

	// Wins(5) . Draws . Losses(7)
	team6[5] += 1;
	team7[7] += 1;

	// Played(8)
	team6[8] += 1;
	team7[8] += 1;
	
	// display
	document.getElementById('team6Pts').innerHTML = team6[1];
	document.getElementById('team6GD').innerHTML = team6[2];
	document.getElementById('team6GF').innerHTML = team6[3];
	document.getElementById('team6GA').innerHTML = team6[4];
	document.getElementById('team6W').innerHTML = team6[5];
	document.getElementById('team6D').innerHTML = team6[6];
	document.getElementById('team6L').innerHTML = team6[7];
	document.getElementById('team6P').innerHTML = team6[8];
	document.getElementById('team7Pts').innerHTML = team7[1];
	document.getElementById('team7GD').innerHTML = team7[2];
	document.getElementById('team7GF').innerHTML = team7[3];
	document.getElementById('team7GA').innerHTML = team7[4];
	document.getElementById('team7W').innerHTML = team7[5];
	document.getElementById('team7D').innerHTML = team7[6];
	document.getElementById('team7L').innerHTML = team7[7];
	document.getElementById('team7P').innerHTML = team7[8];
	
	}
	else if (A.includes("team6") && B.includes("team8")) {
	// PTS
	team6[1] += 3; 
	
	// GF and GA
	team6[3] += parseInt(s1); team6[4] += parseInt(s2);
	team8[3] += parseInt(s2);	team8[4] += parseInt(s1);
	
	// GD  
	team6[2] = team6[3] - team6[4];
	team8[2] = team8[3] - team8[4];

	// Wins(5) . Draws . Losses(7)
	team6[5] += 1;
	team8[7] += 1;

	// Played(8)
	team6[8] += 1;
	team8[8] += 1;
	
	// display
	document.getElementById('team6Pts').innerHTML = team6[1];
	document.getElementById('team6GD').innerHTML = team6[2];
	document.getElementById('team6GF').innerHTML = team6[3];
	document.getElementById('team6GA').innerHTML = team6[4];
	document.getElementById('team6W').innerHTML = team6[5];
	document.getElementById('team6D').innerHTML = team6[6];
	document.getElementById('team6L').innerHTML = team6[7];
	document.getElementById('team6P').innerHTML = team6[8];
	document.getElementById('team8Pts').innerHTML = team8[1];
	document.getElementById('team8GD').innerHTML = team8[2];
	document.getElementById('team8GF').innerHTML = team8[3];
	document.getElementById('team8GA').innerHTML = team8[4];
	document.getElementById('team8W').innerHTML = team8[5];
	document.getElementById('team8D').innerHTML = team8[6];
	document.getElementById('team8L').innerHTML = team8[7];
	document.getElementById('team8P').innerHTML = team8[8];
	
	}
	else if (A.includes("team7") && B.includes("team8")) {
	// PTS
	team7[1] += 3; 
	
	// GF and GA
	team7[3] += parseInt(s1); team7[4] += parseInt(s2);
	team8[3] += parseInt(s2);	team8[4] += parseInt(s1);
	
	// GD  
	team7[2] = team7[3] - team7[4];
	team8[2] = team8[3] - team8[4];

	// Wins(5) . Draws . Losses(7)
	team7[5] += 1;
	team8[7] += 1;

	// Played(8)
	team7[8] += 1;
	team8[8] += 1;
	
	// display
	document.getElementById('team7Pts').innerHTML = team7[1];
	document.getElementById('team7GD').innerHTML = team7[2];
	document.getElementById('team7GF').innerHTML = team7[3];
	document.getElementById('team7GA').innerHTML = team7[4];
	document.getElementById('team7W').innerHTML = team7[5];
	document.getElementById('team7D').innerHTML = team7[6];
	document.getElementById('team7L').innerHTML = team7[7];
	document.getElementById('team7P').innerHTML = team7[8];
	document.getElementById('team8Pts').innerHTML = team8[1];
	document.getElementById('team8GD').innerHTML = team8[2];
	document.getElementById('team8GF').innerHTML = team8[3];
	document.getElementById('team8GA').innerHTML = team8[4];
	document.getElementById('team8W').innerHTML = team8[5];
	document.getElementById('team8D').innerHTML = team8[6];
	document.getElementById('team8L').innerHTML = team8[7];
	document.getElementById('team8P').innerHTML = team8[8];
	
	}
		
		else {
			console.log('something didnt work');
		}
	}
	
	function compileNumbersIfSecondInputWins(A,B,s1,s2) {
		if (A.includes("team1") && B.includes("team2")) {
	
			// PTS
			team2[1] += 3; 
	
			// GF and GA
			team1[3] += parseInt(s1); team1[4] += parseInt(s2);
			team2[3] += parseInt(s2);	team2[4] += parseInt(s1);
	
			 // GD  
			team1[2] = team1[3] - team1[4];
			team2[2] = team2[3] - team2[4];

			// Wins(5) . Draws . Losses(7)
			team2[5] += 1;
			team1[7] += 1;

			// Played(8)
			team1[8] += 1;
			team2[8] += 1;
	
			// display
			document.getElementById('team1Pts').innerHTML = team1[1];
			document.getElementById('team1GD').innerHTML = team1[2];
			document.getElementById('team1GF').innerHTML = team1[3];
			document.getElementById('team1GA').innerHTML = team1[4];
			document.getElementById('team1W').innerHTML = team1[5];
			document.getElementById('team1D').innerHTML = team1[6];
			document.getElementById('team1L').innerHTML = team1[7];
			document.getElementById('team1P').innerHTML = team1[8];
			document.getElementById('team2Pts').innerHTML = team2[1];
			document.getElementById('team2GD').innerHTML = team2[2];
			document.getElementById('team2GF').innerHTML = team2[3];
			document.getElementById('team2GA').innerHTML = team2[4];
			document.getElementById('team2W').innerHTML = team2[5];
			document.getElementById('team2D').innerHTML = team2[6];
			document.getElementById('team2L').innerHTML = team2[7];
			document.getElementById('team2P').innerHTML = team2[8];
		}
		else if (A.includes("team1") && B.includes("team3")) {
			// PTS
			team3[1] += 3; 
	
			// GF and GA
			team1[3] += parseInt(s1); team1[4] += parseInt(s2);
			team3[3] += parseInt(s2);	team3[4] += parseInt(s1);
	
			 // GD  
			team1[2] = team1[3] - team1[4];
			team3[2] = team3[3] - team3[4];

			// Wins(5) . Draws . Losses(7)
			team3[5] += 1;
			team1[7] += 1;

			// Played(8)
			team1[8] += 1;
			team3[8] += 1;
	
			// display
			document.getElementById('team1Pts').innerHTML = team1[1];
			document.getElementById('team1GD').innerHTML = team1[2];
			document.getElementById('team1GF').innerHTML = team1[3];
			document.getElementById('team1GA').innerHTML = team1[4];
			document.getElementById('team1W').innerHTML = team1[5];
			document.getElementById('team1D').innerHTML = team1[6];
			document.getElementById('team1L').innerHTML = team1[7];
			document.getElementById('team1P').innerHTML = team1[8];
			document.getElementById('team3Pts').innerHTML = team3[1];
			document.getElementById('team3GD').innerHTML = team3[2];
			document.getElementById('team3GF').innerHTML = team3[3];
			document.getElementById('team3GA').innerHTML = team3[4];
			document.getElementById('team3W').innerHTML = team3[5];
			document.getElementById('team3D').innerHTML = team3[6];
			document.getElementById('team3L').innerHTML = team3[7];
			document.getElementById('team3P').innerHTML = team3[8];
	
		}
		else if (A.includes("team1") && B.includes("team4")) {
			// PTS
			team4[1] += 3; 
	
			// GF and GA
			team1[3] += parseInt(s1); team1[4] += parseInt(s2);
			team4[3] += parseInt(s2);	team4[4] += parseInt(s1);
	
			 // GD  
			team1[2] = team1[3] - team1[4];
			team4[2] = team4[3] - team4[4];

			// Wins(5) . Draws . Losses(7)
			team4[5] += 1;
			team1[7] += 1;

			// Played(8)
			team1[8] += 1;
			team4[8] += 1;
	
			// display
			document.getElementById('team1Pts').innerHTML = team1[1];
			document.getElementById('team1GD').innerHTML = team1[2];
			document.getElementById('team1GF').innerHTML = team1[3];
			document.getElementById('team1GA').innerHTML = team1[4];
			document.getElementById('team1W').innerHTML = team1[5];
			document.getElementById('team1D').innerHTML = team1[6];
			document.getElementById('team1L').innerHTML = team1[7];
			document.getElementById('team1P').innerHTML = team1[8];
			document.getElementById('team4Pts').innerHTML = team4[1];
			document.getElementById('team4GD').innerHTML = team4[2];
			document.getElementById('team4GF').innerHTML = team4[3];
			document.getElementById('team4GA').innerHTML = team4[4];
			document.getElementById('team4W').innerHTML = team4[5];
			document.getElementById('team4D').innerHTML = team4[6];
			document.getElementById('team4L').innerHTML = team4[7];
			document.getElementById('team4P').innerHTML = team4[8];
	
		}
		else if (A.includes("team2") && B.includes("team3")) {
			// PTS
			team3[1] += 3; 
	
			// GF and GA
			team2[3] += parseInt(s1); team2[4] += parseInt(s2);
			team3[3] += parseInt(s2);	team3[4] += parseInt(s1);
	
			 // GD  
			team2[2] = team2[3] - team2[4];
			team3[2] = team3[3] - team3[4];

			// Wins(5) . Draws . Losses(7)
			team3[5] += 1;
			team2[7] += 1;

			// Played(8)
			team2[8] += 1;
			team3[8] += 1;
	
			// display
			document.getElementById('team2Pts').innerHTML = team2[1];
			document.getElementById('team2GD').innerHTML = team2[2];
			document.getElementById('team2GF').innerHTML = team2[3];
			document.getElementById('team2GA').innerHTML = team2[4];
			document.getElementById('team2W').innerHTML = team2[5];
			document.getElementById('team2D').innerHTML = team2[6];
			document.getElementById('team2L').innerHTML = team2[7];
			document.getElementById('team2P').innerHTML = team2[8];
			document.getElementById('team3Pts').innerHTML = team3[1];
			document.getElementById('team3GD').innerHTML = team3[2];
			document.getElementById('team3GF').innerHTML = team3[3];
			document.getElementById('team3GA').innerHTML = team3[4];
			document.getElementById('team3W').innerHTML = team3[5];
			document.getElementById('team3D').innerHTML = team3[6];
			document.getElementById('team3L').innerHTML = team3[7];
			document.getElementById('team3P').innerHTML = team3[8];
	
		}
		else if (A.includes("team2") && B.includes("team4")) {
			// PTS
			team4[1] += 3; 
	
			// GF and GA
			team2[3] += parseInt(s1); team2[4] += parseInt(s2);
			team4[3] += parseInt(s2);	team4[4] += parseInt(s1);
	
			 // GD  
			team2[2] = team2[3] - team2[4];
			team4[2] = team4[3] - team4[4];

			// Wins(5) . Draws . Losses(7)
			team4[5] += 1;
			team2[7] += 1;

			// Played(8)
			team2[8] += 1;
			team4[8] += 1;
	
			// display
			document.getElementById('team2Pts').innerHTML = team2[1];
			document.getElementById('team2GD').innerHTML = team2[2];
			document.getElementById('team2GF').innerHTML = team2[3];
			document.getElementById('team2GA').innerHTML = team2[4];
			document.getElementById('team2W').innerHTML = team2[5];
			document.getElementById('team2D').innerHTML = team2[6];
			document.getElementById('team2L').innerHTML = team2[7];
			document.getElementById('team2P').innerHTML = team2[8];
			document.getElementById('team4Pts').innerHTML = team4[1];
			document.getElementById('team4GD').innerHTML = team4[2];
			document.getElementById('team4GF').innerHTML = team4[3];
			document.getElementById('team4GA').innerHTML = team4[4];
			document.getElementById('team4W').innerHTML = team4[5];
			document.getElementById('team4D').innerHTML = team4[6];
			document.getElementById('team4L').innerHTML = team4[7];
			document.getElementById('team4P').innerHTML = team4[8];
	
		}
		else if (A.includes("team3") && B.includes("team4")) {
			// PTS
			team4[1] += 3; 
	
			// GF and GA
			team3[3] += parseInt(s1); team3[4] += parseInt(s2);
			team4[3] += parseInt(s2);	team4[4] += parseInt(s1);
	
			 // GD  
			team3[2] = team3[3] - team3[4];
			team4[2] = team4[3] - team4[4];

			// Wins(5) . Draws . Losses(7)
			team4[5] += 1;
			team3[7] += 1;

			// Played(8)
			team4[8] += 1;
			team3[8] += 1;
	
			// display
			document.getElementById('team3Pts').innerHTML = team3[1];
			document.getElementById('team3GD').innerHTML = team3[2];
			document.getElementById('team3GF').innerHTML = team3[3];
			document.getElementById('team3GA').innerHTML = team3[4];
			document.getElementById('team3W').innerHTML = team3[5];
			document.getElementById('team3D').innerHTML = team3[6];
			document.getElementById('team3L').innerHTML = team3[7];
			document.getElementById('team3P').innerHTML = team3[8];
			document.getElementById('team4Pts').innerHTML = team4[1];
			document.getElementById('team4GD').innerHTML = team4[2];
			document.getElementById('team4GF').innerHTML = team4[3];
			document.getElementById('team4GA').innerHTML = team4[4];
			document.getElementById('team4W').innerHTML = team4[5];
			document.getElementById('team4D').innerHTML = team4[6];
			document.getElementById('team4L').innerHTML = team4[7];
			document.getElementById('team4P').innerHTML = team4[8];
	
		}
		else if (A.includes("team5") && B.includes("team6")) {
	
			// PTS
			team6[1] += 3; 
	
			// GF and GA
			team5[3] += parseInt(s1); team5[4] += parseInt(s2);
			team6[3] += parseInt(s2);	team6[4] += parseInt(s1);
	
			// GD  
			team5[2] = team5[3] - team5[4];
			team6[2] = team6[3] - team6[4];

			// Wins(5) . Draws . Losses(7)
			team6[5] += 1;
			team5[7] += 1;

			// Played(8)
			team6[8] += 1;
			team5[8] += 1;
	
			// display
			document.getElementById('team5Pts').innerHTML = team5[1];
			document.getElementById('team5GD').innerHTML = team5[2];
			document.getElementById('team5GF').innerHTML = team5[3];
			document.getElementById('team5GA').innerHTML = team5[4];
			document.getElementById('team5W').innerHTML = team5[5];
			document.getElementById('team5D').innerHTML = team5[6];
			document.getElementById('team5L').innerHTML = team5[7];
			document.getElementById('team5P').innerHTML = team5[8];
			document.getElementById('team6Pts').innerHTML = team6[1];
			document.getElementById('team6GD').innerHTML = team6[2];
			document.getElementById('team6GF').innerHTML = team6[3];
			document.getElementById('team6GA').innerHTML = team6[4];
			document.getElementById('team6W').innerHTML = team6[5];
			document.getElementById('team6D').innerHTML = team6[6];
			document.getElementById('team6L').innerHTML = team6[7];
			document.getElementById('team6P').innerHTML = team6[8];
		}
	else if (A.includes("team5") && B.includes("team7")) {
	// PTS
	team7[1] += 3; 
	
	// GF and GA
	team5[3] += parseInt(s1); team5[4] += parseInt(s2);
	team7[3] += parseInt(s2);	team7[4] += parseInt(s1);
	
	 // GD  
	team5[2] = team5[3] - team5[4];
	team7[2] = team7[3] - team7[4];

	// Wins(5) . Draws . Losses(7)
	team7[5] += 1;
	team5[7] += 1;

	// Played(8)
	team7[8] += 1;
	team5[8] += 1;
	
	// display
	document.getElementById('team5Pts').innerHTML = team5[1];
	document.getElementById('team5GD').innerHTML = team5[2];
	document.getElementById('team5GF').innerHTML = team5[3];
	document.getElementById('team5GA').innerHTML = team5[4];
	document.getElementById('team5W').innerHTML = team5[5];
	document.getElementById('team5D').innerHTML = team5[6];
	document.getElementById('team5L').innerHTML = team5[7];
	document.getElementById('team5P').innerHTML = team5[8];
	document.getElementById('team7Pts').innerHTML = team7[1];
	document.getElementById('team7GD').innerHTML = team7[2];
	document.getElementById('team7GF').innerHTML = team7[3];
	document.getElementById('team7GA').innerHTML = team7[4];
	document.getElementById('team7W').innerHTML = team7[5];
	document.getElementById('team7D').innerHTML = team7[6];
	document.getElementById('team7L').innerHTML = team7[7];
	document.getElementById('team7P').innerHTML = team7[8];
	
	}
	else if (A.includes("team5") && B.includes("team8")) {
	// PTS
	team8[1] += 3; 
	
	// GF and GA
	team5[3] += parseInt(s1); team5[4] += parseInt(s2);
	team8[3] += parseInt(s2);	team8[4] += parseInt(s1);
	
	 // GD  
	team5[2] = team5[3] - team5[4];
	team8[2] = team8[3] - team8[4];

	// Wins(5) . Draws . Losses(7)
	team8[5] += 1;
	team5[7] += 1;

	// Played(8)
	team5[8] += 1;
	team8[8] += 1;
	
	// display
	document.getElementById('team5Pts').innerHTML = team5[1];
	document.getElementById('team5GD').innerHTML = team5[2];
	document.getElementById('team5GF').innerHTML = team5[3];
	document.getElementById('team5GA').innerHTML = team5[4];
	document.getElementById('team5W').innerHTML = team5[5];
	document.getElementById('team5D').innerHTML = team5[6];
	document.getElementById('team5L').innerHTML = team5[7];
	document.getElementById('team5P').innerHTML = team5[8];
	document.getElementById('team8Pts').innerHTML = team8[1];
	document.getElementById('team8GD').innerHTML = team8[2];
	document.getElementById('team8GF').innerHTML = team8[3];
	document.getElementById('team8GA').innerHTML = team8[4];
	document.getElementById('team8W').innerHTML = team8[5];
	document.getElementById('team8D').innerHTML = team8[6];
	document.getElementById('team8L').innerHTML = team8[7];
	document.getElementById('team8P').innerHTML = team8[8];
	
	}
	else if (A.includes("team6") && B.includes("team7")) {
	// PTS
	team7[1] += 3; 
	
	// GF and GA
	team6[3] += parseInt(s1); team6[4] += parseInt(s2);
	team7[3] += parseInt(s2);	team7[4] += parseInt(s1);
	
	 // GD  
	team6[2] = team6[3] - team6[4];
	team7[2] = team7[3] - team7[4];

	// Wins(5) . Draws . Losses(7)
	team7[5] += 1;
	team6[7] += 1;

	// Played(8)
	team6[8] += 1;
	team7[8] += 1;
	
	// display
	document.getElementById('team6Pts').innerHTML = team6[1];
	document.getElementById('team6GD').innerHTML = team6[2];
	document.getElementById('team6GF').innerHTML = team6[3];
	document.getElementById('team6GA').innerHTML = team6[4];
	document.getElementById('team6W').innerHTML = team6[5];
	document.getElementById('team6D').innerHTML = team6[6];
	document.getElementById('team6L').innerHTML = team6[7];
	document.getElementById('team6P').innerHTML = team6[8];
	document.getElementById('team7Pts').innerHTML = team7[1];
	document.getElementById('team7GD').innerHTML = team7[2];
	document.getElementById('team7GF').innerHTML = team7[3];
	document.getElementById('team7GA').innerHTML = team7[4];
	document.getElementById('team7W').innerHTML = team7[5];
	document.getElementById('team7D').innerHTML = team7[6];
	document.getElementById('team7L').innerHTML = team7[7];
	document.getElementById('team7P').innerHTML = team7[8];
	
	}
	else if (A.includes("team6") && B.includes("team8")) {
	// PTS
	team8[1] += 3; 
	
	// GF and GA
	team6[3] += parseInt(s1); team6[4] += parseInt(s2);
	team8[3] += parseInt(s2);	team8[4] += parseInt(s1);
	
	 // GD  
	team6[2] = team6[3] - team6[4];
	team8[2] = team8[3] - team8[4];

	// Wins(5) . Draws . Losses(7)
	team8[5] += 1;
	team6[7] += 1;

	// Played(8)
	team8[8] += 1;
	team6[8] += 1;
	
	// display
	document.getElementById('team6Pts').innerHTML = team6[1];
	document.getElementById('team6GD').innerHTML = team6[2];
	document.getElementById('team6GF').innerHTML = team6[3];
	document.getElementById('team6GA').innerHTML = team6[4];
	document.getElementById('team6W').innerHTML = team6[5];
	document.getElementById('team6D').innerHTML = team6[6];
	document.getElementById('team6L').innerHTML = team6[7];
	document.getElementById('team6P').innerHTML = team6[8];
	document.getElementById('team8Pts').innerHTML = team8[1];
	document.getElementById('team8GD').innerHTML = team8[2];
	document.getElementById('team8GF').innerHTML = team8[3];
	document.getElementById('team8GA').innerHTML = team8[4];
	document.getElementById('team8W').innerHTML = team8[5];
	document.getElementById('team8D').innerHTML = team8[6];
	document.getElementById('team8L').innerHTML = team8[7];
	document.getElementById('team8P').innerHTML = team8[8];
	
	}
	else if (A.includes("team7") && B.includes("team8")) {
	// PTS
	team8[1] += 3; 
	
	// GF and GA
	team7[3] += parseInt(s1); team7[4] += parseInt(s2);
	team8[3] += parseInt(s2);	team8[4] += parseInt(s1);
	
	 // GD  
	team7[2] = team7[3] - team7[4];
	team8[2] = team8[3] - team8[4];
	
	// Wins(5) . Draws . Losses(7)
	team8[5] += 1;
	team7[7] += 1;

	// Played(8)
	team7[8] += 1;
	team8[8] += 1;
	
	// display
	document.getElementById('team7Pts').innerHTML = team7[1];
	document.getElementById('team7GD').innerHTML = team7[2];
	document.getElementById('team7GF').innerHTML = team7[3];
	document.getElementById('team7GA').innerHTML = team7[4];
	document.getElementById('team7W').innerHTML = team7[5];
	document.getElementById('team7D').innerHTML = team7[6];
	document.getElementById('team7L').innerHTML = team7[7];
	document.getElementById('team7P').innerHTML = team7[8];
	document.getElementById('team8Pts').innerHTML = team8[1];
	document.getElementById('team8GD').innerHTML = team8[2];
	document.getElementById('team8GF').innerHTML = team8[3];
	document.getElementById('team8GA').innerHTML = team8[4];
	document.getElementById('team8W').innerHTML = team8[5];
	document.getElementById('team8D').innerHTML = team8[6];
	document.getElementById('team8L').innerHTML = team8[7];
	document.getElementById('team8P').innerHTML = team8[8];
	
	}
		else {
			console.log('something didnt work');
		}
	}
	
	function compileNumbersIfTie(A,B,s1,s2) {
		if (A.includes("team1") && B.includes("team2")) {
	
			// PTS
			team1[1] += 1;
			team2[1] += 1; 
	
			// GF and GA
			team1[3] += parseInt(s1); team1[4] += parseInt(s2);
			team2[3] += parseInt(s2);	team2[4] += parseInt(s1);
	
			 // GD  
			team1[2] = team1[3] - team1[4];
			team2[2] = team2[3] - team2[4];

			// Wins(5) . Draws(6) . Losses(7)
			team2[6] += 1;
			team1[6] += 1;

			// Played(8)
			team1[8] += 1;
			team2[8] += 1;
	
			// display
			document.getElementById('team1Pts').innerHTML = team1[1];
			document.getElementById('team1GD').innerHTML = team1[2];
			document.getElementById('team1GF').innerHTML = team1[3];
			document.getElementById('team1GA').innerHTML = team1[4];
			document.getElementById('team1W').innerHTML = team1[5];
			document.getElementById('team1D').innerHTML = team1[6];
			document.getElementById('team1L').innerHTML = team1[7];
			document.getElementById('team1P').innerHTML = team1[8];
			document.getElementById('team2Pts').innerHTML = team2[1];
			document.getElementById('team2GD').innerHTML = team2[2];
			document.getElementById('team2GF').innerHTML = team2[3];
			document.getElementById('team2GA').innerHTML = team2[4];
			document.getElementById('team2W').innerHTML = team2[5];
			document.getElementById('team2D').innerHTML = team2[6];
			document.getElementById('team2L').innerHTML = team2[7];
			document.getElementById('team2P').innerHTML = team2[8];
		}
		else if (A.includes("team1") && B.includes("team3")) {
			// PTS
			team1[1] += 1; 
			team3[1] += 1; 
	
			// GF and GA
			team1[3] += parseInt(s1); team1[4] += parseInt(s2);
			team3[3] += parseInt(s2);	team3[4] += parseInt(s1);
	
			 // GD  
			team1[2] = team1[3] - team1[4];
			team3[2] = team3[3] - team3[4];

			// Wins(5) . Draws(6) . Losses(7)
			team3[6] += 1;
			team1[6] += 1;

			// Played(8)
			team1[8] += 1;
			team3[8] += 1;
	
			// display
			document.getElementById('team1Pts').innerHTML = team1[1];
			document.getElementById('team1GD').innerHTML = team1[2];
			document.getElementById('team1GF').innerHTML = team1[3];
			document.getElementById('team1GA').innerHTML = team1[4];
			document.getElementById('team1W').innerHTML = team1[5];
			document.getElementById('team1D').innerHTML = team1[6];
			document.getElementById('team1L').innerHTML = team1[7];
			document.getElementById('team1P').innerHTML = team1[8];
			document.getElementById('team3Pts').innerHTML = team3[1];
			document.getElementById('team3GD').innerHTML = team3[2];
			document.getElementById('team3GF').innerHTML = team3[3];
			document.getElementById('team3GA').innerHTML = team3[4];
			document.getElementById('team3W').innerHTML = team3[5];
			document.getElementById('team3D').innerHTML = team3[6];
			document.getElementById('team3L').innerHTML = team3[7];
			document.getElementById('team3P').innerHTML = team3[8];
	
		}
		else if (A.includes("team1") && B.includes("team4")) {
			// PTS
			team1[1] += 1; 
			team4[1] += 1; 
	
			// GF and GA
			team1[3] += parseInt(s1); team1[4] += parseInt(s2);
			team4[3] += parseInt(s2);	team4[4] += parseInt(s1);
	
			 // GD  
			team1[2] = team1[3] - team1[4];
			team4[2] = team4[3] - team4[4];

			// Wins(5) . Draws(6) . Losses(7)
			team4[6] += 1;
			team1[6] += 1;

			// Played(8)
			team1[8] += 1;
			team4[8] += 1;
	
			// display
			document.getElementById('team1Pts').innerHTML = team1[1];
			document.getElementById('team1GD').innerHTML = team1[2];
			document.getElementById('team1GF').innerHTML = team1[3];
			document.getElementById('team1GA').innerHTML = team1[4];
			document.getElementById('team1W').innerHTML = team1[5];
			document.getElementById('team1D').innerHTML = team1[6];
			document.getElementById('team1L').innerHTML = team1[7];
			document.getElementById('team1P').innerHTML = team1[8];
			document.getElementById('team4Pts').innerHTML = team4[1];
			document.getElementById('team4GD').innerHTML = team4[2];
			document.getElementById('team4GF').innerHTML = team4[3];
			document.getElementById('team4GA').innerHTML = team4[4];
			document.getElementById('team4W').innerHTML = team4[5];
			document.getElementById('team4D').innerHTML = team4[6];
			document.getElementById('team4L').innerHTML = team4[7];
			document.getElementById('team4P').innerHTML = team4[8];
	
		}
		else if (A.includes("team2") && B.includes("team3")) {
			// PTS
			team2[1] += 1; 
			team3[1] += 1; 
	
			// GF and GA
			team2[3] += parseInt(s1); team2[4] += parseInt(s2);
			team3[3] += parseInt(s2);	team3[4] += parseInt(s1);
	
			 // GD  
			team2[2] = team2[3] - team2[4];
			team3[2] = team3[3] - team3[4];

			// Wins(5) . Draws(6) . Losses(7)
			team2[6] += 1;
			team3[6] += 1;

			// Played(8)
			team3[8] += 1;
			team2[8] += 1;
	
			// display
			document.getElementById('team2Pts').innerHTML = team2[1];
			document.getElementById('team2GD').innerHTML = team2[2];
			document.getElementById('team2GF').innerHTML = team2[3];
			document.getElementById('team2GA').innerHTML = team2[4];
			document.getElementById('team2W').innerHTML = team2[5];
			document.getElementById('team2D').innerHTML = team2[6];
			document.getElementById('team2L').innerHTML = team2[7];
			document.getElementById('team2P').innerHTML = team2[8];
			document.getElementById('team3Pts').innerHTML = team3[1];
			document.getElementById('team3GD').innerHTML = team3[2];
			document.getElementById('team3GF').innerHTML = team3[3];
			document.getElementById('team3GA').innerHTML = team3[4];
			document.getElementById('team3W').innerHTML = team3[5];
			document.getElementById('team3D').innerHTML = team3[6];
			document.getElementById('team3L').innerHTML = team3[7];
			document.getElementById('team3P').innerHTML = team3[8];
	
		}
		else if (A.includes("team2") && B.includes("team4")) {
			// PTS
			team2[1] += 1; 
			team4[1] += 1; 
	
			// GF and GA
			team2[3] += parseInt(s1); team2[4] += parseInt(s2);
			team4[3] += parseInt(s2);	team4[4] += parseInt(s1);
	
			 // GD  
			team2[2] = team2[3] - team2[4];
			team4[2] = team4[3] - team4[4];

			// Wins(5) . Draws(6) . Losses(7)
			team2[6] += 1;
			team4[6] += 1;

			// Played(8)
			team4[8] += 1;
			team2[8] += 1;
	
			// display
			document.getElementById('team2Pts').innerHTML = team2[1];
			document.getElementById('team2GD').innerHTML = team2[2];
			document.getElementById('team2GF').innerHTML = team2[3];
			document.getElementById('team2GA').innerHTML = team2[4];
			document.getElementById('team2W').innerHTML = team2[5];
			document.getElementById('team2D').innerHTML = team2[6];
			document.getElementById('team2L').innerHTML = team2[7];
			document.getElementById('team2P').innerHTML = team2[8];
			document.getElementById('team4Pts').innerHTML = team4[1];
			document.getElementById('team4GD').innerHTML = team4[2];
			document.getElementById('team4GF').innerHTML = team4[3];
			document.getElementById('team4GA').innerHTML = team4[4];
			document.getElementById('team4W').innerHTML = team4[5];
			document.getElementById('team4D').innerHTML = team4[6];
			document.getElementById('team4L').innerHTML = team4[7];
			document.getElementById('team4P').innerHTML = team4[8];
	
		}
		else if (A.includes("team3") && B.includes("team4")) {
			// PTS
			team3[1] += 1; 
			team4[1] += 1; 
	
			// GF and GA
			team3[3] += parseInt(s1); team3[4] += parseInt(s2);
			team4[3] += parseInt(s2);	team4[4] += parseInt(s1);
	
			 // GD  
			team3[2] = team3[3] - team3[4];
			team4[2] = team4[3] - team4[4];

			// Wins(5) . Draws(6) . Losses(7)
			team3[6] += 1;
			team4[6] += 1;

			// Played(8)
			team3[8] += 1;
			team4[8] += 1;
	
			// display
			document.getElementById('team3Pts').innerHTML = team3[1];
			document.getElementById('team3GD').innerHTML = team3[2];
			document.getElementById('team3GF').innerHTML = team3[3];
			document.getElementById('team3GA').innerHTML = team3[4];
			document.getElementById('team3W').innerHTML = team3[5];
			document.getElementById('team3D').innerHTML = team3[6];
			document.getElementById('team3L').innerHTML = team3[7];
			document.getElementById('team3P').innerHTML = team3[8];
			document.getElementById('team4Pts').innerHTML = team4[1];
			document.getElementById('team4GD').innerHTML = team4[2];
			document.getElementById('team4GF').innerHTML = team4[3];
			document.getElementById('team4GA').innerHTML = team4[4];
			document.getElementById('team4W').innerHTML = team4[5];
			document.getElementById('team4D').innerHTML = team4[6];
			document.getElementById('team4L').innerHTML = team4[7];
			document.getElementById('team4P').innerHTML = team4[8];
	
		}
		else if (A.includes("team5") && B.includes("team6")) {
	
			// PTS
			team5[1] += 1; 
			team6[1] += 1; 
			
			// GF and GA
			team5[3] += parseInt(s1); team5[4] += parseInt(s2);
			team6[3] += parseInt(s2);	team6[4] += parseInt(s1);
			
			// GD  
			team5[2] = team5[3] - team5[4];
			team6[2] = team6[3] - team6[4];

			// Wins(5) . Draws(6) . Losses(7)
			team5[6] += 1;
			team6[6] += 1;

			// Played(8)
			team5[8] += 1;
			team6[8] += 1;
			
			// display
			document.getElementById('team5Pts').innerHTML = team5[1];
			document.getElementById('team5GD').innerHTML = team5[2];
			document.getElementById('team5GF').innerHTML = team5[3];
			document.getElementById('team5GA').innerHTML = team5[4];
			document.getElementById('team5W').innerHTML = team5[5];
			document.getElementById('team5D').innerHTML = team5[6];
			document.getElementById('team5L').innerHTML = team5[7];
			document.getElementById('team5P').innerHTML = team5[8];
			document.getElementById('team6Pts').innerHTML = team6[1];
			document.getElementById('team6GD').innerHTML = team6[2];
			document.getElementById('team6GF').innerHTML = team6[3];
			document.getElementById('team6GA').innerHTML = team6[4];
			document.getElementById('team6W').innerHTML = team6[5];
			document.getElementById('team6D').innerHTML = team6[6];
			document.getElementById('team6L').innerHTML = team6[7];
			document.getElementById('team6P').innerHTML = team6[8];
			}
			else if (A.includes("team5") && B.includes("team7")) {
			// PTS
			team5[1] += 1; 
			team7[1] += 1;  
			
			// GF and GA
			team5[3] += parseInt(s1); team5[4] += parseInt(s2);
			team7[3] += parseInt(s2);	team7[4] += parseInt(s1);
			
			// GD  
			team5[2] = team5[3] - team5[4];
			team7[2] = team7[3] - team7[4];

			// Wins(5) . Draws(6) . Losses(7)
			team5[6] += 1;
			team7[6] += 1;

			// Played(8)
			team5[8] += 1;
			team7[8] += 1;
			
			// display
			document.getElementById('team5Pts').innerHTML = team5[1];
			document.getElementById('team5GD').innerHTML = team5[2];
			document.getElementById('team5GF').innerHTML = team5[3];
			document.getElementById('team5GA').innerHTML = team5[4];
			document.getElementById('team5W').innerHTML = team5[5];
			document.getElementById('team5D').innerHTML = team5[6];
			document.getElementById('team5L').innerHTML = team5[7];
			document.getElementById('team5P').innerHTML = team5[8];
			document.getElementById('team7Pts').innerHTML = team7[1];
			document.getElementById('team7GD').innerHTML = team7[2];
			document.getElementById('team7GF').innerHTML = team7[3];
			document.getElementById('team7GA').innerHTML = team7[4];
			document.getElementById('team7W').innerHTML = team7[5];
			document.getElementById('team7D').innerHTML = team7[6];
			document.getElementById('team7L').innerHTML = team7[7];
			document.getElementById('team7P').innerHTML = team7[8];
			
			}
			else if (A.includes("team5") && B.includes("team8")) {
			// PTS
			team5[1] += 1; 
			team8[1] += 1; 
			
			// GF and GA
			team5[3] += parseInt(s1); team5[4] += parseInt(s2);
			team8[3] += parseInt(s2);	team8[4] += parseInt(s1);
			
			// GD  
			team5[2] = team5[3] - team5[4];
			team8[2] = team8[3] - team8[4];

			// Wins(5) . Draws(6) . Losses(7)
			team5[6] += 1;
			team8[6] += 1;

			// Played(8)
			team5[8] += 1;
			team8[8] += 1;
			
			// display
			document.getElementById('team5Pts').innerHTML = team5[1];
			document.getElementById('team5GD').innerHTML = team5[2];
			document.getElementById('team5GF').innerHTML = team5[3];
			document.getElementById('team5GA').innerHTML = team5[4];
			document.getElementById('team5W').innerHTML = team5[5];
			document.getElementById('team5D').innerHTML = team5[6];
			document.getElementById('team5L').innerHTML = team5[7];
			document.getElementById('team5P').innerHTML = team5[8];
			document.getElementById('team8Pts').innerHTML = team8[1];
			document.getElementById('team8GD').innerHTML = team8[2];
			document.getElementById('team8GF').innerHTML = team8[3];
			document.getElementById('team8GA').innerHTML = team8[4];
			document.getElementById('team8W').innerHTML = team8[5];
			document.getElementById('team8D').innerHTML = team8[6];
			document.getElementById('team8L').innerHTML = team8[7];
			document.getElementById('team8P').innerHTML = team8[8];
			
			}
			else if (A.includes("team6") && B.includes("team7")) {
			// PTS
			team6[1] += 1; 
			team7[1] += 1; 
			
			// GF and GA
			team6[3] += parseInt(s1); team6[4] += parseInt(s2);
			team7[3] += parseInt(s2);	team7[4] += parseInt(s1);
			
			// GD  
			team6[2] = team6[3] - team6[4];
			team7[2] = team7[3] - team7[4];

			// Wins(5) . Draws(6) . Losses(7)
			team6[6] += 1;
			team7[6] += 1;

			// Played(8)
			team6[8] += 1;
			team7[8] += 1;
			
			// display
			document.getElementById('team6Pts').innerHTML = team6[1];
			document.getElementById('team6GD').innerHTML = team6[2];
			document.getElementById('team6GF').innerHTML = team6[3];
			document.getElementById('team6GA').innerHTML = team6[4];
			document.getElementById('team6W').innerHTML = team6[5];
			document.getElementById('team6D').innerHTML = team6[6];
			document.getElementById('team6L').innerHTML = team6[7];
			document.getElementById('team6P').innerHTML = team6[8];
			document.getElementById('team7Pts').innerHTML = team7[1];
			document.getElementById('team7GD').innerHTML = team7[2];
			document.getElementById('team7GF').innerHTML = team7[3];
			document.getElementById('team7GA').innerHTML = team7[4];
			document.getElementById('team7W').innerHTML = team7[5];
			document.getElementById('team7D').innerHTML = team7[6];
			document.getElementById('team7L').innerHTML = team7[7];
			document.getElementById('team7P').innerHTML = team7[8];
			
			}
			else if (A.includes("team6") && B.includes("team8")) {
			// PTS
			team6[1] += 1; 
			team8[1] += 1; 
			
			// GF and GA
			team6[3] += parseInt(s1); team6[4] += parseInt(s2);
			team8[3] += parseInt(s2);	team8[4] += parseInt(s1);
			
			// GD  
			team6[2] = team6[3] - team6[4];
			team8[2] = team8[3] - team8[4];

			// Wins(5) . Draws(6) . Losses(7)
			team6[6] += 1;
			team8[6] += 1;

			// Played(8)
			team6[8] += 1;
			team8[8] += 1;
			
			// display
			document.getElementById('team6Pts').innerHTML = team6[1];
			document.getElementById('team6GD').innerHTML = team6[2];
			document.getElementById('team6GF').innerHTML = team6[3];
			document.getElementById('team6GA').innerHTML = team6[4];
			document.getElementById('team6W').innerHTML = team6[5];
			document.getElementById('team6D').innerHTML = team6[6];
			document.getElementById('team6L').innerHTML = team6[7];
			document.getElementById('team6P').innerHTML = team6[8];
			document.getElementById('team8Pts').innerHTML = team8[1];
			document.getElementById('team8GD').innerHTML = team8[2];
			document.getElementById('team8GF').innerHTML = team8[3];
			document.getElementById('team8GA').innerHTML = team8[4];
			document.getElementById('team8W').innerHTML = team8[5];
			document.getElementById('team8D').innerHTML = team8[6];
			document.getElementById('team8L').innerHTML = team8[7];
			document.getElementById('team8P').innerHTML = team8[8];
			
			}
			else if (A.includes("team7") && B.includes("team8")) {
			// PTS
			team7[1] += 1; 
			team8[1] += 1; 
			
			// GF and GA
			team7[3] += parseInt(s1); team7[4] += parseInt(s2);
			team8[3] += parseInt(s2);	team8[4] += parseInt(s1);
			
			// GD  
			team7[2] = team7[3] - team7[4];
			team8[2] = team8[3] - team8[4];

			// Wins(5) . Draws(6) . Losses(7)
			team7[6] += 1;
			team8[6] += 1;

			// Played(8)
			team7[8] += 1;
			team8[8] += 1;
			
			// display
			document.getElementById('team7Pts').innerHTML = team7[1];
			document.getElementById('team7GD').innerHTML = team7[2];
			document.getElementById('team7GF').innerHTML = team7[3];
			document.getElementById('team7GA').innerHTML = team7[4];
			document.getElementById('team7W').innerHTML = team7[5];
			document.getElementById('team7D').innerHTML = team7[6];
			document.getElementById('team7L').innerHTML = team7[7];
			document.getElementById('team7P').innerHTML = team7[8];
			document.getElementById('team8Pts').innerHTML = team8[1];
			document.getElementById('team8GD').innerHTML = team8[2];
			document.getElementById('team8GF').innerHTML = team8[3];
			document.getElementById('team8GA').innerHTML = team8[4];
			document.getElementById('team8W').innerHTML = team8[5];
			document.getElementById('team8D').innerHTML = team8[6];
			document.getElementById('team8L').innerHTML = team8[7];
			document.getElementById('team8P').innerHTML = team8[8];
			
	}
		else {
			console.log('something didnt work');
		}
	}
	
	
	// make UPLOAD button disappear
	function disappear1() {
		document.getElementById("submit1").style.visibility = "hidden";
	}
	function disappear2() {
		document.getElementById("submit2").style.visibility = "hidden";
	}
	function disappear3() {
		document.getElementById("submit3").style.visibility = "hidden";
	}
	function disappear4() {
		document.getElementById("submit4").style.visibility = "hidden";
	}
	function disappear5() {
		document.getElementById("submit5").style.visibility = "hidden";
	}
	function disappear6() {
		document.getElementById("submit6").style.visibility = "hidden";
	}
	function disappear7() {
		document.getElementById("submit7").style.visibility = "hidden";
	}
	function disappear8() {
		document.getElementById("submit8").style.visibility = "hidden";
	}
	function disappear9() {
		document.getElementById("submit9").style.visibility = "hidden";
	}
	function disappear10() {
		document.getElementById("submit10").style.visibility = "hidden";
	}
	function disappear11() {
		document.getElementById("submit11").style.visibility = "hidden";
	}
	function disappear12() {
		document.getElementById("submit12").style.visibility = "hidden";
	}
	

	let sortPts = function () {

        let table, bodyRows;
        switch (this.className) {
            case 'classA':
                bodyRows = standings.lastElementChild.children;
                table = standings;
                break;
            case 'classB':
                bodyRows = standings2.lastElementChild.children;
                table = standings2;
				break;
		}
        let arr = Array.from(bodyRows);
        arr.sort((A, B) => {
            A = A.cells[1].firstChild.data;
            B = B.cells[1].firstChild.data;
            return Number(B) - Number(A);
        });

        let n = 1;
        sortRepeats(arr, n);
		newRows = arr; 
		body = document.createElement('tbody');
		body.append(...newRows); 
		table.append(body);
	}

	function sortRepeats(arr, n) {
		const len = arr.length - 1;
		outer: while (n < 4) {
			for (let i = 0; i < len; i++) {
				if (arr[i].cells[n].firstChild.data == arr[i+1].cells[n].firstChild.data) {
					repeats = arr.splice(i, 2);
					repeats.sort((a, b) => {
					const A = a.cells[n+1].firstChild.data;
					const B = b.cells[n+1].firstChild.data
					if (a.cells[n+1].id.endsWith("GA")) return Number(A) - Number(B);
					return Number(B) - Number(A);
					});
					arr.splice(i, 0, ...repeats);
				} else if (n == 1 && i == len - 1) break outer;
		    }
        	n++;
        }
	}

    const buttons = document.getElementsByTagName("button");


	for (let button of buttons) {
		if (button.type == 'submit') {
			if (button.firstChild.data == 'A') button.classList.add('classA'); 
			if (button.firstChild.data == 'B') button.classList.add('classB');
		}
		button.addEventListener('click', function () {
			setTimeout(() => sortPts.call(this), 1000);
		});
		button.addEventListener('keydown', function (e) {
			if (e.code != "Enter") return;
			setTimeout(() => sortPts.call(this), 1000);
		});
	}

    

