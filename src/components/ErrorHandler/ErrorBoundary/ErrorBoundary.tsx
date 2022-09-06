import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

interface IErrorBoundaryProps {
  children: JSX.Element | JSX.Element[];
}
interface IErrorBoundaryState {
  readonly error: boolean;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  state = {
    error: false,
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) return <ErrorIndicator />;
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
