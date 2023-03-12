import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFoundPages from '../../pages/not-found-pages/not.found.pages';
import {AppRoute} from '../../types/routes.enums';

type AppType = {
  count: number;
}

function App({count}: AppType): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Main count={count}/>} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Room} element={<Property />} />
        </Route>
        <Route path='*' element={<NotFoundPages />}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
