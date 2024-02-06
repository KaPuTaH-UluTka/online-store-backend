import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@Injectable({})
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService
  ) {}

  async createUser(userDto: CreateUserDto) {
    const user = await this.userRepository.create(userDto);
    const role = await this.roleService.getRoleByValue('ADMIN');
    await user.$set('roles', [role.id]);
    user.roles = [role];
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUsersByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email }, include: { all: true } });
    return user;
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findOne({ where: { id }, include: { all: true } });
    return user;
  }

  async updateUserById(id: string, userDto: CreateUserDto) {
    const user = await this.userRepository.findOne({ where: { id }, include: { all: true } });
    user.email = userDto.email;
    return user;
  }

  async addRole(userDto: AddRoleDto) {
    const user = await this.userRepository.findByPk(userDto.userId);
    const role = await this.roleService.getRoleByValue(userDto.value);
    if (role && user) {
      await user.$add('role', role.id);
      return userDto;
    }
    throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);
  }

  async banUser(dto: BanUserDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    user.banned = true;
    user.banReason = dto.banReason;
    await user.save();
    return user;
  }
}
