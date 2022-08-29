import { Store } from "./store/Store.js";
import { UPDATESTATE, updateState } from "./reducers/reducers.js";
import { symbolCodePoint, setValue, bindActionCreator } from "./utils/utils.js";

const form = document.getElementById("form");
let labelPasswordLength = document.querySelector(".length");
let rangePasswordLength = document.querySelector(".password_length");

rangePasswordLength.addEventListener("input", (event) => {
  labelPasswordLength.innerHTML = `(${event.target.value})`;
});

const initialState = {
  password: "",
};

const store = new Store(updateState, initialState);
store.subscribe(() => console.log("state: ", store.getState()));
let { dispatch } = store;

const initUpDateState = (symbol) => ({ type: UPDATESTATE, symbol });

const UPPER = bindActionCreator(initUpDateState, dispatch);
const LOWER = bindActionCreator(initUpDateState, dispatch);
const NUMBER = bindActionCreator(initUpDateState, dispatch);

function setState() {
  const [range, number, lower, upper, output, btn] = form;
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

setState();
