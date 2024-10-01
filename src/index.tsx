import { Resend } from 'resend';
import { EmailTemplate } from './emails/email-template';

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const resend = new Resend('re_R5zCxn2E_NfkyuvzRNtiLBv6n15MKYBvK' /* env.RESEND_API_KEY */);

		const { firstName, lastName, phoneNumber } = request.body;

		const data = await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'sales@sierrablancaestates.com',
			subject: 'Dolce Gabanna contact!',
			react: <EmailTemplate firstName={firstName} lastName={lastName} phoneNumber={phoneNumber} />,
		});

		return new Response(JSON.stringify(data), {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	},
};
