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
                            <strong>我</strong><br />
                            叫 <Link to="http://www.flyce.cn" target="_blank">Echo</Link><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shǎ&nbsp;&nbsp;bī<br />
                            是个&nbsp;&nbsp;好&nbsp;&nbsp;人<br />
                            今年 22 岁<br />
                            性格腼腆<br />
                            不太爱说话<br />
                            目前暂住 KMG<br />
                            ZPPP 旁边<br />
                            生活尚可控制<br />
                            除了<strong>单身</strong>!!!<br />
                            <s>女票</s> <sub>(不存在的，程序员怎么可能有女朋友)</sub><br />
                            一些联系方式: <br />
                            邮箱：<a href="mailto:mail@flyce.cn">mail@flyce.cn</a><br />
                            微博：<Link to="http://weibo.com/u/3833951738/" target="_blank">一个被修飞机耽误的程序员</Link><br />
                            <br />
                        </Typography>
                        <Divider />
                        <Typography component="p">
                            <br />
                            因为某些不方便说的原因<br />
                            写了这个Web App<br />
                            写了也就写了<br />
                            尝试着运营一下<br />
                            我也不知道能运营到什么时候<br />
                            哪天我没钱支付服务器的费用<br />
                            这个项目就结束了<br />
                            不要问我什么时候更新视频<br />
                            也不要问我什么时候能写完<br />
                            我都不知道<br />
                            再问打哭你信不信！！！<br />
                            <br />
                        </Typography>
                        <Divider />
                        <Typography component="p">
                            <br />
                            等项目把后台 CMS 写完之后 <br />
                            可能会把怎么制作这个网站的过程录成视频<br />
                            只是可能<br />
                            别太当真<br />
                            不确定有没有那个时间和经历<br />
                            感兴趣的先看看源码 <a href="https://github.com/flyce" target="_blank" rel="noopener noreferrer">flyce · GitHub</a><br />
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
                            3. 项目为移动端开发，桌面端体验不好<br />
                            4. 服务端程序部分功能有缺陷<br />

                            <br />
                            未来的计划：<br />
                            1. 加入下拉加载更多(着急上线，就先没加上)<br />
                            2. 考虑引入 redux<br />
                            3. 把 API 文档写出来(其他要用的朋友直接调 API)<br />
                            4. 适配桌面浏览器<br />
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styleSheet)(About);