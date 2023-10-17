
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

/**
 * camerahacking
 */
//% weight=100 color=#808080 icon="●"
namespace camerahacking {
    /**
     * TODO: カメラをハッキングしジャミングする
     */
    //% block
    export function CameraHack(ip: any) {
        player.say(">>カメラジャミング開始.")
        loops.pause(1000)
        player.say(">>カメラジャミング開始..")
        loops.pause(1000)
        player.say(">>カメラジャミング開始...")
        if (ip == "192.168.0.1") {
            blocks.place(AIR, world(-7, -15, 2))
            player.say(">>Lv1カメラジャミング完了")
        } else if (ip == "192.168.10.19") {
            blocks.place(AIR, world(-10, -15, 2))
            player.say(">>Lv2カメラジャミング完了")
        }else{
            player.say(">>カメラのジャミングに失敗しました")
        }
    }
}
