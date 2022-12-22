import './App.css';
import'./style.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import Address from './Components/Address/Address';
import FullName from './Components/FullName/FullName';

function App() {
  return (
    <div className="App">

      <ProfilePhoto/> <br />
      <FullName/>
      <Address/>

    </div>
  );
}

export default App;
