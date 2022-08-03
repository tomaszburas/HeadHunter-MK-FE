import {FormAccount} from '../../assets/styled/Form/FormAccount';
import {InputWrapper} from '../../assets/styled/Form/InputWrapper';
import {Button} from '../Button';
import {useCSVReader} from 'react-papaparse';
import styled from 'styled-components';
import {FormEvent, useState} from 'react';
import {configPapaparse} from '../../config-papaparse';
import {AddStudentInterface} from '../../types/interfaces/Admin/AddStudentInterface';
import {toast} from 'react-toastify';

export const AddStudentsForm = () => {
  const {CSVReader} = useCSVReader();
  const [file, setFile] = useState<AddStudentInterface[] | null>(null);

  const handleForm = (e: FormEvent) => {
    e.preventDefault();

    if (file) {
      const resFile = file.map((obj) => {
        const bonusProjectUrls = [];
        for (const property in obj) {
          if (/^bonusProjectUrls/.test(property)) {
            bonusProjectUrls.push(`${obj[property]}`);
          }
        }

        return {
          id: obj.id,
          email: obj.email,
          courseCompletion: obj.courseCompletion,
          courseEngagement: obj.courseEngagement,
          projectDegree: obj.projectDegree,
          teamProjectDegree: obj.teamProjectDegree,
          bonusProjectUrls,
        };
      });

      return;
    }

    toast.error('Plik nie został dodany');
  };

  return (
    <FormAccount onSubmit={handleForm}>
      <InputWrapper>
        <div className="label-box">
          <label htmlFor="file">Plik CSV:</label>
        </div>
        <CSVReader
          onUploadAccepted={(results: any) => {
            setFile(results.data);
          }}
          config={configPapaparse}
        >
          {({getRootProps, acceptedFile, ProgressBar}: any) => (
            <Container>
              <ButtonFile type="button" {...getRootProps()}>
                Dodaj plik
              </ButtonFile>
              <FileBox>{acceptedFile && acceptedFile.name}</FileBox>
              <ProgressBar className="progress-bar" />
            </Container>
          )}
        </CSVReader>
      </InputWrapper>
      <div className="btn-box">
        <Button text="Dodaj" type="submit" />
      </div>
    </FormAccount>
  );
};

const ButtonFile = styled.button`
  background-color: ${(props) => props.theme.colors.darkBlue};
  color: ${(props) => props.theme.colors.white};
  border: none;
  cursor: pointer;
  padding: ${(props) => props.theme.paddingSize.sm};
  white-space: nowrap;
`;

const FileBox = styled.div`
  color: ${(props) => props.theme.colors.white};
  margin: 0 ${(props) => props.theme.marginSize.base};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 55%;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;
