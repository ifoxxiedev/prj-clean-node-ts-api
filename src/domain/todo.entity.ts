import { randomUUID } from 'crypto';

export type TodoProps = {
  title: string;
  description: string;
  isDone: boolean;
}

export class Todo {
  public readonly id: string;
  public props: Required<TodoProps>

  constructor(props: TodoProps & { id?: string }) {
    this.props = props;
    this.id = props.id ? props.id : randomUUID()
  }

  updateTitle(title: string): void {
    this.props.title = title;
  }

  updateDescription(description: string): void {
    this.props.description = description;
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props
    }
  }
}