import User from "../data/User";
import Friends from "../data/Friends"
import Data from "../data/Data"
import Transactions from "../data/Transactions"
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Stat } from "./Stat/Stat";
import { FriendsList } from "./FriendsList/FriendsList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return <>
  <Profile data={User}></Profile>
  <Statistics title="upload stats">
    <Stat data={Data}></Stat>
  </Statistics>
  <FriendsList friend = {Friends}>
  </FriendsList>
  <TransactionHistory history={Transactions}></TransactionHistory>
         </>
};
