import React, { Component } from 'react'
import {Tree} from "antd"
const {TreeNode} =Tree
export default class ITem extends Component {
    onSelect=(value,info)=>{

    }
    state={
        data:[
            {
                "name":"parent 1",
                type:"0-0",
                child:[
                    {
                        name:"parent 1-0",
                        type:"0",
                        child:[
                            {
                                name:"leaf"
                            },
                            {
                                name:"leaf"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"parent 1-1",
                child:[
                    {
                        name:"sss",
                        
                    }
                ]
            }
        ]
    }
    render() {
        return (
            <div>
                <Tree
                    checkable={true}
                    defaultCheckedKeys={["0","1"]}
                    defaultSelectedKeys={["0","1"]}
                    defaultExpandedKeys={["0","1"]}
                    // checkStrictly={true}
                >
                  {
                      this.state.data.map((it,index)=>
                      <TreeNode key={index} title={it.name} >
                          {
                              it.child.map((item,ind)=>
                              <TreeNode key={ind} title={item.name} disabled>
                                   {
                               item.child&&item.child.map((ite,inde)=>
                              <TreeNode key={inde} title={ite.name}  ></TreeNode> 
                              )
                          }
                              </TreeNode> 
                              )
                          }
                      </TreeNode> 
                  
                      )
                  }
                </Tree>
            </div>
        )
    }
}
