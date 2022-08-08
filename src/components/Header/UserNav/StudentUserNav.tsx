import defaultAvatar from '../../../assets/images/avatar.png';
import {useEffect, useState} from 'react';
import {
  Avatar,
  MenuNav,
  Name,
  UserNav,
} from '../../../assets/styled/UserNavHeader';
import {Link} from 'react-router-dom';
import {handleLogout} from '../../../utils/handleLogout';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux';
import {checkGithub} from '../../../utils/checkGithub';

export const StudentUserNav = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const {firstName, lastName, githubUsername} = useSelector(
    (store: RootState) => store.student
  );
  const [isAvatar, setIsAvatar] = useState(false);

  useEffect(() => {
    (async () => {
      if (githubUsername !== '') {
        await checkGithub(githubUsername, setIsAvatar);
      }
    })();
  }, [githubUsername]);

  return (
    <UserNav>
      <Avatar
        src={
          isAvatar ? `https://github.com/${githubUsername}.png` : defaultAvatar
        }
        onClick={toggleMenu}
      />
      <Name onClick={toggleMenu}>
        {firstName} {lastName}
      </Name>
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
