import * as React from 'react';
import styled from 'styled-components';
import { BounceLoader } from "react-spinners";

const Container: any = styled.div`
    height: ${(props: any) => props.isFullscreen ? '50vh' : 'auto'};
    z-index: 11;
`;

const StyledLoader = styled(BounceLoader)`
	display: block;
	margin: ${(props: any) => (props.center ? "auto" : 0)};
`;

interface Props {
    isLoading: boolean;
    isFullscreen?: boolean;
    color?: string;
    size?: number;
}

const Loader = ({
    isLoading,
    isFullscreen = true,
    color = '#1872e0',
    size = 50,
}: Props) => (
        <Container
            isFullscreen={isFullscreen}
        >
            <StyledLoader
                color={color}
                size={size}
                loading={isLoading}
            />
        </Container>
    )

export default Loader;