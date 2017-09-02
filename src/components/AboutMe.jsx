import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';

import ImageImg from '../source/images/image.jpg';

const styleSheet = createStyleSheet('About', theme => ({
    card: { maxWidth: 400, width: '96%', margin: '0 auto', marginTop: 10,},
    avatar: { backgroundColor: '' },
    flexGrow: { flex: '1 1 auto' },
}));

class About extends Component {
    render() {
        const classes = this.props.classes;

        return (
            <div>
                <Card className={classes.card}>
                    <CardMedia>
                        <img src={ImageImg} alt="Contemplative Reptile" width="100%"/>
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">
                            <strong>我 [I]</strong><br />
                            叫 [Called] <Link to="http://www.flyce.cn" target="_blank">Echo</Link><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shǎ&nbsp;&nbsp;bī<br />
                            是个&nbsp;&nbsp;好&nbsp;&nbsp;人 [Is a good man]<br />
                            小学生 [Primary school students]<br />
                            今年 22 岁 [22 years old]<br />
                            性格腼腆 [Shy personality]<br />
                            不太爱说话 [Do not love to speak]<br />
                            如果有什么冒犯的地方 [If there is any offensive place]<br />
                            你他妈的来打我啊！ [You fucking to hit me!]<br />
                            一些联系方式: [Some contact information:]<br />
                            邮箱：[E-mail: ] <a href="mailto:mail@flyce.cn">mail@flyce.cn</a><br />
                            微博：[Weibo: ] <Link to="http://weibo.com/u/3833951738/" target="_blank">一个被修飞机耽误的程序员</Link><br />
                            <br />
                        </Typography>
                            <Divider />
                        <Typography component="p">
                            <br />
                            目前暂住 KMG / ZPPP<br />
                            生活尚可控制<br />
                            除了<strong>单身</strong>!!!<br />
                            <s>女票</s> <sub>(不存在的，程序员怎么可能有女朋友)</sub><br />
                            因为担心 TOEIC 达不到想要的分数<br />
                            而不能去之前签三方的公司工作<br />
                            准备找其他工作的时候作为备份的时候<br />
                            开始写的这个项目<br />
                            不过后来过了<br />
                            写也写了一部分<br />
                            就索性把它写完了<br />
                            等项目把后台 CMS 写完之后 <br />
                            可能会把怎么制作这个网站的过程录成视频<br />
                            感兴趣的先看看源码 <a href="https://github.com/flyce">flyce (王全峰) · GitHub</a><br />
                            <br />
                        </Typography>
                        <Divider />
                        <Typography component="p">
                            <br />
                            程序目前还在开发中，仍需进一步完善<br />
                            <br />
                            已知的问题：<br />
                            1. 登陆的逻辑还有小bug<br />
                            2. "我的收藏"和"稍后再看"列表间接性抽风<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;硬盘坏了写好的代码丢失了一部分<br />
                            3. 项目为移动端开发，桌面端体验不好<br />
                            4. 服务端程序部分功能有缺陷<br />


                            <br />
                            未来的计划：<br />
                            1. 加入下拉加载更多(着急上线，就先没加上)<br />
                            2. 考虑引入 redux<br />
                            3. 把 API 文档写出来(其他要用的朋友直接调 API)<br />
                            4. 适配桌面浏览器<br />
                            <br />
                        </Typography>
                        <Divider />
                        <Typography component="p">
                            <br />
                            程序目前还到处都是BUG<br />
                            大佬不要攻击我😂&nbsp;😂&nbsp;😂
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styleSheet)(About);