import { _decorator, assert, AudioSource, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('testAudio')
export class testAudio extends Component {
    @property({ type: AudioSource })
    _audioSource: AudioSource = null!


    protected onLoad(): void {
        // 获取 AudioSource 组件
        const audioSource = this.node.getComponent(AudioSource)!;

        // 将组件赋到全局变量 _audioSource 中
        this._audioSource = audioSource;

        this._audioSource.node.on(AudioSource.EventType.STARTED, this.startAudio, this)
    }


    protected onDestroy(): void {
        this._audioSource.node.off(AudioSource.EventType.ENDED, this.endAudio, this)
    }
    start() {

    }

    update(deltaTime: number) {

    }
    //开始播放音乐
    play() {
        this._audioSource.play()
    }
    //暂停播放音乐
    pause() {
        this._audioSource.pause()
    }
    //监听开始播放音乐
    startAudio() {
        console.log('音乐开始播放了')
    }
    //监听暂停播放音乐
    endAudio() {
        console.log('音乐结束播放了')
    }
}

