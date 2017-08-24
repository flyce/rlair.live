import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

import ImageImg from '../source/images/image.jpg';

const styleSheet = createStyleSheet('About', theme => ({
    card: { maxWidth: 400, width: '96%', margin: '0 auto', marginTop: 10,},
    avatar: { backgroundColor: '' },
    flexGrow: { flex: '1 1 auto' },
}));

class DevLog extends Component {
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
                            今年 10 岁 [10 years old]<br />
                            性格腼腆 [Shy personality]<br />
                            不太爱说话 [Do not love to speak]<br />
                            如果有什么冒犯的地方 [If there is any offensive place]<br />
                            你他妈的来打我啊！ [You fucking to hit me!]<br />
                            一些联系方式: [Some contact information:]<br />
                            邮箱：[E-mail: ] <a href="mailto:mail@flyce.cn">mail@flyce.cn</a><br />
                            微博：[Weibo: ] <Link to="http://weibo.com/u/3833951738/" target="_blank">一个被修飞机耽误的程序员</Link>
                            <br />
                            <br />
                            <br />
                            目前暂住昆明<br />
                            生活尚可控制<br />
                            除了<strong>单身</strong>!!!&nbsp;&nbsp;
                            <s>女票</s> <sub>(不存在的，程序员怎么可能有女朋友)</sub><br />
                            这个项目是自己学 React.js 练手是写的<br />
                            等项目把后台cms写完之后
                            就会把怎么制作这个网站的过程录成视频<br />
                            感兴趣的关注一下哟<br />
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styleSheet)(DevLog);