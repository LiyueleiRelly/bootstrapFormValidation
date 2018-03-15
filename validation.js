
(function ($) {
    $.fn.validation = function (option) {
        var res = true;
        var nullReg = /^\s*$/g;
        for (var i = 0, length = option.formElement.length; i < length; i++) {
            var value = option.formElement[i];
            var currentOElemnt = value.hasOwnProperty('id') ? $('#' + value.id) : this.find('[name=' + value.name + ']');
            if (value.hasOwnProperty('notNull')) {
                if (!validationInfo.call(currentOElemnt, !nullReg.test(currentOElemnt.val()), value.nullMessage)) {
                    res = false;
                    continue;
                }
            }
            if (value.hasOwnProperty('reg')) {
                if (Object.prototype.toString.call(value.reg) !== '[object Array]') {
                    if (!validationInfo.call(currentOElemnt, value.reg.test(currentOElemnt.val()), value.regMessage)) {
                        res = false;
                        continue;
                    }
                }
                for (var j = 0, regLength = value.reg.length; j < regLength; j++) {
                    var regObject = value.reg[j];
                    if (!validationInfo.call(currentOElemnt, regObject.reg.test(currentOElemnt.val()), regObject.regMessage)) {
                        res = false;
                        break;
                    }
                }
            }
        }
        return res;
    }

}(jQuery));
function validationInfo(isTrue, info) {
    var tmp = isTrue ? 'success' : 'error';
    var icon = isTrue ? 'ok' : 'remove';
    $(this).parents('.form-group').removeClass('has-success has-error').addClass('has-' + tmp + ' has-feedback');
    $(this).nextAll().remove('span');
    var html = [
        '<span class="glyphicon glyphicon-' + icon + ' form-control-feedback" aria-hidden="true"></span>',
        '<span class="sr-only">(' + tmp + ')</span>',
    ];
    if (!isTrue) {
        html.push('<span class="help-block">' + info + '</span>')
    }
    $(this).after(html.join(''))
    return isTrue;
};


