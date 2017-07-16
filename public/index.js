var elements = {
	getUserButton: document.querySelector('#get-user'),
	deleteUserButton: document.querySelector('#delete-user'),
	getUsersButton: document.querySelector('#get-users'),
	userIdInput: document.querySelector('#user-id'),
	usersContainer: document.querySelector('#users-container')
};

(function(){
	bindListeners();
})();

var currentUsers = [];

function bindListeners(){
	elements.getUsersButton.addEventListener('click', function(event){
		getUsers(null, function(err, users){
			renderUsers(users);
		});
	});

	elements.getUserButton.addEventListener('click', function(event){
		var userId = Number(elements.userIdInput.value);
		if (!isNaN(userId)){
			getUsers(userId, function(err, users){
				renderUsers(users);
			});
		}
	});

	elements.deleteUserButton.addEventListener('click', function(event){
		var userId = Number(elements.userIdInput.value);
		if (!isNaN(userId)){
			deleteUser(userId, function(isSuccess){
				if (isSuccess){
					renderUsers
				}
			});
		}
	});

}

function renderUsers(users){
	if (!users){
		users = currentUsers;
	}
	elements.usersContainer.innerHTML = '';

	for (var i = 0; i < users.length; i++){
		var user = users[i];
		var userContainer = document.createElement('div');
		userContainer.className = 'user-container';

		var userId = document.createElement('div');
		userId.innerText = user.id;
		userContainer.appendChild(userId);

		var userName = document.createElement('div');
		userName.innerText = user.name;
		userName.className = 'user-name';
		userContainer.appendChild(userName);

		var userEmail = document.createElement('div');
		userEmail.innerText = user.email;
		userContainer.appendChild(userEmail);

		elements.usersContainer.appendChild(userContainer);
	}
}

function deleteUser(id, callback){
	var connection = new XMLHttpRequest();
	connection.addEventListener('load', reqListener);
	connection.open('DELETE', '/api/user/' + id);
	connection.send();

	function reqListener(event){
		callback(this.status === 200);		
	}
}

function getUsers(id, callback){
	var idString = '';
	var isOneUser = false;
	if (id !== null){
		idString = '/' + id;
		isOneUser = true;
	}
	var connection = new XMLHttpRequest();
	connection.addEventListener('load', reqListener);
	connection.open('GET', '/api/user' + idString);
	connection.send();

	function reqListener(event){
		try {
			var resp = JSON.parse(this.responseText);
			if (isOneUser){
				resp = [resp];
			} else {
				currentUsers = resp;
			}
		} catch(e){
			return callback(new Error('error parsing response'));
		}
		callback(null, resp);
	}
}



var messageElements = {
    getMessageButton: document.querySelector('#get-message'),
    deleteMessageButton: document.querySelector('#delete-message'),
    getMessagesButton: document.querySelector('#get-messages'),
    messageIdInput: document.querySelector('#message-id'),
    messagesContainer: document.querySelector('#messages-container')
};

(function(){
    bindMessageListeners();
})();

var currentMessages = [];

function bindMessageListeners(){
    messageElements.getMessagesButton.addEventListener('click', function(event){
        getMessages(null, function(err, messages){
            renderMessages(messages);
        });
    });

    messageElements.getMessageButton.addEventListener('click', function(event){
        var messageId = Number(messageElements.messageIdInput.value);
        if (!isNaN(messageId)){
            getMessages(messageId, function(err, messages){
                renderMessages(messages);
            });
        }
    });

    messageElements.deleteMessageButton.addEventListener('click', function(event){
        var messageId = Number(messageElements.messageIdInput.value);
        if (!isNaN(messageId)){
            deleteMessage(messageId, function(isSuccess){
                if (isSuccess){
                    renderMessages
                }
            });
        }
    });
}

function renderMessages(messages){
    if (!messages){
        messages = currentMessages;
    }
    messageElements.messagesContainer.innerHTML = '';

    for (var i = 0; i < messages.length; i++){
        var message = messages[i];
        var messageContainer = document.createElement('div');
        messageContainer.className = 'user-container';

        var messageId = document.createElement('div');
        messageId.innerText = message.id;
        messageContainer.appendChild(messageId);

        var messageSenderId = document.createElement('div');
        messageSenderId.innerText = message.senderId;
        messageSenderId.className = 'user-name';
        messageContainer.appendChild(messageSenderId);

        var messageReceiverId = document.createElement('div');
        messageReceiverId.innerText = message.receiverId;
        messageReceiverId.className = 'user-name';
        messageContainer.appendChild(messageReceiverId);

        var messageEl = document.createElement('div');
        messageEl.innerText = message.message;
        messageContainer.appendChild(messageEl);

        messageElements.messagesContainer.appendChild(messageContainer);
    }
}

function deleteMessage(id, callback){
    var connection = new XMLHttpRequest();
    connection.addEventListener('load', reqListener);
    connection.open('DELETE', '/api/message/' + id);
    connection.send();

    function reqListener(event){
        callback(this.status === 200);
    }
}

function getMessages(id, callback){
    var idString = '';
    var isOneMessage = false;
    if (id !== null){
        idString = '/' + id;
        isOneMessage = true;
    }
    var connection = new XMLHttpRequest();
    connection.addEventListener('load', reqListener);
    connection.open('GET', '/api/message' + idString);
    connection.send();

    function reqListener(event){
        try {
            var resp = JSON.parse(this.responseText);
            if (isOneMessage){
                resp = [resp];
            } else {
                currentMessages = resp;
            }
        } catch(e){
            return callback(new Error('error parsing response'));
        }
        callback(null, resp);
    }
}