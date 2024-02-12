import { Button } from '@/components/ui/button';
import React from 'react';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	size: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
}
const ChildButton: React.FC<ButtonProps> = ({ children, ...props }) => {
	return <Button {...props}>{children}</Button>;
};
export default ChildButton;
