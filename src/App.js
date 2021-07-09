import React from 'react'

// Styles
import './style/index.scss'

// Loadable
import loadable from '@loadable/component'

// Router
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './Redux/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const stateStore = createStore(rootReducer, composeWithDevTools())

// Pages
const Home = loadable(() => import('./pages/Home'))
const Works = loadable(() => import('./pages/Works/Works'))
const Search = loadable(() => import('./pages/Search'))
const Post = loadable(() => import('./pages/Post/Post'))
const Profile = loadable(() => import('./pages/Profile/Profile'))

// Components
// import Sidebar from './components/Sidebar/Sidebar'
// import Header from './components/Header/Header'
const Sidebar = loadable(() => import('./components/Sidebar/Sidebar'))
const Header = loadable(() => import('./components/Header/Header'))

export default class App extends React.Component {
  componentDidMount() {
    this.timeoutID = setTimeout(() => {
      document.getElementById('preloader').style =
        'opacity: 0; visibility: hidden;'
    }, 1500)
  }

  componentWillUnmount() {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID)
      this.timeoutID = null
    }
  }

  render() {
    return (
      <Provider store={stateStore}>
        <div className='app__inner'>
          <Router basename='/'>
            <Sidebar />
            <Header />
            <main className='app-content _container'>
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
    )
  }
}
