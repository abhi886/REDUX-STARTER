import store from "./store";
store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug 1",
  },
});

console.log(store.getState());
