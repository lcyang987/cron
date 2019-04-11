import React from 'react';
import BaseComponent from '@/components/basic/BaseComponent';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { LocaleProvider, message } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import App from '@/components/basic/App';
import '@/noModuleStyle/hideScroll.css';
import '@/noModuleStyle/carousel.css';
import '@/noModuleStyle/expandTable.css';
import '@/noModuleStyle/tablexscroll.css';
import '@/noModuleStyle/inputSelect.css';
import '@/noModuleStyle/inputDate.css';

moment.locale('zh-cn');

class Root extends BaseComponent {
  componentWillMount() {
    // 配置全局 message 风格
    message.config({
      top: 0,
      duration: 10,
      maxCount: 3,
    });
  }
  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <Route path='/' component={App} />
      </LocaleProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  store: ownProps.store,
});

export default withRouter(connect(mapStateToProps)(Root));