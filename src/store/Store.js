class Store {
    constructor(updateState, state) {
      this._updateState = updateState;
      this._state = state;
      this._callbacks = [];
    }
  
    getState = () => this._state;
  
    dispatch = (action) => {
      this._state = this._updateState(this._state, action);
      this._callbacks.forEach((cb) => cb());
    };
  
    subscribe = (callback) => {
      this._callbacks.push(callback);
    };
    clearState = () => (this._state = "");
  }
  