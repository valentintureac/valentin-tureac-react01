import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { initializeGoogleAuth } from './api';
import { Footer, Header } from './components/common';
import {
  HomePage,
  ProfilePage,
  NotFoundPage,
  RanksPage,
  GamePage,
  RankPage,
} from './pages';

// async
initializeGoogleAuth();

export const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <main className="text-blue-500 flex-grow">
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/profile" component={ProfilePage}></Route>
          <Route path="/ranks" exact component={RanksPage}></Route>
          <Route path="/ranks/:id" component={RankPage}></Route>
          <Route path="/play" component={GamePage}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;

// actions -> {type: '', payload: {}}  /types /creators
// reducers
