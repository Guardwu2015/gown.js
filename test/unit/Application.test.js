/**
 * test Application
 */

describe("test Application", function() {
    beforeEach(function(){
        // cleanup - make sure global theme is not set
        PIXI_UI.Theme.removeTheme();
        new PIXI_UI.TestTheme();
    });

    it("create and remove Application instance", function() {
        var app = new PIXI_UI.Application(0xff0000);
        app.dispose();
        app = null;
    });
    it("test application fullscreen works", function() {
        var app = new PIXI_UI.Application(0xffffff, true);

        // TODO: resize!
        expect(app.width).equals(window.innerWidth);
        expect(app.height).equals(window.innerHeight);
        expect(app.fullscreen).equals(true);
        app.fullscreen = false;
        expect(app.fullscreen).equals(false);

        app.dispose();
        app = null;
    });
});