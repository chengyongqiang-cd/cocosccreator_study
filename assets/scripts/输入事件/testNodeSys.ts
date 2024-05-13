import { _decorator, Component, EventTouch, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('testNodeSys')
export class testNodeSys extends Component {
    protected onLoad(): void {
        //节点区域按下时
        this.node.on(Node.EventType.MOUSE_DOWN, this.touchNode, this)
        //鼠标在区域内移动时
        this.node.on(Node.EventType.MOUSE_ENTER, this.moveEntre, this)
    }
    protected onDestroy(): void {
        this.node.off(Node.EventType.MOUSE_DOWN, this.touchNode, this)
        this.node.off(Node.EventType.MOUSE_ENTER, this.moveEntre, this)
    }
    start() {

    }

    update(deltaTime: number) {

    }

    touchNode(event: EventTouch) {
        console.log('点击节点了')
    }

    moveEntre() {
        console.log('鼠标移动到区域内部了')
    }
}

