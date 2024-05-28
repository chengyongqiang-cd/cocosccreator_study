import { _decorator, Component, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('testTween')
export class testTween extends Component {

    protected onLoad(): void {
        let tweenDuration: number = 1
        tween(this.node.position).to(tweenDuration, new Vec3(0, 10, 0)).start()
    }
    start() {
        tween(this.node)
            //.target(this.node)
            .to(1.0, { position: new Vec3(0, 10, 0) })
            .by(1.0, { position: new Vec3(0, -10, 0) })
            .delay(1.0)
            .by(1.0, { position: new Vec3(0, -10, 0) })
            .start()
    }

    update(deltaTime: number) {

    }
}

