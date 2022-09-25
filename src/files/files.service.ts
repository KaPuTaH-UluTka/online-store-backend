import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import uuid from 'uuid';
import { resolve, join } from 'path';
import * as fs from 'fs';

@Injectable()
export class FilesService {
  async createFile(file) {
    try {
      const fileName = uuid.v4 + '.jpg';
      const filePath = resolve(__dirname, '..', 'static');
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(join(filePath, fileName), file.buffer);
      return fileName;
    } catch (err) {
      throw new HttpException(
        'An error occurred while uploading the file',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
