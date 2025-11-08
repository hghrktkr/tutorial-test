# チュートリアルテスト

```template
player.onChat("run", function () {
    player.teleport(pos(0, 0, 0))
})
```

## Step 1 テスト

テストです。
文言追加

<img style="display: block; margin: auto;" height="50%" width="50%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme3/Lesson8/L8_complete1.gif">


```blocks
player.onChat("run", function (num1, num2, num3) {
    player.teleport(pos(0, 0, 0))
    player.say(カスタム.test(2))
})
```