import React, { Dispatch, SetStateAction } from "react";
import styles from "./Card.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Card: React.FC<{
  managestate: {
    manageClasses: boolean;
    manageFee: boolean;
    manageAppointment: boolean;
  };
  setmanagestate: Dispatch<
    SetStateAction<{
      manageClasses: boolean;
      manageFee: boolean;
      manageAppointment: boolean;
    }>
  >;
  title: string;
}> = (props) => {
  const onClickHandler = () => {
    if (props.title === "Manage Classes") {
      props.setmanagestate((prev) => {
        return {
          manageClasses: !prev.manageClasses,
          manageFee: false,
          manageAppointment: false,
        };
      });
    }
    if (props.title === "Manage Appointments") {
      props.setmanagestate((prev) => {
        return {
          manageClasses: false,
          manageFee: false,
          manageAppointment: !prev.manageAppointment,
        };
      });
    }
    if (props.title === "Manage Fee Waived") {
      props.setmanagestate((prev) => {
        return {
          manageClasses: false,
          manageFee: !prev.manageFee,
          manageAppointment: false,
        };
      });
    }
  };

  return (
    <div>
      <div className={styles._header} onClick={onClickHandler}>
        <ArrowForwardIosIcon className={styles.icons} />
        <div className={styles._ui_title}>{props.title}</div>
      </div>
    </div>
  );
};

export default Card;
