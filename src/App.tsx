import Menu from "./components/Menu";
import { useState,useEffect,useContext, createContext } from "react";
import DataService from "./services/DataService";

const NameContext = createContext("Henry Nkuke")

function App(){

  let [myName,setMyName] = useState("Henry Nkuke");//[0,1]
  let [age,changeAge]    = useState(10);
  let [user,setUser]     = useState({name:"Joel",class:"s.3"})
  let users =
    [
      { name: "Joel", age: 17, email: "example@gmail.com" },
      { name: "Robert", age: 12, email: "robert@gmail.com" },
      { name: "Sam", age: 20, email: "sam@gmail.com" }
   ];
  
  const menuItems  = ['Home','About Us','Contact Us'];
  const footerMenu = ['My Links',...menuItems]; //... is spread operator, copies from menuItems

  console.log('Footer links',footerMenu);
  
  let mynames  = users.map((user)=>{ return user.name });
  let filtered = users.filter((user)=>{ return user.age<18 });

  console.log("All names",mynames.join(", "))
  console.log("Filtered",filtered)

  useEffect(()=>{

    console.log("users ", users)

    //getToken()
    console.log("Age is "+age)
  },[age,myName,users])

  return (<>
  <NameContext.Provider  value={JSON.stringify(user)}>
    <Menu menus ={menuItems} color="blue" height="200"/>
  </NameContext.Provider>
  <h1>Hello {myName} is {age} years old</h1>
  <button onClick={()=> setMyName("Bob Marley") }>Change Name</button>
  <button onClick={()=> changeAge(26) }>Change Age</button>
  <button onClick={()=> setUser({name:"Robbina",class:"s.1"}) }>Change user</button>
  </>);
}

export  {App,NameContext};
