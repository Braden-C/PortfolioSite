import { useContext } from "react";
import InfoContext from "../Context/Info";

function useInfoContext() {
  return useContext(InfoContext);
}

export default useInfoContext;
