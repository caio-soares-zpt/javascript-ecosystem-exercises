import { TodoStore } from './todo-store';

describe('TodoStore', function () {
    const store = new TodoStore();

    beforeEach(function () {
        store.clear();
    });

    describe('#addTodo()', function () {

        it('should be able to add a new todo', function () {
            store.addTodo('My new Todo task');

            const addedTodo = store.todos[0];

            expect(addedTodo).toBeDefined();
            expect(addedTodo.id).toBeDefined();
            expect(addedTodo.timeStamp).toBeDefined();
            expect(addedTodo.done).toBeDefined();
            expect(addedTodo.done).toBe(false);
        });

        it('should return the newly added task', function () {
            store.addTodo('My super task');
            expect(store.todos.length).toBe(1);
        });

    });

    describe('#setDone()', function () {

        it('should sort todos by status', function () {
            store.addTodo('Todo task 123');
            store.addTodo('My new Todo task abc');
            store.addTodo('My new Todo task qwerty');
            const todo1 = store.todos[1];
            store.setDone(todo1.id);
            expect(todo1.done).toBe(true);
            expect(store.todos[0].done).toBe(false);
            expect(store.todos[2].done).toBe(true);
        });

    });
});
