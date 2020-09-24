export interface ITodo {
  id: string;
  name: string;
  description: string;
  status: boolean;
  deleted: boolean;
}

export class Todo implements ITodo {
  id: string;
  name: string;
  description: string;
  status: boolean;
  deleted: boolean;

  constructor({ name, description }: { name: string, description: string }) {
    this.id = new Date().getUTCMilliseconds().toString();
    this.name = name;
    this.description = description;
    this.status = false;
    this.deleted = false;
  }
}
