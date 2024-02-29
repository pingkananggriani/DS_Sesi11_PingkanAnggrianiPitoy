const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class homePage extends Page {
    get iconCart () { return $('.shopping_cart_link'); }
    get iconDogImage () { return $('#item_4_img_link'); }
    get addCartBackpack(){ return $('#add-to-cart-sauce-labs-backpack')}
    get iconCart1(){ return $('.shopping_cart_badge')}
    get removeBackpack (){ return $('#remove-sauce-labs-backpack')}
    get failurecart (){ return $('.shopping_cart_container visual_failure')}
    get wrongimg () { return $('.inventory_item_img')}

    async validatehomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(this.iconCart).toBeDisplayed()
    }

    async validatehomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(this.iconCart).toBeDisplayed()
    }

    async validatehomePageProblemUser() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(this.iconDogImage).toBeDisplayed() 
    }

    async validatehomePageGlitch(){
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await this.iconCart.waitForDisplayed({ timeout: 6000 });
    }

    async validatehomePageError(){
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await this.addCartBackpack.click() //add bacpack
        await expect(this.iconCart1).toBeDisplayed() //cart +1
        await this.removeBackpack.click() //remove backpack
        expect(this.removeBackpack).toBeNull
    }

    async validatehomePageVisual(){
        await expect(browser).toHaveUrlContaining('/inventory.html')
        expect(this.failurecart).toBeDisplayed()
        expect(this.wrongimg).toBeDisplayed()
    }

    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new homePage();