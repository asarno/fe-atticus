import React from 'react';
import { Container, Link } from './styled'
import { useHistory } from 'react-router-dom'

const NotFound: React.FC = () => {
    const history = useHistory()
    return (
        <Container>
            <span>route not found :(</span>
            <Link
                onClick={() => history.push('/')}
            >
                return to home
        </Link>
        </Container>
    )
}

export default NotFound;