import React from 'react';
import {ITabsProps} from "@/components/collection-editor-pane/interface";
import classes from "./style.module.css";
import TabEditor from "@/components/collection-editor-pane/TabEditor";
import CloseIcon from '@mui/icons-material/Close';

const Tabs: React.FC<ITabsProps> = ({tabs, selectedTab, selectTab, closeTab}) => {
    return (
        <>
            <div className={classes.Tabs}>
                {tabs.map(tab => {
                    return <div className={[classes.Tab, tab === selectedTab ? classes.Selected : ""].join(" ")}
                                key={tab.id}>
                        <span onClick={() => selectTab(tab)} className={classes.Tab_title}>{tab.name}</span>
                        <span className={classes.X_button} onClick={() => closeTab(tab)}>
                            <CloseIcon fontSize={"inherit"} />
                        </span>
                    </div>
                })}
            </div>
            {!selectedTab && <div className={classes.EmptyTab}>
                Select or create a file to start jotting down!
            </div>}
            {tabs.map(tab => {
                return <TabEditor key={tab.id} visible={tab === selectedTab}/>
            })}
        </>
    );
};

export default Tabs;