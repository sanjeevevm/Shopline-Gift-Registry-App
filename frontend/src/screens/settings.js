import React from 'react';
import './tabs.css';
import {Tabs, TabList, Tab, TabPanel} from "https://cdn.skypack.dev/react-tabs@3.2.2";

const Settings = () => {
  return<>
        <div className='ml--40 mt--10'><h1>Settings</h1></div>
        <Tabs>
            <TabList className="mt--10">
                <Tab>Icon Setting</Tab>
                <Tab>Button Setting</Tab>
                <Tab>Drawer Setting</Tab>
                <Tab>Email Setting</Tab>
                <Tab>Other Setting</Tab>
            </TabList>
            <div className='ml--40 mt--10'>
                <TabPanel>
                    Icon Setting code here
                </TabPanel>            
                <TabPanel>
                    Button Setting code here
                </TabPanel>            
                <TabPanel>
                    Drawer Setting code here
                </TabPanel>            
                <TabPanel>
                    Email Setting code here
                </TabPanel>            
                <TabPanel>
                    Other Setting code here
                </TabPanel>
            </div>
        </Tabs>
    </>
}

export default Settings;