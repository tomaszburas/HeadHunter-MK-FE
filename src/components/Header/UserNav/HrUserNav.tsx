import {useState} from 'react';
import avatar from '../../../assets/images/avatar.png';
import {
  Avatar,
  MenuNav,
  Name,
  UserNav,
} from '../../../assets/styled/UserNavHeader';
import {Link} from 'react-router-dom';
import {handleLogout} from '../../../utils/handleLogout';
import {useDispatch} from 'react-redux';

export const HrUserNav = () => {
  const dispatch = useDispatch();
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
              <Link to="/hr/account-edit">
                <li
                  className="margin-bottom"
                  title="Edytuj konto"
                  onClick={toggleMenu}
                >
                  Edytuj konto
                </li>
              </Link>
              <Link to="/" onClick={() => handleLogout(dispatch)}>
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
