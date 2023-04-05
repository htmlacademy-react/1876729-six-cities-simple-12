import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFoundPages from '../../pages/not-found-pages/not.found.pages';
import {AppRoute} from '../../types/routes.enums';
import {offerArray} from '../../types/offers.type';
import {City} from '../../types/map.type';
import {CommentsType} from '../../types/comments.type';


type AppType = {
  count: number;
  city: City;
  points: offerArray;
  CommentsPack: CommentsType;
}

function App({count, city, points, CommentsPack}: AppType): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<Main count={count} city={city} points={points}/>} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path='/offer/:id' element={<Property city={city} points={points} CommentsPack={CommentsPack}/>} />
        </Route>
        <Route path='*' element={<NotFoundPages />}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
