import type { EachProps } from '@/components/base/Each/Each.types'

import { Children } from 'react'

const Each = <T,>({ of, render }: EachProps<T>) =>
	Children.toArray(of.map((item, index) => render(item, index)))

export default Each
