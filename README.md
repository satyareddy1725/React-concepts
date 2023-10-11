# Redux
---> redux works on the data layer
---> redux offers easy bugging
--->redux offers state management
--->redux store is a very big object ans it is kept in a global central space
--->we have" slices " in react store 
---> slice is a small portion,
---> logic things we can put into a separate slices 
---> matbe they can "cart" ,"user","slice"
---> intially aall are empyt objects .we cannot directly modifies are slices .
----> if u want to change slices we have methods 
-----> when we click on the add button or one action
its " dispatching "the action --> action or it calls a function-->
and this function modifies the cart or "slice"
-----> the" FUNCTION " IS claled a reducer function
-----> when hit the add button ---> its dispatches an action ---> this action calls reducer function---> this updates a slice of a redux store.
----->when the change is done in redux slice how to read from the component for that we use " SELECTOR "
------> this SELECTOR MODIFIES THE REACT COMPONENT
------> THE SELECTOR DOES PROCESS IS CALLED THE CMPONENT  SUBSCRIBEING TOTHE STORE
-------> selector is a hook inside react
# Taking cares
----> when we are subscribing the selector make sure right store we are subscribigng
--->creating appStore the key name is "reducer"
---> when we are writing methods in slice that all methods are combined is caleed "reducers"
---->
