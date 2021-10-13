// Route Types

export type RouterTypes = {
    // Undefined Until Component Is Not Taking Parameters
    Drawer: undefined,
    Tab: undefined
    Home: undefined,
    "My Network": undefined,
    Post: undefined,
    Notifications: undefined,
    MyNetwork: undefined,
    Jobs: undefined,
}

export interface NavigateType {
    navigate: (pageName: string) => void;
    setOptions: () => void
}