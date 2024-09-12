import { $ } from '@wdio/globals'

class HomenPage {
    async openMenu(menu){
        await $(`id:tab-${menu}`).click()
    }
}

export default new HomenPage();
