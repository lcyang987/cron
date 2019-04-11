import React from 'react';
import { Route } from 'react-router-dom';
import Tabs from '@/containers/Tabs';
import Content from '@/containers/Content';

const ComponentsApp = () => (
  <div style={{ margin: '0 20px' }}>
    <Route component={Tabs} />
    <Route component={Content} />
  </div>
);

export default ComponentsApp;