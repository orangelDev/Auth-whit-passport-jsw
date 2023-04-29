const bcrypt = require('bcrypt');

async function verifyPassword() {
	const myPassword = 'admin 123 .202';
    const hash = '$2b$10$9.2qAZ35NiXJRfVWwrEmg.FAWlpnSqYUb4GZpxFY8MwyCs.K1QLS.'
	const isMatch = await bcrypt.compare(myPassword, hash);
	console.log(isMatch)
}

verifyPassword();