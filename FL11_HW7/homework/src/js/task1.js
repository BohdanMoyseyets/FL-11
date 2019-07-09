const mail_length = 6, password_length = 5;
let mail = prompt('Enter your e-mail:','');

if (mail === '' || mail === null) {
    alert('Canceled');
} else if (mail.length < mail_length) {
    alert('I don’t know any emails having name length less than 6 symbols');
} else if (mail === 'user@gmail.com' || mail === 'admin@gmail.com') {
    let password = prompt('Enter your password:','');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (mail === 'user@gmail.com' && password === 'UserPass' || 
   mail === 'admin@gmail.com' && password === 'AdminPass') {
        let massage = confirm('Do you want to change your password?');
        if (massage) {
            let password_old = prompt('Your old password:','');
            if (password_old === '' || password_old === null) {
                alert('Canceled');
            } else if (password_old === password) {
                let password_new = prompt('Enter new password:');
                if (password_new.length < password_length) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let password_new_repeat = prompt('Please enter news password again:');
                    if (password_new_repeat === password_new) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}