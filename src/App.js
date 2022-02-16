import React, { useReducer } from 'react';
import MainPage from './components/mainPage/MainPage';
import ErrorPage from './components/errorPage/ErrorPage';
import { initialState, reducer } from './app/context/reducer';
import Context from './app/context/Context';
import TermsOfUseModal from './components/termsOfUseModal/termsOfUseModal';
import PrivacyPolicyModal from './components/privacyPolicyModal/PrivacyPolicyModal';
import AuthContainer from "./containers/authModal/authContainer";
import {Route, Switch} from "react-router-dom";

/** Main page of demo project. The router
 *
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <Context.Provider value={{ state, dispatch }}>
            <MainPage/>
            <AuthContainer/>
          </Context.Provider>
        </Route>

        <Route exact path="/terms">
          <TermsOfUseModal/>
        </Route>

        <Route exact path="/privacy">
          <PrivacyPolicyModal/>  
        </Route>

        <Route exact path="/auth">
          <Context.Provider value={{ state: {...state, modalAuth: {...state.modalAuth, showModalAuth: true}},
            dispatch }}>
            <AuthContainer/>
          </Context.Provider>
        </Route>

        <Route exact path="/error">
          <ErrorPage
            title='Возникла техническая ошибка!'
            linkText='Сообщить разработчикам'
            link='mailto:info@proflead.org'
          />
        </Route>

        <Route >
          <ErrorPage
            title='404 Страница не найдена'
            linkText='Вернуться на главную'
            link='/'
          />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;