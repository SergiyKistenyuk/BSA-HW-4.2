const users = [{
    id: 1,
    name: 'Nikolas',
    email: 'nikolas@gmail.com'
},{
    id: 2,
    name: 'Eduard',
    email: 'eduard@gmail.com'
},{
    id: 3,
    name: 'Bohdan',
    email: 'bohdan@gmail.com'
},{
    id: 4,
    name: 'Dima',
    email: 'dima@gmail.com'
}];

function findUser(id){
    const err = null;
    if (typeof id === 'undefined'){
        err = new Error('id is undefined');
    }

    let index;
    const user = users.find((el, ind) => {
        if (el.id === id){
            index = ind;
            return true;
        } else {
            return false;
        }
    });
    return {user, index, err};
}

function getUsersList(usersIdList) {
    return users.filter((el, ind) => {
        return (usersIdList.indexOf(el.id) != -1);
    });
}

module.exports = {
    findAll: (callback) => {
        callback(null, users);
    },

    findOne: (id, callback) => {
        const {err, user} = findUser(id);
        callback(err, user);
    },

    add: (user, callback) => {
        if (typeof user.id !== 'undefined'){
            users.push(user);
            callback(null, user);
        } else {
            callback(new Error('user doesnt have id'));
        }
    },

    findOneAndDelete: (id, callback) => {
        let {index, err, user} = findUser(id);
        if (typeof index !== 'undefined'){
            users.splice(index, 1);
        } else {
            err = new Error('no users with such index');
        }
        callback(err);
    },

    findOneAndUpdate: (id, user, callback) => {
        const {err, index} = findUser(id);
        users[index] = Object.assign(users[index], user);
        callback(err);
    },

    findAllContacts: (id, callback) => {
        const message = require('./message');
        let contactIdList = message.getContactIdList(id);
        let contacts = getUsersList(contactIdList);
        callback(null, contacts);
    }
};

