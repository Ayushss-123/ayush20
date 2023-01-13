import { FunctionComponent } from "react";
import "./UselessItemsOnWhiteBackgro.css";

type UselessItemsOnWhiteBackgroType = {
  uselessItemsOnWhiteBackgr?: string;
};

const UselessItemsOnWhiteBackgro: FunctionComponent<
  UselessItemsOnWhiteBackgroType
> = ({ uselessItemsOnWhiteBackgr = "32" }) => {
  return <div className="useless-items-on">{uselessItemsOnWhiteBackgr}</div>;
};

export default UselessItemsOnWhiteBackgro;
