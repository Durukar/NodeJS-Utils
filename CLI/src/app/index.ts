import { GenFile } from 'controller/generate.controller';
import inquirer from 'inquirer';

// Interface
import { IAnswers } from 'interface/answers.interface';
import { questions } from 'questions/techsQuestions';

// Questions
class Init {
  constructor() {
    inquirer.prompt(questions).then((answers: IAnswers) => {
      GenFile.gen(answers);
    });
  }
}

new Init();
