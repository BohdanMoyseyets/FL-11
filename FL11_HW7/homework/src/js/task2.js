const kst_attempts = 3, incriace_range = 4, coef_prize = 2;
let changing_coef_prize = 2, attempt = 3, prize = 0, start_bank = 100, 
present_bank = 100, range_min_number = 0, start_range_max_number = 8, range_max_number = 8;
let start = confirm('Do you want to play a game?');

if(start){
	while (start) {
		const random_number = Math.floor(Math.random() * (range_max_number + 1 - range_min_number) + range_min_number);
		for (let i = 0; i < kst_attempts; i++) {
			let input_number = +prompt('Choose a roulette pocket number from ' + range_min_number + ' to ' 
			+ range_max_number + '\nAttempts left: ' + attempt + '\nTotal prize: ' + prize 
			+ '$ \nPossible prize on current attempt: ' + present_bank + '$');
			if (input_number === random_number) {
				prize += present_bank;
				start = confirm('Congratulation, you won!   Your prize is: ' + prize + '$. Do you want to continue?');
				if (start) {
					range_max_number += incriace_range;
					present_bank = start_bank * changing_coef_prize;
					attempt = kst_attempts;
					changing_coef_prize *= coef_prize;
					} else {
						alert('Thank you for your participation. Your prize is: ' + prize + '$');
						attempt = kst_attempts;
						prize = 0;
						present_bank = start_bank;
						range_max_number = start_range_max_number;
						start = confirm('Do you want to play again?');
						}
				break;
			}
			attempt--;
			present_bank = present_bank / coef_prize;
		}
		if (attempt === 0) {
			alert('Thank you for your participation. Your prize is: ' + prize + '$');
			changing_coef_prize = coef_prize;
			attempt = kst_attempts;
			prize = 0;
			present_bank = start_bank;
			range_max_number = start_range_max_number;
			start = confirm('Do you want to play again?');
		}
	}
}else {
    alert('You did not become a billionaire, but can.');
}