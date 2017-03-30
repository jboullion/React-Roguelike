'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//NOTE: I have no idea if this is an appropriate way to create weapons, but I did it anyway to get some practice with static getters that allow me to access an object without parans (Weapons.fist)

//Weapons class
/*
class Weapons {
  static get fist() {
    return {
      name: 'Fist',
      attack: 1,
      range: 1
    };
  }

  static get hammer() {
    return {
      name: 'Hammer',
      attack: 2,
      range: 1
    };
  }

  static get axe() {
    return {
      name: 'Axe',
      attack: 3,
      range: 1
    };
  }
}

//Weapon Const.
const FIST = Weapons.fist,
      HAMMER = Weapons.hammer,
      AXE = Weapons.axe;
*/
var FIST = {
  name: 'Fist',
  attack: 1,
  range: 1
},
    HAMMER = {
  name: 'Hammer',
  attack: 2,
  range: 1
},
    AXE = {
  name: 'Axe',
  attack: 3,
  range: 1
},
    SWORD = {
  name: 'Sword',
  attack: 4,
  range: 1
};

function Info(props) {
  console.log(props);
  return React.createElement(
    'div',
    { id: 'info' },
    React.createElement(
      'div',
      { className: 'info' },
      'Level: ',
      props.player.level
    ),
    React.createElement(
      'div',
      { className: 'info' },
      'Experience: ',
      props.player.exp
    ),
    React.createElement(
      'div',
      { className: 'info' },
      'Next Lvl: ',
      (props.player.level + 1) * 100 - props.player.exp
    ),
    React.createElement(
      'div',
      { className: 'info' },
      'Health: ',
      props.player.health
    ),
    React.createElement(
      'div',
      { className: 'info' },
      'Weapon: ',
      props.player.weapon.name
    )
  );
}

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      width: 100,
      height: 50,
      level: 1,
      player: {
        level: 1,
        health: 10,
        weapon: FIST,
        exp: 10
      }
    };

    _this.update = _this.update.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'update',
    value: function update() {}
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Info, {
          player: this.state.player })
      );
    }
  }]);

  return App;
}(React.Component);

// ========================================

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

// ====================================
//              FUNCTIONS
// ====================================

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}