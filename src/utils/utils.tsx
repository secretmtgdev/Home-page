import React from 'react';
import { PageProps, PageTypes } from './Types';
import ContactPage from '../components/ContactPage';
import HomePage from '../components/HomePage';
import ResumePage from '../components/ResumePage';

const RenderPageLevelComponent:React.FC<PageProps> = ({title, type}) => {
    switch(type) {
        case PageTypes.CONTACT:
            return <ContactPage title={title}/>
        case PageTypes.HOME:
            return <HomePage title={title} />
        case PageTypes.RESUME:
            return <ResumePage title={title} />
    }
    return <></>;
};

export {
    RenderPageLevelComponent
}