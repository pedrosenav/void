import { ComponentProps } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RevealProps extends ComponentProps<'div'> {
  delay?: number
  dir?: 'horizontal' | 'vertical'
}

function Reveal({
  delay = 1,
  dir = 'vertical',
  children,
  className,
}: RevealProps) {
  const fadeInAnimationVariants = {
    hidden: {
      opacity: 0,
      y: dir === 'vertical' ? 50 : 0,
      x: dir === 'horizontal' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  }

  return (
    <motion.div
      className={cn('w-fit', className)}
      variants={fadeInAnimationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.25 * delay,
      }}
    >
      {children}
    </motion.div>
  )
}

export { Reveal }
