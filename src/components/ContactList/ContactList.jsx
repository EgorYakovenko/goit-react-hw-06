import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { nanoid } from 'nanoid';

function ContactList({ contacts, searchContakt, removeContact }) {
  return (
    <ul className={css.container}>
      {searchContakt.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} removeContact={removeContact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

{
  /* <Contact />; */
}

// export const FriendList = ({ friends }) => {
//   return (
//     <ul className={css.container}>
//       {friends.map(friend => (
//         <li className={css.friendItem} key={friend.id}>
//           <FriendListItem data={friend} />
//         </li>
//       ))}
//     </ul>
//   );
// };
