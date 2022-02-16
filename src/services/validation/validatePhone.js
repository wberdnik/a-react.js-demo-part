import BaseValidate from "./baseValidate";

const text = 'Укажите телефон'

export default class ValidatePhone extends BaseValidate{
    static validate(phoneItem){
        const {phoneReg} = BaseValidate.regPatt
        if(!phoneItem.value.match(phoneReg)){
            phoneItem.parentNode.setAttribute(BaseValidate.attrName(),text)
            return false
        }
        return true
    }

}
