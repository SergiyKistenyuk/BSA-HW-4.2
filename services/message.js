const messages = [{
    id: 1,
    senderId: 1,
    receiverId: 2,
    message: 'Body message 1'
},{
    id: 2,
    senderId: 2,
    receiverId: 3,
    message: 'Body message 2'
},{
    id: 3,
    senderId: 3,
    receiverId: 4,
    message: 'Body message 3'
},{
    id: 4,
    senderId: 4,
    receiverId: 1,
    message: 'Body message 4'
}];

function findMessage(id){
    const err = null;
    if (typeof id === 'undefined'){
        err = new Error('id is undefined');
    }

    let index;
    const message = messages.find((el, ind) => {
            if (el.id === id){
        index = ind;
        return true;
    } else {
        return false;
    }
});
    return {message, index, err};
}

module.exports = {
    findAll: (callback) => {
        callback(null, messages);
    },

    findOne: (id, callback) => {
        const {err, message} = findMessage(id);
        callback(err, message);
    },

    add: (message, callback) => {
        if (typeof message.id !== 'undefined'){
            messages.push(message);
            callback(null, message);
        } else {
            callback(new Error('message doesnt have id'));
        }
    },

    findOneAndDelete: (id, callback) => {
        let {err, message, index} = findMessage(id);
        if (typeof index !== 'undefined'){
            messages.splice(index, 1);
        } else {
            err = new Error('no messages with such index');
        }
        callback(err);
    },

    findOneAndUpdate: (id, message, callback) => {
        const {err, index} = findMessage(id);
        messages[index] = Object.assign(messages[index], message);
        callback(err);
    },

    getContactIdList: (id) => {
        const userMessages = messages.filter((el, ind) => {
            return (el.senderId == id || el.receiverId == id);
        });
        return userMessages.map(message => {
            return (message.senderId == id) ? message.receiverId : message.senderId;
        });
    }
};