import { _decorator, Component, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('testScript')
export class testScript extends Component {
    @property({ type: Node })
    testNode: Node = null!
    start() {

    }

    update(deltaTime: number) {
        this.testNode.setPosition(0.0, 40.0 * deltaTime, 0.0);
        //console.log(this.testNode.position)
    }
}

