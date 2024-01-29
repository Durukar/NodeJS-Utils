import path from 'node:path';
import fs from 'node:fs';
import { EChoicesBoilerPlate } from 'enum/choices-boilerplate.enum';
import { EGitName } from 'enum/git-name.enum';
import { IAnswers } from 'interface/answers.interface';
import shelljs from 'shelljs';

class GenerateController {
  public gen(answers: IAnswers) {
    try {
      switch (answers.tech) {
        case EChoicesBoilerPlate.NODEJS_TS:
          this._execPath(EGitName.GIT_NODEJS_TS, answers.folderName);
          break;
        case EChoicesBoilerPlate.SCSS:
          this._execPath(EGitName.GIT_SCSS, answers.folderName);
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
  private _execPath(gitName: string, folderName: string) {
    try {
      shelljs.cd(path.resolve());
      shelljs.exec(`git clone git@github.com:Durukar/${gitName}.git`);

      fs.renameSync(
        `${path.join(path.resolve(), gitName)}`,
        `${path.join(path.resolve(), folderName)}`,
      );

      console.log('Arquivo criado com sucesso!');
      return shelljs.exit();
    } catch (error) {
      console.log(error);
    }
  }
}

export const GenFile = new GenerateController();
