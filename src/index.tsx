import { Resend } from 'resend';
import { EmailTemplate } from './emails/email-template';

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const resend = new Resend('re_R5zCxn2E_NfkyuvzRNtiLBv6n15MKYBvK' /* env.RESEND_API_KEY */);

		const url = new URL(request.url);

		const data = await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'sales@sierrablancaestates.com',
			subject: 'Dolce Gabanna contact!',
			react: (
				<EmailTemplate
					firstName={url.searchParams.get('firstName')}
					lastName={url.searchParams.get('lastName')}
					phoneNumber={url.searchParams.get('phoneNumber')}
					email={url.searchParams.get('email')}
				/>
			),
		});

		return new Response(JSON.stringify(data), {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	},
};
