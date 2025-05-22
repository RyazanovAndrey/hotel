import React, { createContext } from 'react';

export const BaseLink = createContext(null)

const LinkContext = ({ children }) => {

    const link = '/hotel/'

    return <BaseLink.Provider value={link}>{children}</BaseLink.Provider>
}

export default LinkContext;
