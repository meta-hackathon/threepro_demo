Page({
	onLoad() {
		var models = [
			{url:"https://onekit.cn/examples/models/gltf/Soldier.glb",animation:0,scale:1,position:{x:2,y:1,z:0},rotation:{x:0,y:Math.PI,z:0}},
			{url:"https://onekit.cn/examples/models/gltf/Soldier.glb",animation:1,scale:1,position:{x:0,y:1,z:0},rotation:{x:0,y:Math.PI,z:0}},
			{url:"https://onekit.cn/examples/models/gltf/Soldier.glb",animation:3,scale:1,position:{x:-2,y:1,z:0},rotation:{x:0,y:Math.PI,z:0}}
		]
		var bg = "https://onekit.cn/examples/ar/bg.gif"
		var hdr = `https://onekit.cn/examples/ar/sky_box.hdr`
		this.setData({
			hdr,
			bg,
			models
		})
  }
})
