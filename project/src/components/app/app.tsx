import Main from '../../pages/main/main';

type AppType = {
  count: number;
}

function App({count}: AppType): JSX.Element {
  return (
    <Main count={count}/>
  );
}

export default App;
