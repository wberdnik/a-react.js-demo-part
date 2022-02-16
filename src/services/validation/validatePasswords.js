import BaseValidate from "./baseValidate";

const text = 'Пароли различны'

export default class ValidatePasswords extends BaseValidate{
    static validate(passwordItem, rePasswordItem){
        if(passwordItem.value !== rePasswordItem.value){
            rePasswordItem.parentNode.setAttribute(BaseValidate.attrName(),text)
            return false
        }
        return true
    }

}
