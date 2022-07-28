import {Stars} from '../../../types/enums/Stars';
import React, {FormEvent, useEffect, useState} from 'react';

interface Props {
  grade: Stars[];
  setGrade: (param: Stars[]) => void;
  toggleBtn: any;
  clear: boolean;
  setClear: (param: boolean) => void;
}

export const StarsBtns = ({
  grade,
  setGrade,
  toggleBtn,
  clear,
  setClear,
}: Props) => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

  useEffect(() => {
    if (clear) {
      setOne(false);
      setTwo(false);
      setThree(false);
      setFour(false);
      setFive(false);

      setClear(false);
    }
  }, [clear]);

  const handleBtn = (
    e: FormEvent,
    star: Stars,
    setState: (param: (prev: boolean) => boolean) => void
  ) => {
    toggleBtn(e, star, grade, setGrade);
    setState((prev) => !prev);
  };

  return (
    <>
      <button
        className={
          five ? 'filtration-btn filtration-btn--blue' : 'filtration-btn'
        }
        onClick={(e) => handleBtn(e, Stars.FIVE, setFive)}
      >
        {Stars.FIVE} <i className="bx bxs-star" />
      </button>
      <button
        className={
          four ? 'filtration-btn filtration-btn--blue' : 'filtration-btn'
        }
        onClick={(e) => handleBtn(e, Stars.FOUR, setFour)}
      >
        {Stars.FOUR} <i className="bx bxs-star" />
      </button>
      <button
        className={
          three ? 'filtration-btn filtration-btn--blue' : 'filtration-btn'
        }
        onClick={(e) => handleBtn(e, Stars.THREE, setThree)}
      >
        {Stars.THREE} <i className="bx bxs-star" />
      </button>
      <button
        className={
          two ? 'filtration-btn filtration-btn--blue' : 'filtration-btn'
        }
        onClick={(e) => handleBtn(e, Stars.TWO, setTwo)}
      >
        {Stars.TWO} <i className="bx bxs-star" />
      </button>
      <button
        className={
          one ? 'filtration-btn filtration-btn--blue' : 'filtration-btn'
        }
        onClick={(e) => handleBtn(e, Stars.ONE, setOne)}
      >
        {Stars.ONE} <i className="bx bxs-star" />
      </button>
    </>
  );
};
