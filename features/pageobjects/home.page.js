const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const element = {
    iconCart: $('.shopping_cart_link'),
    iconDogImage: $('#item_4_img_link'),
    addCartBackpack: $('#add-to-cart-sauce-labs-backpack'),
    addCartLight: $('#add-ro-cart-sauce-labs-bike-light'),
    iconCart1: $('.shopping_cart_badge'),
    removeBackpack: $('#remove-sauce-labs-backpack'),
    failurecart: $('.shopping_cart_container visual_failure'),
    wrongimg: $('.inventory_item_img')
}

class homePage extends Page {
    async validatehomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(element.iconCart).toBeDisplayed()
    }

    async validatehomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(element.iconCart).toBeDisplayed()
    }

    async validatehomePageProblemUser() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(element.iconDogImage).toBeDisplayed() 
    }

    async validatehomePageGlitch(){
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await element.iconCart.waitForDisplayed({ timeout: 6000 });
    }

    async validatehomePageError(){
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await element.addCartBackpack.click() //add bacpack
        await expect(element.iconCart1).toBeDisplayed() //cart +1
        await element.removeBackpack.click() //remove backpack
        expect(element.removeBackpack).toBeNull
    }

    async validatehomePageVisual(){
        await expect(browser).toHaveUrlContaining('/inventory.html')
        expect(element.failurecart).toBeDisplayed()
        expect(element.wrongimg).toBeDisplayed()
    }

    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new homePage();