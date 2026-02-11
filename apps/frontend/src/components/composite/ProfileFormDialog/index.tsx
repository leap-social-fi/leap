import type { JSONContent } from '@tiptap/react'
import type React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { newUserSchemaForm } from '@leap/shared/schema/auth'
import { IconCopy } from '@tabler/icons-react'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useConnection } from 'wagmi'

import Avatar from '@/components/base/Avatar'
import Button from '@/components/base/Button'
import Dialog from '@/components/base/Dialog'
import Input from '@/components/base/Input'
import Spinner from '@/components/base/Spinner'
import { useDebounce } from '@/hooks/useDebounce'
import { copy, truncate } from '@/libs/common'
import { useAuthNewUser } from '@/modules/auth/hooks/mutations'

import SimpleEditorLite from '../SimpleEditorLite'

interface ProfileFormDialogProps {
	isOpen?: boolean
	onClose: () => void
}

const ProfileFormDialog: React.FC<ProfileFormDialogProps> = ({
	isOpen,
	onClose,
}) => {
	const { address } = useConnection()
	const queryClient = useQueryClient()
	const {
		register,
		handleSubmit,
		watch,
		control,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(newUserSchemaForm),
		defaultValues: {
			name: '',
			username: '',
			avatar: 'dice-bear:adventurer',
			bio: null,
		},
	})

	const username = watch('username')
	const [usernameDebounce, setUsernameDebounce] = useState('')

	const { isPending, mutate } = useAuthNewUser()
	useDebounce(() => setUsernameDebounce(username), [username], 700)

	const handleCopy = () => {
		copy(address as string, () => {
			toast.success('Successfully copied address', {
				position: 'top-center',
			})
		})
	}

	const handleSaveNewUser = handleSubmit(({ bio, ...data }) => {
		mutate(
			{ ...data, bio: bio ? JSON.stringify(bio) : null },
			{
				onSuccess: () => {
					queryClient.invalidateQueries({
						queryKey: ['me'],
					})
					onClose()
				},
			},
		)
		onClose()
	})

	return (
		<Dialog open={isOpen}>
			<Dialog.Content showCloseButton={false}>
				<form className="flex flex-col gap-4" onSubmit={handleSaveNewUser}>
					<div className="mb-4 flex flex-col items-center gap-2">
						<Avatar size="md">
							<Avatar.Image
								src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${usernameDebounce}`}
							/>
						</Avatar>

						<div className="flex items-center gap-1.5">
							<div className="text-typography-secondary">
								{truncate({
									value: address as string,
									type: 'middle',
									startLength: 8,
									endLength: 6,
								})}
							</div>
							<IconCopy
								size={14}
								className="cursor-pointer text-typography-secondary"
								onClick={handleCopy}
							/>
						</div>
					</div>
					<Input
						label="Full Name"
						placeholder="Input your full name"
						error={errors.name?.message}
						{...register('name')}
					/>
					<Input
						label="Username"
						placeholder="Input your username"
						error={errors.username?.message}
						{...register('username')}
					/>

					<Controller
						name="bio"
						control={control}
						render={({ field }) => (
							<SimpleEditorLite
								label="Bio"
								value={field.value as JSONContent}
								maxCharacter={400}
								onChange={(value) => field.onChange(value)}
							/>
						)}
					/>

					<Button disabled={isPending} size="lg" onClick={handleSaveNewUser}>
						<div className="flex items-center gap-1">
							<Spinner isShow={isPending} className="text-white" />
							<span className="text-white">
								{isPending ? 'Loading...' : 'Save'}
							</span>
						</div>
					</Button>
				</form>
			</Dialog.Content>
		</Dialog>
	)
}

export default ProfileFormDialog
