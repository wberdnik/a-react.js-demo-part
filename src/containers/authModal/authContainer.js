import React, {useContext} from 'react';
import Context from '../../app/context/Context';
import LogoYellow from '../../images/logo/Logo-yellow';
import CloseIcon from '../../images/icons/Close2-icon';
import ArrowIcon from "../../images/icons/Arrow-left-icon";
import Login from '../../components/authModal/login/Login';
import AuthByCode from '../../components/authModal/AuthByCode/AuthByCode';
import SignUp from '../../components/authModal/signUp/SignUp';
import EnterWithSocialNetworks from '../../components/authModal/enterWithSocialNetworks/EnterWithSocialNetworks';
import AuthByPassword from "../../components/authModal/AuthByPassword/AuthByPassword";
import authModalActions from "../../services/actions/authModalActions";

const AuthContainer = () => {
  const
    {state, dispatch} = useContext(Context),
    {showModalAuth, authFormType, loginType, username, notification, animated, transactionToken} = state.modalAuth

  if (!showModalAuth) return null

  const actions = new authModalActions(dispatch, transactionToken, username,loginType),
    closeAction = actions.closeModal.bind(actions),
    goBackAction = actions.goBack.bind(actions)

  const hintLoginTextList = {
    email: 'по коду из e-mail',
    sms: 'по коду из смс',
    password: 'по паролю',
    social: 'через соцсети',
  }

  const tabItems = [
    {name: 'sms', value: 'смс'},
    {name: 'password', value: 'пароль'},
    {name: 'email', value: 'e-mail'},
    {name: 'signUp', value: 'регистрация'},
    {name: 'social', value: 'соцсети'}
  ];

  const loginButtonText = {
    registration: 'Регистрация',
    signUp: 'Войти'
  }


  let renderProps = {}
  switch (authFormType) {
    case 'login':
      renderProps = {
        component: (<Login tabItems={tabItems} actions={actions} loginType={loginType}/>),
        arrowIcon: false,
        title: loginButtonText.signUp,
        hintText: hintLoginTextList[loginType],
        showAuth2: 'passive',
      }
      break;

    case 'signUp':
      renderProps = {
        component: (<SignUp username={username} actions={actions}/>),
        arrowIcon: true,
        title: loginButtonText.registration,
        hintText: false,
        showAuth2: false,
      }
      break;

    case 'social':
      renderProps = {
        component: (<Login tabItems={tabItems} actions={actions} loginType={loginType}/>),
        arrowIcon: false,
        title: loginButtonText.signUp,
        hintText: hintLoginTextList[loginType],
        showAuth2: 'active',
      }
      break;

    case 'password':
      renderProps = {
        component: (<AuthByPassword username={username} actions={actions}/>),
        arrowIcon: true,
        title: loginButtonText.signUp,
        hintText: 'введите пароль',
        showAuth2: false,
      }
      break;

    case 'codeSMS':
      renderProps = {
        component: (<AuthByCode username={username} actions={actions}/>),
        arrowIcon: true,
        title: loginButtonText.signUp,
        hintText: 'введите код из sms',
        showAuth2: false,
      }
      break;

    case 'codeEmail':
      renderProps = {
        component: (<AuthByCode username={username} actions={actions}/>),
        arrowIcon: true,
        title: loginButtonText.signUp,
        hintText: 'введите код из e-mail',
        showAuth2: false,
      }
      break;

  }


  return (
      <>
        <div className='auth-modal' onClick={closeAction}></div>
        <div className={'auth-form ' + (animated ? 'auth-form_animated' : '')} >
          <div className='auth-form__left-content'>
            {renderProps.arrowIcon ?
                (<ArrowIcon className='auth-form__go-back-btn' onClick={goBackAction}/>) : ''
            }
            <LogoYellow className='login__logo-image auth-form__logo-image'/>
            <div className='auth-form__title'>{renderProps.title}</div>

            <div className={'auth-form__text' + (renderProps.showAuth2 ? ' login__text' : '')}>
              {renderProps.hintText ? renderProps.hintText : ''}
            </div>
            {renderProps.showAuth2 ?
                <EnterWithSocialNetworks isActive={renderProps.showAuth2}/> : ''}
          </div>

          <div className='auth-form__right-content'>
            <CloseIcon className='auth-form__close-btn' onClick={closeAction}/>
            {notification ?
                <div className='sign-up__notification auth-form__notification'>{notification}</div>
                : ''}

            {renderProps.component}

          </div>
        </div>
      </>
  );
}

export default AuthContainer;
