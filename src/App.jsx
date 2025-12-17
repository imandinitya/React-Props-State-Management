import Counter from "./counter";
import Calculator from "./calculator";
import MessageCard from "./messagecard";
function App(){
  return (
    <>
    <Counter/>
    <Calculator/>
    <MessageCard title="Welcome" message="Welcome to the React"/>
    <MessageCard title="Reminder" message="props make components reusable"/>
    <MessageCard title="Success" message="You have successfully passes props"/>
    </>
  );
}

export default App;