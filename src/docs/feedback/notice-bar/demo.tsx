import React from 'react';

import NoticeBar from '@lxjx/flicker/lib/notice-bar';
import Button from '@lxjx/flicker/lib/button';

const Demo = () => {
  const [show, setShow] = React.useState(true);

  return (
    <div>
      <Button className="mb-16" onClick={() => setShow(p => !p)}>toggle {show.toString()}</Button>
      <NoticeBar
        message="一段提示文本"
        show={show}
        onClose={() => {
          setShow(false);
        }}
      />
      <NoticeBar message="一段提示文本" status="info" />
      <NoticeBar message="一段提示文本" status="success" />
      <NoticeBar message="一段提示文本" status="warn" />
      <NoticeBar message="一段提示文本" status="error" />
      <NoticeBar
        message="一段提示文本"
        desc="这里是对该提示的详细描述, 这里是对该提示的详细描述, 这里是对该提示的详细描述, 这里是对该提示的详细描述, 这里是对该提示的详细描述, 这里是对该提示的详细描述."
      />
      <NoticeBar message="一段提示文本" status="success" desc="这里是对该提示的详细描述, 这里是对该提示的详细描述, 这里是对该提示的详细描述, 这里是对该提示的详细描述, 这里是对该提示的详细描述, 这里是对该提示的详细描述.这里是对该提示的详细描述, 这里是对该提示的详细描述, 这里是对该提示的详细描述, 这里是对该提示的详细描述, 这里是对该提示的详细描述, 这里是对该提示的详细描述." />
      <NoticeBar
        message="一段提示文本"
        status="warn"
        desc={(
          <div>
            <Button link color="blue">可以放任何东西</Button>
          </div>
        )}
      />
      <NoticeBar message="自定义右侧内容" status="warn" right={<Button link size="small" color="red">不再显示</Button>} />
      <NoticeBar message="固定显示到顶部" status="info" fixedTop />
    </div>
  );
};

export default Demo;
