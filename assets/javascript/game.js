

	var wins = 0;
	var losses = 0;
  	var total = 0;
  	var max = 12;
  	var min = 1;

  	var targetNumber = Math.floor(Math.random()*100);

  	var images = ['assets/images/multicolorCrystal.jpg', 'assets/images/pinkCrystal.jpg', 
  	'assets/images/diamondCrystal.jpg', 'assets/images/bleedingCrystal.png'];

  		for (var i = 0 ; i < images.length; i++){
  			var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  			var image = $("<img>")
  				.attr('class', 'crystal')
  				.attr('width', 240)
  				.attr('height', 240)
  				.attr('src', images[i])
  				.attr('data-randnum', randomNumber)
  				.appendTo('#image-' + i);
  		}

  	//calling jQuery to store the integer scoring values of each item
  	$(document).ready(function(){
		$('#numberToGuess').text(targetNumber);
		$('#overallScore').text(total);
		$('#losses').text(losses);
		$('#wins').text(wins)
	});

  		$(document).on('click', '.crystal', function(){
  			var id = ($(this).attr('data-randnum'));
  			total(parseInt('id'));
  			console.log(total);
  			$('#overallScore').text(total);
			// if ($(this).attr('id') === "image-0"){
			// 	console.log('hey');
			// 	// total += crystal1;
			// }
			// else if ('#secondImage'){
			// 	total += crystal2;
			// }
			// else if ('#thirdImage'){
			// 	total += crystal3;
			// }
			// else if ('#fourthImage'){
			// 	total += crystal4;
			// }	
			// win();
			// return total;
		});
  				
		function win(){
			if (total > targetNumber){
				losses += losses;
				$("#numberToGuess").html("You Lose!");
				return losses;
				reset();
			}
			else if (total === targetNumber){
				wins += wins;
				console.log("You win!");
				return wins;
			}
		function reset(){
			wins = 0;
			losses = 0;
 			total = 0;
  			max = 12;
  			min = 1;
		}
		
	}
		// reset();

