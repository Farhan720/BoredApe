import { useState, useEffect } from "react"
// import { config } from '../dapp.config'
import { initOnboard } from "../utils/onboard"


export default function Mint() {
    const [onboard, setOnboard] = useState({})
    const [walletAddress, setWalletAddress] = useState('')
    useEffect(() => {
        const onboardData = initOnboard({
          address: (address) => setWalletAddress(address ? address : ''),
          wallet: (wallet) => {
            if (wallet.provider) {
              window.localStorage.setItem('selectedWallet', wallet.name)
            } else {
              window.localStorage.removeItem('selectedWallet')
            }
          }
        })
    
        setOnboard(onboardData)
      }, [])

//       const previouslySelectedWallet =
//     typeof window !== 'undefined' &&
//     window.localStorage.getItem('selectedWallet')
    

//   useEffect(() => {
//     if (previouslySelectedWallet !== null && onboard) {
//         console.log(onboard)
//         onboard.state.select(previouslySelectedWallet)
//      }
//   }, [onboard, previouslySelectedWallet])




    


      const connectWalletHandler = async () => {
        const walletSelected = await onboard.walletSelect()
        if (walletSelected) {
          await onboard.walletCheck()
        //   window.location.reload(true)
        }
      }
      
      


    return (
        <div className="min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background">
            <div className="relative  h-full w-full flex flex-col justify-center items-center">
                <img src="/images/blur.jpeg" alt="" className="animate-pulse-slow absolute inset-auto block w-full min-h-screen object-cover" />

                <div className="flex flex-col items-center justify-center h-full w-full px-2 md:px-10">
                    <div className="z-1 md:max-w-3xl w-full bg-gray-900/90 filter backdrop-blur-sm py-4 rounded-md px-2 md:px-10 flex flex-col items-center">
                        <h1 className="font-coiny uppercase font-bold text-3xl md:text-4xl bg-gradient-to-br from-brand-green to-brand-blue bg-clip-text text-transparent mt-3">
                            Pre-slae
                        </h1>
                        <h3 className="text-sm text-pink-200 tracking-widest">
                            {walletAddress 
                            ? walletAddress.slice(0,8) + '...' + walletAddress.slice(-4): 
                            ""}
                        </h3>
                        <div className="flex flex-col md:flex-row md:space-x-14 w-full mt-10 md:mt-14">
                            <div className="relative w-full">
                                <div className="font-coiny z-10 absolute top-2 left-2 opacity-80 filter backdrop-blur-lg text-base px-4 py-2 bg-black border border-brand-purple rounded-md flex items-center justify-center text-white font-semibold">
                                    <p>
                                        <span className="text-brand-pink">0</span>/100
                                    </p>
                                </div>
                                <img
                                    src="/images/13.png"
                                    className="object-cover w-full sm:h-[280px] md:w-[250px] rounded-md"
                                />

                            </div>
                            <div className="flex flex-col items-center w-full px-4 mt-16 md:mt-0">
                                <div className="font-coiny flex items-center justify-between w-full">
                                    <button className="w-14 h-10 md:w-16 md:h-12 flex items-center justify-center text-brand-background hover:shadow-lg bg-gray-300 font-bold rounded-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 md:h-8 md:w-8"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    </button>
                                    <p className="text-sm text-pink-200 tracking-widest mt-3">
                                        1
                                    </p>
                                    <button className="w-14 h-10 md:w-16 md:h-12 flex items-center justify-center text-brand-background hover:shadow-lg bg-gray-300 font-bold rounded-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 md:h-8 md:w-8"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M18 12H6"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-sm text-pink-200 tracking-widest mt-3">
                                    Max Mint Amount: 3
                                </p>
                                <div className="border-t border-b py-4 mt-16 w-full">
                                    <div className="w-full text-xl font-coiny flex items-center justify-between text-brand-yellow">
                                        <p>Total</p>

                                        <div className="flex items-center space-x-3">
                                            <p>
                                                0.001 ETH
                                            </p>
                                            <span className="text-gray-400">+ GAS</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="font-coiny mt-12 w-full bg-gradient-to-br from-brand-purple to-brand-pink shadow-lg px-6 py-3 rounded-md text-2xl text-white hover:shadow-pink-400/50 mx-4 tracking-wide uppercase"
                                    onClick={connectWalletHandler} >
                                    Connect Wallet
                                </button>

                            </div>
                        </div>
                        <div className="border rounded-md text-start h-full px-4 py-4 w-full mx-auto mt-8 md:mt-4">
                            <p className="flex flex-col space-y-2 text-white text-sm md:text-base break-words ...">
                                smth went wrong
                            </p>
                        </div>
                        <div className="border-t border-gray-800 flex flex-col items-center mt-10 py-2 w-full">
                            <h3 className="font-coiny text-2xl text-brand-pink uppercase mt-6">Contract Address</h3><a
                                href={`https://etherscan.io/address/0xaAFAaF3c22Af17ad5eaf0226EDd4584724559089`}
                                target="_blank"
                                className="text-gray-400 mt-4">
                                <span className="break-all ...">0x97895838923fj9qyrh9320456662351059385908977</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}