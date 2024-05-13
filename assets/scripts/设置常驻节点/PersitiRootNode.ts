import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('persitsi')
export class persitsi extends Component {
    start() {

    }

    update(deltaTime: number) {

    }

    setRootNode() {
        director.addPersistRootNode(this.node)
    }
}

