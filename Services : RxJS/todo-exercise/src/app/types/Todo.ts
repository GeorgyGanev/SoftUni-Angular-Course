export interface ITodo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

export class Todo implements ITodo {
    
    id: number = 1;
    userId: number = 1;
    title: string = '';
    completed: boolean = false;

    constructor(title:string, completed:boolean) {
        this.title = title;
        this.completed = false;
    }

}