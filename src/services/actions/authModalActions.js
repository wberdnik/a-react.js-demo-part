import ValidateInputRequired from "../validation/validateInputRequired";
import ValidateEmail from "../validation/validateEmail";
import ValidatePhone from "../validation/validatePhone";
import validatePasswords from "../validation/validatePasswords";
import apiActions from "./apiActions";

const TIME_BEFORE_CLEAR_ERROR = 2500;

/** DOM events Auth Modal handlers
 *
 */
export default class authModalActions {

    constructor(dispatch, transactionToken, username,loginType) {
        this.api = new apiActions(dispatch)
        this.dispatch = dispatch
        this.transactionToken = transactionToken
        this.username = username
        this.loginType = loginType
    }

    closeModal() {
        this.dispatch({type: 'closeAuthModal'})
    }

    goBack() {
        this.dispatch({type: 'reStartAuthForm'})
    }

    /**
     *  Handler - sign up
     */
    doSignUp() {
        const w = window,
            items = {
                username: w.sign_username,
                email: w.sign_email,
                phone: w.sign_tel,
                password: w.sign_password,
                rePassword: w.sign_rePassword
            }
        this.dispatch({type: 'setNotification', notification: ''})

        if (ValidateInputRequired.validate(Object.values(items)) &&
            ValidateEmail.validate(items.email) &&
            ValidatePhone.validate(items.phone) &&
            validatePasswords.validate(items.password, items.rePassword)) {
            this.api.signUp(items, this.dispatch)
        } else { // показаны ошибки
            setTimeout(() => ValidateInputRequired.clear(Object.values(items)), TIME_BEFORE_CLEAR_ERROR)
        }
    }

    /** Private service method - checking 'isRequired' input field
     *
     * @param items - input field
     * @param callback - success callback
     * @private
     */
    _validateRequired(items, callback){
        if (ValidateInputRequired.validate(items)) {
            callback()
        } else { // показаны ошибки
            setTimeout(() => ValidateInputRequired.clear(items), TIME_BEFORE_CLEAR_ERROR)
        }
    }

    /**
     * Handler - authentication by password
     */
    doLoginPassword() {
        this._validateRequired([window.password__input],
            ()=>this.api.loginWithPassword(this.username, window.password__input.value))
    }

    /** When has typed SMS|Email code
     *  Handler - войти по коду
     */
    doLoginCode() {
        this._validateRequired([window.authcode__input],
            ()=>this.api.loginWithCode(window.authcode__input.value, this.transactionToken))
    }

    /**
     * Handler of launcher form
     */
    loginSubmitButton() {
        this.username = window.start_username.value

        const statusPack = {
            username: this.username,
            animated: false,
            notification: '',
        }
        switch (this.loginType) {
            case 'signUp':
                statusPack['authFormType'] = this.loginType
                break
            case 'password':
                this._validateRequired([window.start_username],
                    ()=>statusPack['authFormType'] = this.loginType)
                break
            case 'sms':
            case 'email':
                this._validateRequired([window.start_username],
                    ()=>this.api.loginSendCode(this.username, this.loginType)
                )
                break
            case 'social':
                break
        }
        this.dispatch({type: 'changeLoginTabs', pack: statusPack})
    }


    /**  Handler - choose kind of authentication
     *
     * @param e - DOM event
     */
    loginControlTabs(e) {
        this.username = window.start_username.value
        this.loginType = e.target.getAttribute('data-name')

        const statusPack = {
            loginType: this.loginType,
            username: this.username
        };

        const clearForm = () => {
            statusPack['animated'] = false
            statusPack['notification'] = ''
        };

        if (this.username === '') {
            if (this.loginType !== 'signUp' && this.loginType !== 'social') {
                window.start_username.focus();
            }
        }

        switch (this.loginType) {
            case 'signUp':
                clearForm()
                statusPack['authFormType'] = this.loginType
                break
            case 'password':
                if (this.username !== '') {
                    clearForm()
                    statusPack['authFormType'] = this.loginType
                } else {
                    statusPack['authFormType'] = 'login'
                }
                break
            case 'sms':
            case 'email':
                if (this.username !== '') {
                    clearForm()
                    this.api.loginSendCode(this.username, this.loginType);
                } else {
                    statusPack['authFormType'] = 'login'
                }
                break
            case 'social':
                statusPack['authFormType'] = 'social'
        }

        this.dispatch({type: 'changeLoginTabs', pack: statusPack})
    }
}