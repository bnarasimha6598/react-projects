import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: "primary" | "secondary" | "danger" | "info" | "warning";
  onClose: () => void;
}

const Alert = ({ children, color, onClose }: Props) => {
  return (
    <div className={"alert alert-" + color + " alert-dismissible"} role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-dismiss="alert"
      ></button>
    </div>
  );
};

export default Alert;
