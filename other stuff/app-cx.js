! function(e) {
	var t = {};

	function a(r) {
		if (t[r]) return t[r].exports;
		var n = t[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(n.exports, n, n.exports, a), n.l = !0, n.exports
	}
	a.m = e, a.c = t, a.d = function(e, t, r) {
		a.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: r
		})
	}, a.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, a.t = function(e, t) {
		if (1 & t && (e = a(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var r = Object.create(null);
		if (a.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var n in e) a.d(r, n, function(t) {
				return e[t]
			}.bind(null, n));
		return r
	}, a.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return a.d(t, "a", t), t
	}, a.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, a.p = "", a(a.s = 5)
}([function(e, t, a) {
	"use strict";
	window.Arras = e.exports = {
		KEY_ESC: 27,
		KEY_ENTER: 13,
		KEY_CHAT: 13,
		KEY_FIREFOOD: 119,
		KEY_SPLIT: 32,
		KEY_LEFT: 65,
		KEY_UP: 87,
		KEY_RIGHT: 68,
		KEY_DOWN: 83,
		KEY_LEFT_ARROW: 37,
		KEY_UP_ARROW: 38,
		KEY_RIGHT_ARROW: 39,
		KEY_DOWN_ARROW: 40,
		KEY_AUTO_SPIN: 67,
		KEY_AUTO_FIRE: 69,
		KEY_OVER_RIDE: 82,
		KEY_REVERSE_MOUSE: 66,
		KEY_REVERSE_TANK: 86,
		KEY_RECORD: 90,
		KEY_UPGRADE_ATK: 49,
		KEY_UPGRADE_HTL: 50,
		KEY_UPGRADE_SPD: 51,
		KEY_UPGRADE_STR: 52,
		KEY_UPGRADE_PEN: 53,
		KEY_UPGRADE_DAM: 54,
		KEY_UPGRADE_RLD: 55,
		KEY_UPGRADE_MOB: 56,
		KEY_UPGRADE_RGN: 57,
		KEY_UPGRADE_SHI: 48,
		KEY_MOUSE_0: 32,
		KEY_MOUSE_1: 86,
		KEY_MOUSE_2: 16,
		KEY_CHOOSE_1: 89,
		KEY_CHOOSE_2: 85,
		KEY_CHOOSE_3: 73,
		KEY_CHOOSE_4: 72,
		KEY_CHOOSE_5: 74,
		KEY_CHOOSE_6: 75,
		KEY_LEVEL_UP: 78,
		KEY_FUCK_YOU: 192,
		KEY_KILL_YOURSELF: 79,
		KEY_UPGRADE_MAX: 77,
		KEY_PING: 76,
		screenWidth: window.innerWidth,
		screenHeight: window.innerHeight,
		gameWidth: 0,
		gameHeight: 0,
		xoffset: -0,
		yoffset: -0,
		gameStart: !1,
		disconnected: !1,
		died: !1,
		kicked: !1,
		continuity: !1,
		startPingTime: 0,
		toggleMassState: 0,
		backgroundColor: "#f2fbff",
		lineColor: "#000000",
		showDebug: !1,
		server: null,
		servers: [{
			id: "a",
			name: "US East FFA",
			visible: 2,
			location: "os-virginia",
			type: "ffa",
			at: "a-cx8128.1d35.starter-us-east-1.openshiftapps.com"
		}, {
			id: "b",
			name: "US East Mothership",
			visible: 2,
			location: "os-virginia",
			type: "2mot",
			at: "b-cx8128.1d35.starter-us-east-1.openshiftapps.com"
		}, {
			id: "c",
			name: "US East Staging",
			visible: 1,
			location: "glitch-virginia",
			type: "dom",
			at: "arras-node-c.glitch.me"
		}, {
			id: "f",
			name: "Europe 2TDM",
			visible: 2,
			location: "linode-frankfurt",
			type: "2tdm",
			at: "139.162.177.148:5000"
		}, {
			id: "x",
			name: "Localhost",
			visible: 0,
			location: "local-x",
			type: "dom",
			at: "localhost:8080"
		}],
		mobile: /android|mobi/i.test(navigator.userAgent)
	}
}, function(e, t, a) {
	"use strict";
	var r, n, i, o, s, l, c, d;
	t.encode = (r = new Uint8Array(1), n = new Uint16Array(1), i = new Uint8Array(n.buffer), o = new Uint32Array(1), s = new Uint8Array(o.buffer), l = new Float32Array(1), c = new Uint8Array(l.buffer), d = ((e, t) => {
		let a = "";
		switch (e) {
			case "RawUint8":
				return r[0] = t, String.fromCharCode(r[0]);
			case "RawUint16":
				return n[0] = t, String.fromCharCode(i[0], i[1]);
			case "Uint8":
				return r[0] = t, "0" + String.fromCharCode(r[0]);
			case "Uint16":
				return n[0] = t, "1" + String.fromCharCode(i[0], i[1]);
			case "Uint32":
				return o[0] = t, "2" + String.fromCharCode(s[0], s[1], s[2], s[3]);
			case "Sint8":
				return r[0] = -1 - t, "3" + String.fromCharCode(r[0]);
			case "Sint16":
				return n[0] = -1 - t, "4" + String.fromCharCode(i[0], i[1]);
			case "Sint32":
				return o[0] = -1 - t, "5" + String.fromCharCode(s[0], s[1], s[2], s[3]);
			case "Float32":
				return l[0] = t, "6" + String.fromCharCode(c[0], c[1], c[2], c[3]);
			case "String8":
				return "7" + d("RawUint16", t.length) + t;
			case "String16":
				for (let e = 0, r = t.length; e < r; e++) a += d("RawUint16", t.charCodeAt(e));
				return "8" + d("RawUint16", a.length) + a;
			default:
				throw new Error("Unknown encoding type.")
		}
	}), (e, t = !1) => {
		let a = e.splice(0, 1)[0];
		if ("string" != typeof a) throw new Error("No identification code!");
		e.forEach(e => {
			a += d((e => {
				if ("string" == typeof e) {
					for (var t = 0; t < e.length; t++)
						if (e.charCodeAt(t) > 255) return "String16";
					return "String8"
				}
				if ("boolean" == typeof e) return "Uint8";
				if ("number" != typeof e) throw new Error("Unencodable data type");
				if (e !== Math.floor(e)) return "Float32";
				if (e < 0) {
					if (e >= -256) return "Sint8";
					if (e >= -65535) return "Sint16";
					if (e >= -4294967295) return "Sint32"
				} else {
					if (e < 256) return "Uint8";
					if (e < 65535) return "Uint16";
					if (e < 4294967295) return "Uint32"
				}
				return "Float32"
			})(e), e)
		});
		let r = a.length,
			n = new ArrayBuffer(r),
			i = new Uint8Array(n);
		for (let e = 0; e < r; e++) i[e] = a.charCodeAt(e);
		return t && (console.log("OUTPUT: " + i), console.log("RAW OUTPUT: " + a), console.log("SIZE: " + r)), n
	}), t.decode = (() => {
		var e = new Uint16Array(1),
			t = new Uint8Array(e.buffer),
			a = new Uint32Array(1),
			r = new Uint8Array(a.buffer),
			n = new Float32Array(1),
			i = new Uint8Array(n.buffer),
			o = (o, s, l) => {
				switch (s) {
					case "Uint8":
						return o.charCodeAt(l++);
					case "Uint16":
						for (let e = 0; e < 2; e++) t[e] = o.charCodeAt(l++);
						return e[0];
					case "Uint32":
						for (let e = 0; e < 4; e++) r[e] = o.charCodeAt(l++);
						return a[0];
					case "Sint8":
						return -1 - o.charCodeAt(l++);
					case "Sint16":
						for (let e = 0; e < 2; e++) t[e] = o.charCodeAt(l++);
						return -1 - e[0];
					case "Sint32":
						for (let e = 0; e < 4; e++) r[e] = o.charCodeAt(l++);
						return -1 - a[0];
					case "Float32":
						for (let e = 0; e < 4; e++) i[e] = o.charCodeAt(l++);
						return n[0];
					default:
						throw new Error("Unknown decoding type.")
				}
			};
		return e => {
			try {
				let t = new Uint8Array(e),
					a = "";
				for (let e = 0, r = t.length; e < r; e++) a += String.fromCharCode(t[e]);
				let r = 1,
					n = [a.charAt(0)];
				for (; r < a.length;) switch (a[r++]) {
					case "0":
						n.push(o(a, "Uint8", r)), r++;
						break;
					case "1":
						n.push(o(a, "Uint16", r)), r += 2;
						break;
					case "2":
						n.push(o(a, "Uint32", r)), r += 4;
						break;
					case "3":
						n.push(o(a, "Sint8", r)), r++;
						break;
					case "4":
						n.push(o(a, "Sint16", r)), r += 2;
						break;
					case "5":
						n.push(o(a, "Sint32", r)), r += 4;
						break;
					case "6":
						n.push(o(a, "Float32", r)), r += 4;
						break;
					case "7":
						{
							let e = o(a, "Uint16", r);r += 2,
							n.push(a.slice(r, r + e)),
							r += e
						}
						break;
					case "8":
						{
							let e = o(a, "Uint16", r);r += 2;
							let t = a.slice(r, r + e),
								i = new Uint16Array(e / 2);
							for (let a = 0; a < e; a += 2) i[a / 2] = o(t, "Uint16", a);n.push(String.fromCharCode.apply(null, i)),
							r += e
						}
						break;
					default:
						throw r = a.length, new Error("Unknown decoding command. Decoding exited.")
				}
				return n
			} catch (e) {
				return console.log(e), -1
			}
		}
	})()
}, function(e, t, a) {
	let r = a(0);
	e.exports = class {
		constructor(e) {
			this.directionLock = !1, this.target = r.target, this.reenviar = !0, this.socket = r.socket, this.directions = [], this.statMaxing = !1;
			let t = document.getElementById("gameCanvas");
			if (t.width = r.screenWidth, t.height = r.screenHeight, r.mobile) {
				t.controlTouch = null, t.movementTouch = null, t.movementTop = !1, t.movementBottom = !1, t.movementLeft = !1, t.movementRight = !1, t.addEventListener("touchstart", this.touchStart, !1), t.addEventListener("touchmove", this.touchMove, !1), t.addEventListener("touchend", this.touchEnd, !1), t.addEventListener("touchcancel", this.touchEnd, !1);
				let e = 60,
					a = setInterval(() => {
						this.socket && (this.socket.talk("L"), --e <= 0 && clearInterval(a))
					}, 100);
				document.body.className += " mobile"
			} else t.addEventListener("keydown", this.keyboardDown, !1), t.addEventListener("keyup", this.keyboardUp, !1), t.addEventListener("mousedown", this.mouseDown, !1), t.addEventListener("mousemove", this.mouseMove, !1), t.addEventListener("mouseup", this.mouseUp, !1);
			t.parent = this, this.cv = t, r.canvas = this
		}
		emit(e) {
			this.socket && this.socket.talk(e)
		}
		talk(e, t) {
			this.socket && this.socket.talk(e, t)
		}
		spawn(e) {
			this.socket && this.socket.talk("s", e, -1)
		}
		set(e, t) {
			this.socket && this.socket.cmd.set(e, t)
		}
		keyboardDown(e) {
			switch (e.keyCode) {
				case 13:
					r.died && r.diedOn + 3e3 - Date.now() <= 0 && (this.parent.spawn(r.playerName), r.died = !1);
					break;
				case r.KEY_UP_ARROW:
				case r.KEY_UP:
					this.parent.set(0, !0);
					break;
				case r.KEY_DOWN_ARROW:
				case r.KEY_DOWN:
					this.parent.set(1, !0);
					break;
				case r.KEY_LEFT_ARROW:
				case r.KEY_LEFT:
					this.parent.set(2, !0);
					break;
				case r.KEY_RIGHT_ARROW:
				case r.KEY_RIGHT:
					this.parent.set(3, !0);
					break;
				case r.KEY_MOUSE_0:
					this.parent.set(4, !0);
					break;
				case r.KEY_MOUSE_1:
					this.parent.set(5, !0);
					break;
				case r.KEY_MOUSE_2:
					this.parent.set(6, !0);
					break;
				case r.KEY_LEVEL_UP:
					this.parent.emit("L")
			}
			if (r.canSkill) {
				let t = this.statMaxing ? 12 : 1;
				do {
					switch (e.keyCode) {
						case r.KEY_UPGRADE_ATK:
							this.parent.talk("x", 0);
							break;
						case r.KEY_UPGRADE_HTL:
							this.parent.talk("x", 1);
							break;
						case r.KEY_UPGRADE_SPD:
							this.parent.talk("x", 2);
							break;
						case r.KEY_UPGRADE_STR:
							this.parent.talk("x", 3);
							break;
						case r.KEY_UPGRADE_PEN:
							this.parent.talk("x", 4);
							break;
						case r.KEY_UPGRADE_DAM:
							this.parent.talk("x", 5);
							break;
						case r.KEY_UPGRADE_RLD:
							this.parent.talk("x", 6);
							break;
						case r.KEY_UPGRADE_MOB:
							this.parent.talk("x", 7);
							break;
						case r.KEY_UPGRADE_RGN:
							this.parent.talk("x", 8);
							break;
						case r.KEY_UPGRADE_SHI:
							this.parent.talk("x", 9)
					}
				} while (--t)
			}
			if (!e.repeat) {
				switch (e.keyCode) {
					case r.KEY_AUTO_SPIN:
						this.parent.talk("t", 0);
						break;
					case r.KEY_AUTO_FIRE:
						this.parent.talk("t", 1);
						break;
					case r.KEY_OVER_RIDE:
						this.parent.talk("t", 2);
						break;
					case r.KEY_REVERSE_MOUSE:
						this.parent.talk("t", 3);
						break;
					case r.KEY_REVERSE_TANK:
						this.parent.talk("t", 4);
						break;
					case r.KEY_UPGRADE_MAX:
						this.statMaxing = !0;
						break;
					case r.KEY_FUCK_YOU:
						this.parent.emit("0");
						break;
					case r.KEY_KILL_YOURSELF:
						this.parent.emit("K");
						break;
					case r.KEY_PING:
						r.showDebug = !0;
						break;
					case r.KEY_RECORD:
						if (this.captureStream && window.MediaRecorder) {
							if (!this.videoRecorder) {
								let e = [];
								this.videoRecorder = new MediaRecorder(this.captureStream(60)), this.videoRecorder.ondataavailable = (t => e.push(t.data)), this.videoRecorder.onstop = (t => {
									let a = new Blob(e, {
										type: "video/webm"
									});
									e.length = 0;
									let r = URL.createObjectURL(a),
										n = document.createElement("a");
									n.style.display = "none", n.setAttribute("download", "video.webm"), n.setAttribute("href", r), document.body.appendChild(n), setTimeout(() => {
										URL.revokeObjectURL(r), document.body.removeChild(n)
									}, 100), n.click()
								}), r.messages.push({
									text: "Recorder initiated and started!",
									status: 2,
									alpha: 0,
									time: Date.now()
								}), this.videoRecorder.start();
								break
							}
							switch (this.videoRecorder.state) {
								case "inactive":
									r.messages.push({
										text: "Recorder started!",
										status: 2,
										alpha: 0,
										time: Date.now()
									}), this.videoRecorder.start();
									break;
								case "recording":
									r.messages.push({
										text: "Recorder stopped! Saving file...",
										status: 2,
										alpha: 0,
										time: Date.now()
									}), this.videoRecorder.stop()
							}
						} else r.messages.push({
							text: "Media recorder not supported in this browser!",
							status: 2,
							alpha: 0,
							time: Date.now()
						})
				}
				if (r.canUpgrade) switch (e.keyCode) {
					case r.KEY_CHOOSE_1:
						this.parent.talk("U", 0);
						break;
					case r.KEY_CHOOSE_2:
						this.parent.talk("U", 1);
						break;
					case r.KEY_CHOOSE_3:
						this.parent.talk("U", 2);
						break;
					case r.KEY_CHOOSE_4:
						this.parent.talk("U", 3);
						break;
					case r.KEY_CHOOSE_5:
						this.parent.talk("U", 4);
						break;
					case r.KEY_CHOOSE_6:
						this.parent.talk("U", 5)
				}
			}
		}
		keyboardUp(e) {
			switch (e.keyCode) {
				case r.KEY_UP_ARROW:
				case r.KEY_UP:
					this.parent.set(0, !1);
					break;
				case r.KEY_DOWN_ARROW:
				case r.KEY_DOWN:
					this.parent.set(1, !1);
					break;
				case r.KEY_LEFT_ARROW:
				case r.KEY_LEFT:
					this.parent.set(2, !1);
					break;
				case r.KEY_RIGHT_ARROW:
				case r.KEY_RIGHT:
					this.parent.set(3, !1);
					break;
				case r.KEY_MOUSE_0:
					this.parent.set(4, !1);
					break;
				case r.KEY_MOUSE_1:
					this.parent.set(5, !1);
					break;
				case r.KEY_MOUSE_2:
					this.parent.set(6, !1);
					break;
				case r.KEY_UPGRADE_MAX:
					this.statMaxing = !1;
					break;
				case r.KEY_PING:
					r.showDebug = !1
			}
		}
		mouseDown(e) {
			switch (e.button) {
				case 0:
					let t = {
							x: e.clientX,
							y: e.clientY
						},
						a = r.clickables.stat.check(t);
					if (-1 !== a) this.parent.talk("x", a);
					else if (-1 !== r.clickables.skipUpgrades.check(t)) r.clearUpgrades();
					else {
						let e = r.clickables.upgrade.check(t); - 1 !== e ? this.parent.talk("U", e) : this.parent.set(4, !0)
					}
					break;
				case 1:
					this.parent.set(5, !0);
					break;
				case 2:
					this.parent.set(6, !0)
			}
		}
		mouseMove(e) {
			this.parent.target.x = e.clientX - this.width / 2, this.parent.target.y = e.clientY - this.height / 2, r.target = this.parent.target, r.statHover = 0 === r.clickables.hover.check({
				x: e.clientX,
				y: e.clientY
			})
		}
		mouseUp(e) {
			switch (e.button) {
				case 0:
					this.parent.set(4, !1);
					break;
				case 1:
					this.parent.set(5, !1);
					break;
				case 2:
					this.parent.set(6, !1)
			}
		}
		touchStart({
			changedTouches: e
		}) {
			if (r.died && r.diedOn + 3e3 - Date.now() <= 0) {
				this.parent.spawn(r.playerName);
				let e = 60,
					t = setInterval(() => {
						this.parent.emit("L"), --e <= 0 && clearInterval(t)
					}, 100);
				r.died = !1
			}
			for (let t = 0; t < e.length; t++) {
				let a = e[t],
					n = {
						x: a.clientX,
						y: a.clientY
					},
					i = a.identifier,
					o = r.clickables.stat.check(n);
				if (-1 !== o) this.parent.talk("x", o);
				else if (-1 !== r.clickables.skipUpgrades.check(n)) r.clearUpgrades();
				else {
					let e = r.clickables.upgrade.check(n);
					if (-1 !== e) this.parent.talk("U", e);
					else {
						let e = n.x < this.width / 2;
						null === this.movementTouch && e ? this.movementTouch = i : null !== this.controlTouch || e || (this.controlTouch = i, this.parent.set(4, !0))
					}
				}
			}
		}
		touchMove({
			changedTouches: e
		}) {
			for (let t = 0; t < e.length; t++) {
				let a = e[t],
					r = {
						x: a.clientX,
						y: a.clientY
					},
					n = a.identifier;
				if (this.movementTouch === n) {
					let e = r.x - this.width / 4,
						t = r.y - this.height / 2,
						a = Math.sqrt(e * e + t * t);
					e /= a;
					let n = .3826834323650898;
					(t /= a) < -n !== this.movementTop && this.parent.set(0, this.movementTop = t < -n), t > n !== this.movementBottom && this.parent.set(1, this.movementBottom = t > n), e < -n !== this.movementLeft && this.parent.set(2, this.movementLeft = e < -n), e > n !== this.movementRight && this.parent.set(3, this.movementRight = e > n)
				} else this.controlTouch === n && (this.parent.target.x = r.x - 3 * this.width / 4, this.parent.target.y = r.y - this.height / 2)
			}
			r.target = this.parent.target
		}
		touchEnd({
			changedTouches: e
		}) {
			for (let t = 0; t < e.length; t++) {
				let a = e[t],
					r = (a.clientX, a.clientY, a.identifier);
				this.movementTouch === r ? (this.movementTouch = null, this.movementTop && this.parent.set(0, this.movementTop = !1), this.movementBottom && this.parent.set(1, this.movementBottom = !1), this.movementLeft && this.parent.set(2, this.movementLeft = !1), this.movementRight && this.parent.set(3, this.movementRight = !1)) : this.controlTouch === r && (this.controlTouch = null, this.parent.set(4, !1))
			}
		}
	}
}, function(e, t) {
	! function(e) {
		var a = function(t) {
			this._options = {
				checkOnLoad: !1,
				resetOnEnd: !1,
				loopCheckTime: 50,
				loopMaxNumber: 5,
				baitClass: "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",
				baitStyle: "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;",
				debug: !1
			}, this._var = {
				version: "3.2.1",
				bait: null,
				checking: !1,
				loop: null,
				loopNumber: 0,
				event: {
					detected: [],
					notDetected: []
				}
			}, void 0 !== t && this.setOption(t);
			var a = this,
				r = function() {
					setTimeout(function() {
						!0 === a._options.checkOnLoad && (!0 === a._options.debug && a._log("onload->eventCallback", "A check loading is launched"), null === a._var.bait && a._creatBait(), setTimeout(function() {
							a.check()
						}, 1))
					}, 1)
				};
			void 0 !== e.addEventListener ? e.addEventListener("load", r, !1) : e.attachEvent("onload", r)
		};
		a.prototype._options = null, a.prototype._var = null, a.prototype._bait = null, a.prototype._log = function(e, t) {
			console.log("[BlockAdBlock][" + e + "] " + t)
		}, a.prototype.setOption = function(e, t) {
			if (void 0 !== t) {
				var a = e;
				(e = {})[a] = t
			}
			for (var r in e) this._options[r] = e[r], !0 === this._options.debug && this._log("setOption", 'The option "' + r + '" he was assigned to "' + e[r] + '"');
			return this
		}, a.prototype._creatBait = function() {
			var t = document.createElement("div");
			t.setAttribute("class", this._options.baitClass), t.setAttribute("style", this._options.baitStyle), this._var.bait = e.document.body.appendChild(t), this._var.bait.offsetParent, this._var.bait.offsetHeight, this._var.bait.offsetLeft, this._var.bait.offsetTop, this._var.bait.offsetWidth, this._var.bait.clientHeight, this._var.bait.clientWidth, !0 === this._options.debug && this._log("_creatBait", "Bait has been created")
		}, a.prototype._destroyBait = function() {
			e.document.body.removeChild(this._var.bait), this._var.bait = null, !0 === this._options.debug && this._log("_destroyBait", "Bait has been removed")
		}, a.prototype.check = function(e) {
			if (void 0 === e && (e = !0), !0 === this._options.debug && this._log("check", "An audit was requested " + (!0 === e ? "with a" : "without") + " loop"), !0 === this._var.checking) return !0 === this._options.debug && this._log("check", "A check was canceled because there is already an ongoing"), !1;
			this._var.checking = !0, null === this._var.bait && this._creatBait();
			var t = this;
			return this._var.loopNumber = 0, !0 === e && (this._var.loop = setInterval(function() {
				t._checkBait(e)
			}, this._options.loopCheckTime)), setTimeout(function() {
				t._checkBait(e)
			}, 1), !0 === this._options.debug && this._log("check", "A check is in progress ..."), !0
		}, a.prototype._checkBait = function(t) {
			var a = !1;
			if (null === this._var.bait && this._creatBait(), null === e.document.body.getAttribute("abp") && null !== this._var.bait.offsetParent && 0 != this._var.bait.offsetHeight && 0 != this._var.bait.offsetLeft && 0 != this._var.bait.offsetTop && 0 != this._var.bait.offsetWidth && 0 != this._var.bait.clientHeight && 0 != this._var.bait.clientWidth || (a = !0), void 0 !== e.getComputedStyle) {
				var r = e.getComputedStyle(this._var.bait, null);
				!r || "none" != r.getPropertyValue("display") && "hidden" != r.getPropertyValue("visibility") || (a = !0)
			}!0 === this._options.debug && this._log("_checkBait", "A check (" + (this._var.loopNumber + 1) + "/" + this._options.loopMaxNumber + " ~" + (1 + this._var.loopNumber * this._options.loopCheckTime) + "ms) was conducted and detection is " + (!0 === a ? "positive" : "negative")), !0 === t && (this._var.loopNumber++, this._var.loopNumber >= this._options.loopMaxNumber && this._stopLoop()), !0 === a ? (this._stopLoop(), this._destroyBait(), this.emitEvent(!0), !0 === t && (this._var.checking = !1)) : null !== this._var.loop && !1 !== t || (this._destroyBait(), this.emitEvent(!1), !0 === t && (this._var.checking = !1))
		}, a.prototype._stopLoop = function(e) {
			clearInterval(this._var.loop), this._var.loop = null, this._var.loopNumber = 0, !0 === this._options.debug && this._log("_stopLoop", "A loop has been stopped")
		}, a.prototype.emitEvent = function(e) {
			!0 === this._options.debug && this._log("emitEvent", "An event with a " + (!0 === e ? "positive" : "negative") + " detection was called");
			var t = this._var.event[!0 === e ? "detected" : "notDetected"];
			for (var a in t) !0 === this._options.debug && this._log("emitEvent", "Call function " + (parseInt(a) + 1) + "/" + t.length), t.hasOwnProperty(a) && t[a]();
			return !0 === this._options.resetOnEnd && this.clearEvent(), this
		}, a.prototype.clearEvent = function() {
			this._var.event.detected = [], this._var.event.notDetected = [], !0 === this._options.debug && this._log("clearEvent", "The event list has been cleared")
		}, a.prototype.on = function(e, t) {
			return this._var.event[!0 === e ? "detected" : "notDetected"].push(t), !0 === this._options.debug && this._log("on", 'A type of event "' + (!0 === e ? "detected" : "notDetected") + '" was added'), this
		}, a.prototype.onDetected = function(e) {
			return this.on(!0, e)
		}, a.prototype.onNotDetected = function(e) {
			return this.on(!1, e)
		}, t.BlockAdBlock = a, t.blockAdBlock = new a({
			checkOnLoad: !0,
			resetOnEnd: !0
		})
	}(window)
}, function(e, t) {
	t.submitToLocalStorage = (e => (localStorage.setItem(e + "Value", document.getElementById(e)
		.value), localStorage.setItem(e + "Checked", document.getElementById(e)
		.checked), !1)), t.retrieveFromLocalStorage = (e => (document.getElementById(e)
		.value = localStorage.getItem(e + "Value"), document.getElementById(e)
		.checked = "true" === localStorage.getItem(e + "Checked"), !1)), t.handleLargeNumber = ((e, t = !1) => t && e <= 0 ? "" : e < 1e3 ? e.toFixed(0) + "" : e < 1e6 ? (e / 1e3)
		.toFixed(2) + "k" : e < 1e9 ? (e / 1e6)
		.toFixed(2) + "m" : e < 1e12 ? (e / 1e9)
		.toFixed(2) + "b" : e < 1e15 ? (e / 1e12)
		.toFixed(2) + "t" : e < 1e18 ? (e / 1e15)
		.toFixed(2) + "q" : "∞"), t.timeForHumans = (e => {
		let t = e % 60;
		e /= 60;
		let a = (e = Math.floor(e)) % 60;
		e /= 60;
		let r = (e = Math.floor(e)) % 24;
		e /= 24;
		let n = e = Math.floor(e),
			i = "";

		function o(e, t) {
			e && (i = i + ("" === i ? "" : ", ") + e + " " + t + (e > 1 ? "s" : ""))
		}
		return n > 300 ? "FOREVER" : (o(n, "day"), o(r, "hour"), o(a, "minute"), o(t, "second"), "" === i && (i = "less than a second"), i)
	}), t.addArticle = (e => /[aeiouAEIOU]/.test(e[0]) ? "an " + e : "a " + e), t.formatLargeNumber = (e => e < 1e18 ? e.toFixed(0)
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "∞"), t.pullJSON = ((e, t) => {
		let a = new XMLHttpRequest,
			r = ("https:" === location.protocol ? "https://" : "http://") + e + "/" + t + ".json";
		return console.log("Loading JSON from " + r), a.responseType = "json", new Promise((e, t) => {
			a.open("GET", r), a.onload = (() => {
				e(a.response), console.log("JSON load complete.")
			}), a.onerror = (() => {
				t(a.statusText), console.log("JSON load failed."), console.log(a.statusText)
			}), a.send()
		})
	})
}, function(e, t, a) {
	"use strict";
	let r = a(0),
		n = a(4),
		{
			blockAdBlock: i
		} = a(3);

	function o() {
		dataLayer.push(arguments)
	}
	window.dataLayer = window.dataLayer || [], o("js", new Date), o("config", "UA-120544149-1"), i.on(!0, () => {
			o("event", "yes_adblock", {
				event_category: "adblock_detection",
				non_interaction: !0
			})
		})
		.on(!1, () => {
			o("event", "no_adblock", {
				event_category: "adblock_detection",
				non_interaction: !0
			})
		});
	var s = {
		graphical: {
			screenshotMode: !1,
			borderChunk: 6,
			barChunk: 5,
			mininumBorderChunk: 3,
			darkBorders: !1,
			fancyAnimations: !0,
			colors: "normal",
			pointy: !0,
			fontSizeBoost: 1,
			neon: !1
		},
		gui: {
			expectedMaxSkillLevel: 9
		},
		lag: {
			unresponsive: !1,
			memory: 60
		}
	};
	let l = (() => {
		function e(e) {
			return parseInt(e, 16)
		}
		return (t, a, r = .5) => {
			if (1 === r) return a;
			if (0 === r) return t;
			for (var n = "#", i = 1; i <= 6; i += 2) {
				for (var o = e(a.substr(i, 2)), s = e(t.substr(i, 2)), l = Math.floor(s + (o - s) * r)
						.toString(16); l.length < 2;) l = "0" + l;
				n += l
			}
			return n
		}
	})();

	function c(e) {
		switch (e) {
			case 0:
				return q.teal;
			case 1:
				return q.lgreen;
			case 2:
				return q.orange;
			case 3:
				return q.yellow;
			case 4:
				return q.lavender;
			case 5:
				return q.pink;
			case 6:
				return q.vlgrey;
			case 7:
				return q.lgrey;
			case 8:
				return q.guiwhite;
			case 9:
				return q.black;
			case 10:
				return q.blue;
			case 11:
				return q.green;
			case 12:
				return q.red;
			case 13:
				return q.gold;
			case 14:
				return q.purple;
			case 15:
				return q.magenta;
			case 16:
				return q.grey;
			case 17:
				return q.dgrey;
			case 18:
				return q.white;
			case 19:
				return q.guiblack;
			case 20:
				return q.guiyellow;
			default:
				return "#FF0000"
		}
	}

	function d(e) {
		let t = s.graphical.neon ? q.white : q.black;
		return s.graphical.darkBorders ? t : l(e, t, q.border)
	}

	function h(e) {
		switch (e) {
			case "bas1":
			case "bap1":
			case "dom1":
				return q.blue;
			case "bas2":
			case "bap2":
			case "dom2":
				return q.green;
			case "bas3":
			case "bap3":
			case "dom3":
				return q.red;
			case "bas4":
			case "bap4":
			case "dom4":
				return q.pink;
			case "domx":
				return q.yellow;
			case "port":
				return W.globalAlpha = 1, q.black;
			case "edge":
				return l(q.white, q.guiblack, 1 / 3);
			default:
				return q.white
		}
	}

	function u(e, t) {
		s.graphical.neon ? (e.fillStyle = d(t), e.strokeStyle = t) : (e.fillStyle = t, e.strokeStyle = d(t))
	}
	var g = [];

	function p(e, t = g[e].color) {
		let a = g[e];
		return {
			time: 0,
			index: e,
			x: a.x,
			y: a.y,
			vx: 0,
			vy: 0,
			size: a.size,
			realSize: a.realSize,
			color: t,
			render: {
				status: {
					getFade: () => 1,
					getColor: () => "#FFFFFF",
					getBlend: () => 0,
					health: {
						get: () => 1
					},
					shield: {
						get: () => 1
					}
				}
			},
			facing: a.facing,
			shape: a.shape,
			name: a.name,
			score: 0,
			tiggle: 0,
			layer: a.layer,
			guns: {
				length: a.guns.length,
				getPositions: () => Array(a.guns.length)
					.fill(0),
				update: () => {}
			},
			turrets: a.turrets.map(e => {
				let t = p(e.index);
				return t.realSize = t.realSize / t.size * a.size * e.sizeFactor, t.size = a.size * e.sizeFactor, t.angle = e.angle, t.offset = e.offset, t.direction = e.direction, t.facing = e.direction + e.angle, t
			})
		}
	}
	r.clickables = (() => {
		let e = (() => {
			function e() {
				let e = {
						x: 0,
						y: 0,
						w: 0,
						h: 0
					},
					t = !1;
				return {
					set: (a, r, n, i) => {
						e.x = a, e.y = r, e.w = n, e.h = i, t = !0
					},
					check: a => {
						let r = Math.round(a.x - e.x),
							n = Math.round(a.y - e.y);
						return t && r >= 0 && n >= 0 && r <= e.w && n <= e.h
					},
					hide: () => {
						t = !1
					}
				}
			}
			return t => {
				let a = [];
				for (let r = 0; r < t; r++) a.push(e());
				return {
					place: (e, ...t) => {
						if (e >= a.length) throw console.log(e), console.log(a), new Error("Trying to reference a clickable outside a region!");
						a[e].set(...t)
					},
					hide: () => {
						for (let e of a) e.hide()
					},
					check: e => a.findIndex(t => t.check(e))
				}
			}
		})();
		return {
			stat: e(10),
			upgrade: e(9),
			hover: e(1),
			skipUpgrades: e(1)
		}
	})(), r.statHover = !1, r.upgradeHover = !1;
	var m = {
			id: -1,
			x: r.screenWidth / 2,
			y: r.screenHeight / 2,
			vx: 0,
			vy: 0,
			renderx: r.screenWidth / 2,
			rendery: r.screenHeight / 2,
			renderv: 1,
			slip: 0,
			view: 1,
			time: 0,
			screenWidth: r.screenWidth,
			screenHeight: r.screenHeight,
			target: {
				x: r.screenWidth / 2,
				y: r.screenHeight / 2
			}
		},
		f = [],
		b = [],
		y = 0,
		k = r.messages = [],
		v = r.metrics = {
			latency: [],
			lag: 0,
			rendertime: 0,
			updatetime: 0,
			lastlag: 0,
			lastrender: 0,
			rendergap: 0,
			lastuplink: 0
		},
		w = 0,
		_ = 0,
		x = 0,
		E = {
			x: m.x,
			y: m.y
		},
		S = [
			["norm"]
		],
		M = {
			getStatNames: e => {
				switch (e) {
					case 1:
						return ["Body Damage", "Max Health", "Bullet Speed", "Bullet Health", "Bullet Penetration", "Bullet Damage", "Engine Acceleration", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
					case 2:
						return ["Body Damage", "Max Health", "Drone Speed", "Drone Health", "Drone Penetration", "Drone Damage", "Respawn Rate", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
					case 3:
						return ["Body Damage", "Max Health", "Drone Speed", "Drone Health", "Drone Penetration", "Drone Damage", "Max Drone Count", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
					case 4:
						return ["Body Damage", "Max Health", "Swarm Speed", "Swarm Health", "Swarm Penetration", "Swarm Damage", "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
					case 5:
						return ["Body Damage", "Max Health", "Placement Speed", "Trap Health", "Trap Penetration", "Trap Damage", "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
					case 6:
						return ["Body Damage", "Max Health", "Weapon Speed", "Weapon Health", "Weapon Penetration", "Weapon Damage", "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
					default:
						return ["Body Damage", "Max Health", "Bullet Speed", "Bullet Health", "Bullet Penetration", "Bullet Damage", "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"]
				}
			},
			skills: [{
				amount: 0,
				color: "purple",
				cap: 1,
				softcap: 1
			}, {
				amount: 0,
				color: "pink",
				cap: 1,
				softcap: 1
			}, {
				amount: 0,
				color: "blue",
				cap: 1,
				softcap: 1
			}, {
				amount: 0,
				color: "lgreen",
				cap: 1,
				softcap: 1
			}, {
				amount: 0,
				color: "red",
				cap: 1,
				softcap: 1
			}, {
				amount: 0,
				color: "yellow",
				cap: 1,
				softcap: 1
			}, {
				amount: 0,
				color: "green",
				cap: 1,
				softcap: 1
			}, {
				amount: 0,
				color: "teal",
				cap: 1,
				softcap: 1
			}, {
				amount: 0,
				color: "gold",
				cap: 1,
				softcap: 1
			}, {
				amount: 0,
				color: "orange",
				cap: 1,
				softcap: 1
			}],
			points: 0,
			upgrades: [],
			playerid: -1,
			__s: (() => {
				let e = 0,
					t = 0,
					a = 0,
					r = H(0, 10);
				return {
					setScore: e => {
						e ? (r.set(e), t > r.get() && (a = 0, t = 0)) : (r = H(0, 10), a = 0)
					},
					update: () => {
						e = Math.ceil(1.8 * Math.pow(a + 1, 1.8) - 2 * a + 1), r.get() - t >= e && (t += e, a += 1)
					},
					getProgress: () => e ? Math.min(1, Math.max(0, (r.get() - t) / e)) : 0,
					getScore: () => r.get(),
					getLevel: () => a
				}
			})(),
			type: 0,
			fps: 0,
			color: 0,
			accel: 0,
			topspeed: 1
		};
	r.clearUpgrades = (() => {
		M.upgrades = []
	});
	var A = (() => {
			let e = {};
			return {
				get: () => {
					let t = [],
						a = 1;
					for (let r in e) {
						if (!e.hasOwnProperty(r)) continue;
						let n = e[r].publish();
						t.push(n), n.score > a && (a = n.score)
					}
					return t.sort((e, t) => t.score - e.score), {
						data: t,
						max: a
					}
				},
				remove: t => {
					if (void 0 === e["_" + t]) return console.log("Warning: Asked to removed an unknown leaderboard entry."), -1;
					delete e["_" + t]
				},
				add: t => {
					let a = function(e = "", t = 0, a = 0) {
						let r = 0,
							n = H(0, 10);
						return {
							update: (e, t) => {
								r = e, n.set(t)
							},
							publish: () => {
								let i = g[r];
								return {
									image: p(r, a),
									position: i.position,
									barcolor: c(t),
									label: "" === e ? i.name : e + " - " + i.name,
									score: n.get()
								}
							}
						}
					}(t.name, t.barcolor, t.color);
					a.update(t.index, t.score), e["_" + t.id] = a
				},
				update: t => {
					if (void 0 === e["_" + t.id]) return console.log("Warning: Asked to update an unknown leaderboard entry."), -1;
					e["_" + t.id].update(t.index, t.score)
				},
				purge: () => {
					e = {}
				}
			}
		})(),
		U = () => Math.max(r.screenWidth / m.renderv, r.screenHeight / m.renderv / 9 * 16);
	if (r.target = E, r.player = m, r.canUpgrade = !1, r.canSkill = !1, r.message = "", r.time = 0, localStorage.password) {
		-1 === localStorage.password.toString()
			.indexOf("$") && (localStorage.password = "", delete localStorage.password)
	}
	let R, C = e => {
			let t = T(e);
			localStorage.gameMode = t.id, r.server = t;
			let a = F(t.id)
				.id,
				n = document.getElementById("serverName")
				.firstChild;
			n.innerHTML = t.name + "&nbsp;&nbsp;&nbsp;";
			let i = document.createElement("a");
			i.innerText = "Switch", i.href = "#" + a, i.onclick = (() => {
				C(a), location.hash = "#" + a
			}), n.appendChild(i)
		},
		K = localStorage.password || null,
		T = e => {
			if ("string" == typeof e && e.startsWith("private=")) {
				let t = e.slice(8),
					a = t.indexOf(";");
				return -1 === a ? K = null : (K = t.slice(a + 1), t = t.slice(0, a)), t.startsWith("brash-lunch.") && (t = "arras-seized.glitch.me"), {
					id: e,
					name: "Private Server",
					visible: 0,
					location: "private-" + Math.random()
						.toString(36)
						.slice(2, 6),
					type: "unknown",
					at: t
				}
			}
			if (e)
				for (let t of r.servers)
					if (t.id === e[0]) return r.partyLink = +e[1], t;
			return F()
		},
		F = e => {
			let t = [];
			for (let e of r.servers) e.visible >= (K ? 1 : 2) && t.push(e);
			if (e) {
				let a = t.findIndex(t => t.id === e);
				if (-1 !== a) return t[a + 1] || t[0]
			}
			return t[Math.floor(Math.random() * t.length)]
		};
	window.onload = (() => {
		C(location.hash.slice(1) || localStorage.gameMode), n.retrieveFromLocalStorage("playerNameInput"), n.retrieveFromLocalStorage("optScreenshotMode"), n.retrieveFromLocalStorage("optPredictive"), n.retrieveFromLocalStorage("optFancy"), n.retrieveFromLocalStorage("optColors"), n.retrieveFromLocalStorage("optNoPointy"), n.retrieveFromLocalStorage("optBorders"), "" === document.getElementById("optColors")
			.value && (document.getElementById("optColors")
				.value = "normal"), "" === document.getElementById("optBorders")
			.value && (document.getElementById("optBorders")
				.value = "normal");
		let e, t, a = document.getElementById("patchNotesIFrame");
		R = setInterval(() => {
				(e || (e = a.contentDocument && a.contentDocument.body)) && (t || (t = e.innerHTML.trim()), e.innerHTML.trim() !== t && (e.innerHTML = t))
			}, 5), document.getElementById("startButton")
			.onclick = (() => {
				J()
			}), document.onkeydown = (e => {
				(e.which || e.keyCode) !== r.KEY_ENTER || !r.dead && r.gameStart || J()
			}), window.addEventListener("resize", () => {
				m.screenWidth = P.cv.width = r.screenWidth = window.innerWidth, m.screenHeight = P.cv.height = r.screenHeight = window.innerHeight
			})
	});
	var P = new(a(2)),
		W = P.cv.getContext("2d"),
		D = document.createElement("canvas")
		.getContext("2d");

	function H(e, t, a = 3) {
		let r = Date.now(),
			n = e,
			i = e;
		return {
			set: t => {
				e !== t && (i = n, e = t, r = Date.now())
			},
			get: () => {
				let o = (Date.now() - r) / 1e3;
				return n = o < t ? i + (e - i) * Math.pow(o / t, 1 / a) : e
			}
		}
	}
	var I = [],
		O = 0,
		L = 0,
		Y = (() => {
			let e = [];
			return {
				get: () => {
					return e.length ? e.reduce((e, t) => e + t, 0) / e.length : 0
				},
				add: t => {
					e.push(t), e.length > s.lag.memory && e.splice(0, 1)
				}
			}
		})(),
		B = () => Date.now() - O - L,
		N = (m = {
			vx: 0,
			vy: 0,
			lastvx: 0,
			lastvy: 0,
			renderx: m.x || 0,
			rendery: m.y || 0,
			lastx: m.x || 0,
			lasty: m.y || 0,
			target: P.target,
			name: "",
			lastUpdate: 0,
			time: 0
		}, (() => {
			let e = 0,
				t = 0,
				a = 0,
				n = 0;
			return {
				reset: () => {
					e = 0, t = 0
				},
				get: () => s.lag.unresponsive ? {
					x: 0,
					y: 0
				} : {
					x: e,
					y: t
				},
				iterate: i => {
					if (r.died || r.gameStart) return 0;
					let o = M.accel / M.topSpeed,
						s = Math.sqrt(i.x * i.x + i.y * i.y);
					a += M.accel * i.x / s, n += M.accel * i.y / s;
					let l = Math.sqrt(a * a + n * n);
					if (l > 0 && o) {
						let e = l / (o / 0 + 1);
						a = e * a / l, n = e * n / l
					}
					e += a, t += n
				}
			}
		})());
	const z = (() => {
		window.WebSocket = window.WebSocket || window.MozWebSocket;
		const e = a(1),
			t = (() => {
				const e = (() => {
					let e = 0,
						t = [];
					return {
						next: () => {
							if (e >= t.length) throw console.log(t), new Error("Trying to crawl past the end of the provided data!");
							return t[e++]
						},
						set: a => {
							t = a, e = 0
						}
					}
				})();
				return {
					begin: t => e.set(t),
					data: (() => {
						const t = (() => {
							const a = (() => {
								function e(e) {
									e.isUpdated = !0, (e.motion || e.position) && (e.motion -= .2 * e.position, e.position += e.motion, e.position < 0 && (e.position = 0, e.motion = -e.motion), e.motion > 0 && (e.motion *= .5))
								}
								return t => {
									let a = [];
									for (let e = 0; e < t; e++) a.push({
										motion: 0,
										position: 0,
										isUpdated: !0
									});
									return {
										getPositions: () => a.map(e => e.position),
										update: () => a.forEach(e),
										fire: (e, t) => {
											a[e].isUpdated && (a[e].motion += Math.sqrt(t) / 20), a[e].isUpdated = !1
										},
										length: a.length
									}
								}
							})();
							return (r = {}) => {
								let n = null == r.facing,
									i = e.next();
								if (1 & i) r.facing = e.next(), r.layer = e.next();
								else {
									r.interval = v.rendergap, r.id = e.next();
									let t = f.findIndex(e => e.id === r.id);
									if (-1 !== t && (r = f.splice(t, 1)[0]), (n = -1 === t) || (r.render.draws = !0, r.render.lastx = r.x, r.render.lasty = r.y, r.render.lastvx = r.vx, r.render.lastvy = r.vy, r.render.lastf = r.facing, r.render.lastRender = m.time), r.index = e.next(), r.x = e.next(), r.y = e.next(), r.vx = e.next(), r.vy = e.next(), r.size = e.next(), r.facing = e.next(), r.vfacing = e.next(), r.twiggle = e.next(), r.layer = e.next(), r.color = e.next(), n) r.health = e.next() / 255, r.shield = e.next() / 255;
									else {
										let t = r.health,
											a = r.shield;
										r.health = e.next() / 255, r.shield = e.next() / 255, r.health < t || r.shield < a ? r.render.status.set("injured") : 1 !== r.render.status.getFade() && r.render.status.set("normal")
									}
									r.drawsHealth = !!(2 & i), r.alpha = e.next() / 255, 4 & i && (r.name = e.next(), r.score = e.next()), r.nameplate = 4 & i, n && (r.render = {
										draws: !1,
										expandsWithDeath: r.drawsHealth,
										lastRender: m.time,
										x: r.x,
										y: r.y,
										lastx: r.x - v.rendergap * s.roomSpeed * (1e3 / 30) * r.vx,
										lasty: r.y - v.rendergap * s.roomSpeed * (1e3 / 30) * r.vy,
										lastvx: r.vx,
										lastvy: r.vy,
										lastf: r.facing,
										f: r.facing,
										h: r.health,
										s: r.shield,
										interval: v.rendergap,
										slip: 0,
										status: function() {
											let e = "normal",
												t = B();
											return {
												set: a => {
													a === e && "injured" !== e || ("dying" !== e && (t = B()), e = a)
												},
												getFade: () => "dying" === e || "killed" === e ? 1 - Math.min(1, (B() - t) / 300) : 1,
												getColor: () => "#FFFFFF",
												getBlend: () => {
													let a = "normal" === e || "dying" === e ? 0 : 1 - Math.min(1, (B() - t) / 80);
													return B() - t > 500 && "injured" === e && (e = "normal"), a
												}
											}
										}(),
										health: H(r.health, .5, 5),
										shield: H(r.shield, .5, 5)
									}), r.render.health.set(r.health), r.render.shield.set(r.shield), n || r.oldIndex === r.index || (n = !0), r.oldIndex = r.index
								}
								let o = e.next();
								if (n) r.guns = a(o);
								else if (o !== r.guns.length) throw new Error("Mismatch between data gun number and remembered gun number!");
								for (let t = 0; t < o; t++) {
									let a = e.next(),
										n = e.next();
									a > m.lastUpdate - v.rendergap && r.guns.fire(t, n)
								}
								let l = e.next();
								if (l) {}
								if (n) {
									r.turrets = [];
									for (let e = 0; e < l; e++) r.turrets.push(t())
								} else {
									if (r.turrets.length !== l) throw new Error("Mismatch between data turret number and remembered turret number!");
									r.turrets.forEach(t)
								}
								return r
							}
						})();
						return () => {
							let a = [];
							for (let r = 0, n = e.next(); r < n; r++) a.push(t());
							f.forEach(e => {
									e.render.status.set(1 === e.health ? "dying" : "killed"), 0 !== e.render.status.getFade() && function(e, t, a, n = !1) {
										let i = U();
										return a += s.graphical.borderChunk, n ? (i *= 2, e > -r.screenWidth / i - a && e < r.screenWidth / i + a && t > -r.screenHeight / i - a && t < r.screenHeight / i + a) : e > -a && e < r.screenWidth / i + a && t > -a && t < r.screenHeight / i + a
									}(e.render.x - m.renderx, e.render.y - m.rendery, e.size, !0) && a.push(e)
								}), (f = a)
								.sort((e, t) => {
									let a = e.layer - t.layer;
									return a || (a = t.id - e.id), a
								})
						}
					})(),
					gui: () => {
						let t = e.next(),
							a = 256 & t,
							r = 128 & t,
							n = 64 & t,
							i = 32 & t,
							o = 16 & t,
							s = 8 & t,
							l = 4 & t,
							c = 2 & t;
						if (1 & t && (M.fps = e.next()), c && (M.type = e.next(), M.color = e.next(), M.playerid = e.next()), l && M.__s.setScore(e.next()), s && (M.points = e.next()), o) {
							M.upgrades = [];
							for (let t = 0, a = e.next(); t < a; t++) M.upgrades.push(e.next())
						}
						if (i)
							for (let t = 9; t >= 0; t--) M.skills[t].name = e.next(), M.skills[t].cap = e.next(), M.skills[t].softcap = e.next();
						if (n) {
							let t = parseInt(e.next(), 36)
								.toString(16);
							t = "0000000000".substr(t.length) + t, M.skills[0].amount = parseInt(t.slice(0, 1), 16), M.skills[1].amount = parseInt(t.slice(1, 2), 16), M.skills[2].amount = parseInt(t.slice(2, 3), 16), M.skills[3].amount = parseInt(t.slice(3, 4), 16), M.skills[4].amount = parseInt(t.slice(4, 5), 16), M.skills[5].amount = parseInt(t.slice(5, 6), 16), M.skills[6].amount = parseInt(t.slice(6, 7), 16), M.skills[7].amount = parseInt(t.slice(7, 8), 16), M.skills[8].amount = parseInt(t.slice(8, 9), 16), M.skills[9].amount = parseInt(t.slice(9, 10), 16)
						}
						r && (M.accel = e.next()), a && (M.topspeed = e.next())
					},
					minimap: (() => {
						let t = (() => {
							return () => {
								let t = e.next(),
									a = e.next() * r.gameWidth / 255,
									n = e.next() * r.gameHeight / 255,
									i = e.next();
								switch (t) {
									case -1:
										{
											let e = b.findIndex(e => (G = e, j = [a, n, i], G[0] === j[0] && G[1] === j[1] && G[2] === j[2])); - 1 === e ? console.log("Warning: Remove request for a minimap node we were not aware of.") : b.splice(e, 1)
										}
										break;
									case 1:
										b.push([a, n, i]);
										break;
									default:
										console.log("Unknown minimap update request.")
								}
							}
						})();
						return () => {
							for (let a = 0, r = e.next(); a < r; a++) t()
						}
					})(),
					leaderboard: () => {
						let t = !1,
							a = e.next();
						if (-1 === a) A.purge();
						else
							for (let t = 0, r = a; t < r; t++) A.remove(e.next());
						for (let a = 0, r = e.next(); a < r; a++) {
							let a = e.next();
							if (a < 0) {
								let t = {
									id: -a,
									score: e.next(),
									index: e.next(),
									name: e.next(),
									color: e.next(),
									barcolor: e.next()
								};
								A.add(t)
							} else {
								-1 === A.update({
									id: a,
									score: e.next(),
									index: e.next()
								}) && (t = !0)
							}
						}
						return t
					}
				}
			})();
		return () => {
			n.pullJSON(r.server.at, "mockups")
				.then(e => g = e);
			let a = new WebSocket(("https:" === location.protocol ? "wss://" : "ws://") + r.server.at + "/");
			return a.binaryType = "arraybuffer", a.open = !1, a.cmd = (() => {
				let e = !1,
					t = [!1, !1, !1, !1, !1, !1, !1, !1];
				return {
					set: (a, r) => {
						t[a] !== r && (t[a] = r, e = !0)
					},
					talk: () => {
						e = !1;
						let r = 0;
						for (let e = 0; e < 8; e++) t[e] && (r += Math.pow(2, e));
						let n = U();
						a.talk("C", Math.round(P.target.x / n), Math.round(P.target.y / n), r)
					},
					check: () => e,
					getMotion: () => ({
						x: t[3] - t[2],
						y: t[1] - t[0]
					})
				}
			})(), a.talk = ((...t) => {
				if (!a.open) return 1;
				a.send(e.encode(t))
			}), a.onopen = function() {
				a.open = !0, r.message = "", r.playerKey ? a.talk("k", r.playerKey) : a.talk("k"), console.log("Token submitted to the server for validation."), a.ping = (e => {
					a.talk("p", e)
				});
				let e = () => {
					document.hasFocus() ? (a.cmd.check() && a.cmd.talk(), a.commandCycle = setTimeout(e)) : a.commandCycle = setTimeout(e, 1e3)
				};
				e()
			}, a.onmessage = function(n) {
				let i = e.decode(n.data);
				if (-1 === i) throw new Error("Malformed packet.");
				switch (i.splice(0, 1)[0]) {
					case "w":
						i[0] ? (console.log("The server has welcomed us to the game room. Sending spawn request."), a.talk("s", r.playerName, r.partyLink || 0), r.message = "") : (console.log("The server has rejected us."), i[1] && (r.message = i[1])), r.socket.ping(B());
						break;
					case "R":
						r.gameWidth = i[0], r.gameHeight = i[1], S = JSON.parse(i[2]), L = JSON.parse(i[3]), s.roomSpeed = i[4], console.log("Room data recieved. Commencing syncing process."), a.talk("S", B());
						break;
					case "r":
						r.gameWidth = i[0], r.gameHeight = i[1], S = JSON.parse(i[2]), console.log("Room data reset.");
						break;
					case "e":
						break;
					case "c":
						m.x = i[0], m.y = i[1], m.view = i[2], m.renderx = m.x, m.rendery = m.y, m.renderv = m.view, console.log("Camera moved!");
						break;
					case "S":
						{
							let e = i[0],
								t = i[1],
								n = (B() - e) / 2,
								o = B() - n - t;
							if (I.push({
									delta: o,
									latency: n
								}), I.length < 10) setTimeout(() => {
								a.talk("S", B())
							}, 10),
							r.message = "Syncing clocks, please do not tab away. " + I.length + "/10...";
							else {
								I.sort((e, t) => e.latency - t.latency);
								let e = I[Math.floor(I.length / 2)].latency,
									t = 0,
									a = 0,
									n = 0;
								I.forEach(a => {
									t += Math.pow(a.latency - e, 2)
								}), t = Math.sqrt(t / I.length), I.forEach(r => {
									Math.abs(r.latency - e) < t && (a += r.delta, n++)
								}), O = Math.round(a / n), console.log(I), console.log("Syncing complete, calculated clock difference " + O + "ms. Beginning game."), r.gameStart = !0, r.message = ""
							}
						}
						break;
					case "m":
						k.push({
							text: i[0],
							status: 2,
							alpha: 0,
							time: Date.now()
						});
						break;
					case "u":
						{
							let e = i[0],
								n = i[1],
								o = i[2],
								s = i[3],
								l = i[4],
								c = i[5],
								d = i.slice(6);e > m.lastUpdate ? (Y.add(B() - e), m.time = e + Y.get(), v.rendergap = e - m.lastUpdate, v.rendergap <= 0 && console.log("yo some bullshit is up wtf"), m.lastUpdate = e, t.begin(d), t.gui(), t.data(), m.lastx = m.x, m.lasty = m.y, m.lastvx = m.vx, m.lastvy = m.vy, m.x = n, m.y = o, m.vx = r.died ? 0 : l, m.vy = r.died ? 0 : c, isNaN(m.renderx) && (m.renderx = m.x), isNaN(m.rendery) && (m.rendery = m.y), N.reset(), m.view = s, m.renderv || (m.renderv = 2e3), v.lastlag = v.lag, v.lastuplink = B()) : console.log("Old data! Last given time: " + m.time + "; offered packet timestamp: " + e + "."),
							a.talk("d", Math.max(m.lastUpdate, e)),
							a.cmd.talk(),
							x++
						}
						break;
					case "b":
						t.begin(i), t.minimap(), t.leaderboard() && a.talk("z");
						break;
					case "p":
						{
							setTimeout(() => r.socket.ping(B()), 50),
							v.latency.length >= 16 && v.latency.shift();
							let e = B() - i[0];e > 0 && v.latency.push(e)
						}
						break;
					case "F":
						r.finalScore = H(0, 4), r.finalScore.set(i[0]), r.finalLifetime = H(0, 5), r.finalLifetime.set(i[1]), r.finalKills = [H(0, 3), H(0, 4.5), H(0, 2.5)], r.finalKills[0].set(i[2]), r.finalKills[1].set(i[3]), r.finalKills[2].set(i[4]), r.finalKillers = [];
						for (let e = 0; e < i[5]; e++) r.finalKillers.push(i[6 + e]);
						r.died = !0, r.diedOn = Date.now();
					case "K":
						r.isInGame = !1;
						break;
					default:
						throw new Error("Unknown message index.")
				}
			}, a.onclose = function() {
				a.open = !1, r.disconnected = !0, r.isInGame && (r.isInGame = !1, r.died || (r.message = "Socket closed. If you disconnected, respawn within 30 seconds to regain your score.")), console.log("Socket closed."), clearInterval(a.commandCycle)
			}, a.onerror = function(e) {
				console.log("WebSocket error: " + e), r.message = "Socket error. Maybe another server will work.", r.isInGame = !1
			}, a
		}
	})();
	var G, j, q = {
			teal: "#7ADBBC",
			lgreen: "#B9E87E",
			orange: "#E7896D",
			yellow: "#FDF380",
			lavender: "#B58EFD",
			pink: "#EF99C3",
			vlgrey: "#E8EBF7",
			lgrey: "#AA9F9E",
			guiwhite: "#FFFFFF",
			black: "#484848",
			blue: "#3CA4CB",
			green: "#8ABC3F",
			red: "#E03E41",
			gold: "#EFC74B",
			purple: "#8D6ADF",
			magenta: "#CC669C",
			grey: "#A7A7AF",
			dgrey: "#726F6F",
			white: "#DBDBDB",
			guiblack: "#000000",
			guiyellow: "#FCFF8F",
			paletteSize: 10,
			border: .65
		},
		V = {};

	function J() {
		if (r.mobile) {
			let e = document.body;
			e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen()
		}
		switch (n.submitToLocalStorage("optScreenshotMode"), s.graphical.screenshotMode = document.getElementById("optScreenshotMode")
			.checked, n.submitToLocalStorage("optFancy"), s.graphical.pointy = !document.getElementById("optNoPointy")
			.checked, n.submitToLocalStorage("optNoPointy"), s.graphical.fancyAnimations = !document.getElementById("optFancy")
			.checked, n.submitToLocalStorage("optPredictive"), s.lag.unresponsive = document.getElementById("optPredictive")
			.checked, n.submitToLocalStorage("optBorders"), document.getElementById("optBorders")
			.value) {
			case "normal":
				s.graphical.darkBorders = s.graphical.neon = !1;
				break;
			case "dark":
				s.graphical.darkBorders = !0, s.graphical.neon = !1;
				break;
			case "glass":
				s.graphical.darkBorders = !1, s.graphical.neon = !0;
				break;
			case "neon":
				s.graphical.darkBorders = s.graphical.neon = !0
		}
		n.submitToLocalStorage("optColors");
		let e = document.getElementById("optColors")
			.value;
		q = V[e] || q;
		let t = document.getElementById("playerNameInput");
		n.submitToLocalStorage("playerNameInput"), r.playerName = m.name = t.value, r.playerKey = K || null, r.screenWidth = window.innerWidth, r.screenHeight = window.innerHeight, document.getElementById("startMenuWrapper")
			.style.top = "-600px", document.getElementById("gameAreaWrapper")
			.style.opacity = 1, r.socket || (r.socket = z()), r.animLoopHandle || ue(), P.socket = r.socket, b = [], clearInterval(R), setInterval(() => N.iterate(r.socket.cmd.getMotion()), 1e3 / 30), document.getElementById("gameCanvas")
			.focus(), r.isInGame = !0
	}

	function X(e, t) {
		W.fillStyle = e, W.globalAlpha = t, W.fillRect(0, 0, r.screenWidth, r.screenHeight), W.globalAlpha = 1
	}
	n.pullJSON(location.hostname, "color")
		.then(e => {
			V = e
		});
	const $ = (() => {
			let e = document.createElement("canvas")
				.getContext("2d");
			if (e.measureText) {
				if (e.measureText("test")
					.emHeightAscent) return (t, a, r = !1) => {
					a += s.graphical.fontSizeBoost, e.font = "bold " + a + "px Ubuntu";
					let n = e.measureText(t);
					return r ? {
						width: n.width,
						height: n.emHeightAscent
					} : n.width
				};
				console.log("Using semi mode!");
				let t = document.createElement("div");
				return t.style.padding = "0", t.style.margin = "0", t.style.position = "absolute", t.style.visibility = "hidden", document.body.appendChild(t), (a, r, n = !1) => (r += s.graphical.fontSizeBoost, n ? (t.style.font = "bold " + r + "px Ubuntu", t.innerText = a, {
					width: t.clientWidth,
					height: t.clientHeight
				}) : (e.font = "bold " + r + "px Ubuntu", e.measureText(a)
					.width))
			}
			console.log("Using full mode!");
			let t = document.createElement("div");
			return t.style.padding = "0", t.style.margin = "0", t.style.position = "absolute", t.style.visibility = "hidden", document.body.appendChild(t), (e, a, r = !1) => (a += s.graphical.fontSizeBoost, t.style.font = "bold " + a + "px Ubuntu", t.innerText = e, r ? {
				width: t.clientWidth,
				height: t.clientHeight
			} : t.clientWidth)
		})(),
		Z = (() => {
			let e = (e = null) => {
				let t = !0;
				return {
					update: a => {
						let r = !1;
						if (null == e) r = !0;
						else switch (typeof a != typeof e && (r = !0), typeof a) {
							case "number":
							case "string":
								a !== e && (r = !0);
								break;
							case "object":
								if (Array.isArray(a)) {
									if (a.length !== e.length) r = !0;
									else
										for (let t = 0, n = a.length; t < n; t++) a[t] !== e[t] && (r = !0);
									break
								}
							default:
								throw console.log(a), new Error("Unsupported type for a floppyvar!")
						}
						r && (t = !0, e = a)
					},
					publish: () => e,
					check: () => !!t && (t = !1, !0)
				}
			};
			return () => {
				let t = document.createElement("canvas")
					.getContext("2d");
				t.imageSmoothingEnabled = !1;
				let a = [e(""), e(0), e(0), e(1), e("#FF0000"), e("left")],
					r = (a.map(e => e.publish()), 0),
					n = 0;
				return {
					draw: (e, i, o, l, c, d = "left", h = !1, u = 1) => {
						if (l += s.graphical.fontSizeBoost, a[0].update(e), a[1].update(i), a[2].update(o), a[3].update(l), a[4].update(c), a[5].update(d), a.some(e => e.check())) {
							let a = Math.max(3, l / 5),
								i = $(e, l - s.graphical.fontSizeBoost, !0);
							switch (t.canvas.height = i.height + 2 * a, t.canvas.width = i.width + 2 * a, d) {
								case "left":
									r = a;
									break;
								case "center":
									r = t.canvas.width / 2;
									break;
								case "right":
									r = t.canvas.width - a
							}
							n = t.canvas.height / 2, t.lineWidth = a, t.font = "bold " + l + "px Ubuntu", t.textAlign = d, t.textBaseline = "middle", t.strokeStyle = q.black, t.fillStyle = c, t.lineCap = "round", t.lineJoin = "round", t.strokeText(e, r, n), t.fillText(e, r, n)
						}
						W.drawImage(t.canvas, Math.round(i - r), Math.round(o - n * (h ? 1.05 : 1.5)))
					}
				}
			}
		})();

	function Q(e, t, a, r, n = !1) {
		n ? W.strokeRect(e, t, a, r) : W.fillRect(e, t, a, r)
	}

	function ee(e, t, a, r = !1) {
		W.beginPath(), W.arc(e, t, a, 0, 2 * Math.PI, !1), W.closePath(), r ? W.stroke() : W.fill()
	}

	function te(e, t, a, r) {
		W.beginPath(), W.lineTo(Math.round(e) + .5, Math.round(t) + .5), W.lineTo(Math.round(a) + .5, Math.round(r) + .5), W.closePath(), W.stroke()
	}

	function ae(e, t, a, r, n) {
		W.beginPath(), W.lineTo(e, a), W.lineTo(t, a), W.lineWidth = r, W.strokeStyle = n, W.closePath(), W.stroke()
	}
	const re = (() => {
		function e(e, t, a, r, n, i, o) {
			let s = [];
			s = i > 0 ? [n * i, n] : [n, -n * i];
			let l = [Math.atan2(s[0], r), Math.atan2(s[1], r)],
				c = [Math.sqrt(r * r + s[0] * s[0]), Math.sqrt(r * r + s[1] * s[1])];
			e.beginPath(), e.lineTo(t + c[0] * Math.cos(o + l[0]), a + c[0] * Math.sin(o + l[0])), e.lineTo(t + c[1] * Math.cos(o + Math.PI - l[1]), a + c[1] * Math.sin(o + Math.PI - l[1])), e.lineTo(t + c[1] * Math.cos(o + Math.PI + l[1]), a + c[1] * Math.sin(o + Math.PI + l[1])), e.lineTo(t + c[0] * Math.cos(o - l[0]), a + c[0] * Math.sin(o - l[0])), e.closePath(), e.stroke(), e.fill()
		}
		return (t, a, r, n, i = 1, o = 1, d = 0, h = !1, p = !1, m = !1, f = r.render) => {
			let b = p || W,
				y = m ? 1 : f.status.getFade(),
				k = o * n * r.size,
				v = g[r.index],
				w = t,
				_ = a,
				x = !1 === m ? r : m;
			if (0 !== y && 0 !== i) {
				if (f.expandsWithDeath && (k *= 1 + .5 * (1 - y)), p !== D && (1 !== y || 1 !== i))
					if (s.graphical.fancyAnimations)(b = D)
						.canvas.width = b.canvas.height = k * v.position.axis + 20 * n, w = b.canvas.width / 2 - k * v.position.axis * v.position.middle.x * Math.cos(d) / 4, _ = b.canvas.height / 2 - k * v.position.axis * v.position.middle.x * Math.sin(d) / 4, p = !1;
					else if (y * i < .5) return;
				if ("object" != typeof b && (b = W), b.lineCap = "round", b.lineJoin = "round", x.turrets.length !== v.turrets.length) throw new Error("Mismatch turret number with mockup.");
				for (let e = 0; e < v.turrets.length; e++) {
					let t = v.turrets[e];
					if (0 === t.layer) {
						let a = t.direction + t.angle + d,
							r = t.offset * k;
						re(w + r * Math.cos(a), _ + r * Math.sin(a), t, n, i, k / n / t.size * t.sizeFactor, x.turrets[e].facing + h * d, h, b, x.turrets[e], f)
					}
				}
				if (x.guns.update(), b.lineWidth = Math.max(s.graphical.mininumBorderChunk, n * s.graphical.borderChunk), u(b, l(q.grey, f.status.getColor(), f.status.getBlend())), x.guns.length !== v.guns.length) throw new Error("Mismatch gun number with mockup."); {
					let t = x.guns.getPositions();
					for (let a = 0; a < v.guns.length; a++) {
						let r = v.guns[a],
							n = t[a] / (1 === r.aspect ? 2 : 1);
						e(b, w + k * (r.offset * Math.cos(r.direction + r.angle + d) + (r.length / 2 - n) * Math.cos(r.angle + d)), _ + k * (r.offset * Math.sin(r.direction + r.angle + d) + (r.length / 2 - n) * Math.sin(r.angle + d)), k * (r.length / 2 - (1 === r.aspect ? 2 * n : 0)), k * r.width / 2, r.aspect, r.angle + d)
					}
				}
				if (b.globalAlpha = 1, u(b, l(c(r.color), f.status.getColor(), f.status.getBlend())), function(e, t, a, r, n, i = 0, o = !0) {
						if (i += n % 2 ? 0 : Math.PI / n, e.beginPath(), n) {
							if (n < 0) {
								s.graphical.pointy && (e.lineJoin = "miter");
								let o = 1 - 6 / n / n;
								n = -n, e.moveTo(t + r * Math.cos(i), a + r * Math.sin(i));
								for (let s = 0; s < n; s++) {
									var l = (s + 1) / n * 2 * Math.PI,
										c = (s + .5) / n * 2 * Math.PI,
										d = {
											x: t + r * o * Math.cos(c + i),
											y: a + r * o * Math.sin(c + i)
										},
										h = {
											x: t + r * Math.cos(l + i),
											y: a + r * Math.sin(l + i)
										};
									e.quadraticCurveTo(d.x, d.y, h.x, h.y)
								}
							} else if (n > 0)
								for (let o = 0; o < n; o++) {
									let s = o / n * 2 * Math.PI,
										l = t + r * Math.cos(s + i),
										c = a + r * Math.sin(s + i);
									e.lineTo(l, c)
								}
						} else e.arc(t, a, r, 0, 2 * Math.PI);
						e.closePath(), e.stroke(), o && e.fill(), e.lineJoin = "round"
					}(b, w, _, k / v.size * v.realSize, v.shape, d), x.turrets.length !== v.turrets.length) throw new Error("Mismatch turret number with mockup.");
				for (let e = 0; e < v.turrets.length; e++) {
					let t = v.turrets[e];
					if (1 === t.layer) {
						let a = t.direction + t.angle + d,
							r = t.offset * k;
						re(w + r * Math.cos(a), _ + r * Math.sin(a), t, n, i, k / n / t.size * t.sizeFactor, x.turrets[e].facing + h * d, h, b, x.turrets[e], f)
					}
				}
				p || b === W || (W.save(), W.globalAlpha = i * y, W.drawImage(b.canvas, t - w, a - _), W.restore())
			}
		}
	})();
	window.requestAnimFrame = (() => window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
		window.setTimeout(e, 1e3 / 60)
	})();
	const ne = (() => {
		const e = H(0, .7, 1.5),
			t = H(0, 2, 3);

		function a() {
			var e = [];
			return (t, a, r, n, i, o) => {
				for (e.push(t); e.length > n;) e.splice(0, 1);
				let s = Math.min(...e),
					l = Math.max(...e),
					c = l - s;
				l > 0 && s < 0 && ae(a, a + n, r + i * l / c, 2, q.guiwhite), W.beginPath(), W.moveTo(a, r + i * (l - e[0]) / c);
				for (let t = 1; t < e.length; t++) W.lineTo(a + t, r + i * (l - e[t]) / c);
				W.lineWidth = 1, W.strokeStyle = o, W.stroke()
			}
		}
		const i = (() => {
				return () => {
					let e = 0,
						t = 0,
						a = 0;
					return {
						set: (r = m.time, n = v.rendergap) => {
							(e = Math.max(B() - r - 80, -n)) > 150 && e < 1e3 && (e = 150), e > 1e3 && (e = 1e6 * Math.sin(e / 1e3 - 1) / e + 1e3), t = e / n, a = 30 * s.roomSpeed * e / 1e3
						},
						predict: (a, r, n, i) => e >= 0 ? (r = r) + (r - a) * t : function(e, t, a, r, n, i) {
							let o = Math.cos((1 + i) * Math.PI);
							return .5 * (((1 + i) * a + e) * (o + 1) + (-i * r + t) * (1 - o))
						}(a, r, n, i, 0, t),
						predictFacing: (e, a) => e + (1 + t) * (oe = a - e + Math.PI, se = 2 * Math.PI, (oe % se + se) % se - Math.PI),
						getPrediction: () => e
					}
				}
			})(),
			o = a(),
			d = a(),
			u = a(),
			w = (() => {
				let e = [];
				for (let t = 0; t < 2 * s.gui.expectedMaxSkillLevel; t++) e.push((ie = t / s.gui.expectedMaxSkillLevel, Math.log(4 * ie + 1) / Math.log(5)));
				return t => e[t]
			})(),
			x = {
				skillNames: [Z(), Z(), Z(), Z(), Z(), Z(), Z(), Z(), Z(), Z()],
				skillKeys: [Z(), Z(), Z(), Z(), Z(), Z(), Z(), Z(), Z(), Z()],
				skillValues: [Z(), Z(), Z(), Z(), Z(), Z(), Z(), Z(), Z(), Z()],
				skillPoints: Z(),
				score: Z(),
				name: Z(),
				class: Z(),
				debug: [Z(), Z(), Z(), Z(), Z(), Z()],
				lbtitle: Z(),
				leaderboard: [Z(), Z(), Z(), Z(), Z(), Z(), Z(), Z(), Z(), Z()],
				upgradeNames: [Z(), Z(), Z(), Z(), Z(), Z(), Z(), Z(), Z()],
				upgradeKeys: [Z(), Z(), Z(), Z(), Z(), Z()],
				skipUpgrades: Z()
			};
		return a => {
			let U = 0;
			_++;
			let R, C, K = Math.max(r.screenWidth, 16 * r.screenHeight / 9) / (r.screenWidth <= 1280 ? 1280 : r.screenWidth >= 1920 ? 1920 : r.screenWidth);
			r.mobile && (K *= 1.5); {
				let e = i();
				e.set();
				let t = {
					x: 0,
					y: 0
				};
				U = e.getPrediction(), m.renderx = e.predict(m.lastx, m.x, m.lastvx, m.vx) + t.x, m.rendery = e.predict(m.lasty, m.y, m.lastvy, m.vy) + t.y, R = a * m.renderx, C = a * m.rendery
			} {
				X(q.white, 1), X(q.guiblack, .1);
				let e = S[0].length,
					t = S.length;
				for (let n = 0; n < t; n++) {
					let i = S[n];
					for (let o = 0; o < e; o++) {
						let s = Math.max(0, a * o * r.gameWidth / e - R + r.screenWidth / 2),
							l = Math.max(0, a * n * r.gameHeight / t - C + r.screenHeight / 2),
							c = Math.min(r.screenWidth, a * (o + 1) * r.gameWidth / e - R + r.screenWidth / 2),
							d = Math.min(r.screenHeight, a * (n + 1) * r.gameHeight / t - C + r.screenHeight / 2);
						W.globalAlpha = 1, W.fillStyle = q.white, W.fillRect(s, l, c - s, d - l), W.globalAlpha = .3, W.fillStyle = h(i[o]), W.fillRect(s, l, c - s, d - l)
					}
				}
				W.lineWidth = 1, W.strokeStyle = q.guiblack, W.globalAlpha = .04, W.beginPath();
				let n = 30 * a;
				for (let e = (r.screenWidth / 2 - R) % n; e < r.screenWidth; e += n) W.moveTo(e, 0), W.lineTo(e, r.screenHeight);
				for (let e = (r.screenHeight / 2 - C) % n; e < r.screenHeight; e += n) W.moveTo(0, e), W.lineTo(r.screenWidth, e);
				W.stroke(), W.globalAlpha = 1
			}
			if (f.forEach(function(e) {
					if (!e.render.draws) return 1;
					let t = i();
					1 === e.render.status.getFade() ? t.set() : t.set(e.render.lastRender, e.render.interval), e.render.x = t.predict(e.render.lastx, e.x, e.render.lastvx, e.vx), e.render.y = t.predict(e.render.lasty, e.y, e.render.lastvy, e.vy), e.render.f = t.predictFacing(e.render.lastf, e.facing), e.id === M.playerid && 0 == (1 & e.twiggle) && (e.render.f = Math.atan2(E.y, E.x), 2 & e.twiggle && (e.render.f += Math.PI));
					let n = e.id === M.playerid ? 0 : a * e.render.x - R,
						o = e.id === M.playerid ? 0 : a * e.render.y - C;
					n += r.screenWidth / 2, o += r.screenHeight / 2, re(n, o, e, a, e.alpha, 1.1, e.render.f, !1, !0)
				}), s.graphical.screenshotMode || f.forEach(function(e) {
					let t = e.id === M.playerid ? 0 : a * e.render.x - R,
						i = e.id === M.playerid ? 0 : a * e.render.y - C;
					! function(e, t, a, r, i) {
						let o = a.render.status.getFade();
						o *= o, W.globalAlpha = o;
						let l = a.size * r,
							c = g[a.index],
							d = l / c.size * c.realSize;
						if (a.drawsHealth) {
							let r = a.render.health.get(),
								n = a.render.shield.get();
							if (r < 1 || n < 1) {
								let a = t + 1.1 * d + 15;
								W.globalAlpha = i * i * o, ae(e - l, e + l, a, 3 + s.graphical.barChunk, q.black), ae(e - l, e - l + 2 * l * r, a, 3, q.lgreen), n && (W.globalAlpha *= .3 + .3 * n, ae(e - l, e - l + 2 * l * n, a, 3, q.teal)), W.globalAlpha = o
							}
						}
						if (a.nameplate && a.id !== M.playerid) {
							null == a.render.textobjs && (a.render.textobjs = [Z(), Z()]);
							var h = a.name,
								u = q.guiwhite;
							8203 === h.charCodeAt(0) && (h = h.slice(1))
								.length && (u = q.guiyellow), W.globalAlpha = i, a.render.textobjs[0].draw(h, e, t - d - 30, 16, u, "center"), a.render.textobjs[1].draw(n.handleLargeNumber(a.score, !0), e, t - d - 16, 8, u, "center"), W.globalAlpha = 1
						}
					}(t += r.screenWidth / 2, i += r.screenHeight / 2, e, a, e.alpha)
				}), r.hideGui) return void(v.lastrender = B());
			r.screenWidth /= K, r.screenHeight /= K, W.scale(K, K);
			M.__s.update();
			let T = A.get(),
				F = T.max; {
				let e = 4,
					t = 18,
					a = r.screenWidth / 2,
					n = 20;
				for (let r = k.length - 1; r >= 0; r--) {
					let i = k[r],
						o = i.text;
					null == i.textobj && (i.textobj = Z()), null == i.len && (i.len = $(o, t - 4)), W.globalAlpha = .5 * i.alpha, ae(a - i.len / 2, a + i.len / 2, n + t / 2, t, q.black), W.globalAlpha = Math.min(1, i.alpha), i.textobj.draw(o, a, n + t / 2, t - 4, q.guiwhite, "center", !0), n += e + t, i.status > 1 && (n -= (e + t) * (1 - Math.sqrt(i.alpha))), i.status > 1 ? (i.status -= .05, i.alpha += .05) : 0 === r && (k.length > 5 || Date.now() - i.time > 1e4) && (i.status -= .05, i.alpha -= .05, i.alpha <= 0 && k.splice(0, 1))
				}
				W.globalAlpha = 1
			} {
				r.canSkill = M.points > 0 && M.skills.some(e => e.amount < e.cap), e.set(0 + (r.canSkill || r.died || r.statHover)), r.clickables.stat.hide();
				let t = 4,
					a = 15,
					n = 35,
					i = 200,
					o = i,
					l = -20 - 2 * i + e.get() * (40 + 2 * i),
					c = r.screenHeight - 20 - a,
					d = 11,
					h = M.getStatNames(g[M.type].statnames || -1);
				M.skills.forEach(function(e) {
					let u = h[--d - 1],
						g = e.amount,
						p = q[e.color],
						m = e.softcap,
						f = e.cap;
					if (m) {
						i = o;
						let e = s.gui.expectedMaxSkillLevel,
							h = m < f;
						if (m > e && (e = m), ae(l + a / 2, l - a / 2 + i * w(m), c + a / 2, a - 3 + s.graphical.barChunk, q.black), ae(l + a / 2, l + a / 2 + (i - n) * w(m), c + a / 2, a - 3, q.grey), ae(l + a / 2, l + a / 2 + (i - n) * w(g), c + a / 2, a - 3.5, p), h) {
							W.lineWidth = 1, W.strokeStyle = q.grey;
							for (let t = m + 1; t < e; t++) te(l + (i - n) * w(t), c + 1.5, l + (i - n) * w(t), c - 3 + a)
						}
						W.strokeStyle = q.black, W.lineWidth = 1;
						for (let e = 1; e < g + 1; e++) te(l + (i - n) * w(e), c + 1.5, l + (i - n) * w(e), c - 3 + a);
						i = o * w(e);
						let b = g === f ? p : !M.points || m !== f && g === m ? q.grey : q.guiwhite;
						x.skillNames[d - 1].draw(u, Math.round(l + i / 2) + .5, c + a / 2, a - 5, b, "center", !0), x.skillKeys[d - 1].draw("[" + d % 10 + "]", Math.round(l + i - .25 * a) - 1.5, c + a / 2, a - 5, b, "right", !0), b === q.guiwhite && r.clickables.stat.place(d - 1, l * K, c * K, i * K, a * K), g && x.skillValues[d - 1].draw(b === p ? "MAX" : "+" + g, Math.round(l + i + 4) + .5, c + a / 2, a - 5, p, "left", !0), c -= a + t
					}
				}), r.clickables.hover.place(0, 0, c * K, .8 * i * K, .8 * (r.screenHeight - c) * K), 0 !== M.points && x.skillPoints.draw("x" + M.points, Math.round(l + i - 2) + .5, Math.round(c + a - 4) + .5, 20, q.guiwhite, "right")
			} {
				let e = 4,
					t = 330,
					a = 25,
					i = (r.screenWidth - t) / 2,
					o = r.screenHeight - 20 - a;
				W.lineWidth = 1, ae(i, i + t, o + a / 2, a - 3 + s.graphical.barChunk, q.black), ae(i, i + t, o + a / 2, a - 3, q.grey), ae(i, i + t * M.__s.getProgress(), o + a / 2, a - 3.5, q.gold), x.class.draw("Level " + M.__s.getLevel() + " " + g[M.type].name, i + t / 2, o + a / 2, a - 4, q.guiwhite, "center", !0), ae(i + .1 * t, i + .9 * t, (o -= (a = 14) + e) + a / 2, a - 3 + s.graphical.barChunk, q.black), ae(i + .1 * t, i + .9 * t, o + a / 2, a - 3, q.grey), ae(i + .1 * t, i + t * (.1 + .8 * (F ? Math.min(1, M.__s.getScore() / F) : 1)), o + a / 2, a - 3.5, q.green), x.score.draw("Score: " + n.formatLargeNumber(M.__s.getScore()), i + t / 2, o + a / 2, a - 2, q.guiwhite, "center", !0), W.lineWidth = 4, x.name.draw(m.name, Math.round(i + t / 2) + .5, Math.round(o - 10 - e) + .5, 32, q.guiwhite, "center")
			} {
				let e = 200,
					t = e / r.gameWidth * r.gameHeight,
					a = r.screenWidth - e - 20,
					n = r.screenHeight - t - 20,
					i = S[0].length,
					s = S.length,
					g = e / i,
					p = t / s;
				for (let e = 0; e < s; e++) {
					let t = S[e];
					for (let r = 0; r < i; r++) W.globalAlpha = .6, W.fillStyle = h(t[r]), Q(a + r * g, n + e * p, g, p)
				}
				W.globalAlpha = .3, W.fillStyle = q.grey, Q(a, n, e, t);
				for (let t of b) 17 === t[2] ? (W.fillStyle = l(c(t[2]), q.black, .5), W.globalAlpha = .6, ee(a + t[0] / r.gameWidth * e, n + t[1] / r.gameWidth * e, .8)) : (W.fillStyle = l(c(t[2]), q.black, .5), W.globalAlpha = 1, ee(a + t[0] / r.gameWidth * e, n + t[1] / r.gameWidth * e, 2));
				W.globalAlpha = 1, W.lineWidth = 1, W.strokeStyle = q.black, ee(a + m.x / r.gameWidth * e, n + m.y / r.gameWidth * e, 2), W.lineWidth = 3, W.fillStyle = q.black, Q(a, n, e, t, !0);
				let f = n - 10,
					y = v.latency.reduce((e, t) => e + t, 0) / v.latency.length;
				r.showDebug && (Q(a, n - 40, e, 30), o(U, a, n - 40, e, 30, q.yellow), u(v.rendergap, a, n - 40, e, 30, q.pink), d(y, a, n - 40, e, 30, q.teal), f -= 40), r.showDebug ? (x.debug[5].draw("Arras.io", a + e, f - 70 - 2, 15, q.guiwhite, "right"), x.debug[4].draw("Prediction: " + Math.round(U) + "ms", a + e, f - 56, 10, q.guiwhite, "right"), x.debug[3].draw("Update Rate: " + v.updatetime + "Hz", a + e, f - 42, 10, q.guiwhite, "right")) : x.debug[5].draw("Arras.io", a + e, f - 42 - 2, 15, q.guiwhite, "right"), x.debug[2].draw("Client Speed: " + v.rendertime + " FPS", a + e, f - 28, 10, v.rendertime > 10 ? q.guiwhite : q.orange, "right"), x.debug[1].draw("Server Speed: " + (100 * M.fps)
					.toFixed(2) + "%", a + e, f - 14, 10, 1 === M.fps ? q.guiwhite : q.orange, "right"), x.debug[0].draw(y.toFixed(1) + " ms  " + r.server.location + " :" + r.server.type + ":", a + e, f, 10, q.guiwhite, "right")
			} {
				let e = 4,
					t = 200,
					a = 14,
					i = r.screenWidth - t - 20,
					o = 20 + a + 14;
				x.lbtitle.draw("Leaderboard", Math.round(i + t / 2) + .5, Math.round(o - 10) + .5, a + 4, q.guiwhite, "center");
				for (let r = 0; r < T.data.length; r++) {
					let l = T.data[r];
					ae(i, i + t, o + a / 2, a - 3 + s.graphical.barChunk, q.black), ae(i, i + t, o + a / 2, a - 3, q.grey), ae(i, i + t * Math.min(1, l.score / F), o + a / 2, a - 3.5, l.barcolor), x.leaderboard[r].draw(l.label + ": " + n.handleLargeNumber(Math.round(l.score)), i + t / 2, o + a / 2, a - 5, q.guiwhite, "center", !0);
					let c = a / l.position.axis,
						d = i - 1.5 * a - c * l.position.middle.x * .707,
						h = o + .5 * a + c * l.position.middle.x * .707;
					re(d, h, l.image, 1 / c, 1, c * c / l.image.size, -Math.PI / 4, !0), o += e + a
				}
			} {
				t.set(0 + (r.canUpgrade || r.upgradeHover));
				let e = t.get();
				if (r.clickables.upgrade.hide(), M.upgrades.length > 0) {
					r.canUpgrade = !0;
					let t = 14,
						a = 100,
						n = 100,
						i = 2 * e * 20 - 20,
						o = 20,
						l = i,
						d = 0,
						h = o,
						u = 0;
					y += .01;
					let m = 0,
						f = 0;
					M.upgrades.forEach(s => {
						o > h && (h = o), d = i, r.clickables.upgrade.place(f++, i * K, o * K, a * K, n * K), W.globalAlpha = .5, W.fillStyle = c(m + 10), Q(i, o, a, n), W.globalAlpha = .1, W.fillStyle = c(m), m++, Q(i, o, a, .6 * n), W.fillStyle = q.black, Q(i, o + .6 * n, a, .4 * n), W.globalAlpha = 1;
						let b = p(s, M.color),
							k = g[s].position,
							v = .6 * a / k.axis,
							w = i + .5 * a - v * k.middle.x * Math.cos(y),
							_ = o + .5 * n - v * k.middle.x * Math.sin(y);
						re(w, _, b, 1, 1, v / b.size, y, !0), x.upgradeNames[f - 1].draw(b.name, i + .9 * a / 2, o + n - 6, n / 8 - 3, q.guiwhite, "center");
						let E = "yuihjk".charAt(u);
						E && x.upgradeKeys[f - 1].draw("[" + E + "]", i + a - 4, o + n - 6, n / 8 - 3, q.guiwhite, "right"), W.strokeStyle = q.black, W.globalAlpha = 1, W.lineWidth = 3, Q(i, o, a, n, !0), ++u % 3 == 0 ? (i = l, o += n + t) : i += e * (a + t)
					});
					let b = 14,
						k = "Don't Upgrade",
						v = $(k, b - 3) + 10,
						w = (d + a + t + l - 15) / 2,
						_ = h + n + t;
					ae(w - v / 2, w + v / 2, _ + b / 2, b + s.graphical.barChunk, q.black), ae(w - v / 2, w + v / 2, _ + b / 2, b, q.white), x.skipUpgrades.draw(k, w, _ + b / 2, b - 2, q.guiwhite, "center", !0), r.clickables.skipUpgrades.place(0, (w - v / 2) * K, _ * K, v * K, b * K)
				} else r.canUpgrade = !1, r.clickables.upgrade.hide(), r.clickables.skipUpgrades.hide()
			}
			r.screenWidth *= K, r.screenHeight *= K, W.scale(1 / K, 1 / K), v.lastrender = B()
		}
	})();
	var ie, oe, se, le;
	const ce = (() => {
		let e = {
			taunt: Z(),
			level: Z(),
			score: Z(),
			time: Z(),
			kills: Z(),
			death: Z(),
			playagain: Z()
		};
		return () => {
			X(q.black, .25);
			let t = r.screenWidth / 2,
				a = r.screenHeight / 2 - 50,
				i = p(M.type, M.color),
				o = g[M.type].position,
				s = 140 / o.axis,
				l = r.screenWidth / 2 - s * o.middle.x * .707,
				c = r.screenHeight / 2 - 35 + s * o.middle.x * .707;
			re(l - 190 - 70, c - 10, i, 1.5, 1, .5 * s / i.realSize, -Math.PI / 4, !0), e.taunt.draw("lol you died", t, a - 80, 8, q.guiwhite, "center"), e.level.draw("Level " + M.__s.getLevel() + " " + g[M.type].name + ".", t - 170, a - 30, 24, q.guiwhite), e.score.draw("Final score: " + n.formatLargeNumber(Math.round(r.finalScore.get())), t - 170, a + 25, 50, q.guiwhite), e.time.draw("⌚ Survived for " + n.timeForHumans(Math.round(r.finalLifetime.get())) + ".", t - 170, a + 55, 16, q.guiwhite), e.kills.draw((() => {
				let e = [Math.round(r.finalKills[0].get()), Math.round(r.finalKills[1].get()), Math.round(r.finalKills[2].get())],
					t = e[0] + .5 * e[1] + 3 * e[2],
					a = (0 === t ? "🌼" : t < 4 ? "🎯" : t < 8 ? "💥" : t < 15 ? "💢" : t < 25 ? "🔥" : t < 50 ? "💣" : t < 75 ? "👺" : t < 100 ? "🌶️" : "💯") + " ";
				if (0 === t) return a + "A true pacifist";
				let n = [];
				return e[0] && n.push(e[0] + " kills"), e[1] && n.push(e[1] + " assists"), e[2] && n.push(e[2] + " visitors defeated"), a + n.join(" and ")
			})(), t - 170, a + 77, 16, q.guiwhite), e.death.draw((() => r.finalKillers.length ? "🔪 Succumbed to " + r.finalKillers.map(e => n.addArticle(g[e].name))
				.join(" and ") + "." : "🤷 Well that was kinda dumb huh")(), t - 170, a + 99, 16, q.guiwhite);
			let d = Math.ceil((r.diedOn + 3e3 - Date.now()) / 1e3);
			e.playagain.draw(d > 0 ? `You may respawn in ${d} second${1===d?"":"s"}.` : r.mobile ? "Tap to respawn!" : "Press enter to respawn!", t, a + 125, 16, q.guiwhite, "center")
		}
	})();
	window.onbeforeunload = (() => !(!r.isInGame || r.died) || null);
	r.createProfile = (() => {
		let e = {
			upgradeName: Z(),
			upgradeKey: Z()
		};
		return (t, a = 0, r = 200, n = -Math.PI / 4) => {
			let i = W.canvas.width = r,
				o = W.canvas.height = r,
				s = a;
			W.fillStyle = q.white, W.fillRect(0, 0, i, o), W.globalAlpha = .5, W.fillStyle = c(s + 10), Q(0, 0, i, o), W.globalAlpha = .1, W.fillStyle = c(s), Q(0, 0, i, .6 * o), W.fillStyle = q.black, Q(0, .6 * o, i, .4 * o), W.globalAlpha = 1;
			let l = p(t, M.color),
				d = g[t].position,
				h = .6 * i / d.axis,
				u = .5 * i - h * d.middle.x * Math.cos(n),
				m = .5 * o - h * d.middle.x * Math.sin(n);
			re(u, m, l, 1, 1, h / l.size, n, !0), e.upgradeName.draw(l.name, .9 * i / 2, o - 6, o / 8 - 3, q.guiwhite, "center");
			let f = "yuihjk".charAt(a);
			return f && e.upgradeKey.draw("[" + f + "]", i - 4, o - 6, o / 8 - 3, q.guiwhite, "right"), W.strokeStyle = q.black, W.globalAlpha = 1, W.lineWidth = 3, Q(0, 0, i, o, !0), W.canvas.toDataURL()
		}
	})();
	const de = (() => {
			let e = {
				connecting: Z(),
				message: Z()
			};
			return () => {
				X(q.white, .5), e.connecting.draw("Connecting...", r.screenWidth / 2, r.screenHeight / 2, 30, q.guiwhite, "center"), e.message.draw(r.message, r.screenWidth / 2, r.screenHeight / 2 + 30, 15, q.lgreen, "center")
			}
		})(),
		he = (() => {
			let e = {
				disconnected: Z(),
				message: Z()
			};
			return () => {
				X(l(q.red, q.guiblack, .3), .25), e.disconnected.draw("💀 Disconnected 💀", r.screenWidth / 2, r.screenHeight / 2, 30, q.guiwhite, "center"), e.message.draw(r.message, r.screenWidth / 2, r.screenHeight / 2 + 30, 15, q.orange, "center")
			}
		})();

	function ue() {
		r.animLoopHandle = window.requestAnimFrame(ue), m.renderv += (m.view - m.renderv) / 30, W.lineCap = "round", W.lineJoin = "round", r.gameStart && !r.disconnected && (r.time = B(), r.time - w > 1e3 && (w = r.time, v.rendertime = _, _ = 0, v.updatetime = x, x = 0), v.lag = r.time - m.time), r.gameStart ? ne(U()) : r.disconnected || de(), r.died && ce(), r.disconnected && he()
	}
}]);