//библиотеки//
import { Fragment } from "react";

//компоненты разметки//
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";

// базы данных //
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

//стили//


  export const App = () => {
  const { username, tag, location, avatar, stats } = user;  
  return (
    <Fragment> 
      <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Fragment>
  );
};




