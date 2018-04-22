var oDiv  =document.getElementById("div1");
var oUl = document.getElementById("list");
oDiv.ondragover = function (ev) {
	var ev = ev||window.ev;
	oDiv.innerHTML = "可以释放鼠标了";
	ev.preventDefault();
}
oDiv.ondragleave = function () {
	oDiv.innerHTML = "拖拽文件到此区域";
}
oDiv.ondrop = function (ev) {
	var ev = ev||window.ev;
	ev.preventDefault();
	var fs = ev.dataTransfer.files; //获取拖拽过来的文件集合
	// 遍历获取到的拖拽过来的文件集合
	for(var i=0;i<fs.length;i++){
		// 判断文件类型，如果文件类型是图片
		if(fs[i].type.indexOf("image")!=-1){
			var fd = new FileReader(); //文件读取对象
			fd.readAsDataURL(fs[i]);
			fd.onload = function () {
				var oLi = document.createElement("li");
				var oImg = document.createElement("img");
				oImg.src = this.result; //图片数据
				oLi.appendChild(oImg);
				oUl.appendChild(oLi);
			}
		}
		else {
			alert("请上传图片类型的文件！");
		}
	}
}