
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

// Define type for icon props
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof LucideIcons | string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  fallback?: keyof typeof LucideIcons;
}

const Icon: React.FC<IconProps> = ({
  name,
  color,
  size = 24,
  strokeWidth = 2,
  className,
  fallback = "CircleAlert",
  ...props
}) => {
  // Try to find the icon in lucide-react
  const LucideIcon = LucideIcons[name as keyof typeof LucideIcons] || LucideIcons[fallback];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found and fallback "${fallback}" also not found`);
    return null;
  }

  return (
    <LucideIcon
      color={color}
      size={size}
      strokeWidth={strokeWidth}
      className={cn('', className)}
      {...props}
    />
  );
};

export default Icon;
