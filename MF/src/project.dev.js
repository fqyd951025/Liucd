System.register([], function () {
  'use strict';
  return {
    execute: function () {

      System.register("project:///assets/script/Quad1.ts", ["cc"], function (_export, _context) {

        var _decorator, Component, Material, ModelComponent, find, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, Quad1;

        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
        }

        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }

        function _iterableToArrayLimit(arr, i) {
          if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
            return;
          }

          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

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
            cc._RF.push(window.module || {}, "b66fa721SdM+pOj69I1QMe9", "Quad1"); // begin Quad1


            ccclass = _decorator.ccclass;
            property = _decorator.property;

            _export("Quad1", Quad1 = (_dec = ccclass("Quad1"), _dec2 = property({
              type: [Material]
            }), _dec(_class = (_class2 = (_temp =
            /*#__PURE__*/
            function (_Component) {
              babelHelpers.inherits(Quad1, _Component);

              function Quad1() {
                var _babelHelpers$getProt;

                var _this;

                babelHelpers.classCallCheck(this, Quad1);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(Quad1)).call.apply(_babelHelpers$getProt, [this].concat(args)));
                babelHelpers.initializerDefineProperty(_this, "material", _descriptor, babelHelpers.assertThisInitialized(_this));
                return _this;
              }

              babelHelpers.createClass(Quad1, [{
                key: "start",
                value: function start() {
                  console.log("Quad1 start");
                }
              }, {
                key: "init",
                value: function init(material) {
                  console.log("Quad1 init material = ".concat(JSON.stringify(material)));

                  var _material = _slicedToArray(material, 3),
                      mat1 = _material[0],
                      mat2 = _material[1],
                      mat3 = _material[2];

                  var newQuad1 = find("NewQuad1", this.node);
                  var newQuad2 = find("NewQuad2", this.node);
                  var newQuad3 = find("NewQuad3", this.node);

                  if (newQuad1 && newQuad2 && newQuad3) {
                    var comp1 = newQuad1.getComponent(ModelComponent);
                    var comp2 = newQuad2.getComponent(ModelComponent);
                    var comp3 = newQuad3.getComponent(ModelComponent);
                    comp1.material = this.material[mat1];
                    comp2.material = this.material[mat2];
                    comp3.material = this.material[mat3];
                  }
                }
              }]);
              return Quad1;
            }(Component), _temp), _descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "material", [_dec2], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _class2)) || _class));

            cc._RF.pop(); // end Quad1

          }
        };
      });

      System.register("project:///assets/script/Quad2.ts", ["cc"], function (_export, _context) {

        var _decorator, Component, Material, ModelComponent, find, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, Quad2;

        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
        }

        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }

        function _iterableToArrayLimit(arr, i) {
          if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
            return;
          }

          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

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
            cc._RF.push(window.module || {}, "4e97bpsatFOob0pDhlWPnyz", "Quad2"); // begin Quad2


            ccclass = _decorator.ccclass;
            property = _decorator.property;

            _export("Quad2", Quad2 = (_dec = ccclass("Quad2"), _dec2 = property({
              type: [Material]
            }), _dec(_class = (_class2 = (_temp =
            /*#__PURE__*/
            function (_Component) {
              babelHelpers.inherits(Quad2, _Component);

              function Quad2() {
                var _babelHelpers$getProt;

                var _this;

                babelHelpers.classCallCheck(this, Quad2);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(Quad2)).call.apply(_babelHelpers$getProt, [this].concat(args)));
                babelHelpers.initializerDefineProperty(_this, "material", _descriptor, babelHelpers.assertThisInitialized(_this));
                return _this;
              }

              babelHelpers.createClass(Quad2, [{
                key: "start",
                value: function start() {
                  console.log("Quad2 start");
                }
              }, {
                key: "init",
                value: function init(material) {
                  console.log("Quad2 init material = ".concat(JSON.stringify(material)));

                  var _material = _slicedToArray(material, 2),
                      mat1 = _material[0],
                      mat2 = _material[1];

                  var newQuad1 = find("NewQuad1", this.node);
                  var newQuad2 = find("NewQuad2", this.node);

                  if (newQuad1 && newQuad2) {
                    var comp1 = newQuad1.getComponent(ModelComponent);
                    var comp2 = newQuad2.getComponent(ModelComponent);
                    comp1.material = this.material[mat1];
                    comp2.material = this.material[mat2];
                  }
                }
              }]);
              return Quad2;
            }(Component), _temp), _descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "material", [_dec2], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _class2)) || _class));

            cc._RF.pop(); // end Quad2

          }
        };
      });

      System.register("project:///assets/script/Quad3.ts", ["cc"], function (_export, _context) {

        var _decorator, Component, Material, ModelComponent, find, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, Quad3;

        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
        }

        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }

        function _iterableToArrayLimit(arr, i) {
          if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
            return;
          }

          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

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
            cc._RF.push(window.module || {}, "99f14WspqFDM6/jzJ8rK6zl", "Quad3"); // begin Quad3


            ccclass = _decorator.ccclass;
            property = _decorator.property;

            _export("Quad3", Quad3 = (_dec = ccclass("Quad3"), _dec2 = property({
              type: [Material]
            }), _dec(_class = (_class2 = (_temp =
            /*#__PURE__*/
            function (_Component) {
              babelHelpers.inherits(Quad3, _Component);

              function Quad3() {
                var _babelHelpers$getProt;

                var _this;

                babelHelpers.classCallCheck(this, Quad3);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(Quad3)).call.apply(_babelHelpers$getProt, [this].concat(args)));
                babelHelpers.initializerDefineProperty(_this, "material", _descriptor, babelHelpers.assertThisInitialized(_this));
                return _this;
              }

              babelHelpers.createClass(Quad3, [{
                key: "start",
                value: function start() {
                  console.log("Quad3 start");
                }
              }, {
                key: "init",
                value: function init(material) {
                  console.log("Quad3 init material = ".concat(JSON.stringify(material)));

                  var _material = _slicedToArray(material, 1),
                      mat1 = _material[0];

                  var newQuad1 = find("NewQuad1", this.node);

                  if (newQuad1) {
                    var comp = newQuad1.getComponent(ModelComponent);
                    comp.material = this.material[mat1];
                  }
                }
              }]);
              return Quad3;
            }(Component), _temp), _descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "material", [_dec2], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return [];
              }
            }), _class2)) || _class));

            cc._RF.pop(); // end Quad3

          }
        };
      });

      System.register("project:///assets/script/MoFangMain.ts", ["cc"], function (_export, _context) {

        var _decorator, Component, systemEvent, SystemEvent, v2, v3, instantiate, Prefab, CCBoolean, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, ccclass, property, list0, list1, list2, list3, MoFangMain;

        _export({
          _dec: void 0,
          _dec2: void 0,
          _dec3: void 0,
          _dec4: void 0,
          _dec5: void 0,
          _dec6: void 0,
          _dec7: void 0,
          _dec8: void 0,
          _class: void 0,
          _class2: void 0,
          _descriptor: void 0,
          _descriptor2: void 0,
          _descriptor3: void 0,
          _descriptor4: void 0,
          _descriptor5: void 0,
          _descriptor6: void 0,
          _descriptor7: void 0,
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
          }],
          execute: function () {
            cc._RF.push(window.module || {}, "97dfctE2M9Gy41r/VzoLXW6", "MoFangMain"); // begin MoFangMain


            ccclass = _decorator.ccclass;
            property = _decorator.property;
            list0 = [{
              _pos: v3(0, 0, 0),
              _color: [0],
              _rotation: v3(0, 0, 0)
            }];
            list1 = [{
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
              _color: [3, 6, 1],
              _rotation: v3(0, 0, -90)
            }, {
              _pos: v3(1, -1, -1),
              _color: [5, 6, 3],
              _rotation: v3(0, 90, -90)
            }, {
              _pos: v3(-1, -1, -1),
              _color: [4, 6, 5],
              _rotation: v3(0, 180, -90)
            }, {
              _pos: v3(-1, -1, 1),
              _color: [1, 6, 4],
              _rotation: v3(0, -90, -90)
            }];
            list2 = [{
              _pos: v3(0, 1, 1),
              _color: [1, 2],
              _rotation: v3(0, 0, 90)
            }, {
              _pos: v3(1, 1, 0),
              _color: [3, 2],
              _rotation: v3(0, 90, 90)
            }, {
              _pos: v3(0, 1, -1),
              _color: [5, 2],
              _rotation: v3(0, 180, 90)
            }, {
              _pos: v3(-1, 1, 0),
              _color: [4, 2],
              _rotation: v3(0, -90, 90)
            }, {
              _pos: v3(1, 0, 1),
              _color: [1, 3],
              _rotation: v3(0, 0, 0)
            }, {
              _pos: v3(1, 0, -1),
              _color: [3, 5],
              _rotation: v3(0, 90, 0)
            }, {
              _pos: v3(-1, 0, -1),
              _color: [5, 4],
              _rotation: v3(0, 180, 0)
            }, {
              _pos: v3(-1, 0, 1),
              _color: [4, 1],
              _rotation: v3(0, -90, 0)
            }, {
              _pos: v3(0, -1, 1),
              _color: [1, 6],
              _rotation: v3(0, 0, -90)
            }, {
              _pos: v3(1, -1, 0),
              _color: [3, 6],
              _rotation: v3(0, 90, -90)
            }, {
              _pos: v3(0, -1, -1),
              _color: [5, 6],
              _rotation: v3(0, 180, -90)
            }, {
              _pos: v3(-1, -1, 0),
              _color: [4, 6],
              _rotation: v3(0, -90, -90)
            }];
            list3 = [{
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

            _export("MoFangMain", MoFangMain = (_dec = ccclass("MoFangMain"), _dec2 = property({
              type: Prefab
            }), _dec3 = property({
              type: Prefab
            }), _dec4 = property({
              type: Prefab
            }), _dec5 = property({
              type: CCBoolean
            }), _dec6 = property({
              type: v3
            }), _dec7 = property({
              type: v3
            }), _dec8 = property({
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
                babelHelpers.initializerDefineProperty(_this, "quad1", _descriptor, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "quad2", _descriptor2, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "quad3", _descriptor3, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "isMouseUp", _descriptor4, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "moFangPos", _descriptor5, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "upPos", _descriptor6, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "startPos", _descriptor7, babelHelpers.assertThisInitialized(_this));
                return _this;
              }

              babelHelpers.createClass(MoFangMain, [{
                key: "start",
                value: function start() {
                  systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this);
                  systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
                  systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMousUp, this);
                  systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onMouseDown, this);
                  systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onMouseMove, this);
                  systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onMousUp, this);
                  this.initQuat(this.quad1, list1);
                  this.initQuat(this.quad2, list2);
                  this.initQuat(this.quad3, list3);
                  this.initQuat(this.quad3, list0);
                  this.isMouseUp = true;
                  this.moFangPos = v3(30, 30, 0);
                  this.node.setRotationFromEuler(this.moFangPos.x, this.moFangPos.y, this.moFangPos.z);
                }
              }, {
                key: "initQuat",
                value: function initQuat(_quad, list) {
                  for (var i = 0; i < list.length; i++) {
                    var node = instantiate(_quad);
                    var comp = node.getComponent(node.name);
                    var rota = list[i]._rotation;
                    node.parent = this.node;
                    node.position = list[i]._pos;
                    node.setRotationFromEuler(rota.x, rota.y, rota.z);
                    comp.init(list[i]._color);
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
                  var x = this.moFangPos.x - oy * q;
                  var y = this.moFangPos.y + ox * q;
                  var z = this.moFangPos.z;
                  this.upPos.x = x;
                  this.upPos.y = y;
                  this.upPos.z = z;
                  this.node.setRotationFromEuler(x, y, z); // console.log(`MoFangMain onMouseMove ox = ${ox} oy = ${oy}`);
                }
              }, {
                key: "onMousUp",
                value: function onMousUp() {
                  this.isMouseUp = true;
                  this.moFangPos = v3(this.upPos.x, this.upPos.y, this.upPos.z);
                  console.log("MoFangMain onMousUp moFangPos = ".concat(JSON.stringify(this.moFangPos)));
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
              }]);
              return MoFangMain;
            }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "quad1", [_dec2], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "quad2", [_dec3], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "quad3", [_dec4], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return null;
              }
            }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "isMouseUp", [_dec5], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return true;
              }
            }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "moFangPos", [_dec6], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return v3(0, 0, 0);
              }
            }), _descriptor6 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "upPos", [_dec7], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return v3(0, 0, 0);
              }
            }), _descriptor7 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "startPos", [_dec8], {
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
