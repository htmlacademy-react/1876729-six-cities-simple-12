import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFoundPages from '../../pages/not-found-pages/not.found.pages';
import {AppRoute} from '../../types/routesEnums';

type AppType = {
  count: number;
}

function App({count}: AppType): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main count={count}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={<Property />}
        />
        <Route
          path='*'
          element={<NotFoundPages />}
        />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
