const form = document.forms;
let selectedPasswordLength = document.querySelector(".length");
let choicePasswordLength = document.querySelector(".password_length");

choicePasswordLength.addEventListener("input", (event) => {
  selectedPasswordLength.innerHTML = `(${event.target.value})`;
});

const initialState = {
  password: "",
};

const store = new Store(updateState, initialState);
store.subscribe(() => console.log("state: ", store.getState()));
let { dispatch } = store;

const UPPERCASE = "UPPERCASE LETTERS";
const LOWERCASE = "LOWERCASE LETTERS";
const NUMBERCASE = "NUMBER";

function updateState(state, action) {
  switch (action.type) {
    case UPPERCASE: {
      return {
        ...state,
        password: (state.password += action.symbol),
      };
    }
    case LOWERCASE: {
      return {
        ...state,
        password: (state.password += action.symbol),
      };
    }
    case NUMBERCASE: {
      return {
        ...state,
        password: (state.password += action.symbol),
      };
    }
    default:
      return state;
  }
}

const getUppperCase = (symbol) => ({ type: UPPERCASE, symbol });
const getLowerCase = (symbol) => ({ type: LOWERCASE, symbol });
const getNumber = (symbol) => ({ type: NUMBERCASE, symbol });

const UPPER = bindActionCreator(getUppperCase, dispatch);
const LOWER = bindActionCreator(getLowerCase, dispatch);
const NUMBER = bindActionCreator(getNumber, dispatch);

function setState() {
  for (let [range, number, lower, upper, output, btn] of form) {
    btn.addEventListener("click", () => {
      if (number.checked === true) {
        NUMBER(symbolCodePoint(48, 57));
      }
      if (lower.checked === true) {
        LOWER(symbolCodePoint(97, 122));
      }
      if (upper.checked === true) {
        UPPER(symbolCodePoint(65, 90));
      }
      output.value = setValue(
        range.value,
        Object.values(store.getState()).join()
      );
      store.clearState();
    });
  }
}

setState();

// HELP FUNCTION
function symbolCodePoint(start, end) {
  let value = "";

  for (let i = start; i <= end; i++) {
    value += String.fromCodePoint(i);
  }
  return value;
}

function setValue(length, string) {
  var text = "";
  var possible = string;

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function bindActionCreator(creator, dispatch) {
  return (...args) => {
    dispatch(creator(...args));
  };
}
// *********
