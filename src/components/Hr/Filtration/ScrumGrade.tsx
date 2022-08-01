import {Stars} from '../../../types/enums/Stars';
import {StarsBtns} from './StarsBtns';

interface Props {
  scrumGrade: Stars[];
  setScrumGrade: (param: Stars[]) => void;
  toggleBtn: any;
  clear: boolean;
  setClear: (param: boolean) => void;
}

export const ScrumGrade = ({
  scrumGrade,
  setScrumGrade,
  toggleBtn,
  clear,
  setClear,
}: Props) => {
  return (
    <>
      <div className="input-wrapper">
        <p className="title">Ocena pracy w zespole w Scrum</p>
        <div className="input-box">
          <StarsBtns
            grade={scrumGrade}
            setGrade={setScrumGrade}
            toggleBtn={toggleBtn}
            clear={clear}
            setClear={setClear}
          />
        </div>
      </div>
    </>
  );
};
