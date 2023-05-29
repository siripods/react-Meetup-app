import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';
import './index.css';
import Layout from './components/layout/Layout';

function App() {

  return (
  <div>
    <Layout>
    

    {/* Use swich to load component according to the path */}
    <Switch>
      {/* Use exact='true', to match URL which nothing follows slash mark */}
      <Route path='/' exact='true'>
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage />
      </Route>
      <Route path='/favorites'>
        <FavoritesPage />
      </Route>
    </Switch>
    </Layout>
  </div>
  );
}

export default App;
