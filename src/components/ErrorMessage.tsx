import './ErrorMessage.css';

interface ErrorMessageProps {
    message: string;
    onRetry?: () => void;
}

export function ErrorMessage({message, onRetry}: ErrorMessageProps) {
    return (
        <div className="error-message">
            <div className="error-message__icon">⚠️</div>
            <p className="error-message__text">{message}</p>
            {onRetry && (
                <button
                    className="error-message__button"
                    onClick={onRetry}
                    aria-label="Retry"
                >
                    Try Again
                </button>
            )}
        </div>
    );
}


