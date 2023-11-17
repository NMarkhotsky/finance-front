import { Icon } from "../Icon/Icon";
import { ImageBox, ImageLoader } from "./Loader.styled";

export const Loader = () => {
  return (
    <ImageBox>
      <ImageLoader>
        {" "}
        <Icon iconName="icon-cabbage" width="80" height="80" />
      </ImageLoader>
    </ImageBox>
  );
};
