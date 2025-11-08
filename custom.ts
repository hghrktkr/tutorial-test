
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two,
    //% block="three"
    Three
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="☯"
namespace カスタム {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }

    /**
     * square
     * @param num: number
     */
    //% block
    export function test(num: number): number {
        return num * num;
    }
}
