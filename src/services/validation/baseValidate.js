
export default class BaseValidate{
    static attrName(){return 'data-tip'}

    static regPatt = {
        phoneReg: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,16}(\s*)?$/,
        emailReg: /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm,
    }

    static clear(inputItems){
        inputItems.forEach(item=>
            item.parentNode.hasAttribute(
                BaseValidate.attrName()) &&
            item.parentNode.removeAttribute(BaseValidate.attrName()))
    }

}
