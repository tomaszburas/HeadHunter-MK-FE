import {FormEvent, useEffect, useState} from 'react';
import {WorkType} from '../../../types/enums/WorkType';

interface Props {
  workplace: WorkType[];
  setWorkplace: (param: WorkType[]) => void;
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
  const [stay, setStay] = useState(false);
  const [move, setMove] = useState(false);
  const [hybrid, setHybrid] = useState(false);
  const [whatever, setWhatever] = useState(false);

  useEffect(() => {
    if (clear) {
      setRemote(false);
      setStay(false);
      setMove(false);
      setHybrid(false);
      setWhatever(false);

      setClear(false);
    }
  }, [clear, setClear]);

  const handleBtn = (
    e: FormEvent,
    state: WorkType,
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
              whatever
                ? 'filtration-btn filtration-btn--blue'
                : 'filtration-btn'
            }
            onClick={(e) => handleBtn(e, WorkType.WHATEVER, setWhatever)}
          >
            {WorkType.WHATEVER}
          </button>
          <button
            className={
              remote ? 'filtration-btn filtration-btn--blue' : 'filtration-btn'
            }
            onClick={(e) => handleBtn(e, WorkType.REMOTE, setRemote)}
          >
            {WorkType.REMOTE}
          </button>
          <button
            className={
              stay ? 'filtration-btn filtration-btn--blue' : 'filtration-btn'
            }
            onClick={(e) => handleBtn(e, WorkType.STAY, setStay)}
          >
            {WorkType.STAY}
          </button>
          <button
            className={
              move ? 'filtration-btn filtration-btn--blue' : 'filtration-btn'
            }
            onClick={(e) => handleBtn(e, WorkType.MOVE, setMove)}
          >
            {WorkType.MOVE}
          </button>
          <button
            className={
              hybrid ? 'filtration-btn filtration-btn--blue' : 'filtration-btn'
            }
            onClick={(e) => handleBtn(e, WorkType.HYBRID, setHybrid)}
          >
            {WorkType.REMOTE}
          </button>
        </div>
      </div>
    </>
  );
};
