import React, { useContext, useEffect, useState } from "react";
import SearchMember from "./SearchMember";
import { Toaster, ToasterExample } from "@mbkit/toaster";
import styles from "./MemberDetails.module.scss";
import Header from "./Header";
import MemberTable from "./MemberTable/MemberTable";
import ApplyChargesModal from "../UI/ApplyChargesModal";
import CheckEnableContext from '../store/check-enable-context';

const MemberDetails = () => {
  const [isApply, setIsApply] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isTouchedConfirm, setIsTouchedConfirm] = useState(false);

  const enableCtx = useContext(CheckEnableContext);

  useEffect(() => {
    setTimeout(() => {
      setIsTouchedConfirm(false);
    }, 3000);
  }, [isConfirmed]);

  const showApplyHandler = () => {
    setIsApply(true);
  };

  const confirmHandler = (status: boolean) => {
    setIsTouchedConfirm(true);
    setIsConfirmed(status);
    setIsApply(false);
    console.log(status);
    
    enableCtx.isCheckEnabled = status;
    console.log(enableCtx.isCheckEnabled);
    
  }

  return (
      <div className={styles.member_details_page}>
        {isApply && <ApplyChargesModal onConfirm={confirmHandler} onClose={() => setIsApply(false)}/>}
        {isConfirmed && isTouchedConfirm && <Toaster className={styles.toaster} show={true}><label className={styles.t_text}>Charges applied successfully!</label></Toaster>}
        {!isConfirmed && isTouchedConfirm && <Toaster className={styles.toaster} show={true}>The cancellation has been successfully executed.</Toaster>}
        <SearchMember />
        <Header onApply={showApplyHandler} />
        <MemberTable />
      </div>
  );
};

export default MemberDetails;
