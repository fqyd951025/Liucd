System.register([], function () {
  'use strict';
  return {
    execute: function () {

      System.register("project:///assets/script/CubeParams.ts", ["cc"], function (_export, _context) {

        var _decorator, v3, _dec, _class, ccclass, property, list1, list2, list3, list, CubeParams;

        _export({
          _dec: void 0,
          _class: void 0
        });

        return {
          setters: [function (_cc) {
            _decorator = _cc._decorator;
            v3 = _cc.v3;
          }],
          execute: function () {
            cc._RF.push(window.module || {}, "886e1QhaOtGOojT73+jkzhF", "CubeParams"); // begin CubeParams


            ccclass = _decorator.ccclass;
            property = _decorator.property;
            list1 = [// //1个颜色的
            {
              _pos: v3(0, 0, 0),
              _color: [0],
              _rotation: v3(0, 0, 0)
            }, {
              _pos: v3(0, 0, 1),
              _color: [1],
              _rotation: v3(0, 0, 0)
            }, {
              _pos: v3(0, 1, 0),
              _color: [2],
              _rotation: v3(-90, 0, 0)
            }, {
              _pos: v3(1, 0, 0),
              _color: [3],
              _rotation: v3(0, 90, 0)
            }, {
              _pos: v3(-1, 0, 0),
              _color: [4],
              _rotation: v3(0, -90, 0)
            }, {
              _pos: v3(0, 0, -1),
              _color: [5],
              _rotation: v3(0, 180, 0)
            }, {
              _pos: v3(0, -1, 0),
              _color: [6],
              _rotation: v3(90, 0, 0)
            }];
            list2 = [//2个颜色的
            {
              _pos: v3(0, 1, 1),
              _color: [1, 2],
              _rotation: v3(0, 0, 0)
            }, {
              _pos: v3(1, 1, 0),
              _color: [3, 2],
              _rotation: v3(0, 90, 0)
            }, {
              _pos: v3(0, 1, -1),
              _color: [5, 2],
              _rotation: v3(0, 180, 0)
            }, {
              _pos: v3(-1, 1, 0),
              _color: [4, 2],
              _rotation: v3(0, -90, 0)
            }, {
              _pos: v3(1, 0, 1),
              _color: [1, 3],
              _rotation: v3(0, 0, -90)
            }, {
              _pos: v3(1, 0, -1),
              _color: [3, 5],
              _rotation: v3(0, 90, -90)
            }, {
              _pos: v3(-1, 0, -1),
              _color: [5, 4],
              _rotation: v3(0, 180, -90)
            }, {
              _pos: v3(-1, 0, 1),
              _color: [4, 1],
              _rotation: v3(0, -90, -90)
            }, {
              _pos: v3(0, -1, 1),
              _color: [1, 6],
              _rotation: v3(0, 0, 180)
            }, {
              _pos: v3(1, -1, 0),
              _color: [3, 6],
              _rotation: v3(0, 90, 180)
            }, {
              _pos: v3(0, -1, -1),
              _color: [5, 6],
              _rotation: v3(0, 180, 180)
            }, {
              _pos: v3(-1, -1, 0),
              _color: [4, 6],
              _rotation: v3(0, -90, 180)
            }];
            list3 = [//3个颜色的
            {
              _pos: v3(1, 1, 1),
              _color: [1, 2, 3],
              _rotation: v3(0, 0, 0)
            }, {
              _pos: v3(1, 1, -1),
              _color: [3, 2, 5],
              _rotation: v3(0, 90, 0)
            }, {
              _pos: v3(-1, 1, -1),
              _color: [5, 2, 4],
              _rotation: v3(0, 180, 0)
            }, {
              _pos: v3(-1, 1, 1),
              _color: [4, 2, 1],
              _rotation: v3(0, -90, 0)
            }, {
              _pos: v3(1, -1, 1),
              _color: [1, 3, 6],
              _rotation: v3(0, 0, -90)
            }, {
              _pos: v3(1, -1, -1),
              _color: [3, 5, 6],
              _rotation: v3(0, 90, -90)
            }, {
              _pos: v3(-1, -1, -1),
              _color: [5, 4, 6],
              _rotation: v3(0, 180, -90)
            }, {
              _pos: v3(-1, -1, 1),
              _color: [4, 1, 6],
              _rotation: v3(0, -90, -90)
            }];
            list = [];

            _export("CubeParams", CubeParams = (_dec = ccclass("CubeParams"), _dec(_class =
            /*#__PURE__*/
            function () {
              function CubeParams() {
                babelHelpers.classCallCheck(this, CubeParams);
              }

              babelHelpers.createClass(CubeParams, null, [{
                key: "getParams",
                value: function getParams() {
                  return list;
                }
              }, {
                key: "setCurrParams",
                value: function setCurrParams() {
                  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

                  switch (type) {
                    case 0:
                      list = list3.concat(list1).concat(list2);
                      break;

                    case 1:
                      list = list1;
                      break;

                    case 2:
                      list = list2;
                      break;

                    case 3:
                      list = list3;
                      break;

                    default:
                      break;
                  }
                }
              }]);
              return CubeParams;
            }()) || _class));

            cc._RF.pop(); // end CubeParams

          }
        };
      });

      System.register("project:///assets/script/MainUI.ts", ["cc", "./CubeParams.ts"], function (_export, _context) {

        var _decorator, Component, ButtonComponent, CubeParams, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, ccclass, property, MainUI;

        _export({
          _dec: void 0,
          _dec2: void 0,
          _dec3: void 0,
          _dec4: void 0,
          _dec5: void 0,
          _class: void 0,
          _class2: void 0,
          _descriptor: void 0,
          _descriptor2: void 0,
          _descriptor3: void 0,
          _descriptor4: void 0,
          _temp: void 0
        });

        return {
          setters: [function (_cc) {
            _decorator = _cc._decorator;
            Component = _cc.Component;
            ButtonComponent = _cc.ButtonComponent;
          }, function (_CubeParamsTs) {
            CubeParams = _CubeParamsTs.CubeParams;
          }],
          execute: function () {
            cc._RF.push(window.module || {}, "b60a8z69dtLwIb21DA7LoWO", "MainUI"); // begin MainUI


            ccclass = _decorator.ccclass;
            property = _decorator.property;

            _export("MainUI", MainUI = (_dec = ccclass("MainUI"), _dec2 = property({
              type: ButtonComponent
            }), _dec3 = property({
              type: ButtonComponent
            }), _dec4 = property({
              type: ButtonComponent
            }), _dec5 = property({
              type: ButtonComponent
            }), _dec(_class = (_class2 = (_temp =
            /*#__PURE__*/
            function (_Component) {
              babelHelpers.inherits(MainUI, _Component);

              function MainUI() {
                var _babelHelpers$getProt;

                var _this;

                babelHelpers.classCallCheck(this, MainUI);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(MainUI)).call.apply(_babelHelpers$getProt, [this].concat(args)));
                babelHelpers.initializerDefineProperty(_this, "btn1", _descriptor, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "btn2", _descriptor2, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "btn3", _descriptor3, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "btn4", _descriptor4, babelHelpers.assertThisInitialized(_this));
                return _this;
              }

              babelHelpers.createClass(MainUI, [{
                key: "start",
                value: function start() {
                  this.initClickEvent(); // this.node.pauseSystemEvents(true);
                  // this.node.resumeSystemEvents(true);
                }
              }, {
                key: "initClickEvent",
                value: function initClickEvent() {
                  this.btn1.node.on("click", this.onBtn1Event, this);
                  this.btn2.node.on("click", this.onBtn2Event, this);
                  this.btn3.node.on("click", this.onBtn3Event, this);
                  this.btn4.node.on("click", this.onBtn4Event, this);
                }
              }, {
                key: "onBtn1Event",
                value: function onBtn1Event() {
                  console.log("MainUI onBtn1Event");
                  CubeParams.setCurrParams(1);
                  CubeParams.moFang.node.emit("MoFangMainInit", true, this);
                }
              }, {
                key: "onBtn2Event",
                value: function onBtn2Event() {
                  console.log("MainUI onBtn2Event");
                  CubeParams.setCurrParams(2);
                  CubeParams.moFang.node.emit("MoFangMainInit", true, this);
                }
              }, {
                key: "onBtn3Event",
                value: function onBtn3Event() {
                  console.log("MainUI onBtn3Event");
                  CubeParams.setCurrParams(3);
                  CubeParams.moFang.node.emit("MoFangMainInit", true, this);
                }
              }, {
                key: "onBtn4Event",
                value: function onBtn4Event() {
                  console.log("MainUI onBtn4Event");
                  CubeParams.setCurrParams(0);
                  CubeParams.moFang.node.emit("MoFangMainInit", true, this);
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  this.btn1.node.off("click", this.onBtn1Event, this);
                  this.btn2.node.off("click", this.onBtn2Event, this);
                  this.btn3.node.off("click", this.onBtn3Event, this);
                  this.btn4.node.off("click", this.onBtn4Event, this);
                } // update (deltaTime: number) {
                //     // Your update function goes here.
                // }

              }]);
              return MainUI;
            }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "btn1", [_dec2], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "btn2", [_dec3], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "btn3", [_dec4], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "btn4", [_dec5], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            })), _class2)) || _class));

            cc._RF.pop(); // end MainUI

          }
        };
      });

      System.register("project:///assets/script/Cube.ts", ["cc"], function (_export, _context) {

        var _decorator, Component, Material, ModelComponent, find, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, Cube;

        _export({
          _dec: void 0,
          _dec2: void 0,
          _class: void 0,
          _class2: void 0,
          _descriptor: void 0,
          _temp: void 0
        });

        return {
          setters: [function (_cc) {
            _decorator = _cc._decorator;
            Component = _cc.Component;
            Material = _cc.Material;
            ModelComponent = _cc.ModelComponent;
            find = _cc.find;
          }],
          execute: function () {
            cc._RF.push(window.module || {}, "b66fa721SdM+pOj69I1QMe9", "Cube"); // begin Cube


            ccclass = _decorator.ccclass;
            property = _decorator.property;

            _export("Cube", Cube = (_dec = ccclass("Cube"), _dec2 = property({
              type: [Material]
            }), _dec(_class = (_class2 = (_temp =
            /*#__PURE__*/
            function (_Component) {
              babelHelpers.inherits(Cube, _Component);

              function Cube() {
                var _babelHelpers$getProt;

                var _this;

                babelHelpers.classCallCheck(this, Cube);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(Cube)).call.apply(_babelHelpers$getProt, [this].concat(args)));
                babelHelpers.initializerDefineProperty(_this, "material", _descriptor, babelHelpers.assertThisInitialized(_this));
                return _this;
              }

              babelHelpers.createClass(Cube, [{
                key: "start",
                value: function start() {// console.log(`Cube start`);
                }
              }, {
                key: "init",
                value: function init(colors) {
                  // console.log(`Cube init colors = ${JSON.stringify(colors)}`);
                  for (var i = 0; i < colors.length; i++) {
                    var quad = find("NewQuad" + (i + 1), this.node);
                    var comp = quad.getComponent(ModelComponent);
                    comp.material = this.material[colors[i]];
                  }
                }
              }]);
              return Cube;
            }(Component), _temp), _descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "material", [_dec2], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _class2)) || _class));

            cc._RF.pop(); // end Cube

          }
        };
      });

      System.register("project:///assets/script/MoFangMain.ts", ["cc", "./CubeParams.ts"], function (_export, _context) {

        var _decorator, Component, systemEvent, SystemEvent, v2, v3, instantiate, Prefab, CCBoolean, CubeParams, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, ccclass, property, MoFangMain;

        _export({
          _dec: void 0,
          _dec2: void 0,
          _dec3: void 0,
          _dec4: void 0,
          _dec5: void 0,
          _dec6: void 0,
          _class: void 0,
          _class2: void 0,
          _descriptor: void 0,
          _descriptor2: void 0,
          _descriptor3: void 0,
          _descriptor4: void 0,
          _descriptor5: void 0,
          _temp: void 0
        });

        return {
          setters: [function (_cc) {
            _decorator = _cc._decorator;
            Component = _cc.Component;
            systemEvent = _cc.systemEvent;
            SystemEvent = _cc.SystemEvent;
            v2 = _cc.v2;
            v3 = _cc.v3;
            instantiate = _cc.instantiate;
            Prefab = _cc.Prefab;
            CCBoolean = _cc.CCBoolean;
          }, function (_CubeParamsTs) {
            CubeParams = _CubeParamsTs.CubeParams;
          }],
          execute: function () {
            cc._RF.push(window.module || {}, "97dfctE2M9Gy41r/VzoLXW6", "MoFangMain"); // begin MoFangMain


            ccclass = _decorator.ccclass;
            property = _decorator.property;

            _export("MoFangMain", MoFangMain = (_dec = ccclass("MoFangMain"), _dec2 = property({
              type: Prefab
            }), _dec3 = property({
              type: CCBoolean
            }), _dec4 = property({
              type: v3
            }), _dec5 = property({
              type: v3
            }), _dec6 = property({
              type: v2
            }), _dec(_class = (_class2 = (_temp =
            /*#__PURE__*/
            function (_Component) {
              babelHelpers.inherits(MoFangMain, _Component);

              function MoFangMain() {
                var _babelHelpers$getProt;

                var _this;

                babelHelpers.classCallCheck(this, MoFangMain);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(MoFangMain)).call.apply(_babelHelpers$getProt, [this].concat(args)));
                babelHelpers.initializerDefineProperty(_this, "cube", _descriptor, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "isMouseUp", _descriptor2, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "moFangRota", _descriptor3, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "upPos", _descriptor4, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "startPos", _descriptor5, babelHelpers.assertThisInitialized(_this));
                return _this;
              }

              babelHelpers.createClass(MoFangMain, [{
                key: "__preload",
                value: function __preload() {
                  CubeParams.moFang = this;
                }
              }, {
                key: "start",
                value: function start() {
                  CubeParams.setCurrParams(0);
                  this.initListerEvent();
                  this.init();
                  this.node.on("MoFangMainInit", this.init, this);
                }
              }, {
                key: "init",
                value: function init() {
                  console.log("MoFangMain init");
                  this.isMouseUp = true;
                  this.moFangRota = v3(30, 30, 0);
                  this.node.removeAllChildren();
                  this.node.setRotationFromEuler(0, 0, 0);
                  this.initQuat();
                  this.node.setRotationFromEuler(this.moFangRota.x, this.moFangRota.y, this.moFangRota.z);
                }
              }, {
                key: "initListerEvent",
                value: function initListerEvent() {
                  systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this);
                  systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
                  systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMousUp, this);
                  systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onMouseDown, this);
                  systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onMouseMove, this);
                  systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onMousUp, this);
                }
              }, {
                key: "initQuat",
                value: function initQuat() {
                  var currlist = CubeParams.getParams();

                  for (var i = 0; i < currlist.length; i++) {
                    var node = instantiate(this.cube);
                    var comp = node.getComponent(node.name);
                    var rota = currlist[i]._rotation;
                    node.parent = this.node;
                    node.position = currlist[i]._pos;
                    comp.init(currlist[i]._color);
                    node.setRotationFromEuler(rota.x, rota.y, rota.z);
                  }
                }
              }, {
                key: "onMouseDown",
                value: function onMouseDown(tag) {
                  if (!this.isMouseUp) return;
                  this.isMouseUp = false;
                  var obj = this.getTag(tag);
                  this.startPos = v2(obj.x, obj.y); // console.log(`MoFangMain onMouseDown`);
                }
              }, {
                key: "onMouseMove",
                value: function onMouseMove(tag) {
                  if (this.isMouseUp) return;
                  var obj = this.getTag(tag);
                  var q = 0.5;
                  var ox = obj.x - this.startPos.x;
                  var oy = obj.y - this.startPos.y;
                  var x = this.moFangRota.x - oy * q;
                  var y = this.moFangRota.y + ox * q;
                  var z = this.moFangRota.z;
                  this.upPos.x = x;
                  this.upPos.y = y;
                  this.upPos.z = z;
                  this.node.setRotationFromEuler(x, y, z); // console.log(`MoFangMain onMouseMove ox = ${ox} oy = ${oy}`);
                }
              }, {
                key: "onMousUp",
                value: function onMousUp() {
                  this.isMouseUp = true;
                  this.moFangRota = v3(this.upPos.x, this.upPos.y, this.upPos.z); // console.log(`MoFangMain onMousUp moFangRota = ${JSON.stringify(this.moFangRota)}`);
                }
              }, {
                key: "getTag",
                value: function getTag(tag) {
                  var obj = {
                    x: 0,
                    y: 0
                  };

                  if (tag) {
                    obj.x = tag._point ? tag._point.x : tag._x;
                    obj.y = tag._point ? tag._point.y : tag._y;
                  }

                  return obj;
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  systemEvent.off(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this);
                  systemEvent.off(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
                  systemEvent.off(SystemEvent.EventType.MOUSE_UP, this.onMousUp, this);
                  systemEvent.off(SystemEvent.EventType.TOUCH_START, this.onMouseDown, this);
                  systemEvent.off(SystemEvent.EventType.TOUCH_MOVE, this.onMouseMove, this);
                  systemEvent.off(SystemEvent.EventType.TOUCH_END, this.onMousUp, this);
                }
              }]);
              return MoFangMain;
            }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "cube", [_dec2], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "isMouseUp", [_dec3], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return true;
              }
            }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "moFangRota", [_dec4], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return v3(0, 0, 0);
              }
            }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "upPos", [_dec5], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return v3(0, 0, 0);
              }
            }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "startPos", [_dec6], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return v2(0, 0);
              }
            })), _class2)) || _class));

            cc._RF.pop(); // end MoFangMain

          }
        };
      });

    }
  };
});
