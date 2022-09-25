import { DeviceInfo } from '../deviceInfo.model';

export class CreateDeviceDto {
  readonly name: string;
  readonly price: string;
  readonly img: string;
  readonly brandId: string;
  readonly typeId: string;
  readonly info: DeviceInfo[];
}
