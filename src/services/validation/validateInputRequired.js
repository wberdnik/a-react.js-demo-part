import BaseValidate from "./baseValidate";

const text = 'Заполните это поле'

export default class ValidateInputRequired extends BaseValidate{
    static validate(inputItems){
        let success = !0
        inputItems.forEach(item=>{
            if(item.value.trim() === ''){
                item.parentNode.setAttribute(BaseValidate.attrName(),text)
                success = !1
            }
        })

        return success
    }

}
