export interface AddStudentInterface {
  [key: string]: any;
  id: number;
  email: string;
  courseCompletion: number;
  courseEngagement: number;
  projectDegree: number;
  teamProjectDegree: number;
  bonusProjectUrls: string[];
}
