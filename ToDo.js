function ToDo(){
    this.todo = [];
}
ToDo.prototype.addTodo = function(item){
    this.todo.push(item)
}
ToDo.prototype.getItems = function(){
    return this.todo
}
ToDo.prototype.delete = function(id){
    this.todo = this.todo.filter(item => item.id !== id)
}
ToDo.prototype.complete = function(id){
    this.todo.find(item => item.id)
}