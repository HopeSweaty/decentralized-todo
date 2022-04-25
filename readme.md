# Decentralized ToDo
This contract can bu used to add, delete and mark your todo list.

## Setup
1. install dependencies `cd decentralized-todo && yarn`
2. compile the contract - `yarn build`
3. deploy the contract - `yarn deploy` PS: This will deploy it to your actual test account

## How to interact
### Create Todo
`near call $CONTRACT createTodo '{"task":"Hello"}' --accountId $ACCOUNTID`

### Get By Id Todo
`near call $CONTRACT getByIdTodo '{"id":"1"}' --accountId $ACCOUNTID`

### Get Todo
`near call $CONTRACT getTodo '{"ofset":"0"}' --accountId $ACCOUNTID`

### Update Todo
`near call $CONTRACT updateTodo '{"id":"1","updates":"{"task":"makeithappen","done":True}"}' --accountId $ACCOUNTID`

### Delete Todo
`near call $CONTRACT deleteTodo '{"id":"1"}' --accountId $ACCOUNTID`