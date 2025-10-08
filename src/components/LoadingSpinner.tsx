import './LoadingSpinner.css';

interface LoadingSpinnerProps {
    message?: string;
}

export function LoadingSpinner({message = 'Loading...'}: LoadingSpinnerProps) {
    return (
        <div className="loading-spinner">
            <div className="loading-spinner__spinner"></div>
            <p className="loading-spinner__message">{message}</p>
        </div>
    );
}


