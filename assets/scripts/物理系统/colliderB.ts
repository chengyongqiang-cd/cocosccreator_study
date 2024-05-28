import { _decorator, Collider2D, Component, Contact2DType, Node, IPhysics2DContact } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('colliderB')
export class colliderB extends Component {
    start() {
        let collider = this.node.getComponent(Collider2D)
        collider.on(Contact2DType.BEGIN_CONTACT, this.startContact, this)
    }

    update(deltaTime: number) {

    }
    startContact(self: Collider2D, other: Collider2D, contact: IPhysics2DContact | null) {
        console.log('被撞了')
        console.log(other.tag)
        console.log(contact.getWorldManifold())
        const ponits = contact.getWorldManifold().points
        ponits.forEach(element => {
            console.log(element.x)
        });
    }
}

