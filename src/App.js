import React, { lazy } from 'react'

// Styles
import './style/index.scss'

// Router
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './Redux/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const stateStore = createStore(rootReducer, composeWithDevTools())

// Pages
const Home = lazy(() => import('./pages/Home'))
const Works = lazy(() => import('./pages/Works/Works'))
const Search = lazy(() => import('./pages/Search'))
const Post = lazy(() => import('./pages/Post/Post'))
const Profile = lazy(() => import('./pages/Profile/Profile'))

// Components
import Preloader from './components/Preloader/Preloader'
const Sidebar = lazy(() => import('./components/Sidebar/Sidebar'))
const Header = lazy(() => import('./components/Header/Header'))

export default function App() {
  return (
    <React.Suspense fallback={<Preloader />}>
      <Provider store={stateStore}>
        <div className='page__inner'>
          <Router basename='/'>
            <Sidebar />
            <Header />
            <main className='page-content _container'>
              <Switch>
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
                <Redirect to='/' />
              </Switch>
            </main>
          </Router>
        </div>
      </Provider>
    </React.Suspense>
  )
}
