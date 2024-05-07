import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('testScript')
export class testScript extends Component {
    @property({ type: Node })
    testNode: Node = null!
    start() {

    }

    update(deltaTime: number) {
        this.testNode.setPosition(new Vec3(0.0, 40.0 * deltaTime, 0.0));
    }
}

