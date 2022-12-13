// Not able to understand from Brad traversy

// From https://www.dofactory.com/javascript/design-patterns/state
var TrafficLight = function () {
  var count = 0;
  var currentState = new Red(this);

  this.change = function (state) {
      // limits number of changes
      if (count++ >= 10) return;
      currentState = state;
      currentState.go();
  };

  this.start = function () {
      currentState.go();
  };
}

var Red = function (light) {
  this.light = light;

  this.go = function () {
      console.log("Red --> for 1 minute");
      light.change(new Green(light));
  }
};

var Yellow = function (light) {
  this.light = light;

  this.go = function () {
      console.log("Yellow --> for 10 seconds");
      light.change(new Red(light));
  }
};

var Green = function (light) {
  this.light = light;

  this.go = function () {
      console.log("Green --> for 1 minute");
      light.change(new Yellow(light));
  }
};

function run() {
  var light = new TrafficLight();
  light.start();
}

run();


/*
/// Summary ///
// Sources
- https://deviq.com/design-patterns/state-design-pattern
- https://www.oreilly.com/library/view/learning-python-design/9781785888038/ch10s03.html
- https://beetechnical.com/tech-tutorial/state-design-patterns-when-to-use-pros-and-cons/


Why?
- minimizes conditional complexity
- It eliminates the need for the if/else or switch/case conditional logic in objects.
- it is also easier to add states to support additional behavior.

Some real life examples:
- ATM Machine
- Website Order States
- TV remote - by using the remote you can change the channel, increase volume, and put on mute. But to do all these operations the state of TV should be switched on.
- For example, in the TV remote scenario, we could have implement the behavior by simply writing one class and method that will ask for a parameter and perform an action (switch the TV on/off) with an if/else block.

- An object with a relatively complex set of possible states applies the state model. Especially applied for an object with multiple business rules on how state transitions occur and what happens next.

Why should not use?
- The State pattern requires a lot of code to be written.
- Depending on how many different state transition methods are defined, and how many possible states an object can be in, there can quickly be dozens or more different methods that must be written.
- For N states with M transition methods, the total number of methods necessary will be (N+1)*M
*/