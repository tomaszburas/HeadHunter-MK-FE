import {useState} from 'react';
import {
  Avatar,
  MenuNav,
  Name,
  UserNav,
} from '../../../assets/styled/UserNavHeader';
import avatar from '../../../assets/images/avatar.png';
import {Link} from 'react-router-dom';
import {handleLogout} from '../../../utils/handleLogout';
import {useDispatch} from 'react-redux';

export const AdminUserNav = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <UserNav>
      <Avatar src={avatar} onClick={toggleMenu} />
      <Name onClick={toggleMenu}>admin</Name>
      {isOpen ? (
        <>
          <i className="bx bxs-up-arrow" onClick={toggleMenu} />
          <MenuNav>
            <ul>
              <Link to="/admin/account-edit">
                <li
                  className="margin-bottom"
                  title="Edytuj konto"
                  onClick={toggleMenu}
                >
                  Edytuj konto
                </li>
              </Link>
              <Link to="/admin/add-students">
                <li
                  className="margin-bottom"
                  title="Dodaj kursantów"
                  onClick={toggleMenu}
                >
                  Dodaj kursantów
                </li>
              </Link>
              <Link to="/admin/add-hr">
                <li
                  className="margin-bottom"
                  title="Dodaj hr"
                  onClick={toggleMenu}
                >
                  Dodaj hr
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
