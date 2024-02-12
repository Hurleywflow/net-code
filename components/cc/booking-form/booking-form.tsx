/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client'

import { zodResolver } from '@hookform/resolvers/zod';

import { Confetti } from '@neoconfetti/react';
import { useRouter } from 'next/navigation';
// import { redirect, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import FormSubmitButton from '../formStatusButton/FormSubmitButton';

// write a regex to validation the phone number
const phoneRegex = /^\d{10,13}$/;

const FormSchema = z.object({
	username: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
	email: z.string().email({
		message: 'Invalid email address.',
	}),
	phone: z.string().refine((value) => phoneRegex.test(value), {
		message: 'Phone number is not valid.',
	}),
	// date: z.date({
	//   required_error: 'A date of your refer.',
	// }),
	note: z.string().max(500, {
		message: 'Message must not be longer than 500 characters.',
	}),
});

function ProfileForm({ className }: React.ComponentProps<'form'>) {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: '',
			email: '',
			phone: '',
			note: '',
		},
	});
	const router = useRouter();
	async function onSubmit(data: z.infer<typeof FormSchema>): Promise<void> {
		console.log(data);

		// interface FormData {
		//   date: Date
		// }
		// function validateDates(data: FormData): void {
		//   if (!(data.date instanceof Date) ) {
		//     throw new Error('Checkin and checkout must be valid Date objects')
		//   }
		// }

		// function showDateError(error: string): void {
		// 	toast({
		// 		variant: 'destructive',
		// 		title: 'Uh oh! Something went wrong.',
		// 		description: error,
		// 		action: <ToastAction altText='Try again'>Try again</ToastAction>,
		// 	});
		// }
		// post data to resend api
		try {
			await fetch('/api/email', {
				method: 'POST',
				body: JSON.stringify(data),
			});
		} catch (error) {
			throw new Error('Error sending email');
		}

		toast({
			title: 'You submitted the following values:',
			description: (
				<pre className='mt-2 flex w-[340px] items-center justify-center rounded-md bg-slate-700 p-4'>
					<span className='mx-auto text-center'>{data && <Confetti />}</span>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});

		// reset to default value of the from, closed dialog or drawer and redirect to home page
		form.reset();
		await new Promise((resolve) => setTimeout(resolve, 3000));
		router.push('/');
	}

	return (
		<Form {...form}>
			{/* <form
        action={filterJobs}
        className={cn(
          'grid h-[70svh] items-start gap-4 overflow-y-auto',
          className,
        )}
      > */}
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={cn(
					'grid h-[70svh] items-start gap-4 overflow-y-auto',
					className,
				)}
			>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel>User Name</FormLabel>
							<FormControl>
								<Input placeholder='Hurley Nguyen' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder='hurley@example.com' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone Number</FormLabel>
							<FormControl>
								<Input placeholder='1234567890' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* <FormField
						control={form.control}
						name="date"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel>CheckIn</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant={"outline"}
												className={cn(
													"w-[240px] pl-3 text-left font-normal",
													!field.value && "text-muted-foreground",
												)}
											>
												{field.value ? (
													format(field.value, "PPP")
												) : (
													<span>Pick a date</span>
												)}
												<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent className="w-auto p-0" align="start">
										<Calendar
											mode="single"
											selected={field.value}
											onSelect={field.onChange}
											disabled={(date) => date < new Date()}
											initialFocus
										/>
									</PopoverContent>
								</Popover>
								<FormMessage />
							</FormItem>
						)}
					/> */}

				<FormField
					control={form.control}
					name='note'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Notes</FormLabel>
							<FormControl>
								<Textarea
									placeholder='Tell us more about your enquiry'
									className='resize-none'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormSubmitButton className=''>Submit</FormSubmitButton>
			</form>
		</Form>
	);
}

export default ProfileForm;
