import {Stars} from '../../../types/enums/Stars';
import {StarsBtns} from './StarsBtns';

interface Props {
  courseGrade: Stars[];
  setCourseGrade: (param: Stars[]) => void;
  toggleBtn: any;
  clear: boolean;
  setClear: (param: boolean) => void;
}

export const CourseGrade = ({
  courseGrade,
  setCourseGrade,
  toggleBtn,
  clear,
  setClear,
}: Props) => {
  return (
    <>
      <div className="input-wrapper">
        <p className="title">Ocena przejścia kursu</p>
        <div className="input-box">
          <StarsBtns
            setGrade={setCourseGrade}
            grade={courseGrade}
            toggleBtn={toggleBtn}
            clear={clear}
            setClear={setClear}
          />
        </div>
      </div>
    </>
  );
};
