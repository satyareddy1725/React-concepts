# monolith 
-devleoped api and ui and aunthentication and database and  notification sending smses  written in the same project.
- we want to change in  project we have to compile whole project so thats all are shifting to micro servics


# microservices
- we have diff services for diff jobs
  - backend end
  - ui
  - aunth
  -db
  -sms
  -email notifaications

---- this is also separation of concerns, and sngle responsible principle---------

# How do these services interact which each other 
 - all these services talk each other
 - U can write any languages for diff services 

 - all serics are running on their own ports
 - 1234 : ui
 - 1000 : be
 - 3000 : sms
 - these ports can map to domain name 

# how webapps fetch the data from the backend
- 
# first one
- whenever page loads -- > we can make an api call  wait for the data ----then we render ui
# second one 
- whenever page loads --> render ---> now make an api call ---> render once again 

<!-- in react follows the second approach -->
2nd one gives the better approah
-react renders our ui very fast.react render cycles are very fast


# useEffect Hook
-it a normal react function .it tkes two arguments
-first takes the call back function and second argument takes the dependency arrray

-useeffect calls after component rnders 
- as soon as render cylcle finiched then useeffect callback function called


# fetch the data
- fetch() function is given by broswers(js engine have)
-



















