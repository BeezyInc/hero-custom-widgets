import React from "react";
import StyledIcon from "./Icon.styles";

const Twitter: React.FunctionComponent = (): React.ReactElement => {
  return (
    <StyledIcon
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M7.106 16.58c-1.844 0-3.568-.54-5.012-1.471.253.033.519.046.778.046 1.531 0 2.943-.526 4.061-1.398-1.431-.027-2.636-.972-3.055-2.27.2.04.406.06.612.06.3 0 .586-.04.859-.113-1.498-.3-2.623-1.624-2.623-3.208v-.04c.44.246.945.393 1.478.406C3.338 8.006 2.759 7 2.759 5.869c0-.599.16-1.158.44-1.644 1.618 1.977 4.028 3.281 6.743 3.414-.053-.24-.086-.485-.086-.745 0-1.804 1.464-3.269 3.269-3.269.938 0 1.79.4 2.39 1.032.745-.146 1.444-.419 2.077-.792-.246.766-.766 1.405-1.438 1.81.66-.079 1.291-.252 1.877-.512-.44.659-.992 1.232-1.631 1.69.006.14.006.28.006.427.007 4.314-3.288 9.3-9.3 9.3z"
        clipRule="evenodd"
      />
    </StyledIcon>
  );
};

export default Twitter;
