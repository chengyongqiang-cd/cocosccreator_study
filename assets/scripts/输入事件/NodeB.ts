import { _decorator, Component, Node, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NodeB')
export class NodeB extends Component {
    protected onLoad(): void {
        this.node.on(Node.EventType.TOUCH_START, this.touchStart, this)
        //节点移除子节点
        this.node.on(Node.EventType.CHILD_REMOVED, this.childRemove, this)
    }
    protected onDestroy(): void {
        this.node.off(Node.EventType.TOUCH_START, this.touchStart, this)
        this.node.off(Node.EventType.CHILD_REMOVED, this.childRemove, this)


    }
    start() {
    }

    update(deltaTime: number) {

    }

    touchStart(event: EventTouch) {
        //停止事件冒泡
        event.propagationStopped = true
        console.log("点击了B节点")
    }

    childRemove() {
        console.log('这里是B节点，他的子节点A被删除了')
    }
}

