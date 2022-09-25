import { IsString } from 'class-validator';

export class CreateTypeDto {
  @IsString({ message: 'Should be a string' })
  readonly name: string;
}
