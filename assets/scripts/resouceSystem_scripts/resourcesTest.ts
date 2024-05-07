import { _decorator, Component, Node, resources, Sprite, SpriteFrame, UITransform, Size, JsonAsset, Label, error, TextAsset } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('resourcesTest')
export class resourcesTest extends Component {
    @property({ type: Sprite })
    testSprite: Sprite = null!
    @property({ type: JsonAsset })
    testJson: JsonAsset = null!
    @property({ type: Label })
    testLabel: Label = null!
    @property({ type: TextAsset })
    testText: TextAsset = null!
    @property({ type: Label })
    testTextLabel: Label = null!

    protected onLoad(): void {
        this.loadSprite()
        this.loadJson()
        this.loadText()
    }
    start() {

    }

    update(deltaTime: number) {
        this.testSprite.node.setPosition(0, 40 * deltaTime, 0)
    }

    //加载精灵图片
    loadSprite() {
        this.testSprite.getComponent(UITransform).setContentSize(new Size(100, 100))
        this.testSprite.sizeMode = Sprite.SizeMode.CUSTOM
        resources.load('testSprite/touxiang/spriteFrame', SpriteFrame, (err, spriteFrame) => {
            this.testSprite.getComponent(Sprite).spriteFrame = spriteFrame
        })
    }
    //加载json数据 0 通过组建绑定获取 1通过代码动态获取
    async loadJson() {
        let json_01_age
        //0
        const jsonData: object = this.testJson.json
        console.log(jsonData)
        this.testLabel.string = jsonData['age'] + json_01_age

        //1
        await resources.load('testJson/test_01', JsonAsset, (err, jsonAsset) => {
            if (err) {
                error(err.message)
                return
            }
            const jsonData_01: object = jsonAsset.json
            console.log(jsonData_01)
            json_01_age = jsonData_01['age']
        })
    }
    //加载text数据 0 通过组建绑定获取 1通过代码动态获取
    async loadText() {
        let a
        //0
        const text: string = this.testText.text
        this.testTextLabel.string = text + a

        //1
        await resources.load('testText/test_text_02', TextAsset, (err, textAsset) => {
            if (err) {
                error(err.message)
                return
            }
            const text = textAsset.text
            a = text
        })
    }
}

