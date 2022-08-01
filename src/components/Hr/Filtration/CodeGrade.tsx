import {Stars} from '../../../types/enums/Stars';
import {StarsBtns} from './StarsBtns';

interface Props {
  codeGrade: Stars[];
  setCodeGrade: (param: Stars[]) => void;
  toggleBtn: any;
  clear: boolean;
  setClear: (param: boolean) => void;
}

export const CodeGrade = ({
  codeGrade,
  setCodeGrade,
  toggleBtn,
  clear,
  setClear,
}: Props) => {
  return (
    <>
      <div className="input-wrapper">
        <p className="title">Ocena kodu w projekcie własnym</p>
        <div className="input-box">
          <StarsBtns
            grade={codeGrade}
            setGrade={setCodeGrade}
            toggleBtn={toggleBtn}
            clear={clear}
            setClear={setClear}
          />
        </div>
      </div>
    </>
  );
};
