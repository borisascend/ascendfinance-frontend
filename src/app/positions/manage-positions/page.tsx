'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import DepositPosition from '@/components/DepositPosition'
import MintPosition from '@/components/MintPosition'
import RepayPosition from '@/components/RepayPosition'
import WithdrawPosition from '@/components/WithdrawPosition'

import gearIcon from '../../../../public/icons/gearIcon.svg'
import goBackIcon from '../../../../public/icons/goBackIcon.svg'
import weETHIcon from '../../../../public/icons/weETH.svg'




const Page = () => {
    const router = useRouter()
    const [tab, setTab] = useState(0)
    return (
        <div className='flex items-center justify-center min-h-full w-full'>
            <div className="relative bg-baseColor shadowCustom rounded-3xl w-[90%] mt-[50px] md:mt-[0px] md:w-[70%] xl:w-[45%]  2xl:w-[35%]">
                <div onClick={() => { router.push('/positions') }} className="absolute -left-[115px] shadow-xl top-0 rounded-full p-10 bg-baseColor cursor-pointer hover:bg-primaryColor">
                    <Image src={goBackIcon} alt='Go back Icon' width={40} />
                </div>
                <div className="pt-6 pb-16 px-12">
                    <div className="flex items-center gap-3">
                        <Image
                            alt="Positions icon"
                            src={gearIcon}
                            width={36}
                            className="brightness-0 invert"
                        />
                        <p className="font-bold leading-[60px] text-[30px] text-white">Manage position</p>
                    </div>
                    <p className="text-[14px] leading-[24px]">
                        By managing your collateral ratio, you will reduce your exposure to price fluctuations and risk of liquidation.   </p>
                </div>
                <hr className="border-lightGray2" />
                <div className="py-12 px-12">
                    <div className="flex justify-between gap-3 items-center">

                        <div className="flex items-center gap-2">
                            <Image alt="Coin symbol" src={weETHIcon} width={50} />
                            <div className="flex flex-col">
                                <p className="font-bold text-[24px]">weETH</p>
                                <p className="font-medium text-[12px]">EtherFi Restaked Ether</p>
                            </div>
                        </div>
                        <p className='font-bold text-[20px] leading-[40px]'>1.50090</p>
                    </div>
                    <div className="flex flex-col gap-4 my-12 text-[12px] text-lightGray font-medium">
                        <div className="flex gap-2 justify-between items-center">
                            <p className="font-medium">Minted</p>
                            <p className="font-bold">2930.28 GREEN</p>
                        </div>
                        <div className="flex gap-2 justify-between items-center">
                            <p>Collateral Ratio</p>
                            <p className="text-primaryColor">129%</p>
                        </div>
                        <div className="flex gap-2 justify-between items-center">
                            <p>Liquidation Price</p>
                            <p className="text-[#FF5710]">$3029.39 / ETH</p>
                        </div>
                        <div className="flex gap-2 justify-between items-center">
                            <p>Vault Position</p>
                            <p >1/2</p>
                        </div>
                    </div>
                    <div className="flex rounded-2xl bg-secondaryColor text-primaryColor text-[14px] leading-[28px] font-medium text-center">
                        <button onClick={() => setTab(0)} className={`${tab === 0 && 'bg-primaryColor text-white'} rounded-2xl flex-1 py-2 flex items-center justify-center`}>Deposit</button>
                        <button onClick={() => setTab(1)} className={`${tab === 1 && 'bg-primaryColor text-white'} rounded-2xl flex-1 py-2 flex items-center justify-center`}>Mint</button>
                        <button onClick={() => setTab(2)} className={`${tab === 2 && 'bg-primaryColor text-white'} rounded-2xl flex-1 py-2 flex items-center justify-center`}>Withdraw</button>
                        <button onClick={() => setTab(3)} className={`${tab === 3 && 'bg-primaryColor text-white'} rounded-2xl flex-1 py-2 flex items-center justify-center`}>Repay</button>

                    </div>
                    {tab === 0 &&
                        <DepositPosition />
                    }
                    {tab === 1 &&
                        <MintPosition />
                    }
                    {tab === 2 &&
                        <WithdrawPosition />
                    }
                    {tab === 3 &&
                        <RepayPosition />
                    }
                </div>

            </div>
        </div >
    )
}

export default Page