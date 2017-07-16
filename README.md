### Prerequisites
- Node.js v6

### Setup instructions
1. npm install
1. node ./
1. in browser go to localhost:3000
***

#### /api/user/
Method: GET.
Повертає список всіх користувачів.
---
#### /api/user/:id
Method: GET.
Query params: id - ID користувачa.
Повертає список користувача з даним ID.
---
#### /api/user/:id
Method: POST.
Query params: id - ID користувачa.
Request body: id - ID користувачa.
	      name - ім'я користувачa.
	      email - e-mail користувачa.
Додає нового користувача в список користувачів. Повертає нового користувача.
---
#### /api/user/:id
Method: DELETE.
Query params: id - ID користувачa.
Видаляє користувача з даним ID зі списку користувачів.
---
#### /api/user/:id
Method: PUT.
Query params: id - ID користувачa.
Request body: id - ID користувачa.
	      name - ім'я користувачa.
	      email - e-mail користувачa.
Змінює користувача з даним ID в списку користувачів.
---
#### /api/user/contacts/:id
Method: GET.
Query params: id - ID користувачa.
Повертає список користувачів з якими спілкувався user з даним ID.
---
#### /api/message/
Method: GET.
Повертає список всіх повідомлень.
---
#### /api/message/:id
Method: GET.
Query params: id - ID повідомлення.
Повертає список всіх повідомлень з даним ID.
---
#### /api/message/:id
Method: POST.
Query params: id - ID повідомлення.
Request body: id - ID повідомлення.
	      senderId - ID користувачa, що відправив повідомлення.
	      receiverId - ID користувачa, що отримав повідомлення.
	      message - текст повідомлення.
Додає нове повідомлення в список повідомлень. Повертає нове повідомлення.
---
#### /api/message/:id
Method: DELETE.
Query params: id - ID повідомлення.
Видаляє повідомлення з даним ID зі списку повідомлень.
---
#### /api/message/:id
Method: PUT.
Query params: id - ID повідомлення.
Request body: id - ID повідомлення.
	      senderId - ID користувачa, що відправив повідомлення.
	      receiverId - ID користувачa, що отримав повідомлення.
	      message - текст повідомлення.
Змінює повідомлення з даним ID в списку повідомлень.
