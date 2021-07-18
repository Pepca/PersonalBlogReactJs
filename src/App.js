import React, { Suspense, lazy } from 'react'

// Styles
import './style/index.scss'

// Router
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

// Context Store
import { ContextProvider } from './Context/ContextProvider'

// Pages
const Home = lazy(() => import('./pages/Home'))
const Works = lazy(() => import('./pages/Works/Works'))
const Search = lazy(() => import('./pages/Search'))
const Post = lazy(() => import('./pages/Post/Post'))
const Profile = lazy(() => import('./pages/Profile/Profile'))

// Components
import Preloader from './components/Preloader/Preloader'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
// const Sidebar = loadable(() => import('./components/Sidebar/Sidebar'))
// const Header = loadable(() => import('./components/Header/Header'))

export default function App() {
  return (
    <ContextProvider>
      <div className='app__inner'>
        <Router>
          <Sidebar />
          <main className='app-content'>
            <Header />
            <div className='app-content__inner _container'>
              <Switch>
                <Suspense fallback={<Preloader />}>
                  <Route exact path='/' render={() => <Home />} />
                  <Route path='/works' render={() => <Works />} />
                  <Route exact path='/search' render={() => <Search />} />
                  <Route
                    exact
                    path='/post:id'
                    render={({ match, history }) => (
                      <Post match={match} history={history} />
                    )}
                  />
                  <Route path='/profile' render={() => <Profile />} />
                  {/* <Redirect to='/' /> */}
                </Suspense>
              </Switch>
            </div>
          </main>
        </Router>
      </div>
    </ContextProvider>
  )
}
