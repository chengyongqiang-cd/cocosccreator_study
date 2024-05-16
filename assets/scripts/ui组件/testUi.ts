import { _decorator, Button, Component, Label, LabelOutline, Node, ProgressBar, Toggle, Widget } from 'cc';
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
    @property({ type: Toggle })
    testToggle: Toggle = null

    private time: number = 0

    protected onLoad(): void {
        this.testButton.on(Button.EventType.CLICK, this.buttonClick, this)
        this.testToggle.node.on('toggle', this.toggleCallback, this)
    }

    protected onDestroy(): void {
        this.testButton.off(Button.EventType.CLICK, this.buttonClick, this)
        this.testToggle.node.off('toggle', this.toggleCallback, this)
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


    toggleCallback(toggle: Toggle) {
        if (toggle.isChecked = true) {
            console.log('点击复选框了')
        }
    }
}

