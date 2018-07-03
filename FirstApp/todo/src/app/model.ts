export class Model{
    user;
    items;
    constructor()
    {
        this.user = "Sergey";
        this.items = 
        [
            new TodoItem("1", false),
            new TodoItem("1", false),
            new TodoItem("1", false),
            new TodoItem("1", false)
        ];
    }
}
export class TodoItem{
    action;
    done;
    constructor(action,done){
        this.action = action;
        this.done = done;
    }
}