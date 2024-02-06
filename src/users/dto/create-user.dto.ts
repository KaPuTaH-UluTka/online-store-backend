import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'string', description: 'Email' })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;
  @ApiProperty({ example: 'string', description: 'Password' })
  @IsString({ message: 'Should be a string' })
  @Length(8, 16, { message: 'Longer than 8 and less than 16' })
  readonly password: string;
}
