import { User } from '../app/wall/wall/interfaces/user.interface';

export function userFactory(): User {
  return {
    id: 'fake-id',
    name: 'fake-name',
    avatarUrl: 'fake-avatarUrl',
  };
}