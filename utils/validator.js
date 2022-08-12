// 判断是否为手机号
export const isPoneAvailable = pone => {
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test(pone)) {
    return false;
  } else {
    return true;
  }
};

 // 判断是否为电话号码
 export const  isTelAvailable= (tel)=> {
    var myreg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    if (!myreg.test(tel)) {
      return false;
    } else {
      return true;
    }
  },