import './App.css';
import Page from './components/Page';
import { PageTypes } from './utils/Types';

function App() {
  return (
    <>  
      <Page title="Home" type={PageTypes.HOME}/>
    </>
  );
}

export default App;
