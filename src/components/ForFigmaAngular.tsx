import { FunctionComponent } from "react";
import "./ForFigmaAngular.css";

type ForFigmaAngularType = {
  forFigmaAngular?: string;
};

const ForFigmaAngular: FunctionComponent<ForFigmaAngularType> = ({
  forFigmaAngular = "12",
}) => {
  return <b className="for-figma">{forFigmaAngular}</b>;
};

export default ForFigmaAngular;
