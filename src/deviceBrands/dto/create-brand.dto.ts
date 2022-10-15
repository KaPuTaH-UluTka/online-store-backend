import { IsString } from 'class-validator';

export class CreateBrandDto {
  @IsString({ message: 'Should be a string' })
  readonly name: string;
}
