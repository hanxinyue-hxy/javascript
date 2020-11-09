var imgSrc = '';

document.addEventListener('click',function(e){
	var tar = e.target;
	if(tar.classList.contains('hp')){//判断点击的元素是否为头像
		var ele = box.querySelector('.col');//获取box中有col类的图片
		if(ele){//判断有没有获取到元素
			ele.classList.remove('col'); //删除该元素上的col类
		}
		tar.classList.add('col'); // 给点击的头像添加col类 
		imgSrc = tar.src;//获取点击图片的路径
	}else if(tar.id === 'btn'){ //判断点击的是否为发布按钮
		if(user.value && content.value && imgSrc){ //判断用户 内容 头像是否有内容和选中
			//往下面大盒子中拼接新内容
			cenBox.innerHTML += `<div> 
									<img src = ${imgSrc}>
									<span>${user.value}:${content.value}</span>
									<span>${new Date().toLocaleString()}</span>
									<b>删除</b>
								 </div>`;
			clear(); //调用清空方法
		}else{
			alert('请完善信息');
		}

	}else if(tar.tagName === 'B'){ //判断点击的是否为b标签
		cenBox.removeChild(tar.parentNode); //从b爷爷中删除b的爸爸
	}
})

//给文本域绑定input事件
content.addEventListener('input',function(){
	num.innerHTML = 150 - this.value.length;
})

//封装清空方法
function clear(){
	user.value = '';
	content.value = '';
	imgSrc = '';
	num.innerHTML = 150;
	var ele = box.querySelector('.col');
	ele.classList.remove('col');
}






