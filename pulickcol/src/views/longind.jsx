import React, { Component } from 'react'
import "./style/style.css"
import "../font_twao609olbc/iconfont.css"
import request from "../unit/request"
import cookie from "js-cookie"
export default class swt extends Component {
    state={
        val:'获取验证码',
        time:3,
        phone:'',
        pwd:'',
        cky:''
    }
    render() {
        let {val,phone,pwd,cky}=this.state
        return (
            <div className="warper">
                <div className="pice"></div>
                <div className="box">
                    <div className="left">
                        <p>Welcome</p>
                    </div>
                    <div className="right">
                        <div className="right-cont">
                            <p></p>
                            <div className="cont-div">
                           <p className="iconfont icon-logo"></p>
                            </div>
                           <div className="cont-h">
                           <p>赚赚金融渠道管理系统</p>
                           </div>
                           <ul>
                            <li><p><input type="text" placeholder="注册邮箱手机号" value={phone} onChange={(e)=>{
                                this.setState({phone:e.target.value})
                            }}/></p></li>
                            <li><p><input type="text" placeholder="登录密码" value={pwd} onChange={(e)=>{
                                this.setState({pwd:e.target.value})
                            }}/></p></li>
                            <li><p><input type="text" placeholder="验证码" value={cky} onChange={(e)=>{
                                this.setState({cky:e.target.value})
                            }}/></p><p><span onClick={()=>{
                                this.addfn()
                            }}>{val}</span></p></li>
                        </ul>
                        <div className="cont-p">
                            <span>忘记密码</span>
                        </div>
                        <div className="cont-button">
                            <button onClick={()=>{
                                this.loading()
                            }}>登陆</button>
                        </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
    loading(){
        let {phone,pwd,cky}=this.state
        let {history:{push}}=this.props
        // console.log(this.props)
        request.post("/api/login",{
            phone, 
		password:pwd,
		checkcode:cky
        }).then(re=>{
            console.log(re)
            if(!re.code){
                cookie.set('sessionId',re.sessionId,3)
            push("/home/index")
            }
        })
    }
    addfn(){
        let {time}=this.state
        // let time=3;
        let that=this
        this.tomer=setInterval(()=>{
            time--;
            console.log(this)
            this.setState({val:`${time}s后获取`})
            if(time<=0){
                clearInterval(that.tomer)
                request.get("/api/checkCode").then(re=>{
                   this.setState({val:re.Verification,time:3})
                })
            }
        },1000)
        
    }
}
