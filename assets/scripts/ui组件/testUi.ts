import { _decorator, Button, Component, Node, Widget } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('testUi')
export class testUi extends Component {
    @property({ type: Node })
    testWightNode: Node = null!
    @property({ type: Node })
    testButton: Node = null!

    protected onLoad(): void {
        this.testButton.on(Button.EventType.CLICK, this.buttonClick, this)
    }

    protected onDestroy(): void {
        this.testButton.off(Button.EventType.CLICK, this.buttonClick, this)
    }
    start() {
        this.setWightCom()
    }

    update(deltaTime: number) {

    }

    setWightCom() {
        let widget = this.testWightNode.addComponent(Widget)
        widget.top = 50
    }

    buttonClick() {
        console.log('按钮点击了')
    }


}

