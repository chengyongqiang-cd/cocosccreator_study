import { _decorator, Component, Node, RigidBody2D, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('testPhysics')
export class testPhysics extends Component {
    protected onLoad(): void {
        const rigid = this.node.getComponent(RigidBody2D)
        //获取刚体质量
        const mass = rigid.getMass()
        console.log(mass)

        const velocity = rigid.linearVelocity
        rigid.linearVelocity = velocity

        const damping = rigid.linearDamping
        rigid.linearDamping = damping


        //世界坐标系转换到本地坐标系

        const worldPoint = new Vec2(100, 100)
        const localPoint = new Vec2()
        rigid.getLocalPoint(worldPoint, localPoint)
        console.log(localPoint)

        //本地坐标系转换到世界坐标系
        const worldPoint1 = new Vec2()
        rigid.getWorldPoint(localPoint, worldPoint1)
        console.log(worldPoint1)

        //获取本地坐标系下的质心
        const localpointCenter = new Vec2()
        rigid.getLocalCenter(localpointCenter)
        console.log(localpointCenter)

        //获取世界坐标系下的质心
        const worldPointCenter = new Vec2()
        rigid.getWorldCenter(worldPointCenter)
        console.log(worldPointCenter)

        //施加一个力到刚体指定的点
        rigid.applyForce(new Vec2(50, 90), new Vec2(worldPointCenter.x + 10, worldPointCenter.y + 20), true)

        //直接施加一个力到质体中心
        rigid.applyForceToCenter(new Vec2(50, 100), true)

    }
    start() {

    }

    update(deltaTime: number) {

    }
}

