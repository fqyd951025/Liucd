System.register([], function () {
  'use strict';
  return {
    execute: function () {

      System.register("project:///assets/CubeTs.ts", ["cc"], function (_export, _context) {

        var _decorator, Component, systemEvent, SystemEvent, v3, Prefab, instantiate, v2, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, ccclass, property, list, CubeTs;

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
            v3 = _cc.v3;
            Prefab = _cc.Prefab;
            instantiate = _cc.instantiate;
            v2 = _cc.v2;
          }],
          execute: function () {
            cc._RF.push(window.module || {}, "b3ae9S6ZK5GWJHt/gztNAj2", "CubeTs"); // begin CubeTs


            ccclass = _decorator.ccclass;
            property = _decorator.property;
            list = [v3(0, 0, 0), v3(1, 0, 0), v3(0, 1, 0), v3(-1, 0, 0), v3(0, -1, 0), v3(1, 1, 0), v3(1, -1, 0), v3(-1, 1, 0), v3(-1, -1, 0), v3(0, 0, 1), v3(1, 0, 1), v3(0, 1, 1), v3(-1, 0, 1), v3(0, -1, 1), v3(1, 1, 1), v3(1, -1, 1), v3(-1, 1, 1), v3(-1, -1, 1), v3(0, 0, -1), v3(1, 0, -1), v3(0, 1, -1), v3(-1, 0, -1), v3(0, -1, -1), v3(1, 1, -1), v3(1, -1, -1), v3(-1, 1, -1), v3(-1, -1, -1)];

            _export("CubeTs", CubeTs = (_dec = ccclass("CubeTs"), _dec2 = property({
              type: Prefab
            }), _dec3 = property({
              type: Boolean
            }), _dec4 = property({
              type: v3
            }), _dec5 = property({
              type: v3
            }), _dec6 = property({
              type: v2
            }), _dec(_class = (_class2 = (_temp =
            /*#__PURE__*/
            function (_Component) {
              babelHelpers.inherits(CubeTs, _Component);

              function CubeTs() {
                var _babelHelpers$getProt;

                var _this;

                babelHelpers.classCallCheck(this, CubeTs);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(CubeTs)).call.apply(_babelHelpers$getProt, [this].concat(args)));
                babelHelpers.initializerDefineProperty(_this, "cube", _descriptor, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "isMouseUp", _descriptor2, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "pos", _descriptor3, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "upPos", _descriptor4, babelHelpers.assertThisInitialized(_this));
                babelHelpers.initializerDefineProperty(_this, "startPos", _descriptor5, babelHelpers.assertThisInitialized(_this));
                return _this;
              }

              babelHelpers.createClass(CubeTs, [{
                key: "start",
                value: function start() {
                  systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this);
                  systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
                  systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMousUp, this);

                  for (var i = 0; i < list.length; i++) {
                    var node = instantiate(this.cube);
                    node.parent = this.node;
                    node.position = list[i];
                  }

                  this.pos = v3(30, 30, 30); // this.node.setRotationFromEuler(this.pos.x, this.pos.y, this.pos.z);

                  this.node.setWorldRotationFromEuler(this.pos.x, this.pos.y, this.pos.z);
                }
              }, {
                key: "onMouseDown",
                value: function onMouseDown(tag) {
                  this.startPos = v2(tag._x, tag._y);
                  this.isMouseUp = false;
                  console.log("onMouseDown x = ".concat(this.node.rotation.x, " y = ").concat(this.node.rotation.y));
                }
              }, {
                key: "onMousUp",
                value: function onMousUp() {
                  this.isMouseUp = true;
                  this.pos = v3(this.upPos.x, this.upPos.y, this.upPos.z);
                }
              }, {
                key: "onMouseMove",
                value: function onMouseMove(tag) {
                  if (this.isMouseUp) return;
                  var q = 0.5;
                  var ox = tag._x - this.startPos.x;
                  var oy = tag._y - this.startPos.y;
                  console.log("onMouseMove ox = ".concat(ox, " oy = ").concat(oy));
                  var x = this.pos.x - oy * q;
                  var y = this.pos.y + ox * q;
                  var z = this.pos.z;
                  this.upPos.x = x;
                  this.upPos.y = y;
                  this.upPos.z = z; // this.node.setRotationFromEuler(x, y, z);

                  this.node.setWorldRotationFromEuler(x, y, z);
                  console.log("onMouseMove ratation = ".concat(JSON.stringify(this.node.rotation)));
                }
              }]);
              return CubeTs;
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
            }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "pos", [_dec4], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return v3(30, 30, 30);
              }
            }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "upPos", [_dec5], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return v3(30, 30, 30);
              }
            }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "startPos", [_dec6], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function initializer() {
                return v2(0, 0);
              }
            })), _class2)) || _class));

            cc._RF.pop(); // end CubeTs

          }
        };
      });

    }
  };
});
