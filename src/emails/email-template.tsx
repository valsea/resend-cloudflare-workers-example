import * as React from 'react';

interface EmailTemplateProps {
	firstName?: string | null;
	lastName?: string | null;
	phoneNumber?: string | null;
	email?: string | null;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName, lastName, phoneNumber, email }) => (
	<div>
		<h1>Dolce Gabanna contact</h1>
		<p>Firstname: {firstName}</p>
		<p>Lastname: {lastName}</p>
		<p>Email: {email}</p>
		<p>Phone number: {phoneNumber}</p>
	</div>
);

export default EmailTemplate;
