export interface BaseQueue {
	name: string
	init(): Promise<void>
	isQueue(message: string): boolean
	action(message: string): Promise<void>
}
