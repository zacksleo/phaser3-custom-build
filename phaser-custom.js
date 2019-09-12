require('polyfills');

var CONST = require('const');
var Extend = require('utils/object/Extend');

var Phaser = {
    Cache: require('cache'),
    Cameras: { Scene2D: require('cameras/2d') },
    Core: require('core'),
    Class: require('utils/Class'),
    Display: { Masks: require('display/mask') },
    Events: require('events/EventEmitter'),
    Game: require('core/Game'),
    GameObjects: {
        GameObject: require('gameobjects/GameObject'),
        Graphics: require('gameobjects/graphics/Graphics.js'),
        Image: require('gameobjects/image/Image'),
        Sprite: require('gameobjects/sprite/Sprite'),
        Text: require('gameobjects/text/static/Text'),
    },
    Input: require('input'),
    Loader: {
        FileTypes: {
            AudioFile: require('loader/filetypes/AudioFile'),
            ImageFile: require('loader/filetypes/ImageFile'),
        }
    },
    Plugins: require('plugins'),
    Renderer: require('renderer'),
    Scale: require('scale'),
    Scene: require('scene/Scene'),
    Scenes: require('scene'),
    Sound: require('sound'),
    Structs: require('structs'),
    Tweens: require('tweens')
};

//  Merge in the consts

Phaser = Extend(false, Phaser, CONST);

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;
