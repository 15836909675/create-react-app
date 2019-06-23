import React, { Component } from 'react'
import { connect } from "react-redux"
import * as num from "../../store/num/num.action"
import { Layout, Menu, Breadcrumb, Table, Pagination,DatePicker,Form, Icon, Input, Button } from 'antd';
import { bindActionCreators } from "redux"
import bus from "../../events"
import "./style/stylecss.css"
const { Column} = Table;
const { Header, Content, } = Layout;
const { SubMenu } = Menu;
class index extends Component {   
    state = {
        current: 'mail',
        type:0,
        ind:0,
        index:0,
        data:[
            {
                name:"未处理",
                type:"1"
            },
            {
                name:"补全中",
                type:"2"
            },
            {
                name:"已完成",
                type:"3"
            },
            {
                name:"返佣中",
                type:"4"
            }
        ],
        obj:
            {
                select:'',
                selectpl:'',
                type:"未处理"
            }
        ,
        select:[
            {
                name:"押房贷",
                type:""
            },
            {
                name:"房乐贷",
                type:""
            },
            {
                name:"车乐贷",
                type:""
            },
           
        ],
        selectpl:[
            {
                name:"李莉",
                type:""
            },
            {
                name:"张玲",
                type:""
            },
            {
                name:"李小冉",
                type:""
            },
            {
                name:"李大维",
                type:""
            }
        ],
    }
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        let {select,selectpl,obj}=this.state
        let { res,data,dataer ,findsizi,But,reser} = this.props
        return (
            <>
                <Header style={{ background: '#fff', padding: 0 }} >
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        {
                            res && res.map((item, index) =>
                            <Menu.Item key={index} onClick={()=>{
                                    this.props.addfner(item.type)
                                }}>
                                    {item.name} <i onClick={()=>{
                                        this.props.splice(index)
                                    }}>X</i>
                                </Menu.Item>
                            )
                        }
                    </Menu>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                 <div style={{ margin: '10px 0' }}>
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                    <div className="filter">
                <div className="filter-one">
                    <div>
                        <span className="time">处理时间 :</span>
                        <DatePicker renderExtraFooter={() => 'extra footer'} />
                        <DatePicker renderExtraFooter={() => 'extra footer'}/>    
                    </div>
                     <div className="two">
                        <span className="time">金额范围 :</span>
                        <input type="text"/><input type="text"/>
                    </div>
                    <div className="three">
                        <span className="time">利率范围 :</span>
                        <input type="text"/><input type="text"/>
                    </div>
                </div>
                <div className="filter-two">
                    <div className="change-one">
                        <b>处理状态 :</b>
                        {this.state.data.map((it,index)=>
                            <span key={index} className={this.state.index==index?'action':''} onClick={(e)=>{
                                    const con=obj
                                    // console.log(e.target.value)
                                    obj.type=it.name
                                this.setState({index:index,obj:con},()=>{
                                    console.log(obj)
                                })

                            }}>{it.name}</span>
                            )}
                    </div>
                    <div className="change-two">
                        <span className="time">产品类型: </span>
                        <select onChange={(e)=>{
                                   const con=obj
                                   // console.log(e.target.value)
                                   obj.select=e.target.value
                               this.setState({index:index,obj:con},()=>{
                                   console.log(obj)
                               })
                        }}>
                            <option value="">请选择</option>
                           {
                               select.map((it,index)=>
                               <option key={index}>{it.name}</option>
                               )
                           }
                        </select>   
                    </div>
                    <div className="change-three">
                        <span className="time">客服名称: </span>
                        <select onChange={(e)=>{
                                   const con=obj
                                   // console.log(e.target.value)
                                   obj.selectpl=e.target.value
                               this.setState({index:index,obj:con},()=>{
                                   console.log(obj)
                               })
                        }}>
                             <option value="">请选择</option>
                        {
                               selectpl.map((it,index)=>
                               <option key={index}>{it.name}</option>
                               )
                           }
                       
                        </select> 
                      
                    </div>
                    <Button type="primary" onClick={()=>{
                        But(obj)
                    }}>提交</Button>
                </div>
            </div>
                    </Form>
                    </div>
                    <div style={{ padding: 24, background: '#fff', minHeight: 620 }}>
                 
                        <Table dataSource={dataer}  rowKey="phone">
                        <Column title="订单号" dataIndex="id" rowKey="id" />
                           <Column title="用户名称" dataIndex="customerName" rowKey="customerName" />
                           <Column title="手机号" dataIndex="phone" rowKey="phone" />
                           <Column title="产品类型" dataIndex="type" rowKey="type" />
                           <Column title="贷款金额(万元)" dataIndex="money" rowKey="money" />
                           <Column title="贷款利率" dataIndex="interestRate" rowKey="interestRate" />
                           <Column title="状态" dataIndex="handleState" rowKey="handleState" />
                           <Column title="客服" dataIndex="serviceName" rowKey="serviceName" />
                        </Table>
                        <Pagination
                        showSizeChanger
                        onChange={this.onchange=(current, pageSize)=>{
                                findsizi(current, pageSize)
                        }}
                        onShowSizeChange={this.onShowSizeChange=(current, pageSize)=>{
                            findsizi(current, pageSize)
                        }}
                        total={reser.length}
                />
            </div>
                </Content>
            </>
        )
    }
 
    componentDidMount() {
        this.props.addfner(this.props.match.params.type)
        bus.on("saddfner", (e) => {
            this.setState({
                current: "0",
            });
        })
    }
    componentWillReceiveProps(newx){
      console.log( "props")
    //   if( this.props.match.url!=newx.match.url){
    //     this.props.addfner(this.props.match.params.type)
    //   }
   
    }
}
export default connect(state => {
    return {
       data:state.num.data,
       res:state.num.res,
       dataer:state.num.dataer,
       reser:state.num.reser
    }
}, (dispatch) =>bindActionCreators(num, dispatch))(index)