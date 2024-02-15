import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export function QuestionAnswers() {
	return (
		<section className='mx-auto mb-36 mt-10 w-full max-w-screen-lg px-8 text-base font-normal text-neutral-100'>
			<Accordion type='single' collapsible className='w-full'>
				<AccordionItem value='item-1'>
					<AccordionTrigger>
						What does it take for a web project to succeed?
					</AccordionTrigger>
					<AccordionContent>
						To succeed in a web project, you need a good project strategy,
						management, design and development, online marketing, and continuous
						improvement. Simply creating a website is not enough. At NetCode, we
						focus on user-friendly design and the latest technologies to improve
						search engine rankings and achieve better business outcomes.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-2'>
					<AccordionTrigger>
						How to prepare before partnering with a web developer?
					</AccordionTrigger>
					<AccordionContent>
						To partner with a web developer, you need to have a clear
						idea of your project, choose the web technologies you want to
						implement, and consider your budget.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-3'>
					<AccordionTrigger>
						How long does a web development project take to complete from start
						to finish?
					</AccordionTrigger>
					<AccordionContent>
						“How long will it take to complete a web development project from
						start to finish?” is a common question, and the answer is that it
						depends on various factors. The time taken to complete a project
						depends on the complexity and type of website that you want to
						create. Typically, a project can take one to four months to
						complete, but the timeframe can vary depending on your specific
						project requirements. If you need more precise information about
						your project, feel free to contact us.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-4'>
					<AccordionTrigger>
						Do you follow web standards and best practices for coding and
						development?
					</AccordionTrigger>
					<AccordionContent>
						We take great care to adhere to web standards and best practices
						during our coding and development processes. This includes following
						industry guidelines and staying up-to-date with the latest web
						trends and technologies. Our teams work hard to ensure optimal
						performance, compatibility, and user experience across various
						browsers, devices, and platforms. We use clean and efficient code to
						build reliable websites that deliver high-quality results.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-5'>
					<AccordionTrigger>
						Do you offer web maintenance services?
					</AccordionTrigger>
					<AccordionContent>
						We offer website maintenance services to keep your website updated
						and efficient while elevating your online presence.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-6'>
					<AccordionTrigger>
						Can you provide an estimation of the cost of web solutions for
						individuals, ranging from the simplest to the most complex?
					</AccordionTrigger>
					<AccordionContent>
						Web development services typically cost between $2,000 and $50,000,
						but high-capacity web platforms for corporations may exceed the
						upper limit.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	);
}
