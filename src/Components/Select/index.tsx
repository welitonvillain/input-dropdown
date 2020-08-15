import React, { useState, useCallback, useRef, } from 'react';

import { Container } from './styles';

const Select: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [options, setOptions] = useState([
        'Amora',
        'Maça',
        'Goiaba',
        'Jabuticaba',
    ]);

    const [suggestions, setSuggestions] = useState<string[]>(options);
    const [isFocused, setIsFocused] = useState(false);

    

    const handleInputChange = useCallback(() => {
        setSuggestions([]);

        if (!!inputRef.current?.value) {
            const regex = new RegExp(`${inputRef.current.value}`, 'i');

            let filter = [];
            filter = options.sort().filter(item => regex.test(item));

            setSuggestions(filter);
        } 
    }, [options]);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, [])

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setSuggestions(options);
    }, []);

    return (
        <Container>
            <input 
                ref={inputRef}
                type="text"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
            
            {
                isFocused && suggestions.length > 0 ? (
                    <ul>
                        {suggestions.map(item => <li>{item}</li>)}
                    </ul>
                ) : null
                
            }
        </Container>
    );
};

export default Select;