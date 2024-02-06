// import { MotionDiv } from '@/lib/framer';

interface TemplateProps {
	children: React.ReactNode;
}

const Template = ({ children }: TemplateProps) => {
	return (
		// <MotionDiv initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
		// 	{children}
		// </MotionDiv>
		<div>{children}</div>
	);
};

export default Template;
