import './style.scss';
import { createContext, useContext, useState } from "react";

const TabsContext = createContext(null);

function useTabs() {
    const context = useContext(TabsContext);

    if (!context) {
        throw new Error("Tabs components must be inside <Tabs>");
    }

    return context;
}

export function Tabs({ defaultTab, children }) {
    const [activeTab, setActiveTab] = useState(defaultTab);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabsContext.Provider>
    );
}

export function TabsHeader({ children }) {
    return <div className="tabs-header">{children}</div>;
}

export function TabsTrigger({ value, children }) {
    const { activeTab, setActiveTab } = useTabs();

    return (
        <button
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "tabs-header__item active" : "tabs-header__item"}
        >
            {children}
        </button>
    );
}

export function TabsBody({ children }) {
    return <div className="tabs-body">{children}</div>;
}

export function TabsContent({ value, children }) {
    const { activeTab } = useTabs();

    if (activeTab !== value) {
        return null;
    }

    return <div className="tabs-body__content">{children}</div>;
}
