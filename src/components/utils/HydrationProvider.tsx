import React, {PropsWithChildren} from 'react';

const HydrationProvider:React.FC<PropsWithChildren> = ({children}) => {
    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
    return (
        <>
            {children}
        </>
    );
};

export default HydrationProvider;