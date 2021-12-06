import React, { Fragment, ReactElement, ReactNode } from 'react';
import Icon from '../Icon/index';
import ReactDOM from 'react-dom';
import { scopedClassMaker } from '../../static/classes';
import close from '../../static/svg/close.svg'
import './index.less'

// 接口类型
interface Props {
  visible: boolean; // Dialog 是否出现
  buttons?: Array<ReactElement>; // 是提示框还是对话框 -- 即是否在footer处添加按钮
  onClose: React.MouseEventHandler; // 关闭对话框的点击事件
  closeOnClickMask?: boolean; // 点击蒙层是否关闭Dialog
}

// 定义组件类名前缀
const scopedClass = scopedClassMaker('fui-dialog');
const sc = scopedClass; // 控制类名后缀函数并简写
// Dialog组件
const Dialog: React.FC<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };
  const result = props.visible && (
    <Fragment>
      <div className={sc('mask')} onClick={onClickMask}></div>
      <div className={sc('')}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon src={close} />
        </div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>{props.children}</main>
        {props.buttons && props.buttons.length > 0 && (
          <footer className={sc('footer')}>
            {props.buttons &&
              props.buttons.map((button, index) =>
                React.cloneElement(button, { key: index })
              )}
          </footer>
        )}
      </div>
    </Fragment>
  );
  // 传送到顶层防止层级干扰
  return ReactDOM.createPortal(result, document.body);
};
Dialog.defaultProps = {
  closeOnClickMask: false,
};
const modal = (
  content: ReactNode,
  buttons?: Array<ReactElement>,
  afterClose?: () => void
) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog
      visible={true}
      buttons={buttons}
      onClose={() => {
        close();
        afterClose && afterClose();
      }}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return close;
};
const alert = (content: string) => {
  const button = <button onClick={() => close()}>OK</button>;
  const close = modal(content, [button]);
};
const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>,
  ];
  const close = modal(content, buttons, no);
};
export { alert, confirm, modal };
export default Dialog;
