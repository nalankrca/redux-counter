import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import UseProfile from './components/UserProfile'
import { useSelector } from 'react-redux';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
      <Header/>
     {isAuth && <UseProfile />}  {/* kullanıcı girişi gerçekleşmiş ise  */}
     {!isAuth && <Auth />}{/* kullanıcı giriş yapmamışsa */}
      <Counter />
   </Fragment>

  );
}

export default App;
