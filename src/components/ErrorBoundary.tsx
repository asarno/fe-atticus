import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';
import {FlexRow} from './styled';
import { Modal } from 'react-responsive-modal';

const Link: any = styled.span`
    color: #007aff;
    cursor: pointer;
    margin-right: 1rem;
`;

interface Props {
    children: any;
    history: any;
    location: any;
}

interface State {
    errorMessage: any;
    isOpen: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
    public state: State = {
        errorMessage: null,
        isOpen: false,
    };

    public static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { errorMessage: error.message };
    }

    public componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        this.setState({
            errorMessage: error.message,
        })
    }

    public componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location) {
            this.setState({
                errorMessage: null,
            })
        }
    }

    render() {

        if (!!this.state.errorMessage) {
            return (
                <Layout>
                    <h1 className='animated fadeIn' >Something went wrong.</h1>
                    <FlexRow className='animated fadeIn'>
                        <Link onClick={() => this.props.history.push('/home')}>return home</Link>
                        <Link onClick={() => this.setState({ isOpen: true })}>see error</Link>
                    </FlexRow>
                    <Modal 
                        open={this.state.isOpen} 
                        onClose={() => this.setState({ isOpen: false })}
                    >
                        <span>{this.state.errorMessage}</span>
                    </Modal>
                </Layout>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;