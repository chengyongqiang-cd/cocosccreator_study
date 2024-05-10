import { _decorator, Component, Node, Vec3, Label, Color, director, instantiate } from 'cc';
import { Global } from './Global';
const { ccclass, property, executionOrder } = _decorator;


@ccclass('testScript')
@executionOrder(-1)
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

        this.createNode()

        this.cloneNode()
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

    //查找子节点B
    findChild() {
        let childs = this.node.children
        console.log(childs)
        let node = this.node.getChildByName('Node')
        console.log(node.name)
    }

    //动态创建节点
    createNode() {
        let node = new Node('createNode')
        //director.getScene().addChild(node)
        this.node.addChild(node)
        const label = node.addComponent(Label)
        label.color = new Color('#000000')
        label.string = '新添加了一个节点'
        this.scheduleOnce(() => {
            node.getComponent(Label).destroy()
        }, 1000)
        node.setPosition(2, 2, 0)
    }

    //克隆节点
    cloneNode() {
        let node = instantiate(this.labelTestNode)
        this.node.addChild(node)
        node.setPosition(60, 60, 0)

        setTimeout(() => {
            node.destroy()
        }, 5000)
    }


}

