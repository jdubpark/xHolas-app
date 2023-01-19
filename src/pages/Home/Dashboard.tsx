import React, { Component, useState } from 'react';
import Container from '../../components/Container';
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from '../../components/Home/Table/Table'


const getData = () => {
    const data = [
      {
        name: 'vastETH',
        description: 'stETH Vault',
        network: 'Goerli', 
        provider: 'Lido',
        totalSupply: '1000', 
        apy: '16%',
    
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        status: 'Active',
        role: 'Admin',
        age: 27,
        imgUrl: '/tokens/stETH.jpeg',
      },
      {
        name: 'varETH',
        description: 'rETH Vault', 
        network: 'Goerli',
        provider: 'Lido', 
        totalSupply: '850',
        apy: '20%', 
        title: 'Product Directives Officer',
        department: 'Intranet',
        status: 'Inactive',
        role: 'Owner',
        age: 43,
        imgUrl: '/tokens/rETH.png',
      },
      {
        name: 'vafrxETH',
        description: 'frxETH Vault',
        network: 'Mainnet',
        provider: 'Frax',
        totalSupply: '900',
        apy: '30%', 
        title: 'Forward Response Developer',
        department: 'Directives',
        status: 'Active',
        role: 'Member',
        age: 32,
        imgUrl: '/tokens/frxETHDark.png',
      },
    ]
    return [...data, ...data, ...data]
  }
  

export default function Dashboard() {

    const columns = React.useMemo(() => [
        // {
        //   Header: "Name",
        //   accessor: 'name',
        //   Cell: AvatarCell,
        //   imgAccessor: "imgUrl", 
        //   emailAccessor: "email"
        // },
        {
          Header: "Vault",
          accessor: 'name',
          Cell: AvatarCell,
          imgAccessor: "imgUrl",
          descriptionAccessor: "description",
        },
        {
          Header: "Network",
          accessor: 'network',
        },
        {
          Header: "Provider",
          accessor: 'provider', 
        },
        {
          Header: "Status",
          accessor: 'status',
          Cell: StatusPill,
        },
        {
          Header: "APY",
          accessor: 'apy',
        },
        // {
        //   Header: "Role",
        //   accessor: 'role',
        //   Filter: SelectColumnFilter,  // new
        //   filter: 'includes',
        // },
      ], [])

    const data = React.useMemo(() => getData(), [])

    console.log("columns: ", columns); 
    console.log('data: ', data); 

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
                <Table columns={columns} data={data}></Table>
            
            
            <button className="w-full my-2">
                <h2 className="border rounded-md text-center py-3 ">
                    Deposit
                </h2>
            </button>
 
        </div>

    )

}
