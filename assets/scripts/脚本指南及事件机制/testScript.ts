import { _decorator, Component, Node, Vec3, Label, Color } from 'cc';
import { Global } from './Global';
const { ccclass, property } = _decorator;

@ccclass('testScript')
export class testScript extends Component {
    @property({ type: Node })
    testNode: Node = null!
    @property({ type: Node })
    labelTestNode: Node = null

    private label: any = null

    protected onLoad(): void {
        Global.globalNode = this.labelTestNode
        Global.globalNodeLabel = this.labelTestNode.getComponent(Label)
        console.log(Global.globalNodeLabel)
    }

    start() {
        this.setLabelNode()

        this.findChild()
        this.setGlobalNode()
    }

    update(deltaTime: number) {
        this.testNode.setPosition(new Vec3(0.0, 40.0 * deltaTime, 0.0));
    }

    protected lateUpdate(dt: number): void {
        this.testNode.setPosition(new Vec3(0.0, 200, 0.0));
    }

    setLabelNode() {
        this.label = this.labelTestNode.getComponent(Label)
        console.log(this.name)
        let text = this.name + 'start'
        this.label.color = new Color('#00000')
        this.label.string = text
    }

    //使用全局节点
    setGlobalNode() {
        setTimeout(() => {
            Global.globalNodeLabel.string = '使用了全局节点'
        }, 3000)
    }

    //查找子节点
    findChild() {
        let childs = this.node.children
        console.log(childs)
        let node = this.node.getChildByName('Node')
        console.log(node.name)
    }
}

