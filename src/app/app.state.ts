import { ErrorInterface } from '@/app/interfaces/error';
import { UserInterface } from '@/app/interfaces/user';

export interface AppState {
  readonly errors: Array<ErrorInterface>;
  readonly user: UserInterface
}
