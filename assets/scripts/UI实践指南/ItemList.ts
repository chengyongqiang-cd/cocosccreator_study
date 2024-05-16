import { _decorator, Component, Node, SpriteFrame, Prefab, instantiate, UITransform } from 'cc';
import { ItemTemplate } from './ItemTemplate';
const { ccclass, property } = _decorator;

@ccclass('Item')
export class Item {
    @property
    id = 0;
    @property
    itemName = '';
    @property
    itemPrice = 0;
    @property(SpriteFrame)
    iconSF: SpriteFrame | null = null;
}

@ccclass('ItemList')
export class ItemList extends Component {
    @property([Item])
    items: Item[] = [];
    @property(Prefab)
    itemPrefab: Prefab | null = null;

    protected onLoad(): void {
        //预制体加载具体数据
        for (let i = 0; i < this.items.length; i++) {
            const item = instantiate(this.itemPrefab)
            item.getComponent(UITransform).setContentSize(100, 100)
            const data = this.items[i]
            this.node.addChild(item)
            item.getComponent(ItemTemplate).init(data)
        }
    }
    start() {

    }

    update(deltaTime: number) {

    }
}

