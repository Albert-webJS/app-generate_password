export function symbolCodePoint(start, end) {
    let value = "";
  
    for (let i = start; i <= end; i++) {
      value += String.fromCodePoint(i);
    }
    return value;
  }
  
export function setValue(length, string) {
    var text = "";
    // переиминовать 
    var possible = string;
  
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
export function bindActionCreator(creator, dispatch) {
    return (...args) => {
      dispatch(creator(...args));
    };
  }
