import { _decorator, Button, Component, Label, LabelOutline, Node, ProgressBar, Widget } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('testUi')
export class testUi extends Component {
    @property({ type: Node })
    testWightNode: Node = null!
    @property({ type: Node })
    testButton: Node = null!
    @property({ type: ProgressBar })
    testProgress: ProgressBar = null!
    @property({ type: Node })
    testLabel: Node = null!

    private time: number = 0

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
        this.time = this.time + 0.1 * deltaTime
        if (this.time > 1) {
            this.time = 0
        }
        this.setProgressBar(this.time)
    }

    setWightCom() {
        let widget = this.testWightNode.addComponent(Widget)
        widget.top = 50
    }

    buttonClick() {
        console.log('按钮点击了')
    }
    //设置进度条
    setProgressBar(num) {
        this.testProgress.getComponent(ProgressBar).progress = num
    }

    //设置Label描边

    setLabelLabelOutline() {

    }





}

