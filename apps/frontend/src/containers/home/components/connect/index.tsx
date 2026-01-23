import { useConnectOrCreateWallet } from '@privy-io/react-auth'

import { Button } from '@/components/ui/button'

const ConnectWalletButton = () => {
	const { connectOrCreateWallet } = useConnectOrCreateWallet()

	return <Button onClick={connectOrCreateWallet}>Connect wallet</Button>
}

export default ConnectWalletButton
