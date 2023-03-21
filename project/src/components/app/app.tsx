import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFoundPages from '../../pages/not-found-pages/not.found.pages';
import {AppRoute} from '../../types/routes.enums';
import {offerArray} from '../../types/offers.type';
import {City, Points} from '../../types/map.type';


type AppType = {
  count: number;
  arrayCards: offerArray;
  city: City;
  points: Points;
}

function App({count, arrayCards, city, points}: AppType): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<Main count={count} arrayCard={arrayCards} city={city} points={points}/>} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path='/offer/:id' element={<Property />} />
        </Route>
        <Route path='*' element={<NotFoundPages />}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
