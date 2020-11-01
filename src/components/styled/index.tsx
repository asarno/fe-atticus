import styled from 'styled-components';

// GENERIC
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FlexRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
`;

const FlexColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Link = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #007aff;
    cursor: pointer;
    margin: 1rem;
`;


// NAV

interface NavItemProps {
    isSelected: boolean;
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    box-sizing: border-box;
    height: 4.5rem;
    z-index: 998;

    background-color: white;
    box-shadow: 0 1px 0px #ebebeb;
    padding: 1.5rem 3rem;

    display: flex;
    flex-row: column;
    align-items: center;
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
`;

const NavItem = styled.span<NavItemProps>`
    cursor: pointer;
    margin: 1rem;
    text-decoration: ${({ isSelected }: any) => isSelected ? "underline" : "none"};
`;

const NavLogo = styled.img`
    cursor: pointer;
    height: 3rem;

    &:hover {
        transform: scale(1.015);
    }
`;

// SONGS
interface SongCardProps {
    isSelected?: boolean;
}

const SongsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-right: 4rem;
    padding-left: 4rem;
    overflow-y: scroll;
    background-color: #eff0f2;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const SongCard = styled.span<SongCardProps>`
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 41, 83, 0.2) 0px 1px 3px 0px;
    position: relative;
    width: 231px;
    height: 315px;
    border-radius: 10px;
    margin: 0px auto 2.25rem;
    padding: 1.125rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 1rem;

    transform: ${({ isSelected }: SongCardProps) => isSelected ? "scale(1.07)" : ""};
    transition: transform 0.3s ease-in-out;
`;

const Artist = styled.span`
    font-size: 0.75rem;
    margin: 0.5rem;
    text-align: center;
    font-weight: bold;
`;

const Image = styled.img`
    width: 170px;
    height: 170px;
`;

const Name = styled.span`
    font-size: 0.65rem;
    margin: 0.5rem;
    text-align: center;
`;

interface Props {
    isFavorited?: boolean;
    canGrow?: boolean;
}

const Star = styled.span<Props>`
    color: ${({ isFavorited }: Props) => isFavorited ? "#e2e240" : "#d3d3d3"};
    font-size: 2rem;
    pointer-events: inherit;
    cursor: pointer;
    margin: 0.5rem;
    outline: none;

    &:hover {
        transform: ${({ canGrow }: Props) => canGrow ? "scale(1.015);" : ""}
      }
`;

export {
    FlexRow,
    FlexColumn,
    Container,
    Link,
    Nav,
    RightContainer,
    LeftContainer,
    NavItem,
    NavLogo,
    SongsContainer,
    SongCard,
    Artist,
    Image,
    Name,
    Star,
}
