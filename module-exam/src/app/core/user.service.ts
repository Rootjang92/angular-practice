import { Injectable } from '@angular/core';
import { User } from '../user';
import { CoreModule } from './core.module';

@Injectable()

export class UserService {
  getUser(): User {
    return { id: 1, name: 'Lee', admin: true };
  }
}
