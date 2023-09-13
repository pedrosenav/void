import { ComponentProps, FC } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  ['font-semibold', 'rounded-full', 'transition-colors', 'duration-300'],
  {
    variants: {
      variant: {
        primary: 'bg-void-purple-600 hover:bg-void-purple-500 duration-300',
        secondary: 'border-2 border-void-yellow-500 hover:bg-void-yellow-500',
        outline: 'border-2 border-void-purple-600 hover:bg-void-purple-600',
      },
      size: {
        lg: 'text-lg py-2 px-5 min-w-[7rem]',
        md: 'text-normal py-1.5 px-4 min-w-[6rem]',
        sm: 'text-sm py-1 px-3 min-w-[5rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({
  size,
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ size, variant, className }))}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button, buttonVariants }
