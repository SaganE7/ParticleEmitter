namespace SpriteKind {
    export const velocitymodeindicatorui = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (velocitymode == 0) {
        velocitymode = 1
        velocitymodeindicator = sprites.create(assets.image`velocitymode`, SpriteKind.velocitymodeindicatorui)
        velocitymodeindicator.setPosition(77, 109)
        vcrosshair = sprites.create(assets.image`crosshair2`, SpriteKind.Player)
        vcrosshair.setPosition(crosshair.x + 0, crosshair.y + 0)
    } else {
        pause(100)
        if (velocitymode == 1) {
            velocitymodeindicator.destroy()
            velocitymode = 0
            vcrosshair.destroy()
        }
    }
})
let projectile: Sprite = null
let vcrosshair: Sprite = null
let velocitymodeindicator: Sprite = null
let velocitymode = 0
let crosshair: Sprite = null
let randomcolor = 0
let projectilecolor = assets.image`myImage`
let picture = assets.image`background`
info.setScore(0)
crosshair = sprites.create(assets.image`crosshair`, SpriteKind.Player)
let VelocityIndicator = sprites.create(assets.image`velocity`, SpriteKind.Player)
VelocityIndicator.setPosition(125, 5)
game.onUpdate(function () {
    if (velocitymode == 0 && controller.up.isPressed()) {
        crosshair.y += -1
    } else {
        if (velocitymode == 1 && controller.up.isPressed()) {
            vcrosshair.y += -2
        }
    }
})
game.onUpdate(function () {
    if (velocitymode == 1 && controller.A.isPressed()) {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
        projectilecolor = assets.image`myImage`
        projectile = sprites.createProjectileFromSprite(projectilecolor, crosshair, vcrosshair.x - crosshair.x, vcrosshair.y - crosshair.y)
        projectile.setBounceOnWall(true)
        randomcolor += 1
    } else {
        if (velocitymode == 1) {
            picture.drawLine(vcrosshair.x, vcrosshair.y, crosshair.x, crosshair.y, 13)
        }
    }
})
game.onUpdate(function () {
    if (velocitymode == 0 && controller.down.isPressed()) {
        crosshair.y += 1
    } else {
        if (velocitymode == 1 && controller.down.isPressed()) {
            vcrosshair.y += 2
        }
    }
})
game.onUpdate(function () {
    if (velocitymode == 0 && controller.left.isPressed()) {
        crosshair.x += -1
    } else {
        if (velocitymode == 1 && controller.left.isPressed()) {
            vcrosshair.x += -2
        }
    }
})
game.onUpdate(function () {
    if (velocitymode == 0 && controller.right.isPressed()) {
        crosshair.x += 1
    } else {
        if (velocitymode == 1 && controller.right.isPressed()) {
            vcrosshair.x += 2
        }
    }
})
game.onUpdate(function () {
    if (velocitymode == 1) {
        info.setScore(Math.sqrt((vcrosshair.x - crosshair.x) ** 2 + (vcrosshair.y - crosshair.y) ** 2))
    }
})
forever(function () {
    if (randomcolor == 1) {
        projectilecolor.replace(2, 2)
    }
    if (randomcolor == 2) {
        projectilecolor.replace(2, 4)
    }
    if (randomcolor == 3) {
        projectilecolor.replace(2, 5)
    }
    if (randomcolor == 4) {
        projectilecolor.replace(2, 7)
    }
    if (randomcolor == 5) {
        projectilecolor.replace(2, 9)
    }
    if (randomcolor == 6) {
        projectilecolor.replace(2, 6)
    }
    if (randomcolor == 7) {
        projectilecolor.replace(2, 8)
    }
    if (randomcolor == 8) {
        projectilecolor.replace(2, 12)
    }
    if (randomcolor == 9) {
        projectilecolor.replace(2, 3)
    }
    if (randomcolor == 10) {
        randomcolor = 1
    }
})
forever(function () {
    scene.setBackgroundImage(picture)
})
forever(function () {
    if (velocitymode == 1) {
        picture.replace(13, 15)
    }
})
