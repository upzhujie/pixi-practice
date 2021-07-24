
import * as utils from './utils/test.js'


const App = new PIXI.Application({
  width: 800,
  height: 400
})
document.body.appendChild(App.view)


App.renderer.autoResize = true
App.renderer.view.style.position = 'absolute'
App.renderer.view.style.display = 'block'
App.renderer.resize(window.innerWidth, window.innerHeight)

PIXI.loader.add('images/cat.jpg').add({
  name: 'tm',
  url: 'https://teamind-static-oss.teamind.co/meeting/home/logo.svg',
  onComplete: () => {console.log('loaded - ', PIXI.loader.resources)}
}).on("progress", (loader, resource) => {
  console.log('loader resource - ', loader, resource)
}).load(() => {

  const catImg = PIXI.loader.resources['images/cat.jpg'].texture

  const sprite = new PIXI.Sprite(catImg)
  sprite.x = 200
  sprite.y = 200
  sprite.width = 100
  sprite.height = 5
  App.stage.addChild(sprite)
  
  setTimeout(() => {
    // sprite.position.set(100, 105)
    // sprite.archor
    sprite.anchor.set(0.5, 0.5)
    // sprite.pivot.set(100, 5)
    sprite.rotation = Math.PI / 4
    // sprite.scale.set(.5,.5)
  }, 600)


  const line = new PIXI.Graphics();
  console.log(line, line.quadraticCurveTo)

})

// PIXI.loader.add({
//   name: 'google',
//   url: 'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg',
//   onComplete: () => {console.log('loaded - ', PIXI.loader.resources)}
// })