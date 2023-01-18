import React, { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import ErrorBoundary from '../components/ErrorBoundary'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import HomePage from './Home'
import HomePageMain from './Home/Main'
import PageNotFound from './PageNotFound'
import DepositPage from './Deposit/Deposit'
import Dashboard from './Home/Dashboard'

function AppWrapper({ children }: { children: ReactNode }) {
  return <div className="flex flex-col justify-between w-screen min-h-screen">{children}</div>
}

function App() {
  return (
    <ErrorBoundary>
      <AppWrapper>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="description" content="Ion Protocol App" />
          <title>Ion Protocol</title>
          <link rel="canonical" href="" />
        </Helmet>
        <Header />
        <div className="mb-auto">
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Dashboard />}>
            </Route>
            <Route path="/deposit" element={<DepositPage />}/>
            {
              // <Route path="/create" element={<CreatePage />}>
              //   <Route index element={<CreatePageMain />} />
              // </Route>
            }
          </Routes>
        </div>
        <Footer />
      </AppWrapper>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </ErrorBoundary>
  )
}

export default App
