import React, { Component } from 'react'
import { connect } from "react-redux"
import * as num from "../../store/num/num.action"
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import "./style/style.css"
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default class bao extends Component {
    render() {
        return (
            <>
                <Header style={{ background: '#fff', padding: 0 }} >
                    
                        <div className="head">
                            <h4>sada</h4>
                            <p><span>sada</span><font>asda</font></p>
                        </div>
                    
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '10px 0' }}>
                    
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 620 }}>
                </div>
                </Content>
            </>
        )
    }
}
