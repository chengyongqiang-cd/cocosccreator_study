import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { Item } from './ItemList';
const { ccclass, property } = _decorator;

@ccclass('ItemTemplate')
export class ItemTemplate extends Component {

    @property
    public id = 0;
    @property(Sprite)
    public icon: Sprite | null = null;
    @property(Label)
    public itemName: Label | null = null;
    @property(Label)
    public itemPrice: Label | null = null;
    start() {

    }

    update(deltaTime: number) {

    }

    init(item: Item) {
        this.id = item.id
        this.icon.spriteFrame = item.iconSF
        this.itemName.string = item.itemName
        this.itemPrice.string = item.itemPrice.toString()
    }
}

