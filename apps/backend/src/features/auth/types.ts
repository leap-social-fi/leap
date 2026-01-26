import type { VerifyRequest } from '@leap/shared/schema/auth'
import type { IController } from '@/types/controller'

export type NonceProps = IController

export type VerifyProps = IController & VerifyRequest
