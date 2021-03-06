const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58eceae515e3d150ca06f7c8';

// if (!ObjectId.isValid(id)) {
//     console.log('ID not valid');
// };

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     };
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

var id = '58ebf5cb2414ae4530564ca3';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    };
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
}).catch((e) => console.log(e));