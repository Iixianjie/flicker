import React from 'react';
import Dialog from 'm78/dialog';

const Play = () => {
  function model() {
    const [ref, id] = Dialog.api({
      title: '提示',
      content: '这是弹窗内容',
    });

    console.log(ref, id);

    Dialog.api({
      title: '提示',
      content: '这是弹窗内容2',
    });

    console.log(ref, id);
  }

  return (
    <div>
      <button type="button" onClick={model}>
        按钮
      </button>
    </div>
  );
};

export default Play;
