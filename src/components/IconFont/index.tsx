import { FC } from "react";

interface IProps {
  className: string;
  onClick?: () => void;
}

const IconFont: FC<IProps> = ({ className, onClick }) => {
  return (
    <i className={`iconfont cursor-pointer ${className}`} onClick={onClick}></i>
  );
};
export default IconFont;
