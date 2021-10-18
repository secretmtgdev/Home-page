import React from 'react';
import Navigation from './Navigation';
import { PageProps } from '../utils/Types';
import type { NavigationItem } from '../utils/Types';
import { RenderPageLevelComponent } from '../utils/utils';

const Page:React.FC<PageProps> = ({title, type}) => {
    return (
        <>
            <Navigation navigationList={GetNavigationList()}/>
            <RenderPageLevelComponent title={title} type={type} />
        </>
    )
}

// TODO: Get this list of data from the config file and generate
function GetNavigationList(): NavigationItem[] {
    return [
        {
            title: "Contact",
            onClick: () => {}
        },
        {
            title: "Home",
            onClick: () => {}
        },
        {
            title: "Resume",
            onClick: () => {}
        } 
    ]
}

export default Page;