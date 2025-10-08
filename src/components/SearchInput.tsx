import './SearchInput.css';

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}


export function SearchInput({value, onChange, placeholder}: SearchInputProps) {

    return (
        <div className="search-input">
            <input
                type="text"
                className="search-input__field"
                aria-label="Search for sports team"
            />
            <span className="search-input__icon">🔍</span>
        </div>
    )
}
