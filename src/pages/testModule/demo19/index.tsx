import React, { useEffect, useState } from "react";
import BulletScreen, { StyledBullet } from 'rc-bullets';
import Mock from 'mockjs';
import { getRandomTheme, getRandomHead, getRandomAniFun } from './helper';
const headUrl='https://zerosoul.github.io/rc-bullets/assets/img/heads/girl.jpg';
import aa from '@/assets/birth/dog@3x.png'
import bb from '@/assets/birth/sea@3x.png'
const styleList: React.FC<any> = ({}) => {
  // 弹幕屏幕
  const [screen, setScreen] = useState(null);
  // 弹幕内容
  const [bullet, setBullet] = useState('');
  let theme = 'random';
  let mocking = '';
  let mockingInter = 0;
  let currScreen: any = null;
  let bgColor = theme === 'random' ? getRandomTheme() : theme;
  let currHead = theme === 'random' ? getRandomHead() : headUrl;
  let dataList = [
      {
        avatrl: aa,
        content: '是达方健康论文',
        color: 'red'
      },
      {
        avatrl: bb,
        content: '双方就看完了看',
        color: 'yellow'
      },
      {
        avatrl: headUrl,
        content: '双方口味可圣诞节',
        color: 'green'
      },
      {
        avatrl: aa,
        content: '是达方健康论文',
        color: 'red'
      },
      {
        avatrl: bb,
        content: '双方就看完了看',
        color: 'yellow'
      },
      {
        avatrl: headUrl,
        content: '双方口味可圣诞节',
        color: 'green'
      },
      {
        avatrl: aa,
        content: '是达方健康论文',
        color: 'red'
      },
      {
        avatrl: bb,
        content: '双方就看完了看',
        color: 'yellow'
      },
      {
        avatrl: headUrl,
        content: '双方口味可圣诞节',
        color: 'green'
      },
  ]

  useEffect(() => {
    // 给页面中某个元素初始化弹幕屏幕，一般为一个大区块。此处的配置项全局生效
    let s = new BulletScreen('.screen',{duration:20});
    setScreen(s);
  }, []);

  useEffect(() => {
      console.log('123', currScreen)
    if (!currScreen) {
      currScreen = new BulletScreen('.screen');
      const randomTxt = Mock.Random.csentence(10, 12);
      console.log('des', randomTxt)

      let newOpts = Object.assign(
        {
          loopCount: 'infinite',//无限循环
          duration: 10,//速度
          trackHeight: 100,
          delay: 0,
        },
      );
      // setInterval(() => {}, 1)

      dataList.map((item, index) => {

        currScreen.push(
          <StyledBullet
            head={item.avatrl}
            msg={item.content}
            backgroundColor={item.color}
            size='large'
          />,
          newOpts
        );



        // setTimeout(function() {
        //   currScreen.push(
        //     <StyledBullet
        //       head={item.avatrl}
        //       msg={item.content}
        //       backgroundColor={item.color}
        //       size='large'
        //     />,
        //     newOpts
        //   );
        // }, (index + 1) * 2000);
     


      //   let method = setInterval(function () {
      //     currScreen.push(
      //       <StyledBullet
      //         head={item.avatrl}
      //         msg={item.content}
      //         backgroundColor={item.color}
      //         size='large'
      //       />,
      //       newOpts
      //     );

      //     if(index >= 4){
      //       clearInterval(method);
      //     }
      // },1500)
      })

    





      // handleSend(randomTxt, {});
    //   if (!mocking) {
    //       mockingInter = setInterval(() => {
    //         const randomTxt = Mock.Random.csentence(10, 12);
    //       //   handleSend(randomTxt);
    //       currScreen.push(
    //           <StyledBullet
    //             head={currHead}
    //             msg={randomTxt}
    //             backgroundColor={bgColor}
    //             size='large'
    //           />
    //         );
    //       }, 1500);
    //     } else {
    //       clearInterval(mockingInter);
    //     }
    //   currScreen.push(
    //     <StyledBullet
    //       size="huge"
    //       head="assets/img/heads/girl.jpg"
    //       msg="欢迎体验rc-bullets弹幕功能~~"
    //     />,
    //     { duration: 40, top: '15%' }
    //   );
    }
  }, []);

    // 弹幕内容输入事件处理
    const handleChange = ({ target: { value } }) => {
      setBullet(value);
    };

      // 发送弹幕
  const handleSend = (val) => {
    if (bullet) {
      screen.push(
        <StyledBullet
          head={currHead}
          msg={bullet}
          backgroundColor={bgColor}
          size='large'
        />
      );
    }
  };
    return (
        <div>
        <main>
          <div className="screen" style={{ width: '500px', height: '235px', background: 'red' }}></div>
          <input value={bullet} onChange={handleChange} />
          <button onClick={handleSend}>发送</button>
        </main>
        </div>
    )
}

export default styleList;