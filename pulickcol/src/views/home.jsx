import React, { Component } from 'react'
import Router from "../router/rouerviews"
import * as num from "../store/num/num.action"
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { connect } from "react-redux"
import "./style/style.css"
import bus from "../events"
import { bindActionCreators } from "redux"
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Home extends Component {
    state = {
        collapsed: false,
        
        
        data: [
            {
                name: "首页",
                path: "/home/index",
                icon: "home"
            },
            {
                name: "订单管理",
                icon: "folder-add",
                child: [
                    {
                        name: "贷款订单",
                        type: "1",
                        path: "/home/order/1"
                    },
                    {
                        name: "转单订单",
                        type: "2",
                        path: "/home/order/2"
                    },
                    {
                        name: "保险订单",
                        type: "3",
                        path: "/home/order/3"
                    }
                ]
            }
        ]
    }
    onCollapse = collapsed => {
        // console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        let { res, info } = this.props
        // console.log(this.props.history,"-------------")
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Header id="header" style={{ minHeight: 200 }}><p><img src={`http://localhost:3000${info.facePhoto}`} alt="" /></p>
                            <li>{info.iat}</li></Header>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            {
                                this.state.data.map((it, index) =>
                                    <SubMenu
                                        key={index}
                                       
                                        title={
                                            <span>
                                                <Icon type={it.icon} />
                                                <span onClick={() => {
                                                    // console.log(123)
                                                    this.props.history.push(it.path)
                                                }}>{it.name}</span>
                                            </span>
                                        }
                                    >
                                        {
                                            it.child ? it.child.map((item, ind) =>
                                                <Menu.Item key={ind} onClick={(e) => {
                                                    this.props.addfn(item)
                                                    this.props.addfner(item.type)
                                                    this.props.history.push(item.path)
                                                    bus.emit("saddfner")
                                                }}>{item.name}</Menu.Item>
                                            ):''
                                        }
                                    </SubMenu>
                                )
                            }
                        </Menu>
                    </Sider>

                    <Layout>
                        <Router data={this.props.data} />


                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
    componentDidMount() {
        // console.log(this.props)
        // console.log(this.props.addfn())
    }
}
export default connect(state => {
    return {
     
    }
}, (dispatch) => bindActionCreators(num, dispatch))(Home)