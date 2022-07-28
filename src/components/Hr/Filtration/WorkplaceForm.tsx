import React, {FormEvent, useEffect, useState} from 'react';
import {Workplace} from '../../../types/enums/Workplace';

interface Props {
  workplace: Workplace[];
  setWorkplace: (param: Workplace[]) => void;
  toggleBtn: any;
  clear: boolean;
  setClear: (param: boolean) => void;
}

export const WorkplaceForm = ({
  workplace,
  setWorkplace,
  toggleBtn,
  clear,
  setClear,
}: Props) => {
  const [remote, setRemote] = useState(false);
  const [office, setOffice] = useState(false);

  useEffect(() => {
    if (clear) {
      setRemote(false);
      setOffice(false);

      setClear(false);
    }
  }, [clear]);

  const handleBtn = (
    e: FormEvent,
    state: Workplace,
    setState: (param: (prev: boolean) => boolean) => void
  ) => {
    toggleBtn(e, state, workplace, setWorkplace);
    setState((prev) => !prev);
  };

  return (
    <>
      <div className="input-wrapper">
        <p className="title">Preferowane miejsce pracy</p>
        <div className="input-box">
          <button
            className={
              office ? 'filtration-btn filtration-btn--blue' : 'filtration-btn'
            }
            onClick={(e) => handleBtn(e, Workplace.OFFICE, setOffice)}
          >
            {Workplace.OFFICE}
          </button>
          <button
            className={
              remote ? 'filtration-btn filtration-btn--blue' : 'filtration-btn'
            }
            onClick={(e) => handleBtn(e, Workplace.REMOTE, setRemote)}
          >
            {Workplace.REMOTE}
          </button>
        </div>
      </div>
    </>
  );
};
