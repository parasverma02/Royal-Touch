import React from 'react';
import { Route } from 'react-router-dom';
import SkinService1 from '../../../Services/Services/SkinService1'
const servicesRoute = props => {
    return (
            <Route path={props.subPath + '/:Skin'} Component={SkinService1} />
    )
}

export default servicesRoute 