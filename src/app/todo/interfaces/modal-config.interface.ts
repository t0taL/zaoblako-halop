import { ModalActions } from '../enum/modal-actions.enum';


export interface IModalConfig {
  title: string;
  type: ModalActions;
  data?: any;
}
