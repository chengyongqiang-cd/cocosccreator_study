import { _decorator, assetManager, Component, Node, Prefab, resources } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('testLoadRes')
export class testLoadRes extends Component {
    start() {

    }

    update(deltaTime: number) {

    }

    //释放资源
    releaseRes() {
        resources.load('prefabs/itemNode', Prefab, (err, asset) => {
            asset.addRef()
            asset.decRef()
            assetManager.releaseAsset(asset)
        })
    }
}

