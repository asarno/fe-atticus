import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100vw !important;
    height: 100vh;
    background: #eff0f2;
`;

const Background = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    top: 23vh;
    position: absolute;
`;

interface Props {
    children: any;
}

const Layout = ({
    children,
}: Props) => {
    return (
        <Container>
            <Header />
            <Background 
                className="animated fadeIn"
            >
                {children}
            </Background>
        </Container>
    )
};

export default Layout;
