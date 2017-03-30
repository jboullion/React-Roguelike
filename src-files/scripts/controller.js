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
const FIST = {
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
	return (
		<div id="info">
			<div className="info">
        Level: {props.player.level}
      </div>
      <div className="info">
        Experience: {props.player.exp}
      </div>
      <div className="info">
        Next Lvl: {((props.player.level+1)*100) - props.player.exp}
      </div>
      <div className="info">
        Health: {props.player.health}
      </div>
      <div className="info">
        Weapon: {props.player.weapon.name}
      </div>
		</div>
	);
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
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

		this.update = this.update.bind(this);
	}

	update(){

	}

	render() {
		return (
			<div>
				<Info
          player={this.state.player} />
			</div>
		)
	}
}


// ========================================

ReactDOM.render(
	<App />,
	document.getElementById('app')
);



// ====================================
//              FUNCTIONS
// ====================================

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
