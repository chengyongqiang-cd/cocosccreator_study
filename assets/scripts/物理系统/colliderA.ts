import { _decorator, Collider2D, Component, Contact2DType, Node, IPhysics2DContact } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('colliderA')
export class colliderA extends Component {
    start() {
        let collider = this.node.getComponent(Collider2D)
        collider.on(Contact2DType.BEGIN_CONTACT, this.beginContact, this)
    }



    update(deltaTime: number) {

    }

    beginContact(self: Collider2D, other: Collider2D, contact: IPhysics2DContact | null) {
        console.log('A接触了B')
    }
}

