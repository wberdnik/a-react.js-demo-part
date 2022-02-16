import config from "../../app/config/config";

/**
 * Fetch API transport
 */
export default class API {

    constructor(dispatch) {
        this.host = config.product_mode ? window.location.origin : config.localURL;
        this.dispatch = dispatch;
    }

    /** wrap of native Fetch
     *
     * @param url
     * @param method - http method
     * @param payload - body content
     * @param successMethod - success callback
     * @param errorMethod - error callback
     * @return {Promise<void>}
     */
    async wrapFetch(url, method, payload, successMethod, errorMethod) {

        const fetchOptions = {
            method,
            mode: config.product_mode ? 'same-origin' : 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: config.product_mode ? 'same-origin' : 'include',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
        }

        if (method in {PUT: 1, PATCH: 1, POST: 1}) {
            fetchOptions.body = JSON.stringify(payload)
        }

        const response = await fetch(url, fetchOptions);
        config.product_mode || console.log(response.status);

        if (response.status >= 200 && response.status < 300) {
            const json = await response.json()
                 //extracted

            successMethod(json)
            return
        }

        this._errorsHandling(response, errorMethod);
    };

    _errorsHandling(response, errorMethod) {
        if (errorMethod && errorMethod(response)) {
                return
        }
        switch (response.status) {
            case 405:
                this.dispatch({type: 'setNotification', notification: 'Технический сбой (405)'});
                config.product_mode ||console.error('неверный http метод');
                break;
            case 411:
                this.dispatch({type: 'setNotification', notification: 'Технический сбой (411)'});
                config.product_mode || console.error('постороннее вмешательстово, нет content-length от браузера');
                break;
            case 413:
                this.dispatch({type: 'setNotification', notification: 'Технический сбой (413)'});
                config.product_mode || console.error('нереально большой логин / пароль');
                break;
            case 415:
                this.dispatch({type: 'setNotification', notification: 'Технический сбой (415)'});
                config.product_mode || console.error('недопустимый формат данных в заголовке');
                break;
            case 429:
                this.dispatch({type: 'setNotification', notification: 'Лимит попыток авторизации'});
                config.product_mode || console.error('слишком много попыток авторизации');
                break;
            case 500:
                this.dispatch({type: 'setNotification', notification: 'Ошибка на сервере (500)'});
                config.product_mode || console.error('ошибка на сервере');
                break;
            default:
                this.dispatch({type: 'setNotification', notification: `Технический сбой (${response.status})`});
                config.product_mode || console.error('неизвестная ошибка');
        }
    };

};
