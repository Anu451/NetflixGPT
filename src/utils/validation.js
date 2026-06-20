const passwordRules = [
	{
		regex: /.{8,}/,
		message: 'Password must be at least 8 characters long',
	},
	{
		regex: /[A-Z]/,
		message: 'Password must contain at least one uppercase letter',
	},
	{
		regex: /[a-z]/,
		message: 'Password must contain at least one lowercase letter',
	},
	{
		regex: /\d/,
		message: 'Password must contain at least one number',
	},
	{
		regex: /[@$!%*?&]/,
		message: 'Password must contain at least one special character',
	},
];

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
	passwordRules.forEach(({ regex, message }) => {
		if (!regex.test(password)) {
			errMessages.push(message);
		}
	});

	return errMessages.length ? errMessages : null;
};
