import React, {createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({children}) => {
    const [commonBackgroundColor, setCommonBackgroundColor] = useState('rgb(243, 130, 130)');

    


}
