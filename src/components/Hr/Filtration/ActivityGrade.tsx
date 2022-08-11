import {Stars} from '../../../types/enums/Stars';
import {StarsBtns} from './StarsBtns';

interface Props {
  engagementGrade: Stars[];
  setEngagementGrade: (param: Stars[]) => void;
  toggleBtn: any;
  clear: boolean;
  setClear: (param: boolean) => void;
}

export const ActivityGrade = ({
  engagementGrade,
  setEngagementGrade,
  toggleBtn,
  clear,
  setClear,
}: Props) => {
  return (
    <>
      <div className="input-wrapper">
        <p className="title">Ocena aktywności i zaangażowania na kursie</p>
        <div className="input-box">
          <StarsBtns
            grade={engagementGrade}
            setGrade={setEngagementGrade}
            toggleBtn={toggleBtn}
            clear={clear}
            setClear={setClear}
          />
        </div>
      </div>
    </>
  );
};
