import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { resolve, join } from 'path';
import * as fs from 'fs';
import { v4 } from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file) {
    try {
      const fileName = v4() + '.jpg';
      const filePath = resolve(__dirname, '..', 'static');
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(join(filePath, fileName), file.buffer);
      return fileName;
    } catch (err) {
      console.log(err);
      throw new HttpException(
        'An error occurred while uploading the file',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
