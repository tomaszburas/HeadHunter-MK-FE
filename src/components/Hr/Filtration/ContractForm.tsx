import {FormEvent, useEffect, useState} from 'react';
import {ContractType} from '../../../types/enums/ContractType';

interface Props {
  contract: ContractType[];
  setContract: (param: ContractType[]) => void;
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
  const [whatever, setWhatever] = useState(false);
  const [b2b, setB2b] = useState(false);
  const [uop, setUop] = useState(false);
  const [uz, setUz] = useState(false);
  const [uod, setUod] = useState(false);

  useEffect(() => {
    if (clear) {
      setWhatever(false);
      setB2b(false);
      setUop(false);
      setUz(false);
      setUod(false);

      setClear(false);
    }
  }, [clear, setClear]);

  const handleBtn = (
    e: FormEvent,
    state: ContractType,
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
              whatever
                ? 'filtration-btn filtration-btn--blue'
                : 'filtration-btn'
            }
            onClick={(e) => handleBtn(e, ContractType.WHATEVER, setWhatever)}
          >
            {ContractType.WHATEVER}
          </button>
          <button
            className={
              b2b ? 'filtration-btn filtration-btn--blue' : 'filtration-btn'
            }
            onClick={(e) => handleBtn(e, ContractType.B2B, setB2b)}
          >
            {ContractType.B2B}
          </button>
          <button
            className={
              uop ? 'filtration-btn filtration-btn--blue' : 'filtration-btn'
            }
            onClick={(e) => handleBtn(e, ContractType.UOP, setUop)}
          >
            {ContractType.UOP}
          </button>
          <button
            className={
              uz ? 'filtration-btn filtration-btn--blue' : 'filtration-btn'
            }
            onClick={(e) => handleBtn(e, ContractType.UZ, setUz)}
          >
            {ContractType.UZ}
          </button>
          <button
            className={
              uod ? 'filtration-btn filtration-btn--blue' : 'filtration-btn'
            }
            onClick={(e) => handleBtn(e, ContractType.UOD, setUod)}
          >
            {ContractType.UOD}
          </button>
        </div>
      </div>
    </>
  );
};
