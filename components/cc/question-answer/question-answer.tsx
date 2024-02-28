import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from 'next-intl';

export function QuestionAnswers() {
	const t = useTranslations('Index');
	return (
		<section className='mx-auto mb-36 mt-10 w-full max-w-screen-lg px-8 text-base font-normal text-neutral-100'>
			<Accordion type='single' collapsible className='w-full'>
				<AccordionItem value='item-1'>
					<AccordionTrigger>{t('item1')}</AccordionTrigger>
					<AccordionContent>{t('item1-1')}</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-2'>
					<AccordionTrigger>{t('item2')}</AccordionTrigger>
					<AccordionContent>{t('item2-1')}</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-3'>
					<AccordionTrigger>{t('item3')}</AccordionTrigger>
					<AccordionContent>{t('item3-1')}</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-4'>
					<AccordionTrigger>{t('item4')}</AccordionTrigger>
					<AccordionContent>{t('item4-1')}</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-5'>
					<AccordionTrigger>{t('item5')}</AccordionTrigger>
					<AccordionContent>{t('item5-1')}</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-6'>
					<AccordionTrigger>{t('item6')}</AccordionTrigger>
					<AccordionContent>{t('item6-1')}</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	);
}
