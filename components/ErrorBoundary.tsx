import React from "react";

interface IProps {
    children: React.ReactNode;
    fallback: React.ReactNode;
}
class ErrorBoundary extends React.Component<IProps> {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error: any , errorInfo: any) {
        console.log({ error, errorInfo });
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
