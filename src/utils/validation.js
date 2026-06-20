const validators = {
	email: {
		emailRex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
		emailErrMessage: 'Invaliad Mail Id',
	},
	password: {
		passwordRex:
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
		passwordErrMessage: 'Invalid Password',
	},
};

export const checkValidation = (email, password) => {
	const errMessages = [];

	if (!validators.email.emailRex.test(email))
		errMessages.push(validators.email.emailErrMessage);
	if (!validators.password.passwordRex.test(password))
		errMessages.push(validators.password.passwordErrMessage);

	return errMessages.length ? errMessages : null;
};
