import { _decorator, Component, EventTouch, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NodeA')
export class NodeA extends Component {

    protected onLoad(): void {
        this.node.on(Node.EventType.TOUCH_START, this.touchStart, this)
    }
    protected onDestroy(): void {
        this.node.off(Node.EventType.TOUCH_START, this.touchStart, this)
    }
    start() {

    }

    update(deltaTime: number) {

    }

    touchStart(event: EventTouch) {
        console.log("点击了A节点")
    }
}

