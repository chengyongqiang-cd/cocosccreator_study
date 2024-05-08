import { _decorator, Component, Label, Node } from 'cc';
import { Global } from './Global';
const { ccclass, property } = _decorator;

@ccclass('testNode')
export class testNode extends Component {
    start() {
        this.node.setScale(1, 1, 1)

        let node = this.node
        node.setPosition(20, 20, 20)
    }



    update(deltaTime: number) {
        this.node.setPosition(0, 40 * deltaTime, 0)
    }
}

