import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../../components/Container'
import HeaderNav from '../../components/Header'
// import useCurrentPath from '../../hooks/useCurrentPath'
import Logo from '../../assets/logo.png'

export default function Header() {
  // const currentPath = useCurrentPath()
  return (
    <div className="navbar pt-3">
      <Container>
        <HeaderNav.Left>
          <div className="flex flex-row text-midnight font-bold text-xl items-center space-x-8">
            <Link to="/" className="inline-block py-1">
              <div className="inline-block align-middle">
                <img src={Logo} alt="Ion Protocol" className="h-full w-full max-h-12" />
              </div>
              {/* <div className="inline-block text-2xl text-gray-800 whitespace-nowrap tracking-tight align-middle">
                <span className="text-midnight font-bold">Ion Protocol</span>
              </div> */}
            </Link>
            <Link to='/deposit' className="">
              Deposit
            </Link>
            <Link to='/redeem' className="">
              Redeem
            </Link>
            <Link to='/bribe' className="">
              Bribe
            </Link>
          </div>
        </HeaderNav.Left>
        {
          // <HeaderNav.Center>
          //   <HeaderNav.Menu>
          //     <HeaderNav.MenuItem to="/" text="Home" active={currentPath === '/'} />
          //     <HeaderNav.MenuItem to="/explore" text="Explore" active={currentPath === '/explore'} />
          //     <HeaderNav.MenuItem to="/create" text="Create" active={currentPath === '/create'} />
          //   </HeaderNav.Menu>
          // </HeaderNav.Center>
        }
        <HeaderNav.Right>
          {
            // <div>
            //   <a href="https://twitter.com/hola_trades" className="btn rounded-full bg-sky-100 hover:bg-twitter border-0 text-sky-500 hover:text-white">
            //     <span className="font-bold align-middle normal-case">Follow Us</span>
            //     <span className="pl-2 align-middle"><FaTwitter size={24} /></span>
            //   </a>
            // </div>
          }
          <div>
            <ConnectButton />
          </div>
        </HeaderNav.Right>
      </Container>
    </div>
  )
}
