import type { Button } from '@base-ui/react/button'
import type { VariantProps } from 'class-variance-authority'
import type { buttonVariants } from '@/components/base/Button/Button.variants'

export type ButtonProps = Button.Props & VariantProps<typeof buttonVariants>
