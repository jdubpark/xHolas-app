import React, { Component, useState } from 'react';
import Container from '../../components/Container';
import Table from '../../components/Home/Table'

export default function Dashboard() {
    return (
        <div className="max-w-3xl mx-auto text-midnight text-xl font-bold">
            <h1>
                Markets
            </h1>
            <div className="my-4 grid grid-cols-3 gap-4 text-center">
                <div className="border rounded-md">
                    <div className="my-3">
                        <h2 className="text-midnight text-base text-opacity-70">
                            allETH Supply
                        </h2>
                        <h3>
                            $270.97M
                        </h3>
                    </div>
                </div>
                <div className="border rounded-md">
                    <div className="my-3">
                        <h2 className="text-midnight text-base text-opacity-70">
                            TVL
                        </h2>
                        <h3>
                            $300.24M
                        </h3>
                    </div>
            
                </div>
                <div className="border rounded-md">
                    <div className="my-3">
                        <h2 className="text-midnight text-base text-opacity-70">
                            Providers
                        </h2>
                        <h3>
                            12
                        </h3>
                    </div>

                    
                </div>


            </div>
            <h1>My Positions</h1>
            <div className="my-4">
                <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="text-midnight text-base text-opacity-70 border rounded-md">
                        Balances
                    </div>
                    <div className="text-midnight text-base text-opacity-70 border rounded-md">
                        allETH Minted 
                    </div>
                    <div className="text-midnight text-base text-opacity-70 border rounded-md">
                        Collateral
                    </div>
                    <div className="text-midnight text-base text-opacity-70 border rounded-md">
                        Redemption Value
                    </div>
                </div>
            </div>
            <button className="w-full my-2">
                <h2 className="border rounded-md text-center py-3 ">
                    Deposit
                </h2>
            </button>
 
        </div>

    )

}
