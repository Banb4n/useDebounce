import * as React from 'react';

export function useDebounce<ValueType>(
    value: ValueType,
    delay: number
): ValueType {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timeout);
        };
    }, [value]);

    return debouncedValue;
}
