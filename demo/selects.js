var selects = {
	//绑定数据
	bind : function(o,d) {
		o['_data'] = d;
		for (var i=0; i<d.length; i++) {
			if (!d[i].index && !d[i].value && !d[i].text) {
				this._addOption(o,d[i].data);
			};
		};
	},
	//确定父子关系
	parent : function(op,oc) {
		var t = this;
		change = function() {
			t._undisabled(oc);
			t._clearOption(oc);
			var d = oc['_data'];
			var idx = op.selectedIndex;
			var vle = op.options[idx].value;
			var txt = op.options[idx].text;
			var da = false;
			for (var i=0; i<d.length; i++) {
				if ((d[i].value == vle) || (d[i].text == txt) || (d[i].index == idx)) {
					t._addOption(oc,d[i].data);
					if (d[i].disabled == true) {
						da = true;
					};
				};
			};
			t._fireEvent(oc,'change');
			if ((da == true) && (navigator.userAgent.indexOf('Firefox') < 0)) {
				t._disabled(oc);
			};
		};
		t._addEvent(op,'change',change);
	},
	//设置默认值
	selected : function(o,d) {
		for (var i=0; i<o.options.length; i++) {
			if ((o.options[i].text == d.text) || (o.options[i].value == d.value) || (i == d.index)) {
				o.options[i].selected = true;
			};
		};
		this._fireEvent(o,'change');
	},
	//设置为不可选
	_disabled : function(o) {
		o.disabled = true;
	},
	//设置为可选
	_undisabled : function(o) {
		o.disabled = null;
	},
	//数据拆分
	_data : {
		value : function(d) {
			return d instanceof Array ? (typeof(d[0]) != "undefined" ? d[0] : d[1]) : (typeof(d.value) != "undefined" ? d.value : (typeof(d.text) != "undefined" ? d.text: d));
		},
		text : function(d) {
			return d instanceof Array ? (typeof(d[1]) != "undefined" ? d[1] : d[0]) : (typeof(d.text) != "undefined" ? d.text : (typeof(d.value) != "undefined" ? d.value: d));
		}
	},
	//添加
	_addOption : function(o,d) {
		if (d instanceof Array) {
			for (var i=0; i<d.length; i++) {
				o.options.add(new Option(this._data.text(d[i]),this._data.value(d[i])));
			}
		} else {
			o.options.add(new Option(this._data.text(d),this._data.value(d)));
		}
	},
	//删除索引选项
	_removeOption : function(o,i) {
		if (o.options.remove) {
			o.options.remove(i);
		} else {
			o.options[i] = null;
		}
	},
	//清空
	_clearOption : function(o) {
		o.options.length = 0 ;
	},
	//强制触发
	_fireEvent : function(o,n) {
		if (o.fireEvent) {
			o.fireEvent('on' + n);
		} else {
			var evt = document.createEvent('HTMLEvents');
			evt.initEvent(n,true,true);
			o.dispatchEvent(evt);
		}
	},
	//添加事件
	_addEvent : function(o, n, f) {
		if (o.attachEvent) {
			o.attachEvent('on' + n, f);
		} else if (o.addEventListener) {
			o.addEventListener(n, f, false);
		} else {
			o['on' + n] = f;
		}
	},
	//删除事件
	_removeEvent : function(o, n, f) {
		if (o.detachEvent) {
			o.detachEvent('on' + n, f);
		} else if (o.removeEventListener) {
			o.removeEventListener(n, f, false);
		} else {
			o['on' + n] = null;
		}
	},
	//版权
	version : {
		author : 'Perry Yeh',
		contact : 'http://www.yeeh.org/',
		major : '1',
		minor : '0.4',
		revision : 'rc',
		release : '2008-09-24',
		get : function() {
			with(this) {
				return major + '.' + minor + '.' + revision;
			};
		}
	}
};