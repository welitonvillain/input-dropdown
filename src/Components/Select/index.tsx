import React, { useState, useCallback, useRef, } from 'react';

import { Container } from './styles';

const Select: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [suggestions, setSuggestions] = useState<string[]>([]);

    const [options, setOptions] = useState([
        'Amora',
        'Maça',
        'Goiaba',
    ]);

    const handleInputChange = useCallback(() => {
        setSuggestions([]);

        if (!!inputRef.current?.value) {
            const regex = new RegExp(`${inputRef.current.value}`, 'i');

            let filter = [];
            filter = options.sort().filter(item => regex.test(item));

            setSuggestions(filter);
        }
    }, [setSuggestions]);

    return (
        <Container>
            <input 
                ref={inputRef}
                type="text"
                onChange={handleInputChange}
            />
            {
                suggestions.length > 0 ? (
                    <ul>
                        {suggestions.map(item => <li>{item}</li>)}
                    </ul>
                ) : null
            }
        </Container>
    );
};

export default Select;