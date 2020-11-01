import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import {
    Nav,
    RightContainer,
    LeftContainer,
    NavItem,
    NavLogo,
} from './styled';

function Header() {
    const history = useHistory();
    const location = useLocation();

    return (
        <Nav id="header">
            <LeftContainer>
                <NavLogo
                    alt="logo"
                    onClick={() => history.push('/')}
                    src={require('../res/logo.svg')}
                />
            </LeftContainer>
            <RightContainer>
                <NavItem
                    isSelected={location.pathname === '/all'}
                    onClick={() => history.push('/all')}
                >
                    all
                 </NavItem>
                <NavItem
                    isSelected={location.pathname === '/favorites'}
                    onClick={() => history.push('/favorites')}
                >
                    favorites
                </NavItem>
            </RightContainer>
        </Nav>
    );
}

export default Header;
