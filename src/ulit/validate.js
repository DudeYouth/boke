export default {
    // 验证手机号码
    checkMobile(value) {
        if (/^1[35678][0-9]{9}$/.test(value)) {
            return true;
        } else {
            return false;
        }
    },
    // 验证密码
    checkPasswd(value) {
        if (/^[\da-zA-Z\+\-\.\!\$#@\(\)\[\]\{\},\\/\?]{6,16}$/.test(value)) {
            return true;
        } else {
            return false;
        }
    },
    // 验证邮箱
    checkEmail(value) {
        if (/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$ /.test(value)) {
            return true;
        } else {
            return false;
        }
    }
}