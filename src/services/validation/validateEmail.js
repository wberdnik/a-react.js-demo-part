import BaseValidate from "./baseValidate";

const text = 'Укажите e-mail'

export default class ValidateEmail extends BaseValidate{
    static validate(emailItem){
        const {emailReg} = BaseValidate.regPatt

        if(!emailItem.value.match(emailReg)){
            emailItem.parentNode.setAttribute(BaseValidate.attrName(),text)
            return false
        }
        return true
    }

}
