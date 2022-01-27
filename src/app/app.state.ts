import { ErrorInterface } from '@/app/interfaces/error';

export interface AppState {
  readonly errors: Array<ErrorInterface>;
}
