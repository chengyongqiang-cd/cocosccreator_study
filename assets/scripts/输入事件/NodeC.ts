import { _decorator, Component, Node, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NodeC')
export class NodeC extends Component {
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
        console.log("点击了C节点")
        this.removeFromParent()
    }


    removeFromParent() {
        setTimeout(() => {
            this.node.removeFromParent()
        }, 5000)
    }
}

