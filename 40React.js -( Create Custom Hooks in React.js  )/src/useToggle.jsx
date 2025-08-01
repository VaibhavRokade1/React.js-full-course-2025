import { useState } from "react";

const useToggler = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  function toggle(val) {
    if (typeof val != "Boolean") {
      setValue(!value);
    } else {
      setValue(val);
    }
  }
  return { value, toggle };
};

export default useToggler;
