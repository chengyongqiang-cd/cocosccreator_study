import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Global')
export class Global extends Component {
    public static globalNode: any = null
    public static globalNodeLabel: any = null
    start() {

    }

    update(deltaTime: number) {

    }
}

