import { _decorator, Component, Label, Node, Vec3 } from 'cc';
import { Global } from './Global';
const { ccclass, property } = _decorator;

@ccclass('testNode')
export class testNode extends Component {
    start() {
        this.node.setScale(1, 1, 1)

        let node = this.node
        // node.setPosition(20, 20, 20)

        this.setPosition()

        this.setNodeRota()
    }



    update(deltaTime: number) {
        //this.node.setPosition(0, 40 * deltaTime, 0)
        this.node.position = new Vec3(0, deltaTime * 2, 0)
    }

    //     设置节点位置
    setPosition() {
        this.node.setPosition(-100, 50, 100)
        this.node.setPosition(new Vec3(-100, 50, 100))
        this.node.position = new Vec3(-100, 50, 100)
        console.log(this.node.position)
    }

    //设置节点旋转
    setNodeRota() {
        //this.node.setRotation(0, 90, 0, 0)
        this.node.setRotationFromEuler(90, 90, 90);
        setTimeout(() => {
            this.node.destroy()
        }, 6000)
    }

    protected onDestroy(): void {
        console.log('该节点被销毁了')
    }
}

