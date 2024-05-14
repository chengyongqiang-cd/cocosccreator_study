import { _decorator, assetManager, Component, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('testLoadSp')
export class testLoadSp extends Component {
    @property({ type: Sprite })
    testloadSp: Sprite = null!

    protected onLoad(): void {
        let url = 'https://ginkgo-game.oss-cn-chengdu.aliyuncs.com/%E6%B5%8B%E8%AF%95%E5%9B%BE%E7%89%87%E6%96%87%E4%BB%B6%E5%A4%B9/WechatIMG115.jpg'
        assetManager.loadRemote(url, (err, texture) => {
            if (err) {
                console.error(err.message)
            }
            console.log(texture)
        })
    }
    start() {

    }

    update(deltaTime: number) {

    }
}

