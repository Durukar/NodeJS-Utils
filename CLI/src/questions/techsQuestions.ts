import path from 'node:path';
import fs from 'node:fs';
import { EChoicesBoilerPlate } from 'enum/choices-boilerplate.enum';
import { EErrors } from 'enum/errors.enum';
import { EGitName } from 'enum/git-name.enum';
export const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Qual boilerplate devo criar?',
    choices: [EChoicesBoilerPlate.NODEJS_TS, EChoicesBoilerPlate.SCSS],
  },
  {
    type: 'input',
    name: 'folderName',
    message: 'Qual o nome de dar a pasta do Projeto?',
    validate(folderName: string) {
      if (!folderName) return EErrors.ERROR_NULL;
      if (/[^\w\s-]/.test(folderName)) return EErrors.ERROR_SPECIAL_CHARACTERS;
      if (
        folderName === EGitName.GIT_NODEJS_TS ||
        folderName === EGitName.GIT_SCSS
      )
        return EErrors.ERROR_GIT_NAME;

      try {
        const dir = path.resolve(folderName);
        fs.accessSync(dir, fs.constants.R_OK);
        return EErrors.ERROR_INVALID_FOLDER;
      } catch (error) {}
      return true;
    },
  },
];
