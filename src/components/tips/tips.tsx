import React, { useEffect, useMemo } from 'react';
import { useQueue, UseQueueConfig, UseQueueItem, UseQueueItemWithId } from '@lxjx/hooks';
import { animated, useTransition } from 'react-spring';
import Button from 'm78/button';
import { getPortalsNode } from '@lxjx/utils';
import { If, Switch } from 'm78/fork';
import cls from 'classnames';
import { useGesture } from 'react-use-gesture';
import ReactDOM from 'react-dom';
import { TipsItem, TipsProps } from './type';

const defaultOpt = {
  duration: 1600,
  type: 'card' as const,
};

function Tips({ controller: queue }: TipsProps) {
  const transition = useTransition<TipsItem & UseQueueItemWithId, any>(queue.current!, {
    key: queue.current?.id,
    from: { y: '-100%', x: '-50%', opacity: 0 },
    enter: { y: '0%', opacity: 1 },
    leave: { y: '-100%', opacity: 0 },
  });

  const hasTouch = useMemo(() => {
    return typeof window !== 'undefined' && 'ontouchstart' in window;
  }, []);

  /** 暂停行为 */
  const bind = useGesture(
    {
      onHover({ hovering }) {
        hovering ? queue.pause() : queue.start();
      },
      onDrag({ down, first, last }) {
        if (first && down && !queue.isPause) {
          queue.pause();
        }

        if (last && queue.isPause) {
          queue.start();
        }
      },
    },
    {
      drag: {
        filterTaps: true,
        enabled: hasTouch,
      },
    },
  );

  return transition((style, item) => {
    if (!item) return null;

    const hasAction = item.actions && item.actions.length;

    const hasPrev = item.prevable && queue.hasPrev(item.id);

    return (
      <animated.div
        className={cls(
          'm78-tips',
          `__${item.type}`,
          item.fitWidth && '__fitWidth',
          item.global && '__global',
          (hasAction || hasPrev || item.nextable || item.actionsNode) && '__hasAction',
        )}
        style={{ width: item.width, ...style }}
        {...bind()}
      >
        <span className="m78-tips_content">{item.message}</span>
        <span className="m78-tips_action">
          <Switch>
            <If when={item.actionsNode}>{item.actionsNode}</If>
            <If when={hasAction}>
              {() =>
                item.actions?.map((it, ind) => (
                  <Button key={ind} link size="small" color={it.color} onClick={it.handler}>
                    {it.text}
                  </Button>
                ))
              }
            </If>
          </Switch>
          {/* 非暂停状态才显示操作按钮 */}
          <If when={hasPrev}>
            <Button link size="small" color="red" onClick={queue.prev}>
              上一条
            </Button>
          </If>
          <If when={item.nextable}>
            {() => {
              const hasNext = queue.hasNext(item.id);
              return (
                <Button link size="small" color={hasNext ? 'primary' : 'red'} onClick={queue.next}>
                  {hasNext ? '下一条' : '关闭'}
                </Button>
              );
            }}
          </If>
        </span>
      </animated.div>
    );
  });
}

const useTipsController = (opt?: UseQueueConfig<TipsItem>) => {
  const { list, defaultItemOption } = opt || {};

  return useQueue<TipsItem>({
    list,
    defaultItemOption: {
      ...defaultOpt,
      ...defaultItemOption,
    },
  });
};

function GlobalTips({ item }: any) {
  const queue = Tips.useTipsController({
    defaultItemOption: {
      fitWidth: true,
      nextable: true,
      global: true,
    },
  });

  useEffect(() => {
    if (!item) return;

    queue.push(item);
  }, [item]);

  return <Tips controller={queue} />;
}

Tips.useTipsController = useTipsController;

type MixItem = UseQueueItem & TipsItem;

/**
 * 推送一条全局消息
 * */
Tips.push = (opt: MixItem | MixItem[]) => {
  ReactDOM.render(<GlobalTips item={opt} />, getPortalsNode('global_tips'));
};

/**
 * Tips.push的快捷方式，接收消息和持续时间
 * */
Tips.tip = (message: React.ReactNode, duration?: number) => {
  Tips.push({
    message,
    duration,
  });
};

export default Tips;
