import React from 'react';
import Picture from '@lxjx/flicker/lib/picture';
import '@lxjx/flicker/lib/picture/style';

import Config from '@lxjx/flicker/lib/config';

import img1 from '@/src/mock/img/1.jpg';
import img2 from '@/src/mock/img/2.jpg';
import img3 from '@/src/mock/img/3.jpg';
import img4 from '@/src/mock/img/4.jpg';
import img5 from '@/src/mock/img/5.jpg';
import img6 from '@/src/mock/img/6.jpg';
import img7 from '@/src/mock/img/7.jpg';

const imgs = [
  img1, img2, '', img3, img4, undefined, img5, img6, img7,
];

const imgStyle: React.CSSProperties = {
  width: 100,
  height: 100,
  objectFit: 'cover',
  margin: 2,
  borderRadius: '4px',
};

const Demo = () => {
  return (
    <div>
      {imgs.map((item, key) => (
        <Picture key={key} style={imgStyle} src={item} />
      ))}

      <div className="mt-32">
        <h4>全局配置加载错误时展示的图片</h4>
        <Config.Provider value={{
          pictureErrorImg: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
        }}
        >
          <div>
            <Picture style={imgStyle} src={img2} />
            <Picture style={imgStyle} src="" />
          </div>
        </Config.Provider>
      </div>
    </div>
  );
};

export default Demo;