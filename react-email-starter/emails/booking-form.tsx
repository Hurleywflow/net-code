import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Preview,
	Row,
	Section,
	Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
interface ContactFormProps {
	username?: string;
	email?: string;
	phone?: string;
	services?: string;
	note?: string;
}
const ContactForm = ({
	username,
	email,
	phone,
	services,
	note,
}: ContactFormProps) => {
	return (
		<Html>
			<Head />
			<Preview>New message from NetCode</Preview>
			<Tailwind>
				<Body className='bg-slate-100 text-black'>
					<Container>
						<Section className='borderBlack my-10 rounded-md bg-slate-200 px-10 py-4 text-slate-950'>
							<Row>
								<Heading className='leading-tight'>
									You received the booking for NetCode.
								</Heading>
							</Row>
							<Hr />
							<Row>
								<Text>UserName: {username}</Text>
								<Text>Email: {email}</Text>
								<Text>PhoneNumber: {phone}</Text>
								<Text>Services: {services}</Text>
								<Text>MoreEnquires: {note}</Text>
							</Row>
							<Hr />
							<Text>The sender's email is: {email}</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};
export default ContactForm;
