const cheerio = require('cheerio');
const superagent = require('./superagent');
const fs=require('fs');
init();
// getArticle("http://www.dioenglish.com/home.php?mod=space&uid=114334&do=blog&id=58124")
var page=1;
async function init(){
   let dom=await getDom(`http://www.dioenglish.com/home.php?mod=space&do=blog&view=all&page=${page}`);
  
   let $ = cheerio.load(dom);
   let arr=[];
   
   $(".bbda").find(".xs2").children("a").map((index,item)=>{
    if($(item).text()!=='Shares'){
        arr.push({
            title:$(item).text(),
            href:$(item).attr("href"),
            article:null
        })
    }
   })
//    let model=await readFile("./model/learn_english.md");
   
   await Promise.all(arr.map(async(item)=>{
      item.article=await getArticle(item.href);
   }));
   await Promise.all(arr.map(async(item)=>{
       if(item.article){
        let model=`---
title: ${setTitle1(item.title)}
date: 2019-11-03 21:11:00
tags:
    learn english
---
`;      
        // if(item.title.search("diary")>-1){
        //     writeFile("./md/"+setTitle(item.title)+".md",model+item.article)
        // }
        await writeFile("./md/"+setTitle(item.title)+".md",model+item.article)
       }
   }));
   page++;
   console.log(page)
   init()
   
}
function setTitle(title){
    if(/(\:|\"|\'|\?|\.)/g.test(title)){
        title=title.replace(/(\:|\"|\'|\?|\.)/g,"");
    }
    let result=title.replace(/\s/g,"_");
    return result;
}
function setTitle1(title){
    if(/(\:|\"|\'|\?|\.)/g.test(title)){
        title=title.replace(/(\:|\"|\'|\?|\.)/g,"");
    }
    return title;
}
async function getDom(url){
    let res = await superagent.req(url,'GET');
    return res.text;
}
async function getArticle(href){
    let res= await getDom(href);
    let $ = cheerio.load(res);
    return $("#blog_article").text();
}
async function writeFile(fileName,fileText){
   return new Promise((resolve,reject)=>{
    fs.writeFile(fileName, fileText,  function(err) {
        if (err) {
            return console.error(err);
        }
        resolve("")
     });
   })
}
async function readFile(fileName,){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,  function(err,data) {
            if (err) {
                return console.error(err);
            }
            resolve(data.toString());
         });
    })
}