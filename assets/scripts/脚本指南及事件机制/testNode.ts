import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('testNode')
export class testNode extends Component {
    start() {
        this.node.setScale(1, 1, 1)
    }

    update(deltaTime: number) {
        this.node.setPosition(0, 40 * deltaTime, 0)
    }
}

