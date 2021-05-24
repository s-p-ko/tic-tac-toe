import { useState, useEffect } from 'react'

function useLocalStorageState(key, defaultValue = '') {
    const [state, setState] = useState(
        () => window.localStorage.getItem(key) || defaultValue,
    )

    useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [key, state])

    return [state, setState]
}

export default useLocalStorageState
