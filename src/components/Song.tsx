import React from 'react';
import styled from 'styled-components';

import {
    SongCard,
    Name,
    Artist,
    Image,
    FlexColumn,
    Star,
} from './styled';

interface Props {
    isSelected?: boolean;
    isFavorited?: boolean;
    name: string;
    artist: string;
    image: string;
    handleSelectSong?: () => void;
    handleFavorite?: () => void;
}

const Menu = styled(FlexColumn)`
    position: absolute;
    top: 0px;
    left: 0px;
    background: red;
    padding: 1rem;
    border-radius: 8px;
    cursor: pointer;
`;

const Song: React.FC<Props> = ({
    isSelected,
    isFavorited,
    handleSelectSong,
    handleFavorite,
    name,
    artist,
    image,
}: Props) => (
        <FlexColumn style={{ position: 'relative' }}>
            <SongCard
                isSelected={isSelected}
                onClick={handleSelectSong}
            >
                <Image alt={`${name}-cover`} src={image} />
                <Name>{name}</Name>
                <Artist>{artist}</Artist>
                {isFavorited &&
                    <Star
                        isFavorited={isFavorited}
                    >
                        {String.fromCharCode(9733)}
                    </Star>
                }
            </SongCard>
            {isSelected &&
                <Menu
                    className="animated fadeIn"
                    onClick={handleFavorite}
                >
                    add to favorites
                </Menu>
            }
        </FlexColumn>
    );


export default Song;
