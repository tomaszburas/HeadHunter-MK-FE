import React, {FormEvent, useEffect, useState} from 'react';
import {Contract} from '../../../types/enums/Contract';

interface Props {
  contract: Contract[];
  setContract: (param: Contract[]) => void;
  toggleBtn: any;
  clear: boolean;
  setClear: (param: boolean) => void;
}

export const ContractForm = ({
  contract,
  setContract,
  toggleBtn,
  clear,
  setClear,
}: Props) => {
  const [permanent, setPermanent] = useState(false);
  const [b2b, setB2b] = useState(false);
  const [contractWork, setContractWork] = useState(false);

  useEffect(() => {
    if (clear) {
      setPermanent(false);
      setB2b(false);
      setContractWork(false);

      setClear(false);
    }
  }, [clear]);

  const handleBtn = (
    e: FormEvent,
    state: Contract,
    setState: (param: (prev: boolean) => boolean) => void
  ) => {
    toggleBtn(e, state, contract, setContract);
    setState((prev) => !prev);
  };

  return (
    <>
      <div className="input-wrapper">
        <p className="title">Oczekiwany typ kontraktu</p>
        <div className="input-box">
          <button
            className={
              permanent
                ? 'filtration-btn filtration-btn--blue'
                : 'filtration-btn'
            }
            onClick={(e) => handleBtn(e, Contract.PERMANENT, setPermanent)}
          >
            {Contract.PERMANENT}
          </button>
          <button
            className={
              b2b ? 'filtration-btn filtration-btn--blue' : 'filtration-btn'
            }
            onClick={(e) => handleBtn(e, Contract.B2B, setB2b)}
          >
            {Contract.B2B}
          </button>
          <button
            className={
              contractWork
                ? 'filtration-btn filtration-btn--blue'
                : 'filtration-btn'
            }
            onClick={(e) =>
              handleBtn(e, Contract.CONTRACT_WORK, setContractWork)
            }
          >
            {Contract.CONTRACT_WORK}
          </button>
        </div>
      </div>
    </>
  );
};
