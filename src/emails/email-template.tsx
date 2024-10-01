import * as React from 'react';

interface EmailTemplateProps {
	firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName, lastName, phoneNumber }) => (
	<div>
		<h1>Dolce Gabanna contact!</h1>
		<span>Firstname: {firstName}</span>
		<span>Lastname: {lastName}</span>
		<span>Phone number: {phoneNumber}</span>
	</div>
);

export default EmailTemplate;
