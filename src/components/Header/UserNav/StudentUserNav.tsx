import avatar from '../../../assets/images/avatar.png';
import {useState} from 'react';
import {
  Avatar,
  MenuNav,
  Name,
  UserNav,
} from '../../../assets/styled/UserNavHeader';
import {Link} from 'react-router-dom';

export const StudentUserNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <UserNav>
      <Avatar src={avatar} onClick={toggleMenu} />
      <Name onClick={toggleMenu}>Jan Kowalski</Name>
      {isOpen ? (
        <>
          <i className="bx bxs-up-arrow" onClick={toggleMenu} />
          <MenuNav>
            <ul>
              <Link to="/student/account-edit">
                <li
                  className="margin-bottom"
                  title="Edytuj konto"
                  onClick={toggleMenu}
                >
                  Edytuj konto
                </li>
              </Link>
              <Link to="/student/logout" onClick={toggleMenu}>
                <li title="Wyloguj">Wyloguj</li>
              </Link>
            </ul>
          </MenuNav>
        </>
      ) : (
        <i className="bx bxs-down-arrow" onClick={toggleMenu} />
      )}
    </UserNav>
  );
};
