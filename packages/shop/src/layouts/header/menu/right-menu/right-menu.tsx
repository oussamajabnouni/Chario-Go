import React from 'react';
import NavLink from 'components/nav-link/nav-link';
import { Button } from 'components/button/button';
import Popover from 'components/popover/popover';
import { OFFER_PAGE, HELP_PAGE } from 'constants/navigation';
import { AuthorizedMenu } from '../authorized-menu';
import LanguageSwitcher from '../language-switcher/language-switcher';
import { HelpIcon } from 'assets/icons/HelpIcon';
import { RightMenuBox } from './right-menu.style';
import { FormattedMessage } from 'react-intl';

type Props = {
  onLogout: () => void;
  onJoin: () => void;
  avatar: string;
  isAuthenticated: boolean;
};

export const RightMenu: React.FC<Props> = ({
  onLogout,
  avatar,
  isAuthenticated,
  onJoin,
}) => {
  return (
    <RightMenuBox>
      <NavLink
        className="menu-item"
        href={OFFER_PAGE}
        label="Offer"
        intlId="navlinkOffer"
      />
      <NavLink
        className="menu-item"
        href={HELP_PAGE}
        label="Need Help"
        intlId="navlinkHelp"
        iconClass="menu-icon"
        icon={<HelpIcon />}
      />
      <LanguageSwitcher />

      {!isAuthenticated ? (
        <Button variant="primary" onClick={onJoin}>
          <FormattedMessage id="joinButton" defaultMessage="join" />
        </Button>
      ) : (
        <Popover
          direction="right"
          className="user-pages-dropdown"
          handler={<img src={avatar} alt="user" />}
          content={<AuthorizedMenu onLogout={onLogout} />}
        />
      )}
    </RightMenuBox>
  );
};
