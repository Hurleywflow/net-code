'use client';
import { usePathname } from 'next/navigation';
import  TextGenerateEffect  from './TextGenerateEffect';

// const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
// `;

export function TextGenerateEffectDemo() {
	const pathname = usePathname();
	const words = pathname.includes('/vn')
		? 'Chúng tôi sẽ lên lịch một cuộc gọi hoặc cuộc họp xác định phạm với bạn để thảo luận yêu cầu của bạn và xác định các giải pháp thích hợp, thường mất tới 45 phút. Trong cuộc gọi, chúng tôi sẽ hỏi một số câu hỏi để thu thập thông tin về đối tượng mục tiêu của bạn, bao quát trang web, hướng thiết kế, v.v. Sau cuộc gọi, chúng tôi sẽ chuẩn bị một đề xuất kèm theo báo giá chi tiết. Quá trình này là cần thiết để sản phẩm bàn giao và chi phí trả trước, đảm bảo rằng tất cả chúng ta đều đồng ý, giúp tránh bất kỳ những điều bất ngờ trong quá trình thực hiện dự án.'
		: "We'll schedule a free scoping call or meeting with you to discuss your requirements and determine the appropriate solutions, which usually takes up to 45 minutes. During the call, we'll ask a series of questions to collect information about your intended audience, website vision, competitors, design direction, and more. After the call, we'll prepare a proposal with a detailed quote. The scoping process is essential to ensure that we are all in agreement regarding deliverables and upfront costs, which helps avoid any surprises during the project.";

	return <TextGenerateEffect words={words} />;
}
