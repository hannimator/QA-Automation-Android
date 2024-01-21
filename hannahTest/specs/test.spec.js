const { expect, browser, $ } = require('@wdio/globals')

describe("the apps main screen", function () {
    it("should increment value twice until MAX is displayed", async function() {
      const buttonSelector = 'new UiSelector().resourceId("tag_button")'
      const button = await $(`android=${buttonSelector}`)
      const labelSelector = 'new UiSelector().resourceId("tag_label")'
      const label =  await $(`android=${labelSelector}`)
      await button.click();
      await expect(label).toHaveText('1');
      await button.click();
      await expect(label).toHaveText('2');
      await button.click();
      await expect(label).toHaveText('MAX');
    })
  })

