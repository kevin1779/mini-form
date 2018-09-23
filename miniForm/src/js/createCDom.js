/**
 * Created by Administrator on 2018/9/20.
 */

import fieldTemplate from "./fieldTemplate"
import attrTemplate from "./attrTemplate"
import {fn} from "./attrTemplate"
import dragInsert from "./dragInsert"
import fieldTemplateEvent from "./fieldTemplateEvent"



import {G} from "./globle"

let formData= G.formData
let controlId= G.controlId
let data= G.data
let  fieldData={}


export default function createCDom(u){
 var type=$(u.item).attr("id");
 var miniC=mini.get(type)


 var filedsWrap=$("<li class='filed'></li>")
 var fields=$(`<div class=${miniC.name} id=${miniC.name}${controlId+=1}> </div>`)

 var fieldBtn=$("<div class='buttonWrap'> <div class='mini-button buttonedit' iconCls='icon-edit'></div>  <div class='buttonadd mini-button' iconCls='icon-add'></div>  <div class='buttonsub mini-button' iconCls='icon-remove'></div> </div>")

  var typeText={
    text:{
      lable:"单行输入框：",
      placeholder:"请输入",
    },
    textArea:{
      lable:"多行输入框：",
      placeholder:"请输入",
    },
    radio:"单选框",
    checkBox:"多选框",
    select:"下拉框",
    date:"日期",
    file:"文件",
    pp:"段落",
    lineFeedBtn:{

    }
  }

  fieldData={
    id:controlId ,
    type:type,
    lable:typeText[type].lable,
    className:"form-control",
    placeholder:typeText[type].placeholder,
    values:""
  }


  var b = new fieldTemplate(u,miniC.name,fields,filedsWrap,fieldBtn,fieldData).init();
  dragInsert(filedsWrap)


  if(b.t!="lineFeedBtn"){
    let CC=mini.get(b.f.attr("id"))

    CC.set({
      width: 150,
    })
    fieldData.width=parseInt(CC.width)
  }

  fieldData.placeholder=b.f.attr("emptyText")



  fieldTemplateEvent(u,filedsWrap,fields,fieldData,function(e,t){

    if(t=="value"){
      //fieldData.value=e.x
      b.w.find(".mini-textbox-input").val(e);
    }else if(t=="lable"){
      b.w.find("lable").html(e);
    } else if(t=="placeholder"){
      //fieldData.lable=e
      b.w.find(".mini-textbox-input").attr("placeholder",e);
    } else if(t=="width"){
      if(b.t!="lineFeedBtn"){
        let CC=mini.get(b.f.attr("id"))
        CC.set({
          width: e
        })
        fieldData.width=parseInt(e)
      }
    }

  })




  formData.push(fieldData)

  return b.w
}