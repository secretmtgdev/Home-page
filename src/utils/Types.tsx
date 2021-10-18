enum PageTypes {
    CONTACT,
    HOME, 
    RESUME
}

type NavigationItem = {
    title: string;
    children?: NavigationItem[];
    onClick: () => void;
}

type NavigationProps = {
    navigationList: NavigationItem[];
}

type PageProps = {
    title: string;
    type?: PageTypes;
}

export type {
    NavigationItem,
    NavigationProps,
    PageProps
}

// interfaces
export {
    PageTypes
}