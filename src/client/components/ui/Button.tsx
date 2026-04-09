import * as React from 'react';
import { cn } from '@/client/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'inverse';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50';

    const variantClasses = {
      default: 'bg-[#547599] text-white shadow hover:bg-[#6487ad] active:bg-[#486785]',
      destructive: 'bg-red-600 text-white shadow-sm hover:bg-red-700 active:bg-red-800',
      outline:
        'border border-slate-300 bg-white text-slate-800 shadow-sm hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200',
      secondary: 'bg-[#418228] text-white shadow-sm hover:bg-[#4a9430] active:bg-[#377022]',
      ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200',
      link: 'text-[#547599] underline-offset-4 hover:underline',
      inverse: 'bg-slate-800 text-white shadow hover:bg-slate-700 active:bg-slate-900',
    };

    const sizeClasses = {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-9 w-9',
    };

    const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

    if (asChild) {
      // For asChild functionality, you'd need to implement Slot from Radix
      // For now, we'll just render as a button
      console.warn('asChild prop is not supported in this custom Button implementation');
    }

    return <button className={classes} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button };
