import React from "react";
import { toggle, read, initiate } from "./localstorage.helper";

export const initialContext = {
  initiate: initiate(),
  load: read,
  toggle: (data, key) => toggle(data, key),
};

const Context = React.createContext(initialContext);

export default Context;
