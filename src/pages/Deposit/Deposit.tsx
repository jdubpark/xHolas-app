import React, { Component, useState } from 'react';
import Container from '../../components/Container';


export default function Deposit() {
    return (
        <div className="max-w-md mx-auto text-midnight text-xl font-bold">
            <h1>
                Deposit LSDs
            </h1>
            <div className="flex flex-col my-4">
                <div> 
                    <h2 className="py-4 text-base text-midnight text-opacity-70">
                        FROM
                    </h2>
                    <div className="border rounded-md py-3">
                        <div className="grid grid-rows-2 gap-0.75 px-2">
                            <div className="flex flex-row justify-between items-center text-2xl">
                                <span>stETH</span>
                                <span>0</span>
                            </div>
                            <div className="flex flex-row justify-between items-center font-semibold text-base text-midnight text-opacity-70">
                                <span> Lido Liquid Staking Derivative</span>
                                <div className="space-x-1">
                                    <span> Balance: 00.00 </span>
                                    <span className="text-midnight"> Max </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="py-4 text-base text-midnight text-opacity-70">
                        TO
                    </h2>
                    <div className="space-y-4">
                    <div className="border rounded-md py-3">
                        <div className="grid grid-rows-2 gap-0.75 px-2">
                            <div className="flex flex-row justify-between items-center text-2xl">
                                <span>allETH</span>
                                <span>0</span>
                            </div>
                            <div className="flex flex-row justify-between items-center text-base text-midnight text-opacity-70">
                                <span> Ion Universal LSD</span>
                                <div className="space-x-1">
                                    <span> Balance: 00.00 </span>
                                    <span className="text-midnight"> Max </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-md py-3">
                        <div className="grid grid-rows-2 gap-0.75 px-2">
                            <div className="flex flex-row justify-between items-center text-2xl">
                                <span>vaETH</span>
                                <span>0</span>
                            </div>
                            <div className="flex flex-row justify-between items-center text-base text-midnight text-opacity-70">
                                <span> Ion Value Accrual LSD</span>
                                <div className="space-x-1">
                                    <span> Balance: 00.00 </span>
                                    <span className="text-midnight"> Max </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
            <button className="w-full my-2">
                <h2 className="border rounded-md text-center py-3 ">
                    Deposit
                </h2>
            </button>
            

       
           
        
        </div>

        // <Container>
        // <section>
        //     <div className="">
        //         {/* <div className="py-6 px-10">
        //             <h2 className="text-midnight text-xl">Deposit and Redeem</h2>
        //         </div>
        //         <div className="text-midnight">
        //             <div>
        //                 From
        //             </div>
        //             <div>
        //                 To
        //             </div>
                
        //         </div> */}
        //         hi
        //     </div>
        // </section>
        // </Container>
    )

}
