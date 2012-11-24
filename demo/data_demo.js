var b1 = [
	{
		//以下三个为索引类型，若无索引，则作为无选择时默认数据
		//index : 0,
		//value : "",
		//text : "",
		//disabled : true;
		//以下为数据
		data : [
			["","请选择省/直辖市"],
			["北京","北京"],
			"上海",
			{value : "江苏省", text : "江苏省"}
		]
	}
];

var b2 = [
	{
		value : "",
		disabled : true,
		data : [
			["","请选择市"]
		]
	},
	{
		value : "上海",
		data : [
			"上海市"
		]
	},
	{
		index : 1,
		data : [
			"北京市"
		]
	},
	{
		text : "江苏省",
		data : [
			["","请选择市"],
			"苏州",
			{value:"泰州"},
			{text:"南京"}
		]
	}
];

var b3 = [
	{
		value : "",
		disabled : true,
		data : [
			["","请选择区"]
		]
	},
	{
		value : "上海市",
		data : [
			["","请选择上海区"],
			"闸北",
			"虹口",
			"浦东"
		]
	},
	{
		value : "北京市",
		data : [
			["","请选择北京区"],
			"海淀",
			"昌平",
			"上地"
		]
	},
	{
		value : "苏州",
		data : [
			["","请选择苏州区"],
			"平江",
			"新区",
			"工业园"
		]
	},
	{
		value : "泰州",
		data : [
			["","请选择泰州区"],
			"高港",
			"海陵",
			"泰兴"
		]
	},
	{
		value : "南京",
		data : [
			["","请选择南京区"],
			"栖霞",
			"玄武",
			"白下"
		]
	}
];

var b4 = [
	{
		value : "",
		disabled : true,
		data : [
			["","请选择街道"]
		]
	},
	{
		value : "闸北",
		data : [
			["","请选择街道"],
			"大宁",
			"彭浦",
			"新客站"
		]
	},
	{
		value : "虹口",
		data : [
			["","请选择街道"],
			"提篮桥",
			"周家嘴",
			"大连路"
		]
	},
	{
		value : "浦东",
		data : [
			["","请选择街道"],
			"陆家嘴",
			"川沙",
			"张江"
		]
	},
	{
		value : "工业园",
		data : [
			["","请选择街道"],
			"金鸡湖",
			"胜浦",
			"东环"
		]
	},
	{
		value : "平江",
		data : [
			["","请选择街道"],
			"观前街",
			"拙政园",
			"北寺塔"
		]
	},
	{
		text : "栖霞",
		data : [
			["","请选择街道"],
			"栖霞1",
			"栖霞2",
			"栖霞3"
		]
	},
	{
		text : "海淀",
		data : [
			["","请选择街道"],
			"中关村1",
			"联想桥2",
			"亚运村3"
		]
	}
];

var c = [
	{
		value : "",
		data : [
			["","一拖二测试"]
		]
	},
	{
		value : "上海",
		data : [
			["02100","上海市其他"]
		]
	},
	{
		value : "北京",
		data : [
			["01000","北京市其他"]
		]
	},
	{
		value : "江苏省",
		data : [
			["02500","江苏省其他"],
			["02501","苏州其他"],
			["02502","泰州其他"],
			["02503","南京其他"]
		]
	}
];