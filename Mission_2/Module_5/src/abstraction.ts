//two way to define abstraction
// 1.interface
// 2.abstract class

//idea
// interface MediaPlayer {
//   play() : void ;
//   pause() : void ;
//   stop() : void ;
// }


//implements
// 

//2.useing abstract class
 
//idea/should follow child class
abstract class MediaPlayer {
  abstract play():void;
  abstract pause():void;
  abstract stop(): void;
}


//implementation 
class MyPlayer extends MediaPlayer {
  play(){
    console.log("Music Playing...")
  }
  pause(){
    console.log("Music pause...")
  }
  stop(){
    console.log("Music is Stop and Stop Now And Now")
  }
}

const musicPlayer = new MyPlayer;
musicPlayer.stop()