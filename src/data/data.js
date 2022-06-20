const { v4: uuidv4 } = require('uuid');

//dummy users data
const users = [{
    id: 1,
    user_id: uuidv4(),
    name: "Arosha"
}, {
    id: 2,
    user_id: uuidv4(),
    name: "Samesh"
}, {
    id: 3,
    user_id: uuidv4(),
    name: "Mohshin"
}];

//dummy messages data
const messages = [{
    id: 1,
    user_id: 1,
    message: "Hi Samesh"
}, {
    id: 2,
    user_id: 2,
    message: "Hi Arosha"
}];

const data = { users, messages }

module.exports = data;
global.data = data;