import API from "../api/API";
import config from "../../app/config/config";

/** apiActions - wraps of the FetchAPI
 *
 */
export default class apiActions extends API {

    /** action - authentication by password
     *  called from authModalActions::doLoginPassword()
     * @param username
     * @param password
     */
    loginWithPassword(username, password) {

        this.wrapFetch(
            `${this.host}/rest/1/full-login`,
            'POST',
            {username, password},

        (response) => {
            this.dispatch({type: 'closeAuthModal'});
            config.product_mode || console.log(response.Location);
            response.Location && (document.location = response.Location);
        },

        (response) => {
            this.dispatch({type: 'setAuthFormType', authFormType: 'login'});
            switch(response.status) {
                case 401:
                    this.dispatch({type: 'setNotification', notification: 'Неверный логин или пароль'});
                    config.product_mode || console.error('неверный логин или пароль');
                    return true
            }
            return false

        })
    };

    /** action - request to sending code
     *  called from authModalActions::loginSubmitButton()
     * @param username
     * @param loginType <sms, email>
     */
    loginSendCode(username, loginType) {

        this.wrapFetch(
            `${this.host}/rest/1/interact-login`,
            'POST',
            {username, howsend: loginType},

        (response) => {
            let authType;
            switch(loginType) {
                case 'sms':
                    authType = 'codeSMS'
                    break
                case 'email':
                    authType = 'codeEmail'
                    break
                default: 
                    authType = 'login'
            };
            this.dispatch({type: 'setTransactionToken', transactionToken: response.tranzaction_token,
                authFormType: authType});
        },

        (response) => {
            this.dispatch({type: 'setAuthFormType', authFormType: 'login'});
            switch (response.status) {
                case 401:
                    this.dispatch({type: 'setNotification', notification: 'Пользователь не найден'});
                    config.product_mode ||console.error('пользователь не найден');
                    return true;
                case 422:
                    this.dispatch({type: 'setNotification', notification: 'Не удалось отправить SMS/Email'});
                    config.product_mode || console.error('не удалось отправить код доступа');
                    return true;
            }
            return false;
        })
    };

    /** action - authentication by email or SMS code
     *  called from authModalActions::doLoginCode()
     *
     * @param code
     * @param transactionToken
     */
    loginWithCode(code, transactionToken) {

        this.wrapFetch(
            `${this.host}/rest/1/interact-login`,
            'POST',
            {access_token: code, tranzaction_token: transactionToken},

        (response) => {
            this.dispatch({type: 'closeAuthModal'});
            config.product_mode || console.log(response.Location);
            response.Location && (document.location = response.Location);
        },

        (response) => {
            this.dispatch({type: 'setAuthFormType', authFormType: 'login'});
            switch(response.status) {
                case 401:
                    this.dispatch({type: 'setNotification', notification: 'Пользователь не найден'});
                    config.product_mode ||console.error('пользователь не найден');
                    return true;
            }
            return false;
        })
    };

    /** action - sign up
     *  called from authModalActions::doSignUp()
     *
     * @param items
     */
    signUp(items) {

        if (typeof config.addCounters === 'function') {
            config.addCounters();
        }

        const {username, email, phone, password} = items,
            payload = {
                username: username.value,
                email: email.value,
                phone: phone.value.replace(/ /g, ""),
                password: password.value
            }

        this.wrapFetch(
            `${this.host}/rest/1/signup`,
            'POST',
            payload,

        (response) => {
            this.dispatch({type: 'closeAuthModal'});
            config.product_mode || console.log(response.Location);
            response.Location && (document.location = response.Location);
        },

        async (response) => {
            switch (response.status) {
                case 400:
                    let json = await response.json(),
                    message = (json.email && json.email[0]) ||
                        (json.username && json.username[0]) ||
                        (json.phone && json.phone[0]) ||
                        (json.password && json.password[0]) ||
                        'не удалось по техническим причинам';

                    this.dispatch({
                        type: 'setNotification',
                        notification: message
                    }); // e-mail in use
                    config.product_mode ||console.error('смотри совместимость API,', message);
                    return true;
            }
            return false;
        });
    }
}
