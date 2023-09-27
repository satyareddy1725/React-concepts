-----------------------useEffect----------------

# useEffect import by named import from react library
  ---- useEffect is called using two arguments 
            -- first arguments is callback function 
            -- second argument is dependency array

            ---useEffect(()=> {},[]);
# when useEffect called is after every render of that component
        -- dependency array can changes the behaviour of its render.dependency is also not mandetory.
# if no dependency array then useEffect called on every rnder
# if dependency array [] is empty then useEffect called only on  initial rnder and just one time only
# if something in dependency array [] then useEffect called whenever that something changes 

---------------------------------useState--------------------------------------

# never use your usestate variables outside of your component
# try code variables on the top of the functions
# never use useState  in if and else condition and for loop

--------------------------------------Routing------------------------------------------------
------whenever we want to give routing first we create routing configuration
# we have to import the createBrowserRouter from ' react-router-dom ''for helping the routing config rutaion.it creates the routingconfiguration

what is configuration
 ----some information that will define what will happen on a specific route or specific path
 ----createBroswerRouter takes the list or array of path.path is a object 
 ----after creating the paths we have to render this configuration .RouterProvider comes frm the  react-router-dom.RouterProvider is a component
     RouterProvider provides the routing into uour app
# RouterProvider is exported from react-router-dom library
# errorElement component also 
# u can use the useRoute Error also
---------------------------------------------------different types of routng -----------------------------
# there two types of routing in webapplications
   --client side routing
   --server side routing

---------------------------------------------------------------
----->React-router-dom gives the one hook that is called useParams
            --> params is an object























