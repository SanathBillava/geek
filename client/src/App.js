import React, {useEffect, createContext, useReducer, useContext} from 'react';
import NavBar from './components/Navbar';
import "./App.css";
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';

import SignIn from './components/screens/SignIn';
import SignUp from './components/screens/SignUp';
import {reducer, initialState} from './reducers/userReducer';
import Home from './components/screens/Home';
import Info from './components/screens/Info';

export const UserContext = createContext();

const Routing = () => {
    const history = useHistory();
    const {state, dispatch} = useContext(UserContext)
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if(user){
            dispatch({type: "USER", payload: user})
            }else{
            history.push('/signin')
        }
    }, [])
    return(
        <Switch>
           <Route exact path="/">
               <Home />
           </Route>
           <Route exact path="/info">
               <Info />
           </Route>
            <Route path="/signin">
                <SignIn />
            </Route>
           <Route path="/signup">
                <SignUp />
            </Route>
        </Switch>
    )
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
      <UserContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
    <NavBar />
    <Routing />
    </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
