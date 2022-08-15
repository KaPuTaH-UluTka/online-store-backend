import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationException } from '../exeptions/validation.exeption';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: string, metadata: ArgumentMetadata): Promise<void | string> {
    const obj = plainToInstance(metadata.metatype, value);
    const errors = await validate(obj);

    if (errors.length) {
      const messages = errors.map((err) => {
        return `${err.property} - ${Object.values(err.constraints).join(', ')}`;
      });
      throw new ValidationException(messages);
    }
  }
}
