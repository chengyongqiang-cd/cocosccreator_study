import { _decorator, Component, EventKeyboard, EventTouch, Input, input, KeyCode, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('testInput')
export class testInput extends Component {
    protected onLoad(): void {
        // input.on(Input.EventType.TOUCH_START, this.touchStart, this)
        //注册键盘输入事件
        input.on(Input.EventType.KEY_DOWN, this.keyDown, this)

        //注册重力感应事件
        // input.on(Input.EventType.DEVICEMOTION, this.deviceMotion, this)
    }

    protected onDestroy(): void {
        // input.off(Input.EventType.TOUCH_START, this.touchStart, this)
        input.off(Input.EventType.KEY_DOWN, this.keyDown, this)
        // input.off(Input.EventType.DEVICEMOTION, this.deviceMotion, this)
    }
    start() {

    }

    update(deltaTime: number) {

    }

    touchStart(event: EventTouch) {
        console.log(event.getLocation())
        console.log(event.getUILocation())
    }

    keyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                console.log('按下了keyA')
                break
        }
    }



}

