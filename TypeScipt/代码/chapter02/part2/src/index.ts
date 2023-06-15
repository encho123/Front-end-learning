// 引入样式
import './style/index.less';
// //引入Food模块
// import Food from './moduls/Food';
// //引入分数和等级模块
// import ScorePanel from './moduls/ScorePanel';
// //引入蛇模块
// import Snake from './moduls/Snake';
//上面的引入在GameControl.ts中已经引入了
//引入游戏控制器模块
import GameControl from "./moduls/GameControl";

new GameControl();

// setInterval(() => {
//     console.log(gameControl.direction);
// }, 1000);

