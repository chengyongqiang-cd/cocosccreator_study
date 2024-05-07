import { _decorator, Component, Node, resources, Sprite, SpriteFrame, UITransform, Size } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('resourcesTest')
export class resourcesTest extends Component {
    @property({ type: Sprite })
    testSprite: Sprite = null!

    protected onLoad(): void {
        this.loadSprite()
    }
    start() {

    }

    update(deltaTime: number) {

    }

    loadSprite() {
        this.testSprite.getComponent(UITransform).setContentSize(new Size(100, 100))
        this.testSprite.sizeMode = Sprite.SizeMode.CUSTOM
        resources.load('testSprite/touxiang/spriteFrame', SpriteFrame, (err, spriteFrame) => {
            this.testSprite.getComponent(Sprite).spriteFrame = spriteFrame
        })
    }
}

